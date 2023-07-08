var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.tableProps = void 0;
const vue_1 = require('vue');
const _mixins_1 = require('../../_mixins');
const use_rtl_1 = require('../../_mixins/use-rtl');
const _utils_1 = require('../../_utils');
const styles_1 = require('../styles');
const index_cssr_1 = __importDefault(require('./styles/index.cssr'));
exports.tableProps = Object.assign(
    Object.assign({}, _mixins_1.useTheme.props),
    {
        bordered: {
            type: Boolean,
            default: true,
        },
        bottomBordered: {
            type: Boolean,
            default: true,
        },
        singleLine: {
            type: Boolean,
            default: true,
        },
        vertical: {
            type: Boolean,
            default: false,
        },
        striped: Boolean,
        singleColumn: Boolean,
        size: {
            type: String,
            default: 'medium',
        },
        tableFrom: {
            type: Array,
            default: [],
        },
    }
);
exports.default = (0, vue_1.defineComponent)({
    name: 'Table',
    props: exports.tableProps,
    setup(props) {
        const { mergedClsPrefixRef, inlineThemeDisabled, mergedRtlRef } = (0,
        _mixins_1.useConfig)(props);
        const themeRef = (0, _mixins_1.useTheme)(
            'Table',
            '-table',
            index_cssr_1.default,
            styles_1.tableLight,
            props,
            mergedClsPrefixRef
        );
        const rtlEnabledRef = (0, use_rtl_1.useRtl)(
            'Table',
            mergedRtlRef,
            mergedClsPrefixRef
        );
        const cssVarsRef = (0, vue_1.computed)(() => {
            const { size } = props;
            const {
                self: {
                    borderColor,
                    tdColor,
                    tdColorModal,
                    tdColorPopover,
                    thColor,
                    thColorModal,
                    thColorPopover,
                    thTextColor,
                    tdTextColor,
                    borderRadius,
                    thFontWeight,
                    lineHeight,
                    borderColorModal,
                    borderColorPopover,
                    tdColorStriped,
                    tdColorStripedModal,
                    tdColorStripedPopover,
                    [(0, _utils_1.createKey)('fontSize', size)]: fontSize,
                    [(0, _utils_1.createKey)('tdPadding', size)]: tdPadding,
                    [(0, _utils_1.createKey)('thPadding', size)]: thPadding,
                },
                common: { cubicBezierEaseInOut },
            } = themeRef.value;
            return {
                '--n-bezier': cubicBezierEaseInOut,
                '--n-td-color': tdColor,
                '--n-td-color-modal': tdColorModal,
                '--n-td-color-popover': tdColorPopover,
                '--n-td-text-color': tdTextColor,
                '--n-border-color': borderColor,
                '--n-border-color-modal': borderColorModal,
                '--n-border-color-popover': borderColorPopover,
                '--n-border-radius': borderRadius,
                '--n-font-size': fontSize,
                '--n-th-color': thColor,
                '--n-th-color-modal': thColorModal,
                '--n-th-color-popover': thColorPopover,
                '--n-th-font-weight': thFontWeight,
                '--n-th-text-color': thTextColor,
                '--n-line-height': lineHeight,
                '--n-td-padding': tdPadding,
                '--n-th-padding': thPadding,
                '--n-td-color-striped': tdColorStriped,
                '--n-td-color-striped-modal': tdColorStripedModal,
                '--n-td-color-striped-popover': tdColorStripedPopover,
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? (0, _mixins_1.useThemeClass)(
                  'table',
                  (0, vue_1.computed)(() => {
                      return props.size[0];
                  }),
                  cssVarsRef,
                  props
              )
            : void 0;
        return {
            rtlEnabled: rtlEnabledRef,
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
        var _a;
        const { mergedClsPrefix } = this;
        (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
        return (0, vue_1.h)(
            'table',
            {
                class: [
                    `${mergedClsPrefix}-table`,
                    this.themeClass,
                    {
                        [`${mergedClsPrefix}-table--rtl`]: this.rtlEnabled,
                        [`${mergedClsPrefix}-table--bottom-bordered`]:
                            this.bottomBordered,
                        [`${mergedClsPrefix}-table--bordered`]: this.bordered,
                        [`${mergedClsPrefix}-table--single-line`]:
                            this.singleLine,
                        [`${mergedClsPrefix}-table--single-column`]:
                            this.singleColumn,
                        [`${mergedClsPrefix}-table--striped`]: this.striped,
                    },
                ],
                style: this.cssVars,
            },
            this.vertical
                ? this.tableFrom.map((item, index) => {
                      return (0, vue_1.h)(
                          'tr',
                          { key: index },
                          item.map((x, y) => {
                              return (0, vue_1.h)(
                                  'div',
                                  { key: y, style: { display: 'contents' } },
                                  (0, vue_1.h)(
                                      'th',
                                      {
                                          colspan: x.titleColspan
                                              ? x.titleColspan
                                              : 1,
                                          rowspan: x.titleRowspan
                                              ? x.titleRowspan
                                              : 1,
                                      },
                                      x.title
                                  ),
                                  (0, vue_1.h)(
                                      'td',
                                      {
                                          colspan: x.valueColspan
                                              ? x.valueColspan
                                              : 1,
                                          rowspan: x.valueRowspan
                                              ? x.valueRowspan
                                              : 1,
                                      },
                                      x.value
                                  )
                              );
                          })
                      );
                  })
                : this.$slots
        );
    },
});
