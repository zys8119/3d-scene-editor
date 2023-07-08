import { h, defineComponent, computed } from 'vue';
import { useConfig, useTheme, useThemeClass } from '../../_mixins';
import { createKey } from '../../_utils';
import {
    InfoIcon,
    SuccessIcon,
    WarningIcon,
    ErrorIcon,
} from '../../_internal/icons';
import { NBaseIcon } from '../../_internal';
import { resultLight } from '../styles';
import image404 from './404';
import image500 from './500';
import image418 from './418';
import image403 from './403';
import style from './styles/index.cssr';
const iconMap = {
    403: image403,
    404: image404,
    418: image418,
    500: image500,
    info: h(InfoIcon, null),
    success: h(SuccessIcon, null),
    warning: h(WarningIcon, null),
    error: h(ErrorIcon, null),
};
export const resultProps = Object.assign(Object.assign({}, useTheme.props), {
    size: {
        type: String,
        default: 'medium',
    },
    status: {
        type: String,
        default: 'info',
    },
    title: String,
    description: String,
});
export default defineComponent({
    name: 'Result',
    props: resultProps,
    setup(props) {
        const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
        const themeRef = useTheme(
            'Result',
            '-result',
            style,
            resultLight,
            props,
            mergedClsPrefixRef
        );
        const cssVarsRef = computed(() => {
            const { size, status } = props;
            const {
                common: { cubicBezierEaseInOut },
                self: {
                    textColor,
                    lineHeight,
                    titleTextColor,
                    titleFontWeight,
                    [createKey('iconColor', status)]: iconColor,
                    [createKey('fontSize', size)]: fontSize,
                    [createKey('titleFontSize', size)]: titleFontSize,
                    [createKey('iconSize', size)]: iconSize,
                },
            } = themeRef.value;
            return {
                '--n-bezier': cubicBezierEaseInOut,
                '--n-font-size': fontSize,
                '--n-icon-size': iconSize,
                '--n-line-height': lineHeight,
                '--n-text-color': textColor,
                '--n-title-font-size': titleFontSize,
                '--n-title-font-weight': titleFontWeight,
                '--n-title-text-color': titleTextColor,
                '--n-icon-color': iconColor || '',
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? useThemeClass(
                  'result',
                  computed(() => {
                      const { size, status } = props;
                      let hash = '';
                      if (size) {
                          hash += size[0];
                      }
                      if (status) {
                          hash += status[0];
                      }
                      return hash;
                  }),
                  cssVarsRef,
                  props
              )
            : void 0;
        return {
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
        const { status, $slots, mergedClsPrefix, onRender } = this;
        onRender === null || onRender === void 0 ? void 0 : onRender();
        return h(
            'div',
            {
                class: [`${mergedClsPrefix}-result`, this.themeClass],
                style: this.cssVars,
            },
            h(
                'div',
                { class: `${mergedClsPrefix}-result-icon` },
                ((_a = $slots.icon) === null || _a === void 0
                    ? void 0
                    : _a.call($slots)) ||
                    h(
                        NBaseIcon,
                        { clsPrefix: mergedClsPrefix },
                        { default: () => iconMap[status] }
                    )
            ),
            h(
                'div',
                { class: `${mergedClsPrefix}-result-header` },
                this.title
                    ? h(
                          'div',
                          { class: `${mergedClsPrefix}-result-header__title` },
                          this.title
                      )
                    : null,
                this.description
                    ? h(
                          'div',
                          {
                              class: `${mergedClsPrefix}-result-header__description`,
                          },
                          this.description
                      )
                    : null
            ),
            $slots.default &&
                h(
                    'div',
                    { class: `${mergedClsPrefix}-result-content` },
                    $slots
                ),
            $slots.footer &&
                h(
                    'div',
                    { class: `${mergedClsPrefix}-result-footer` },
                    $slots.footer()
                )
        );
    },
});
