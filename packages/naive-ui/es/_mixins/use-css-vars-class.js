import { ref, inject, watchEffect } from 'vue';
import { hash } from 'css-render';
import { useSsrAdapter } from '@css-render/vue3-ssr';
import { configProviderInjectionKey } from '../config-provider/src/context';
import { throwError } from '../_utils';
import { c } from '../_utils/cssr';
export function useThemeClass(componentName, hashRef, cssVarsRef, props) {
    var _a;
    if (!cssVarsRef) throwError('useThemeClass', 'cssVarsRef is not passed');
    const mergedThemeHashRef =
        (_a = inject(configProviderInjectionKey, null)) === null ||
        _a === void 0
            ? void 0
            : _a.mergedThemeHashRef;
    const themeClassRef = ref('');
    const ssrAdapter = useSsrAdapter();
    let renderCallback;
    const hashClassPrefix = `__${componentName}`;
    const mountStyle = () => {
        let finalThemeHash = hashClassPrefix;
        const hashValue = hashRef ? hashRef.value : void 0;
        const themeHash =
            mergedThemeHashRef === null || mergedThemeHashRef === void 0
                ? void 0
                : mergedThemeHashRef.value;
        if (themeHash) finalThemeHash += '-' + themeHash;
        if (hashValue) finalThemeHash += '-' + hashValue;
        const { themeOverrides, builtinThemeOverrides } = props;
        if (themeOverrides) {
            finalThemeHash += '-' + hash(JSON.stringify(themeOverrides));
        }
        if (builtinThemeOverrides) {
            finalThemeHash += '-' + hash(JSON.stringify(builtinThemeOverrides));
        }
        themeClassRef.value = finalThemeHash;
        renderCallback = () => {
            const cssVars = cssVarsRef.value;
            let style = '';
            for (const key in cssVars) {
                style += `${key}: ${cssVars[key]};`;
            }
            c(`.${finalThemeHash}`, style).mount({
                id: finalThemeHash,
                ssr: ssrAdapter,
            });
            renderCallback = void 0;
        };
    };
    watchEffect(() => {
        mountStyle();
    });
    return {
        themeClass: themeClassRef,
        onRender: () => {
            renderCallback === null || renderCallback === void 0
                ? void 0
                : renderCallback();
        },
    };
}
