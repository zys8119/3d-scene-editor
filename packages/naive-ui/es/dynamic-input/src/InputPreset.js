import { h, defineComponent, inject } from 'vue';
import { NInput } from '../../input';
import { dynamicInputInjectionKey } from './interface';
export default defineComponent({
    name: 'DynamicInputInputPreset',
    props: {
        clsPrefix: {
            type: String,
            required: true,
        },
        value: {
            type: String,
            default: '',
        },
        disabled: Boolean,
        parentPath: String,
        path: String,
        onUpdateValue: {
            type: Function,
            required: true,
        },
    },
    setup() {
        const { mergedThemeRef, placeholderRef } = inject(
            dynamicInputInjectionKey
        );
        return {
            mergedTheme: mergedThemeRef,
            placeholder: placeholderRef,
        };
    },
    render() {
        const {
            mergedTheme,
            placeholder,
            value,
            clsPrefix,
            onUpdateValue,
            disabled,
        } = this;
        return h(
            'div',
            { class: `${clsPrefix}-dynamic-input-preset-input` },
            h(NInput, {
                theme: mergedTheme.peers.Input,
                'theme-overrides': mergedTheme.peerOverrides.Input,
                value,
                placeholder,
                onUpdateValue,
                disabled,
            })
        );
    },
});
