var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.calendarProps = void 0;
const vue_1 = require('vue');
const date_fns_1 = require('date-fns');
const vooks_1 = require('vooks');
const utils_1 = require('../../date-picker/src/utils');
const icons_1 = require('../../_internal/icons');
const _internal_1 = require('../../_internal');
const _utils_1 = require('../../_utils');
const button_1 = require('../../button');
const button_group_1 = require('../../button-group');
const _mixins_1 = require('../../_mixins');
const styles_1 = require('../styles');
const index_cssr_1 = __importDefault(require('./styles/index.cssr'));
const lunar_calendar_panel_1 = __importDefault(require('lunar-calendar-panel'));
exports.calendarProps = Object.assign(
    Object.assign({}, _mixins_1.useTheme.props),
    {
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
    }
);
exports.default = (0, vue_1.defineComponent)({
    name: 'Calendar',
    props: exports.calendarProps,
    setup(props) {
        var _a;
        const { mergedClsPrefixRef, inlineThemeDisabled } = (0,
        _mixins_1.useConfig)(props);
        const themeRef = (0, _mixins_1.useTheme)(
            'Calendar',
            '-calendar',
            index_cssr_1.default,
            styles_1.calendarLight,
            props,
            mergedClsPrefixRef
        );
        const { localeRef, dateLocaleRef } = (0, _mixins_1.useLocale)(
            'DatePicker'
        );
        const now = Date.now();
        const monthTsRef = (0, vue_1.ref)(
            (0, date_fns_1.startOfDay)(
                (_a = props.defaultValue) !== null && _a !== void 0 ? _a : now
            ).valueOf()
        );
        const uncontrolledValueRef = (0, vue_1.ref)(props.defaultValue || null);
        const mergedValueRef = (0, vooks_1.useMergedState)(
            (0, vue_1.toRef)(props, 'value'),
            uncontrolledValueRef
        );
        function doUpdateValue(value, time) {
            const { onUpdateValue, 'onUpdate:value': _onUpdateValue } = props;
            if (onUpdateValue) {
                (0, _utils_1.call)(onUpdateValue, value, time);
            }
            if (_onUpdateValue) {
                (0, _utils_1.call)(_onUpdateValue, value, time);
            }
            uncontrolledValueRef.value = value;
        }
        function handlePrevClick() {
            var _a2;
            const monthTs = (0, date_fns_1.addMonths)(
                monthTsRef.value,
                -1
            ).valueOf();
            monthTsRef.value = monthTs;
            (_a2 = props.onPanelChange) === null || _a2 === void 0
                ? void 0
                : _a2.call(props, {
                      year: (0, date_fns_1.getYear)(monthTs),
                      month: (0, date_fns_1.getMonth)(monthTs) + 1,
                      date: (0, date_fns_1.getDate)(monthTs),
                  });
            doUpdateValue(monthTs, {
                year: (0, date_fns_1.getYear)(monthTs),
                month: (0, date_fns_1.getMonth)(monthTs) + 1,
                date: (0, date_fns_1.getDate)(monthTs),
            });
        }
        function handleNextClick() {
            var _a2;
            const monthTs = (0, date_fns_1.addMonths)(
                monthTsRef.value,
                1
            ).valueOf();
            monthTsRef.value = monthTs;
            (_a2 = props.onPanelChange) === null || _a2 === void 0
                ? void 0
                : _a2.call(props, {
                      year: (0, date_fns_1.getYear)(monthTs),
                      month: (0, date_fns_1.getMonth)(monthTs) + 1,
                      date: (0, date_fns_1.getDate)(monthTs),
                  });
            doUpdateValue(monthTs, {
                year: (0, date_fns_1.getYear)(monthTs),
                month: (0, date_fns_1.getMonth)(monthTs) + 1,
                date: (0, date_fns_1.getDate)(monthTs),
            });
        }
        function handleTodayClick() {
            var _a2;
            const { value: monthTs } = monthTsRef;
            const oldYear = (0, date_fns_1.getYear)(monthTs);
            const oldMonth = (0, date_fns_1.getMonth)(monthTs);
            const newMonthTs = (0, date_fns_1.startOfDay)(now).valueOf();
            monthTsRef.value = newMonthTs;
            const newYear = (0, date_fns_1.getYear)(newMonthTs);
            const newMonth = (0, date_fns_1.getMonth)(newMonthTs) + 1;
            const newDate = (0, date_fns_1.getDate)(newMonthTs);
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
        const cssVarsRef = (0, vue_1.computed)(() => {
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
            ? (0, _mixins_1.useThemeClass)(
                  'calendar',
                  void 0,
                  cssVarsRef,
                  props
              )
            : void 0;
        return {
            mergedClsPrefix: mergedClsPrefixRef,
            locale: localeRef,
            dateLocale: dateLocaleRef,
            now,
            mergedValue: mergedValueRef,
            monthTs: monthTsRef,
            dateItems: (0, vue_1.computed)(() => {
                return (0, utils_1.dateArray)(
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
            mergedValue && (0, date_fns_1.startOfDay)(mergedValue).valueOf();
        const year = (0, date_fns_1.getYear)(monthTs);
        const calendarMonth = (0, date_fns_1.getMonth)(monthTs) + 1;
        const currentDay = (0, date_fns_1.getDate)(monthTs);
        const lunarCalendarData = new lunar_calendar_panel_1.default();
        const lunarCalendarDay = lunarCalendarData
            .returnDate(year, calendarMonth)
            .find(
                (e) => e.getDayAll === `${year}-${calendarMonth}-${currentDay}`
            );
        const slotObj = {
            year,
            month: (0, date_fns_1.getMonth)(monthTs) + 1,
            date: currentDay,
        };
        return (0, vue_1.h)(
            'div',
            {
                class: [`${mergedClsPrefix}-calendar`, this.themeClass],
                style: cssVars,
            },
            (0, vue_1.h)(
                'div',
                { class: `${mergedClsPrefix}-calendar-header` },
                (0, vue_1.h)(
                    'div',
                    { class: `${mergedClsPrefix}-calendar-header__title` },
                    (0, _utils_1.resolveSlotWithProps)(
                        $slots.header,
                        { year, month: calendarMonth },
                        () => {
                            const localeMonth = (0, date_fns_1.format)(
                                monthTs,
                                'MMMM',
                                { locale }
                            );
                            return [
                                monthBeforeYear
                                    ? `${localeMonth} ${year}`
                                    : `${year} ${localeMonth}`,
                            ];
                        }
                    )
                ),
                (0, vue_1.h)(
                    'div',
                    { class: `${mergedClsPrefix}-calendar-header__extra` },
                    (0, vue_1.h)(button_group_1.NButtonGroup, null, {
                        default: () =>
                            (0, vue_1.h)(
                                vue_1.Fragment,
                                null,
                                (0, vue_1.h)(
                                    button_1.NButton,
                                    {
                                        size: 'small',
                                        onClick: handlePrevClick,
                                        theme: mergedTheme.peers.Button,
                                        themeOverrides:
                                            mergedTheme.peerOverrides.Button,
                                    },
                                    {
                                        icon: () =>
                                            (0, vue_1.h)(
                                                _internal_1.NBaseIcon,
                                                {
                                                    clsPrefix: mergedClsPrefix,
                                                    class: `${mergedClsPrefix}-calendar-prev-btn`,
                                                },
                                                {
                                                    default: () =>
                                                        (0, vue_1.h)(
                                                            icons_1.ChevronLeftIcon,
                                                            null
                                                        ),
                                                }
                                            ),
                                    }
                                ),
                                (0, vue_1.h)(
                                    button_1.NButton,
                                    {
                                        size: 'small',
                                        onClick: handleTodayClick,
                                        theme: mergedTheme.peers.Button,
                                        themeOverrides:
                                            mergedTheme.peerOverrides.Button,
                                    },
                                    { default: () => today }
                                ),
                                (0, vue_1.h)(
                                    button_1.NButton,
                                    {
                                        size: 'small',
                                        onClick: handleNextClick,
                                        theme: mergedTheme.peers.Button,
                                        themeOverrides:
                                            mergedTheme.peerOverrides.Button,
                                    },
                                    {
                                        icon: () =>
                                            (0, vue_1.h)(
                                                _internal_1.NBaseIcon,
                                                {
                                                    clsPrefix: mergedClsPrefix,
                                                    class: `${mergedClsPrefix}-calendar-next-btn`,
                                                },
                                                {
                                                    default: () =>
                                                        (0, vue_1.h)(
                                                            icons_1.ChevronRightIcon,
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
            (0, vue_1.h)(
                'div',
                { class: `${mergedClsPrefix}-calendar-main` },
                (0, vue_1.h)(
                    'div',
                    { class: `${mergedClsPrefix}-calendar-dates` },
                    this.dateItems.map(
                        (
                            { dateObject, ts, inCurrentMonth, isCurrentDate },
                            index
                        ) => {
                            var _a2;
                            const { year: year2, month, date } = dateObject;
                            const fullDate = (0, date_fns_1.format)(
                                ts,
                                'yyyy-MM-dd'
                            );
                            const notInCurrentMonth = !inCurrentMonth;
                            const disabled =
                                (isDateDisabled === null ||
                                isDateDisabled === void 0
                                    ? void 0
                                    : isDateDisabled(ts)) === true;
                            const selected =
                                normalizedValue ===
                                (0, date_fns_1.startOfDay)(ts).valueOf();
                            return (0, vue_1.h)(
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
                                        const monthTs2 = (0,
                                        date_fns_1.startOfDay)(ts).valueOf();
                                        this.monthTs = monthTs2;
                                        if (notInCurrentMonth) {
                                            (_a3 = this.onPanelChange) ===
                                                null || _a3 === void 0
                                                ? void 0
                                                : _a3.call(this, {
                                                      year: (0,
                                                      date_fns_1.getYear)(
                                                          monthTs2
                                                      ),
                                                      month:
                                                          (0,
                                                          date_fns_1.getMonth)(
                                                              monthTs2
                                                          ) + 1,
                                                      date: (0,
                                                      date_fns_1.getDate)(
                                                          monthTs2
                                                      ),
                                                  });
                                        }
                                        this.doUpdateValue(ts, {
                                            year: year2,
                                            month: month + 1,
                                            date,
                                        });
                                    },
                                },
                                (0, vue_1.h)(
                                    'div',
                                    {
                                        class: `${mergedClsPrefix}-calendar-date`,
                                    },
                                    (0, vue_1.h)(
                                        'div',
                                        {
                                            class: `${mergedClsPrefix}-calendar-date__date`,
                                            title: fullDate,
                                        },
                                        date
                                    ),
                                    index < 7 &&
                                        (0, vue_1.h)(
                                            'div',
                                            {
                                                class: `${mergedClsPrefix}-calendar-date__day`,
                                                title: fullDate,
                                            },
                                            (0, date_fns_1.format)(ts, 'EEE', {
                                                locale,
                                            })
                                        )
                                ),
                                (0, vue_1.h)(
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
                                (0, vue_1.h)('div', {
                                    class: `${mergedClsPrefix}-calendar-cell__bar`,
                                })
                            );
                        }
                    )
                ),
                this.showCard
                    ? (0, vue_1.h)(
                          'div',
                          { class: `${mergedClsPrefix}-calendar-card` },
                          (0, vue_1.h)(
                              'div',
                              {
                                  class: `${mergedClsPrefix}-calendar-card__date`,
                              },
                              (0, vue_1.h)(
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
                              (0, vue_1.h)(
                                  'div',
                                  {
                                      class: `${mergedClsPrefix}-calendar-card__date-day`,
                                  },
                                  currentDay,
                                  monthTs ===
                                      (0, date_fns_1.startOfDay)(
                                          this.now
                                      ).valueOf()
                                      ? (0, vue_1.h)(
                                            'div',
                                            {
                                                class: `${mergedClsPrefix}-calendar-card__date-day-now`,
                                            },
                                            '\u4ECA\u5929'
                                        )
                                      : null
                              ),
                              lunarCalendarDay
                                  ? (0, vue_1.h)(
                                        'div',
                                        {
                                            class: `${mergedClsPrefix}-calendar-card__date-info`,
                                        },
                                        (0, vue_1.h)(
                                            'div',
                                            null,
                                            lunarCalendarDay.calendar.IMonthCn,
                                            ' ',
                                            lunarCalendarDay.calendar.IDayCn
                                        ),
                                        (0, vue_1.h)(
                                            'div',
                                            null,
                                            lunarCalendarDay.calendar.gzYear,
                                            '\u5E74',
                                            ' ',
                                            lunarCalendarDay.calendar.Animal
                                        ),
                                        (0, vue_1.h)(
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
                                                (0, vue_1.h)(
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
                          (0, vue_1.h)(
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
