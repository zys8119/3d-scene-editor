import { ref, computed, toRef } from 'vue';
import { useMemo, useMergedState } from 'vooks';
export function useTransferData(props, mergedDisabledRef) {
    const uncontrolledValueRef = ref(props.defaultValue);
    const controlledValueRef = toRef(props, 'value');
    const mergedValueRef = useMergedState(
        controlledValueRef,
        uncontrolledValueRef
    );
    const optMapRef = computed(() => {
        const map = /* @__PURE__ */ new Map();
        (props.options || []).forEach((opt) => map.set(opt.value, opt));
        return map;
    });
    const tgtValueSetRef = computed(() => new Set(mergedValueRef.value || []));
    const srcOptsRef = computed(() =>
        props.options.filter(
            (option) => !tgtValueSetRef.value.has(option.value)
        )
    );
    const tgtOptsRef = computed(() => {
        const optMap = optMapRef.value;
        return (mergedValueRef.value || []).map((v) => optMap.get(v));
    });
    const srcPatternRef = ref('');
    const tgtPatternRef = ref('');
    const filteredSrcOptsRef = computed(() => {
        if (!props.filterable) return srcOptsRef.value;
        const { filter } = props;
        return srcOptsRef.value.filter((opt) =>
            filter(srcPatternRef.value, opt, 'source')
        );
    });
    const filteredTgtOptsRef = computed(() => {
        if (!props.filterable) return tgtOptsRef.value;
        const { filter } = props;
        return tgtOptsRef.value.filter((opt) =>
            filter(tgtPatternRef.value, opt, 'target')
        );
    });
    const avlSrcValueSetRef = computed(
        () =>
            new Set(
                filteredSrcOptsRef.value
                    .filter((opt) => !opt.disabled)
                    .map((opt) => opt.value)
            )
    );
    const avlTgtValueSetRef = computed(
        () =>
            new Set(
                filteredTgtOptsRef.value
                    .filter((opt) => !opt.disabled)
                    .map((opt) => opt.value)
            )
    );
    const srcCheckedValuesRef = ref([]);
    const tgtCheckedValuesRef = ref([]);
    const srcCheckedStatusRef = computed(() => {
        const srcCheckedLength = srcCheckedValuesRef.value.filter((v) =>
            avlSrcValueSetRef.value.has(v)
        ).length;
        const avlValueCount = avlSrcValueSetRef.value.size;
        if (avlValueCount === 0) {
            return {
                checked: false,
                indeterminate: false,
                disabled: true,
            };
        } else if (srcCheckedLength === 0) {
            return {
                checked: false,
                indeterminate: false,
            };
        } else if (srcCheckedLength === avlValueCount) {
            return {
                checked: true,
                indeterminate: false,
            };
        } else {
            return {
                checked: false,
                indeterminate: true,
            };
        }
    });
    const tgtCheckedStatusRef = computed(() => {
        const tgtCheckedLength = tgtCheckedValuesRef.value.filter((v) =>
            avlTgtValueSetRef.value.has(v)
        ).length;
        const avlValueCount = avlTgtValueSetRef.value.size;
        if (avlValueCount === 0) {
            return {
                checked: false,
                indeterminate: false,
                disabled: true,
            };
        } else if (tgtCheckedLength === 0) {
            return {
                checked: false,
                indeterminate: false,
            };
        } else if (tgtCheckedLength === avlValueCount) {
            return {
                checked: true,
                indeterminate: false,
            };
        } else {
            return {
                checked: false,
                indeterminate: true,
            };
        }
    });
    const fromButtonDisabledRef = useMemo(() => {
        if (mergedDisabledRef.value) return true;
        return tgtCheckedValuesRef.value.length === 0;
    });
    const toButtonDisabledRef = useMemo(() => {
        if (mergedDisabledRef.value) return true;
        return srcCheckedValuesRef.value.length === 0;
    });
    const isInputingRef = ref(false);
    function handleInputFocus() {
        isInputingRef.value = true;
    }
    function handleInputBlur() {
        isInputingRef.value = false;
    }
    function handleSrcFilterUpdateValue(value) {
        srcPatternRef.value = value !== null && value !== void 0 ? value : '';
    }
    function handleTgtFilterUpdateValue(value) {
        tgtPatternRef.value = value !== null && value !== void 0 ? value : '';
    }
    return {
        uncontrolledValue: uncontrolledValueRef,
        mergedValue: mergedValueRef,
        avlSrcValueSet: avlSrcValueSetRef,
        avlTgtValueSet: avlTgtValueSetRef,
        tgtOpts: tgtOptsRef,
        srcOpts: srcOptsRef,
        filteredSrcOpts: filteredSrcOptsRef,
        filteredTgtOpts: filteredTgtOptsRef,
        srcCheckedValues: srcCheckedValuesRef,
        tgtCheckedValues: tgtCheckedValuesRef,
        srcCheckedStatus: srcCheckedStatusRef,
        tgtCheckedStatus: tgtCheckedStatusRef,
        srcPattern: srcPatternRef,
        tgtPattern: tgtPatternRef,
        isInputing: isInputingRef,
        fromButtonDisabled: fromButtonDisabledRef,
        toButtonDisabled: toButtonDisabledRef,
        handleInputFocus,
        handleInputBlur,
        handleTgtFilterUpdateValue,
        handleSrcFilterUpdateValue,
    };
}
