import {
    h,
    ref,
    computed,
    toRef,
    defineComponent,
    watch,
    Transition,
    withDirectives,
    vShow,
    watchEffect,
} from 'vue';
import { getPreciseEventTarget, happensIn } from 'seemly';
import { createTreeMate } from 'treemate';
import { VBinder, VFollower, VTarget } from 'vueuc';
import { useIsMounted, useMergedState, useCompitable } from 'vooks';
import { clickoutside } from 'vdirs';
import {
    useTheme,
    useConfig,
    useLocale,
    useFormItem,
    useThemeClass,
} from '../../_mixins';
import {
    call,
    markEventEffectPerformed,
    useAdjustedTo,
    warnOnce,
} from '../../_utils';
import { NInternalSelectMenu, NInternalSelection } from '../../_internal';
import { selectLight } from '../styles';
import {
    createValOptMap,
    filterOptions,
    createTmOptions,
    patternMatched,
} from './utils';
import style from './styles/index.cssr';
export const selectProps = Object.assign(Object.assign({}, useTheme.props), {
    to: useAdjustedTo.propTo,
    bordered: {
        type: Boolean,
        default: void 0,
    },
    clearable: Boolean,
    clearFilterAfterSelect: {
        type: Boolean,
        default: true,
    },
    options: {
        type: Array,
        default: () => [],
    },
    defaultValue: {
        type: [String, Number, Array],
        default: null,
    },
    keyboard: {
        type: Boolean,
        default: true,
    },
    value: [String, Number, Array],
    placeholder: String,
    menuProps: Object,
    multiple: Boolean,
    size: String,
    filterable: Boolean,
    disabled: {
        type: Boolean,
        default: void 0,
    },
    remote: Boolean,
    loading: Boolean,
    filter: Function,
    placement: {
        type: String,
        default: 'bottom-start',
    },
    widthMode: {
        type: String,
        default: 'trigger',
    },
    tag: Boolean,
    onCreate: Function,
    fallbackOption: {
        type: [Function, Boolean],
        default: void 0,
    },
    show: {
        type: Boolean,
        default: void 0,
    },
    showArrow: {
        type: Boolean,
        default: true,
    },
    maxTagCount: [Number, String],
    consistentMenuWidth: {
        type: Boolean,
        default: true,
    },
    virtualScroll: {
        type: Boolean,
        default: true,
    },
    labelField: {
        type: String,
        default: 'label',
    },
    valueField: {
        type: String,
        default: 'value',
    },
    childrenField: {
        type: String,
        default: 'children',
    },
    renderLabel: Function,
    renderOption: Function,
    renderTag: Function,
    'onUpdate:value': [Function, Array],
    inputProps: Object,
    nodeProps: Function,
    ignoreComposition: { type: Boolean, default: true },
    showOnFocus: Boolean,
    onUpdateValue: [Function, Array],
    onBlur: [Function, Array],
    onClear: [Function, Array],
    onFocus: [Function, Array],
    onScroll: [Function, Array],
    onSearch: [Function, Array],
    onUpdateShow: [Function, Array],
    'onUpdate:show': [Function, Array],
    displayDirective: {
        type: String,
        default: 'show',
    },
    resetMenuOnOptionsChange: {
        type: Boolean,
        default: true,
    },
    status: String,
    showCheckmark: {
        type: Boolean,
        default: true,
    },
    onChange: [Function, Array],
    items: Array,
});
export default defineComponent({
    name: 'Select',
    props: selectProps,
    setup(props) {
        if (process.env.NODE_ENV !== 'production') {
            watchEffect(() => {
                if (props.items !== void 0) {
                    warnOnce(
                        'select',
                        '`items` is deprecated, please use `options` instead.'
                    );
                }
                if (props.onChange !== void 0) {
                    warnOnce(
                        'select',
                        '`on-change` is deprecated, please use `on-update:value` instead.'
                    );
                }
            });
        }
        const {
            mergedClsPrefixRef,
            mergedBorderedRef,
            namespaceRef,
            inlineThemeDisabled,
        } = useConfig(props);
        const themeRef = useTheme(
            'Select',
            '-select',
            style,
            selectLight,
            props,
            mergedClsPrefixRef
        );
        const uncontrolledValueRef = ref(props.defaultValue);
        const controlledValueRef = toRef(props, 'value');
        const mergedValueRef = useMergedState(
            controlledValueRef,
            uncontrolledValueRef
        );
        const focusedRef = ref(false);
        const patternRef = ref('');
        const treeMateRef = computed(() => {
            const { valueField, childrenField } = props;
            const options = createTmOptions(valueField, childrenField);
            return createTreeMate(filteredOptionsRef.value, options);
        });
        const valOptMapRef = computed(() =>
            createValOptMap(
                localOptionsRef.value,
                props.valueField,
                props.childrenField
            )
        );
        const uncontrolledShowRef = ref(false);
        const mergedShowRef = useMergedState(
            toRef(props, 'show'),
            uncontrolledShowRef
        );
        const triggerRef = ref(null);
        const followerRef = ref(null);
        const menuRef = ref(null);
        const { localeRef } = useLocale('Select');
        const localizedPlaceholderRef = computed(() => {
            var _a;
            return (_a = props.placeholder) !== null && _a !== void 0
                ? _a
                : localeRef.value.placeholder;
        });
        const compitableOptionsRef = useCompitable(props, ['items', 'options']);
        const emptyArray = [];
        const createdOptionsRef = ref([]);
        const beingCreatedOptionsRef = ref([]);
        const memoValOptMapRef = ref(/* @__PURE__ */ new Map());
        const wrappedFallbackOptionRef = computed(() => {
            const { fallbackOption } = props;
            if (fallbackOption === void 0) {
                const { labelField, valueField } = props;
                return (value) => ({
                    [labelField]: String(value),
                    [valueField]: value,
                });
            }
            if (fallbackOption === false) return false;
            return (value) => {
                return Object.assign(fallbackOption(value), {
                    value,
                });
            };
        });
        const localOptionsRef = computed(() => {
            return beingCreatedOptionsRef.value
                .concat(createdOptionsRef.value)
                .concat(compitableOptionsRef.value);
        });
        const resolvedFilterRef = computed(() => {
            const { filter } = props;
            if (filter) return filter;
            const { labelField, valueField } = props;
            return (pattern, option) => {
                if (!option) return false;
                const label = option[labelField];
                if (typeof label === 'string') {
                    return patternMatched(pattern, label);
                }
                const value = option[valueField];
                if (typeof value === 'string') {
                    return patternMatched(pattern, value);
                }
                if (typeof value === 'number') {
                    return patternMatched(pattern, String(value));
                }
                return false;
            };
        });
        const filteredOptionsRef = computed(() => {
            if (props.remote) {
                return compitableOptionsRef.value;
            } else {
                const { value: localOptions } = localOptionsRef;
                const { value: pattern } = patternRef;
                if (!pattern.length || !props.filterable) {
                    return localOptions;
                } else {
                    return filterOptions(
                        localOptions,
                        resolvedFilterRef.value,
                        pattern,
                        props.childrenField
                    );
                }
            }
        });
        function getMergedOptions(values) {
            const remote = props.remote;
            const { value: memoValOptMap } = memoValOptMapRef;
            const { value: valOptMap } = valOptMapRef;
            const { value: wrappedFallbackOption } = wrappedFallbackOptionRef;
            const options = [];
            values.forEach((value) => {
                if (valOptMap.has(value)) {
                    options.push(valOptMap.get(value));
                } else if (remote && memoValOptMap.has(value)) {
                    options.push(memoValOptMap.get(value));
                } else if (wrappedFallbackOption) {
                    const option = wrappedFallbackOption(value);
                    if (option) {
                        options.push(option);
                    }
                }
            });
            return options;
        }
        const selectedOptionsRef = computed(() => {
            if (props.multiple) {
                const { value: values } = mergedValueRef;
                if (!Array.isArray(values)) return [];
                return getMergedOptions(values);
            }
            return null;
        });
        const selectedOptionRef = computed(() => {
            const { value: mergedValue } = mergedValueRef;
            if (!props.multiple && !Array.isArray(mergedValue)) {
                if (mergedValue === null) return null;
                return getMergedOptions([mergedValue])[0] || null;
            }
            return null;
        });
        const formItem = useFormItem(props);
        const { mergedSizeRef, mergedDisabledRef, mergedStatusRef } = formItem;
        function doUpdateValue(value, option) {
            const {
                onChange,
                'onUpdate:value': _onUpdateValue,
                onUpdateValue,
            } = props;
            const { nTriggerFormChange, nTriggerFormInput } = formItem;
            if (onChange) call(onChange, value, option);
            if (onUpdateValue) call(onUpdateValue, value, option);
            if (_onUpdateValue) {
                call(_onUpdateValue, value, option);
            }
            uncontrolledValueRef.value = value;
            nTriggerFormChange();
            nTriggerFormInput();
        }
        function doBlur(e) {
            const { onBlur } = props;
            const { nTriggerFormBlur } = formItem;
            if (onBlur) call(onBlur, e);
            nTriggerFormBlur();
        }
        function doClear() {
            const { onClear } = props;
            if (onClear) call(onClear);
        }
        function doFocus(e) {
            const { onFocus, showOnFocus } = props;
            const { nTriggerFormFocus } = formItem;
            if (onFocus) call(onFocus, e);
            nTriggerFormFocus();
            if (showOnFocus) {
                openMenu();
            }
        }
        function doSearch(value) {
            const { onSearch } = props;
            if (onSearch) call(onSearch, value);
        }
        function doScroll(e) {
            const { onScroll } = props;
            if (onScroll) call(onScroll, e);
        }
        function updateMemorizedOptions() {
            var _a;
            const { remote, multiple } = props;
            if (remote) {
                const { value: memoValOptMap } = memoValOptMapRef;
                if (multiple) {
                    const { valueField } = props;
                    (_a = selectedOptionsRef.value) === null || _a === void 0
                        ? void 0
                        : _a.forEach((option) => {
                              memoValOptMap.set(option[valueField], option);
                          });
                } else {
                    const option = selectedOptionRef.value;
                    if (option) {
                        memoValOptMap.set(option[props.valueField], option);
                    }
                }
            }
        }
        function doUpdateShow(value) {
            const { onUpdateShow, 'onUpdate:show': _onUpdateShow } = props;
            if (onUpdateShow) call(onUpdateShow, value);
            if (_onUpdateShow) call(_onUpdateShow, value);
            uncontrolledShowRef.value = value;
        }
        function openMenu() {
            if (!mergedDisabledRef.value) {
                doUpdateShow(true);
                uncontrolledShowRef.value = true;
                if (props.filterable) {
                    focusSelectionInput();
                }
            }
        }
        function closeMenu() {
            doUpdateShow(false);
        }
        function handleMenuAfterLeave() {
            patternRef.value = '';
            beingCreatedOptionsRef.value = emptyArray;
        }
        const activeWithoutMenuOpenRef = ref(false);
        function onTriggerInputFocus() {
            if (props.filterable) {
                activeWithoutMenuOpenRef.value = true;
            }
        }
        function onTriggerInputBlur() {
            if (props.filterable) {
                activeWithoutMenuOpenRef.value = false;
                if (!mergedShowRef.value) {
                    handleMenuAfterLeave();
                }
            }
        }
        function handleTriggerClick() {
            if (mergedDisabledRef.value) return;
            if (!mergedShowRef.value) {
                openMenu();
            } else {
                if (!props.filterable) {
                    closeMenu();
                } else {
                    focusSelectionInput();
                }
            }
        }
        function handleTriggerBlur(e) {
            var _a, _b;
            if (
                (_b =
                    (_a = menuRef.value) === null || _a === void 0
                        ? void 0
                        : _a.selfRef) === null || _b === void 0
                    ? void 0
                    : _b.contains(e.relatedTarget)
            ) {
                return;
            }
            focusedRef.value = false;
            doBlur(e);
            closeMenu();
        }
        function handleTriggerFocus(e) {
            doFocus(e);
            focusedRef.value = true;
        }
        function handleMenuFocus(e) {
            focusedRef.value = true;
        }
        function handleMenuBlur(e) {
            var _a;
            if (
                (_a = triggerRef.value) === null || _a === void 0
                    ? void 0
                    : _a.$el.contains(e.relatedTarget)
            )
                return;
            focusedRef.value = false;
            doBlur(e);
            closeMenu();
        }
        function handleMenuTabOut() {
            var _a;
            (_a = triggerRef.value) === null || _a === void 0
                ? void 0
                : _a.focus();
            closeMenu();
        }
        function handleMenuClickOutside(e) {
            var _a;
            if (mergedShowRef.value) {
                if (
                    !((_a = triggerRef.value) === null || _a === void 0
                        ? void 0
                        : _a.$el.contains(getPreciseEventTarget(e)))
                ) {
                    closeMenu();
                }
            }
        }
        function createClearedMultipleSelectValue(value) {
            if (!Array.isArray(value)) return [];
            if (wrappedFallbackOptionRef.value) {
                return Array.from(value);
            } else {
                const { remote } = props;
                const { value: valOptMap } = valOptMapRef;
                if (remote) {
                    const { value: memoValOptMap } = memoValOptMapRef;
                    return value.filter(
                        (v) => valOptMap.has(v) || memoValOptMap.has(v)
                    );
                } else {
                    return value.filter((v) => valOptMap.has(v));
                }
            }
        }
        function handleToggleByTmNode(tmNode) {
            handleToggleByOption(tmNode.rawNode);
        }
        function handleToggleByOption(option) {
            if (mergedDisabledRef.value) return;
            const { tag, remote, clearFilterAfterSelect, valueField } = props;
            if (tag && !remote) {
                const { value: beingCreatedOptions } = beingCreatedOptionsRef;
                const beingCreatedOption = beingCreatedOptions[0] || null;
                if (beingCreatedOption) {
                    const createdOptions = createdOptionsRef.value;
                    if (!createdOptions.length) {
                        createdOptionsRef.value = [beingCreatedOption];
                    } else {
                        createdOptions.push(beingCreatedOption);
                    }
                    beingCreatedOptionsRef.value = emptyArray;
                }
            }
            if (remote) {
                memoValOptMapRef.value.set(option[valueField], option);
            }
            if (props.multiple) {
                const changedValue = createClearedMultipleSelectValue(
                    mergedValueRef.value
                );
                const index = changedValue.findIndex(
                    (value) => value === option[valueField]
                );
                if (~index) {
                    changedValue.splice(index, 1);
                    if (tag && !remote) {
                        const createdOptionIndex = getCreatedOptionIndex(
                            option[valueField]
                        );
                        if (~createdOptionIndex) {
                            createdOptionsRef.value.splice(
                                createdOptionIndex,
                                1
                            );
                            if (clearFilterAfterSelect) patternRef.value = '';
                        }
                    }
                } else {
                    changedValue.push(option[valueField]);
                    if (clearFilterAfterSelect) patternRef.value = '';
                }
                doUpdateValue(changedValue, getMergedOptions(changedValue));
            } else {
                if (tag && !remote) {
                    const createdOptionIndex = getCreatedOptionIndex(
                        option[valueField]
                    );
                    if (~createdOptionIndex) {
                        createdOptionsRef.value = [
                            createdOptionsRef.value[createdOptionIndex],
                        ];
                    } else {
                        createdOptionsRef.value = emptyArray;
                    }
                }
                focusSelection();
                closeMenu();
                doUpdateValue(option[valueField], option);
            }
        }
        function getCreatedOptionIndex(optionValue) {
            const createdOptions = createdOptionsRef.value;
            return createdOptions.findIndex(
                (createdOption) =>
                    createdOption[props.valueField] === optionValue
            );
        }
        function handlePatternInput(e) {
            if (!mergedShowRef.value) {
                openMenu();
            }
            const { value } = e.target;
            patternRef.value = value;
            const { tag, remote } = props;
            doSearch(value);
            if (tag && !remote) {
                if (!value) {
                    beingCreatedOptionsRef.value = emptyArray;
                    return;
                }
                const { onCreate } = props;
                const optionBeingCreated = onCreate
                    ? onCreate(value)
                    : { [props.labelField]: value, [props.valueField]: value };
                const { valueField } = props;
                if (
                    compitableOptionsRef.value.some(
                        (option) =>
                            option[valueField] ===
                            optionBeingCreated[valueField]
                    ) ||
                    createdOptionsRef.value.some(
                        (option) =>
                            option[valueField] ===
                            optionBeingCreated[valueField]
                    )
                ) {
                    beingCreatedOptionsRef.value = emptyArray;
                } else {
                    beingCreatedOptionsRef.value = [optionBeingCreated];
                }
            }
        }
        function handleClear(e) {
            e.stopPropagation();
            const { multiple } = props;
            if (!multiple && props.filterable) {
                closeMenu();
            }
            doClear();
            if (multiple) {
                doUpdateValue([], []);
            } else {
                doUpdateValue(null, null);
            }
        }
        function handleMenuMousedown(e) {
            if (!happensIn(e, 'action') && !happensIn(e, 'empty'))
                e.preventDefault();
        }
        function handleMenuScroll(e) {
            doScroll(e);
        }
        function handleKeydown(e) {
            var _a, _b, _c, _d, _e;
            if (!props.keyboard) {
                e.preventDefault();
                return;
            }
            switch (e.key) {
                case ' ':
                    if (props.filterable) break;
                    else {
                        e.preventDefault();
                    }
                case 'Enter':
                    if (
                        !((_a = triggerRef.value) === null || _a === void 0
                            ? void 0
                            : _a.isComposing)
                    ) {
                        if (mergedShowRef.value) {
                            const pendingTmNode =
                                (_b = menuRef.value) === null || _b === void 0
                                    ? void 0
                                    : _b.getPendingTmNode();
                            if (pendingTmNode) {
                                handleToggleByTmNode(pendingTmNode);
                            } else if (!props.filterable) {
                                closeMenu();
                                focusSelection();
                            }
                        } else {
                            openMenu();
                            if (props.tag && activeWithoutMenuOpenRef.value) {
                                const beingCreatedOption =
                                    beingCreatedOptionsRef.value[0];
                                if (beingCreatedOption) {
                                    const optionValue =
                                        beingCreatedOption[props.valueField];
                                    const { value: mergedValue } =
                                        mergedValueRef;
                                    if (props.multiple) {
                                        if (
                                            Array.isArray(mergedValue) &&
                                            mergedValue.some(
                                                (value) => value === optionValue
                                            )
                                        ) {
                                        } else {
                                            handleToggleByOption(
                                                beingCreatedOption
                                            );
                                        }
                                    } else {
                                        handleToggleByOption(
                                            beingCreatedOption
                                        );
                                    }
                                }
                            }
                        }
                    }
                    e.preventDefault();
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    if (props.loading) return;
                    if (mergedShowRef.value) {
                        (_c = menuRef.value) === null || _c === void 0
                            ? void 0
                            : _c.prev();
                    }
                    break;
                case 'ArrowDown':
                    e.preventDefault();
                    if (props.loading) return;
                    if (mergedShowRef.value) {
                        (_d = menuRef.value) === null || _d === void 0
                            ? void 0
                            : _d.next();
                    } else {
                        openMenu();
                    }
                    break;
                case 'Escape':
                    if (mergedShowRef.value) {
                        markEventEffectPerformed(e);
                        closeMenu();
                    }
                    (_e = triggerRef.value) === null || _e === void 0
                        ? void 0
                        : _e.focus();
                    break;
            }
        }
        function focusSelection() {
            var _a;
            (_a = triggerRef.value) === null || _a === void 0
                ? void 0
                : _a.focus();
        }
        function focusSelectionInput() {
            var _a;
            (_a = triggerRef.value) === null || _a === void 0
                ? void 0
                : _a.focusInput();
        }
        function handleTriggerOrMenuResize() {
            var _a;
            if (!mergedShowRef.value) return;
            (_a = followerRef.value) === null || _a === void 0
                ? void 0
                : _a.syncPosition();
        }
        updateMemorizedOptions();
        watch(toRef(props, 'options'), updateMemorizedOptions);
        const exposedMethods = {
            focus: () => {
                var _a;
                (_a = triggerRef.value) === null || _a === void 0
                    ? void 0
                    : _a.focus();
            },
            blur: () => {
                var _a;
                (_a = triggerRef.value) === null || _a === void 0
                    ? void 0
                    : _a.blur();
            },
        };
        const cssVarsRef = computed(() => {
            const {
                self: { menuBoxShadow },
            } = themeRef.value;
            return {
                '--n-menu-box-shadow': menuBoxShadow,
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? useThemeClass('select', void 0, cssVarsRef, props)
            : void 0;
        return Object.assign(Object.assign({}, exposedMethods), {
            mergedStatus: mergedStatusRef,
            mergedClsPrefix: mergedClsPrefixRef,
            mergedBordered: mergedBorderedRef,
            namespace: namespaceRef,
            treeMate: treeMateRef,
            isMounted: useIsMounted(),
            triggerRef,
            menuRef,
            pattern: patternRef,
            uncontrolledShow: uncontrolledShowRef,
            mergedShow: mergedShowRef,
            adjustedTo: useAdjustedTo(props),
            uncontrolledValue: uncontrolledValueRef,
            mergedValue: mergedValueRef,
            followerRef,
            localizedPlaceholder: localizedPlaceholderRef,
            selectedOption: selectedOptionRef,
            selectedOptions: selectedOptionsRef,
            mergedSize: mergedSizeRef,
            mergedDisabled: mergedDisabledRef,
            focused: focusedRef,
            activeWithoutMenuOpen: activeWithoutMenuOpenRef,
            inlineThemeDisabled,
            onTriggerInputFocus,
            onTriggerInputBlur,
            handleTriggerOrMenuResize,
            handleMenuFocus,
            handleMenuBlur,
            handleMenuTabOut,
            handleTriggerClick,
            handleToggle: handleToggleByTmNode,
            handleDeleteOption: handleToggleByOption,
            handlePatternInput,
            handleClear,
            handleTriggerBlur,
            handleTriggerFocus,
            handleKeydown,
            handleMenuAfterLeave,
            handleMenuClickOutside,
            handleMenuScroll,
            handleMenuKeydown: handleKeydown,
            handleMenuMousedown,
            mergedTheme: themeRef,
            cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
            themeClass:
                themeClassHandle === null || themeClassHandle === void 0
                    ? void 0
                    : themeClassHandle.themeClass,
            onRender:
                themeClassHandle === null || themeClassHandle === void 0
                    ? void 0
                    : themeClassHandle.onRender,
        });
    },
    render() {
        return h(
            'div',
            { class: `${this.mergedClsPrefix}-select` },
            h(VBinder, null, {
                default: () => [
                    h(VTarget, null, {
                        default: () =>
                            h(
                                NInternalSelection,
                                {
                                    ref: 'triggerRef',
                                    inlineThemeDisabled:
                                        this.inlineThemeDisabled,
                                    status: this.mergedStatus,
                                    inputProps: this.inputProps,
                                    clsPrefix: this.mergedClsPrefix,
                                    showArrow: this.showArrow,
                                    maxTagCount: this.maxTagCount,
                                    bordered: this.mergedBordered,
                                    active:
                                        this.activeWithoutMenuOpen ||
                                        this.mergedShow,
                                    pattern: this.pattern,
                                    placeholder: this.localizedPlaceholder,
                                    selectedOption: this.selectedOption,
                                    selectedOptions: this.selectedOptions,
                                    multiple: this.multiple,
                                    renderTag: this.renderTag,
                                    renderLabel: this.renderLabel,
                                    filterable: this.filterable,
                                    clearable: this.clearable,
                                    disabled: this.mergedDisabled,
                                    size: this.mergedSize,
                                    theme: this.mergedTheme.peers
                                        .InternalSelection,
                                    labelField: this.labelField,
                                    valueField: this.valueField,
                                    themeOverrides:
                                        this.mergedTheme.peerOverrides
                                            .InternalSelection,
                                    loading: this.loading,
                                    focused: this.focused,
                                    onClick: this.handleTriggerClick,
                                    onDeleteOption: this.handleDeleteOption,
                                    onPatternInput: this.handlePatternInput,
                                    onClear: this.handleClear,
                                    onBlur: this.handleTriggerBlur,
                                    onFocus: this.handleTriggerFocus,
                                    onKeydown: this.handleKeydown,
                                    onPatternBlur: this.onTriggerInputBlur,
                                    onPatternFocus: this.onTriggerInputFocus,
                                    onResize: this.handleTriggerOrMenuResize,
                                    ignoreComposition: this.ignoreComposition,
                                },
                                {
                                    arrow: () => {
                                        var _a, _b;
                                        return [
                                            (_b = (_a = this.$slots).arrow) ===
                                                null || _b === void 0
                                                ? void 0
                                                : _b.call(_a),
                                        ];
                                    },
                                }
                            ),
                    }),
                    h(
                        VFollower,
                        {
                            ref: 'followerRef',
                            show: this.mergedShow,
                            to: this.adjustedTo,
                            teleportDisabled:
                                this.adjustedTo === useAdjustedTo.tdkey,
                            containerClass: this.namespace,
                            width: this.consistentMenuWidth ? 'target' : void 0,
                            minWidth: 'target',
                            placement: this.placement,
                        },
                        {
                            default: () =>
                                h(
                                    Transition,
                                    {
                                        name: 'fade-in-scale-up-transition',
                                        appear: this.isMounted,
                                        onAfterLeave: this.handleMenuAfterLeave,
                                    },
                                    {
                                        default: () => {
                                            var _a, _b, _c;
                                            if (
                                                !(
                                                    this.mergedShow ||
                                                    this.displayDirective ===
                                                        'show'
                                                )
                                            ) {
                                                return null;
                                            }
                                            (_a = this.onRender) === null ||
                                            _a === void 0
                                                ? void 0
                                                : _a.call(this);
                                            return withDirectives(
                                                h(
                                                    NInternalSelectMenu,
                                                    Object.assign(
                                                        {},
                                                        this.menuProps,
                                                        {
                                                            ref: 'menuRef',
                                                            onResize:
                                                                this
                                                                    .handleTriggerOrMenuResize,
                                                            inlineThemeDisabled:
                                                                this
                                                                    .inlineThemeDisabled,
                                                            virtualScroll:
                                                                this
                                                                    .consistentMenuWidth &&
                                                                this
                                                                    .virtualScroll,
                                                            class: [
                                                                `${this.mergedClsPrefix}-select-menu`,
                                                                this.themeClass,
                                                                (_b =
                                                                    this
                                                                        .menuProps) ===
                                                                    null ||
                                                                _b === void 0
                                                                    ? void 0
                                                                    : _b.class,
                                                            ],
                                                            clsPrefix:
                                                                this
                                                                    .mergedClsPrefix,
                                                            focusable: true,
                                                            labelField:
                                                                this.labelField,
                                                            valueField:
                                                                this.valueField,
                                                            autoPending: true,
                                                            nodeProps:
                                                                this.nodeProps,
                                                            theme: this
                                                                .mergedTheme
                                                                .peers
                                                                .InternalSelectMenu,
                                                            themeOverrides:
                                                                this.mergedTheme
                                                                    .peerOverrides
                                                                    .InternalSelectMenu,
                                                            treeMate:
                                                                this.treeMate,
                                                            multiple:
                                                                this.multiple,
                                                            size: 'medium',
                                                            renderOption:
                                                                this
                                                                    .renderOption,
                                                            renderLabel:
                                                                this
                                                                    .renderLabel,
                                                            value: this
                                                                .mergedValue,
                                                            style: [
                                                                (_c =
                                                                    this
                                                                        .menuProps) ===
                                                                    null ||
                                                                _c === void 0
                                                                    ? void 0
                                                                    : _c.style,
                                                                this.cssVars,
                                                            ],
                                                            onToggle:
                                                                this
                                                                    .handleToggle,
                                                            onScroll:
                                                                this
                                                                    .handleMenuScroll,
                                                            onFocus:
                                                                this
                                                                    .handleMenuFocus,
                                                            onBlur: this
                                                                .handleMenuBlur,
                                                            onKeydown:
                                                                this
                                                                    .handleMenuKeydown,
                                                            onTabOut:
                                                                this
                                                                    .handleMenuTabOut,
                                                            onMousedown:
                                                                this
                                                                    .handleMenuMousedown,
                                                            show: this
                                                                .mergedShow,
                                                            showCheckmark:
                                                                this
                                                                    .showCheckmark,
                                                            resetMenuOnOptionsChange:
                                                                this
                                                                    .resetMenuOnOptionsChange,
                                                        }
                                                    ),
                                                    {
                                                        empty: () => {
                                                            var _a2, _b2;
                                                            return [
                                                                (_b2 = (_a2 =
                                                                    this.$slots)
                                                                    .empty) ===
                                                                    null ||
                                                                _b2 === void 0
                                                                    ? void 0
                                                                    : _b2.call(
                                                                          _a2
                                                                      ),
                                                            ];
                                                        },
                                                        action: () => {
                                                            var _a2, _b2;
                                                            return [
                                                                (_b2 = (_a2 =
                                                                    this.$slots)
                                                                    .action) ===
                                                                    null ||
                                                                _b2 === void 0
                                                                    ? void 0
                                                                    : _b2.call(
                                                                          _a2
                                                                      ),
                                                            ];
                                                        },
                                                    }
                                                ),
                                                this.displayDirective === 'show'
                                                    ? [
                                                          [
                                                              vShow,
                                                              this.mergedShow,
                                                          ],
                                                          [
                                                              clickoutside,
                                                              this
                                                                  .handleMenuClickOutside,
                                                              void 0,
                                                              { capture: true },
                                                          ],
                                                      ]
                                                    : [
                                                          [
                                                              clickoutside,
                                                              this
                                                                  .handleMenuClickOutside,
                                                              void 0,
                                                              { capture: true },
                                                          ],
                                                      ]
                                            );
                                        },
                                    }
                                ),
                        }
                    ),
                ],
            })
        );
    },
});
