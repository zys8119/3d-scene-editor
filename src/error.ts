import type { GlobalError } from '@/config/typings';
import type { App } from 'vue';

export default {
    install(
        app: App<Element>,
        options?: {
            errorHandle?: (error: GlobalError) => void;
        }
    ) {
        window.onerror = (msg, url, line, col, error) => {
            options?.errorHandle?.({
                type: 'global',
                msg,
                url,
                line,
                col,
                error,
            });
        };
        app.config.errorHandler = (err, vm, info) => {
            options?.errorHandle?.({
                type: 'vue',
                msg: info,
                vm,
                error: err,
            });
        };
    },
};
