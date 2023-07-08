Object.defineProperty(exports, '__esModule', { value: true });
exports.useCalendarProps = exports.useCalendar = void 0;
const vue_1 = require('vue');
const date_fns_1 = require('date-fns');
const utils_1 = require('../utils');
const interface_1 = require('../interface');
const use_panel_common_1 = require('./use-panel-common');
const config_1 = require('../config');
const useCalendarProps = Object.assign(
    Object.assign({}, use_panel_common_1.usePanelCommonProps),
    {
        actions: {
            type: Array,
            default: () => ['now', 'clear', 'confirm'],
        },
    }
);
exports.useCalendarProps = useCalendarProps;
function useCalendar(props, type) {
    const panelCommon = (0, use_panel_common_1.usePanelCommon)(props);
    const {
        isValueInvalidRef,
        isDateDisabledRef,
        isDateInvalidRef,
        isTimeInvalidRef,
        isDateTimeInvalidRef,
        isHourDisabledRef,
        isMinuteDisabledRef,
        isSecondDisabledRef,
        localeRef,
        firstDayOfWeekRef,
        datePickerSlots,
    } = (0, vue_1.inject)(interface_1.datePickerInjectionKey);
    const validation = {
        isValueInvalid: isValueInvalidRef,
        isDateDisabled: isDateDisabledRef,
        isDateInvalid: isDateInvalidRef,
        isTimeInvalid: isTimeInvalidRef,
        isDateTimeInvalid: isDateTimeInvalidRef,
        isHourDisabled: isHourDisabledRef,
        isMinuteDisabled: isMinuteDisabledRef,
        isSecondDisabled: isSecondDisabledRef,
    };
    const mergedDateFormatRef = (0, vue_1.computed)(
        () => props.dateFormat || localeRef.value.dateFormat
    );
    const dateInputValueRef = (0, vue_1.ref)(
        props.value === null || Array.isArray(props.value)
            ? ''
            : (0, date_fns_1.format)(props.value, mergedDateFormatRef.value)
    );
    const calendarValueRef = (0, vue_1.ref)(
        props.value === null || Array.isArray(props.value)
            ? Date.now()
            : props.value
    );
    const yearVlRef = (0, vue_1.ref)(null);
    const yearScrollbarRef = (0, vue_1.ref)(null);
    const monthScrollbarRef = (0, vue_1.ref)(null);
    const nowRef = (0, vue_1.ref)(Date.now());
    const dateArrayRef = (0, vue_1.computed)(() => {
        var _a;
        return (0, utils_1.dateArray)(
            calendarValueRef.value,
            props.value,
            nowRef.value,
            (_a = firstDayOfWeekRef.value) !== null && _a !== void 0
                ? _a
                : localeRef.value.firstDayOfWeek
        );
    });
    const monthArrayRef = (0, vue_1.computed)(() => {
        const { value } = props;
        return (0, utils_1.monthArray)(
            calendarValueRef.value,
            Array.isArray(value) ? null : value,
            nowRef.value
        );
    });
    const yearArrayRef = (0, vue_1.computed)(() => {
        const { value } = props;
        return (0, utils_1.yearArray)(
            Array.isArray(value) ? null : value,
            nowRef.value
        );
    });
    const quarterArrayRef = (0, vue_1.computed)(() => {
        const { value } = props;
        return (0, utils_1.quarterArray)(
            calendarValueRef.value,
            Array.isArray(value) ? null : value,
            nowRef.value
        );
    });
    const weekdaysRef = (0, vue_1.computed)(() => {
        return dateArrayRef.value.slice(0, 7).map((dateItem) => {
            const { ts } = dateItem;
            return (0, date_fns_1.format)(
                ts,
                localeRef.value.dayFormat,
                panelCommon.dateFnsOptions.value
            );
        });
    });
    const calendarMonthRef = (0, vue_1.computed)(() => {
        return (0, date_fns_1.format)(
            calendarValueRef.value,
            localeRef.value.monthFormat,
            panelCommon.dateFnsOptions.value
        );
    });
    const calendarYearRef = (0, vue_1.computed)(() => {
        return (0, date_fns_1.format)(
            calendarValueRef.value,
            localeRef.value.yearFormat,
            panelCommon.dateFnsOptions.value
        );
    });
    (0, vue_1.watch)(calendarValueRef, (value, oldValue) => {
        if (type === 'date' || type === 'datetime') {
            if (!(0, date_fns_1.isSameMonth)(value, oldValue)) {
                panelCommon.disableTransitionOneTick();
            }
        }
    });
    (0, vue_1.watch)(
        (0, vue_1.computed)(() => props.value),
        (value) => {
            if (value !== null && !Array.isArray(value)) {
                dateInputValueRef.value = (0, date_fns_1.format)(
                    value,
                    mergedDateFormatRef.value,
                    panelCommon.dateFnsOptions.value
                );
                calendarValueRef.value = value;
            } else {
                dateInputValueRef.value = '';
            }
        }
    );
    function sanitizeValue(value) {
        if (type === 'datetime')
            return (0, date_fns_1.getTime)(
                (0, date_fns_1.startOfSecond)(value)
            );
        if (type === 'month')
            return (0, date_fns_1.getTime)((0, date_fns_1.startOfMonth)(value));
        if (type === 'year')
            return (0, date_fns_1.getTime)((0, date_fns_1.startOfYear)(value));
        if (type === 'quarter')
            return (0, date_fns_1.getTime)(
                (0, date_fns_1.startOfQuarter)(value)
            );
        return (0, date_fns_1.getTime)((0, date_fns_1.startOfDay)(value));
    }
    function mergedIsDateDisabled(ts) {
        const {
            isDateDisabled: { value: isDateDisabled },
        } = validation;
        if (!isDateDisabled) return false;
        return isDateDisabled(ts);
    }
    function handleDateInput(value) {
        const date = (0, utils_1.strictParse)(
            value,
            mergedDateFormatRef.value,
            new Date(),
            panelCommon.dateFnsOptions.value
        );
        if ((0, date_fns_1.isValid)(date)) {
            if (props.value === null) {
                panelCommon.doUpdateValue(
                    (0, date_fns_1.getTime)(sanitizeValue(Date.now())),
                    props.panel
                );
            } else if (!Array.isArray(props.value)) {
                const newDateTime = (0, date_fns_1.set)(props.value, {
                    year: (0, date_fns_1.getYear)(date),
                    month: (0, date_fns_1.getMonth)(date),
                    date: (0, date_fns_1.getDate)(date),
                });
                panelCommon.doUpdateValue(
                    (0, date_fns_1.getTime)(
                        sanitizeValue((0, date_fns_1.getTime)(newDateTime))
                    ),
                    props.panel
                );
            }
        } else {
            dateInputValueRef.value = value;
        }
    }
    function handleDateInputBlur() {
        const date = (0, utils_1.strictParse)(
            dateInputValueRef.value,
            mergedDateFormatRef.value,
            new Date(),
            panelCommon.dateFnsOptions.value
        );
        if ((0, date_fns_1.isValid)(date)) {
            if (props.value === null) {
                panelCommon.doUpdateValue(
                    (0, date_fns_1.getTime)(sanitizeValue(Date.now())),
                    false
                );
            } else if (!Array.isArray(props.value)) {
                const newDateTime = (0, date_fns_1.set)(props.value, {
                    year: (0, date_fns_1.getYear)(date),
                    month: (0, date_fns_1.getMonth)(date),
                    date: (0, date_fns_1.getDate)(date),
                });
                panelCommon.doUpdateValue(
                    (0, date_fns_1.getTime)(
                        sanitizeValue((0, date_fns_1.getTime)(newDateTime))
                    ),
                    false
                );
            }
        } else {
            deriveDateInputValue();
        }
    }
    function clearSelectedDateTime() {
        panelCommon.doUpdateValue(null, true);
        dateInputValueRef.value = '';
        panelCommon.doClose(true);
        panelCommon.handleClearClick();
    }
    function handleNowClick() {
        panelCommon.doUpdateValue(
            (0, date_fns_1.getTime)(sanitizeValue(Date.now())),
            true
        );
        const now = Date.now();
        calendarValueRef.value = now;
        panelCommon.doClose(true);
        if (
            props.panel &&
            (type === 'month' || type === 'quarter' || type === 'year')
        ) {
            panelCommon.disableTransitionOneTick();
            justifyColumnsScrollState(now);
        }
    }
    function handleDateClick(dateItem) {
        if (mergedIsDateDisabled(dateItem.ts)) {
            return;
        }
        let newValue;
        if (props.value !== null && !Array.isArray(props.value)) {
            newValue = props.value;
        } else {
            newValue = Date.now();
        }
        if (
            type === 'datetime' &&
            props.defaultTime !== null &&
            !Array.isArray(props.defaultTime)
        ) {
            const time = (0, utils_1.getDefaultTime)(props.defaultTime);
            if (time) {
                newValue = (0, date_fns_1.getTime)(
                    (0, date_fns_1.set)(newValue, time)
                );
            }
        }
        newValue = (0, date_fns_1.getTime)(
            dateItem.type === 'quarter' && dateItem.dateObject.quarter
                ? (0, date_fns_1.setQuarter)(
                      (0, date_fns_1.setYear)(
                          newValue,
                          dateItem.dateObject.year
                      ),
                      dateItem.dateObject.quarter
                  )
                : (0, date_fns_1.set)(newValue, dateItem.dateObject)
        );
        panelCommon.doUpdateValue(
            sanitizeValue(newValue),
            props.panel || type === 'date' || type === 'year'
        );
        switch (type) {
            case 'date':
                panelCommon.doClose();
                break;
            case 'year':
                if (props.panel) {
                    panelCommon.disableTransitionOneTick();
                }
                panelCommon.doClose();
                break;
            case 'month':
                panelCommon.disableTransitionOneTick();
                justifyColumnsScrollState(newValue);
                break;
            case 'quarter':
                panelCommon.disableTransitionOneTick();
                justifyColumnsScrollState(newValue);
                break;
        }
    }
    function handleQuickMonthClick(dateItem, updatePanelValue) {
        let newValue;
        if (props.value !== null && !Array.isArray(props.value)) {
            newValue = props.value;
        } else {
            newValue = Date.now();
        }
        newValue = (0, date_fns_1.getTime)(
            dateItem.type === 'month'
                ? (0, date_fns_1.setMonth)(newValue, dateItem.dateObject.month)
                : (0, date_fns_1.setYear)(newValue, dateItem.dateObject.year)
        );
        updatePanelValue(newValue);
        justifyColumnsScrollState(newValue);
    }
    function onUpdateCalendarValue(value) {
        calendarValueRef.value = value;
    }
    function deriveDateInputValue(time) {
        if (props.value === null || Array.isArray(props.value)) {
            dateInputValueRef.value = '';
            return;
        }
        if (time === void 0) {
            time = props.value;
        }
        dateInputValueRef.value = (0, date_fns_1.format)(
            time,
            mergedDateFormatRef.value,
            panelCommon.dateFnsOptions.value
        );
    }
    function handleConfirmClick() {
        if (validation.isDateInvalid.value || validation.isTimeInvalid.value) {
            return;
        }
        panelCommon.doConfirm();
        closeCalendar();
    }
    function closeCalendar() {
        if (props.active) {
            panelCommon.doClose();
        }
    }
    function nextYear() {
        calendarValueRef.value = (0, date_fns_1.getTime)(
            (0, date_fns_1.addYears)(calendarValueRef.value, 1)
        );
    }
    function prevYear() {
        calendarValueRef.value = (0, date_fns_1.getTime)(
            (0, date_fns_1.addYears)(calendarValueRef.value, -1)
        );
    }
    function nextMonth() {
        calendarValueRef.value = (0, date_fns_1.getTime)(
            (0, date_fns_1.addMonths)(calendarValueRef.value, 1)
        );
    }
    function prevMonth() {
        calendarValueRef.value = (0, date_fns_1.getTime)(
            (0, date_fns_1.addMonths)(calendarValueRef.value, -1)
        );
    }
    function virtualListContainer() {
        const { value } = yearVlRef;
        return value === null || value === void 0 ? void 0 : value.listElRef;
    }
    function virtualListContent() {
        const { value } = yearVlRef;
        return value === null || value === void 0 ? void 0 : value.itemsElRef;
    }
    function handleVirtualListScroll(e) {
        var _a;
        (_a = yearScrollbarRef.value) === null || _a === void 0
            ? void 0
            : _a.sync();
    }
    function handleTimePickerChange(value) {
        if (value === null) return;
        panelCommon.doUpdateValue(value, props.panel);
    }
    function handleSingleShortcutMouseenter(shortcut) {
        panelCommon.cachePendingValue();
        const shortcutValue = panelCommon.getShortcutValue(shortcut);
        if (typeof shortcutValue !== 'number') return;
        panelCommon.doUpdateValue(shortcutValue, false);
    }
    function handleSingleShortcutClick(shortcut) {
        const shortcutValue = panelCommon.getShortcutValue(shortcut);
        if (typeof shortcutValue !== 'number') return;
        panelCommon.doUpdateValue(shortcutValue, props.panel);
        panelCommon.clearPendingValue();
        handleConfirmClick();
    }
    function justifyColumnsScrollState(value) {
        const { value: mergedValue } = props;
        if (monthScrollbarRef.value) {
            const monthIndex =
                value === void 0
                    ? mergedValue === null
                        ? (0, date_fns_1.getMonth)(Date.now())
                        : (0, date_fns_1.getMonth)(mergedValue)
                    : (0, date_fns_1.getMonth)(value);
            monthScrollbarRef.value.scrollTo({
                top: monthIndex * config_1.MONTH_ITEM_HEIGHT,
            });
        }
        if (yearVlRef.value) {
            const yearIndex =
                (value === void 0
                    ? mergedValue === null
                        ? (0, date_fns_1.getYear)(Date.now())
                        : (0, date_fns_1.getYear)(mergedValue)
                    : (0, date_fns_1.getYear)(value)) - config_1.START_YEAR;
            yearVlRef.value.scrollTo({
                top: yearIndex * config_1.MONTH_ITEM_HEIGHT,
            });
        }
    }
    const childComponentRefs = {
        monthScrollbarRef,
        yearScrollbarRef,
        yearVlRef,
    };
    return Object.assign(
        Object.assign(
            Object.assign(
                Object.assign(
                    {
                        dateArray: dateArrayRef,
                        monthArray: monthArrayRef,
                        yearArray: yearArrayRef,
                        quarterArray: quarterArrayRef,
                        calendarYear: calendarYearRef,
                        calendarMonth: calendarMonthRef,
                        weekdays: weekdaysRef,
                        mergedIsDateDisabled,
                        nextYear,
                        prevYear,
                        nextMonth,
                        prevMonth,
                        handleNowClick,
                        handleConfirmClick,
                        handleSingleShortcutMouseenter,
                        handleSingleShortcutClick,
                    },
                    validation
                ),
                panelCommon
            ),
            childComponentRefs
        ),
        {
            handleDateClick,
            handleDateInputBlur,
            handleDateInput,
            handleTimePickerChange,
            clearSelectedDateTime,
            virtualListContainer,
            virtualListContent,
            handleVirtualListScroll,
            timePickerSize: panelCommon.timePickerSize,
            dateInputValue: dateInputValueRef,
            datePickerSlots,
            handleQuickMonthClick,
            justifyColumnsScrollState,
            calendarValue: calendarValueRef,
            onUpdateCalendarValue,
        }
    );
}
exports.useCalendar = useCalendar;
