import { inject, ref, toRef, watchEffect } from 'vue';
import { useMemo, useMergedState } from 'vooks';
import { useConfig, useFormItem } from '../../_mixins';
import { call, createInjectionKey, warnOnce } from '../../_utils';
export const radioProps = {
    name: String,
    value: {
        type: [String, Number, Boolean],
        default: 'on',
    },
    checked: {
        type: Boolean,
        default: void 0,
    },
    defaultChecked: Boolean,
    disabled: {
        type: Boolean,
        default: void 0,
    },
    label: String,
    size: String,
    onUpdateChecked: [Function, Array],
    'onUpdate:checked': [Function, Array],
    checkedValue: {
        type: Boolean,
        default: void 0,
    },
};
export const radioGroupInjectionKey = createInjectionKey('n-radio-group');
function setup(props) {
    if (process.env.NODE_ENV !== 'production') {
        watchEffect(() => {
            if (props.checkedValue !== void 0) {
                warnOnce(
                    'radio',
                    '`checked-value` is deprecated, please use `checked` instead.'
                );
            }
        });
    }
    const formItem = useFormItem(props, {
        mergedSize(NFormItem) {
            const { size } = props;
            if (size !== void 0) return size;
            if (NRadioGroup) {
                const {
                    mergedSizeRef: { value: mergedSize },
                } = NRadioGroup;
                if (mergedSize !== void 0) {
                    return mergedSize;
                }
            }
            if (NFormItem) {
                return NFormItem.mergedSize.value;
            }
            return 'medium';
        },
        mergedDisabled(NFormItem) {
            if (props.disabled) return true;
            if (
                NRadioGroup === null || NRadioGroup === void 0
                    ? void 0
                    : NRadioGroup.disabledRef.value
            )
                return true;
            if (
                NFormItem === null || NFormItem === void 0
                    ? void 0
                    : NFormItem.disabled.value
            )
                return true;
            return false;
        },
    });
    const { mergedSizeRef, mergedDisabledRef } = formItem;
    const inputRef = ref(null);
    const labelRef = ref(null);
    const NRadioGroup = inject(radioGroupInjectionKey, null);
    const uncontrolledCheckedRef = ref(props.defaultChecked);
    const controlledCheckedRef = toRef(props, 'checked');
    const mergedCheckedRef = useMergedState(
        controlledCheckedRef,
        uncontrolledCheckedRef
    );
    const renderSafeCheckedRef = useMemo(() => {
        if (NRadioGroup) return NRadioGroup.valueRef.value === props.value;
        return mergedCheckedRef.value;
    });
    const mergedNameRef = useMemo(() => {
        const { name } = props;
        if (name !== void 0) return name;
        if (NRadioGroup) return NRadioGroup.nameRef.value;
    });
    const focusRef = ref(false);
    function doUpdateChecked() {
        if (NRadioGroup) {
            const { doUpdateValue } = NRadioGroup;
            const { value } = props;
            call(doUpdateValue, value);
        } else {
            const { onUpdateChecked, 'onUpdate:checked': _onUpdateChecked } =
                props;
            const { nTriggerFormInput, nTriggerFormChange } = formItem;
            if (onUpdateChecked) call(onUpdateChecked, true);
            if (_onUpdateChecked) call(_onUpdateChecked, true);
            nTriggerFormInput();
            nTriggerFormChange();
            uncontrolledCheckedRef.value = true;
        }
    }
    function toggle() {
        if (mergedDisabledRef.value) return;
        if (!renderSafeCheckedRef.value) {
            doUpdateChecked();
        }
    }
    function handleRadioInputChange() {
        toggle();
    }
    function handleRadioInputBlur() {
        focusRef.value = false;
    }
    function handleRadioInputFocus() {
        focusRef.value = true;
    }
    return {
        mergedClsPrefix: NRadioGroup
            ? NRadioGroup.mergedClsPrefixRef
            : useConfig(props).mergedClsPrefixRef,
        inputRef,
        labelRef,
        mergedName: mergedNameRef,
        mergedDisabled: mergedDisabledRef,
        uncontrolledChecked: uncontrolledCheckedRef,
        renderSafeChecked: renderSafeCheckedRef,
        focus: focusRef,
        mergedSize: mergedSizeRef,
        handleRadioInputChange,
        handleRadioInputBlur,
        handleRadioInputFocus,
    };
}
export { setup };
