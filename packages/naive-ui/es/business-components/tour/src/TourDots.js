import { h, defineComponent, ref, onBeforeUpdate } from 'vue';
import { indexMap } from 'seemly';
import { useConfig } from '../../../_mixins';
const tourDotsProps = {
    total: {
        type: Number,
        default: 0,
    },
    currentIndex: {
        type: Number,
        default: 0,
    },
};
export default defineComponent({
    name: 'TourDots',
    props: tourDotsProps,
    setup(props) {
        const { mergedClsPrefixRef } = useConfig(props);
        const dotElsRef = ref([]);
        onBeforeUpdate(() => (dotElsRef.value.length = 0));
        return {
            mergedClsPrefix: mergedClsPrefixRef,
            dotEls: dotElsRef,
        };
    },
    render() {
        const { mergedClsPrefix, dotEls } = this;
        return h(
            'div',
            { class: `${mergedClsPrefix}-tour-dots`, role: 'tablist' },
            indexMap(this.total, (i) => {
                const selected = i === this.currentIndex;
                return h('div', {
                    'aria-selected': selected,
                    ref: (el) => dotEls.push(el),
                    role: 'button',
                    tabindex: '0',
                    class: [
                        `${mergedClsPrefix}-tour-dot`,
                        selected && `${mergedClsPrefix}-tour-dot--active`,
                    ],
                    key: i,
                });
            })
        );
    },
});
