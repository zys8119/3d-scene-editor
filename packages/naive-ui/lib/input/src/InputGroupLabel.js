var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.inputGroupLabelProps = void 0;
const vue_1 = require('vue');
const _mixins_1 = require('../../_mixins');
const _utils_1 = require('../../_utils');
const styles_1 = require('../styles');
const input_group_label_cssr_1 = __importDefault(
    require('./styles/input-group-label.cssr')
);
exports.inputGroupLabelProps = Object.assign(
    Object.assign({}, _mixins_1.useTheme.props),
    {
        size: {
            type: String,
            default: 'medium',
        },
        bordered: {
            type: Boolean,
            default: void 0,
        },
    }
);
exports.default = (0, vue_1.defineComponent)({
    name: 'InputGroupLabel',
    props: exports.inputGroupLabelProps,
    setup(props) {
        const { mergedBorderedRef, mergedClsPrefixRef, inlineThemeDisabled } =
            (0, _mixins_1.useConfig)(props);
        const themeRef = (0, _mixins_1.useTheme)(
            'Input',
            '-input-group-label',
            input_group_label_cssr_1.default,
            styles_1.inputLight,
            props,
            mergedClsPrefixRef
        );
        const cssVarsRef = (0, vue_1.computed)(() => {
            const { size } = props;
            const {
                common: { cubicBezierEaseInOut },
                self: {
                    groupLabelColor,
                    borderRadius,
                    groupLabelTextColor,
                    lineHeight,
                    groupLabelBorder,
                    [(0, _utils_1.createKey)('fontSize', size)]: fontSize,
                    [(0, _utils_1.createKey)('height', size)]: height,
                },
            } = themeRef.value;
            return {
                '--n-bezier': cubicBezierEaseInOut,
                '--n-group-label-color': groupLabelColor,
                '--n-group-label-border': groupLabelBorder,
                '--n-border-radius': borderRadius,
                '--n-group-label-text-color': groupLabelTextColor,
                '--n-font-size': fontSize,
                '--n-line-height': lineHeight,
                '--n-height': height,
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? (0, _mixins_1.useThemeClass)(
                  'input-group-label',
                  (0, vue_1.computed)(() => props.size[0]),
                  cssVarsRef,
                  props
              )
            : void 0;
        return {
            mergedClsPrefix: mergedClsPrefixRef,
            mergedBordered: mergedBorderedRef,
            cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
            themeClass:
                themeClassHandle === null || themeClassHandle === void 0
                    ? void 0
                    : themeClassHandle.themeClass,
            onRender:
                themeClassHandle === null || themeClassHandle === void 0
                    ? void 0
                    : themeClassHandle.onRender,
        };
    },
    render() {
        var _a, _b, _c;
        const { mergedClsPrefix } = this;
        (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
        return (0, vue_1.h)(
            'div',
            {
                class: [
                    `${mergedClsPrefix}-input-group-label`,
                    this.themeClass,
                ],
                style: this.cssVars,
            },
            (_c = (_b = this.$slots).default) === null || _c === void 0
                ? void 0
                : _c.call(_b),
            this.mergedBordered
                ? (0, vue_1.h)('div', {
                      class: `${mergedClsPrefix}-input-group-label__border`,
                  })
                : null
        );
    },
});
