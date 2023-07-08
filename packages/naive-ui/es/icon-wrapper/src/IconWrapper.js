import { computed, defineComponent, h } from 'vue';
import { useConfig, useTheme, useThemeClass } from '../../_mixins';
import { formatLength } from '../../_utils';
import { iconWrapperLight } from '../styles';
import style from './styles/index.cssr';
export const iconWrapperProps = Object.assign(
    Object.assign({}, useTheme.props),
    {
        size: {
            type: Number,
            default: 24,
        },
        borderRadius: {
            type: Number,
            default: 6,
        },
        color: String,
        iconColor: String,
    }
);
export const NIconWrapper = defineComponent({
    name: 'IconWrapper',
    props: iconWrapperProps,
    setup(props, { slots }) {
        const themeRef = useTheme(
            'IconWrapper',
            '-icon-wrapper',
            style,
            iconWrapperLight,
            props
        );
        const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
        const cssVarsRef = computed(() => {
            const {
                common: { cubicBezierEaseInOut },
                self: { color, iconColor },
            } = themeRef.value;
            return {
                '--n-bezier': cubicBezierEaseInOut,
                '--n-color': color,
                '--n-icon-color': iconColor,
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? useThemeClass('icon-wrapper', void 0, cssVarsRef, props)
            : void 0;
        return () => {
            const size = formatLength(props.size);
            themeClassHandle === null || themeClassHandle === void 0
                ? void 0
                : themeClassHandle.onRender();
            return h(
                'div',
                {
                    class: [
                        `${mergedClsPrefixRef.value}-icon-wrapper`,
                        themeClassHandle === null || themeClassHandle === void 0
                            ? void 0
                            : themeClassHandle.themeClass.value,
                    ],
                    style: [
                        cssVarsRef === null || cssVarsRef === void 0
                            ? void 0
                            : cssVarsRef.value,
                        {
                            height: size,
                            width: size,
                            borderRadius: formatLength(props.borderRadius),
                            backgroundColor: props.color,
                            color: props.iconColor,
                        },
                    ],
                },
                slots
            );
        };
    },
});
