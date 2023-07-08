import { h, defineComponent } from 'vue';
import { NButton, NxButton } from '../../../button';
import { NTimePicker } from '../../../time-picker';
import { NInput } from '../../../input';
import {
    BackwardIcon,
    FastBackwardIcon,
    ForwardIcon,
    FastForwardIcon,
} from '../../../_internal/icons';
import { NBaseFocusDetector } from '../../../_internal';
import { useCalendar, useCalendarProps } from './use-calendar';
import PanelHeader from './panelHeader';
import { resolveSlot } from '../../../_utils';
export default defineComponent({
    name: 'DateTimePanel',
    props: useCalendarProps,
    setup(props) {
        return useCalendar(props, 'datetime');
    },
    render() {
        var _a, _b, _c, _d;
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
                    `${mergedClsPrefix}-date-panel--datetime`,
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
                    value: this.dateInputValue,
                    theme: mergedTheme.peers.Input,
                    themeOverrides: mergedTheme.peerOverrides.Input,
                    stateful: false,
                    size: this.timePickerSize,
                    class: `${mergedClsPrefix}-date-panel-date-input`,
                    textDecoration: this.isDateInvalid ? 'line-through' : '',
                    placeholder: this.locale.selectDate,
                    onBlur: this.handleDateInputBlur,
                    onUpdateValue: this.handleDateInput,
                }),
                h(
                    NTimePicker,
                    Object.assign(
                        {
                            size: this.timePickerSize,
                            placeholder: this.locale.selectTime,
                            format: this.timeFormat,
                        },
                        Array.isArray(timePickerProps)
                            ? void 0
                            : timePickerProps,
                        {
                            showIcon: false,
                            to: false,
                            theme: mergedTheme.peers.TimePicker,
                            themeOverrides:
                                mergedTheme.peerOverrides.TimePicker,
                            value: Array.isArray(this.value)
                                ? null
                                : this.value,
                            isHourDisabled: this.isHourDisabled,
                            isMinuteDisabled: this.isMinuteDisabled,
                            isSecondDisabled: this.isSecondDisabled,
                            onUpdateValue: this.handleTimePickerChange,
                            stateful: false,
                        }
                    )
                )
            ),
            h(
                'div',
                { class: `${mergedClsPrefix}-date-panel-calendar` },
                h(
                    'div',
                    { class: `${mergedClsPrefix}-date-panel-month` },
                    h(
                        'div',
                        {
                            class: `${mergedClsPrefix}-date-panel-month__fast-prev`,
                            onClick: this.prevYear,
                        },
                        resolveSlot($slots['prev-year'], () => [
                            h(FastBackwardIcon, null),
                        ])
                    ),
                    h(
                        'div',
                        {
                            class: `${mergedClsPrefix}-date-panel-month__prev`,
                            onClick: this.prevMonth,
                        },
                        resolveSlot($slots['prev-month'], () => [
                            h(BackwardIcon, null),
                        ])
                    ),
                    h(PanelHeader, {
                        monthBeforeYear: this.locale.monthBeforeYear,
                        value: this.calendarValue,
                        onUpdateValue: this.onUpdateCalendarValue,
                        mergedClsPrefix,
                        calendarMonth: this.calendarMonth,
                        calendarYear: this.calendarYear,
                    }),
                    h(
                        'div',
                        {
                            class: `${mergedClsPrefix}-date-panel-month__next`,
                            onClick: this.nextMonth,
                        },
                        resolveSlot($slots['next-month'], () => [
                            h(ForwardIcon, null),
                        ])
                    ),
                    h(
                        'div',
                        {
                            class: `${mergedClsPrefix}-date-panel-month__fast-next`,
                            onClick: this.nextYear,
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
                h(
                    'div',
                    { class: `${mergedClsPrefix}-date-panel-dates` },
                    this.dateArray.map((dateItem, i) =>
                        h(
                            'div',
                            {
                                'data-n-date': true,
                                key: i,
                                class: [
                                    `${mergedClsPrefix}-date-panel-date`,
                                    {
                                        [`${mergedClsPrefix}-date-panel-date--current`]:
                                            dateItem.isCurrentDate,
                                        [`${mergedClsPrefix}-date-panel-date--selected`]:
                                            dateItem.selected,
                                        [`${mergedClsPrefix}-date-panel-date--excluded`]:
                                            !dateItem.inCurrentMonth,
                                        [`${mergedClsPrefix}-date-panel-date--disabled`]:
                                            this.mergedIsDateDisabled(
                                                dateItem.ts
                                            ),
                                    },
                                ],
                                onClick: () => this.handleDateClick(dateItem),
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
                        )
                    )
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
                                  return Array.isArray(shortcut)
                                      ? null
                                      : h(
                                            NxButton,
                                            {
                                                size: 'tiny',
                                                onMouseenter: () => {
                                                    this.handleSingleShortcutMouseenter(
                                                        shortcut
                                                    );
                                                },
                                                onClick: () => {
                                                    this.handleSingleShortcutClick(
                                                        shortcut
                                                    );
                                                },
                                                onMouseleave: () => {
                                                    this.handleShortcutMouseleave();
                                                },
                                            },
                                            { default: () => key }
                                        );
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
                                        onClick: this.clearSelectedDateTime,
                                    },
                                    { default: () => this.locale.clear }
                                )
                              : null,
                          (
                              (_c = this.actions) === null || _c === void 0
                                  ? void 0
                                  : _c.includes('now')
                          )
                              ? h(
                                    NButton,
                                    {
                                        theme: mergedTheme.peers.Button,
                                        themeOverrides:
                                            mergedTheme.peerOverrides.Button,
                                        size: 'tiny',
                                        onClick: this.handleNowClick,
                                    },
                                    { default: () => this.locale.now }
                                )
                              : null,
                          (
                              (_d = this.actions) === null || _d === void 0
                                  ? void 0
                                  : _d.includes('confirm')
                          )
                              ? h(
                                    NButton,
                                    {
                                        theme: mergedTheme.peers.Button,
                                        themeOverrides:
                                            mergedTheme.peerOverrides.Button,
                                        size: 'tiny',
                                        type: 'primary',
                                        disabled: this.isDateInvalid,
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
