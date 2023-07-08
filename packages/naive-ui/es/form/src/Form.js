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
import { h, defineComponent, provide, ref } from 'vue';
import { useConfig, useTheme } from '../../_mixins';
import { formLight } from '../styles';
import style from './styles/form.cssr';
import { keysOf } from '../../_utils';
import { formInjectionKey, formItemInstsInjectionKey } from './context';
export const formProps = Object.assign(Object.assign({}, useTheme.props), {
    inline: Boolean,
    labelWidth: [Number, String],
    labelAlign: String,
    labelPlacement: {
        type: String,
        default: 'top',
    },
    model: {
        type: Object,
        default: () => {},
    },
    rules: Object,
    disabled: Boolean,
    size: String,
    showRequireMark: {
        type: Boolean,
        default: void 0,
    },
    requireMarkPlacement: String,
    showFeedback: {
        type: Boolean,
        default: true,
    },
    onSubmit: {
        type: Function,
        default: (e) => e.preventDefault(),
    },
    showLabel: {
        type: Boolean,
        default: void 0,
    },
    validateMessages: Object,
});
export default defineComponent({
    name: 'Form',
    props: formProps,
    setup(props) {
        const { mergedClsPrefixRef } = useConfig(props);
        useTheme('Form', '-form', style, formLight, props, mergedClsPrefixRef);
        const formItems = {};
        const maxChildLabelWidthRef = ref(void 0);
        const deriveMaxChildLabelWidth = (currentWidth) => {
            const currentMaxChildLabelWidth = maxChildLabelWidthRef.value;
            if (
                currentMaxChildLabelWidth === void 0 ||
                currentWidth >= currentMaxChildLabelWidth
            ) {
                maxChildLabelWidthRef.value = currentWidth;
            }
        };
        function validate(validateCallback, shouldRuleBeApplied = () => true) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield new Promise((resolve, reject) => {
                    const formItemValidationPromises = [];
                    for (const key of keysOf(formItems)) {
                        const formItemInstances = formItems[key];
                        for (const formItemInstance of formItemInstances) {
                            if (formItemInstance.path) {
                                formItemValidationPromises.push(
                                    formItemInstance.internalValidate(
                                        null,
                                        shouldRuleBeApplied
                                    )
                                );
                            }
                        }
                    }
                    void Promise.all(formItemValidationPromises).then(
                        (results) => {
                            if (results.some((result) => !result.valid)) {
                                const errors = results
                                    .filter((result) => result.errors)
                                    .map((result) => result.errors);
                                if (validateCallback) {
                                    validateCallback(errors);
                                }
                                reject(errors);
                            } else {
                                if (validateCallback) validateCallback();
                                resolve();
                            }
                        }
                    );
                });
            });
        }
        function restoreValidation() {
            for (const key of keysOf(formItems)) {
                const formItemInstances = formItems[key];
                for (const formItemInstance of formItemInstances) {
                    formItemInstance.restoreValidation();
                }
            }
        }
        provide(formInjectionKey, {
            props,
            maxChildLabelWidthRef,
            deriveMaxChildLabelWidth,
        });
        provide(formItemInstsInjectionKey, { formItems });
        const formExposedMethod = {
            validate,
            restoreValidation,
        };
        return Object.assign(formExposedMethod, {
            mergedClsPrefix: mergedClsPrefixRef,
        });
    },
    render() {
        const { mergedClsPrefix } = this;
        return h(
            'form',
            {
                class: [
                    `${mergedClsPrefix}-form`,
                    this.inline && `${mergedClsPrefix}-form--inline`,
                ],
                onSubmit: this.onSubmit,
            },
            this.$slots
        );
    },
});
