import { h, defineComponent, computed } from 'vue';
import { useConfig, useTheme, useThemeClass } from '../../_mixins';
import { typographyLight } from '../styles';
import style from './styles/a.cssr';
export const aProps = Object.assign({}, useTheme.props);
export default defineComponent({
    name: 'A',
    props: aProps,
    setup(props) {
        const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
        const themeRef = useTheme(
            'Typography',
            '-a',
            style,
            typographyLight,
            props,
            mergedClsPrefixRef
        );
        const cssVarsRef = computed(() => {
            const {
                common: { cubicBezierEaseInOut },
                self: { aTextColor },
            } = themeRef.value;
            return {
                '--n-text-color': aTextColor,
                '--n-bezier': cubicBezierEaseInOut,
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? useThemeClass('a', void 0, cssVarsRef, props)
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
        (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
        return h(
            'a',
            {
                class: [`${this.mergedClsPrefix}-a`, this.themeClass],
                style: this.cssVars,
            },
            this.$slots
        );
    },
});
