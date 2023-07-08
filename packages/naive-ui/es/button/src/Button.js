import { h, ref, computed, inject, defineComponent, watchEffect } from 'vue';
import { useMemo } from 'vooks';
import { changeColor } from 'seemly';
import { createHoverColor, createPressedColor } from '../../_utils/color/index';
import { buttonGroupInjectionKey } from '../../button-group/src/context';
import { useRtl } from '../../_mixins/use-rtl';
import { isSafari } from '../../_utils/env/browser';
import { useConfig, useFormItem, useTheme, useThemeClass } from '../../_mixins';
import {
    NFadeInExpandTransition,
    NIconSwitchTransition,
    NBaseLoading,
    NBaseWave,
} from '../../_internal';
import {
    call,
    color2Class,
    createKey,
    isSlotEmpty,
    resolveWrappedSlot,
    warnOnce,
} from '../../_utils';
import { buttonLight } from '../styles';
import style from './styles/index.cssr';
export const buttonProps = Object.assign(Object.assign({}, useTheme.props), {
    color: String,
    textColor: String,
    text: Boolean,
    block: Boolean,
    loading: Boolean,
    disabled: Boolean,
    circle: Boolean,
    size: String,
    ghost: Boolean,
    round: Boolean,
    secondary: Boolean,
    tertiary: Boolean,
    quaternary: Boolean,
    strong: Boolean,
    focusable: {
        type: Boolean,
        default: true,
    },
    keyboard: {
        type: Boolean,
        default: true,
    },
    tag: {
        type: String,
        default: 'button',
    },
    type: {
        type: String,
        default: 'default',
    },
    dashed: Boolean,
    renderIcon: Function,
    iconPlacement: {
        type: String,
        default: 'left',
    },
    attrType: {
        type: String,
        default: 'button',
    },
    bordered: {
        type: Boolean,
        default: true,
    },
    onClick: [Function, Array],
    nativeFocusBehavior: {
        type: Boolean,
        default: !isSafari,
    },
});
const Button = defineComponent({
    name: 'Button',
    props: buttonProps,
    setup(props) {
        if (process.env.NODE_ENV !== 'production') {
            watchEffect(() => {
                const { dashed, ghost, text, secondary, tertiary, quaternary } =
                    props;
                if (
                    (dashed || ghost || text) &&
                    (secondary || tertiary || quaternary)
                ) {
                    warnOnce(
                        'button',
                        "`dashed`, `ghost` and `text` props can't be used along with `secondary`, `tertiary` and `quaterary` props."
                    );
                }
            });
        }
        const selfElRef = ref(null);
        const waveElRef = ref(null);
        const enterPressedRef = ref(false);
        const showBorderRef = useMemo(() => {
            return (
                !props.quaternary &&
                !props.tertiary &&
                !props.secondary &&
                !props.text &&
                (!props.color || props.ghost || props.dashed) &&
                props.bordered
            );
        });
        const NButtonGroup = inject(buttonGroupInjectionKey, {});
        const { mergedSizeRef } = useFormItem(
            {},
            {
                defaultSize: 'medium',
                mergedSize: (NFormItem) => {
                    const { size } = props;
                    if (size) return size;
                    const { size: buttonGroupSize } = NButtonGroup;
                    if (buttonGroupSize) return buttonGroupSize;
                    const { mergedSize: formItemSize } = NFormItem || {};
                    if (formItemSize) {
                        return formItemSize.value;
                    }
                    return 'medium';
                },
            }
        );
        const mergedFocusableRef = computed(() => {
            return props.focusable && !props.disabled;
        });
        const handleMousedown = (e) => {
            var _a;
            if (!mergedFocusableRef.value) {
                e.preventDefault();
            }
            if (props.nativeFocusBehavior) {
                return;
            }
            e.preventDefault();
            if (props.disabled) {
                return;
            }
            if (mergedFocusableRef.value) {
                (_a = selfElRef.value) === null || _a === void 0
                    ? void 0
                    : _a.focus({ preventScroll: true });
            }
        };
        const handleClick = (e) => {
            var _a;
            if (!props.disabled && !props.loading) {
                const { onClick } = props;
                if (onClick) call(onClick, e);
                if (!props.text) {
                    (_a = waveElRef.value) === null || _a === void 0
                        ? void 0
                        : _a.play();
                }
            }
        };
        const handleKeyup = (e) => {
            switch (e.key) {
                case 'Enter':
                    if (!props.keyboard) {
                        return;
                    }
                    enterPressedRef.value = false;
            }
        };
        const handleKeydown = (e) => {
            switch (e.key) {
                case 'Enter':
                    if (!props.keyboard || props.loading) {
                        e.preventDefault();
                        return;
                    }
                    enterPressedRef.value = true;
            }
        };
        const handleBlur = () => {
            enterPressedRef.value = false;
        };
        const { inlineThemeDisabled, mergedClsPrefixRef, mergedRtlRef } =
            useConfig(props);
        const themeRef = useTheme(
            'Button',
            '-button',
            style,
            buttonLight,
            props,
            mergedClsPrefixRef
        );
        const rtlEnabledRef = useRtl(
            'Button',
            mergedRtlRef,
            mergedClsPrefixRef
        );
        const cssVarsRef = computed(() => {
            const theme = themeRef.value;
            const {
                common: { cubicBezierEaseInOut, cubicBezierEaseOut },
                self,
            } = theme;
            const {
                rippleDuration,
                opacityDisabled,
                fontWeight,
                fontWeightStrong,
            } = self;
            const size = mergedSizeRef.value;
            const {
                dashed,
                type,
                ghost,
                text,
                color,
                round,
                circle,
                textColor,
                secondary,
                tertiary,
                quaternary,
                strong,
            } = props;
            const fontProps = {
                'font-weight': strong ? fontWeightStrong : fontWeight,
            };
            let colorProps = {
                '--n-color': 'initial',
                '--n-color-hover': 'initial',
                '--n-color-pressed': 'initial',
                '--n-color-focus': 'initial',
                '--n-color-disabled': 'initial',
                '--n-ripple-color': 'initial',
                '--n-text-color': 'initial',
                '--n-text-color-hover': 'initial',
                '--n-text-color-pressed': 'initial',
                '--n-text-color-focus': 'initial',
                '--n-text-color-disabled': 'initial',
            };
            const typeIsTertiary = type === 'tertiary';
            const typeIsDefault = type === 'default';
            const mergedType = typeIsTertiary ? 'default' : type;
            if (text) {
                const propTextColor = textColor || color;
                const mergedTextColor =
                    propTextColor ||
                    self[createKey('textColorText', mergedType)];
                colorProps = {
                    '--n-color': '#0000',
                    '--n-color-hover': '#0000',
                    '--n-color-pressed': '#0000',
                    '--n-color-focus': '#0000',
                    '--n-color-disabled': '#0000',
                    '--n-ripple-color': '#0000',
                    '--n-text-color': mergedTextColor,
                    '--n-text-color-hover': propTextColor
                        ? createHoverColor(propTextColor)
                        : self[createKey('textColorTextHover', mergedType)],
                    '--n-text-color-pressed': propTextColor
                        ? createPressedColor(propTextColor)
                        : self[createKey('textColorTextPressed', mergedType)],
                    '--n-text-color-focus': propTextColor
                        ? createHoverColor(propTextColor)
                        : self[createKey('textColorTextHover', mergedType)],
                    '--n-text-color-disabled':
                        propTextColor ||
                        self[createKey('textColorTextDisabled', mergedType)],
                };
            } else if (ghost || dashed) {
                const mergedTextColor = textColor || color;
                colorProps = {
                    '--n-color': '#0000',
                    '--n-color-hover': '#0000',
                    '--n-color-pressed': '#0000',
                    '--n-color-focus': '#0000',
                    '--n-color-disabled': '#0000',
                    '--n-ripple-color':
                        color || self[createKey('rippleColor', mergedType)],
                    '--n-text-color':
                        mergedTextColor ||
                        self[createKey('textColorGhost', mergedType)],
                    '--n-text-color-hover': mergedTextColor
                        ? createHoverColor(mergedTextColor)
                        : self[createKey('textColorGhostHover', mergedType)],
                    '--n-text-color-pressed': mergedTextColor
                        ? createPressedColor(mergedTextColor)
                        : self[createKey('textColorGhostPressed', mergedType)],
                    '--n-text-color-focus': mergedTextColor
                        ? createHoverColor(mergedTextColor)
                        : self[createKey('textColorGhostHover', mergedType)],
                    '--n-text-color-disabled':
                        mergedTextColor ||
                        self[createKey('textColorGhostDisabled', mergedType)],
                };
            } else if (secondary) {
                const typeTextColor = typeIsDefault
                    ? self.textColor
                    : typeIsTertiary
                    ? self.textColorTertiary
                    : self[createKey('color', mergedType)];
                const mergedTextColor = color || typeTextColor;
                const isColoredType = type !== 'default' && type !== 'tertiary';
                colorProps = {
                    '--n-color': isColoredType
                        ? changeColor(mergedTextColor, {
                              alpha: Number(self.colorOpacitySecondary),
                          })
                        : self.colorSecondary,
                    '--n-color-hover': isColoredType
                        ? changeColor(mergedTextColor, {
                              alpha: Number(self.colorOpacitySecondaryHover),
                          })
                        : self.colorSecondaryHover,
                    '--n-color-pressed': isColoredType
                        ? changeColor(mergedTextColor, {
                              alpha: Number(self.colorOpacitySecondaryPressed),
                          })
                        : self.colorSecondaryPressed,
                    '--n-color-focus': isColoredType
                        ? changeColor(mergedTextColor, {
                              alpha: Number(self.colorOpacitySecondaryHover),
                          })
                        : self.colorSecondaryHover,
                    '--n-color-disabled': self.colorSecondary,
                    '--n-ripple-color': '#0000',
                    '--n-text-color': mergedTextColor,
                    '--n-text-color-hover': mergedTextColor,
                    '--n-text-color-pressed': mergedTextColor,
                    '--n-text-color-focus': mergedTextColor,
                    '--n-text-color-disabled': mergedTextColor,
                };
            } else if (tertiary || quaternary) {
                const typeColor = typeIsDefault
                    ? self.textColor
                    : typeIsTertiary
                    ? self.textColorTertiary
                    : self[createKey('color', mergedType)];
                const mergedColor = color || typeColor;
                if (tertiary) {
                    colorProps['--n-color'] = self.colorTertiary;
                    colorProps['--n-color-hover'] = self.colorTertiaryHover;
                    colorProps['--n-color-pressed'] = self.colorTertiaryPressed;
                    colorProps['--n-color-focus'] = self.colorSecondaryHover;
                    colorProps['--n-color-disabled'] = self.colorTertiary;
                } else {
                    colorProps['--n-color'] = self.colorQuaternary;
                    colorProps['--n-color-hover'] = self.colorQuaternaryHover;
                    colorProps['--n-color-pressed'] =
                        self.colorQuaternaryPressed;
                    colorProps['--n-color-focus'] = self.colorQuaternaryHover;
                    colorProps['--n-color-disabled'] = self.colorQuaternary;
                }
                colorProps['--n-ripple-color'] = '#0000';
                colorProps['--n-text-color'] = mergedColor;
                colorProps['--n-text-color-hover'] = mergedColor;
                colorProps['--n-text-color-pressed'] = mergedColor;
                colorProps['--n-text-color-focus'] = mergedColor;
                colorProps['--n-text-color-disabled'] = mergedColor;
            } else {
                colorProps = {
                    '--n-color': color || self[createKey('color', mergedType)],
                    '--n-color-hover': color
                        ? createHoverColor(color)
                        : self[createKey('colorHover', mergedType)],
                    '--n-color-pressed': color
                        ? createPressedColor(color)
                        : self[createKey('colorPressed', mergedType)],
                    '--n-color-focus': color
                        ? createHoverColor(color)
                        : self[createKey('colorFocus', mergedType)],
                    '--n-color-disabled':
                        color || self[createKey('colorDisabled', mergedType)],
                    '--n-ripple-color':
                        color || self[createKey('rippleColor', mergedType)],
                    '--n-text-color':
                        textColor ||
                        (color
                            ? self.textColorPrimary
                            : typeIsTertiary
                            ? self.textColorTertiary
                            : self[createKey('textColor', mergedType)]),
                    '--n-text-color-hover':
                        textColor ||
                        (color
                            ? self.textColorHoverPrimary
                            : self[createKey('textColorHover', mergedType)]),
                    '--n-text-color-pressed':
                        textColor ||
                        (color
                            ? self.textColorPressedPrimary
                            : self[createKey('textColorPressed', mergedType)]),
                    '--n-text-color-focus':
                        textColor ||
                        (color
                            ? self.textColorFocusPrimary
                            : self[createKey('textColorFocus', mergedType)]),
                    '--n-text-color-disabled':
                        textColor ||
                        (color
                            ? self.textColorDisabledPrimary
                            : self[createKey('textColorDisabled', mergedType)]),
                };
            }
            let borderProps = {
                '--n-border': 'initial',
                '--n-border-hover': 'initial',
                '--n-border-pressed': 'initial',
                '--n-border-focus': 'initial',
                '--n-border-disabled': 'initial',
            };
            if (text) {
                borderProps = {
                    '--n-border': 'none',
                    '--n-border-hover': 'none',
                    '--n-border-pressed': 'none',
                    '--n-border-focus': 'none',
                    '--n-border-disabled': 'none',
                };
            } else {
                borderProps = {
                    '--n-border': self[createKey('border', mergedType)],
                    '--n-border-hover':
                        self[createKey('borderHover', mergedType)],
                    '--n-border-pressed':
                        self[createKey('borderPressed', mergedType)],
                    '--n-border-focus':
                        self[createKey('borderFocus', mergedType)],
                    '--n-border-disabled':
                        self[createKey('borderDisabled', mergedType)],
                };
            }
            const {
                [createKey('height', size)]: height,
                [createKey('fontSize', size)]: fontSize,
                [createKey('padding', size)]: padding,
                [createKey('paddingRound', size)]: paddingRound,
                [createKey('iconSize', size)]: iconSize,
                [createKey('borderRadius', size)]: borderRadius,
                [createKey('iconMargin', size)]: iconMargin,
                waveOpacity,
            } = self;
            const sizeProps = {
                '--n-width': circle && !text ? height : 'initial',
                '--n-height': text ? 'initial' : height,
                '--n-font-size': fontSize,
                '--n-padding': circle
                    ? 'initial'
                    : text
                    ? 'initial'
                    : round
                    ? paddingRound
                    : padding,
                '--n-icon-size': iconSize,
                '--n-icon-margin': iconMargin,
                '--n-border-radius': text
                    ? 'initial'
                    : circle || round
                    ? height
                    : borderRadius,
            };
            return Object.assign(
                Object.assign(
                    Object.assign(
                        Object.assign(
                            {
                                '--n-bezier': cubicBezierEaseInOut,
                                '--n-bezier-ease-out': cubicBezierEaseOut,
                                '--n-ripple-duration': rippleDuration,
                                '--n-opacity-disabled': opacityDisabled,
                                '--n-wave-opacity': waveOpacity,
                            },
                            fontProps
                        ),
                        colorProps
                    ),
                    borderProps
                ),
                sizeProps
            );
        });
        const themeClassHandle = inlineThemeDisabled
            ? useThemeClass(
                  'button',
                  computed(() => {
                      let hash = '';
                      const {
                          dashed,
                          type,
                          ghost,
                          text,
                          color,
                          round,
                          circle,
                          textColor,
                          secondary,
                          tertiary,
                          quaternary,
                          strong,
                      } = props;
                      if (dashed) hash += 'a';
                      if (ghost) hash += 'b';
                      if (text) hash += 'c';
                      if (round) hash += 'd';
                      if (circle) hash += 'e';
                      if (secondary) hash += 'f';
                      if (tertiary) hash += 'g';
                      if (quaternary) hash += 'h';
                      if (strong) hash += 'i';
                      if (color) hash += 'j' + color2Class(color);
                      if (textColor) hash += 'k' + color2Class(textColor);
                      const { value: size } = mergedSizeRef;
                      hash += 'l' + size[0];
                      hash += 'm' + type[0];
                      return hash;
                  }),
                  cssVarsRef,
                  props
              )
            : void 0;
        return {
            selfElRef,
            waveElRef,
            mergedClsPrefix: mergedClsPrefixRef,
            mergedFocusable: mergedFocusableRef,
            mergedSize: mergedSizeRef,
            showBorder: showBorderRef,
            enterPressed: enterPressedRef,
            rtlEnabled: rtlEnabledRef,
            handleMousedown,
            handleKeydown,
            handleBlur,
            handleKeyup,
            handleClick,
            customColorCssVars: computed(() => {
                const { color } = props;
                if (!color) return null;
                const hoverColor = createHoverColor(color);
                return {
                    '--n-border-color': color,
                    '--n-border-color-hover': hoverColor,
                    '--n-border-color-pressed': createPressedColor(color),
                    '--n-border-color-focus': hoverColor,
                    '--n-border-color-disabled': color,
                };
            }),
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
        const { mergedClsPrefix, tag: Component, onRender } = this;
        onRender === null || onRender === void 0 ? void 0 : onRender();
        const children = resolveWrappedSlot(
            this.$slots.default,
            (children2) =>
                children2 &&
                h(
                    'span',
                    { class: `${mergedClsPrefix}-button__content` },
                    children2
                )
        );
        return h(
            Component,
            {
                ref: 'selfElRef',
                class: [
                    this.themeClass,
                    `${mergedClsPrefix}-button`,
                    `${mergedClsPrefix}-button--${this.type}-type`,
                    `${mergedClsPrefix}-button--${this.mergedSize}-type`,
                    this.rtlEnabled && `${mergedClsPrefix}-button--rtl`,
                    this.disabled && `${mergedClsPrefix}-button--disabled`,
                    this.block && `${mergedClsPrefix}-button--block`,
                    this.enterPressed && `${mergedClsPrefix}-button--pressed`,
                    !this.text &&
                        this.dashed &&
                        `${mergedClsPrefix}-button--dashed`,
                    this.color && `${mergedClsPrefix}-button--color`,
                    this.secondary && `${mergedClsPrefix}-button--secondary`,
                    this.loading && `${mergedClsPrefix}-button--loading`,
                    this.ghost && `${mergedClsPrefix}-button--ghost`,
                ],
                tabindex: this.mergedFocusable ? 0 : -1,
                type: this.attrType,
                style: this.cssVars,
                disabled: this.disabled,
                onClick: this.handleClick,
                onBlur: this.handleBlur,
                onMousedown: this.handleMousedown,
                onKeyup: this.handleKeyup,
                onKeydown: this.handleKeydown,
            },
            this.iconPlacement === 'right' && children,
            h(
                NFadeInExpandTransition,
                { width: true },
                {
                    default: () =>
                        resolveWrappedSlot(
                            this.$slots.icon,
                            (children2) =>
                                (this.loading ||
                                    this.renderIcon ||
                                    children2) &&
                                h(
                                    'span',
                                    {
                                        class: `${mergedClsPrefix}-button__icon`,
                                        style: {
                                            margin: isSlotEmpty(
                                                this.$slots.default
                                            )
                                                ? '0'
                                                : '',
                                        },
                                    },
                                    h(NIconSwitchTransition, null, {
                                        default: () =>
                                            this.loading
                                                ? h(NBaseLoading, {
                                                      clsPrefix:
                                                          mergedClsPrefix,
                                                      key: 'loading',
                                                      class: `${mergedClsPrefix}-icon-slot`,
                                                      strokeWidth: 20,
                                                  })
                                                : h(
                                                      'div',
                                                      {
                                                          key: 'icon',
                                                          class: `${mergedClsPrefix}-icon-slot`,
                                                          role: 'none',
                                                      },
                                                      this.renderIcon
                                                          ? this.renderIcon()
                                                          : children2
                                                  ),
                                    })
                                )
                        ),
                }
            ),
            this.iconPlacement === 'left' && children,
            !this.text
                ? h(NBaseWave, { ref: 'waveElRef', clsPrefix: mergedClsPrefix })
                : null,
            this.showBorder
                ? h('div', {
                      'aria-hidden': true,
                      class: `${mergedClsPrefix}-button__border`,
                      style: this.customColorCssVars,
                  })
                : null,
            this.showBorder
                ? h('div', {
                      'aria-hidden': true,
                      class: `${mergedClsPrefix}-button__state-border`,
                      style: this.customColorCssVars,
                  })
                : null
        );
    },
});
export default Button;
export const XButton = Button;
