import { h, defineComponent, inject } from 'vue';
import { NCheckbox } from '../../checkbox';
import { treeInjectionKey } from './interface';
export default defineComponent({
    name: 'NTreeNodeCheckbox',
    props: {
        clsPrefix: {
            type: String,
            required: true,
        },
        right: Boolean,
        focusable: Boolean,
        disabled: Boolean,
        checked: Boolean,
        indeterminate: Boolean,
        onCheck: Function,
    },
    setup(props) {
        const NTree = inject(treeInjectionKey);
        function doCheck(value) {
            const { onCheck } = props;
            if (onCheck) return onCheck(value);
        }
        function handleUpdateValue(value) {
            if (props.indeterminate) {
                doCheck(false);
            } else {
                doCheck(value);
            }
        }
        return {
            handleUpdateValue,
            mergedTheme: NTree.mergedThemeRef,
        };
    },
    render() {
        const {
            clsPrefix,
            mergedTheme,
            checked,
            indeterminate,
            disabled,
            focusable,
            handleUpdateValue,
        } = this;
        return h(
            'span',
            {
                class: [
                    `${clsPrefix}-tree-node-checkbox`,
                    this.right && `${clsPrefix}-tree-node-checkbox--right`,
                ],
                'data-checkbox': true,
            },
            h(NCheckbox, {
                focusable,
                disabled,
                theme: mergedTheme.peers.Checkbox,
                themeOverrides: mergedTheme.peerOverrides.Checkbox,
                checked,
                indeterminate,
                onUpdateChecked: handleUpdateValue,
            })
        );
    },
});
