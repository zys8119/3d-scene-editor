import { computed, h, defineComponent, mergeProps, watchEffect } from 'vue';
import { useConfig, useTheme, useThemeClass } from '../../_mixins';
import { useRtl } from '../../_mixins/use-rtl';
import { warnOnce } from '../../_utils';
import style from './styles/index.cssr';
import { collapseTransitionLight } from '../styles';
import { NFadeInExpandTransition } from '../../_internal';
export const collapseTransitionProps = Object.assign(
    Object.assign({}, useTheme.props),
    {
        show: {
            type: Boolean,
            default: true,
        },
        appear: Boolean,
        collapsed: {
            type: Boolean,
            default: void 0,
        },
    }
);
export default defineComponent({
    name: 'CollapseTransition',
    props: collapseTransitionProps,
    inheritAttrs: false,
    setup(props) {
        if (process.env.NODE_ENV !== 'production') {
            watchEffect(() => {
                if (props.collapsed !== void 0) {
                    warnOnce(
                        'collapse-transition',
                        '`collapsed` is deprecated, please use `show` instead'
                    );
                }
            });
        }
        const { mergedClsPrefixRef, inlineThemeDisabled, mergedRtlRef } =
            useConfig(props);
        const mergedThemeRef = useTheme(
            'CollapseTransition',
            '-collapse-transition',
            style,
            collapseTransitionLight,
            props,
            mergedClsPrefixRef
        );
        const rtlEnabledRef = useRtl(
            'CollapseTransition',
            mergedRtlRef,
            mergedClsPrefixRef
        );
        const mergedShowRef = computed(() => {
            if (props.collapsed !== void 0) {
                return props.collapsed;
            }
            return props.show;
        });
        const cssVarsRef = computed(() => {
            const {
                self: { bezier },
            } = mergedThemeRef.value;
            return {
                '--n-bezier': bezier,
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? useThemeClass('collapse-transition', void 0, cssVarsRef, props)
            : void 0;
        return {
            rtlEnabled: rtlEnabledRef,
            mergedShow: mergedShowRef,
            mergedClsPrefix: mergedClsPrefixRef,
            cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
            themeClass:
                themeClassHandle === null || themeClassHandle === void 0
                    ? void 0
                    : themeClassHandle.themeClass,
            onRender:
                themeClassHandle === null || themeClassHandle === void 0
                    ? void 0
                    : themeClassHandle.onRender,
        };
    },
    render() {
        return h(
            NFadeInExpandTransition,
            { appear: this.appear },
            {
                default: () => {
                    var _a;
                    if (!this.mergedShow) return;
                    (_a = this.onRender) === null || _a === void 0
                        ? void 0
                        : _a.call(this);
                    return h(
                        'div',
                        mergeProps(
                            {
                                class: [
                                    `${this.mergedClsPrefix}-collapse-transition`,
                                    this.rtlEnabled &&
                                        `${this.mergedClsPrefix}-collapse-transition--rtl`,
                                    this.themeClass,
                                ],
                                style: this.cssVars,
                            },
                            this.$attrs
                        ),
                        this.$slots
                    );
                },
            }
        );
    },
});
