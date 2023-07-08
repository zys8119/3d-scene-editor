import { inject, computed, onBeforeMount } from 'vue';
import { merge } from 'lodash-es';
import { useSsrAdapter } from '@css-render/vue3-ssr';
import globalStyle from '../_styles/global/index.cssr';
import { configProviderInjectionKey } from '../config-provider/src/context';
import { cssrAnchorMetaName } from './common';
export function createTheme(theme) {
    return theme;
}
function useTheme(
    resolveId,
    mountId,
    style,
    defaultTheme,
    props,
    clsPrefixRef
) {
    const ssrAdapter = useSsrAdapter();
    const NConfigProvider = inject(configProviderInjectionKey, null);
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
                anchorMetaName: cssrAnchorMetaName,
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
    const mergedThemeRef = computed(() => {
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
        const mergedCommon = merge(
            {},
            selfCommon ||
                globalSelfCommon ||
                globalCommon ||
                defaultTheme.common,
            globalCommonOverrides,
            globalSelfCommonOverrides,
            selfCommonOverrides
        );
        const mergedSelf = merge(
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
            peers: merge({}, defaultTheme.peers, globalPeers, peers),
            peerOverrides: merge(
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
export default useTheme;
