import { defineComponent, computed, h } from 'vue';
import { useConfig, useTheme, useThemeClass, useRtl } from '../../_mixins';
import { resolveWrappedSlot } from '../../_utils';
import { statisticLight } from '../styles';
import style from './styles/index.cssr';
export const statisticProps = Object.assign(Object.assign({}, useTheme.props), {
    tabularNums: Boolean,
    label: String,
    value: [String, Number],
});
export default defineComponent({
    name: 'Statistic',
    props: statisticProps,
    setup(props) {
        const { mergedClsPrefixRef, inlineThemeDisabled, mergedRtlRef } =
            useConfig(props);
        const themeRef = useTheme(
            'Statistic',
            '-statistic',
            style,
            statisticLight,
            props,
            mergedClsPrefixRef
        );
        const rtlEnabledRef = useRtl(
            'Statistic',
            mergedRtlRef,
            mergedClsPrefixRef
        );
        const cssVarsRef = computed(() => {
            const {
                self: {
                    labelFontWeight,
                    valueFontSize,
                    valueFontWeight,
                    valuePrefixTextColor,
                    labelTextColor,
                    valueSuffixTextColor,
                    valueTextColor,
                    labelFontSize,
                },
                common: { cubicBezierEaseInOut },
            } = themeRef.value;
            return {
                '--n-bezier': cubicBezierEaseInOut,
                '--n-label-font-size': labelFontSize,
                '--n-label-font-weight': labelFontWeight,
                '--n-label-text-color': labelTextColor,
                '--n-value-font-weight': valueFontWeight,
                '--n-value-font-size': valueFontSize,
                '--n-value-prefix-text-color': valuePrefixTextColor,
                '--n-value-suffix-text-color': valueSuffixTextColor,
                '--n-value-text-color': valueTextColor,
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? useThemeClass('statistic', void 0, cssVarsRef, props)
            : void 0;
        return {
            rtlEnabled: rtlEnabledRef,
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
        var _a;
        const {
            mergedClsPrefix,
            $slots: {
                default: defaultSlot,
                label: labelSlot,
                prefix: prefixSlot,
                suffix: suffixSlot,
            },
        } = this;
        (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
        return h(
            'div',
            {
                class: [
                    `${mergedClsPrefix}-statistic`,
                    this.themeClass,
                    this.rtlEnabled && `${mergedClsPrefix}-statistic--rtl`,
                ],
                style: this.cssVars,
            },
            resolveWrappedSlot(labelSlot, (children) =>
                h(
                    'div',
                    { class: `${mergedClsPrefix}-statistic__label` },
                    this.label || children
                )
            ),
            h(
                'div',
                {
                    class: `${mergedClsPrefix}-statistic-value`,
                    style: {
                        fontVariantNumeric: this.tabularNums
                            ? 'tabular-nums'
                            : '',
                    },
                },
                resolveWrappedSlot(
                    prefixSlot,
                    (children) =>
                        children &&
                        h(
                            'span',
                            {
                                class: `${mergedClsPrefix}-statistic-value__prefix`,
                            },
                            children
                        )
                ),
                this.value !== void 0
                    ? h(
                          'span',
                          {
                              class: `${mergedClsPrefix}-statistic-value__content`,
                          },
                          this.value
                      )
                    : resolveWrappedSlot(
                          defaultSlot,
                          (children) =>
                              children &&
                              h(
                                  'span',
                                  {
                                      class: `${mergedClsPrefix}-statistic-value__content`,
                                  },
                                  children
                              )
                      ),
                resolveWrappedSlot(
                    suffixSlot,
                    (children) =>
                        children &&
                        h(
                            'span',
                            {
                                class: `${mergedClsPrefix}-statistic-value__suffix`,
                            },
                            children
                        )
                )
            )
        );
    },
});
