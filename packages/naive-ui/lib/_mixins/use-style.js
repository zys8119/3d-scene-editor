var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
const vue_1 = require('vue');
const vue3_ssr_1 = require('@css-render/vue3-ssr');
const context_1 = require('../config-provider/src/context');
const index_cssr_1 = __importDefault(require('../_styles/global/index.cssr'));
const _utils_1 = require('../_utils');
const common_1 = require('./common');
function useStyle(mountId, style, clsPrefixRef) {
    if (!style) {
        if (process.env.NODE_ENV !== 'production')
            (0, _utils_1.throwError)('use-style', 'No style is specified.');
        return;
    }
    const ssrAdapter = (0, vue3_ssr_1.useSsrAdapter)();
    const NConfigProvider = (0, vue_1.inject)(
        context_1.configProviderInjectionKey,
        null
    );
    const mountStyle = () => {
        const clsPrefix =
            clsPrefixRef === null || clsPrefixRef === void 0
                ? void 0
                : clsPrefixRef.value;
        style.mount({
            id: clsPrefix === void 0 ? mountId : clsPrefix + mountId,
            head: true,
            anchorMetaName: common_1.cssrAnchorMetaName,
            props: {
                bPrefix: clsPrefix ? `.${clsPrefix}-` : void 0,
            },
            ssr: ssrAdapter,
        });
        if (
            !(NConfigProvider === null || NConfigProvider === void 0
                ? void 0
                : NConfigProvider.preflightStyleDisabled)
        ) {
            index_cssr_1.default.mount({
                id: 'n-global',
                head: true,
                anchorMetaName: common_1.cssrAnchorMetaName,
                ssr: ssrAdapter,
            });
        }
    };
    if (ssrAdapter) {
        mountStyle();
    } else {
        (0, vue_1.onBeforeMount)(mountStyle);
    }
}
exports.default = useStyle;
