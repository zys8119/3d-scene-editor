var __awaiter =
    (this && this.__awaiter) ||
    function (thisArg, _arguments, P, generator) {
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
            step(
                (generator = generator.apply(thisArg, _arguments || [])).next()
            );
        });
    };
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.formProps = void 0;
const vue_1 = require('vue');
const _mixins_1 = require('../../_mixins');
const styles_1 = require('../styles');
const form_cssr_1 = __importDefault(require('./styles/form.cssr'));
const _utils_1 = require('../../_utils');
const context_1 = require('./context');
exports.formProps = Object.assign(Object.assign({}, _mixins_1.useTheme.props), {
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
exports.default = (0, vue_1.defineComponent)({
    name: 'Form',
    props: exports.formProps,
    setup(props) {
        const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props);
        (0, _mixins_1.useTheme)(
            'Form',
            '-form',
            form_cssr_1.default,
            styles_1.formLight,
            props,
            mergedClsPrefixRef
        );
        const formItems = {};
        const maxChildLabelWidthRef = (0, vue_1.ref)(void 0);
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
                    for (const key of (0, _utils_1.keysOf)(formItems)) {
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
            for (const key of (0, _utils_1.keysOf)(formItems)) {
                const formItemInstances = formItems[key];
                for (const formItemInstance of formItemInstances) {
                    formItemInstance.restoreValidation();
                }
            }
        }
        (0, vue_1.provide)(context_1.formInjectionKey, {
            props,
            maxChildLabelWidthRef,
            deriveMaxChildLabelWidth,
        });
        (0, vue_1.provide)(context_1.formItemInstsInjectionKey, { formItems });
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
        return (0, vue_1.h)(
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
