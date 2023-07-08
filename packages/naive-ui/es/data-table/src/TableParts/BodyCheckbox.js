import { defineComponent, h, inject } from 'vue';
import { NCheckbox } from '../../../checkbox';
import { dataTableInjectionKey } from '../interface';
export default defineComponent({
    name: 'DataTableBodyCheckbox',
    props: {
        rowKey: {
            type: [String, Number],
            required: true,
        },
        disabled: {
            type: Boolean,
            required: true,
        },
        onUpdateChecked: {
            type: Function,
            required: true,
        },
    },
    setup(props) {
        const { mergedCheckedRowKeySetRef, mergedInderminateRowKeySetRef } =
            inject(dataTableInjectionKey);
        return () => {
            const { rowKey } = props;
            return h(NCheckbox, {
                privateInsideTable: true,
                disabled: props.disabled,
                indeterminate: mergedInderminateRowKeySetRef.value.has(rowKey),
                checked: mergedCheckedRowKeySetRef.value.has(rowKey),
                onUpdateChecked: props.onUpdateChecked,
            });
        };
    },
});
