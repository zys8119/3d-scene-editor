import { Config } from './type';
import lodash from 'lodash';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const functionNames = [
    'createBaseBurialPointZzd',
    'createUserInfoBurialPointZzd',
];

// 浙政钉初始化
export async function init(config: Config) {
    if (!config.enable) return false;
    const scriptTemplate = lodash.template(
        readFileSync(resolve(__dirname, './zzd.html'), 'utf-8')
    )(config);
    return {
        enforce: 'post',
        transformIndexHtml(html: string) {
            return html.replace(/(<\/head>)/, `${scriptTemplate}$1`);
        },
        transform(code: string, id: string) {
            const isTransformFile =
                new RegExp(functionNames.join('|'), 'i').test(code) &&
                !/node_modules/.test(id) &&
                /\.(vue|tsx|ts|js)/.test(id);
            const regFunction = new RegExp(
                `((${functionNames.join('|')})\\()([^\\)]*)(\\))`,
                'ig'
            );
            if (isTransformFile) {
                const newCode = code.replace(
                    regFunction,
                    function (m, $1, $2, $3, $4) {
                        try {
                            const data = Object.assign(
                                new Function(`return ${$3}`)() || {},
                                config
                            );
                            return `${$1}${JSON.stringify(data)}${$4}`;
                        } catch (e) {
                            return m;
                        }
                    }
                );
                return newCode;
            }
            return code;
        },
    };
}
