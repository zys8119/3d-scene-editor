import { h, inject, computed, defineComponent, provide, markRaw } from 'vue';
import { useMemo } from 'vooks';
import { merge } from 'lodash-es';
import { hash } from 'css-render';
import { warn } from '../../_utils';
import { defaultClsPrefix } from '../../_mixins';
import { configProviderInjectionKey } from './context';
export const configProviderProps = {
    abstract: Boolean,
    bordered: {
        type: Boolean,
        default: void 0,
    },
    clsPrefix: String,
    locale: Object,
    dateLocale: Object,
    namespace: String,
    rtl: Array,
    tag: {
        type: String,
        default: 'div',
    },
    hljs: Object,
    katex: Object,
    theme: Object,
    themeOverrides: Object,
    componentOptions: Object,
    icons: Object,
    breakpoints: Object,
    preflightStyleDisabled: Boolean,
    inlineThemeDisabled: {
        type: Boolean,
        default: void 0,
    },
    as: {
        type: String,
        validator: () => {
            warn(
                'config-provider',
                '`as` is deprecated, please use `tag` instead.'
            );
            return true;
        },
        default: void 0,
    },
};
export default defineComponent({
    name: 'ConfigProvider',
    alias: ['App'],
    props: configProviderProps,
    setup(props) {
        const NConfigProvider = inject(configProviderInjectionKey, null);
        const mergedThemeRef = computed(() => {
            const { theme } = props;
            if (theme === null) return void 0;
            const inheritedTheme =
                NConfigProvider === null || NConfigProvider === void 0
                    ? void 0
                    : NConfigProvider.mergedThemeRef.value;
            return theme === void 0
                ? inheritedTheme
                : inheritedTheme === void 0
                ? theme
                : Object.assign({}, inheritedTheme, theme);
        });
        const mergedThemeOverridesRef = computed(() => {
            const { themeOverrides } = props;
            if (themeOverrides === null) return void 0;
            if (themeOverrides === void 0) {
                return NConfigProvider === null || NConfigProvider === void 0
                    ? void 0
                    : NConfigProvider.mergedThemeOverridesRef.value;
            } else {
                const inheritedThemeOverrides =
                    NConfigProvider === null || NConfigProvider === void 0
                        ? void 0
                        : NConfigProvider.mergedThemeOverridesRef.value;
                if (inheritedThemeOverrides === void 0) {
                    return themeOverrides;
                } else {
                    return merge({}, inheritedThemeOverrides, themeOverrides);
                }
            }
        });
        const mergedNamespaceRef = useMemo(() => {
            const { namespace } = props;
            return namespace === void 0
                ? NConfigProvider === null || NConfigProvider === void 0
                    ? void 0
                    : NConfigProvider.mergedNamespaceRef.value
                : namespace;
        });
        const mergedBorderedRef = useMemo(() => {
            const { bordered } = props;
            return bordered === void 0
                ? NConfigProvider === null || NConfigProvider === void 0
                    ? void 0
                    : NConfigProvider.mergedBorderedRef.value
                : bordered;
        });
        const mergedIconsRef = computed(() => {
            const { icons } = props;
            return icons === void 0
                ? NConfigProvider === null || NConfigProvider === void 0
                    ? void 0
                    : NConfigProvider.mergedIconsRef.value
                : icons;
        });
        const mergedComponentPropsRef = computed(() => {
            const { componentOptions } = props;
            if (componentOptions !== void 0) return componentOptions;
            return NConfigProvider === null || NConfigProvider === void 0
                ? void 0
                : NConfigProvider.mergedComponentPropsRef.value;
        });
        const mergedClsPrefixRef = computed(() => {
            const { clsPrefix } = props;
            if (clsPrefix !== void 0) return clsPrefix;
            return NConfigProvider === null || NConfigProvider === void 0
                ? void 0
                : NConfigProvider.mergedClsPrefixRef.value;
        });
        const mergedRtlRef = computed(() => {
            var _a;
            const { rtl } = props;
            if (rtl === void 0) {
                return NConfigProvider === null || NConfigProvider === void 0
                    ? void 0
                    : NConfigProvider.mergedRtlRef.value;
            }
            const rtlEnabledState = {};
            for (const rtlInfo of rtl) {
                rtlEnabledState[rtlInfo.name] = markRaw(rtlInfo);
                (_a = rtlInfo.peers) === null || _a === void 0
                    ? void 0
                    : _a.forEach((peerRtlInfo) => {
                          if (!(peerRtlInfo.name in rtlEnabledState)) {
                              rtlEnabledState[peerRtlInfo.name] =
                                  markRaw(peerRtlInfo);
                          }
                      });
            }
            return rtlEnabledState;
        });
        const mergedBreakpointsRef = computed(() => {
            return (
                props.breakpoints ||
                (NConfigProvider === null || NConfigProvider === void 0
                    ? void 0
                    : NConfigProvider.mergedBreakpointsRef.value)
            );
        });
        const inlineThemeDisabled =
            props.inlineThemeDisabled ||
            (NConfigProvider === null || NConfigProvider === void 0
                ? void 0
                : NConfigProvider.inlineThemeDisabled);
        const preflightStyleDisabled =
            props.preflightStyleDisabled ||
            (NConfigProvider === null || NConfigProvider === void 0
                ? void 0
                : NConfigProvider.preflightStyleDisabled);
        const mergedThemeHashRef = computed(() => {
            const { value: theme } = mergedThemeRef;
            const { value: mergedThemeOverrides } = mergedThemeOverridesRef;
            const hasThemeOverrides =
                mergedThemeOverrides &&
                Object.keys(mergedThemeOverrides).length !== 0;
            const themeName =
                theme === null || theme === void 0 ? void 0 : theme.name;
            if (themeName) {
                if (hasThemeOverrides) {
                    return `${themeName}-${hash(
                        JSON.stringify(mergedThemeOverridesRef.value)
                    )}`;
                }
                return themeName;
            } else {
                if (hasThemeOverrides) {
                    return hash(JSON.stringify(mergedThemeOverridesRef.value));
                }
                return '';
            }
        });
        provide(configProviderInjectionKey, {
            mergedThemeHashRef,
            mergedBreakpointsRef,
            mergedRtlRef,
            mergedIconsRef,
            mergedComponentPropsRef,
            mergedBorderedRef,
            mergedNamespaceRef,
            mergedClsPrefixRef,
            mergedLocaleRef: computed(() => {
                const { locale } = props;
                if (locale === null) return void 0;
                return locale === void 0
                    ? NConfigProvider === null || NConfigProvider === void 0
                        ? void 0
                        : NConfigProvider.mergedLocaleRef.value
                    : locale;
            }),
            mergedDateLocaleRef: computed(() => {
                const { dateLocale } = props;
                if (dateLocale === null) return void 0;
                return dateLocale === void 0
                    ? NConfigProvider === null || NConfigProvider === void 0
                        ? void 0
                        : NConfigProvider.mergedDateLocaleRef.value
                    : dateLocale;
            }),
            mergedHljsRef: computed(() => {
                const { hljs } = props;
                return hljs === void 0
                    ? NConfigProvider === null || NConfigProvider === void 0
                        ? void 0
                        : NConfigProvider.mergedHljsRef.value
                    : hljs;
            }),
            mergedKatexRef: computed(() => {
                const { katex } = props;
                return katex === void 0
                    ? NConfigProvider === null || NConfigProvider === void 0
                        ? void 0
                        : NConfigProvider.mergedKatexRef.value
                    : katex;
            }),
            mergedThemeRef,
            mergedThemeOverridesRef,
            inlineThemeDisabled: inlineThemeDisabled || false,
            preflightStyleDisabled: preflightStyleDisabled || false,
        });
        return {
            mergedClsPrefix: mergedClsPrefixRef,
            mergedBordered: mergedBorderedRef,
            mergedNamespace: mergedNamespaceRef,
            mergedTheme: mergedThemeRef,
            mergedThemeOverrides: mergedThemeOverridesRef,
        };
    },
    render() {
        var _a, _b, _c, _d;
        return !this.abstract
            ? h(
                  this.as || this.tag,
                  {
                      class: `${
                          this.mergedClsPrefix || defaultClsPrefix
                      }-config-provider`,
                  },
                  (_b = (_a = this.$slots).default) === null || _b === void 0
                      ? void 0
                      : _b.call(_a)
              )
            : (_d = (_c = this.$slots).default) === null || _d === void 0
            ? void 0
            : _d.call(_c);
    },
});
