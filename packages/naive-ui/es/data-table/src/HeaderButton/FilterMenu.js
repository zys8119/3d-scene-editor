import { h, defineComponent, ref, computed, inject } from 'vue';
import { NCheckbox, NCheckboxGroup } from '../../../checkbox';
import { NRadio, NRadioGroup } from '../../../radio';
import { NButton } from '../../../button';
import { NScrollbar } from '../../../_internal';
import { shouldUseArrayInSingleMode } from '../utils';
import { dataTableInjectionKey } from '../interface';
export default defineComponent({
    name: 'DataTableFilterMenu',
    props: {
        column: {
            type: Object,
            required: true,
        },
        radioGroupName: {
            type: String,
            required: true,
        },
        multiple: {
            type: Boolean,
            required: true,
        },
        value: {
            type: [Array, String, Number],
            default: null,
        },
        options: {
            type: Array,
            required: true,
        },
        onConfirm: {
            type: Function,
            required: true,
        },
        onClear: {
            type: Function,
            required: true,
        },
        onChange: {
            type: Function,
            required: true,
        },
    },
    setup(props) {
        const { mergedClsPrefixRef, mergedThemeRef, localeRef } = inject(
            dataTableInjectionKey
        );
        const temporalValueRef = ref(props.value);
        const checkboxGroupValueRef = computed(() => {
            const { value: temporalValue } = temporalValueRef;
            if (!Array.isArray(temporalValue)) return null;
            return temporalValue;
        });
        const radioGroupValueRef = computed(() => {
            const { value: temporalValue } = temporalValueRef;
            if (shouldUseArrayInSingleMode(props.column)) {
                return (
                    (Array.isArray(temporalValue) &&
                        temporalValue.length &&
                        temporalValue[0]) ||
                    null
                );
            }
            if (!Array.isArray(temporalValue)) return temporalValue;
            return null;
        });
        function doChange(value) {
            props.onChange(value);
        }
        function handleChange(value) {
            if (props.multiple && Array.isArray(value)) {
                temporalValueRef.value = value;
            } else if (
                shouldUseArrayInSingleMode(props.column) &&
                !Array.isArray(value)
            ) {
                temporalValueRef.value = [value];
            } else {
                temporalValueRef.value = value;
            }
        }
        function handleConfirmClick() {
            doChange(temporalValueRef.value);
            props.onConfirm();
        }
        function handleClearClick() {
            if (props.multiple || shouldUseArrayInSingleMode(props.column)) {
                doChange([]);
            } else {
                doChange(null);
            }
            props.onClear();
        }
        return {
            mergedClsPrefix: mergedClsPrefixRef,
            mergedTheme: mergedThemeRef,
            locale: localeRef,
            checkboxGroupValue: checkboxGroupValueRef,
            radioGroupValue: radioGroupValueRef,
            handleChange,
            handleConfirmClick,
            handleClearClick,
        };
    },
    render() {
        const { mergedTheme, locale, mergedClsPrefix } = this;
        return h(
            'div',
            { class: `${mergedClsPrefix}-data-table-filter-menu` },
            h(NScrollbar, null, {
                default: () => {
                    const { checkboxGroupValue, handleChange } = this;
                    return this.multiple
                        ? h(
                              NCheckboxGroup,
                              {
                                  value: checkboxGroupValue,
                                  class: `${mergedClsPrefix}-data-table-filter-menu__group`,
                                  onUpdateValue: handleChange,
                              },
                              {
                                  default: () =>
                                      this.options.map((option) => {
                                          return h(
                                              NCheckbox,
                                              {
                                                  key: option.value,
                                                  theme: mergedTheme.peers
                                                      .Checkbox,
                                                  themeOverrides:
                                                      mergedTheme.peerOverrides
                                                          .Checkbox,
                                                  value: option.value,
                                              },
                                              { default: () => option.label }
                                          );
                                      }),
                              }
                          )
                        : h(
                              NRadioGroup,
                              {
                                  name: this.radioGroupName,
                                  class: `${mergedClsPrefix}-data-table-filter-menu__group`,
                                  value: this.radioGroupValue,
                                  onUpdateValue: this.handleChange,
                              },
                              {
                                  default: () =>
                                      this.options.map((option) =>
                                          h(
                                              NRadio,
                                              {
                                                  key: option.value,
                                                  value: option.value,
                                                  theme: mergedTheme.peers
                                                      .Radio,
                                                  themeOverrides:
                                                      mergedTheme.peerOverrides
                                                          .Radio,
                                              },
                                              { default: () => option.label }
                                          )
                                      ),
                              }
                          );
                },
            }),
            h(
                'div',
                { class: `${mergedClsPrefix}-data-table-filter-menu__action` },
                h(
                    NButton,
                    {
                        size: 'tiny',
                        theme: mergedTheme.peers.Button,
                        themeOverrides: mergedTheme.peerOverrides.Button,
                        onClick: this.handleClearClick,
                    },
                    { default: () => locale.clear }
                ),
                h(
                    NButton,
                    {
                        theme: mergedTheme.peers.Button,
                        themeOverrides: mergedTheme.peerOverrides.Button,
                        type: 'primary',
                        size: 'tiny',
                        onClick: this.handleConfirmClick,
                    },
                    { default: () => locale.confirm }
                )
            )
        );
    },
});
