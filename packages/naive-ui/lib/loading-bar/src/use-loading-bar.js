Object.defineProperty(exports, '__esModule', { value: true });
exports.useLoadingBar = void 0;
const vue_1 = require('vue');
const context_1 = require('./context');
const _utils_1 = require('../../_utils');
function useLoadingBar() {
    const loadingBar = (0, vue_1.inject)(
        context_1.loadingBarApiInjectionKey,
        null
    );
    if (loadingBar === null) {
        (0, _utils_1.throwError)(
            'use-loading-bar',
            'No outer <n-loading-bar-provider /> founded.'
        );
    }
    return loadingBar;
}
exports.useLoadingBar = useLoadingBar;
