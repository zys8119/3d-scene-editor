import { h, defineComponent, computed } from 'vue';
import { useRtl } from '../../_mixins/use-rtl';
import { useConfig, useTheme, useThemeClass } from '../../_mixins';
import { createKey, resolveWrappedSlot } from '../../_utils';
import { radioLight } from '../styles';
import { setup, radioProps } from './use-radio';
import style from './styles/radio.cssr';
export { radioProps };
export default defineComponent({
    name: 'Radio',
    props: Object.assign(Object.assign({}, useTheme.props), radioProps),
    setup(props) {
        const radio = setup(props);
        const themeRef = useTheme(
            'Radio',
            '-radio',
            style,
            radioLight,
            props,
            radio.mergedClsPrefix
        );
        const cssVarsRef = computed(() => {
            const {
                mergedSize: { value: size },
            } = radio;
            const {
                common: { cubicBezierEaseInOut },
                self: {
                    boxShadow,
                    boxShadowActive,
                    boxShadowDisabled,
                    boxShadowFocus,
                    boxShadowHover,
                    color,
                    colorDisabled,
                    colorActive,
                    textColor,
                    textColorDisabled,
                    dotColorActive,
                    dotColorDisabled,
                    labelPadding,
                    labelLineHeight,
                    labelFontWeight,
                    [createKey('fontSize', size)]: fontSize,
                    [createKey('radioSize', size)]: radioSize,
                },
            } = themeRef.value;
            return {
                '--n-bezier': cubicBezierEaseInOut,
                '--n-label-line-height': labelLineHeight,
                '--n-label-font-weight': labelFontWeight,
                '--n-box-shadow': boxShadow,
                '--n-box-shadow-active': boxShadowActive,
                '--n-box-shadow-disabled': boxShadowDisabled,
                '--n-box-shadow-focus': boxShadowFocus,
                '--n-box-shadow-hover': boxShadowHover,
                '--n-color': color,
                '--n-color-active': colorActive,
                '--n-color-disabled': colorDisabled,
                '--n-dot-color-active': dotColorActive,
                '--n-dot-color-disabled': dotColorDisabled,
                '--n-font-size': fontSize,
                '--n-radio-size': radioSize,
                '--n-text-color': textColor,
                '--n-text-color-disabled': textColorDisabled,
                '--n-label-padding': labelPadding,
            };
        });
        const { inlineThemeDisabled, mergedClsPrefixRef, mergedRtlRef } =
            useConfig(props);
        const rtlEnabledRef = useRtl('Radio', mergedRtlRef, mergedClsPrefixRef);
        const themeClassHandle = inlineThemeDisabled
            ? useThemeClass(
                  'radio',
                  computed(() => radio.mergedSize.value[0]),
                  cssVarsRef,
                  props
              )
            : void 0;
        return Object.assign(radio, {
            rtlEnabled: rtlEnabledRef,
            cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
            themeClass:
                themeClassHandle === null || themeClassHandle === void 0
                    ? void 0
                    : themeClassHandle.themeClass,
            onRender:
                themeClassHandle === null || themeClassHandle === void 0
                    ? void 0
                    : themeClassHandle.onRender,
        });
    },
    render() {
        const { $slots, mergedClsPrefix, onRender, label } = this;
        onRender === null || onRender === void 0 ? void 0 : onRender();
        return h(
            'label',
            {
                class: [
                    `${mergedClsPrefix}-radio`,
                    this.themeClass,
                    {
                        [`${mergedClsPrefix}-radio--rtl`]: this.rtlEnabled,
                        [`${mergedClsPrefix}-radio--disabled`]:
                            this.mergedDisabled,
                        [`${mergedClsPrefix}-radio--checked`]:
                            this.renderSafeChecked,
                        [`${mergedClsPrefix}-radio--focus`]: this.focus,
                    },
                ],
                style: this.cssVars,
            },
            h('input', {
                ref: 'inputRef',
                type: 'radio',
                class: `${mergedClsPrefix}-radio-input`,
                value: this.value,
                name: this.mergedName,
                checked: this.renderSafeChecked,
                disabled: this.mergedDisabled,
                onChange: this.handleRadioInputChange,
                onFocus: this.handleRadioInputFocus,
                onBlur: this.handleRadioInputBlur,
            }),
            h(
                'div',
                { class: `${mergedClsPrefix}-radio__dot-wrapper` },
                '\xA0',
                h('div', {
                    class: [
                        `${mergedClsPrefix}-radio__dot`,
                        this.renderSafeChecked &&
                            `${mergedClsPrefix}-radio__dot--checked`,
                    ],
                })
            ),
            resolveWrappedSlot($slots.default, (children) => {
                if (!children && !label) return null;
                return h(
                    'div',
                    {
                        ref: 'labelRef',
                        class: `${mergedClsPrefix}-radio__label`,
                    },
                    children || label
                );
            })
        );
    },
});
