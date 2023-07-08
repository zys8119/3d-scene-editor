import { inject, computed } from 'vue';
import { configProviderInjectionKey } from '../config-provider/src/context';
export const defaultClsPrefix = 'n';
export default function useConfig(
    props = {},
    options = {
        defaultBordered: true,
    }
) {
    const NConfigProvider = inject(configProviderInjectionKey, null);
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
        mergedBorderedRef: computed(() => {
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
        mergedClsPrefixRef: computed(() => {
            const clsPrefix =
                NConfigProvider === null || NConfigProvider === void 0
                    ? void 0
                    : NConfigProvider.mergedClsPrefixRef.value;
            return clsPrefix || defaultClsPrefix;
        }),
        namespaceRef: computed(() =>
            NConfigProvider === null || NConfigProvider === void 0
                ? void 0
                : NConfigProvider.mergedNamespaceRef.value
        ),
    };
}
