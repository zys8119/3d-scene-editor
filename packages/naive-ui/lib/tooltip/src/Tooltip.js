Object.defineProperty(exports, '__esModule', { value: true });
exports.tooltipProps = void 0;
const vue_1 = require('vue');
const popover_1 = require('../../popover');
const Popover_1 = require('../../popover/src/Popover');
const _mixins_1 = require('../../_mixins');
const styles_1 = require('../styles');
exports.tooltipProps = Object.assign(
    Object.assign({}, Popover_1.popoverBaseProps),
    _mixins_1.useTheme.props
);
exports.default = (0, vue_1.defineComponent)({
    name: 'Tooltip',
    props: exports.tooltipProps,
    __popover__: true,
    setup(props) {
        const themeRef = (0, _mixins_1.useTheme)(
            'Tooltip',
            '-tooltip',
            void 0,
            styles_1.tooltipLight,
            props
        );
        const popoverRef = (0, vue_1.ref)(null);
        const tooltipExposedMethod = {
            syncPosition() {
                popoverRef.value.syncPosition();
            },
            setShow(show) {
                popoverRef.value.setShow(show);
            },
        };
        return Object.assign(Object.assign({}, tooltipExposedMethod), {
            popoverRef,
            mergedTheme: themeRef,
            popoverThemeOverrides: (0, vue_1.computed)(() => {
                return themeRef.value.self;
            }),
        });
    },
    render() {
        const { mergedTheme, internalExtraClass } = this;
        return (0, vue_1.h)(
            popover_1.NPopover,
            Object.assign(Object.assign({}, this.$props), {
                theme: mergedTheme.peers.Popover,
                themeOverrides: mergedTheme.peerOverrides.Popover,
                builtinThemeOverrides: this.popoverThemeOverrides,
                internalExtraClass: internalExtraClass.concat('tooltip'),
                ref: 'popoverRef',
            }),
            this.$slots
        );
    },
});
