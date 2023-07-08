Object.defineProperty(exports, '__esModule', { value: true });
const vue_1 = require('vue');
const vueuc_1 = require('vueuc');
const button_1 = require('../../../button');
const _internal_1 = require('../../../_internal');
const _utils_1 = require('../../../_utils');
const config_1 = require('../config');
const use_dual_calendar_1 = require('./use-dual-calendar');
exports.default = (0, vue_1.defineComponent)({
    name: 'MonthRangePanel',
    props: Object.assign(
        Object.assign({}, use_dual_calendar_1.useDualCalendarProps),
        {
            type: {
                type: String,
                required: true,
            },
        }
    ),
    setup(props) {
        if (process.env.NODE_ENV !== 'production') {
            (0, vue_1.watchEffect)(() => {
                var _a;
                if (
                    (_a = props.actions) === null || _a === void 0
                        ? void 0
                        : _a.includes('now')
                ) {
                    (0, _utils_1.warnOnce)(
                        'date-picker',
                        `The \`now\` action is not supported for n-date-picker of ${props.type}type`
                    );
                }
            });
        }
        const useCalendarRef = (0, use_dual_calendar_1.useDualCalendar)(
            props,
            props.type
        );
        const renderItem = (item, i, mergedClsPrefix, type) => {
            const { handleColItemClick } = useCalendarRef;
            const disabled = false;
            return (0, vue_1.h)(
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
        (0, vue_1.onMounted)(() => {
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
        return (0, vue_1.h)(
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
            (0, vue_1.h)(
                'div',
                {
                    ref: 'startDatesElRef',
                    class: `${mergedClsPrefix}-date-panel-calendar ${mergedClsPrefix}-date-panel-calendar--start`,
                },
                (0, vue_1.h)(
                    'div',
                    { class: `${mergedClsPrefix}-date-panel-month-calendar` },
                    (0, vue_1.h)(
                        _internal_1.NScrollbar,
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
                                (0, vue_1.h)(
                                    vueuc_1.VirtualList,
                                    {
                                        ref: 'startYearVlRef',
                                        items: this.startYearArray,
                                        itemSize: config_1.MONTH_ITEM_HEIGHT,
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
                        ? (0, vue_1.h)(
                              'div',
                              {
                                  class: `${mergedClsPrefix}-date-panel-month-calendar__picker-col`,
                              },
                              (0, vue_1.h)(
                                  _internal_1.NScrollbar,
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
                                              (0, vue_1.h)('div', {
                                                  class: `${mergedClsPrefix}-date-panel-month-calendar__padding`,
                                              }),
                                      ],
                                  }
                              )
                          )
                        : null
                )
            ),
            (0, vue_1.h)('div', {
                class: `${mergedClsPrefix}-date-panel__vertical-divider`,
            }),
            (0, vue_1.h)(
                'div',
                {
                    ref: 'endDatesElRef',
                    class: `${mergedClsPrefix}-date-panel-calendar ${mergedClsPrefix}-date-panel-calendar--end`,
                },
                (0, vue_1.h)(
                    'div',
                    { class: `${mergedClsPrefix}-date-panel-month-calendar` },
                    (0, vue_1.h)(
                        _internal_1.NScrollbar,
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
                                (0, vue_1.h)(
                                    vueuc_1.VirtualList,
                                    {
                                        ref: 'endYearVlRef',
                                        items: this.endYearArray,
                                        itemSize: config_1.MONTH_ITEM_HEIGHT,
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
                        ? (0, vue_1.h)(
                              'div',
                              {
                                  class: `${mergedClsPrefix}-date-panel-month-calendar__picker-col`,
                              },
                              (0, vue_1.h)(
                                  _internal_1.NScrollbar,
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
                                              (0, vue_1.h)('div', {
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
                ? (0, vue_1.h)(
                      'div',
                      { class: `${mergedClsPrefix}-date-panel-footer` },
                      (0, vue_1.renderSlot)(this.datePickerSlots, 'footer')
                  )
                : null,
            ((_a = this.actions) === null || _a === void 0
                ? void 0
                : _a.length) || shortcuts
                ? (0, vue_1.h)(
                      'div',
                      { class: `${mergedClsPrefix}-date-panel-actions` },
                      (0, vue_1.h)(
                          'div',
                          {
                              class: `${mergedClsPrefix}-date-panel-actions__prefix`,
                          },
                          shortcuts &&
                              Object.keys(shortcuts).map((key) => {
                                  const shortcut = shortcuts[key];
                                  return Array.isArray(shortcut) ||
                                      typeof shortcut === 'function'
                                      ? (0, vue_1.h)(
                                            button_1.NxButton,
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
                      (0, vue_1.h)(
                          'div',
                          {
                              class: `${mergedClsPrefix}-date-panel-actions__suffix`,
                          },
                          (
                              (_b = this.actions) === null || _b === void 0
                                  ? void 0
                                  : _b.includes('clear')
                          )
                              ? (0, vue_1.h)(
                                    button_1.NxButton,
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
                              ? (0, vue_1.h)(
                                    button_1.NxButton,
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
            (0, vue_1.h)(_internal_1.NBaseFocusDetector, {
                onFocus: this.handleFocusDetectorFocus,
            })
        );
    },
});
