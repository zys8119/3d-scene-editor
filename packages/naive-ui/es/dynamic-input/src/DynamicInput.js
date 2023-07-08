import {
    h,
    ref,
    toRef,
    isProxy,
    toRaw,
    computed,
    defineComponent,
    inject,
    provide,
    watchEffect,
} from 'vue';
import { useMergedState } from 'vooks';
import { createId } from 'seemly';
import {
    RemoveIcon,
    AddIcon,
    ArrowDownIcon,
    ArrowUpIcon,
} from '../../_internal/icons';
import { formItemInjectionKey } from '../../_mixins/use-form-item';
import { NBaseIcon } from '../../_internal';
import { NButton } from '../../button';
import { NButtonGroup } from '../../button-group';
import { useTheme, useLocale, useConfig, useThemeClass } from '../../_mixins';
import {
    call,
    warnOnce,
    resolveSlotWithProps,
    resolveSlot,
} from '../../_utils';
import { dynamicInputLight } from '../styles';
import NDynamicInputInputPreset from './InputPreset';
import NDynamicInputPairPreset from './PairPreset';
import { dynamicInputInjectionKey } from './interface';
import style from './styles/index.cssr';
import { useRtl } from '../../_mixins/use-rtl';
const globalDataKeyMap = /* @__PURE__ */ new WeakMap();
export const dynamicInputProps = Object.assign(
    Object.assign({}, useTheme.props),
    {
        max: Number,
        min: {
            type: Number,
            default: 0,
        },
        value: Array,
        defaultValue: {
            type: Array,
            default: () => [],
        },
        preset: {
            type: String,
            default: 'input',
        },
        keyField: String,
        itemStyle: [String, Object],
        keyPlaceholder: {
            type: String,
            default: '',
        },
        valuePlaceholder: {
            type: String,
            default: '',
        },
        placeholder: {
            type: String,
            default: '',
        },
        disabled: Boolean,
        showSortButton: Boolean,
        createButtonProps: Object,
        onCreate: Function,
        onRemove: Function,
        'onUpdate:value': [Function, Array],
        onUpdateValue: [Function, Array],
        onClear: Function,
        onInput: [Function, Array],
    }
);
export default defineComponent({
    name: 'DynamicInput',
    props: dynamicInputProps,
    setup(props, { slots }) {
        if (process.env.NODE_ENV !== 'production') {
            watchEffect(() => {
                if (props.onClear !== void 0) {
                    warnOnce(
                        'dynamic-input',
                        '`on-clear` is deprecated, it is out of usage anymore.'
                    );
                }
                if (props.onInput !== void 0) {
                    warnOnce(
                        'dynamic-input',
                        '`on-input` is deprecated, please use `on-update:value` instead.'
                    );
                }
            });
        }
        const {
            mergedComponentPropsRef,
            mergedClsPrefixRef,
            mergedRtlRef,
            inlineThemeDisabled,
        } = useConfig();
        const NFormItem = inject(formItemInjectionKey, null);
        const uncontrolledValueRef = ref(props.defaultValue);
        const controlledValueRef = toRef(props, 'value');
        const mergedValueRef = useMergedState(
            controlledValueRef,
            uncontrolledValueRef
        );
        const themeRef = useTheme(
            'DynamicInput',
            '-dynamic-input',
            style,
            dynamicInputLight,
            props,
            mergedClsPrefixRef
        );
        const insertionDisabledRef = computed(() => {
            const { value: mergedValue } = mergedValueRef;
            if (Array.isArray(mergedValue)) {
                const { max } = props;
                return max !== void 0 && mergedValue.length >= max;
            }
            return false;
        });
        const removeDisabledRef = computed(() => {
            const { value: mergedValue } = mergedValueRef;
            if (Array.isArray(mergedValue))
                return mergedValue.length <= props.min;
            return true;
        });
        const buttonSizeRef = computed(() => {
            var _a, _b;
            return (_b =
                (_a =
                    mergedComponentPropsRef === null ||
                    mergedComponentPropsRef === void 0
                        ? void 0
                        : mergedComponentPropsRef.value) === null ||
                _a === void 0
                    ? void 0
                    : _a.DynamicInput) === null || _b === void 0
                ? void 0
                : _b.buttonSize;
        });
        function doUpdateValue(value) {
            const {
                onInput,
                'onUpdate:value': _onUpdateValue,
                onUpdateValue,
            } = props;
            if (onInput) call(onInput, value);
            if (_onUpdateValue) call(_onUpdateValue, value);
            if (onUpdateValue) call(onUpdateValue, value);
            uncontrolledValueRef.value = value;
        }
        function ensureKey(value, index) {
            if (value === void 0 || value === null) return index;
            if (typeof value !== 'object') return index;
            const rawValue = isProxy(value) ? toRaw(value) : value;
            let key = globalDataKeyMap.get(rawValue);
            if (key === void 0) {
                globalDataKeyMap.set(rawValue, (key = createId()));
            }
            return key;
        }
        function handleValueChange(index, value) {
            const { value: mergedValue } = mergedValueRef;
            const newValue = Array.from(
                mergedValue !== null && mergedValue !== void 0
                    ? mergedValue
                    : []
            );
            const originalItem = newValue[index];
            newValue[index] = value;
            if (
                originalItem &&
                value &&
                typeof originalItem === 'object' &&
                typeof value === 'object'
            ) {
                const rawOriginal = isProxy(originalItem)
                    ? toRaw(originalItem)
                    : originalItem;
                const rawNew = isProxy(value) ? toRaw(value) : value;
                const originalKey = globalDataKeyMap.get(rawOriginal);
                if (originalKey !== void 0) {
                    globalDataKeyMap.set(rawNew, originalKey);
                }
            }
            doUpdateValue(newValue);
        }
        function handleCreateClick() {
            createItem(-1);
        }
        function createItem(index) {
            const { value: mergedValue } = mergedValueRef;
            const { onCreate } = props;
            const newValue = Array.from(
                mergedValue !== null && mergedValue !== void 0
                    ? mergedValue
                    : []
            );
            if (onCreate) {
                newValue.splice(index + 1, 0, onCreate(index + 1));
                doUpdateValue(newValue);
            } else if (slots.default) {
                newValue.splice(index + 1, 0, null);
                doUpdateValue(newValue);
            } else {
                switch (props.preset) {
                    case 'input':
                        newValue.splice(index + 1, 0, '');
                        doUpdateValue(newValue);
                        break;
                    case 'pair':
                        newValue.splice(index + 1, 0, { key: '', value: '' });
                        doUpdateValue(newValue);
                        break;
                }
            }
        }
        function remove(index) {
            const { value: mergedValue } = mergedValueRef;
            if (!Array.isArray(mergedValue)) return;
            const { min } = props;
            if (mergedValue.length <= min) return;
            const { onRemove } = props;
            if (onRemove) {
                onRemove(index);
            }
            const newValue = Array.from(mergedValue);
            newValue.splice(index, 1);
            doUpdateValue(newValue);
        }
        function swap(array, currentIndex, targetIndex) {
            if (
                currentIndex < 0 ||
                targetIndex < 0 ||
                currentIndex >= array.length ||
                targetIndex >= array.length
            ) {
                return;
            }
            if (currentIndex === targetIndex) return;
            const currentItem = array[currentIndex];
            array[currentIndex] = array[targetIndex];
            array[targetIndex] = currentItem;
        }
        function move(type, index) {
            const { value: mergedValue } = mergedValueRef;
            if (!Array.isArray(mergedValue)) return;
            const newValue = Array.from(mergedValue);
            if (type === 'up') {
                swap(newValue, index, index - 1);
            }
            if (type === 'down') {
                swap(newValue, index, index + 1);
            }
            doUpdateValue(newValue);
        }
        provide(dynamicInputInjectionKey, {
            mergedThemeRef: themeRef,
            keyPlaceholderRef: toRef(props, 'keyPlaceholder'),
            valuePlaceholderRef: toRef(props, 'valuePlaceholder'),
            placeholderRef: toRef(props, 'placeholder'),
        });
        const rtlEnabledRef = useRtl(
            'DynamicInput',
            mergedRtlRef,
            mergedClsPrefixRef
        );
        const cssVarsRef = computed(() => {
            const {
                self: { actionMargin, actionMarginRtl },
            } = themeRef.value;
            return {
                '--action-margin': actionMargin,
                '--action-margin-rtl': actionMarginRtl,
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? useThemeClass('dynamic-input', void 0, cssVarsRef, props)
            : void 0;
        return {
            locale: useLocale('DynamicInput').localeRef,
            rtlEnabled: rtlEnabledRef,
            buttonSize: buttonSizeRef,
            mergedClsPrefix: mergedClsPrefixRef,
            NFormItem,
            uncontrolledValue: uncontrolledValueRef,
            mergedValue: mergedValueRef,
            insertionDisabled: insertionDisabledRef,
            removeDisabled: removeDisabledRef,
            handleCreateClick,
            ensureKey,
            handleValueChange,
            remove,
            move,
            createItem,
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
        const {
            $slots,
            buttonSize,
            mergedClsPrefix,
            mergedValue,
            locale,
            mergedTheme,
            keyField,
            itemStyle,
            preset,
            showSortButton,
            NFormItem,
            ensureKey,
            handleValueChange,
            remove,
            createItem,
            move,
            onRender,
            disabled,
        } = this;
        onRender === null || onRender === void 0 ? void 0 : onRender();
        return h(
            'div',
            {
                class: [
                    `${mergedClsPrefix}-dynamic-input`,
                    this.rtlEnabled && `${mergedClsPrefix}-dynamic-input--rtl`,
                    this.themeClass,
                ],
                style: this.cssVars,
            },
            !Array.isArray(mergedValue) || mergedValue.length === 0
                ? h(
                      NButton,
                      Object.assign(
                          {
                              block: true,
                              ghost: true,
                              dashed: true,
                              size: buttonSize,
                          },
                          this.createButtonProps,
                          {
                              disabled: this.insertionDisabled || disabled,
                              theme: mergedTheme.peers.Button,
                              themeOverrides: mergedTheme.peerOverrides.Button,
                              onClick: this.handleCreateClick,
                          }
                      ),
                      {
                          default: () =>
                              resolveSlot(
                                  $slots['create-button-default'],
                                  () => [locale.create]
                              ),
                          icon: () =>
                              resolveSlot($slots['create-button-icon'], () => [
                                  h(
                                      NBaseIcon,
                                      { clsPrefix: mergedClsPrefix },
                                      { default: () => h(AddIcon, null) }
                                  ),
                              ]),
                      }
                  )
                : mergedValue.map((_, index) =>
                      h(
                          'div',
                          {
                              key: keyField ? _[keyField] : ensureKey(_, index),
                              'data-key': keyField
                                  ? _[keyField]
                                  : ensureKey(_, index),
                              class: `${mergedClsPrefix}-dynamic-input-item`,
                              style: itemStyle,
                          },
                          resolveSlotWithProps(
                              $slots.default,
                              {
                                  value: mergedValue[index],
                                  index,
                              },
                              () => {
                                  return [
                                      preset === 'input'
                                          ? h(NDynamicInputInputPreset, {
                                                disabled,
                                                clsPrefix: mergedClsPrefix,
                                                value: mergedValue[index],
                                                parentPath: NFormItem
                                                    ? NFormItem.path.value
                                                    : void 0,
                                                path: (
                                                    NFormItem === null ||
                                                    NFormItem === void 0
                                                        ? void 0
                                                        : NFormItem.path.value
                                                )
                                                    ? `${NFormItem.path.value}[${index}]`
                                                    : void 0,
                                                onUpdateValue: (v) =>
                                                    handleValueChange(index, v),
                                            })
                                          : preset === 'pair'
                                          ? h(NDynamicInputPairPreset, {
                                                disabled,
                                                clsPrefix: mergedClsPrefix,
                                                value: mergedValue[index],
                                                parentPath: NFormItem
                                                    ? NFormItem.path.value
                                                    : void 0,
                                                path: (
                                                    NFormItem === null ||
                                                    NFormItem === void 0
                                                        ? void 0
                                                        : NFormItem.path.value
                                                )
                                                    ? `${NFormItem.path.value}[${index}]`
                                                    : void 0,
                                                onUpdateValue: (v) =>
                                                    handleValueChange(index, v),
                                            })
                                          : null,
                                  ];
                              }
                          ),
                          resolveSlotWithProps(
                              $slots.action,
                              {
                                  value: mergedValue[index],
                                  index,
                                  create: createItem,
                                  remove,
                                  move,
                              },
                              () => [
                                  h(
                                      'div',
                                      {
                                          class: `${mergedClsPrefix}-dynamic-input-item__action`,
                                      },
                                      h(
                                          NButtonGroup,
                                          { size: buttonSize },
                                          {
                                              default: () => [
                                                  h(
                                                      NButton,
                                                      {
                                                          disabled:
                                                              this
                                                                  .removeDisabled ||
                                                              disabled,
                                                          theme: mergedTheme
                                                              .peers.Button,
                                                          themeOverrides:
                                                              mergedTheme
                                                                  .peerOverrides
                                                                  .Button,
                                                          circle: true,
                                                          onClick: () =>
                                                              remove(index),
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
                                                                      default:
                                                                          () =>
                                                                              h(
                                                                                  RemoveIcon,
                                                                                  null
                                                                              ),
                                                                  }
                                                              ),
                                                      }
                                                  ),
                                                  h(
                                                      NButton,
                                                      {
                                                          disabled:
                                                              this
                                                                  .insertionDisabled ||
                                                              disabled,
                                                          circle: true,
                                                          theme: mergedTheme
                                                              .peers.Button,
                                                          themeOverrides:
                                                              mergedTheme
                                                                  .peerOverrides
                                                                  .Button,
                                                          onClick: () =>
                                                              createItem(index),
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
                                                                      default:
                                                                          () =>
                                                                              h(
                                                                                  AddIcon,
                                                                                  null
                                                                              ),
                                                                  }
                                                              ),
                                                      }
                                                  ),
                                                  showSortButton
                                                      ? h(
                                                            NButton,
                                                            {
                                                                disabled:
                                                                    index ===
                                                                        0 ||
                                                                    disabled,
                                                                circle: true,
                                                                theme: mergedTheme
                                                                    .peers
                                                                    .Button,
                                                                themeOverrides:
                                                                    mergedTheme
                                                                        .peerOverrides
                                                                        .Button,
                                                                onClick: () =>
                                                                    move(
                                                                        'up',
                                                                        index
                                                                    ),
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
                                                                            default:
                                                                                () =>
                                                                                    h(
                                                                                        ArrowUpIcon,
                                                                                        null
                                                                                    ),
                                                                        }
                                                                    ),
                                                            }
                                                        )
                                                      : null,
                                                  showSortButton
                                                      ? h(
                                                            NButton,
                                                            {
                                                                disabled:
                                                                    index ===
                                                                        mergedValue.length -
                                                                            1 ||
                                                                    disabled,
                                                                circle: true,
                                                                theme: mergedTheme
                                                                    .peers
                                                                    .Button,
                                                                themeOverrides:
                                                                    mergedTheme
                                                                        .peerOverrides
                                                                        .Button,
                                                                onClick: () =>
                                                                    move(
                                                                        'down',
                                                                        index
                                                                    ),
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
                                                                            default:
                                                                                () =>
                                                                                    h(
                                                                                        ArrowDownIcon,
                                                                                        null
                                                                                    ),
                                                                        }
                                                                    ),
                                                            }
                                                        )
                                                      : null,
                                              ],
                                          }
                                      )
                                  ),
                              ]
                          )
                      )
                  )
        );
    },
});
