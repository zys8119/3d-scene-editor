import { computed, h, defineComponent } from 'vue';
import { useCompitable } from 'vooks';
import { useConfig, useTheme, useThemeClass } from '../../_mixins';
import {
    warn,
    getSlot,
    getVNodeChildren,
    createKey,
    flatten,
} from '../../_utils';
import { descriptionsLight } from '../styles';
import { isDescriptionsItem } from './utils';
import style from './styles/index.cssr';
export const descriptionsProps = Object.assign(
    Object.assign({}, useTheme.props),
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
export default defineComponent({
    name: 'Descriptions',
    props: descriptionsProps,
    setup(props) {
        const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
        const themeRef = useTheme(
            'Descriptions',
            '-descriptions',
            style,
            descriptionsLight,
            props,
            mergedClsPrefixRef
        );
        const cssVarsRef = computed(() => {
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
                    [createKey('fontSize', size)]: fontSize,
                    [createKey(
                        bordered ? 'thPaddingBordered' : 'thPadding',
                        size
                    )]: thPadding,
                    [createKey(
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
            ? useThemeClass(
                  'descriptions',
                  computed(() => {
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
            compitableColumn: useCompitable(props, ['columns', 'column']),
            inlineThemeDisabled,
        };
    },
    render() {
        const defaultSlots = this.$slots.default;
        const children = defaultSlots ? flatten(defaultSlots()) : [];
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
            isDescriptionsItem(child)
        );
        if (
            process.env.NODE_ENV !== 'production' &&
            memorizedLength !== filteredChildren.length
        ) {
            warn(
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
                    : getVNodeChildren(vNode, 'label'),
            ];
            const itemChildren = [getVNodeChildren(vNode)];
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
                        h(
                            'th',
                            {
                                class: `${mergedClsPrefix}-descriptions-table-header`,
                                colspan: 1,
                                style: labelStyle,
                            },
                            itemLabel
                        ),
                        h(
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
                        h(
                            'td',
                            {
                                class: `${mergedClsPrefix}-descriptions-table-content`,
                                colspan: isLastIteration
                                    ? (compitableColumn - memorizedSpan) * 2
                                    : itemSpan * 2,
                            },
                            h(
                                'span',
                                {
                                    class: `${mergedClsPrefix}-descriptions-table-content__label`,
                                    style: labelStyle,
                                },
                                [
                                    ...itemLabel,
                                    separator &&
                                        h(
                                            'span',
                                            {
                                                class: `${mergedClsPrefix}-descriptions-separator`,
                                            },
                                            separator
                                        ),
                                ]
                            ),
                            h(
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
                    h(
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
                    h(
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
            h('tr', { class: `${mergedClsPrefix}-descriptions-table-row` }, row)
        );
        return h(
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
                ? h(
                      'div',
                      { class: `${mergedClsPrefix}-descriptions-header` },
                      title || getSlot(this, 'header')
                  )
                : null,
            h(
                'div',
                { class: `${mergedClsPrefix}-descriptions-table-wrapper` },
                h(
                    'table',
                    { class: `${mergedClsPrefix}-descriptions-table` },
                    h('tbody', null, rows)
                )
            )
        );
    },
});
