import { onBeforeMount, watchEffect, computed } from 'vue';
import { exists } from 'css-render';
import { useSsrAdapter } from '@css-render/vue3-ssr';
import { cssrAnchorMetaName } from './common';
export function useRtl(mountId, rtlStateRef, clsPrefixRef) {
    if (!rtlStateRef) return void 0;
    const ssrAdapter = useSsrAdapter();
    const componentRtlStateRef = computed(() => {
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
        watchEffect(() => {
            const { value: clsPrefix } = clsPrefixRef;
            const id = `${clsPrefix}${mountId}Rtl`;
            if (exists(id, ssrAdapter)) return;
            const { value: componentRtlState } = componentRtlStateRef;
            if (!componentRtlState) return;
            componentRtlState.style.mount({
                id,
                head: true,
                anchorMetaName: cssrAnchorMetaName,
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
        onBeforeMount(mountStyle);
    }
    return componentRtlStateRef;
}
