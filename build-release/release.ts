import { Releases } from 'gitlab-releases';
import GetNV from 'getnv';
import { resolve } from 'path';
import { readFileSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';
import { template, merge } from 'lodash';
import BuildServe from 'ts-node-build';
import config, { ProjectName } from './config';
import terminalOuInput, { Config } from './terminalOutInput';
const ncol = require('ncol');
(async () => {
    const gitUserName = execSync('git config --global user.name').toString();
    const gitUserEmail = execSync('git config --global user.email').toString();
    const gitUserConfig =
        config[gitUserName.trim()] || config[gitUserEmail.trim()];
    const { token } = gitUserConfig || {};
    if (token) {
        let isSuccess = false;
        let oldVersionInfo = null;
        const versionSavePath = resolve(__dirname, 'tmp/package.json');
        try {
            oldVersionInfo = readFileSync(versionSavePath);
        } catch (e) {
            // err
        }
        const v = GetNV({
            cwd: __dirname,
            rm: false,
        }).patch();
        process.on('exit', () => {
            // 防止程序意外退出导致版本叠加
            if (oldVersionInfo && !isSuccess) {
                writeFileSync(versionSavePath, oldVersionInfo);
                ncol.error('发布失败');
            }
        });
        const log = readFileSync(resolve(process.cwd(), 'src/global.ts'))
            .toString()
            .match(/console\.log\(.*\)/);
        const logReg = new RegExp(
            log[0]
                .replace(/\./g, '\\.')
                .replace(/\(/g, '\\(')
                .replace(/\)/g, '\\)')
                .replace(/'/g, '.')
                .replace(/"/g, '.')
                .replace('${name} v${version}', '.*')
                .replace(/\s/g, '.*')
        );
        await new BuildServe({
            inputFiles: ['dist/assets/**index**.js'],
            isOverlay: true,
            removeDistDir: false,
            rules: [
                {
                    rule: /./,
                    transform({
                        file,
                        code,
                    }): Promise<string | void> | string | void {
                        if (logReg.test(code)) {
                            // 更新打包资源版本
                            return (code as string).replace(
                                logReg,
                                template(log[0])({
                                    name: 'zhijiasoft',
                                    version: v,
                                })
                            );
                        }
                        return code;
                    },
                },
            ],
        }).compile();
        const descriptionInit = async (
            config: Config,
            result: string = '',
            isOutHelp = true
        ) => {
            const reg = /(;|；)$/;
            result +=
                `${isOutHelp ? '' : '\n\n'}` +
                (await new terminalOuInput(
                    merge(config, { isOutHelp })
                ).init());
            if (!reg.test(result)) {
                result = `${await descriptionInit(config, result, false)}`;
            }
            return result.replace(reg, '');
        };
        const description =
            [
                '#### 发布信息:',
                `**发布人员**：${gitUserConfig.username}`,
                `**发布账号**：${gitUserName.trim() || gitUserEmail.trim()}`,
                '**版本描述如下**：',
                '<hr/>',
                '',
            ].join('\n\n') +
            (await descriptionInit({
                message: `${[
                    '请输入Releases发布描述, 支持Markdown 语法,最后以分号(;)结束输入',
                    '例如：',
                    '- 修复了xxxBug;',
                    '- 优化了xxx逻辑;',
                ]
                    .map((e) => `  ${e.trim()}`)
                    .join('\n')}`,
                error: '输入有误！不选择该选项',
            })) +
            '\n<hr/>';
        let suffix = '';
        const suffixQuery = await descriptionInit({
            message: '是否添加版本后缀？y or n, 最后以分号(;)结束输入',
        });
        if (suffixQuery === 'y') {
            suffix =
                '-' +
                (await descriptionInit({
                    message:
                        '请输入版本后缀类型，内容禁止含有空字符, 最后以分号(;)结束输入',
                }));
        }
        let ref = 'master';
        const refQuery = await descriptionInit({
            message:
                '是否指定tag分支名称或分支Head？y or n, 默认master分支, 最后以分号(;)结束输入',
        });
        if (refQuery === 'y') {
            ref =
                (await descriptionInit({
                    message: '请输入指定的分支或head',
                })) || ref;
        }

        const name = `Releases v${v}${suffix}`;
        const tag_name = `${v}${suffix}`;
        ncol.info('正在打包并发布中, 请稍后...');
        const releasesVm = new Releases({
            token,
            host: 'https://gitlab.zhijiasoft.com',
            baseURL: '/api/v4',
            projectName: ProjectName,
        });
        try {
            await releasesVm.create({
                description,
                ref,
                name,
                tag_name,
                zipDir: 'dist/**/*',
            });
        } catch (e) {
            if (e.response.data.message === 'Release already exists') {
                ncol.error(
                    `[Release already exists] 该(${tag_name})版本已存在.`
                );
                ncol.warn('生产环境最新的前5个Release如下：');
                const list = (await releasesVm.list())
                    .map(({ tag_name, name }: any) => ({
                        tag_name,
                        name,
                    }))
                    .slice(0, 5);
                list.forEach(({ tag_name, name }: any) => {
                    ncol.warn(
                        `【Name】：${name} ----------> 【TagName】：${tag_name} `
                    );
                });
                ncol.error('请尝试手动更改至最新的版本号再次尝试发布！');
                process.exit();
            } else {
                throw e;
            }
        }
        ncol.success('发布完成');
        isSuccess = true;
    } else {
        throw new Error('请先配置您对应的git Releases 配置');
    }
})();
