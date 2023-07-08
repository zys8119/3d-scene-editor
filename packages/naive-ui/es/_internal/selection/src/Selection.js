import {
    h,
    defineComponent,
    Fragment,
    ref,
    computed,
    watch,
    toRef,
    nextTick,
    watchEffect,
    onMounted,
} from 'vue';
import { VOverflow } from 'vueuc';
import { NPopover } from '../../../popover';
import { NTag } from '../../../tag';
import { useThemeClass, useTheme } from '../../../_mixins';
import {
    createKey,
    getTitleAttribute,
    render,
    useOnResize,
    Wrapper,
} from '../../../_utils';
import Suffix from '../../suffix';
import { internalSelectionLight } from '../styles';
import style from './styles/index.cssr';
export default defineComponent({
    name: 'InternalSelection',
    props: Object.assign(Object.assign({}, useTheme.props), {
        clsPrefix: {
            type: String,
            required: true,
        },
        bordered: {
            type: Boolean,
            default: void 0,
        },
        active: Boolean,
        pattern: {
            type: String,
            default: '',
        },
        placeholder: String,
        selectedOption: {
            type: Object,
            default: null,
        },
        selectedOptions: {
            type: Array,
            default: null,
        },
        labelField: { type: String, default: 'label' },
        valueField: {
            type: String,
            default: 'value',
        },
        multiple: Boolean,
        filterable: Boolean,
        clearable: Boolean,
        disabled: Boolean,
        size: {
            type: String,
            default: 'medium',
        },
        loading: Boolean,
        autofocus: Boolean,
        showArrow: {
            type: Boolean,
            default: true,
        },
        inputProps: Object,
        focused: Boolean,
        renderTag: Function,
        onKeydown: Function,
        onClick: Function,
        onBlur: Function,
        onFocus: Function,
        onDeleteOption: Function,
        maxTagCount: [String, Number],
        onClear: Function,
        onPatternInput: Function,
        onPatternFocus: Function,
        onPatternBlur: Function,
        renderLabel: Function,
        status: String,
        inlineThemeDisabled: Boolean,
        ignoreComposition: { type: Boolean, default: true },
        onResize: Function,
    }),
    setup(props) {
        const patternInputMirrorRef = ref(null);
        const patternInputRef = ref(null);
        const selfRef = ref(null);
        const multipleElRef = ref(null);
        const singleElRef = ref(null);
        const patternInputWrapperRef = ref(null);
        const counterRef = ref(null);
        const counterWrapperRef = ref(null);
        const overflowRef = ref(null);
        const inputTagElRef = ref(null);
        const showTagsPopoverRef = ref(false);
        const patternInputFocusedRef = ref(false);
        const hoverRef = ref(false);
        const themeRef = useTheme(
            'InternalSelection',
            '-internal-selection',
            style,
            internalSelectionLight,
            props,
            toRef(props, 'clsPrefix')
        );
        const mergedClearableRef = computed(() => {
            return (
                props.clearable &&
                !props.disabled &&
                (hoverRef.value || props.active)
            );
        });
        const filterablePlaceholderRef = computed(() => {
            return props.selectedOption
                ? props.renderTag
                    ? props.renderTag({
                          option: props.selectedOption,
                          handleClose: () => {},
                      })
                    : props.renderLabel
                    ? props.renderLabel(props.selectedOption, true)
                    : render(
                          props.selectedOption[props.labelField],
                          props.selectedOption,
                          true
                      )
                : props.placeholder;
        });
        const labelRef = computed(() => {
            const option = props.selectedOption;
            if (!option) return void 0;
            return option[props.labelField];
        });
        const selectedRef = computed(() => {
            if (props.multiple) {
                return !!(
                    Array.isArray(props.selectedOptions) &&
                    props.selectedOptions.length
                );
            } else {
                return props.selectedOption !== null;
            }
        });
        function syncMirrorWidth() {
            var _a;
            const { value: patternInputMirrorEl } = patternInputMirrorRef;
            if (patternInputMirrorEl) {
                const { value: patternInputEl } = patternInputRef;
                if (patternInputEl) {
                    patternInputEl.style.width = `${patternInputMirrorEl.offsetWidth}px`;
                    if (props.maxTagCount !== 'responsive') {
                        (_a = overflowRef.value) === null || _a === void 0
                            ? void 0
                            : _a.sync();
                    }
                }
            }
        }
        function hideInputTag() {
            const { value: inputTagEl } = inputTagElRef;
            if (inputTagEl) inputTagEl.style.display = 'none';
        }
        function showInputTag() {
            const { value: inputTagEl } = inputTagElRef;
            if (inputTagEl) inputTagEl.style.display = 'inline-block';
        }
        watch(toRef(props, 'active'), (value) => {
            if (!value) hideInputTag();
        });
        watch(toRef(props, 'pattern'), () => {
            if (props.multiple) {
                void nextTick(syncMirrorWidth);
            }
        });
        function doFocus(e) {
            const { onFocus } = props;
            if (onFocus) onFocus(e);
        }
        function doBlur(e) {
            const { onBlur } = props;
            if (onBlur) onBlur(e);
        }
        function doDeleteOption(value) {
            const { onDeleteOption } = props;
            if (onDeleteOption) onDeleteOption(value);
        }
        function doClear(e) {
            const { onClear } = props;
            if (onClear) onClear(e);
        }
        function doPatternInput(value) {
            const { onPatternInput } = props;
            if (onPatternInput) onPatternInput(value);
        }
        function handleFocusin(e) {
            var _a;
            if (
                !e.relatedTarget ||
                !((_a = selfRef.value) === null || _a === void 0
                    ? void 0
                    : _a.contains(e.relatedTarget))
            ) {
                doFocus(e);
            }
        }
        function handleFocusout(e) {
            var _a;
            if (
                (_a = selfRef.value) === null || _a === void 0
                    ? void 0
                    : _a.contains(e.relatedTarget)
            )
                return;
            doBlur(e);
        }
        function handleClear(e) {
            doClear(e);
        }
        function handleMouseEnter() {
            hoverRef.value = true;
        }
        function handleMouseLeave() {
            hoverRef.value = false;
        }
        function handleMouseDown(e) {
            if (!props.active || !props.filterable) return;
            if (e.target === patternInputRef.value) return;
            e.preventDefault();
        }
        function handleDeleteOption(option) {
            doDeleteOption(option);
        }
        function handlePatternKeyDown(e) {
            if (e.key === 'Backspace' && !isComposingRef.value) {
                if (!props.pattern.length) {
                    const { selectedOptions } = props;
                    if (
                        selectedOptions === null || selectedOptions === void 0
                            ? void 0
                            : selectedOptions.length
                    ) {
                        handleDeleteOption(
                            selectedOptions[selectedOptions.length - 1]
                        );
                    }
                }
            }
        }
        const isComposingRef = ref(false);
        let cachedInputEvent = null;
        function handlePatternInputInput(e) {
            const { value: patternInputMirrorEl } = patternInputMirrorRef;
            if (patternInputMirrorEl) {
                const inputText = e.target.value;
                patternInputMirrorEl.textContent = inputText;
                syncMirrorWidth();
            }
            if (props.ignoreComposition) {
                if (!isComposingRef.value) {
                    doPatternInput(e);
                } else {
                    cachedInputEvent = e;
                }
            } else {
                doPatternInput(e);
            }
        }
        function handleCompositionStart() {
            isComposingRef.value = true;
        }
        function handleCompositionEnd() {
            isComposingRef.value = false;
            if (props.ignoreComposition) {
                doPatternInput(cachedInputEvent);
            }
            cachedInputEvent = null;
        }
        function handlePatternInputFocus(e) {
            var _a;
            patternInputFocusedRef.value = true;
            (_a = props.onPatternFocus) === null || _a === void 0
                ? void 0
                : _a.call(props, e);
        }
        function handlePatternInputBlur(e) {
            var _a;
            patternInputFocusedRef.value = false;
            (_a = props.onPatternBlur) === null || _a === void 0
                ? void 0
                : _a.call(props, e);
        }
        function blur() {
            var _a, _b;
            if (props.filterable) {
                patternInputFocusedRef.value = false;
                (_a = patternInputWrapperRef.value) === null || _a === void 0
                    ? void 0
                    : _a.blur();
                (_b = patternInputRef.value) === null || _b === void 0
                    ? void 0
                    : _b.blur();
            } else if (props.multiple) {
                const { value: multipleEl } = multipleElRef;
                multipleEl === null || multipleEl === void 0
                    ? void 0
                    : multipleEl.blur();
            } else {
                const { value: singleEl } = singleElRef;
                singleEl === null || singleEl === void 0
                    ? void 0
                    : singleEl.blur();
            }
        }
        function focus() {
            var _a, _b, _c;
            if (props.filterable) {
                patternInputFocusedRef.value = false;
                (_a = patternInputWrapperRef.value) === null || _a === void 0
                    ? void 0
                    : _a.focus();
            } else if (props.multiple) {
                (_b = multipleElRef.value) === null || _b === void 0
                    ? void 0
                    : _b.focus();
            } else {
                (_c = singleElRef.value) === null || _c === void 0
                    ? void 0
                    : _c.focus();
            }
        }
        function focusInput() {
            const { value: patternInputEl } = patternInputRef;
            if (patternInputEl) {
                showInputTag();
                patternInputEl.focus();
            }
        }
        function blurInput() {
            const { value: patternInputEl } = patternInputRef;
            if (patternInputEl) {
                patternInputEl.blur();
            }
        }
        function updateCounter(count) {
            const { value } = counterRef;
            if (value) {
                value.setTextContent(`+${count}`);
            }
        }
        function getCounter() {
            const { value } = counterWrapperRef;
            return value;
        }
        function getTail() {
            return patternInputRef.value;
        }
        let enterTimerId = null;
        function clearEnterTimer() {
            if (enterTimerId !== null) window.clearTimeout(enterTimerId);
        }
        function handleMouseEnterCounter() {
            if (props.disabled || props.active) return;
            clearEnterTimer();
            enterTimerId = window.setTimeout(() => {
                if (selectedRef.value) {
                    showTagsPopoverRef.value = true;
                }
            }, 100);
        }
        function handleMouseLeaveCounter() {
            clearEnterTimer();
        }
        function onPopoverUpdateShow(show) {
            if (!show) {
                clearEnterTimer();
                showTagsPopoverRef.value = false;
            }
        }
        watch(selectedRef, (value) => {
            if (!value) {
                showTagsPopoverRef.value = false;
            }
        });
        onMounted(() => {
            watchEffect(() => {
                const patternInputWrapperEl = patternInputWrapperRef.value;
                if (!patternInputWrapperEl) return;
                patternInputWrapperEl.tabIndex =
                    props.disabled || patternInputFocusedRef.value ? -1 : 0;
            });
        });
        useOnResize(selfRef, props.onResize);
        const { inlineThemeDisabled } = props;
        const cssVarsRef = computed(() => {
            const { size } = props;
            const {
                common: { cubicBezierEaseInOut },
                self: {
                    borderRadius,
                    color,
                    placeholderColor,
                    textColor,
                    paddingSingle,
                    paddingMultiple,
                    caretColor,
                    colorDisabled,
                    textColorDisabled,
                    placeholderColorDisabled,
                    colorActive,
                    boxShadowFocus,
                    boxShadowActive,
                    boxShadowHover,
                    border,
                    borderFocus,
                    borderHover,
                    borderActive,
                    arrowColor,
                    arrowColorDisabled,
                    loadingColor,
                    colorActiveWarning,
                    boxShadowFocusWarning,
                    boxShadowActiveWarning,
                    boxShadowHoverWarning,
                    borderWarning,
                    borderFocusWarning,
                    borderHoverWarning,
                    borderActiveWarning,
                    colorActiveError,
                    boxShadowFocusError,
                    boxShadowActiveError,
                    boxShadowHoverError,
                    borderError,
                    borderFocusError,
                    borderHoverError,
                    borderActiveError,
                    clearColor,
                    clearColorHover,
                    clearColorPressed,
                    clearSize,
                    arrowSize,
                    [createKey('height', size)]: height,
                    [createKey('fontSize', size)]: fontSize,
                },
            } = themeRef.value;
            return {
                '--n-bezier': cubicBezierEaseInOut,
                '--n-border': border,
                '--n-border-active': borderActive,
                '--n-border-focus': borderFocus,
                '--n-border-hover': borderHover,
                '--n-border-radius': borderRadius,
                '--n-box-shadow-active': boxShadowActive,
                '--n-box-shadow-focus': boxShadowFocus,
                '--n-box-shadow-hover': boxShadowHover,
                '--n-caret-color': caretColor,
                '--n-color': color,
                '--n-color-active': colorActive,
                '--n-color-disabled': colorDisabled,
                '--n-font-size': fontSize,
                '--n-height': height,
                '--n-padding-single': paddingSingle,
                '--n-padding-multiple': paddingMultiple,
                '--n-placeholder-color': placeholderColor,
                '--n-placeholder-color-disabled': placeholderColorDisabled,
                '--n-text-color': textColor,
                '--n-text-color-disabled': textColorDisabled,
                '--n-arrow-color': arrowColor,
                '--n-arrow-color-disabled': arrowColorDisabled,
                '--n-loading-color': loadingColor,
                '--n-color-active-warning': colorActiveWarning,
                '--n-box-shadow-focus-warning': boxShadowFocusWarning,
                '--n-box-shadow-active-warning': boxShadowActiveWarning,
                '--n-box-shadow-hover-warning': boxShadowHoverWarning,
                '--n-border-warning': borderWarning,
                '--n-border-focus-warning': borderFocusWarning,
                '--n-border-hover-warning': borderHoverWarning,
                '--n-border-active-warning': borderActiveWarning,
                '--n-color-active-error': colorActiveError,
                '--n-box-shadow-focus-error': boxShadowFocusError,
                '--n-box-shadow-active-error': boxShadowActiveError,
                '--n-box-shadow-hover-error': boxShadowHoverError,
                '--n-border-error': borderError,
                '--n-border-focus-error': borderFocusError,
                '--n-border-hover-error': borderHoverError,
                '--n-border-active-error': borderActiveError,
                '--n-clear-size': clearSize,
                '--n-clear-color': clearColor,
                '--n-clear-color-hover': clearColorHover,
                '--n-clear-color-pressed': clearColorPressed,
                '--n-arrow-size': arrowSize,
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? useThemeClass(
                  'internal-selection',
                  computed(() => {
                      return props.size[0];
                  }),
                  cssVarsRef,
                  props
              )
            : void 0;
        return {
            mergedTheme: themeRef,
            mergedClearable: mergedClearableRef,
            patternInputFocused: patternInputFocusedRef,
            filterablePlaceholder: filterablePlaceholderRef,
            label: labelRef,
            selected: selectedRef,
            showTagsPanel: showTagsPopoverRef,
            isComposing: isComposingRef,
            counterRef,
            counterWrapperRef,
            patternInputMirrorRef,
            patternInputRef,
            selfRef,
            multipleElRef,
            singleElRef,
            patternInputWrapperRef,
            overflowRef,
            inputTagElRef,
            handleMouseDown,
            handleFocusin,
            handleClear,
            handleMouseEnter,
            handleMouseLeave,
            handleDeleteOption,
            handlePatternKeyDown,
            handlePatternInputInput,
            handlePatternInputBlur,
            handlePatternInputFocus,
            handleMouseEnterCounter,
            handleMouseLeaveCounter,
            handleFocusout,
            handleCompositionEnd,
            handleCompositionStart,
            onPopoverUpdateShow,
            focus,
            focusInput,
            blur,
            blurInput,
            updateCounter,
            getCounter,
            getTail,
            renderLabel: props.renderLabel,
            cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
            themeClass:
                themeClassHandle === null || themeClassHandle === void 0
                    ? void 0
                    : themeClassHandle.themeClass,
            onRender:
                themeClassHandle === null || themeClassHandle === void 0
                    ? void 0
                    : themeClassHandle.onRender,
        };
    },
    render() {
        const {
            status,
            multiple,
            size,
            disabled,
            filterable,
            maxTagCount,
            bordered,
            clsPrefix,
            onRender,
            renderTag,
            renderLabel,
        } = this;
        onRender === null || onRender === void 0 ? void 0 : onRender();
        const maxTagCountResponsive = maxTagCount === 'responsive';
        const maxTagCountNumeric = typeof maxTagCount === 'number';
        const useMaxTagCount = maxTagCountResponsive || maxTagCountNumeric;
        const suffix = h(Wrapper, null, {
            default: () =>
                h(
                    Suffix,
                    {
                        clsPrefix,
                        loading: this.loading,
                        showArrow: this.showArrow,
                        showClear: this.mergedClearable && this.selected,
                        onClear: this.handleClear,
                    },
                    {
                        default: () => {
                            var _a, _b;
                            return (_b = (_a = this.$slots).arrow) === null ||
                                _b === void 0
                                ? void 0
                                : _b.call(_a);
                        },
                    }
                ),
        });
        let body;
        if (multiple) {
            const { labelField } = this;
            const createTag = (option) =>
                h(
                    'div',
                    {
                        class: `${clsPrefix}-base-selection-tag-wrapper`,
                        key: option.value,
                    },
                    renderTag
                        ? renderTag({
                              option,
                              handleClose: () =>
                                  this.handleDeleteOption(option),
                          })
                        : h(
                              NTag,
                              {
                                  size,
                                  closable: !option.disabled,
                                  disabled,
                                  onClose: () =>
                                      this.handleDeleteOption(option),
                                  internalCloseIsButtonTag: false,
                                  internalCloseFocusable: false,
                              },
                              {
                                  default: () =>
                                      renderLabel
                                          ? renderLabel(option, true)
                                          : render(
                                                option[labelField],
                                                option,
                                                true
                                            ),
                              }
                          )
                );
            const createOriginalTagNodes = () =>
                (maxTagCountNumeric
                    ? this.selectedOptions.slice(0, maxTagCount)
                    : this.selectedOptions
                ).map(createTag);
            const input = filterable
                ? h(
                      'div',
                      {
                          class: `${clsPrefix}-base-selection-input-tag`,
                          ref: 'inputTagElRef',
                          key: '__input-tag__',
                      },
                      h(
                          'input',
                          Object.assign({}, this.inputProps, {
                              ref: 'patternInputRef',
                              tabindex: -1,
                              disabled,
                              value: this.pattern,
                              autofocus: this.autofocus,
                              class: `${clsPrefix}-base-selection-input-tag__input`,
                              onBlur: this.handlePatternInputBlur,
                              onFocus: this.handlePatternInputFocus,
                              onKeydown: this.handlePatternKeyDown,
                              onInput: this.handlePatternInputInput,
                              onCompositionstart: this.handleCompositionStart,
                              onCompositionend: this.handleCompositionEnd,
                          })
                      ),
                      h(
                          'span',
                          {
                              ref: 'patternInputMirrorRef',
                              class: `${clsPrefix}-base-selection-input-tag__mirror`,
                          },
                          this.pattern
                      )
                  )
                : null;
            const renderCounter = maxTagCountResponsive
                ? () =>
                      h(
                          'div',
                          {
                              class: `${clsPrefix}-base-selection-tag-wrapper`,
                              ref: 'counterWrapperRef',
                          },
                          h(NTag, {
                              size,
                              ref: 'counterRef',
                              onMouseenter: this.handleMouseEnterCounter,
                              onMouseleave: this.handleMouseLeaveCounter,
                              disabled,
                          })
                      )
                : void 0;
            let counter;
            if (maxTagCountNumeric) {
                const rest = this.selectedOptions.length - maxTagCount;
                if (rest > 0) {
                    counter = h(
                        'div',
                        {
                            class: `${clsPrefix}-base-selection-tag-wrapper`,
                            key: '__counter__',
                        },
                        h(
                            NTag,
                            {
                                size,
                                ref: 'counterRef',
                                onMouseenter: this.handleMouseEnterCounter,
                                disabled,
                            },
                            {
                                default: () => `+${rest}`,
                            }
                        )
                    );
                }
            }
            const tags = maxTagCountResponsive
                ? filterable
                    ? h(
                          VOverflow,
                          {
                              ref: 'overflowRef',
                              updateCounter: this.updateCounter,
                              getCounter: this.getCounter,
                              getTail: this.getTail,
                              style: {
                                  width: '100%',
                                  display: 'flex',
                                  overflow: 'hidden',
                              },
                          },
                          {
                              default: createOriginalTagNodes,
                              counter: renderCounter,
                              tail: () => input,
                          }
                      )
                    : h(
                          VOverflow,
                          {
                              ref: 'overflowRef',
                              updateCounter: this.updateCounter,
                              getCounter: this.getCounter,
                              style: {
                                  width: '100%',
                                  display: 'flex',
                                  overflow: 'hidden',
                              },
                          },
                          {
                              default: createOriginalTagNodes,
                              counter: renderCounter,
                          }
                      )
                : maxTagCountNumeric
                ? createOriginalTagNodes().concat(counter)
                : createOriginalTagNodes();
            const renderPopover = useMaxTagCount
                ? () =>
                      h(
                          'div',
                          { class: `${clsPrefix}-base-selection-popover` },
                          maxTagCountResponsive
                              ? createOriginalTagNodes()
                              : this.selectedOptions.map(createTag)
                      )
                : void 0;
            const popoverProps = useMaxTagCount
                ? {
                      show: this.showTagsPanel,
                      trigger: 'hover',
                      overlap: true,
                      placement: 'top',
                      width: 'trigger',
                      onUpdateShow: this.onPopoverUpdateShow,
                      theme: this.mergedTheme.peers.Popover,
                      themeOverrides: this.mergedTheme.peerOverrides.Popover,
                  }
                : null;
            const showPlaceholder = this.selected
                ? false
                : this.active
                ? !this.pattern && !this.isComposing
                : true;
            const placeholder = showPlaceholder
                ? h(
                      'div',
                      {
                          class: `${clsPrefix}-base-selection-placeholder ${clsPrefix}-base-selection-overlay`,
                      },
                      h(
                          'div',
                          {
                              class: `${clsPrefix}-base-selection-placeholder__inner`,
                          },
                          this.placeholder
                      )
                  )
                : null;
            const popoverTrigger = filterable
                ? h(
                      'div',
                      {
                          ref: 'patternInputWrapperRef',
                          class: `${clsPrefix}-base-selection-tags`,
                      },
                      tags,
                      maxTagCountResponsive ? null : input,
                      suffix
                  )
                : h(
                      'div',
                      {
                          ref: 'multipleElRef',
                          class: `${clsPrefix}-base-selection-tags`,
                          tabindex: disabled ? void 0 : 0,
                      },
                      tags,
                      suffix
                  );
            body = h(
                Fragment,
                null,
                useMaxTagCount
                    ? h(
                          NPopover,
                          Object.assign({}, popoverProps, {
                              scrollable: true,
                              style: 'max-height: calc(var(--v-target-height) * 6.6);',
                          }),
                          {
                              trigger: () => popoverTrigger,
                              default: renderPopover,
                          }
                      )
                    : popoverTrigger,
                placeholder
            );
        } else {
            if (filterable) {
                const hasInput = this.pattern || this.isComposing;
                const showPlaceholder = this.active
                    ? !hasInput
                    : !this.selected;
                const showSelectedLabel = this.active ? false : this.selected;
                body = h(
                    'div',
                    {
                        ref: 'patternInputWrapperRef',
                        class: `${clsPrefix}-base-selection-label`,
                    },
                    h(
                        'input',
                        Object.assign({}, this.inputProps, {
                            ref: 'patternInputRef',
                            class: `${clsPrefix}-base-selection-input`,
                            value: this.active ? this.pattern : '',
                            placeholder: '',
                            readonly: disabled,
                            disabled,
                            tabindex: -1,
                            autofocus: this.autofocus,
                            onFocus: this.handlePatternInputFocus,
                            onBlur: this.handlePatternInputBlur,
                            onInput: this.handlePatternInputInput,
                            onCompositionstart: this.handleCompositionStart,
                            onCompositionend: this.handleCompositionEnd,
                        })
                    ),
                    showSelectedLabel
                        ? h(
                              'div',
                              {
                                  class: `${clsPrefix}-base-selection-label__render-label ${clsPrefix}-base-selection-overlay`,
                                  key: 'input',
                              },
                              h(
                                  'div',
                                  {
                                      class: `${clsPrefix}-base-selection-overlay__wrapper`,
                                  },
                                  renderTag
                                      ? renderTag({
                                            option: this.selectedOption,
                                            handleClose: () => {},
                                        })
                                      : renderLabel
                                      ? renderLabel(this.selectedOption, true)
                                      : render(
                                            this.label,
                                            this.selectedOption,
                                            true
                                        )
                              )
                          )
                        : null,
                    showPlaceholder
                        ? h(
                              'div',
                              {
                                  class: `${clsPrefix}-base-selection-placeholder ${clsPrefix}-base-selection-overlay`,
                                  key: 'placeholder',
                              },
                              h(
                                  'div',
                                  {
                                      class: `${clsPrefix}-base-selection-overlay__wrapper`,
                                  },
                                  this.filterablePlaceholder
                              )
                          )
                        : null,
                    suffix
                );
            } else {
                body = h(
                    'div',
                    {
                        ref: 'singleElRef',
                        class: `${clsPrefix}-base-selection-label`,
                        tabindex: this.disabled ? void 0 : 0,
                    },
                    this.label !== void 0
                        ? h(
                              'div',
                              {
                                  class: `${clsPrefix}-base-selection-input`,
                                  title: getTitleAttribute(this.label),
                                  key: 'input',
                              },
                              h(
                                  'div',
                                  {
                                      class: `${clsPrefix}-base-selection-input__content`,
                                  },
                                  renderTag
                                      ? renderTag({
                                            option: this.selectedOption,
                                            handleClose: () => {},
                                        })
                                      : renderLabel
                                      ? renderLabel(this.selectedOption, true)
                                      : render(
                                            this.label,
                                            this.selectedOption,
                                            true
                                        )
                              )
                          )
                        : h(
                              'div',
                              {
                                  class: `${clsPrefix}-base-selection-placeholder ${clsPrefix}-base-selection-overlay`,
                                  key: 'placeholder',
                              },
                              h(
                                  'div',
                                  {
                                      class: `${clsPrefix}-base-selection-placeholder__inner`,
                                  },
                                  this.placeholder
                              )
                          ),
                    suffix
                );
            }
        }
        return h(
            'div',
            {
                ref: 'selfRef',
                class: [
                    `${clsPrefix}-base-selection`,
                    this.themeClass,
                    status && `${clsPrefix}-base-selection--${status}-status`,
                    {
                        [`${clsPrefix}-base-selection--active`]: this.active,
                        [`${clsPrefix}-base-selection--selected`]:
                            this.selected || (this.active && this.pattern),
                        [`${clsPrefix}-base-selection--disabled`]:
                            this.disabled,
                        [`${clsPrefix}-base-selection--multiple`]:
                            this.multiple,
                        [`${clsPrefix}-base-selection--focus`]: this.focused,
                    },
                ],
                style: this.cssVars,
                onClick: this.onClick,
                onMouseenter: this.handleMouseEnter,
                onMouseleave: this.handleMouseLeave,
                onKeydown: this.onKeydown,
                onFocusin: this.handleFocusin,
                onFocusout: this.handleFocusout,
                onMousedown: this.handleMouseDown,
            },
            body,
            bordered
                ? h('div', { class: `${clsPrefix}-base-selection__border` })
                : null,
            bordered
                ? h('div', {
                      class: `${clsPrefix}-base-selection__state-border`,
                  })
                : null
        );
    },
});
