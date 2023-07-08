import { h, defineComponent, provide } from 'vue';
import { useRtl } from '../../_mixins/use-rtl';
import { useConfig, useStyle } from '../../_mixins';
import { buttonGroupInjectionKey } from './context';
import style from './styles/index.cssr';
export const buttonGroupProps = {
    size: {
        type: String,
        default: void 0,
    },
    vertical: Boolean,
};
export default defineComponent({
    name: 'ButtonGroup',
    props: buttonGroupProps,
    setup(props) {
        const { mergedClsPrefixRef, mergedRtlRef } = useConfig(props);
        useStyle('-button-group', style, mergedClsPrefixRef);
        provide(buttonGroupInjectionKey, props);
        const rtlEnabledRef = useRtl(
            'ButtonGroup',
            mergedRtlRef,
            mergedClsPrefixRef
        );
        return {
            rtlEnabled: rtlEnabledRef,
            mergedClsPrefix: mergedClsPrefixRef,
        };
    },
    render() {
        const { mergedClsPrefix } = this;
        return h(
            'div',
            {
                class: [
                    `${mergedClsPrefix}-button-group`,
                    this.rtlEnabled && `${mergedClsPrefix}-button-group--rtl`,
                    this.vertical &&
                        `${mergedClsPrefix}-button-group--vertical`,
                ],
                role: 'group',
            },
            this.$slots
        );
    },
});
