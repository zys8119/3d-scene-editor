import { h, withDirectives, vShow, defineComponent, toRef } from 'vue';
import { useFalseUntilTruthy } from 'vooks';
import { NFadeInExpandTransition } from '../../_internal';
export default defineComponent({
    name: 'CollapseItemContent',
    props: {
        displayDirective: {
            type: String,
            required: true,
        },
        show: Boolean,
        clsPrefix: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        const onceTrueRef = useFalseUntilTruthy(toRef(props, 'show'));
        return {
            onceTrue: onceTrueRef,
        };
    },
    render() {
        return h(NFadeInExpandTransition, null, {
            default: () => {
                const { show, displayDirective, onceTrue, clsPrefix } = this;
                const useVShow = displayDirective === 'show' && onceTrue;
                const contentNode = h(
                    'div',
                    { class: `${clsPrefix}-collapse-item__content-wrapper` },
                    h(
                        'div',
                        { class: `${clsPrefix}-collapse-item__content-inner` },
                        this.$slots
                    )
                );
                return useVShow
                    ? withDirectives(contentNode, [[vShow, show]])
                    : show
                    ? contentNode
                    : null;
            },
        });
    },
});
