Object.defineProperty(exports, '__esModule', { value: true });
exports.setup = exports.radioGroupInjectionKey = exports.radioProps = void 0;
const vue_1 = require('vue');
const vooks_1 = require('vooks');
const _mixins_1 = require('../../_mixins');
const _utils_1 = require('../../_utils');
exports.radioProps = {
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
exports.radioGroupInjectionKey = (0, _utils_1.createInjectionKey)(
    'n-radio-group'
);
function setup(props) {
    if (process.env.NODE_ENV !== 'production') {
        (0, vue_1.watchEffect)(() => {
            if (props.checkedValue !== void 0) {
                (0, _utils_1.warnOnce)(
                    'radio',
                    '`checked-value` is deprecated, please use `checked` instead.'
                );
            }
        });
    }
    const formItem = (0, _mixins_1.useFormItem)(props, {
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
    const inputRef = (0, vue_1.ref)(null);
    const labelRef = (0, vue_1.ref)(null);
    const NRadioGroup = (0, vue_1.inject)(exports.radioGroupInjectionKey, null);
    const uncontrolledCheckedRef = (0, vue_1.ref)(props.defaultChecked);
    const controlledCheckedRef = (0, vue_1.toRef)(props, 'checked');
    const mergedCheckedRef = (0, vooks_1.useMergedState)(
        controlledCheckedRef,
        uncontrolledCheckedRef
    );
    const renderSafeCheckedRef = (0, vooks_1.useMemo)(() => {
        if (NRadioGroup) return NRadioGroup.valueRef.value === props.value;
        return mergedCheckedRef.value;
    });
    const mergedNameRef = (0, vooks_1.useMemo)(() => {
        const { name } = props;
        if (name !== void 0) return name;
        if (NRadioGroup) return NRadioGroup.nameRef.value;
    });
    const focusRef = (0, vue_1.ref)(false);
    function doUpdateChecked() {
        if (NRadioGroup) {
            const { doUpdateValue } = NRadioGroup;
            const { value } = props;
            (0, _utils_1.call)(doUpdateValue, value);
        } else {
            const { onUpdateChecked, 'onUpdate:checked': _onUpdateChecked } =
                props;
            const { nTriggerFormInput, nTriggerFormChange } = formItem;
            if (onUpdateChecked) (0, _utils_1.call)(onUpdateChecked, true);
            if (_onUpdateChecked) (0, _utils_1.call)(_onUpdateChecked, true);
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
            : (0, _mixins_1.useConfig)(props).mergedClsPrefixRef,
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
exports.setup = setup;
