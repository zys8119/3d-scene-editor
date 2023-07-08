Object.defineProperty(exports, '__esModule', { value: true });
exports.tabPaneProps = void 0;
const vue_1 = require('vue');
const _utils_1 = require('../../_utils');
const interface_1 = require('./interface');
exports.tabPaneProps = {
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
exports.default = (0, vue_1.defineComponent)({
    __TAB_PANE__: true,
    name: 'TabPane',
    alias: ['TabPanel'],
    props: exports.tabPaneProps,
    setup(props) {
        if (process.env.NODE_ENV !== 'production') {
            (0, vue_1.watchEffect)(() => {
                if (props.label !== void 0) {
                    (0, _utils_1.warnOnce)(
                        'tab-pane',
                        '`label` is deprecated, please use `tab` instead.'
                    );
                }
            });
        }
        const NTab = (0, vue_1.inject)(interface_1.tabsInjectionKey, null);
        if (!NTab) {
            (0, _utils_1.throwError)(
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
        return (0, vue_1.h)(
            'div',
            {
                class: [`${this.mergedClsPrefix}-tab-pane`, this.class],
                style: this.style,
            },
            this.$slots
        );
    },
});
