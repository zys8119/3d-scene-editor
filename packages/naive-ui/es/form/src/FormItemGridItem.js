import { h, ref, defineComponent } from 'vue';
import NGridItem, {
    gridItemProps,
    gridItemPropKeys,
} from '../../grid/src/GridItem';
import { keep, keysOf } from '../../_utils';
import NFormItem, { formItemProps, formItemPropKeys } from './FormItem';
export const formItemGiProps = Object.assign(
    Object.assign({}, gridItemProps),
    formItemProps
);
export const formItemGiPropKeys = keysOf(formItemGiProps);
export default defineComponent({
    __GRID_ITEM__: true,
    name: 'FormItemGridItem',
    alias: ['FormItemGi'],
    props: formItemGiProps,
    setup() {
        const formItemInstRef = ref(null);
        const validate = (...args) => {
            const { value } = formItemInstRef;
            if (value) {
                return value.validate(...args);
            }
        };
        const restoreValidation = () => {
            const { value } = formItemInstRef;
            if (value) {
                return value.restoreValidation();
            }
        };
        return {
            formItemInstRef,
            validate,
            restoreValidation,
        };
    },
    render() {
        return h(NGridItem, keep(this.$.vnode.props || {}, gridItemPropKeys), {
            default: () => {
                const itemProps = keep(this.$props, formItemPropKeys);
                return h(
                    NFormItem,
                    Object.assign({ ref: 'formItemInstRef' }, itemProps),
                    this.$slots
                );
            },
        });
    },
});
