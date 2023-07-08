const { ref, onMounted, h } = require('vue');
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.proFormProps = void 0;
const vue_1 = require('vue');
const _mixins_1 = require('../../../_mixins');
const index_cssr_1 = __importDefault(require('./styles/index.cssr'));
const styles_1 = require('../styles');
const checkbox_1 = require('../../../checkbox');
const grid_1 = require('../../../grid');
const radio_1 = require('../../../radio');
const form_1 = require('../../../form');
exports.proFormProps = Object.assign(
    Object.assign({}, _mixins_1.useTheme.props),
    {
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
    }
);
exports.default = (0, vue_1.defineComponent)({
    name: 'ProForm',
    props: exports.proFormProps,
    emits: {
        submit: () => true,
        'update:value': (value) => typeof value === 'object',
    },
    setup(props, { slots, expose, emit }) {
        const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props);
        const formRef = ref();
        const themeRef = (0, _mixins_1.useTheme)(
            'ProForm',
            '-pro-form',
            index_cssr_1.default,
            styles_1.proFormLight,
            props,
            mergedClsPrefixRef
        );
        const cssVarsRef = (0, vue_1.computed)(() => {
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
                ? checkbox_1.NCheckboxGroup
                : radio_1.NRadioGroup;
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
                                return h(
                                    checkbox_1.NCheckbox,
                                    Object.assign({}, v)
                                );
                            } else
                                return h(radio_1.NRadio, Object.assign({}, v));
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
                          grid_1.NGi,
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
                                      form_1.NFormItem,
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
                form_1.NForm,
                Object.assign(Object.assign({ ref: 'formRef' }, formProps), {
                    model: this.value,
                    rules: this.rules,
                }),
                {
                    default: () =>
                        h(
                            grid_1.NGrid,
                            { xGap: '0', yGap: '0', cols: '24' },
                            { default: () => formItem() }
                        ),
                }
            )
        );
    },
});
