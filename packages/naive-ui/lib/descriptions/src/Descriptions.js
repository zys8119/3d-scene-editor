var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.descriptionsProps = void 0;
const vue_1 = require('vue');
const vooks_1 = require('vooks');
const _mixins_1 = require('../../_mixins');
const _utils_1 = require('../../_utils');
const styles_1 = require('../styles');
const utils_1 = require('./utils');
const index_cssr_1 = __importDefault(require('./styles/index.cssr'));
exports.descriptionsProps = Object.assign(
    Object.assign({}, _mixins_1.useTheme.props),
    {
        title: String,
        column: {
            type: Number,
            default: 3,
        },
        columns: Number,
        labelPlacement: {
            type: String,
            default: 'top',
        },
        labelAlign: {
            type: String,
            default: 'left',
        },
        separator: {
            type: String,
            default: ':',
        },
        size: {
            type: String,
            default: 'medium',
        },
        bordered: Boolean,
        labelStyle: [Object, String],
        contentStyle: [Object, String],
    }
);
exports.default = (0, vue_1.defineComponent)({
    name: 'Descriptions',
    props: exports.descriptionsProps,
    setup(props) {
        const { mergedClsPrefixRef, inlineThemeDisabled } = (0,
        _mixins_1.useConfig)(props);
        const themeRef = (0, _mixins_1.useTheme)(
            'Descriptions',
            '-descriptions',
            index_cssr_1.default,
            styles_1.descriptionsLight,
            props,
            mergedClsPrefixRef
        );
        const cssVarsRef = (0, vue_1.computed)(() => {
            const { size, bordered } = props;
            const {
                common: { cubicBezierEaseInOut },
                self: {
                    titleTextColor,
                    thColor,
                    thColorModal,
                    thColorPopover,
                    thTextColor,
                    thFontWeight,
                    tdTextColor,
                    tdColor,
                    tdColorModal,
                    tdColorPopover,
                    borderColor,
                    borderColorModal,
                    borderColorPopover,
                    borderRadius,
                    lineHeight,
                    [(0, _utils_1.createKey)('fontSize', size)]: fontSize,
                    [(0, _utils_1.createKey)(
                        bordered ? 'thPaddingBordered' : 'thPadding',
                        size
                    )]: thPadding,
                    [(0, _utils_1.createKey)(
                        bordered ? 'tdPaddingBordered' : 'tdPadding',
                        size
                    )]: tdPadding,
                },
            } = themeRef.value;
            return {
                '--n-title-text-color': titleTextColor,
                '--n-th-padding': thPadding,
                '--n-td-padding': tdPadding,
                '--n-font-size': fontSize,
                '--n-bezier': cubicBezierEaseInOut,
                '--n-th-font-weight': thFontWeight,
                '--n-line-height': lineHeight,
                '--n-th-text-color': thTextColor,
                '--n-td-text-color': tdTextColor,
                '--n-th-color': thColor,
                '--n-th-color-modal': thColorModal,
                '--n-th-color-popover': thColorPopover,
                '--n-td-color': tdColor,
                '--n-td-color-modal': tdColorModal,
                '--n-td-color-popover': tdColorPopover,
                '--n-border-radius': borderRadius,
                '--n-border-color': borderColor,
                '--n-border-color-modal': borderColorModal,
                '--n-border-color-popover': borderColorPopover,
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? (0, _mixins_1.useThemeClass)(
                  'descriptions',
                  (0, vue_1.computed)(() => {
                      let hash = '';
                      const { size, bordered } = props;
                      if (bordered) hash += 'a';
                      hash += size[0];
                      return hash;
                  }),
                  cssVarsRef,
                  props
              )
            : void 0;
        return {
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
            compitableColumn: (0, vooks_1.useCompitable)(props, [
                'columns',
                'column',
            ]),
            inlineThemeDisabled,
        };
    },
    render() {
        const defaultSlots = this.$slots.default;
        const children = defaultSlots
            ? (0, _utils_1.flatten)(defaultSlots())
            : [];
        const memorizedLength = children.length;
        const {
            compitableColumn,
            labelPlacement,
            labelAlign,
            size,
            bordered,
            title,
            cssVars,
            mergedClsPrefix,
            separator,
            onRender,
        } = this;
        onRender === null || onRender === void 0 ? void 0 : onRender();
        const filteredChildren = children.filter((child) =>
            (0, utils_1.isDescriptionsItem)(child)
        );
        if (
            process.env.NODE_ENV !== 'production' &&
            memorizedLength !== filteredChildren.length
        ) {
            (0, _utils_1.warn)(
                'descriptions',
                '`n-descriptions` only takes `n-descriptions-item` as children.'
            );
        }
        const defaultState = {
            span: 0,
            row: [],
            secondRow: [],
            rows: [],
        };
        const itemState = filteredChildren.reduce((state, vNode, index) => {
            const props = vNode.props || {};
            const isLastIteration = filteredChildren.length - 1 === index;
            const itemLabel = [
                'label' in props
                    ? props.label
                    : (0, _utils_1.getVNodeChildren)(vNode, 'label'),
            ];
            const itemChildren = [(0, _utils_1.getVNodeChildren)(vNode)];
            const itemSpan = props.span || 1;
            const memorizedSpan = state.span;
            state.span += itemSpan;
            const labelStyle =
                props.labelStyle || props['label-style'] || this.labelStyle;
            const contentStyle =
                props.contentStyle ||
                props['content-style'] ||
                this.contentStyle;
            if (labelPlacement === 'left') {
                if (bordered) {
                    state.row.push(
                        (0, vue_1.h)(
                            'th',
                            {
                                class: `${mergedClsPrefix}-descriptions-table-header`,
                                colspan: 1,
                                style: labelStyle,
                            },
                            itemLabel
                        ),
                        (0, vue_1.h)(
                            'td',
                            {
                                class: `${mergedClsPrefix}-descriptions-table-content`,
                                colspan: isLastIteration
                                    ? (compitableColumn - memorizedSpan) * 2 + 1
                                    : itemSpan * 2 - 1,
                                style: contentStyle,
                            },
                            itemChildren
                        )
                    );
                } else {
                    state.row.push(
                        (0, vue_1.h)(
                            'td',
                            {
                                class: `${mergedClsPrefix}-descriptions-table-content`,
                                colspan: isLastIteration
                                    ? (compitableColumn - memorizedSpan) * 2
                                    : itemSpan * 2,
                            },
                            (0, vue_1.h)(
                                'span',
                                {
                                    class: `${mergedClsPrefix}-descriptions-table-content__label`,
                                    style: labelStyle,
                                },
                                [
                                    ...itemLabel,
                                    separator &&
                                        (0, vue_1.h)(
                                            'span',
                                            {
                                                class: `${mergedClsPrefix}-descriptions-separator`,
                                            },
                                            separator
                                        ),
                                ]
                            ),
                            (0, vue_1.h)(
                                'span',
                                {
                                    class: `${mergedClsPrefix}-descriptions-table-content__content`,
                                    style: contentStyle,
                                },
                                itemChildren
                            )
                        )
                    );
                }
            } else {
                const colspan = isLastIteration
                    ? (compitableColumn - memorizedSpan) * 2
                    : itemSpan * 2;
                state.row.push(
                    (0, vue_1.h)(
                        'th',
                        {
                            class: `${mergedClsPrefix}-descriptions-table-header`,
                            colspan,
                            style: labelStyle,
                        },
                        itemLabel
                    )
                );
                state.secondRow.push(
                    (0, vue_1.h)(
                        'td',
                        {
                            class: `${mergedClsPrefix}-descriptions-table-content`,
                            colspan,
                            style: contentStyle,
                        },
                        itemChildren
                    )
                );
            }
            if (state.span >= compitableColumn || isLastIteration) {
                state.span = 0;
                if (state.row.length) {
                    state.rows.push(state.row);
                    state.row = [];
                }
                if (labelPlacement !== 'left') {
                    if (state.secondRow.length) {
                        state.rows.push(state.secondRow);
                        state.secondRow = [];
                    }
                }
            }
            return state;
        }, defaultState);
        const rows = itemState.rows.map((row) =>
            (0, vue_1.h)(
                'tr',
                { class: `${mergedClsPrefix}-descriptions-table-row` },
                row
            )
        );
        return (0, vue_1.h)(
            'div',
            {
                style: cssVars,
                class: [
                    `${mergedClsPrefix}-descriptions`,
                    this.themeClass,
                    `${mergedClsPrefix}-descriptions--${labelPlacement}-label-placement`,
                    `${mergedClsPrefix}-descriptions--${labelAlign}-label-align`,
                    `${mergedClsPrefix}-descriptions--${size}-size`,
                    bordered && `${mergedClsPrefix}-descriptions--bordered`,
                ],
            },
            title || this.$slots.header
                ? (0, vue_1.h)(
                      'div',
                      { class: `${mergedClsPrefix}-descriptions-header` },
                      title || (0, _utils_1.getSlot)(this, 'header')
                  )
                : null,
            (0, vue_1.h)(
                'div',
                { class: `${mergedClsPrefix}-descriptions-table-wrapper` },
                (0, vue_1.h)(
                    'table',
                    { class: `${mergedClsPrefix}-descriptions-table` },
                    (0, vue_1.h)('tbody', null, rows)
                )
            )
        );
    },
});
