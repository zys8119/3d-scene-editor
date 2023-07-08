import { h, ref, defineComponent } from 'vue';
import NRow, { rowProps, rowPropKeys } from '../../legacy-grid/src/Row';
import { keep } from '../../_utils';
import NFormItemCol, {
    formItemColProps,
    formItemColPropKeys,
} from './FormItemCol';
export const formItemRowProps = Object.assign(
    Object.assign({}, rowProps),
    formItemColProps
);
export default defineComponent({
    name: 'FormItemRow',
    props: formItemRowProps,
    setup() {
        const formItemColInstRef = ref(null);
        const validate = (...args) => {
            const { value } = formItemColInstRef;
            if (value) {
                return value.validate(...args);
            }
        };
        const restoreValidation = () => {
            const { value } = formItemColInstRef;
            if (value) {
                return value.restoreValidation();
            }
        };
        return {
            formItemColInstRef,
            validate,
            restoreValidation,
        };
    },
    render() {
        return h(NRow, keep(this.$props, rowPropKeys), {
            default: () => {
                const colProps = keep(this.$props, formItemColPropKeys);
                return h(
                    NFormItemCol,
                    Object.assign(
                        Object.assign({ ref: 'formItemColInstRef' }, colProps),
                        { span: 24 }
                    ),
                    this.$slots
                );
            },
        });
    },
});
