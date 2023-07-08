const { h, isRef } = require('vue');
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.proCheckboxProps = void 0;
const vue_1 = require('vue');
const _mixins_1 = require('../../../_mixins');
const index_cssr_1 = __importDefault(require('./styles/index.cssr'));
const styles_1 = require('../styles');
const checkbox_1 = require('../../../checkbox');
const space_1 = require('../../../space');
exports.proCheckboxProps = Object.assign(
    Object.assign({}, _mixins_1.useTheme.props),
    { options: Array, space: Object }
);
exports.default = (0, vue_1.defineComponent)({
    name: 'ProCheckbox',
    props: exports.proCheckboxProps,
    setup(props, { slots, expose }) {
        const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props);
        const themeRef = (0, _mixins_1.useTheme)(
            'ProCheckbox',
            '-pro-checkbox',
            index_cssr_1.default,
            styles_1.proCheckboxLight,
            props,
            mergedClsPrefixRef
        );
        const cssVarsRef = (0, vue_1.computed)(() => {
            const {
                self: { padding },
            } = themeRef.value;
            return {
                '--n-padding': padding,
            };
        });
        return {
            cssVarsRef,
            mergedClsPrefix: mergedClsPrefixRef,
        };
    },
    render() {
        function renderCheckbox(opts, i) {
            return h(
                checkbox_1.NCheckbox,
                Object.assign({ key: i }, opts, {
                    ref: (inst) =>
                        isRef(opts.ref)
                            ? (opts.ref.value = inst)
                            : (opts.ref = inst),
                }),
                {
                    default: () => {
                        var _a, _b;
                        return (
                            opts.label ||
                            ((_b =
                                (_a = opts.slots) === null || _a === void 0
                                    ? void 0
                                    : _a.default) === null || _b === void 0
                                ? void 0
                                : _b.call(_a))
                        );
                    },
                }
            );
        }
        return h(checkbox_1.NCheckboxGroup, null, {
            default: () =>
                h(space_1.NSpace, Object.assign({}, this.space), {
                    default: () => {
                        var _a;
                        return (_a = this.options) === null || _a === void 0
                            ? void 0
                            : _a.map(renderCheckbox);
                    },
                }),
        });
    },
});
