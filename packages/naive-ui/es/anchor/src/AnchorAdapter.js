import { h, defineComponent, computed, ref } from 'vue';
import { NAffix } from '../../affix';
import { affixProps, affixPropKeys } from '../../affix/src/Affix';
import { useConfig, useTheme, useThemeClass } from '../../_mixins';
import { keep } from '../../_utils';
import { anchorLight } from '../styles';
import style from './styles/index.cssr';
import NBaseAnchor, { baseAnchorProps, baseAnchorPropKeys } from './BaseAnchor';
export const anchorProps = Object.assign(
    Object.assign(
        Object.assign(Object.assign({}, useTheme.props), { affix: Boolean }),
        affixProps
    ),
    baseAnchorProps
);
export default defineComponent({
    name: 'Anchor',
    props: anchorProps,
    setup(props, { slots }) {
        const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
        const themeRef = useTheme(
            'Anchor',
            '-anchor',
            style,
            anchorLight,
            props,
            mergedClsPrefixRef
        );
        const anchorRef = ref(null);
        const cssVarsRef = computed(() => {
            const {
                self: {
                    railColor,
                    linkColor,
                    railColorActive,
                    linkTextColor,
                    linkTextColorHover,
                    linkTextColorPressed,
                    linkTextColorActive,
                    linkFontSize,
                    railWidth,
                    linkPadding,
                    borderRadius,
                },
                common: { cubicBezierEaseInOut },
            } = themeRef.value;
            return {
                '--n-link-border-radius': borderRadius,
                '--n-link-color': linkColor,
                '--n-link-font-size': linkFontSize,
                '--n-link-text-color': linkTextColor,
                '--n-link-text-color-hover': linkTextColorHover,
                '--n-link-text-color-active': linkTextColorActive,
                '--n-link-text-color-pressed': linkTextColorPressed,
                '--n-link-padding': linkPadding,
                '--n-bezier': cubicBezierEaseInOut,
                '--n-rail-color': railColor,
                '--n-rail-color-active': railColorActive,
                '--n-rail-width': railWidth,
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? useThemeClass('anchor', void 0, cssVarsRef, props)
            : void 0;
        return {
            scrollTo(href) {
                var _a;
                (_a = anchorRef.value) === null || _a === void 0
                    ? void 0
                    : _a.setActiveHref(href);
            },
            renderAnchor: () => {
                themeClassHandle === null || themeClassHandle === void 0
                    ? void 0
                    : themeClassHandle.onRender();
                return h(
                    NBaseAnchor,
                    Object.assign(
                        {
                            ref: anchorRef,
                            style: inlineThemeDisabled
                                ? void 0
                                : cssVarsRef.value,
                            class:
                                themeClassHandle === null ||
                                themeClassHandle === void 0
                                    ? void 0
                                    : themeClassHandle.themeClass.value,
                        },
                        keep(props, baseAnchorPropKeys),
                        { mergedClsPrefix: mergedClsPrefixRef.value }
                    ),
                    slots
                );
            },
        };
    },
    render() {
        return !this.affix
            ? this.renderAnchor()
            : h(NAffix, Object.assign({}, keep(this, affixPropKeys)), {
                  default: this.renderAnchor,
              });
    },
});
