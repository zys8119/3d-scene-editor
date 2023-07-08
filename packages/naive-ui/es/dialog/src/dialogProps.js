import { keysOf } from '../../_utils';
const dialogProps = {
    icon: Function,
    type: {
        type: String,
        default: 'default',
    },
    title: [String, Function],
    closable: {
        type: Boolean,
        default: true,
    },
    negativeText: String,
    positiveText: String,
    positiveButtonProps: Object,
    negativeButtonProps: Object,
    content: [String, Function],
    action: Function,
    showIcon: {
        type: Boolean,
        default: true,
    },
    loading: Boolean,
    bordered: Boolean,
    iconPlacement: String,
    onPositiveClick: Function,
    onNegativeClick: Function,
    onClose: Function,
};
export { dialogProps };
export const dialogPropKeys = keysOf(dialogProps);
