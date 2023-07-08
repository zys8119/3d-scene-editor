Object.defineProperty(exports, '__esModule', { value: true });
exports.getStyle = exports.containProps = void 0;
const vue_1 = require('vue');
const _mixins_1 = require('../../../_mixins');
const core_1 = require('@vueuse/core');
exports.containProps = {
    width: { type: Number, default: 1920 },
    height: { type: Number, default: 1080 },
    isDev: Boolean,
    tag: {
        type: String,
        default: 'div',
    },
};
function getStyle(style, dev = false, width, height) {
    return Object.assign(Object.assign({}, style), {
        outline: dev ? 'red dashed 5px' : void 0,
        position: style.fixed ? 'fixed' : 'absolute',
        left: getPercentage(width, style.left),
        right: getPercentage(width, style.right),
        top: getPercentage(height, style.top),
        bottom: getPercentage(height, style.bottom),
    });
}
exports.getStyle = getStyle;
function getPercentage(total, value) {
    if (typeof value === 'undefined') return void 0;
    return `${(value / total) * 100}%`;
}
const Contain = (0, vue_1.defineComponent)({
    name: 'Contain',
    props: exports.containProps,
    setup(props) {
        const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props);
        const containRef = (0, vue_1.ref)();
        const { width, height } = (0, core_1.useElementSize)(containRef);
        const scale = (0, vue_1.computed)(() =>
            Math.min(width.value / props.width, height.value / props.height)
        );
        const containStyle = (0, vue_1.computed)(() => ({
            width: `${props.width}px`,
            height: `${props.height}px`,
            transform: `scale(${scale.value})`,
            position: 'relative',
            flex: '0 0 auto',
        }));
        function getComponentStyle(style, dev) {
            return getStyle(
                style,
                dev !== null && dev !== void 0 ? dev : props.isDev,
                props.width,
                props.height
            );
        }
        return {
            containRef,
            mergedClsPrefixRef,
            containStyle,
            getStyle: getComponentStyle,
        };
    },
    render() {
        var _a, _b;
        const { tag: Component, mergedClsPrefixRef } = this;
        return (0, vue_1.h)(
            Component,
            {
                class: `${mergedClsPrefixRef}-contain`,
                ref: 'containRef',
                style: {
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                },
            },
            (0, vue_1.h)(
                'div',
                { style: this.containStyle },
                (_b = (_a = this.$slots).default) === null || _b === void 0
                    ? void 0
                    : _b.call(_a, { getStyle: this.getStyle })
            )
        );
    },
});
exports.default = Contain;
