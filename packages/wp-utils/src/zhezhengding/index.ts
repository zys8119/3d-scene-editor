// @ts-ignore
import { Config, PageConfig, UserConfig } from './type';
import dd from 'gdt-jsapi';
declare const aplus_queue: any;

// 浙政钉--基础埋点
export function createBaseBurialPoint(config: PageConfig) {
    const allConfig = config as PageConfig & Config;
    if (!allConfig.enable) return;
    try {
        aplus_queue.push({
            action: 'aplus.setMetaInfo',
            arguments: ['aplus-waiting', 'MAN'],
        });
        aplus_queue.push({
            action: 'aplus.sendPV',
            arguments: [
                {
                    is_auto: false,
                },
                {
                    sapp_id: allConfig.sapp_id,
                    sapp_name: allConfig.sapp_name,
                    page_id: allConfig.page_id,
                    page_name: allConfig.page_name,
                    page_url: allConfig.page_url,
                },
            ],
        });
    } catch (e) {
        console.log(e);
    }
}

// 浙政钉--用户信息埋点
export function createUserInfoBurialPoint(config: UserConfig) {
    const allConfig = config as UserConfig & Config;
    if (!allConfig.enable) return;
    try {
        aplus_queue.push({
            action: 'aplus.setMetaInfo',
            arguments: ['_hold', 'BLOCK'],
        });
        aplus_queue.push({
            action: 'aplus.setMetaInfo',
            arguments: ['_user_nick', allConfig._user_nick],
        });
        aplus_queue.push({
            action: 'aplus.setMetaInfo',
            arguments: ['_user_id', allConfig._user_id],
        });
        if (allConfig._dev_id) {
            aplus_queue.push({
                action: 'aplus.setMetaInfo',
                arguments: ['_dev_id', allConfig._dev_id],
            });
        }
        aplus_queue.push({
            action: 'aplus.setMetaInfo',
            arguments: ['_hold', 'START'],
        });
    } catch (e) {
        console.log(e);
    }
}

// 浙政钉--免登授权 获取code
export function getAuthCode() {
    let code = null;
    return new Promise((resolve, reject) => {
        try {
            dd.ready(() => {
                dd.getAuthCode({})
                    .then(async (result) => {
                        if (result) {
                            code = result.code || result.auth_code;
                            resolve(code);
                        }
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        } catch (e) {
            reject(e);
        }
    });
}
