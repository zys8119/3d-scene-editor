var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.skeletonProps = void 0;
const seemly_1 = require('seemly');
const vue_1 = require('vue');
const _mixins_1 = require('../../_mixins');
const _utils_1 = require('../../_utils');
const styles_1 = require('../styles');
const index_cssr_1 = __importDefault(require('./styles/index.cssr'));
exports.skeletonProps = Object.assign(
    Object.assign({}, _mixins_1.useTheme.props),
    {
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
    }
);
exports.default = (0, vue_1.defineComponent)({
    name: 'Skeleton',
    inheritAttrs: false,
    props: exports.skeletonProps,
    setup(props) {
        (0, _utils_1.useHoudini)();
        const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props);
        const themeRef = (0, _mixins_1.useTheme)(
            'Skeleton',
            '-skeleton',
            index_cssr_1.default,
            styles_1.skeletonLight,
            props,
            mergedClsPrefixRef
        );
        return {
            mergedClsPrefix: mergedClsPrefixRef,
            style: (0, vue_1.computed)(() => {
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
                    sizeHeight =
                        selfThemeVars[(0, _utils_1.createKey)('height', size)];
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
                            ? (0, seemly_1.pxfy)(mergedWidth)
                            : mergedWidth,
                    height:
                        typeof mergedHeight === 'number'
                            ? (0, seemly_1.pxfy)(mergedHeight)
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
        const { repeat, style, mergedClsPrefix, $attrs } = this;
        const child = (0, vue_1.h)(
            'div',
            (0, vue_1.mergeProps)(
                {
                    class: `${mergedClsPrefix}-skeleton`,
                    style,
                },
                $attrs
            )
        );
        if (repeat > 1) {
            return (0, vue_1.h)(
                vue_1.Fragment,
                null,
                Array.apply(null, { length: repeat }).map((_) => [child, '\n'])
            );
        }
        return child;
    },
});
