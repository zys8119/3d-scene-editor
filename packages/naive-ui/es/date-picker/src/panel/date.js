import { h, defineComponent, watchEffect } from 'vue';
import {
    BackwardIcon,
    FastBackwardIcon,
    ForwardIcon,
    FastForwardIcon,
} from '../../../_internal/icons';
import { NButton, NxButton } from '../../../button';
import { NBaseFocusDetector } from '../../../_internal';
import { resolveSlot, warnOnce } from '../../../_utils';
import { useCalendar, useCalendarProps } from './use-calendar';
import PanelHeader from './panelHeader';
export default defineComponent({
    name: 'DatePanel',
    props: useCalendarProps,
    setup(props) {
        if (process.env.NODE_ENV !== 'production') {
            watchEffect(() => {
                var _a;
                if (
                    (_a = props.actions) === null || _a === void 0
                        ? void 0
                        : _a.includes('confirm')
                ) {
                    warnOnce(
                        'date-picker',
                        'The `confirm` action is not supported for n-date-picker of `date` type'
                    );
                }
            });
        }
        return useCalendar(props, 'date');
    },
    render() {
        var _a, _b, _c;
        const { mergedClsPrefix, mergedTheme, shortcuts, onRender, $slots } =
            this;
        onRender === null || onRender === void 0 ? void 0 : onRender();
        return h(
            'div',
            {
                ref: 'selfRef',
                tabindex: 0,
                class: [
                    `${mergedClsPrefix}-date-panel`,
                    `${mergedClsPrefix}-date-panel--date`,
                    !this.panel && `${mergedClsPrefix}-date-panel--shadow`,
                    this.themeClass,
                ],
                onFocus: this.handlePanelFocus,
                onKeydown: this.handlePanelKeyDown,
            },
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
                                        onClick: this.handleClearClick,
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
                              : null
                      )
                  )
                : null,
            h(NBaseFocusDetector, { onFocus: this.handleFocusDetectorFocus })
        );
    },
});
