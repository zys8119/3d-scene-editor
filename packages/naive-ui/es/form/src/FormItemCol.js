import { h, ref, defineComponent } from 'vue';
import NCol, { colProps, colPropKeys } from '../../legacy-grid/src/Col';
import { keep, keysOf } from '../../_utils';
import NFormItem, { formItemProps, formItemPropKeys } from './FormItem';
export const formItemColProps = Object.assign(
    Object.assign({}, colProps),
    formItemProps
);
export const formItemColPropKeys = keysOf(formItemColProps);
export default defineComponent({
    name: 'FormItemCol',
    props: formItemColProps,
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
        return h(NCol, keep(this.$props, colPropKeys), {
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
