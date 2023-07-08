var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.createTheme = void 0;
const vue_1 = require('vue');
const lodash_1 = require('lodash');
const vue3_ssr_1 = require('@css-render/vue3-ssr');
const index_cssr_1 = __importDefault(require('../_styles/global/index.cssr'));
const context_1 = require('../config-provider/src/context');
const common_1 = require('./common');
function createTheme(theme) {
    return theme;
}
exports.createTheme = createTheme;
function useTheme(
    resolveId,
    mountId,
    style,
    defaultTheme,
    props,
    clsPrefixRef
) {
    const ssrAdapter = (0, vue3_ssr_1.useSsrAdapter)();
    const NConfigProvider = (0, vue_1.inject)(
        context_1.configProviderInjectionKey,
        null
    );
    if (style) {
        const mountStyle = () => {
            const clsPrefix =
                clsPrefixRef === null || clsPrefixRef === void 0
                    ? void 0
                    : clsPrefixRef.value;
            style.mount({
                id: clsPrefix === void 0 ? mountId : clsPrefix + mountId,
                head: true,
                props: {
                    bPrefix: clsPrefix ? `.${clsPrefix}-` : void 0,
                },
                anchorMetaName: common_1.cssrAnchorMetaName,
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
    const mergedThemeRef = (0, vue_1.computed)(() => {
        var _a;
        const {
            theme: { common: selfCommon, self, peers = {} } = {},
            themeOverrides: selfOverrides = {},
            builtinThemeOverrides: builtinOverrides = {},
        } = props;
        const { common: selfCommonOverrides, peers: peersOverrides } =
            selfOverrides;
        const {
            common: globalCommon = void 0,
            [resolveId]: {
                common: globalSelfCommon = void 0,
                self: globalSelf = void 0,
                peers: globalPeers = {},
            } = {},
        } =
            (NConfigProvider === null || NConfigProvider === void 0
                ? void 0
                : NConfigProvider.mergedThemeRef.value) || {};
        const {
            common: globalCommonOverrides = void 0,
            [resolveId]: globalSelfOverrides = {},
        } =
            (NConfigProvider === null || NConfigProvider === void 0
                ? void 0
                : NConfigProvider.mergedThemeOverridesRef.value) || {};
        const {
            common: globalSelfCommonOverrides,
            peers: globalPeersOverrides = {},
        } = globalSelfOverrides;
        const mergedCommon = (0, lodash_1.merge)(
            {},
            selfCommon ||
                globalSelfCommon ||
                globalCommon ||
                defaultTheme.common,
            globalCommonOverrides,
            globalSelfCommonOverrides,
            selfCommonOverrides
        );
        const mergedSelf = (0, lodash_1.merge)(
            (_a = self || globalSelf || defaultTheme.self) === null ||
                _a === void 0
                ? void 0
                : _a(mergedCommon),
            builtinOverrides,
            globalSelfOverrides,
            selfOverrides
        );
        return {
            common: mergedCommon,
            self: mergedSelf,
            peers: (0, lodash_1.merge)(
                {},
                defaultTheme.peers,
                globalPeers,
                peers
            ),
            peerOverrides: (0, lodash_1.merge)(
                {},
                builtinOverrides.peers,
                globalPeersOverrides,
                peersOverrides
            ),
        };
    });
    return mergedThemeRef;
}
useTheme.props = {
    theme: Object,
    themeOverrides: Object,
    builtinThemeOverrides: Object,
};
exports.default = useTheme;
