var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.dynamicTagsProps = void 0;
const vue_1 = require('vue');
const vooks_1 = require('vooks');
const common_props_1 = __importDefault(require('../../tag/src/common-props'));
const icons_1 = require('../../_internal/icons');
const button_1 = require('../../button');
const space_1 = require('../../space');
const input_1 = require('../../input');
const tag_1 = require('../../tag');
const _internal_1 = require('../../_internal');
const _mixins_1 = require('../../_mixins');
const _utils_1 = require('../../_utils');
const styles_1 = require('../styles');
const index_cssr_1 = __importDefault(require('./styles/index.cssr'));
exports.dynamicTagsProps = Object.assign(
    Object.assign(
        Object.assign({}, _mixins_1.useTheme.props),
        common_props_1.default
    ),
    {
        size: {
            type: String,
            default: 'medium',
        },
        closable: {
            type: Boolean,
            default: true,
        },
        defaultValue: {
            type: Array,
            default: () => [],
        },
        value: Array,
        inputStyle: [String, Object],
        inputProps: Object,
        max: Number,
        tagStyle: [String, Object],
        renderTag: Function,
        onCreate: {
            type: Function,
            default: (label) => label,
        },
        'onUpdate:value': [Function, Array],
        onUpdateValue: [Function, Array],
        onChange: [Function, Array],
    }
);
exports.default = (0, vue_1.defineComponent)({
    name: 'DynamicTags',
    props: exports.dynamicTagsProps,
    setup(props) {
        if (process.env.NODE_ENV !== 'production') {
            (0, vue_1.watchEffect)(() => {
                if (props.onChange !== void 0) {
                    (0, _utils_1.warnOnce)(
                        'dynamic-tags',
                        '`on-change` is deprecated, please use `on-update:value` instead.'
                    );
                }
            });
        }
        const { mergedClsPrefixRef, inlineThemeDisabled } = (0,
        _mixins_1.useConfig)(props);
        const { localeRef } = (0, _mixins_1.useLocale)('DynamicTags');
        const formItem = (0, _mixins_1.useFormItem)(props);
        const { mergedDisabledRef } = formItem;
        const inputValueRef = (0, vue_1.ref)('');
        const showInputRef = (0, vue_1.ref)(false);
        const inputForceFocusedRef = (0, vue_1.ref)(true);
        const inputInstRef = (0, vue_1.ref)(null);
        const themeRef = (0, _mixins_1.useTheme)(
            'DynamicTags',
            '-dynamic-tags',
            index_cssr_1.default,
            styles_1.dynamicTagsLight,
            props,
            mergedClsPrefixRef
        );
        const uncontrolledValueRef = (0, vue_1.ref)(props.defaultValue);
        const controlledValueRef = (0, vue_1.toRef)(props, 'value');
        const mergedValueRef = (0, vooks_1.useMergedState)(
            controlledValueRef,
            uncontrolledValueRef
        );
        const localizedAddRef = (0, vue_1.computed)(() => {
            return localeRef.value.add;
        });
        const inputSizeRef = (0, vue_1.computed)(() => {
            return (0, _utils_1.smallerSize)(props.size);
        });
        const triggerDisabledRef = (0, vue_1.computed)(() => {
            return (
                mergedDisabledRef.value ||
                (!!props.max && mergedValueRef.value.length >= props.max)
            );
        });
        function doChange(value) {
            const {
                onChange,
                'onUpdate:value': _onUpdateValue,
                onUpdateValue,
            } = props;
            const { nTriggerFormInput, nTriggerFormChange } = formItem;
            if (onChange) (0, _utils_1.call)(onChange, value);
            if (onUpdateValue) (0, _utils_1.call)(onUpdateValue, value);
            if (_onUpdateValue) (0, _utils_1.call)(_onUpdateValue, value);
            uncontrolledValueRef.value = value;
            nTriggerFormInput();
            nTriggerFormChange();
        }
        function handleCloseClick(index) {
            const tags = mergedValueRef.value.slice(0);
            tags.splice(index, 1);
            doChange(tags);
        }
        function handleInputKeyUp(e) {
            switch (e.key) {
                case 'Enter':
                    handleInputConfirm();
            }
        }
        function handleInputConfirm(externalValue) {
            const nextValue =
                externalValue !== null && externalValue !== void 0
                    ? externalValue
                    : inputValueRef.value;
            if (nextValue) {
                const tags = mergedValueRef.value.slice(0);
                tags.push(props.onCreate(nextValue));
                doChange(tags);
            }
            showInputRef.value = false;
            inputForceFocusedRef.value = true;
            inputValueRef.value = '';
        }
        function handleInputBlur() {
            handleInputConfirm();
        }
        function handleAddClick() {
            showInputRef.value = true;
            void (0, vue_1.nextTick)(() => {
                var _a;
                (_a = inputInstRef.value) === null || _a === void 0
                    ? void 0
                    : _a.focus();
                inputForceFocusedRef.value = false;
            });
        }
        const cssVarsRef = (0, vue_1.computed)(() => {
            const {
                self: { inputWidth },
            } = themeRef.value;
            return {
                '--n-input-width': inputWidth,
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? (0, _mixins_1.useThemeClass)(
                  'dynamic-tags',
                  void 0,
                  cssVarsRef,
                  props
              )
            : void 0;
        return {
            mergedClsPrefix: mergedClsPrefixRef,
            inputInstRef,
            localizedAdd: localizedAddRef,
            inputSize: inputSizeRef,
            inputValue: inputValueRef,
            showInput: showInputRef,
            inputForceFocused: inputForceFocusedRef,
            mergedValue: mergedValueRef,
            mergedDisabled: mergedDisabledRef,
            triggerDisabled: triggerDisabledRef,
            handleInputKeyUp,
            handleAddClick,
            handleInputBlur,
            handleCloseClick,
            handleInputConfirm,
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
        };
    },
    render() {
        const { mergedTheme, cssVars, mergedClsPrefix, onRender, renderTag } =
            this;
        onRender === null || onRender === void 0 ? void 0 : onRender();
        return (0, vue_1.h)(
            space_1.NSpace,
            {
                class: [`${mergedClsPrefix}-dynamic-tags`, this.themeClass],
                size: 'small',
                style: cssVars,
                theme: mergedTheme.peers.Space,
                themeOverrides: mergedTheme.peerOverrides.Space,
                itemStyle: 'display: flex;',
            },
            {
                default: () => {
                    const {
                        mergedTheme: mergedTheme2,
                        tagStyle,
                        type,
                        round,
                        size,
                        color,
                        closable,
                        mergedDisabled,
                        showInput,
                        inputValue,
                        inputStyle,
                        inputSize,
                        inputForceFocused,
                        triggerDisabled,
                        handleInputKeyUp,
                        handleInputBlur,
                        handleAddClick,
                        handleCloseClick,
                        handleInputConfirm,
                        $slots,
                    } = this;
                    return this.mergedValue
                        .map((tag, index) =>
                            renderTag
                                ? renderTag(tag, index)
                                : (0, vue_1.h)(
                                      tag_1.NTag,
                                      {
                                          key: index,
                                          theme: mergedTheme2.peers.Tag,
                                          themeOverrides:
                                              mergedTheme2.peerOverrides.Tag,
                                          style: tagStyle,
                                          type,
                                          round,
                                          size,
                                          color,
                                          closable,
                                          disabled: mergedDisabled,
                                          onClose: () =>
                                              handleCloseClick(index),
                                      },
                                      {
                                          default: () =>
                                              typeof tag === 'string'
                                                  ? tag
                                                  : tag.label,
                                      }
                                  )
                        )
                        .concat(
                            showInput
                                ? $slots.input
                                    ? $slots.input({
                                          submit: handleInputConfirm,
                                          deactivate: handleInputBlur,
                                      })
                                    : (0, vue_1.h)(
                                          input_1.NInput,
                                          Object.assign(
                                              {
                                                  placeholder: '',
                                                  size: inputSize,
                                                  style: inputStyle,
                                                  autosize: true,
                                              },
                                              this.inputProps,
                                              {
                                                  ref: 'inputInstRef',
                                                  value: inputValue,
                                                  onUpdateValue: (v) => {
                                                      this.inputValue = v;
                                                  },
                                                  theme: mergedTheme2.peers
                                                      .Input,
                                                  themeOverrides:
                                                      mergedTheme2.peerOverrides
                                                          .Input,
                                                  onKeyup: handleInputKeyUp,
                                                  onBlur: handleInputBlur,
                                                  internalForceFocus:
                                                      inputForceFocused,
                                              }
                                          )
                                      )
                                : $slots.trigger
                                ? $slots.trigger({
                                      activate: handleAddClick,
                                      disabled: triggerDisabled,
                                  })
                                : (0, vue_1.h)(
                                      button_1.NButton,
                                      {
                                          dashed: true,
                                          disabled: triggerDisabled,
                                          theme: mergedTheme2.peers.Button,
                                          themeOverrides:
                                              mergedTheme2.peerOverrides.Button,
                                          size: inputSize,
                                          onClick: handleAddClick,
                                      },
                                      {
                                          icon: () =>
                                              (0, vue_1.h)(
                                                  _internal_1.NBaseIcon,
                                                  {
                                                      clsPrefix:
                                                          mergedClsPrefix,
                                                  },
                                                  {
                                                      default: () =>
                                                          (0, vue_1.h)(
                                                              icons_1.AddIcon,
                                                              null
                                                          ),
                                                  }
                                              ),
                                      }
                                  )
                        );
                },
            }
        );
    },
});
