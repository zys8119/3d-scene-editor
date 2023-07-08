import { defineComponent, h, watchEffect } from 'vue';
import { NButton, NxButton } from '../../../button';
import { NInput } from '../../../input';
import { NTimePicker } from '../../../time-picker';
import {
    BackwardIcon,
    FastBackwardIcon,
    ForwardIcon,
    FastForwardIcon,
} from '../../../_internal/icons';
import { NBaseFocusDetector } from '../../../_internal';
import { resolveSlot, warnOnce } from '../../../_utils';
import { useDualCalendar, useDualCalendarProps } from './use-dual-calendar';
import PanelHeader from './panelHeader';
export default defineComponent({
    name: 'DateTimeRangePanel',
    props: useDualCalendarProps,
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
                        'The `now` action is not supported for n-date-picker of `datetimerange` type'
                    );
                }
            });
        }
        return useDualCalendar(props, 'datetimerange');
    },
    render() {
        var _a, _b, _c;
        const {
            mergedClsPrefix,
            mergedTheme,
            shortcuts,
            timePickerProps,
            onRender,
            $slots,
        } = this;
        onRender === null || onRender === void 0 ? void 0 : onRender();
        return h(
            'div',
            {
                ref: 'selfRef',
                tabindex: 0,
                class: [
                    `${mergedClsPrefix}-date-panel`,
                    `${mergedClsPrefix}-date-panel--datetimerange`,
                    !this.panel && `${mergedClsPrefix}-date-panel--shadow`,
                    this.themeClass,
                ],
                onKeydown: this.handlePanelKeyDown,
                onFocus: this.handlePanelFocus,
            },
            h(
                'div',
                { class: `${mergedClsPrefix}-date-panel-header` },
                h(NInput, {
                    value: this.startDateDisplayString,
                    theme: mergedTheme.peers.Input,
                    themeOverrides: mergedTheme.peerOverrides.Input,
                    size: this.timePickerSize,
                    stateful: false,
                    class: `${mergedClsPrefix}-date-panel-date-input`,
                    textDecoration: this.isStartValueInvalid
                        ? 'line-through'
                        : '',
                    placeholder: this.locale.selectDate,
                    onBlur: this.handleStartDateInputBlur,
                    onUpdateValue: this.handleStartDateInput,
                }),
                h(
                    NTimePicker,
                    Object.assign(
                        {
                            placeholder: this.locale.selectTime,
                            format: this.timeFormat,
                            size: this.timePickerSize,
                        },
                        Array.isArray(timePickerProps)
                            ? timePickerProps[0]
                            : timePickerProps,
                        {
                            value: this.startTimeValue,
                            to: false,
                            showIcon: false,
                            disabled: this.isSelecting,
                            theme: mergedTheme.peers.TimePicker,
                            themeOverrides:
                                mergedTheme.peerOverrides.TimePicker,
                            stateful: false,
                            isHourDisabled: this.isStartHourDisabled,
                            isMinuteDisabled: this.isStartMinuteDisabled,
                            isSecondDisabled: this.isStartSecondDisabled,
                            onUpdateValue: this.handleStartTimePickerChange,
                        }
                    )
                ),
                h(NInput, {
                    value: this.endDateInput,
                    theme: mergedTheme.peers.Input,
                    themeOverrides: mergedTheme.peerOverrides.Input,
                    stateful: false,
                    size: this.timePickerSize,
                    class: `${mergedClsPrefix}-date-panel-date-input`,
                    textDecoration: this.isEndValueInvalid
                        ? 'line-through'
                        : '',
                    placeholder: this.locale.selectDate,
                    onBlur: this.handleEndDateInputBlur,
                    onUpdateValue: this.handleEndDateInput,
                }),
                h(
                    NTimePicker,
                    Object.assign(
                        {
                            placeholder: this.locale.selectTime,
                            format: this.timeFormat,
                            size: this.timePickerSize,
                        },
                        Array.isArray(timePickerProps)
                            ? timePickerProps[1]
                            : timePickerProps,
                        {
                            disabled: this.isSelecting,
                            showIcon: false,
                            theme: mergedTheme.peers.TimePicker,
                            themeOverrides:
                                mergedTheme.peerOverrides.TimePicker,
                            to: false,
                            stateful: false,
                            value: this.endTimeValue,
                            isHourDisabled: this.isEndHourDisabled,
                            isMinuteDisabled: this.isEndMinuteDisabled,
                            isSecondDisabled: this.isEndSecondDisabled,
                            onUpdateValue: this.handleEndTimePickerChange,
                        }
                    )
                )
            ),
            h(
                'div',
                {
                    ref: 'startDatesElRef',
                    class: `${mergedClsPrefix}-date-panel-calendar ${mergedClsPrefix}-date-panel-calendar--start`,
                },
                h(
                    'div',
                    { class: `${mergedClsPrefix}-date-panel-month` },
                    h(
                        'div',
                        {
                            class: `${mergedClsPrefix}-date-panel-month__fast-prev`,
                            onClick: this.startCalendarPrevYear,
                        },
                        resolveSlot($slots['prev-year'], () => [
                            h(FastBackwardIcon, null),
                        ])
                    ),
                    h(
                        'div',
                        {
                            class: `${mergedClsPrefix}-date-panel-month__prev`,
                            onClick: this.startCalendarPrevMonth,
                        },
                        resolveSlot($slots['prev-month'], () => [
                            h(BackwardIcon, null),
                        ])
                    ),
                    h(PanelHeader, {
                        monthBeforeYear: this.locale.monthBeforeYear,
                        value: this.startCalendarDateTime,
                        onUpdateValue: this.onUpdateStartCalendarValue,
                        mergedClsPrefix,
                        calendarMonth: this.startCalendarMonth,
                        calendarYear: this.startCalendarYear,
                    }),
                    h(
                        'div',
                        {
                            class: `${mergedClsPrefix}-date-panel-month__next`,
                            onClick: this.startCalendarNextMonth,
                        },
                        resolveSlot($slots['next-month'], () => [
                            h(ForwardIcon, null),
                        ])
                    ),
                    h(
                        'div',
                        {
                            class: `${mergedClsPrefix}-date-panel-month__fast-next`,
                            onClick: this.startCalendarNextYear,
                        },
                        resolveSlot($slots['next-year'], () => [
                            h(FastForwardIcon, null),
                        ])
                    )
                ),
                h(
                    'div',
                    { class: `${mergedClsPrefix}-date-panel-weekdays` },
                    this.weekdays.map((weekday) =>
                        h(
                            'div',
                            {
                                key: weekday,
                                class: `${mergedClsPrefix}-date-panel-weekdays__day`,
                            },
                            weekday
                        )
                    )
                ),
                h('div', { class: `${mergedClsPrefix}-date-panel__divider` }),
                h(
                    'div',
                    { class: `${mergedClsPrefix}-date-panel-dates` },
                    this.startDateArray.map((dateItem, i) => {
                        const disabled = this.mergedIsDateDisabled(dateItem.ts);
                        return h(
                            'div',
                            {
                                'data-n-date': true,
                                key: i,
                                class: [
                                    `${mergedClsPrefix}-date-panel-date`,
                                    {
                                        [`${mergedClsPrefix}-date-panel-date--excluded`]:
                                            !dateItem.inCurrentMonth,
                                        [`${mergedClsPrefix}-date-panel-date--current`]:
                                            dateItem.isCurrentDate,
                                        [`${mergedClsPrefix}-date-panel-date--selected`]:
                                            dateItem.selected,
                                        [`${mergedClsPrefix}-date-panel-date--covered`]:
                                            dateItem.inSpan,
                                        [`${mergedClsPrefix}-date-panel-date--start`]:
                                            dateItem.startOfSpan,
                                        [`${mergedClsPrefix}-date-panel-date--end`]:
                                            dateItem.endOfSpan,
                                        [`${mergedClsPrefix}-date-panel-date--disabled`]:
                                            disabled,
                                    },
                                ],
                                onClick: disabled
                                    ? void 0
                                    : () => this.handleDateClick(dateItem),
                                onMouseenter: disabled
                                    ? void 0
                                    : () => this.handleDateMouseEnter(dateItem),
                            },
                            h('div', {
                                class: `${mergedClsPrefix}-date-panel-date__trigger`,
                            }),
                            dateItem.dateObject.date,
                            dateItem.isCurrentDate
                                ? h('div', {
                                      class: `${mergedClsPrefix}-date-panel-date__sup`,
                                  })
                                : null
                        );
                    })
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
                    { class: `${mergedClsPrefix}-date-panel-month` },
                    h(
                        'div',
                        {
                            class: `${mergedClsPrefix}-date-panel-month__fast-prev`,
                            onClick: this.endCalendarPrevYear,
                        },
                        resolveSlot($slots['prev-year'], () => [
                            h(FastBackwardIcon, null),
                        ])
                    ),
                    h(
                        'div',
                        {
                            class: `${mergedClsPrefix}-date-panel-month__prev`,
                            onClick: this.endCalendarPrevMonth,
                        },
                        resolveSlot($slots['prev-month'], () => [
                            h(BackwardIcon, null),
                        ])
                    ),
                    h(PanelHeader, {
                        monthBeforeYear: this.locale.monthBeforeYear,
                        value: this.endCalendarDateTime,
                        onUpdateValue: this.onUpdateEndCalendarValue,
                        mergedClsPrefix,
                        calendarMonth: this.endCalendarMonth,
                        calendarYear: this.endCalendarYear,
                    }),
                    h(
                        'div',
                        {
                            class: `${mergedClsPrefix}-date-panel-month__next`,
                            onClick: this.endCalendarNextMonth,
                        },
                        resolveSlot($slots['next-month'], () => [
                            h(ForwardIcon, null),
                        ])
                    ),
                    h(
                        'div',
                        {
                            class: `${mergedClsPrefix}-date-panel-month__fast-next`,
                            onClick: this.endCalendarNextYear,
                        },
                        resolveSlot($slots['next-year'], () => [
                            h(FastForwardIcon, null),
                        ])
                    )
                ),
                h(
                    'div',
                    { class: `${mergedClsPrefix}-date-panel-weekdays` },
                    this.weekdays.map((weekday) =>
                        h(
                            'div',
                            {
                                key: weekday,
                                class: `${mergedClsPrefix}-date-panel-weekdays__day`,
                            },
                            weekday
                        )
                    )
                ),
                h('div', { class: `${mergedClsPrefix}-date-panel__divider` }),
                h(
                    'div',
                    { class: `${mergedClsPrefix}-date-panel-dates` },
                    this.endDateArray.map((dateItem, i) => {
                        const disabled = this.mergedIsDateDisabled(dateItem.ts);
                        return h(
                            'div',
                            {
                                'data-n-date': true,
                                key: i,
                                class: [
                                    `${mergedClsPrefix}-date-panel-date`,
                                    {
                                        [`${mergedClsPrefix}-date-panel-date--excluded`]:
                                            !dateItem.inCurrentMonth,
                                        [`${mergedClsPrefix}-date-panel-date--current`]:
                                            dateItem.isCurrentDate,
                                        [`${mergedClsPrefix}-date-panel-date--selected`]:
                                            dateItem.selected,
                                        [`${mergedClsPrefix}-date-panel-date--covered`]:
                                            dateItem.inSpan,
                                        [`${mergedClsPrefix}-date-panel-date--start`]:
                                            dateItem.startOfSpan,
                                        [`${mergedClsPrefix}-date-panel-date--end`]:
                                            dateItem.endOfSpan,
                                        [`${mergedClsPrefix}-date-panel-date--disabled`]:
                                            disabled,
                                    },
                                ],
                                onClick: disabled
                                    ? void 0
                                    : () => this.handleDateClick(dateItem),
                                onMouseenter: disabled
                                    ? void 0
                                    : () => this.handleDateMouseEnter(dateItem),
                            },
                            h('div', {
                                class: `${mergedClsPrefix}-date-panel-date__trigger`,
                            }),
                            dateItem.dateObject.date,
                            dateItem.isCurrentDate
                                ? h('div', {
                                      class: `${mergedClsPrefix}-date-panel-date__sup`,
                                  })
                                : null
                        );
                    })
                )
            ),
            this.datePickerSlots.footer
                ? h(
                      'div',
                      { class: `${mergedClsPrefix}-date-panel-footer` },
                      this.datePickerSlots.footer()
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
                                    NButton,
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
                                    NButton,
                                    {
                                        theme: mergedTheme.peers.Button,
                                        themeOverrides:
                                            mergedTheme.peerOverrides.Button,
                                        size: 'tiny',
                                        type: 'primary',
                                        disabled:
                                            this.isRangeInvalid ||
                                            this.isSelecting,
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
