var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.collapseTransitionProps = void 0;
const vue_1 = require('vue');
const _mixins_1 = require('../../_mixins');
const use_rtl_1 = require('../../_mixins/use-rtl');
const _utils_1 = require('../../_utils');
const index_cssr_1 = __importDefault(require('./styles/index.cssr'));
const styles_1 = require('../styles');
const _internal_1 = require('../../_internal');
exports.collapseTransitionProps = Object.assign(
    Object.assign({}, _mixins_1.useTheme.props),
    {
        show: {
            type: Boolean,
            default: true,
        },
        appear: Boolean,
        collapsed: {
            type: Boolean,
            default: void 0,
        },
    }
);
exports.default = (0, vue_1.defineComponent)({
    name: 'CollapseTransition',
    props: exports.collapseTransitionProps,
    inheritAttrs: false,
    setup(props) {
        if (process.env.NODE_ENV !== 'production') {
            (0, vue_1.watchEffect)(() => {
                if (props.collapsed !== void 0) {
                    (0, _utils_1.warnOnce)(
                        'collapse-transition',
                        '`collapsed` is deprecated, please use `show` instead'
                    );
                }
            });
        }
        const { mergedClsPrefixRef, inlineThemeDisabled, mergedRtlRef } = (0,
        _mixins_1.useConfig)(props);
        const mergedThemeRef = (0, _mixins_1.useTheme)(
            'CollapseTransition',
            '-collapse-transition',
            index_cssr_1.default,
            styles_1.collapseTransitionLight,
            props,
            mergedClsPrefixRef
        );
        const rtlEnabledRef = (0, use_rtl_1.useRtl)(
            'CollapseTransition',
            mergedRtlRef,
            mergedClsPrefixRef
        );
        const mergedShowRef = (0, vue_1.computed)(() => {
            if (props.collapsed !== void 0) {
                return props.collapsed;
            }
            return props.show;
        });
        const cssVarsRef = (0, vue_1.computed)(() => {
            const {
                self: { bezier },
            } = mergedThemeRef.value;
            return {
                '--n-bezier': bezier,
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? (0, _mixins_1.useThemeClass)(
                  'collapse-transition',
                  void 0,
                  cssVarsRef,
                  props
              )
            : void 0;
        return {
            rtlEnabled: rtlEnabledRef,
            mergedShow: mergedShowRef,
            mergedClsPrefix: mergedClsPrefixRef,
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
        return (0, vue_1.h)(
            _internal_1.NFadeInExpandTransition,
            { appear: this.appear },
            {
                default: () => {
                    var _a;
                    if (!this.mergedShow) return;
                    (_a = this.onRender) === null || _a === void 0
                        ? void 0
                        : _a.call(this);
                    return (0, vue_1.h)(
                        'div',
                        (0, vue_1.mergeProps)(
                            {
                                class: [
                                    `${this.mergedClsPrefix}-collapse-transition`,
                                    this.rtlEnabled &&
                                        `${this.mergedClsPrefix}-collapse-transition--rtl`,
                                    this.themeClass,
                                ],
                                style: this.cssVars,
                            },
                            this.$attrs
                        ),
                        this.$slots
                    );
                },
            }
        );
    },
});
