import {
    h,
    defineComponent,
    ref,
    computed,
    nextTick,
    toRef,
    watchEffect,
} from 'vue';
import { useMergedState } from 'vooks';
import commonProps from '../../tag/src/common-props';
import { AddIcon } from '../../_internal/icons';
import { NButton } from '../../button';
import { NSpace } from '../../space';
import { NInput } from '../../input';
import { NTag } from '../../tag';
import { NBaseIcon } from '../../_internal';
import {
    useTheme,
    useFormItem,
    useLocale,
    useConfig,
    useThemeClass,
} from '../../_mixins';
import { call, smallerSize, warnOnce } from '../../_utils';
import { dynamicTagsLight } from '../styles';
import style from './styles/index.cssr';
export const dynamicTagsProps = Object.assign(
    Object.assign(Object.assign({}, useTheme.props), commonProps),
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
export default defineComponent({
    name: 'DynamicTags',
    props: dynamicTagsProps,
    setup(props) {
        if (process.env.NODE_ENV !== 'production') {
            watchEffect(() => {
                if (props.onChange !== void 0) {
                    warnOnce(
                        'dynamic-tags',
                        '`on-change` is deprecated, please use `on-update:value` instead.'
                    );
                }
            });
        }
        const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
        const { localeRef } = useLocale('DynamicTags');
        const formItem = useFormItem(props);
        const { mergedDisabledRef } = formItem;
        const inputValueRef = ref('');
        const showInputRef = ref(false);
        const inputForceFocusedRef = ref(true);
        const inputInstRef = ref(null);
        const themeRef = useTheme(
            'DynamicTags',
            '-dynamic-tags',
            style,
            dynamicTagsLight,
            props,
            mergedClsPrefixRef
        );
        const uncontrolledValueRef = ref(props.defaultValue);
        const controlledValueRef = toRef(props, 'value');
        const mergedValueRef = useMergedState(
            controlledValueRef,
            uncontrolledValueRef
        );
        const localizedAddRef = computed(() => {
            return localeRef.value.add;
        });
        const inputSizeRef = computed(() => {
            return smallerSize(props.size);
        });
        const triggerDisabledRef = computed(() => {
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
            if (onChange) call(onChange, value);
            if (onUpdateValue) call(onUpdateValue, value);
            if (_onUpdateValue) call(_onUpdateValue, value);
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
            void nextTick(() => {
                var _a;
                (_a = inputInstRef.value) === null || _a === void 0
                    ? void 0
                    : _a.focus();
                inputForceFocusedRef.value = false;
            });
        }
        const cssVarsRef = computed(() => {
            const {
                self: { inputWidth },
            } = themeRef.value;
            return {
                '--n-input-width': inputWidth,
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? useThemeClass('dynamic-tags', void 0, cssVarsRef, props)
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
        return h(
            NSpace,
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
                                : h(
                                      NTag,
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
                                    : h(
                                          NInput,
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
                                : h(
                                      NButton,
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
                                              h(
                                                  NBaseIcon,
                                                  {
                                                      clsPrefix:
                                                          mergedClsPrefix,
                                                  },
                                                  {
                                                      default: () =>
                                                          h(AddIcon, null),
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
