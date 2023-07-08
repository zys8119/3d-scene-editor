import { computed, h, defineComponent } from 'vue';
import { kebabCase } from 'lodash-es';
import { useConfig, useTheme, useThemeClass } from '../../_mixins';
import { elementLight } from '../styles';
export const elementProps = Object.assign(Object.assign({}, useTheme.props), {
    tag: {
        type: String,
        default: 'div',
    },
});
export default defineComponent({
    name: 'Element',
    alias: ['El'],
    props: elementProps,
    setup(props) {
        const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
        const themeRef = useTheme(
            'Element',
            '-element',
            void 0,
            elementLight,
            props,
            mergedClsPrefixRef
        );
        const cssVarsRef = computed(() => {
            const { common } = themeRef.value;
            return Object.keys(common).reduce((prevValue, key) => {
                prevValue[`--${kebabCase(key)}`] = common[key];
                return prevValue;
            }, {});
        });
        const themeClassHandle = inlineThemeDisabled
            ? useThemeClass('element', void 0, cssVarsRef, props)
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
        const { tag, mergedClsPrefix, cssVars, themeClass, onRender, $slots } =
            this;
        onRender === null || onRender === void 0 ? void 0 : onRender();
        return h(
            tag,
            {
                role: 'none',
                class: [`${mergedClsPrefix}-element`, themeClass],
                style: cssVars,
            },
            (_a = $slots.default) === null || _a === void 0
                ? void 0
                : _a.call($slots)
        );
    },
});
