import { computed, h, defineComponent, inject } from 'vue';
import {
    InfoIcon,
    SuccessIcon,
    WarningIcon,
    ErrorIcon,
} from '../../_internal/icons';
import {
    NIconSwitchTransition,
    NBaseLoading,
    NBaseIcon,
    NBaseClose,
} from '../../_internal';
import { render, createKey } from '../../_utils';
import { useConfig, useTheme, useThemeClass, useRtl } from '../../_mixins';
import { messageLight } from '../styles';
import { messageProps } from './message-props';
import { messageProviderInjectionKey } from './context';
import style from './styles/index.cssr';
const iconRenderMap = {
    info: () => h(InfoIcon, null),
    success: () => h(SuccessIcon, null),
    warning: () => h(WarningIcon, null),
    error: () => h(ErrorIcon, null),
    default: () => null,
};
export default defineComponent({
    name: 'Message',
    props: Object.assign(Object.assign({}, messageProps), { render: Function }),
    setup(props) {
        const { inlineThemeDisabled, mergedRtlRef } = useConfig(props);
        const { props: messageProviderProps, mergedClsPrefixRef } = inject(
            messageProviderInjectionKey
        );
        const rtlEnabledRef = useRtl(
            'Message',
            mergedRtlRef,
            mergedClsPrefixRef
        );
        const themeRef = useTheme(
            'Message',
            '-message',
            style,
            messageLight,
            messageProviderProps,
            mergedClsPrefixRef
        );
        const cssVarsRef = computed(() => {
            const { type } = props;
            const {
                common: { cubicBezierEaseInOut },
                self: {
                    padding,
                    margin,
                    maxWidth,
                    iconMargin,
                    closeMargin,
                    closeSize,
                    iconSize,
                    fontSize,
                    lineHeight,
                    borderRadius,
                    iconColorInfo,
                    iconColorSuccess,
                    iconColorWarning,
                    iconColorError,
                    iconColorLoading,
                    closeIconSize,
                    closeBorderRadius,
                    [createKey('textColor', type)]: textColor,
                    [createKey('boxShadow', type)]: boxShadow,
                    [createKey('color', type)]: color,
                    [createKey('closeColorHover', type)]: closeColorHover,
                    [createKey('closeColorPressed', type)]: closeColorPressed,
                    [createKey('closeIconColor', type)]: closeIconColor,
                    [createKey('closeIconColorPressed', type)]:
                        closeIconColorPressed,
                    [createKey('closeIconColorHover', type)]:
                        closeIconColorHover,
                },
            } = themeRef.value;
            return {
                '--n-bezier': cubicBezierEaseInOut,
                '--n-margin': margin,
                '--n-padding': padding,
                '--n-max-width': maxWidth,
                '--n-font-size': fontSize,
                '--n-icon-margin': iconMargin,
                '--n-icon-size': iconSize,
                '--n-close-icon-size': closeIconSize,
                '--n-close-border-radius': closeBorderRadius,
                '--n-close-size': closeSize,
                '--n-close-margin': closeMargin,
                '--n-text-color': textColor,
                '--n-color': color,
                '--n-box-shadow': boxShadow,
                '--n-icon-color-info': iconColorInfo,
                '--n-icon-color-success': iconColorSuccess,
                '--n-icon-color-warning': iconColorWarning,
                '--n-icon-color-error': iconColorError,
                '--n-icon-color-loading': iconColorLoading,
                '--n-close-color-hover': closeColorHover,
                '--n-close-color-pressed': closeColorPressed,
                '--n-close-icon-color': closeIconColor,
                '--n-close-icon-color-pressed': closeIconColorPressed,
                '--n-close-icon-color-hover': closeIconColorHover,
                '--n-line-height': lineHeight,
                '--n-border-radius': borderRadius,
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? useThemeClass(
                  'message',
                  computed(() => props.type[0]),
                  cssVarsRef,
                  {}
              )
            : void 0;
        return {
            mergedClsPrefix: mergedClsPrefixRef,
            rtlEnabled: rtlEnabledRef,
            messageProviderProps,
            handleClose() {
                var _a;
                (_a = props.onClose) === null || _a === void 0
                    ? void 0
                    : _a.call(props);
            },
            cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
            themeClass:
                themeClassHandle === null || themeClassHandle === void 0
                    ? void 0
                    : themeClassHandle.themeClass,
            onRender:
                themeClassHandle === null || themeClassHandle === void 0
                    ? void 0
                    : themeClassHandle.onRender,
            placement: messageProviderProps.placement,
        };
    },
    render() {
        const {
            render: renderMessage,
            type,
            closable,
            content,
            mergedClsPrefix,
            cssVars,
            themeClass,
            onRender,
            icon,
            handleClose,
            showIcon,
        } = this;
        onRender === null || onRender === void 0 ? void 0 : onRender();
        let iconNode;
        return h(
            'div',
            {
                class: [`${mergedClsPrefix}-message-wrapper`, themeClass],
                onMouseenter: this.onMouseenter,
                onMouseleave: this.onMouseleave,
                style: [
                    {
                        alignItems: this.placement.startsWith('top')
                            ? 'flex-start'
                            : 'flex-end',
                    },
                    cssVars,
                ],
            },
            renderMessage
                ? renderMessage(this.$props)
                : h(
                      'div',
                      {
                          class: [
                              `${mergedClsPrefix}-message ${mergedClsPrefix}-message--${type}-type`,
                              this.rtlEnabled &&
                                  `${mergedClsPrefix}-message--rtl`,
                          ],
                      },
                      (iconNode = createIconVNode(
                          icon,
                          type,
                          mergedClsPrefix
                      )) && showIcon
                          ? h(
                                'div',
                                {
                                    class: `${mergedClsPrefix}-message__icon ${mergedClsPrefix}-message__icon--${type}-type`,
                                },
                                h(NIconSwitchTransition, null, {
                                    default: () => iconNode,
                                })
                            )
                          : null,
                      h(
                          'div',
                          { class: `${mergedClsPrefix}-message__content` },
                          render(content)
                      ),
                      closable
                          ? h(NBaseClose, {
                                clsPrefix: mergedClsPrefix,
                                class: `${mergedClsPrefix}-message__close`,
                                onClick: handleClose,
                                absolute: true,
                            })
                          : null
                  )
        );
    },
});
function createIconVNode(icon, type, clsPrefix) {
    if (typeof icon === 'function') {
        return icon();
    } else {
        const innerIcon =
            type === 'loading'
                ? h(NBaseLoading, { clsPrefix, strokeWidth: 24, scale: 0.85 })
                : iconRenderMap[type]();
        if (!innerIcon) return null;
        return h(
            NBaseIcon,
            { clsPrefix, key: type },
            {
                default: () => innerIcon,
            }
        );
    }
}
