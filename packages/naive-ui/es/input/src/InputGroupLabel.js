import { computed, defineComponent, h } from 'vue';
import { useConfig, useTheme, useThemeClass } from '../../_mixins';
import { createKey } from '../../_utils';
import { inputLight } from '../styles';
import style from './styles/input-group-label.cssr';
export const inputGroupLabelProps = Object.assign(
    Object.assign({}, useTheme.props),
    {
        size: {
            type: String,
            default: 'medium',
        },
        bordered: {
            type: Boolean,
            default: void 0,
        },
    }
);
export default defineComponent({
    name: 'InputGroupLabel',
    props: inputGroupLabelProps,
    setup(props) {
        const { mergedBorderedRef, mergedClsPrefixRef, inlineThemeDisabled } =
            useConfig(props);
        const themeRef = useTheme(
            'Input',
            '-input-group-label',
            style,
            inputLight,
            props,
            mergedClsPrefixRef
        );
        const cssVarsRef = computed(() => {
            const { size } = props;
            const {
                common: { cubicBezierEaseInOut },
                self: {
                    groupLabelColor,
                    borderRadius,
                    groupLabelTextColor,
                    lineHeight,
                    groupLabelBorder,
                    [createKey('fontSize', size)]: fontSize,
                    [createKey('height', size)]: height,
                },
            } = themeRef.value;
            return {
                '--n-bezier': cubicBezierEaseInOut,
                '--n-group-label-color': groupLabelColor,
                '--n-group-label-border': groupLabelBorder,
                '--n-border-radius': borderRadius,
                '--n-group-label-text-color': groupLabelTextColor,
                '--n-font-size': fontSize,
                '--n-line-height': lineHeight,
                '--n-height': height,
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? useThemeClass(
                  'input-group-label',
                  computed(() => props.size[0]),
                  cssVarsRef,
                  props
              )
            : void 0;
        return {
            mergedClsPrefix: mergedClsPrefixRef,
            mergedBordered: mergedBorderedRef,
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
        var _a, _b, _c;
        const { mergedClsPrefix } = this;
        (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
        return h(
            'div',
            {
                class: [
                    `${mergedClsPrefix}-input-group-label`,
                    this.themeClass,
                ],
                style: this.cssVars,
            },
            (_c = (_b = this.$slots).default) === null || _c === void 0
                ? void 0
                : _c.call(_b),
            this.mergedBordered
                ? h('div', {
                      class: `${mergedClsPrefix}-input-group-label__border`,
                  })
                : null
        );
    },
});
