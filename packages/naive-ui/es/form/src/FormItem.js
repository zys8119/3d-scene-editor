var __awaiter = function (thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P
            ? value
            : new P(function (resolve) {
                  resolve(value);
              });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator['throw'](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done
                ? resolve(result.value)
                : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import {
    h,
    defineComponent,
    computed,
    toRef,
    ref,
    provide,
    inject,
    watch,
    Transition,
    onMounted,
} from 'vue';
import Schema from 'async-validator';
import { get } from 'lodash-es';
import { createId } from 'seemly';
import { formItemInjectionKey } from '../../_mixins/use-form-item';
import { useConfig, useTheme, useThemeClass } from '../../_mixins';
import {
    warn,
    createKey,
    useInjectionInstanceCollection,
    keysOf,
    resolveWrappedSlot,
} from '../../_utils';
import { formLight } from '../styles';
import { formItemMisc, formItemSize, formItemRule } from './utils';
import { formInjectionKey, formItemInstsInjectionKey } from './context';
import style from './styles/form-item.cssr';
export const formItemProps = Object.assign(Object.assign({}, useTheme.props), {
    label: String,
    labelWidth: [Number, String],
    labelStyle: [String, Object],
    labelAlign: String,
    labelPlacement: String,
    path: String,
    first: Boolean,
    rulePath: String,
    required: Boolean,
    showRequireMark: {
        type: Boolean,
        default: void 0,
    },
    requireMarkPlacement: String,
    showFeedback: {
        type: Boolean,
        default: void 0,
    },
    rule: [Object, Array],
    size: String,
    ignorePathChange: Boolean,
    validationStatus: String,
    feedback: String,
    showLabel: {
        type: Boolean,
        default: void 0,
    },
    labelProps: Object,
});
export const formItemPropKeys = keysOf(formItemProps);
function wrapValidator(validator, async) {
    return (...args) => {
        try {
            const validateResult = validator(...args);
            if (
                (!async &&
                    (typeof validateResult === 'boolean' ||
                        validateResult instanceof Error ||
                        Array.isArray(validateResult))) ||
                (validateResult === null || validateResult === void 0
                    ? void 0
                    : validateResult.then)
            ) {
                return validateResult;
            } else if (validateResult === void 0) {
                return true;
            } else {
                warn(
                    'form-item/validate',
                    `You return a ${typeof validateResult} typed value in the validator method, which is not recommended. Please use ` +
                        (async
                            ? '`Promise`'
                            : '`boolean`, `Error` or `Promise`') +
                        ' typed value instead.'
                );
                return true;
            }
        } catch (err) {
            warn(
                'form-item/validate',
                "An error is catched in the validation, so the validation won't be done. Your callback in `validate` method of `n-form` or `n-form-item` won't be called in this validation."
            );
            console.error(err);
            return void 0;
        }
    };
}
export default defineComponent({
    name: 'FormItem',
    props: formItemProps,
    setup(props) {
        useInjectionInstanceCollection(
            formItemInstsInjectionKey,
            'formItems',
            toRef(props, 'path')
        );
        const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
        const NForm = inject(formInjectionKey, null);
        const formItemSizeRefs = formItemSize(props);
        const formItemMiscRefs = formItemMisc(props);
        const { validationErrored: validationErroredRef } = formItemMiscRefs;
        const {
            mergedRequired: mergedRequiredRef,
            mergedRules: mergedRulesRef,
        } = formItemRule(props);
        const { mergedSize: mergedSizeRef } = formItemSizeRefs;
        const {
            mergedLabelPlacement: labelPlacementRef,
            mergedLabelAlign: labelTextAlignRef,
            mergedRequireMarkPlacement: mergedRequireMarkPlacementRef,
        } = formItemMiscRefs;
        const renderExplainsRef = ref([]);
        const feedbackIdRef = ref(createId());
        const mergedDisabledRef = NForm
            ? toRef(NForm.props, 'disabled')
            : ref(false);
        const themeRef = useTheme(
            'Form',
            '-form-item',
            style,
            formLight,
            props,
            mergedClsPrefixRef
        );
        watch(toRef(props, 'path'), () => {
            if (props.ignorePathChange) return;
            restoreValidation();
        });
        function restoreValidation() {
            renderExplainsRef.value = [];
            validationErroredRef.value = false;
            if (props.feedback) {
                feedbackIdRef.value = createId();
            }
        }
        function handleContentBlur() {
            void internalValidate('blur');
        }
        function handleContentChange() {
            void internalValidate('change');
        }
        function handleContentFocus() {
            void internalValidate('focus');
        }
        function handleContentInput() {
            void internalValidate('input');
        }
        function validate(options, callback) {
            return __awaiter(this, void 0, void 0, function* () {
                let trigger;
                let validateCallback;
                let shouldRuleBeApplied;
                let asyncValidatorOptions;
                if (typeof options === 'string') {
                    trigger = options;
                    validateCallback = callback;
                } else if (options !== null && typeof options === 'object') {
                    trigger = options.trigger;
                    validateCallback = options.callback;
                    shouldRuleBeApplied = options.shouldRuleBeApplied;
                    asyncValidatorOptions = options.options;
                }
                return yield new Promise((resolve, reject) => {
                    void internalValidate(
                        trigger,
                        shouldRuleBeApplied,
                        asyncValidatorOptions
                    ).then(({ valid, errors }) => {
                        if (valid) {
                            if (validateCallback) {
                                validateCallback();
                            }
                            resolve();
                        } else {
                            if (validateCallback) {
                                validateCallback(errors);
                            }
                            reject(errors);
                        }
                    });
                });
            });
        }
        const internalValidate = (
            trigger = null,
            shouldRuleBeApplied = () => true,
            options = {
                suppressWarning: true,
            }
        ) =>
            __awaiter(this, void 0, void 0, function* () {
                const { path } = props;
                if (!options) {
                    options = {};
                } else {
                    if (!options.first) options.first = props.first;
                }
                const { value: rules } = mergedRulesRef;
                const value = NForm
                    ? get(NForm.props.model, path || '')
                    : void 0;
                const messageRenderers = {};
                const originalMessageRendersMessage = {};
                const activeRules = (
                    !trigger
                        ? rules
                        : rules.filter((rule) => {
                              if (Array.isArray(rule.trigger)) {
                                  return rule.trigger.includes(trigger);
                              } else {
                                  return rule.trigger === trigger;
                              }
                          })
                )
                    .filter(shouldRuleBeApplied)
                    .map((rule, i) => {
                        const shallowClonedRule = Object.assign({}, rule);
                        if (shallowClonedRule.validator) {
                            shallowClonedRule.validator = wrapValidator(
                                shallowClonedRule.validator,
                                false
                            );
                        }
                        if (shallowClonedRule.asyncValidator) {
                            shallowClonedRule.asyncValidator = wrapValidator(
                                shallowClonedRule.asyncValidator,
                                true
                            );
                        }
                        if (shallowClonedRule.renderMessage) {
                            const rendererKey = `__renderMessage__${i}`;
                            originalMessageRendersMessage[rendererKey] =
                                shallowClonedRule.message;
                            shallowClonedRule.message = rendererKey;
                            messageRenderers[rendererKey] =
                                shallowClonedRule.renderMessage;
                        }
                        return shallowClonedRule;
                    });
                if (!activeRules.length) {
                    return {
                        valid: true,
                    };
                }
                const mergedPath =
                    path !== null && path !== void 0 ? path : '__n_no_path__';
                const validator = new Schema({ [mergedPath]: activeRules });
                const { validateMessages } =
                    (NForm === null || NForm === void 0
                        ? void 0
                        : NForm.props) || {};
                if (validateMessages) {
                    validator.messages(validateMessages);
                }
                return yield new Promise((resolve) => {
                    void validator.validate(
                        { [mergedPath]: value },
                        options,
                        (errors) => {
                            if (
                                errors === null || errors === void 0
                                    ? void 0
                                    : errors.length
                            ) {
                                renderExplainsRef.value = errors.map(
                                    (error) => {
                                        const transformedMessage =
                                            (error === null || error === void 0
                                                ? void 0
                                                : error.message) || '';
                                        return {
                                            key: transformedMessage,
                                            render: () => {
                                                if (
                                                    transformedMessage.startsWith(
                                                        '__renderMessage__'
                                                    )
                                                ) {
                                                    return messageRenderers[
                                                        transformedMessage
                                                    ]();
                                                }
                                                return transformedMessage;
                                            },
                                        };
                                    }
                                );
                                errors.forEach((error) => {
                                    var _a;
                                    if (
                                        (_a = error.message) === null ||
                                        _a === void 0
                                            ? void 0
                                            : _a.startsWith('__renderMessage__')
                                    ) {
                                        error.message =
                                            originalMessageRendersMessage[
                                                error.message
                                            ];
                                    }
                                });
                                validationErroredRef.value = true;
                                resolve({
                                    valid: false,
                                    errors,
                                });
                            } else {
                                restoreValidation();
                                resolve({
                                    valid: true,
                                });
                            }
                        }
                    );
                });
            });
        provide(formItemInjectionKey, {
            path: toRef(props, 'path'),
            disabled: mergedDisabledRef,
            mergedSize: formItemSizeRefs.mergedSize,
            mergedValidationStatus: formItemMiscRefs.mergedValidationStatus,
            restoreValidation,
            handleContentBlur,
            handleContentChange,
            handleContentFocus,
            handleContentInput,
        });
        const exposedRef = {
            validate,
            restoreValidation,
            internalValidate,
        };
        const labelElementRef = ref(null);
        onMounted(() => {
            if (!formItemMiscRefs.isAutoLabelWidth.value) return;
            const labelElement = labelElementRef.value;
            if (labelElement !== null) {
                const memoizedWhitespace = labelElement.style.whiteSpace;
                labelElement.style.whiteSpace = 'nowrap';
                labelElement.style.width = '';
                NForm === null || NForm === void 0
                    ? void 0
                    : NForm.deriveMaxChildLabelWidth(
                          Number(
                              getComputedStyle(labelElement).width.slice(0, -2)
                          )
                      );
                labelElement.style.whiteSpace = memoizedWhitespace;
            }
        });
        const cssVarsRef = computed(() => {
            var _a;
            const { value: size } = mergedSizeRef;
            const { value: labelPlacement } = labelPlacementRef;
            const direction =
                labelPlacement === 'top' ? 'vertical' : 'horizontal';
            const {
                common: { cubicBezierEaseInOut },
                self: {
                    labelTextColor,
                    asteriskColor,
                    lineHeight,
                    feedbackTextColor,
                    feedbackTextColorWarning,
                    feedbackTextColorError,
                    feedbackPadding,
                    labelFontWeight,
                    [createKey('labelHeight', size)]: labelHeight,
                    [createKey('blankHeight', size)]: blankHeight,
                    [createKey('feedbackFontSize', size)]: feedbackFontSize,
                    [createKey('feedbackHeight', size)]: feedbackHeight,
                    [createKey('labelPadding', direction)]: labelPadding,
                    [createKey('labelTextAlign', direction)]: labelTextAlign,
                    [createKey(
                        createKey('labelFontSize', labelPlacement),
                        size
                    )]: labelFontSize,
                },
            } = themeRef.value;
            let mergedLabelTextAlign =
                (_a = labelTextAlignRef.value) !== null && _a !== void 0
                    ? _a
                    : labelTextAlign;
            if (labelPlacement === 'top') {
                mergedLabelTextAlign =
                    mergedLabelTextAlign === 'right'
                        ? 'flex-end'
                        : 'flex-start';
            }
            const cssVars = {
                '--n-bezier': cubicBezierEaseInOut,
                '--n-line-height': lineHeight,
                '--n-blank-height': blankHeight,
                '--n-label-font-size': labelFontSize,
                '--n-label-text-align': mergedLabelTextAlign,
                '--n-label-height': labelHeight,
                '--n-label-padding': labelPadding,
                '--n-label-font-weight': labelFontWeight,
                '--n-asterisk-color': asteriskColor,
                '--n-label-text-color': labelTextColor,
                '--n-feedback-padding': feedbackPadding,
                '--n-feedback-font-size': feedbackFontSize,
                '--n-feedback-height': feedbackHeight,
                '--n-feedback-text-color': feedbackTextColor,
                '--n-feedback-text-color-warning': feedbackTextColorWarning,
                '--n-feedback-text-color-error': feedbackTextColorError,
            };
            return cssVars;
        });
        const themeClassHandle = inlineThemeDisabled
            ? useThemeClass(
                  'form-item',
                  computed(() => {
                      var _a;
                      return `${mergedSizeRef.value[0]}${
                          labelPlacementRef.value[0]
                      }${
                          ((_a = labelTextAlignRef.value) === null ||
                          _a === void 0
                              ? void 0
                              : _a[0]) || ''
                      }`;
                  }),
                  cssVarsRef,
                  props
              )
            : void 0;
        const reverseColSpaceRef = computed(() => {
            return (
                labelPlacementRef.value === 'left' &&
                mergedRequireMarkPlacementRef.value === 'left' &&
                labelTextAlignRef.value === 'left'
            );
        });
        return Object.assign(
            Object.assign(
                Object.assign(
                    Object.assign(
                        {
                            labelElementRef,
                            mergedClsPrefix: mergedClsPrefixRef,
                            mergedRequired: mergedRequiredRef,
                            feedbackId: feedbackIdRef,
                            renderExplains: renderExplainsRef,
                            reverseColSpace: reverseColSpaceRef,
                        },
                        formItemMiscRefs
                    ),
                    formItemSizeRefs
                ),
                exposedRef
            ),
            {
                cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
                themeClass:
                    themeClassHandle === null || themeClassHandle === void 0
                        ? void 0
                        : themeClassHandle.themeClass,
                onRender:
                    themeClassHandle === null || themeClassHandle === void 0
                        ? void 0
                        : themeClassHandle.onRender,
            }
        );
    },
    render() {
        const {
            $slots,
            mergedClsPrefix,
            mergedShowLabel,
            mergedShowRequireMark,
            mergedRequireMarkPlacement,
            onRender,
        } = this;
        const renderedShowRequireMark =
            mergedShowRequireMark !== void 0
                ? mergedShowRequireMark
                : this.mergedRequired;
        onRender === null || onRender === void 0 ? void 0 : onRender();
        const renderLabel = () => {
            const labelText = this.$slots.label
                ? this.$slots.label()
                : this.label;
            if (!labelText) return null;
            const textNode = h(
                'span',
                { class: `${mergedClsPrefix}-form-item-label__text` },
                labelText
            );
            const markNode = renderedShowRequireMark
                ? h(
                      'span',
                      { class: `${mergedClsPrefix}-form-item-label__asterisk` },
                      mergedRequireMarkPlacement !== 'left' ? '\xA0*' : '*\xA0'
                  )
                : mergedRequireMarkPlacement === 'right-hanging' &&
                  h(
                      'span',
                      {
                          class: `${mergedClsPrefix}-form-item-label__asterisk-placeholder`,
                      },
                      '\xA0*'
                  );
            const { labelProps } = this;
            return h(
                'label',
                Object.assign({}, labelProps, {
                    class: [
                        labelProps === null || labelProps === void 0
                            ? void 0
                            : labelProps.class,
                        `${mergedClsPrefix}-form-item-label`,
                        `${mergedClsPrefix}-form-item-label--${mergedRequireMarkPlacement}-mark`,
                        this.reverseColSpace &&
                            `${mergedClsPrefix}-form-item-label--reverse-columns-space`,
                    ],
                    style: this.mergedLabelStyle,
                    ref: 'labelElementRef',
                }),
                mergedRequireMarkPlacement === 'left'
                    ? [markNode, textNode]
                    : [textNode, markNode]
            );
        };
        return h(
            'div',
            {
                class: [
                    `${mergedClsPrefix}-form-item`,
                    this.themeClass,
                    `${mergedClsPrefix}-form-item--${this.mergedSize}-size`,
                    `${mergedClsPrefix}-form-item--${this.mergedLabelPlacement}-labelled`,
                    this.isAutoLabelWidth &&
                        `${mergedClsPrefix}-form-item--auto-label-width`,
                    !mergedShowLabel &&
                        `${mergedClsPrefix}-form-item--no-label`,
                ],
                style: this.cssVars,
            },
            mergedShowLabel && renderLabel(),
            h(
                'div',
                {
                    class: [
                        `${mergedClsPrefix}-form-item-blank`,
                        this.mergedValidationStatus &&
                            `${mergedClsPrefix}-form-item-blank--${this.mergedValidationStatus}`,
                    ],
                },
                $slots
            ),
            this.mergedShowFeedback
                ? h(
                      'div',
                      {
                          key: this.feedbackId,
                          class: `${mergedClsPrefix}-form-item-feedback-wrapper`,
                      },
                      h(
                          Transition,
                          { name: 'fade-down-transition', mode: 'out-in' },
                          {
                              default: () => {
                                  const { mergedValidationStatus } = this;
                                  return resolveWrappedSlot(
                                      $slots.feedback,
                                      (children) => {
                                          var _a;
                                          const { feedback } = this;
                                          const feedbackNodes =
                                              children || feedback
                                                  ? h(
                                                        'div',
                                                        {
                                                            key: '__feedback__',
                                                            class: `${mergedClsPrefix}-form-item-feedback__line`,
                                                        },
                                                        children || feedback
                                                    )
                                                  : this.renderExplains.length
                                                  ? (_a =
                                                        this.renderExplains) ===
                                                        null || _a === void 0
                                                      ? void 0
                                                      : _a.map(
                                                            ({ key, render }) =>
                                                                h(
                                                                    'div',
                                                                    {
                                                                        key,
                                                                        class: `${mergedClsPrefix}-form-item-feedback__line`,
                                                                    },
                                                                    render()
                                                                )
                                                        )
                                                  : null;
                                          return feedbackNodes
                                              ? mergedValidationStatus ===
                                                'warning'
                                                  ? h(
                                                        'div',
                                                        {
                                                            key: 'controlled-warning',
                                                            class: `${mergedClsPrefix}-form-item-feedback ${mergedClsPrefix}-form-item-feedback--warning`,
                                                        },
                                                        feedbackNodes
                                                    )
                                                  : mergedValidationStatus ===
                                                    'error'
                                                  ? h(
                                                        'div',
                                                        {
                                                            key: 'controlled-error',
                                                            class: `${mergedClsPrefix}-form-item-feedback ${mergedClsPrefix}-form-item-feedback--error`,
                                                        },
                                                        feedbackNodes
                                                    )
                                                  : mergedValidationStatus ===
                                                    'success'
                                                  ? h(
                                                        'div',
                                                        {
                                                            key: 'controlled-success',
                                                            class: `${mergedClsPrefix}-form-item-feedback ${mergedClsPrefix}-form-item-feedback--success`,
                                                        },
                                                        feedbackNodes
                                                    )
                                                  : h(
                                                        'div',
                                                        {
                                                            key: 'controlled-default',
                                                            class: `${mergedClsPrefix}-form-item-feedback`,
                                                        },
                                                        feedbackNodes
                                                    )
                                              : null;
                                      }
                                  );
                              },
                          }
                      )
                  )
                : null
        );
    },
});
