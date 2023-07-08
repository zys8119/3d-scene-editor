Object.defineProperty(exports, '__esModule', { value: true });
exports.defaultClsPrefix = void 0;
const vue_1 = require('vue');
const context_1 = require('../config-provider/src/context');
exports.defaultClsPrefix = 'n';
function useConfig(
    props = {},
    options = {
        defaultBordered: true,
    }
) {
    const NConfigProvider = (0, vue_1.inject)(
        context_1.configProviderInjectionKey,
        null
    );
    return {
        inlineThemeDisabled:
            NConfigProvider === null || NConfigProvider === void 0
                ? void 0
                : NConfigProvider.inlineThemeDisabled,
        mergedRtlRef:
            NConfigProvider === null || NConfigProvider === void 0
                ? void 0
                : NConfigProvider.mergedRtlRef,
        mergedComponentPropsRef:
            NConfigProvider === null || NConfigProvider === void 0
                ? void 0
                : NConfigProvider.mergedComponentPropsRef,
        mergedBreakpointsRef:
            NConfigProvider === null || NConfigProvider === void 0
                ? void 0
                : NConfigProvider.mergedBreakpointsRef,
        mergedBorderedRef: (0, vue_1.computed)(() => {
            var _a, _b;
            const { bordered } = props;
            if (bordered !== void 0) return bordered;
            return (_b =
                (_a =
                    NConfigProvider === null || NConfigProvider === void 0
                        ? void 0
                        : NConfigProvider.mergedBorderedRef.value) !== null &&
                _a !== void 0
                    ? _a
                    : options.defaultBordered) !== null && _b !== void 0
                ? _b
                : true;
        }),
        mergedClsPrefixRef: (0, vue_1.computed)(() => {
            const clsPrefix =
                NConfigProvider === null || NConfigProvider === void 0
                    ? void 0
                    : NConfigProvider.mergedClsPrefixRef.value;
            return clsPrefix || exports.defaultClsPrefix;
        }),
        namespaceRef: (0, vue_1.computed)(() =>
            NConfigProvider === null || NConfigProvider === void 0
                ? void 0
                : NConfigProvider.mergedNamespaceRef.value
        ),
    };
}
exports.default = useConfig;
