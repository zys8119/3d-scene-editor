import { onBeforeMount, inject } from 'vue';
import { useSsrAdapter } from '@css-render/vue3-ssr';
import { configProviderInjectionKey } from '../config-provider/src/context';
import globalStyle from '../_styles/global/index.cssr';
import { throwError } from '../_utils';
import { cssrAnchorMetaName } from './common';
export default function useStyle(mountId, style, clsPrefixRef) {
    if (!style) {
        if (process.env.NODE_ENV !== 'production')
            throwError('use-style', 'No style is specified.');
        return;
    }
    const ssrAdapter = useSsrAdapter();
    const NConfigProvider = inject(configProviderInjectionKey, null);
    const mountStyle = () => {
        const clsPrefix =
            clsPrefixRef === null || clsPrefixRef === void 0
                ? void 0
                : clsPrefixRef.value;
        style.mount({
            id: clsPrefix === void 0 ? mountId : clsPrefix + mountId,
            head: true,
            anchorMetaName: cssrAnchorMetaName,
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
            globalStyle.mount({
                id: 'n-global',
                head: true,
                anchorMetaName: cssrAnchorMetaName,
                ssr: ssrAdapter,
            });
        }
    };
    if (ssrAdapter) {
        mountStyle();
    } else {
        onBeforeMount(mountStyle);
    }
}
