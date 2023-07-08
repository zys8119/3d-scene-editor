import { toHslaString } from 'seemly';
import { defineComponent, h, inject } from 'vue';
import { colorPickerInjectionKey } from './context';
export default defineComponent({
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
        const { colorPickerSlots, renderLabelRef } = inject(
            colorPickerInjectionKey,
            null
        );
        return () => {
            const { hsla, value, clsPrefix, onClick, disabled } = props;
            const renderLabel = colorPickerSlots.label || renderLabelRef.value;
            return h(
                'div',
                {
                    class: [
                        `${clsPrefix}-color-picker-trigger`,
                        disabled &&
                            `${clsPrefix}-color-picker-trigger--disabled`,
                    ],
                    onClick: disabled ? void 0 : onClick,
                },
                h(
                    'div',
                    { class: `${clsPrefix}-color-picker-trigger__fill` },
                    h('div', { class: `${clsPrefix}-color-picker-checkboard` }),
                    h('div', {
                        style: {
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                            backgroundColor: hsla ? toHslaString(hsla) : '',
                        },
                    }),
                    value && hsla
                        ? h(
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
