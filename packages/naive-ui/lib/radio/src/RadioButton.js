Object.defineProperty(exports, '__esModule', { value: true });
exports.radioButtonProps = void 0;
const vue_1 = require('vue');
const _utils_1 = require('../../_utils');
const use_radio_1 = require('./use-radio');
exports.radioButtonProps = use_radio_1.radioProps;
exports.default = (0, vue_1.defineComponent)({
    name: 'RadioButton',
    props: use_radio_1.radioProps,
    setup: use_radio_1.setup,
    render() {
        const { mergedClsPrefix } = this;
        return (0, vue_1.h)(
            'label',
            {
                class: [
                    `${mergedClsPrefix}-radio-button`,
                    this.mergedDisabled &&
                        `${mergedClsPrefix}-radio-button--disabled`,
                    this.renderSafeChecked &&
                        `${mergedClsPrefix}-radio-button--checked`,
                    this.focus && [`${mergedClsPrefix}-radio-button--focus`],
                ],
            },
            (0, vue_1.h)('input', {
                ref: 'inputRef',
                type: 'radio',
                class: `${mergedClsPrefix}-radio-input`,
                value: this.value,
                name: this.mergedName,
                checked: this.renderSafeChecked,
                disabled: this.mergedDisabled,
                onChange: this.handleRadioInputChange,
                onFocus: this.handleRadioInputFocus,
                onBlur: this.handleRadioInputBlur,
            }),
            (0, vue_1.h)('div', {
                class: `${mergedClsPrefix}-radio-button__state-border`,
            }),
            (0, _utils_1.resolveWrappedSlot)(
                this.$slots.default,
                (children) => {
                    var _a, _b;
                    if (!children && !this.label) return null;
                    return (0, vue_1.h)(
                        'div',
                        {
                            ref: 'labelRef',
                            class: `${mergedClsPrefix}-radio-button__label`,
                        },
                        (_b = (_a = this.$slots).icon) === null || _b === void 0
                            ? void 0
                            : _b.call(_a),
                        (0, vue_1.h)(
                            'span',
                            { class: `${mergedClsPrefix}-radio-button__span` },
                            children || this.label
                        )
                    );
                }
            )
        );
    },
});
