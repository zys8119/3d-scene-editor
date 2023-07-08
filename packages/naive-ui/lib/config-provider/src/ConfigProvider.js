Object.defineProperty(exports, '__esModule', { value: true });
exports.configProviderProps = void 0;
const vue_1 = require('vue');
const vooks_1 = require('vooks');
const lodash_1 = require('lodash');
const css_render_1 = require('css-render');
const _utils_1 = require('../../_utils');
const _mixins_1 = require('../../_mixins');
const context_1 = require('./context');
exports.configProviderProps = {
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
            (0, _utils_1.warn)(
                'config-provider',
                '`as` is deprecated, please use `tag` instead.'
            );
            return true;
        },
        default: void 0,
    },
};
exports.default = (0, vue_1.defineComponent)({
    name: 'ConfigProvider',
    alias: ['App'],
    props: exports.configProviderProps,
    setup(props) {
        const NConfigProvider = (0, vue_1.inject)(
            context_1.configProviderInjectionKey,
            null
        );
        const mergedThemeRef = (0, vue_1.computed)(() => {
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
        const mergedThemeOverridesRef = (0, vue_1.computed)(() => {
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
                    return (0, lodash_1.merge)(
                        {},
                        inheritedThemeOverrides,
                        themeOverrides
                    );
                }
            }
        });
        const mergedNamespaceRef = (0, vooks_1.useMemo)(() => {
            const { namespace } = props;
            return namespace === void 0
                ? NConfigProvider === null || NConfigProvider === void 0
                    ? void 0
                    : NConfigProvider.mergedNamespaceRef.value
                : namespace;
        });
        const mergedBorderedRef = (0, vooks_1.useMemo)(() => {
            const { bordered } = props;
            return bordered === void 0
                ? NConfigProvider === null || NConfigProvider === void 0
                    ? void 0
                    : NConfigProvider.mergedBorderedRef.value
                : bordered;
        });
        const mergedIconsRef = (0, vue_1.computed)(() => {
            const { icons } = props;
            return icons === void 0
                ? NConfigProvider === null || NConfigProvider === void 0
                    ? void 0
                    : NConfigProvider.mergedIconsRef.value
                : icons;
        });
        const mergedComponentPropsRef = (0, vue_1.computed)(() => {
            const { componentOptions } = props;
            if (componentOptions !== void 0) return componentOptions;
            return NConfigProvider === null || NConfigProvider === void 0
                ? void 0
                : NConfigProvider.mergedComponentPropsRef.value;
        });
        const mergedClsPrefixRef = (0, vue_1.computed)(() => {
            const { clsPrefix } = props;
            if (clsPrefix !== void 0) return clsPrefix;
            return NConfigProvider === null || NConfigProvider === void 0
                ? void 0
                : NConfigProvider.mergedClsPrefixRef.value;
        });
        const mergedRtlRef = (0, vue_1.computed)(() => {
            var _a;
            const { rtl } = props;
            if (rtl === void 0) {
                return NConfigProvider === null || NConfigProvider === void 0
                    ? void 0
                    : NConfigProvider.mergedRtlRef.value;
            }
            const rtlEnabledState = {};
            for (const rtlInfo of rtl) {
                rtlEnabledState[rtlInfo.name] = (0, vue_1.markRaw)(rtlInfo);
                (_a = rtlInfo.peers) === null || _a === void 0
                    ? void 0
                    : _a.forEach((peerRtlInfo) => {
                          if (!(peerRtlInfo.name in rtlEnabledState)) {
                              rtlEnabledState[peerRtlInfo.name] = (0,
                              vue_1.markRaw)(peerRtlInfo);
                          }
                      });
            }
            return rtlEnabledState;
        });
        const mergedBreakpointsRef = (0, vue_1.computed)(() => {
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
        const mergedThemeHashRef = (0, vue_1.computed)(() => {
            const { value: theme } = mergedThemeRef;
            const { value: mergedThemeOverrides } = mergedThemeOverridesRef;
            const hasThemeOverrides =
                mergedThemeOverrides &&
                Object.keys(mergedThemeOverrides).length !== 0;
            const themeName =
                theme === null || theme === void 0 ? void 0 : theme.name;
            if (themeName) {
                if (hasThemeOverrides) {
                    return `${themeName}-${(0, css_render_1.hash)(
                        JSON.stringify(mergedThemeOverridesRef.value)
                    )}`;
                }
                return themeName;
            } else {
                if (hasThemeOverrides) {
                    return (0, css_render_1.hash)(
                        JSON.stringify(mergedThemeOverridesRef.value)
                    );
                }
                return '';
            }
        });
        (0, vue_1.provide)(context_1.configProviderInjectionKey, {
            mergedThemeHashRef,
            mergedBreakpointsRef,
            mergedRtlRef,
            mergedIconsRef,
            mergedComponentPropsRef,
            mergedBorderedRef,
            mergedNamespaceRef,
            mergedClsPrefixRef,
            mergedLocaleRef: (0, vue_1.computed)(() => {
                const { locale } = props;
                if (locale === null) return void 0;
                return locale === void 0
                    ? NConfigProvider === null || NConfigProvider === void 0
                        ? void 0
                        : NConfigProvider.mergedLocaleRef.value
                    : locale;
            }),
            mergedDateLocaleRef: (0, vue_1.computed)(() => {
                const { dateLocale } = props;
                if (dateLocale === null) return void 0;
                return dateLocale === void 0
                    ? NConfigProvider === null || NConfigProvider === void 0
                        ? void 0
                        : NConfigProvider.mergedDateLocaleRef.value
                    : dateLocale;
            }),
            mergedHljsRef: (0, vue_1.computed)(() => {
                const { hljs } = props;
                return hljs === void 0
                    ? NConfigProvider === null || NConfigProvider === void 0
                        ? void 0
                        : NConfigProvider.mergedHljsRef.value
                    : hljs;
            }),
            mergedKatexRef: (0, vue_1.computed)(() => {
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
            ? (0, vue_1.h)(
                  this.as || this.tag,
                  {
                      class: `${
                          this.mergedClsPrefix || _mixins_1.defaultClsPrefix
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
