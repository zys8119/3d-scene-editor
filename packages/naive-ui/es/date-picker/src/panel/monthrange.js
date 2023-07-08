import { defineComponent, h, renderSlot, watchEffect, onMounted } from 'vue';
import { VirtualList } from 'vueuc';
import { NxButton } from '../../../button';
import { NBaseFocusDetector, NScrollbar } from '../../../_internal';
import { warnOnce } from '../../../_utils';
import { MONTH_ITEM_HEIGHT } from '../config';
import { useDualCalendar, useDualCalendarProps } from './use-dual-calendar';
export default defineComponent({
    name: 'MonthRangePanel',
    props: Object.assign(Object.assign({}, useDualCalendarProps), {
        type: {
            type: String,
            required: true,
        },
    }),
    setup(props) {
        if (process.env.NODE_ENV !== 'production') {
            watchEffect(() => {
                var _a;
                if (
                    (_a = props.actions) === null || _a === void 0
                        ? void 0
                        : _a.includes('now')
                ) {
                    warnOnce(
                        'date-picker',
                        `The \`now\` action is not supported for n-date-picker of ${props.type}type`
                    );
                }
            });
        }
        const useCalendarRef = useDualCalendar(props, props.type);
        const renderItem = (item, i, mergedClsPrefix, type) => {
            const { handleColItemClick } = useCalendarRef;
            const disabled = false;
            return h(
                'div',
                {
                    'data-n-date': true,
                    key: i,
                    class: [
                        `${mergedClsPrefix}-date-panel-month-calendar__picker-col-item`,
                        {
                            [`${mergedClsPrefix}-date-panel-month-calendar__picker-col-item--current`]:
                                item.isCurrent,
                            [`${mergedClsPrefix}-date-panel-month-calendar__picker-col-item--selected`]:
                                item.selected,
                            [`${mergedClsPrefix}-date-panel-month-calendar__picker-col-item--disabled`]:
                                disabled,
                        },
                    ],
                    onClick: disabled
                        ? void 0
                        : () => {
                              handleColItemClick(item, type);
                          },
                },
                item.type === 'month'
                    ? item.dateObject.month + 1
                    : item.type === 'quarter'
                    ? `Q${item.dateObject.quarter}`
                    : item.dateObject.year
            );
        };
        onMounted(() => {
            useCalendarRef.justifyColumnsScrollState();
        });
        return Object.assign(Object.assign({}, useCalendarRef), { renderItem });
    },
    render() {
        var _a, _b, _c;
        const {
            mergedClsPrefix,
            mergedTheme,
            shortcuts,
            type,
            renderItem,
            onRender,
        } = this;
        onRender === null || onRender === void 0 ? void 0 : onRender();
        return h(
            'div',
            {
                ref: 'selfRef',
                tabindex: 0,
                class: [
                    `${mergedClsPrefix}-date-panel`,
                    `${mergedClsPrefix}-date-panel--daterange`,
                    !this.panel && `${mergedClsPrefix}-date-panel--shadow`,
                    this.themeClass,
                ],
                onKeydown: this.handlePanelKeyDown,
                onFocus: this.handlePanelFocus,
            },
            h(
                'div',
                {
                    ref: 'startDatesElRef',
                    class: `${mergedClsPrefix}-date-panel-calendar ${mergedClsPrefix}-date-panel-calendar--start`,
                },
                h(
                    'div',
                    { class: `${mergedClsPrefix}-date-panel-month-calendar` },
                    h(
                        NScrollbar,
                        {
                            ref: 'startYearScrollbarRef',
                            class: `${mergedClsPrefix}-date-panel-month-calendar__picker-col`,
                            theme: mergedTheme.peers.Scrollbar,
                            themeOverrides: mergedTheme.peerOverrides.Scrollbar,
                            container: () => this.virtualListContainer('start'),
                            content: () => this.virtualListContent('start'),
                            horizontalRailStyle: { zIndex: 1 },
                            verticalRailStyle: { zIndex: 1 },
                        },
                        {
                            default: () =>
                                h(
                                    VirtualList,
                                    {
                                        ref: 'startYearVlRef',
                                        items: this.startYearArray,
                                        itemSize: MONTH_ITEM_HEIGHT,
                                        showScrollbar: false,
                                        keyField: 'ts',
                                        onScroll: this.handleStartYearVlScroll,
                                        paddingBottom: 4,
                                    },
                                    {
                                        default: ({ item, index }) => {
                                            return renderItem(
                                                item,
                                                index,
                                                mergedClsPrefix,
                                                'start'
                                            );
                                        },
                                    }
                                ),
                        }
                    ),
                    type === 'monthrange' || type === 'quarterrange'
                        ? h(
                              'div',
                              {
                                  class: `${mergedClsPrefix}-date-panel-month-calendar__picker-col`,
                              },
                              h(
                                  NScrollbar,
                                  {
                                      ref: 'startMonthScrollbarRef',
                                      theme: mergedTheme.peers.Scrollbar,
                                      themeOverrides:
                                          mergedTheme.peerOverrides.Scrollbar,
                                  },
                                  {
                                      default: () => [
                                          (type === 'monthrange'
                                              ? this.startMonthArray
                                              : this.startQuarterArray
                                          ).map((item, i) =>
                                              renderItem(
                                                  item,
                                                  i,
                                                  mergedClsPrefix,
                                                  'start'
                                              )
                                          ),
                                          type === 'monthrange' &&
                                              h('div', {
                                                  class: `${mergedClsPrefix}-date-panel-month-calendar__padding`,
                                              }),
                                      ],
                                  }
                              )
                          )
                        : null
                )
            ),
            h('div', {
                class: `${mergedClsPrefix}-date-panel__vertical-divider`,
            }),
            h(
                'div',
                {
                    ref: 'endDatesElRef',
                    class: `${mergedClsPrefix}-date-panel-calendar ${mergedClsPrefix}-date-panel-calendar--end`,
                },
                h(
                    'div',
                    { class: `${mergedClsPrefix}-date-panel-month-calendar` },
                    h(
                        NScrollbar,
                        {
                            ref: 'endYearScrollbarRef',
                            class: `${mergedClsPrefix}-date-panel-month-calendar__picker-col`,
                            theme: mergedTheme.peers.Scrollbar,
                            themeOverrides: mergedTheme.peerOverrides.Scrollbar,
                            container: () => this.virtualListContainer('end'),
                            content: () => this.virtualListContent('end'),
                            horizontalRailStyle: { zIndex: 1 },
                            verticalRailStyle: { zIndex: 1 },
                        },
                        {
                            default: () =>
                                h(
                                    VirtualList,
                                    {
                                        ref: 'endYearVlRef',
                                        items: this.endYearArray,
                                        itemSize: MONTH_ITEM_HEIGHT,
                                        showScrollbar: false,
                                        keyField: 'ts',
                                        onScroll: this.handleEndYearVlScroll,
                                        paddingBottom: 4,
                                    },
                                    {
                                        default: ({ item, index }) => {
                                            return renderItem(
                                                item,
                                                index,
                                                mergedClsPrefix,
                                                'end'
                                            );
                                        },
                                    }
                                ),
                        }
                    ),
                    type === 'monthrange' || type === 'quarterrange'
                        ? h(
                              'div',
                              {
                                  class: `${mergedClsPrefix}-date-panel-month-calendar__picker-col`,
                              },
                              h(
                                  NScrollbar,
                                  {
                                      ref: 'endMonthScrollbarRef',
                                      theme: mergedTheme.peers.Scrollbar,
                                      themeOverrides:
                                          mergedTheme.peerOverrides.Scrollbar,
                                  },
                                  {
                                      default: () => [
                                          (type === 'monthrange'
                                              ? this.endMonthArray
                                              : this.endQuarterArray
                                          ).map((item, i) =>
                                              renderItem(
                                                  item,
                                                  i,
                                                  mergedClsPrefix,
                                                  'end'
                                              )
                                          ),
                                          type === 'monthrange' &&
                                              h('div', {
                                                  class: `${mergedClsPrefix}-date-panel-month-calendar__padding`,
                                              }),
                                      ],
                                  }
                              )
                          )
                        : null
                )
            ),
            this.datePickerSlots.footer
                ? h(
                      'div',
                      { class: `${mergedClsPrefix}-date-panel-footer` },
                      renderSlot(this.datePickerSlots, 'footer')
                  )
                : null,
            ((_a = this.actions) === null || _a === void 0
                ? void 0
                : _a.length) || shortcuts
                ? h(
                      'div',
                      { class: `${mergedClsPrefix}-date-panel-actions` },
                      h(
                          'div',
                          {
                              class: `${mergedClsPrefix}-date-panel-actions__prefix`,
                          },
                          shortcuts &&
                              Object.keys(shortcuts).map((key) => {
                                  const shortcut = shortcuts[key];
                                  return Array.isArray(shortcut) ||
                                      typeof shortcut === 'function'
                                      ? h(
                                            NxButton,
                                            {
                                                size: 'tiny',
                                                onMouseenter: () => {
                                                    this.handleRangeShortcutMouseenter(
                                                        shortcut
                                                    );
                                                },
                                                onClick: () => {
                                                    this.handleRangeShortcutClick(
                                                        shortcut
                                                    );
                                                },
                                                onMouseleave: () => {
                                                    this.handleShortcutMouseleave();
                                                },
                                            },
                                            { default: () => key }
                                        )
                                      : null;
                              })
                      ),
                      h(
                          'div',
                          {
                              class: `${mergedClsPrefix}-date-panel-actions__suffix`,
                          },
                          (
                              (_b = this.actions) === null || _b === void 0
                                  ? void 0
                                  : _b.includes('clear')
                          )
                              ? h(
                                    NxButton,
                                    {
                                        theme: mergedTheme.peers.Button,
                                        themeOverrides:
                                            mergedTheme.peerOverrides.Button,
                                        size: 'tiny',
                                        onClick: this.handleClearClick,
                                    },
                                    { default: () => this.locale.clear }
                                )
                              : null,
                          (
                              (_c = this.actions) === null || _c === void 0
                                  ? void 0
                                  : _c.includes('confirm')
                          )
                              ? h(
                                    NxButton,
                                    {
                                        theme: mergedTheme.peers.Button,
                                        themeOverrides:
                                            mergedTheme.peerOverrides.Button,
                                        size: 'tiny',
                                        type: 'primary',
                                        disabled: this.isRangeInvalid,
                                        onClick: this.handleConfirmClick,
                                    },
                                    { default: () => this.locale.confirm }
                                )
                              : null
                      )
                  )
                : null,
            h(NBaseFocusDetector, { onFocus: this.handleFocusDetectorFocus })
        );
    },
});
