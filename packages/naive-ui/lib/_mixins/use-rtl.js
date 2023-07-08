Object.defineProperty(exports, '__esModule', { value: true });
exports.useRtl = void 0;
const vue_1 = require('vue');
const css_render_1 = require('css-render');
const vue3_ssr_1 = require('@css-render/vue3-ssr');
const common_1 = require('./common');
function useRtl(mountId, rtlStateRef, clsPrefixRef) {
    if (!rtlStateRef) return void 0;
    const ssrAdapter = (0, vue3_ssr_1.useSsrAdapter)();
    const componentRtlStateRef = (0, vue_1.computed)(() => {
        const { value: rtlState } = rtlStateRef;
        if (!rtlState) {
            return void 0;
        }
        const componentRtlState = rtlState[mountId];
        if (!componentRtlState) {
            return void 0;
        }
        return componentRtlState;
    });
    const mountStyle = () => {
        (0, vue_1.watchEffect)(() => {
            const { value: clsPrefix } = clsPrefixRef;
            const id = `${clsPrefix}${mountId}Rtl`;
            if ((0, css_render_1.exists)(id, ssrAdapter)) return;
            const { value: componentRtlState } = componentRtlStateRef;
            if (!componentRtlState) return;
            componentRtlState.style.mount({
                id,
                head: true,
                anchorMetaName: common_1.cssrAnchorMetaName,
                props: {
                    bPrefix: clsPrefix ? `.${clsPrefix}-` : void 0,
                },
                ssr: ssrAdapter,
            });
        });
    };
    if (ssrAdapter) {
        mountStyle();
    } else {
        (0, vue_1.onBeforeMount)(mountStyle);
    }
    return componentRtlStateRef;
}
exports.useRtl = useRtl;
