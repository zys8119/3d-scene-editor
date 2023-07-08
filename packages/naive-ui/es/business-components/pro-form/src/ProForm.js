import { computed, defineComponent } from 'vue';
import { useConfig, useTheme } from '../../../_mixins';
import style from './styles/index.cssr';
import { proFormLight } from '../styles';
import { NCheckbox, NCheckboxGroup } from '../../../checkbox';
import { NGrid, NGi } from '../../../grid';
import { NRadio, NRadioGroup } from '../../../radio';
import { NForm, NFormItem } from '../../../form';
import { ref, onMounted, h } from 'vue';
export const proFormProps = Object.assign(Object.assign({}, useTheme.props), {
    value: {
        type: Object,
        default: () => {},
    },
    options: {
        type: Array,
        default: () => [],
    },
    formProps: {
        type: Object,
        default: {},
    },
    formItemProps: {
        type: Object,
        default: {},
    },
    'onUpdate:value': [Function, Array],
});
export default defineComponent({
    name: 'ProForm',
    props: proFormProps,
    emits: {
        submit: () => true,
        'update:value': (value) => typeof value === 'object',
    },
    setup(props, { slots, expose, emit }) {
        const { mergedClsPrefixRef } = useConfig(props);
        const formRef = ref();
        const themeRef = useTheme(
            'ProForm',
            '-pro-form',
            style,
            proFormLight,
            props,
            mergedClsPrefixRef
        );
        const cssVarsRef = computed(() => {
            const {
                self: { padding },
            } = themeRef.value;
            return {
                '--n-padding': padding,
            };
        });
        const rules = ref({});
        onMounted(() => {
            props.options.forEach((v) => {
                var _a, _b;
                if (v.required) {
                    rules.value[v.prop] = {
                        type:
                            (_a = v.ruleType) !== null && _a !== void 0
                                ? _a
                                : 'string',
                        required: true,
                        message:
                            (_b = v.requiredMessage) !== null && _b !== void 0
                                ? _b
                                : `\u8BF7\u8F93\u5165${v.label}`,
                        trigger: ['change', 'blur'],
                    };
                }
            });
        });
        const submit = (e) => {
            var _a;
            e === null || e === void 0 ? void 0 : e.preventDefault();
            (_a = formRef.value) === null || _a === void 0
                ? void 0
                : _a.validate((errors) => {
                      if (errors) return;
                      if (!errors) emit('submit');
                  });
        };
        const reset = () => {
            var _a;
            (_a = formRef.value) === null || _a === void 0
                ? void 0
                : _a.restoreValidation();
            emit('update:value', {});
        };
        return {
            cssVarsRef,
            mergedClsPrefix: mergedClsPrefixRef,
            rules,
            formRef,
            reset,
            submit,
        };
    },
    expose: ['reset', 'submit', 'formRef'],
    render() {
        const { mergedClsPrefix } = this;
        const { options, formProps, formItemProps } = this.$props;
        const checkBox = (data) => {
            const component = data.component.name.includes('Checkbox')
                ? NCheckboxGroup
                : NRadioGroup;
            return h(
                component,
                {
                    value: this.value[data.prop],
                    'onUpdate:value': (value) => {
                        this.value[data.prop] = value;
                    },
                },
                {
                    default: () => {
                        return data.columns.map((v) => {
                            if (data.component.name.includes('Checkbox')) {
                                return h(NCheckbox, Object.assign({}, v));
                            } else return h(NRadio, Object.assign({}, v));
                        });
                    },
                }
            );
        };
        const itemComponent = (data) => {
            const name = data.component.name;
            if (
                ['CheckboxGroup', 'Checkbox', 'Radio', 'RadioGroup'].includes(
                    name
                )
            ) {
                return checkBox(data);
            }
            return h(
                data.component,
                Object.assign(
                    {
                        modelValue: this.value[data.prop],
                        'onUpdate:modelValue': (value) => {
                            this.value[data.prop] = value;
                        },
                        value: this.value[data.prop],
                        'onUpdate:value': (value) => {
                            this.value[data.prop] = value;
                        },
                        formattedValue: this.value[data.prop],
                        'onUpdate:formattedValue': (value) => {
                            this.value[data.prop] = value;
                        },
                    },
                    data.componentProps
                )
            );
        };
        const formItem = () => {
            return options.map((v, i) => {
                var _a;
                return v.show === false
                    ? null
                    : h(
                          NGi,
                          {
                              span:
                                  (_a = v.span) !== null && _a !== void 0
                                      ? _a
                                      : 24,
                              key: new Date().getTime() + i,
                          },
                          {
                              default: () =>
                                  h(
                                      NFormItem,
                                      Object.assign(
                                          Object.assign({}, formItemProps),
                                          { path: v.prop, label: v.label }
                                      ),
                                      {
                                          default: () => {
                                              var _a2, _b;
                                              return v.component
                                                  ? itemComponent(v)
                                                  : (_b = (_a2 = this.$slots)[
                                                        `pro_form_${v.prop}`
                                                    ]) === null || _b === void 0
                                                  ? void 0
                                                  : _b.call(_a2);
                                          },
                                      }
                                  ),
                          }
                      );
            });
        };
        return h(
            'div',
            { class: [`${mergedClsPrefix}-pro-form`] },
            h(
                NForm,
                Object.assign(Object.assign({ ref: 'formRef' }, formProps), {
                    model: this.value,
                    rules: this.rules,
                }),
                {
                    default: () =>
                        h(
                            NGrid,
                            { xGap: '0', yGap: '0', cols: '24' },
                            { default: () => formItem() }
                        ),
                }
            )
        );
    },
});
