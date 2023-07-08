import {
    h,
    computed,
    defineComponent,
    nextTick,
    ref,
    toRef,
    onMounted,
    getCurrentInstance,
    watch,
    watchEffect,
    provide,
    Fragment,
} from 'vue';
import { useMergedState, useMemo } from 'vooks';
import { getPadding } from 'seemly';
import { VResizeObserver } from 'vueuc';
import { off, on } from 'evtd';
import { isSafari } from '../../_utils/env/browser';
import { EyeIcon, EyeOffIcon } from '../../_internal/icons';
import { useRtl } from '../../_mixins/use-rtl';
import {
    NBaseClear,
    NBaseIcon,
    NBaseSuffix,
    NScrollbar,
} from '../../_internal';
import {
    useTheme,
    useLocale,
    useFormItem,
    useConfig,
    useThemeClass,
    useStyle,
} from '../../_mixins';
import {
    call,
    createKey,
    resolveSlot,
    resolveWrappedSlot,
    warnOnce,
} from '../../_utils';
import { inputLight } from '../styles';
import { inputInjectionKey } from './interface';
import { isEmptyInputValue, useCursor } from './utils';
import WordCount from './WordCount';
import style, { safariStyle } from './styles/input.cssr';
export const inputProps = Object.assign(Object.assign({}, useTheme.props), {
    bordered: {
        type: Boolean,
        default: void 0,
    },
    type: {
        type: String,
        default: 'text',
    },
    placeholder: [Array, String],
    defaultValue: {
        type: [String, Array],
        default: null,
    },
    value: [String, Array],
    disabled: {
        type: Boolean,
        default: void 0,
    },
    size: String,
    rows: {
        type: [Number, String],
        default: 3,
    },
    round: Boolean,
    minlength: [String, Number],
    maxlength: [String, Number],
    clearable: Boolean,
    autosize: {
        type: [Boolean, Object],
        default: false,
    },
    pair: Boolean,
    separator: String,
    readonly: {
        type: [String, Boolean],
        default: false,
    },
    passivelyActivated: Boolean,
    showPasswordOn: String,
    stateful: {
        type: Boolean,
        default: true,
    },
    autofocus: Boolean,
    inputProps: Object,
    resizable: {
        type: Boolean,
        default: true,
    },
    showCount: Boolean,
    loading: {
        type: Boolean,
        default: void 0,
    },
    allowInput: Function,
    renderCount: Function,
    onMousedown: Function,
    onKeydown: Function,
    onKeyup: Function,
    onInput: [Function, Array],
    onFocus: [Function, Array],
    onBlur: [Function, Array],
    onClick: [Function, Array],
    onChange: [Function, Array],
    onClear: [Function, Array],
    onWheel: Function,
    countGraphemes: Function,
    status: String,
    'onUpdate:value': [Function, Array],
    onUpdateValue: [Function, Array],
    textDecoration: [String, Array],
    attrSize: {
        type: Number,
        default: 20,
    },
    onInputBlur: [Function, Array],
    onInputFocus: [Function, Array],
    onDeactivate: [Function, Array],
    onActivate: [Function, Array],
    onWrapperFocus: [Function, Array],
    onWrapperBlur: [Function, Array],
    internalDeactivateOnEnter: Boolean,
    internalForceFocus: Boolean,
    internalLoadingBeforeSuffix: Boolean,
    showPasswordToggle: Boolean,
});
export default defineComponent({
    name: 'Input',
    props: inputProps,
    setup(props) {
        if (process.env.NODE_ENV !== 'production') {
            watchEffect(() => {
                if (props.showPasswordToggle) {
                    warnOnce(
                        'input',
                        '`show-password-toggle` is deprecated, please use `showPasswordOn="click"` instead'
                    );
                }
            });
        }
        const {
            mergedClsPrefixRef,
            mergedBorderedRef,
            inlineThemeDisabled,
            mergedRtlRef,
        } = useConfig(props);
        const themeRef = useTheme(
            'Input',
            '-input',
            style,
            inputLight,
            props,
            mergedClsPrefixRef
        );
        if (isSafari) {
            useStyle('-input-safari', safariStyle, mergedClsPrefixRef);
        }
        const wrapperElRef = ref(null);
        const textareaElRef = ref(null);
        const textareaMirrorElRef = ref(null);
        const inputMirrorElRef = ref(null);
        const inputElRef = ref(null);
        const inputEl2Ref = ref(null);
        const currentFocusedInputRef = ref(null);
        const focusedInputCursorControl = useCursor(currentFocusedInputRef);
        const textareaScrollbarInstRef = ref(null);
        const { localeRef } = useLocale('Input');
        const uncontrolledValueRef = ref(props.defaultValue);
        const controlledValueRef = toRef(props, 'value');
        const mergedValueRef = useMergedState(
            controlledValueRef,
            uncontrolledValueRef
        );
        const formItem = useFormItem(props);
        const { mergedSizeRef, mergedDisabledRef, mergedStatusRef } = formItem;
        const focusedRef = ref(false);
        const hoverRef = ref(false);
        const isComposingRef = ref(false);
        const activatedRef = ref(false);
        let syncSource = null;
        const mergedPlaceholderRef = computed(() => {
            const { placeholder, pair } = props;
            if (pair) {
                if (Array.isArray(placeholder)) {
                    return placeholder;
                } else if (placeholder === void 0) {
                    return ['', ''];
                }
                return [placeholder, placeholder];
            } else if (placeholder === void 0) {
                return [localeRef.value.placeholder];
            } else {
                return [placeholder];
            }
        });
        const showPlaceholder1Ref = computed(() => {
            const { value: isComposing } = isComposingRef;
            const { value: mergedValue } = mergedValueRef;
            const { value: mergedPlaceholder } = mergedPlaceholderRef;
            return (
                !isComposing &&
                (isEmptyInputValue(mergedValue) ||
                    (Array.isArray(mergedValue) &&
                        isEmptyInputValue(mergedValue[0]))) &&
                mergedPlaceholder[0]
            );
        });
        const showPlaceholder2Ref = computed(() => {
            const { value: isComposing } = isComposingRef;
            const { value: mergedValue } = mergedValueRef;
            const { value: mergedPlaceholder } = mergedPlaceholderRef;
            return (
                !isComposing &&
                mergedPlaceholder[1] &&
                (isEmptyInputValue(mergedValue) ||
                    (Array.isArray(mergedValue) &&
                        isEmptyInputValue(mergedValue[1])))
            );
        });
        const mergedFocusRef = useMemo(() => {
            return props.internalForceFocus || focusedRef.value;
        });
        const showClearButton = useMemo(() => {
            if (
                mergedDisabledRef.value ||
                props.readonly ||
                !props.clearable ||
                (!mergedFocusRef.value && !hoverRef.value)
            ) {
                return false;
            }
            const { value: mergedValue } = mergedValueRef;
            const { value: mergedFocus } = mergedFocusRef;
            if (props.pair) {
                return (
                    !!(
                        Array.isArray(mergedValue) &&
                        (mergedValue[0] || mergedValue[1])
                    ) &&
                    (hoverRef.value || mergedFocus)
                );
            } else {
                return !!mergedValue && (hoverRef.value || mergedFocus);
            }
        });
        const mergedShowPasswordOnRef = computed(() => {
            const { showPasswordOn } = props;
            if (showPasswordOn) {
                return showPasswordOn;
            }
            if (props.showPasswordToggle) return 'click';
            return void 0;
        });
        const passwordVisibleRef = ref(false);
        const textDecorationStyleRef = computed(() => {
            const { textDecoration } = props;
            if (!textDecoration) return ['', ''];
            if (Array.isArray(textDecoration)) {
                return textDecoration.map((v) => ({
                    textDecoration: v,
                }));
            }
            return [
                {
                    textDecoration,
                },
            ];
        });
        const textAreaScrollContainerWidthRef = ref(void 0);
        const updateTextAreaStyle = () => {
            var _a, _b;
            if (props.type === 'textarea') {
                const { autosize } = props;
                if (autosize) {
                    textAreaScrollContainerWidthRef.value =
                        (_b =
                            (_a = textareaScrollbarInstRef.value) === null ||
                            _a === void 0
                                ? void 0
                                : _a.$el) === null || _b === void 0
                            ? void 0
                            : _b.offsetWidth;
                }
                if (!textareaElRef.value) return;
                if (typeof autosize === 'boolean') return;
                const {
                    paddingTop: stylePaddingTop,
                    paddingBottom: stylePaddingBottom,
                    lineHeight: styleLineHeight,
                } = window.getComputedStyle(textareaElRef.value);
                const paddingTop = Number(stylePaddingTop.slice(0, -2));
                const paddingBottom = Number(stylePaddingBottom.slice(0, -2));
                const lineHeight = Number(styleLineHeight.slice(0, -2));
                const { value: textareaMirrorEl } = textareaMirrorElRef;
                if (!textareaMirrorEl) return;
                if (autosize.minRows) {
                    const minRows = Math.max(autosize.minRows, 1);
                    const styleMinHeight = `${
                        paddingTop + paddingBottom + lineHeight * minRows
                    }px`;
                    textareaMirrorEl.style.minHeight = styleMinHeight;
                }
                if (autosize.maxRows) {
                    const styleMaxHeight = `${
                        paddingTop +
                        paddingBottom +
                        lineHeight * autosize.maxRows
                    }px`;
                    textareaMirrorEl.style.maxHeight = styleMaxHeight;
                }
            }
        };
        const maxlengthRef = computed(() => {
            const { maxlength } = props;
            return maxlength === void 0 ? void 0 : Number(maxlength);
        });
        onMounted(() => {
            const { value } = mergedValueRef;
            if (!Array.isArray(value)) {
                syncMirror(value);
            }
        });
        const vm = getCurrentInstance().proxy;
        function doUpdateValue(value) {
            const {
                onUpdateValue,
                'onUpdate:value': _onUpdateValue,
                onInput,
            } = props;
            const { nTriggerFormInput } = formItem;
            if (onUpdateValue) call(onUpdateValue, value);
            if (_onUpdateValue) call(_onUpdateValue, value);
            if (onInput) call(onInput, value);
            uncontrolledValueRef.value = value;
            nTriggerFormInput();
        }
        function doChange(value) {
            const { onChange } = props;
            const { nTriggerFormChange } = formItem;
            if (onChange) call(onChange, value);
            uncontrolledValueRef.value = value;
            nTriggerFormChange();
        }
        function doBlur(e) {
            const { onBlur } = props;
            const { nTriggerFormBlur } = formItem;
            if (onBlur) call(onBlur, e);
            nTriggerFormBlur();
        }
        function doFocus(e) {
            const { onFocus } = props;
            const { nTriggerFormFocus } = formItem;
            if (onFocus) call(onFocus, e);
            nTriggerFormFocus();
        }
        function doClear(e) {
            const { onClear } = props;
            if (onClear) call(onClear, e);
        }
        function doUpdateValueBlur(e) {
            const { onInputBlur } = props;
            if (onInputBlur) call(onInputBlur, e);
        }
        function doUpdateValueFocus(e) {
            const { onInputFocus } = props;
            if (onInputFocus) call(onInputFocus, e);
        }
        function doDeactivate() {
            const { onDeactivate } = props;
            if (onDeactivate) call(onDeactivate);
        }
        function doActivate() {
            const { onActivate } = props;
            if (onActivate) call(onActivate);
        }
        function doClick(e) {
            const { onClick } = props;
            if (onClick) call(onClick, e);
        }
        function doWrapperFocus(e) {
            const { onWrapperFocus } = props;
            if (onWrapperFocus) call(onWrapperFocus, e);
        }
        function doWrapperBlur(e) {
            const { onWrapperBlur } = props;
            if (onWrapperBlur) call(onWrapperBlur, e);
        }
        function handleCompositionStart() {
            isComposingRef.value = true;
        }
        function handleCompositionEnd(e) {
            isComposingRef.value = false;
            if (e.target === inputEl2Ref.value) {
                handleInput(e, 1);
            } else {
                handleInput(e, 0);
            }
        }
        function handleInput(e, index = 0, event = 'input') {
            const targetValue = e.target.value;
            syncMirror(targetValue);
            if (e instanceof InputEvent && !e.isComposing) {
                isComposingRef.value = false;
            }
            if (props.type === 'textarea') {
                const { value: textareaScrollbarInst } =
                    textareaScrollbarInstRef;
                if (textareaScrollbarInst) {
                    textareaScrollbarInst.syncUnifiedContainer();
                }
            }
            syncSource = targetValue;
            if (isComposingRef.value) return;
            focusedInputCursorControl.recordCursor();
            const isIncomingValueValid = allowInput(targetValue);
            if (isIncomingValueValid) {
                if (!props.pair) {
                    event === 'input'
                        ? doUpdateValue(targetValue)
                        : doChange(targetValue);
                } else {
                    let { value } = mergedValueRef;
                    if (!Array.isArray(value)) {
                        value = ['', ''];
                    } else {
                        value = [value[0], value[1]];
                    }
                    value[index] = targetValue;
                    event === 'input' ? doUpdateValue(value) : doChange(value);
                }
            }
            vm.$forceUpdate();
            if (!isIncomingValueValid) {
                void nextTick(focusedInputCursorControl.restoreCursor);
            }
        }
        function allowInput(value) {
            const { countGraphemes, maxlength, minlength } = props;
            if (countGraphemes) {
                let graphemesCount;
                if (maxlength !== void 0) {
                    if (graphemesCount === void 0) {
                        graphemesCount = countGraphemes(value);
                    }
                    if (graphemesCount > Number(maxlength)) return false;
                }
                if (minlength !== void 0) {
                    if (graphemesCount === void 0) {
                        graphemesCount = countGraphemes(value);
                    }
                    if (graphemesCount < Number(maxlength)) return false;
                }
            }
            const { allowInput: allowInput2 } = props;
            if (typeof allowInput2 === 'function') {
                return allowInput2(value);
            }
            return true;
        }
        function handleInputBlur(e) {
            doUpdateValueBlur(e);
            if (e.relatedTarget === wrapperElRef.value) {
                doDeactivate();
            }
            if (
                !(
                    e.relatedTarget !== null &&
                    (e.relatedTarget === inputElRef.value ||
                        e.relatedTarget === inputEl2Ref.value ||
                        e.relatedTarget === textareaElRef.value)
                )
            ) {
                activatedRef.value = false;
            }
            dealWithEvent(e, 'blur');
            currentFocusedInputRef.value = null;
        }
        function handleInputFocus(e, index) {
            doUpdateValueFocus(e);
            focusedRef.value = true;
            activatedRef.value = true;
            doActivate();
            dealWithEvent(e, 'focus');
            if (index === 0) {
                currentFocusedInputRef.value = inputElRef.value;
            } else if (index === 1) {
                currentFocusedInputRef.value = inputEl2Ref.value;
            } else if (index === 2) {
                currentFocusedInputRef.value = textareaElRef.value;
            }
        }
        function handleWrapperBlur(e) {
            if (props.passivelyActivated) {
                doWrapperBlur(e);
                dealWithEvent(e, 'blur');
            }
        }
        function handleWrapperFocus(e) {
            if (props.passivelyActivated) {
                focusedRef.value = true;
                doWrapperFocus(e);
                dealWithEvent(e, 'focus');
            }
        }
        function dealWithEvent(e, type) {
            if (
                e.relatedTarget !== null &&
                (e.relatedTarget === inputElRef.value ||
                    e.relatedTarget === inputEl2Ref.value ||
                    e.relatedTarget === textareaElRef.value ||
                    e.relatedTarget === wrapperElRef.value)
            ) {
            } else {
                if (type === 'focus') {
                    doFocus(e);
                    focusedRef.value = true;
                } else if (type === 'blur') {
                    doBlur(e);
                    focusedRef.value = false;
                }
            }
        }
        function handleChange(e, index) {
            handleInput(e, index, 'change');
        }
        function handleClick(e) {
            doClick(e);
        }
        function handleClear(e) {
            doClear(e);
            if (props.pair) {
                doUpdateValue(['', '']);
                doChange(['', '']);
            } else {
                doUpdateValue('');
                doChange('');
            }
        }
        function handleMouseDown(e) {
            const { onMousedown } = props;
            if (onMousedown) onMousedown(e);
            const { tagName } = e.target;
            if (tagName !== 'INPUT' && tagName !== 'TEXTAREA') {
                if (props.resizable) {
                    const { value: wrapperEl } = wrapperElRef;
                    if (wrapperEl) {
                        const { left, top, width, height } =
                            wrapperEl.getBoundingClientRect();
                        const resizeHandleSize = 14;
                        if (
                            left + width - resizeHandleSize < e.clientX &&
                            e.clientX < left + width &&
                            top + height - resizeHandleSize < e.clientY &&
                            e.clientY < top + height
                        ) {
                            return;
                        }
                    }
                }
                e.preventDefault();
                if (!focusedRef.value) {
                    focus();
                }
            }
        }
        function handleMouseEnter() {
            var _a;
            hoverRef.value = true;
            if (props.type === 'textarea') {
                (_a = textareaScrollbarInstRef.value) === null || _a === void 0
                    ? void 0
                    : _a.handleMouseEnterWrapper();
            }
        }
        function handleMouseLeave() {
            var _a;
            hoverRef.value = false;
            if (props.type === 'textarea') {
                (_a = textareaScrollbarInstRef.value) === null || _a === void 0
                    ? void 0
                    : _a.handleMouseLeaveWrapper();
            }
        }
        function handlePasswordToggleClick() {
            if (mergedDisabledRef.value) return;
            if (mergedShowPasswordOnRef.value !== 'click') return;
            passwordVisibleRef.value = !passwordVisibleRef.value;
        }
        function handlePasswordToggleMousedown(e) {
            if (mergedDisabledRef.value) return;
            e.preventDefault();
            const preventDefaultOnce = (e2) => {
                e2.preventDefault();
                off('mouseup', document, preventDefaultOnce);
            };
            on('mouseup', document, preventDefaultOnce);
            if (mergedShowPasswordOnRef.value !== 'mousedown') return;
            passwordVisibleRef.value = true;
            const hidePassword = () => {
                passwordVisibleRef.value = false;
                off('mouseup', document, hidePassword);
            };
            on('mouseup', document, hidePassword);
        }
        function handleWrapperKeydown(e) {
            var _a;
            (_a = props.onKeydown) === null || _a === void 0
                ? void 0
                : _a.call(props, e);
            switch (e.key) {
                case 'Escape':
                    handleWrapperKeydownEsc();
                    break;
                case 'Enter':
                    handleWrapperKeydownEnter(e);
                    break;
            }
        }
        function handleWrapperKeydownEnter(e) {
            var _a, _b;
            if (props.passivelyActivated) {
                const { value: focused } = activatedRef;
                if (focused) {
                    if (props.internalDeactivateOnEnter) {
                        handleWrapperKeydownEsc();
                    }
                    return;
                }
                e.preventDefault();
                if (props.type === 'textarea') {
                    (_a = textareaElRef.value) === null || _a === void 0
                        ? void 0
                        : _a.focus();
                } else {
                    (_b = inputElRef.value) === null || _b === void 0
                        ? void 0
                        : _b.focus();
                }
            }
        }
        function handleWrapperKeydownEsc() {
            if (props.passivelyActivated) {
                activatedRef.value = false;
                void nextTick(() => {
                    var _a;
                    (_a = wrapperElRef.value) === null || _a === void 0
                        ? void 0
                        : _a.focus();
                });
            }
        }
        function focus() {
            var _a, _b, _c;
            if (mergedDisabledRef.value) return;
            if (props.passivelyActivated) {
                (_a = wrapperElRef.value) === null || _a === void 0
                    ? void 0
                    : _a.focus();
            } else {
                (_b = textareaElRef.value) === null || _b === void 0
                    ? void 0
                    : _b.focus();
                (_c = inputElRef.value) === null || _c === void 0
                    ? void 0
                    : _c.focus();
            }
        }
        function blur() {
            var _a;
            if (
                (_a = wrapperElRef.value) === null || _a === void 0
                    ? void 0
                    : _a.contains(document.activeElement)
            ) {
                document.activeElement.blur();
            }
        }
        function select() {
            var _a, _b;
            (_a = textareaElRef.value) === null || _a === void 0
                ? void 0
                : _a.select();
            (_b = inputElRef.value) === null || _b === void 0
                ? void 0
                : _b.select();
        }
        function activate() {
            if (mergedDisabledRef.value) return;
            if (textareaElRef.value) textareaElRef.value.focus();
            else if (inputElRef.value) inputElRef.value.focus();
        }
        function deactivate() {
            const { value: wrapperEl } = wrapperElRef;
            if (
                (wrapperEl === null || wrapperEl === void 0
                    ? void 0
                    : wrapperEl.contains(document.activeElement)) &&
                wrapperEl !== document.activeElement
            ) {
                handleWrapperKeydownEsc();
            }
        }
        function scrollTo(options) {
            if (props.type === 'textarea') {
                const { value: textareaEl } = textareaElRef;
                textareaEl === null || textareaEl === void 0
                    ? void 0
                    : textareaEl.scrollTo(options);
            } else {
                const { value: inputEl } = inputElRef;
                inputEl === null || inputEl === void 0
                    ? void 0
                    : inputEl.scrollTo(options);
            }
        }
        function syncMirror(value) {
            const { type, pair, autosize } = props;
            if (!pair && autosize) {
                if (type === 'textarea') {
                    const { value: textareaMirrorEl } = textareaMirrorElRef;
                    if (textareaMirrorEl) {
                        textareaMirrorEl.textContent =
                            (value !== null && value !== void 0 ? value : '') +
                            '\r\n';
                    }
                } else {
                    const { value: inputMirrorEl } = inputMirrorElRef;
                    if (inputMirrorEl) {
                        if (value) {
                            inputMirrorEl.textContent = value;
                        } else {
                            inputMirrorEl.innerHTML = '&nbsp;';
                        }
                    }
                }
            }
        }
        function handleTextAreaMirrorResize() {
            updateTextAreaStyle();
        }
        const placeholderStyleRef = ref({
            top: '0',
        });
        function handleTextAreaScroll(e) {
            var _a;
            const { scrollTop } = e.target;
            placeholderStyleRef.value.top = `${-scrollTop}px`;
            (_a = textareaScrollbarInstRef.value) === null || _a === void 0
                ? void 0
                : _a.syncUnifiedContainer();
        }
        let stopWatchMergedValue1 = null;
        watchEffect(() => {
            const { autosize, type } = props;
            if (autosize && type === 'textarea') {
                stopWatchMergedValue1 = watch(mergedValueRef, (value) => {
                    if (!Array.isArray(value) && value !== syncSource) {
                        syncMirror(value);
                    }
                });
            } else {
                stopWatchMergedValue1 === null ||
                stopWatchMergedValue1 === void 0
                    ? void 0
                    : stopWatchMergedValue1();
            }
        });
        let stopWatchMergedValue2 = null;
        watchEffect(() => {
            if (props.type === 'textarea') {
                stopWatchMergedValue2 = watch(mergedValueRef, (value) => {
                    var _a;
                    if (!Array.isArray(value) && value !== syncSource) {
                        (_a = textareaScrollbarInstRef.value) === null ||
                        _a === void 0
                            ? void 0
                            : _a.syncUnifiedContainer();
                    }
                });
            } else {
                stopWatchMergedValue2 === null ||
                stopWatchMergedValue2 === void 0
                    ? void 0
                    : stopWatchMergedValue2();
            }
        });
        provide(inputInjectionKey, {
            mergedValueRef,
            maxlengthRef,
            mergedClsPrefixRef,
            countGraphemesRef: toRef(props, 'countGraphemes'),
        });
        const exposedProps = {
            wrapperElRef,
            inputElRef,
            textareaElRef,
            isCompositing: isComposingRef,
            focus,
            blur,
            select,
            deactivate,
            activate,
            scrollTo,
        };
        const rtlEnabledRef = useRtl('Input', mergedRtlRef, mergedClsPrefixRef);
        const cssVarsRef = computed(() => {
            const { value: size } = mergedSizeRef;
            const {
                common: { cubicBezierEaseInOut },
                self: {
                    color,
                    borderRadius,
                    textColor,
                    caretColor,
                    caretColorError,
                    caretColorWarning,
                    textDecorationColor,
                    border,
                    borderDisabled,
                    borderHover,
                    borderFocus,
                    placeholderColor,
                    placeholderColorDisabled,
                    lineHeightTextarea,
                    colorDisabled,
                    colorFocus,
                    textColorDisabled,
                    boxShadowFocus,
                    iconSize,
                    colorFocusWarning,
                    boxShadowFocusWarning,
                    borderWarning,
                    borderFocusWarning,
                    borderHoverWarning,
                    colorFocusError,
                    boxShadowFocusError,
                    borderError,
                    borderFocusError,
                    borderHoverError,
                    clearSize,
                    clearColor,
                    clearColorHover,
                    clearColorPressed,
                    iconColor,
                    iconColorDisabled,
                    suffixTextColor,
                    countTextColor,
                    countTextColorDisabled,
                    iconColorHover,
                    iconColorPressed,
                    loadingColor,
                    loadingColorError,
                    loadingColorWarning,
                    [createKey('padding', size)]: padding,
                    [createKey('fontSize', size)]: fontSize,
                    [createKey('height', size)]: height,
                },
            } = themeRef.value;
            const { left: paddingLeft, right: paddingRight } =
                getPadding(padding);
            return {
                '--n-bezier': cubicBezierEaseInOut,
                '--n-count-text-color': countTextColor,
                '--n-count-text-color-disabled': countTextColorDisabled,
                '--n-color': color,
                '--n-font-size': fontSize,
                '--n-border-radius': borderRadius,
                '--n-height': height,
                '--n-padding-left': paddingLeft,
                '--n-padding-right': paddingRight,
                '--n-text-color': textColor,
                '--n-caret-color': caretColor,
                '--n-text-decoration-color': textDecorationColor,
                '--n-border': border,
                '--n-border-disabled': borderDisabled,
                '--n-border-hover': borderHover,
                '--n-border-focus': borderFocus,
                '--n-placeholder-color': placeholderColor,
                '--n-placeholder-color-disabled': placeholderColorDisabled,
                '--n-icon-size': iconSize,
                '--n-line-height-textarea': lineHeightTextarea,
                '--n-color-disabled': colorDisabled,
                '--n-color-focus': colorFocus,
                '--n-text-color-disabled': textColorDisabled,
                '--n-box-shadow-focus': boxShadowFocus,
                '--n-loading-color': loadingColor,
                '--n-caret-color-warning': caretColorWarning,
                '--n-color-focus-warning': colorFocusWarning,
                '--n-box-shadow-focus-warning': boxShadowFocusWarning,
                '--n-border-warning': borderWarning,
                '--n-border-focus-warning': borderFocusWarning,
                '--n-border-hover-warning': borderHoverWarning,
                '--n-loading-color-warning': loadingColorWarning,
                '--n-caret-color-error': caretColorError,
                '--n-color-focus-error': colorFocusError,
                '--n-box-shadow-focus-error': boxShadowFocusError,
                '--n-border-error': borderError,
                '--n-border-focus-error': borderFocusError,
                '--n-border-hover-error': borderHoverError,
                '--n-loading-color-error': loadingColorError,
                '--n-clear-color': clearColor,
                '--n-clear-size': clearSize,
                '--n-clear-color-hover': clearColorHover,
                '--n-clear-color-pressed': clearColorPressed,
                '--n-icon-color': iconColor,
                '--n-icon-color-hover': iconColorHover,
                '--n-icon-color-pressed': iconColorPressed,
                '--n-icon-color-disabled': iconColorDisabled,
                '--n-suffix-text-color': suffixTextColor,
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? useThemeClass(
                  'input',
                  computed(() => {
                      const { value: size } = mergedSizeRef;
                      return size[0];
                  }),
                  cssVarsRef,
                  props
              )
            : void 0;
        return Object.assign(Object.assign({}, exposedProps), {
            wrapperElRef,
            inputElRef,
            inputMirrorElRef,
            inputEl2Ref,
            textareaElRef,
            textareaMirrorElRef,
            textareaScrollbarInstRef,
            rtlEnabled: rtlEnabledRef,
            uncontrolledValue: uncontrolledValueRef,
            mergedValue: mergedValueRef,
            passwordVisible: passwordVisibleRef,
            mergedPlaceholder: mergedPlaceholderRef,
            showPlaceholder1: showPlaceholder1Ref,
            showPlaceholder2: showPlaceholder2Ref,
            mergedFocus: mergedFocusRef,
            isComposing: isComposingRef,
            activated: activatedRef,
            showClearButton,
            mergedSize: mergedSizeRef,
            mergedDisabled: mergedDisabledRef,
            textDecorationStyle: textDecorationStyleRef,
            mergedClsPrefix: mergedClsPrefixRef,
            mergedBordered: mergedBorderedRef,
            mergedShowPasswordOn: mergedShowPasswordOnRef,
            placeholderStyle: placeholderStyleRef,
            mergedStatus: mergedStatusRef,
            textAreaScrollContainerWidth: textAreaScrollContainerWidthRef,
            handleTextAreaScroll,
            handleCompositionStart,
            handleCompositionEnd,
            handleInput,
            handleInputBlur,
            handleInputFocus,
            handleWrapperBlur,
            handleWrapperFocus,
            handleMouseEnter,
            handleMouseLeave,
            handleMouseDown,
            handleChange,
            handleClick,
            handleClear,
            handlePasswordToggleClick,
            handlePasswordToggleMousedown,
            handleWrapperKeydown,
            handleTextAreaMirrorResize,
            getTextareaScrollContainer: () => {
                return textareaElRef.value;
            },
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
        var _a, _b;
        const {
            mergedClsPrefix,
            mergedStatus,
            themeClass,
            type,
            countGraphemes,
            onRender,
        } = this;
        const $slots = this.$slots;
        onRender === null || onRender === void 0 ? void 0 : onRender();
        return h(
            'div',
            {
                ref: 'wrapperElRef',
                class: [
                    `${mergedClsPrefix}-input`,
                    themeClass,
                    mergedStatus &&
                        `${mergedClsPrefix}-input--${mergedStatus}-status`,
                    {
                        [`${mergedClsPrefix}-input--rtl`]: this.rtlEnabled,
                        [`${mergedClsPrefix}-input--disabled`]:
                            this.mergedDisabled,
                        [`${mergedClsPrefix}-input--textarea`]:
                            type === 'textarea',
                        [`${mergedClsPrefix}-input--resizable`]:
                            this.resizable && !this.autosize,
                        [`${mergedClsPrefix}-input--autosize`]: this.autosize,
                        [`${mergedClsPrefix}-input--round`]:
                            this.round && !(type === 'textarea'),
                        [`${mergedClsPrefix}-input--pair`]: this.pair,
                        [`${mergedClsPrefix}-input--focus`]: this.mergedFocus,
                        [`${mergedClsPrefix}-input--stateful`]: this.stateful,
                    },
                ],
                style: this.cssVars,
                tabindex:
                    !this.mergedDisabled &&
                    this.passivelyActivated &&
                    !this.activated
                        ? 0
                        : void 0,
                onFocus: this.handleWrapperFocus,
                onBlur: this.handleWrapperBlur,
                onClick: this.handleClick,
                onMousedown: this.handleMouseDown,
                onMouseenter: this.handleMouseEnter,
                onMouseleave: this.handleMouseLeave,
                onCompositionstart: this.handleCompositionStart,
                onCompositionend: this.handleCompositionEnd,
                onKeyup: this.onKeyup,
                onKeydown: this.handleWrapperKeydown,
                onWheel: this.onWheel,
            },
            h(
                'div',
                { class: `${mergedClsPrefix}-input-wrapper` },
                resolveWrappedSlot(
                    $slots.prefix,
                    (children) =>
                        children &&
                        h(
                            'div',
                            { class: `${mergedClsPrefix}-input__prefix` },
                            children
                        )
                ),
                type === 'textarea'
                    ? h(
                          NScrollbar,
                          {
                              ref: 'textareaScrollbarInstRef',
                              class: `${mergedClsPrefix}-input__textarea`,
                              container: this.getTextareaScrollContainer,
                              triggerDisplayManually: true,
                              useUnifiedContainer: true,
                              internalHoistYRail: true,
                          },
                          {
                              default: () => {
                                  var _a2, _b2;
                                  const { textAreaScrollContainerWidth } = this;
                                  const scrollContainerWidthStyle = {
                                      width:
                                          this.autosize &&
                                          textAreaScrollContainerWidth &&
                                          `${textAreaScrollContainerWidth}px`,
                                  };
                                  return h(
                                      Fragment,
                                      null,
                                      h(
                                          'textarea',
                                          Object.assign({}, this.inputProps, {
                                              ref: 'textareaElRef',
                                              class: [
                                                  `${mergedClsPrefix}-input__textarea-el`,
                                                  (_a2 = this.inputProps) ===
                                                      null || _a2 === void 0
                                                      ? void 0
                                                      : _a2.class,
                                              ],
                                              autofocus: this.autofocus,
                                              rows: Number(this.rows),
                                              placeholder: this.placeholder,
                                              value: this.mergedValue,
                                              disabled: this.mergedDisabled,
                                              maxlength: countGraphemes
                                                  ? void 0
                                                  : this.maxlength,
                                              minlength: countGraphemes
                                                  ? void 0
                                                  : this.minlength,
                                              readonly: this.readonly,
                                              tabindex:
                                                  this.passivelyActivated &&
                                                  !this.activated
                                                      ? -1
                                                      : void 0,
                                              style: [
                                                  this.textDecorationStyle[0],
                                                  (_b2 = this.inputProps) ===
                                                      null || _b2 === void 0
                                                      ? void 0
                                                      : _b2.style,
                                                  scrollContainerWidthStyle,
                                              ],
                                              onBlur: this.handleInputBlur,
                                              onFocus: (e) =>
                                                  this.handleInputFocus(e, 2),
                                              onInput: this.handleInput,
                                              onChange: this.handleChange,
                                              onScroll:
                                                  this.handleTextAreaScroll,
                                          })
                                      ),
                                      this.showPlaceholder1
                                          ? h(
                                                'div',
                                                {
                                                    class: `${mergedClsPrefix}-input__placeholder`,
                                                    style: [
                                                        this.placeholderStyle,
                                                        scrollContainerWidthStyle,
                                                    ],
                                                    key: 'placeholder',
                                                },
                                                this.mergedPlaceholder[0]
                                            )
                                          : null,
                                      this.autosize
                                          ? h(
                                                VResizeObserver,
                                                {
                                                    onResize:
                                                        this
                                                            .handleTextAreaMirrorResize,
                                                },
                                                {
                                                    default: () =>
                                                        h('div', {
                                                            ref: 'textareaMirrorElRef',
                                                            class: `${mergedClsPrefix}-input__textarea-mirror`,
                                                            key: 'mirror',
                                                        }),
                                                }
                                            )
                                          : null
                                  );
                              },
                          }
                      )
                    : h(
                          'div',
                          { class: `${mergedClsPrefix}-input__input` },
                          h(
                              'input',
                              Object.assign(
                                  {
                                      type:
                                          type === 'password' &&
                                          this.mergedShowPasswordOn &&
                                          this.passwordVisible
                                              ? 'text'
                                              : type,
                                  },
                                  this.inputProps,
                                  {
                                      ref: 'inputElRef',
                                      class: [
                                          `${mergedClsPrefix}-input__input-el`,
                                          (_a = this.inputProps) === null ||
                                          _a === void 0
                                              ? void 0
                                              : _a.class,
                                      ],
                                      style: [
                                          this.textDecorationStyle[0],
                                          (_b = this.inputProps) === null ||
                                          _b === void 0
                                              ? void 0
                                              : _b.style,
                                      ],
                                      tabindex:
                                          this.passivelyActivated &&
                                          !this.activated
                                              ? -1
                                              : void 0,
                                      placeholder: this.mergedPlaceholder[0],
                                      disabled: this.mergedDisabled,
                                      maxlength: countGraphemes
                                          ? void 0
                                          : this.maxlength,
                                      minlength: countGraphemes
                                          ? void 0
                                          : this.minlength,
                                      value: Array.isArray(this.mergedValue)
                                          ? this.mergedValue[0]
                                          : this.mergedValue,
                                      readonly: this.readonly,
                                      autofocus: this.autofocus,
                                      size: this.attrSize,
                                      onBlur: this.handleInputBlur,
                                      onFocus: (e) =>
                                          this.handleInputFocus(e, 0),
                                      onInput: (e) => this.handleInput(e, 0),
                                      onChange: (e) => this.handleChange(e, 0),
                                  }
                              )
                          ),
                          this.showPlaceholder1
                              ? h(
                                    'div',
                                    {
                                        class: `${mergedClsPrefix}-input__placeholder`,
                                    },
                                    h('span', null, this.mergedPlaceholder[0])
                                )
                              : null,
                          this.autosize
                              ? h(
                                    'div',
                                    {
                                        class: `${mergedClsPrefix}-input__input-mirror`,
                                        key: 'mirror',
                                        ref: 'inputMirrorElRef',
                                    },
                                    '\xA0'
                                )
                              : null
                      ),
                !this.pair &&
                    resolveWrappedSlot($slots.suffix, (children) => {
                        return children ||
                            this.clearable ||
                            this.showCount ||
                            this.mergedShowPasswordOn ||
                            this.loading !== void 0
                            ? h(
                                  'div',
                                  { class: `${mergedClsPrefix}-input__suffix` },
                                  [
                                      resolveWrappedSlot(
                                          $slots['clear-icon-placeholder'],
                                          (children2) => {
                                              return (
                                                  (this.clearable ||
                                                      children2) &&
                                                  h(
                                                      NBaseClear,
                                                      {
                                                          clsPrefix:
                                                              mergedClsPrefix,
                                                          show: this
                                                              .showClearButton,
                                                          onClear:
                                                              this.handleClear,
                                                      },
                                                      {
                                                          placeholder: () =>
                                                              children2,
                                                          icon: () => {
                                                              var _a2, _b2;
                                                              return (_b2 =
                                                                  (_a2 =
                                                                      this
                                                                          .$slots)[
                                                                      'clear-icon'
                                                                  ]) === null ||
                                                                  _b2 === void 0
                                                                  ? void 0
                                                                  : _b2.call(
                                                                        _a2
                                                                    );
                                                          },
                                                      }
                                                  )
                                              );
                                          }
                                      ),
                                      !this.internalLoadingBeforeSuffix
                                          ? children
                                          : null,
                                      this.loading !== void 0
                                          ? h(NBaseSuffix, {
                                                clsPrefix: mergedClsPrefix,
                                                loading: this.loading,
                                                showArrow: false,
                                                showClear: false,
                                                style: this.cssVars,
                                            })
                                          : null,
                                      this.internalLoadingBeforeSuffix
                                          ? children
                                          : null,
                                      this.showCount && this.type !== 'textarea'
                                          ? h(WordCount, null, {
                                                default: (props) => {
                                                    var _a2;
                                                    return (_a2 =
                                                        $slots.count) ===
                                                        null || _a2 === void 0
                                                        ? void 0
                                                        : _a2.call(
                                                              $slots,
                                                              props
                                                          );
                                                },
                                            })
                                          : null,
                                      this.mergedShowPasswordOn &&
                                      this.type === 'password'
                                          ? h(
                                                'div',
                                                {
                                                    class: `${mergedClsPrefix}-input__eye`,
                                                    onMousedown:
                                                        this
                                                            .handlePasswordToggleMousedown,
                                                    onClick:
                                                        this
                                                            .handlePasswordToggleClick,
                                                },
                                                this.passwordVisible
                                                    ? resolveSlot(
                                                          $slots[
                                                              'password-visible-icon'
                                                          ],
                                                          () => [
                                                              h(
                                                                  NBaseIcon,
                                                                  {
                                                                      clsPrefix:
                                                                          mergedClsPrefix,
                                                                  },
                                                                  {
                                                                      default:
                                                                          () =>
                                                                              h(
                                                                                  EyeIcon,
                                                                                  null
                                                                              ),
                                                                  }
                                                              ),
                                                          ]
                                                      )
                                                    : resolveSlot(
                                                          $slots[
                                                              'password-invisible-icon'
                                                          ],
                                                          () => [
                                                              h(
                                                                  NBaseIcon,
                                                                  {
                                                                      clsPrefix:
                                                                          mergedClsPrefix,
                                                                  },
                                                                  {
                                                                      default:
                                                                          () =>
                                                                              h(
                                                                                  EyeOffIcon,
                                                                                  null
                                                                              ),
                                                                  }
                                                              ),
                                                          ]
                                                      )
                                            )
                                          : null,
                                  ]
                              )
                            : null;
                    })
            ),
            this.pair
                ? h(
                      'span',
                      { class: `${mergedClsPrefix}-input__separator` },
                      resolveSlot($slots.separator, () => [this.separator])
                  )
                : null,
            this.pair
                ? h(
                      'div',
                      { class: `${mergedClsPrefix}-input-wrapper` },
                      h(
                          'div',
                          { class: `${mergedClsPrefix}-input__input` },
                          h('input', {
                              ref: 'inputEl2Ref',
                              type: this.type,
                              class: `${mergedClsPrefix}-input__input-el`,
                              tabindex:
                                  this.passivelyActivated && !this.activated
                                      ? -1
                                      : void 0,
                              placeholder: this.mergedPlaceholder[1],
                              disabled: this.mergedDisabled,
                              maxlength: countGraphemes
                                  ? void 0
                                  : this.maxlength,
                              minlength: countGraphemes
                                  ? void 0
                                  : this.minlength,
                              value: Array.isArray(this.mergedValue)
                                  ? this.mergedValue[1]
                                  : void 0,
                              readonly: this.readonly,
                              style: this.textDecorationStyle[1],
                              onBlur: this.handleInputBlur,
                              onFocus: (e) => this.handleInputFocus(e, 1),
                              onInput: (e) => this.handleInput(e, 1),
                              onChange: (e) => this.handleChange(e, 1),
                          }),
                          this.showPlaceholder2
                              ? h(
                                    'div',
                                    {
                                        class: `${mergedClsPrefix}-input__placeholder`,
                                    },
                                    h('span', null, this.mergedPlaceholder[1])
                                )
                              : null
                      ),
                      resolveWrappedSlot($slots.suffix, (children) => {
                          return (
                              (this.clearable || children) &&
                              h(
                                  'div',
                                  { class: `${mergedClsPrefix}-input__suffix` },
                                  [
                                      this.clearable &&
                                          h(
                                              NBaseClear,
                                              {
                                                  clsPrefix: mergedClsPrefix,
                                                  show: this.showClearButton,
                                                  onClear: this.handleClear,
                                              },
                                              {
                                                  icon: () => {
                                                      var _a2;
                                                      return (_a2 =
                                                          $slots[
                                                              'clear-icon'
                                                          ]) === null ||
                                                          _a2 === void 0
                                                          ? void 0
                                                          : _a2.call($slots);
                                                  },
                                                  placeholder: () => {
                                                      var _a2;
                                                      return (_a2 =
                                                          $slots[
                                                              'clear-icon-placeholder'
                                                          ]) === null ||
                                                          _a2 === void 0
                                                          ? void 0
                                                          : _a2.call($slots);
                                                  },
                                              }
                                          ),
                                      children,
                                  ]
                              )
                          );
                      })
                  )
                : null,
            this.mergedBordered
                ? h('div', { class: `${mergedClsPrefix}-input__border` })
                : null,
            this.mergedBordered
                ? h('div', { class: `${mergedClsPrefix}-input__state-border` })
                : null,
            this.showCount && type === 'textarea'
                ? h(WordCount, null, {
                      default: (props) => {
                          var _a2;
                          const { renderCount } = this;
                          if (renderCount) {
                              return renderCount(props);
                          }
                          return (_a2 = $slots.count) === null || _a2 === void 0
                              ? void 0
                              : _a2.call($slots, props);
                      },
                  })
                : null
        );
    },
});
