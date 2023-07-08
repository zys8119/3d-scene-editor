import { defineComponent, h, inject } from 'vue';
import { NRadio } from '../../../radio';
import { dataTableInjectionKey } from '../interface';
export default defineComponent({
    name: 'DataTableBodyRadio',
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
        const { mergedCheckedRowKeySetRef, componentId } = inject(
            dataTableInjectionKey
        );
        return () => {
            const { rowKey } = props;
            return h(NRadio, {
                name: componentId,
                disabled: props.disabled,
                checked: mergedCheckedRowKeySetRef.value.has(rowKey),
                onUpdateChecked: props.onUpdateChecked,
            });
        };
    },
});
