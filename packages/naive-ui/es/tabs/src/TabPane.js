import { h, defineComponent, inject, watchEffect } from 'vue';
import { throwError, warnOnce } from '../../_utils';
import { tabsInjectionKey } from './interface';
export const tabPaneProps = {
    tab: [String, Number, Object, Function],
    name: {
        type: [String, Number],
        required: true,
    },
    disabled: Boolean,
    displayDirective: {
        type: String,
        default: 'if',
    },
    closable: {
        type: Boolean,
        default: void 0,
    },
    tabProps: Object,
    label: [String, Number, Object, Function],
};
export default defineComponent({
    __TAB_PANE__: true,
    name: 'TabPane',
    alias: ['TabPanel'],
    props: tabPaneProps,
    setup(props) {
        if (process.env.NODE_ENV !== 'production') {
            watchEffect(() => {
                if (props.label !== void 0) {
                    warnOnce(
                        'tab-pane',
                        '`label` is deprecated, please use `tab` instead.'
                    );
                }
            });
        }
        const NTab = inject(tabsInjectionKey, null);
        if (!NTab) {
            throwError(
                'tab-pane',
                '`n-tab-pane` must be placed inside `n-tabs`.'
            );
        }
        return {
            style: NTab.paneStyleRef,
            class: NTab.paneClassRef,
            mergedClsPrefix: NTab.mergedClsPrefixRef,
        };
    },
    render() {
        return h(
            'div',
            {
                class: [`${this.mergedClsPrefix}-tab-pane`, this.class],
                style: this.style,
            },
            this.$slots
        );
    },
});
