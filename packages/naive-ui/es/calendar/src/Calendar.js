import { computed, defineComponent, h, ref, Fragment, toRef } from 'vue';
import {
    format,
    getYear,
    addMonths,
    startOfDay,
    getMonth,
    getDate,
} from 'date-fns';
import { useMergedState } from 'vooks';
import { dateArray } from '../../date-picker/src/utils';
import { ChevronLeftIcon, ChevronRightIcon } from '../../_internal/icons';
import { NBaseIcon } from '../../_internal';
import { call, resolveSlotWithProps } from '../../_utils';
import { NButton } from '../../button';
import { NButtonGroup } from '../../button-group';
import { useConfig, useLocale, useTheme, useThemeClass } from '../../_mixins';
import { calendarLight } from '../styles';
import style from './styles/index.cssr';
import LunarCalendar from 'lunar-calendar-panel';
export const calendarProps = Object.assign(Object.assign({}, useTheme.props), {
    isDateDisabled: Function,
    value: Number,
    defaultValue: {
        type: Number,
        default: null,
    },
    onPanelChange: Function,
    'onUpdate:value': [Function, Array],
    onUpdateValue: [Function, Array],
    showCard: {
        type: Boolean,
        default: false,
    },
    coverCard: {
        type: Boolean,
        default: true,
    },
    hiddenMore: {
        type: Boolean,
        default: true,
    },
});
export default defineComponent({
    name: 'Calendar',
    props: calendarProps,
    setup(props) {
        var _a;
        const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
        const themeRef = useTheme(
            'Calendar',
            '-calendar',
            style,
            calendarLight,
            props,
            mergedClsPrefixRef
        );
        const { localeRef, dateLocaleRef } = useLocale('DatePicker');
        const now = Date.now();
        const monthTsRef = ref(
            startOfDay(
                (_a = props.defaultValue) !== null && _a !== void 0 ? _a : now
            ).valueOf()
        );
        const uncontrolledValueRef = ref(props.defaultValue || null);
        const mergedValueRef = useMergedState(
            toRef(props, 'value'),
            uncontrolledValueRef
        );
        function doUpdateValue(value, time) {
            const { onUpdateValue, 'onUpdate:value': _onUpdateValue } = props;
            if (onUpdateValue) {
                call(onUpdateValue, value, time);
            }
            if (_onUpdateValue) {
                call(_onUpdateValue, value, time);
            }
            uncontrolledValueRef.value = value;
        }
        function handlePrevClick() {
            var _a2;
            const monthTs = addMonths(monthTsRef.value, -1).valueOf();
            monthTsRef.value = monthTs;
            (_a2 = props.onPanelChange) === null || _a2 === void 0
                ? void 0
                : _a2.call(props, {
                      year: getYear(monthTs),
                      month: getMonth(monthTs) + 1,
                      date: getDate(monthTs),
                  });
            doUpdateValue(monthTs, {
                year: getYear(monthTs),
                month: getMonth(monthTs) + 1,
                date: getDate(monthTs),
            });
        }
        function handleNextClick() {
            var _a2;
            const monthTs = addMonths(monthTsRef.value, 1).valueOf();
            monthTsRef.value = monthTs;
            (_a2 = props.onPanelChange) === null || _a2 === void 0
                ? void 0
                : _a2.call(props, {
                      year: getYear(monthTs),
                      month: getMonth(monthTs) + 1,
                      date: getDate(monthTs),
                  });
            doUpdateValue(monthTs, {
                year: getYear(monthTs),
                month: getMonth(monthTs) + 1,
                date: getDate(monthTs),
            });
        }
        function handleTodayClick() {
            var _a2;
            const { value: monthTs } = monthTsRef;
            const oldYear = getYear(monthTs);
            const oldMonth = getMonth(monthTs);
            const newMonthTs = startOfDay(now).valueOf();
            monthTsRef.value = newMonthTs;
            const newYear = getYear(newMonthTs);
            const newMonth = getMonth(newMonthTs) + 1;
            const newDate = getDate(newMonthTs);
            if (oldYear !== newYear || oldMonth !== newMonth) {
                (_a2 = props.onPanelChange) === null || _a2 === void 0
                    ? void 0
                    : _a2.call(props, {
                          year: newYear,
                          month: newMonth,
                          date: newDate,
                      });
            }
            doUpdateValue(newMonthTs, {
                year: newYear,
                month: newMonth,
                date: newDate,
            });
        }
        const cssVarsRef = computed(() => {
            const {
                common: { cubicBezierEaseInOut },
                self: {
                    borderColor,
                    borderColorModal,
                    borderColorPopover,
                    borderRadius,
                    titleFontSize,
                    textColor,
                    titleFontWeight,
                    titleTextColor,
                    dayTextColor,
                    fontSize,
                    lineHeight,
                    dateColorCurrent,
                    dateTextColorCurrent,
                    cellColorHover,
                    cellColor,
                    cellColorModal,
                    barColor,
                    cellColorPopover,
                    cellColorHoverModal,
                    cellColorHoverPopover,
                },
            } = themeRef.value;
            return {
                '--n-bezier': cubicBezierEaseInOut,
                '--n-border-color': borderColor,
                '--n-border-color-modal': borderColorModal,
                '--n-border-color-popover': borderColorPopover,
                '--n-border-radius': borderRadius,
                '--n-text-color': textColor,
                '--n-title-font-weight': titleFontWeight,
                '--n-title-font-size': titleFontSize,
                '--n-title-text-color': titleTextColor,
                '--n-day-text-color': dayTextColor,
                '--n-font-size': fontSize,
                '--n-line-height': lineHeight,
                '--n-date-color-current': dateColorCurrent,
                '--n-date-text-color-current': dateTextColorCurrent,
                '--n-cell-color': cellColor,
                '--n-cell-color-modal': cellColorModal,
                '--n-cell-color-popover': cellColorPopover,
                '--n-cell-color-hover': cellColorHover,
                '--n-cell-color-hover-modal': cellColorHoverModal,
                '--n-cell-color-hover-popover': cellColorHoverPopover,
                '--n-bar-color': barColor,
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? useThemeClass('calendar', void 0, cssVarsRef, props)
            : void 0;
        return {
            mergedClsPrefix: mergedClsPrefixRef,
            locale: localeRef,
            dateLocale: dateLocaleRef,
            now,
            mergedValue: mergedValueRef,
            monthTs: monthTsRef,
            dateItems: computed(() => {
                return dateArray(
                    monthTsRef.value,
                    mergedValueRef.value,
                    now,
                    localeRef.value.firstDayOfWeek,
                    true
                );
            }),
            doUpdateValue,
            handleTodayClick,
            handlePrevClick,
            handleNextClick,
            mergedTheme: themeRef,
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
        var _a, _b, _c, _d;
        const {
            isDateDisabled,
            mergedClsPrefix,
            monthTs,
            cssVars,
            mergedValue,
            mergedTheme,
            $slots,
            locale: { monthBeforeYear, today },
            dateLocale: { locale },
            handleTodayClick,
            handlePrevClick,
            handleNextClick,
            onRender,
        } = this;
        onRender === null || onRender === void 0 ? void 0 : onRender();
        const normalizedValue =
            mergedValue && startOfDay(mergedValue).valueOf();
        const year = getYear(monthTs);
        const calendarMonth = getMonth(monthTs) + 1;
        const currentDay = getDate(monthTs);
        const lunarCalendarData = new LunarCalendar();
        const lunarCalendarDay = lunarCalendarData
            .returnDate(year, calendarMonth)
            .find(
                (e) => e.getDayAll === `${year}-${calendarMonth}-${currentDay}`
            );
        const slotObj = {
            year,
            month: getMonth(monthTs) + 1,
            date: currentDay,
        };
        return h(
            'div',
            {
                class: [`${mergedClsPrefix}-calendar`, this.themeClass],
                style: cssVars,
            },
            h(
                'div',
                { class: `${mergedClsPrefix}-calendar-header` },
                h(
                    'div',
                    { class: `${mergedClsPrefix}-calendar-header__title` },
                    resolveSlotWithProps(
                        $slots.header,
                        { year, month: calendarMonth },
                        () => {
                            const localeMonth = format(monthTs, 'MMMM', {
                                locale,
                            });
                            return [
                                monthBeforeYear
                                    ? `${localeMonth} ${year}`
                                    : `${year} ${localeMonth}`,
                            ];
                        }
                    )
                ),
                h(
                    'div',
                    { class: `${mergedClsPrefix}-calendar-header__extra` },
                    h(NButtonGroup, null, {
                        default: () =>
                            h(
                                Fragment,
                                null,
                                h(
                                    NButton,
                                    {
                                        size: 'small',
                                        onClick: handlePrevClick,
                                        theme: mergedTheme.peers.Button,
                                        themeOverrides:
                                            mergedTheme.peerOverrides.Button,
                                    },
                                    {
                                        icon: () =>
                                            h(
                                                NBaseIcon,
                                                {
                                                    clsPrefix: mergedClsPrefix,
                                                    class: `${mergedClsPrefix}-calendar-prev-btn`,
                                                },
                                                {
                                                    default: () =>
                                                        h(
                                                            ChevronLeftIcon,
                                                            null
                                                        ),
                                                }
                                            ),
                                    }
                                ),
                                h(
                                    NButton,
                                    {
                                        size: 'small',
                                        onClick: handleTodayClick,
                                        theme: mergedTheme.peers.Button,
                                        themeOverrides:
                                            mergedTheme.peerOverrides.Button,
                                    },
                                    { default: () => today }
                                ),
                                h(
                                    NButton,
                                    {
                                        size: 'small',
                                        onClick: handleNextClick,
                                        theme: mergedTheme.peers.Button,
                                        themeOverrides:
                                            mergedTheme.peerOverrides.Button,
                                    },
                                    {
                                        icon: () =>
                                            h(
                                                NBaseIcon,
                                                {
                                                    clsPrefix: mergedClsPrefix,
                                                    class: `${mergedClsPrefix}-calendar-next-btn`,
                                                },
                                                {
                                                    default: () =>
                                                        h(
                                                            ChevronRightIcon,
                                                            null
                                                        ),
                                                }
                                            ),
                                    }
                                )
                            ),
                    })
                )
            ),
            h(
                'div',
                { class: `${mergedClsPrefix}-calendar-main` },
                h(
                    'div',
                    { class: `${mergedClsPrefix}-calendar-dates` },
                    this.dateItems.map(
                        (
                            { dateObject, ts, inCurrentMonth, isCurrentDate },
                            index
                        ) => {
                            var _a2;
                            const { year: year2, month, date } = dateObject;
                            const fullDate = format(ts, 'yyyy-MM-dd');
                            const notInCurrentMonth = !inCurrentMonth;
                            const disabled =
                                (isDateDisabled === null ||
                                isDateDisabled === void 0
                                    ? void 0
                                    : isDateDisabled(ts)) === true;
                            const selected =
                                normalizedValue === startOfDay(ts).valueOf();
                            return h(
                                'div',
                                {
                                    key: `${calendarMonth}-${index}`,
                                    class: [
                                        `${mergedClsPrefix}-calendar-cell`,
                                        disabled &&
                                            `${mergedClsPrefix}-calendar-cell--disabled`,
                                        notInCurrentMonth &&
                                            `${mergedClsPrefix}-calendar-cell--other-month`,
                                        disabled &&
                                            `${mergedClsPrefix}-calendar-cell--not-allowed`,
                                        isCurrentDate &&
                                            `${mergedClsPrefix}-calendar-cell--current`,
                                        selected &&
                                            `${mergedClsPrefix}-calendar-cell--selected`,
                                    ],
                                    onClick: () => {
                                        var _a3;
                                        if (disabled) return;
                                        const monthTs2 =
                                            startOfDay(ts).valueOf();
                                        this.monthTs = monthTs2;
                                        if (notInCurrentMonth) {
                                            (_a3 = this.onPanelChange) ===
                                                null || _a3 === void 0
                                                ? void 0
                                                : _a3.call(this, {
                                                      year: getYear(monthTs2),
                                                      month:
                                                          getMonth(monthTs2) +
                                                          1,
                                                      date: getDate(monthTs2),
                                                  });
                                        }
                                        this.doUpdateValue(ts, {
                                            year: year2,
                                            month: month + 1,
                                            date,
                                        });
                                    },
                                },
                                h(
                                    'div',
                                    {
                                        class: `${mergedClsPrefix}-calendar-date`,
                                    },
                                    h(
                                        'div',
                                        {
                                            class: `${mergedClsPrefix}-calendar-date__date`,
                                            title: fullDate,
                                        },
                                        date
                                    ),
                                    index < 7 &&
                                        h(
                                            'div',
                                            {
                                                class: `${mergedClsPrefix}-calendar-date__day`,
                                                title: fullDate,
                                            },
                                            format(ts, 'EEE', {
                                                locale,
                                            })
                                        )
                                ),
                                h(
                                    'div',
                                    {
                                        class: [
                                            `${mergedClsPrefix}-calendar-slot`,
                                            this.hiddenMore &&
                                                `${mergedClsPrefix}-calendar-slot-hidden`,
                                        ],
                                    },
                                    (_a2 = $slots.default) === null ||
                                        _a2 === void 0
                                        ? void 0
                                        : _a2.call($slots, {
                                              year: year2,
                                              month: month + 1,
                                              date,
                                          })
                                ),
                                h('div', {
                                    class: `${mergedClsPrefix}-calendar-cell__bar`,
                                })
                            );
                        }
                    )
                ),
                this.showCard
                    ? h(
                          'div',
                          { class: `${mergedClsPrefix}-calendar-card` },
                          h(
                              'div',
                              {
                                  class: `${mergedClsPrefix}-calendar-card__date`,
                              },
                              h(
                                  'div',
                                  {
                                      class: `${mergedClsPrefix}-calendar-card__date-time`,
                                  },
                                  year,
                                  '-',
                                  calendarMonth,
                                  '-',
                                  currentDay
                              ),
                              h(
                                  'div',
                                  {
                                      class: `${mergedClsPrefix}-calendar-card__date-day`,
                                  },
                                  currentDay,
                                  monthTs === startOfDay(this.now).valueOf()
                                      ? h(
                                            'div',
                                            {
                                                class: `${mergedClsPrefix}-calendar-card__date-day-now`,
                                            },
                                            '\u4ECA\u5929'
                                        )
                                      : null
                              ),
                              lunarCalendarDay
                                  ? h(
                                        'div',
                                        {
                                            class: `${mergedClsPrefix}-calendar-card__date-info`,
                                        },
                                        h(
                                            'div',
                                            null,
                                            lunarCalendarDay.calendar.IMonthCn,
                                            ' ',
                                            lunarCalendarDay.calendar.IDayCn
                                        ),
                                        h(
                                            'div',
                                            null,
                                            lunarCalendarDay.calendar.gzYear,
                                            '\u5E74',
                                            ' ',
                                            lunarCalendarDay.calendar.Animal
                                        ),
                                        h(
                                            'div',
                                            null,
                                            lunarCalendarDay.calendar.gzMonth,
                                            '\u6708',
                                            ' ',
                                            lunarCalendarDay.calendar.gzDay,
                                            '\u65E5'
                                        ),
                                        [
                                            lunarCalendarDay.calendar
                                                .lunarFestival,
                                            lunarCalendarDay.calendar.festival,
                                        ]
                                            .filter((e) => e)
                                            .map((e) =>
                                                h(
                                                    'div',
                                                    {
                                                        class: `${mergedClsPrefix}-calendar-card__date-info-festival`,
                                                    },
                                                    '* ',
                                                    e,
                                                    ' *'
                                                )
                                            )
                                    )
                                  : null
                          ),
                          h(
                              'div',
                              {
                                  class: `${mergedClsPrefix}-calendar-card__remarks`,
                              },
                              this.coverCard
                                  ? ((_a = $slots.rigthCard) === null ||
                                    _a === void 0
                                        ? void 0
                                        : _a.call($slots, slotObj)) ||
                                        ((_b = $slots.default) === null ||
                                        _b === void 0
                                            ? void 0
                                            : _b.call($slots, slotObj))
                                  : (_c = $slots.default) === null ||
                                    _c === void 0
                                  ? void 0
                                  : _c.call($slots, slotObj),
                              !this.coverCard &&
                                  ((_d = $slots.rigthCard) === null ||
                                  _d === void 0
                                      ? void 0
                                      : _d.call($slots, slotObj))
                          )
                      )
                    : null
            )
        );
    },
});
