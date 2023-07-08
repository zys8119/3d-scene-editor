import { h, defineComponent, provide } from 'vue';
import { useConfig, useTheme } from '../../_mixins';
import { createInjectionKey } from '../../_utils';
import { timelineLight } from '../styles';
import style from './styles/index.cssr';
export const timelineProps = Object.assign(Object.assign({}, useTheme.props), {
    horizontal: Boolean,
    itemPlacement: {
        type: String,
        default: 'left',
    },
    size: {
        type: String,
        default: 'medium',
    },
    iconSize: Number,
});
export const timelineInjectionKey = createInjectionKey('n-timeline');
export default defineComponent({
    name: 'Timeline',
    props: timelineProps,
    setup(props, { slots }) {
        const { mergedClsPrefixRef } = useConfig(props);
        const themeRef = useTheme(
            'Timeline',
            '-timeline',
            style,
            timelineLight,
            props,
            mergedClsPrefixRef
        );
        provide(timelineInjectionKey, {
            props,
            mergedThemeRef: themeRef,
            mergedClsPrefixRef,
        });
        return () => {
            const { value: mergedClsPrefix } = mergedClsPrefixRef;
            return h(
                'div',
                {
                    class: [
                        `${mergedClsPrefix}-timeline`,
                        props.horizontal &&
                            `${mergedClsPrefix}-timeline--horizontal`,
                        `${mergedClsPrefix}-timeline--${props.size}-size`,
                        !props.horizontal &&
                            `${mergedClsPrefix}-timeline--${props.itemPlacement}-placement`,
                    ],
                },
                slots
            );
        };
    },
});
