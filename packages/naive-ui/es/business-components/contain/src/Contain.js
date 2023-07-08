import { h, defineComponent, ref, computed } from 'vue';
import { useConfig } from '../../../_mixins';
import { useElementSize } from '@vueuse/core';
export const containProps = {
    width: { type: Number, default: 1920 },
    height: { type: Number, default: 1080 },
    isDev: Boolean,
    tag: {
        type: String,
        default: 'div',
    },
};
export function getStyle(style, dev = false, width, height) {
    return Object.assign(Object.assign({}, style), {
        outline: dev ? 'red dashed 5px' : void 0,
        position: style.fixed ? 'fixed' : 'absolute',
        left: getPercentage(width, style.left),
        right: getPercentage(width, style.right),
        top: getPercentage(height, style.top),
        bottom: getPercentage(height, style.bottom),
    });
}
function getPercentage(total, value) {
    if (typeof value === 'undefined') return void 0;
    return `${(value / total) * 100}%`;
}
const Contain = defineComponent({
    name: 'Contain',
    props: containProps,
    setup(props) {
        const { mergedClsPrefixRef } = useConfig(props);
        const containRef = ref();
        const { width, height } = useElementSize(containRef);
        const scale = computed(() =>
            Math.min(width.value / props.width, height.value / props.height)
        );
        const containStyle = computed(() => ({
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
        return h(
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
            h(
                'div',
                { style: this.containStyle },
                (_b = (_a = this.$slots).default) === null || _b === void 0
                    ? void 0
                    : _b.call(_a, { getStyle: this.getStyle })
            )
        );
    },
});
export default Contain;
