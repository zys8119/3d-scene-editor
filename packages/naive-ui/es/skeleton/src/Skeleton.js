import { pxfy } from 'seemly';
import { computed, defineComponent, h, Fragment, mergeProps } from 'vue';
import { useConfig, useTheme } from '../../_mixins';
import { createKey, useHoudini } from '../../_utils';
import { skeletonLight } from '../styles';
import style from './styles/index.cssr';
export const skeletonProps = Object.assign(Object.assign({}, useTheme.props), {
    text: Boolean,
    round: Boolean,
    circle: Boolean,
    height: [String, Number],
    width: [String, Number],
    size: String,
    repeat: {
        type: Number,
        default: 1,
    },
    animated: {
        type: Boolean,
        default: true,
    },
    sharp: {
        type: Boolean,
        default: true,
    },
});
export default defineComponent({
    name: 'Skeleton',
    inheritAttrs: false,
    props: skeletonProps,
    setup(props) {
        useHoudini();
        const { mergedClsPrefixRef } = useConfig(props);
        const themeRef = useTheme(
            'Skeleton',
            '-skeleton',
            style,
            skeletonLight,
            props,
            mergedClsPrefixRef
        );
        return {
            mergedClsPrefix: mergedClsPrefixRef,
            style: computed(() => {
                var _a, _b;
                const theme = themeRef.value;
                const {
                    common: { cubicBezierEaseInOut },
                } = theme;
                const selfThemeVars = theme.self;
                const { color, colorEnd, borderRadius } = selfThemeVars;
                let sizeHeight;
                const {
                    circle,
                    sharp,
                    round,
                    width,
                    height,
                    size,
                    text,
                    animated,
                } = props;
                if (size !== void 0) {
                    sizeHeight = selfThemeVars[createKey('height', size)];
                }
                const mergedWidth = circle
                    ? (_a =
                          width !== null && width !== void 0
                              ? width
                              : height) !== null && _a !== void 0
                        ? _a
                        : sizeHeight
                    : width;
                const mergedHeight =
                    (_b = circle
                        ? width !== null && width !== void 0
                            ? width
                            : height
                        : height) !== null && _b !== void 0
                        ? _b
                        : sizeHeight;
                return {
                    display: text ? 'inline-block' : '',
                    verticalAlign: text ? '-0.125em' : '',
                    borderRadius: circle
                        ? '50%'
                        : round
                        ? '4096px'
                        : sharp
                        ? ''
                        : borderRadius,
                    width:
                        typeof mergedWidth === 'number'
                            ? pxfy(mergedWidth)
                            : mergedWidth,
                    height:
                        typeof mergedHeight === 'number'
                            ? pxfy(mergedHeight)
                            : mergedHeight,
                    animation: !animated ? 'none' : '',
                    '--n-bezier': cubicBezierEaseInOut,
                    '--n-color-start': color,
                    '--n-color-end': colorEnd,
                };
            }),
        };
    },
    render() {
        const { repeat, style: style2, mergedClsPrefix, $attrs } = this;
        const child = h(
            'div',
            mergeProps(
                {
                    class: `${mergedClsPrefix}-skeleton`,
                    style: style2,
                },
                $attrs
            )
        );
        if (repeat > 1) {
            return h(
                Fragment,
                null,
                Array.apply(null, { length: repeat }).map((_) => [child, '\n'])
            );
        }
        return child;
    },
});
