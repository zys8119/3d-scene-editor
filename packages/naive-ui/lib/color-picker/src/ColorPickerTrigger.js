Object.defineProperty(exports, '__esModule', { value: true });
const seemly_1 = require('seemly');
const vue_1 = require('vue');
const context_1 = require('./context');
exports.default = (0, vue_1.defineComponent)({
    name: 'ColorPickerTrigger',
    props: {
        clsPrefix: {
            type: String,
            required: true,
        },
        value: {
            type: String,
            default: null,
        },
        hsla: {
            type: Array,
            default: null,
        },
        disabled: Boolean,
        onClick: Function,
    },
    setup(props) {
        const { colorPickerSlots, renderLabelRef } = (0, vue_1.inject)(
            context_1.colorPickerInjectionKey,
            null
        );
        return () => {
            const { hsla, value, clsPrefix, onClick, disabled } = props;
            const renderLabel = colorPickerSlots.label || renderLabelRef.value;
            return (0, vue_1.h)(
                'div',
                {
                    class: [
                        `${clsPrefix}-color-picker-trigger`,
                        disabled &&
                            `${clsPrefix}-color-picker-trigger--disabled`,
                    ],
                    onClick: disabled ? void 0 : onClick,
                },
                (0, vue_1.h)(
                    'div',
                    { class: `${clsPrefix}-color-picker-trigger__fill` },
                    (0, vue_1.h)('div', {
                        class: `${clsPrefix}-color-picker-checkboard`,
                    }),
                    (0, vue_1.h)('div', {
                        style: {
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                            backgroundColor: hsla
                                ? (0, seemly_1.toHslaString)(hsla)
                                : '',
                        },
                    }),
                    value && hsla
                        ? (0, vue_1.h)(
                              'div',
                              {
                                  class: `${clsPrefix}-color-picker-trigger__value`,
                                  style: {
                                      color:
                                          hsla[2] > 50 || hsla[3] < 0.5
                                              ? 'black'
                                              : 'white',
                                  },
                              },
                              renderLabel ? renderLabel(value) : value
                          )
                        : null
                )
            );
        };
    },
});
