Object.defineProperty(exports, '__esModule', { value: true });
exports.useDualCalendarProps = exports.useDualCalendar = void 0;
const vue_1 = require('vue');
const date_fns_1 = require('date-fns');
const utils_1 = require('../utils');
const use_panel_common_1 = require('./use-panel-common');
const interface_1 = require('../interface');
const config_1 = require('../config');
const useDualCalendarProps = Object.assign(
    Object.assign({}, use_panel_common_1.usePanelCommonProps),
    {
        defaultCalendarStartTime: Number,
        defaultCalendarEndTime: Number,
        bindCalendarMonths: Boolean,
        actions: {
            type: Array,
            default: () => ['clear', 'confirm'],
        },
    }
);
exports.useDualCalendarProps = useDualCalendarProps;
function useDualCalendar(props, type) {
    var _a, _b;
    const {
        isDateDisabledRef,
        isStartHourDisabledRef,
        isEndHourDisabledRef,
        isStartMinuteDisabledRef,
        isEndMinuteDisabledRef,
        isStartSecondDisabledRef,
        isEndSecondDisabledRef,
        isStartDateInvalidRef,
        isEndDateInvalidRef,
        isStartTimeInvalidRef,
        isEndTimeInvalidRef,
        isStartValueInvalidRef,
        isEndValueInvalidRef,
        isRangeInvalidRef,
        localeRef,
        rangesRef,
        closeOnSelectRef,
        updateValueOnCloseRef,
        firstDayOfWeekRef,
        datePickerSlots,
    } = (0, vue_1.inject)(interface_1.datePickerInjectionKey);
    const validation = {
        isDateDisabled: isDateDisabledRef,
        isStartHourDisabled: isStartHourDisabledRef,
        isEndHourDisabled: isEndHourDisabledRef,
        isStartMinuteDisabled: isStartMinuteDisabledRef,
        isEndMinuteDisabled: isEndMinuteDisabledRef,
        isStartSecondDisabled: isStartSecondDisabledRef,
        isEndSecondDisabled: isEndSecondDisabledRef,
        isStartDateInvalid: isStartDateInvalidRef,
        isEndDateInvalid: isEndDateInvalidRef,
        isStartTimeInvalid: isStartTimeInvalidRef,
        isEndTimeInvalid: isEndTimeInvalidRef,
        isStartValueInvalid: isStartValueInvalidRef,
        isEndValueInvalid: isEndValueInvalidRef,
        isRangeInvalid: isRangeInvalidRef,
    };
    const panelCommon = (0, use_panel_common_1.usePanelCommon)(props);
    const startDatesElRef = (0, vue_1.ref)(null);
    const endDatesElRef = (0, vue_1.ref)(null);
    const startYearScrollbarRef = (0, vue_1.ref)(null);
    const endYearScrollbarRef = (0, vue_1.ref)(null);
    const startYearVlRef = (0, vue_1.ref)(null);
    const endYearVlRef = (0, vue_1.ref)(null);
    const startMonthScrollbarRef = (0, vue_1.ref)(null);
    const endMonthScrollbarRef = (0, vue_1.ref)(null);
    const { value } = props;
    const defaultCalendarStartTime =
        (_a = props.defaultCalendarStartTime) !== null && _a !== void 0
            ? _a
            : Array.isArray(value) && typeof value[0] === 'number'
            ? value[0]
            : Date.now();
    const startCalendarDateTimeRef = (0, vue_1.ref)(defaultCalendarStartTime);
    const endCalendarDateTimeRef = (0, vue_1.ref)(
        (_b = props.defaultCalendarEndTime) !== null && _b !== void 0
            ? _b
            : Array.isArray(value) && typeof value[1] === 'number'
            ? value[1]
            : (0, date_fns_1.getTime)(
                  (0, date_fns_1.addMonths)(defaultCalendarStartTime, 1)
              )
    );
    adjustCalendarTimes(true);
    const nowRef = (0, vue_1.ref)(Date.now());
    const isSelectingRef = (0, vue_1.ref)(false);
    const memorizedStartDateTimeRef = (0, vue_1.ref)(0);
    const mergedDateFormatRef = (0, vue_1.computed)(
        () => props.dateFormat || localeRef.value.dateFormat
    );
    const startDateInput = (0, vue_1.ref)(
        Array.isArray(value)
            ? (0, date_fns_1.format)(
                  value[0],
                  mergedDateFormatRef.value,
                  panelCommon.dateFnsOptions.value
              )
            : ''
    );
    const endDateInputRef = (0, vue_1.ref)(
        Array.isArray(value)
            ? (0, date_fns_1.format)(
                  value[1],
                  mergedDateFormatRef.value,
                  panelCommon.dateFnsOptions.value
              )
            : ''
    );
    const selectingPhaseRef = (0, vue_1.computed)(() => {
        if (isSelectingRef.value) return 'end';
        else return 'start';
    });
    const startDateArrayRef = (0, vue_1.computed)(() => {
        var _a2;
        return (0, utils_1.dateArray)(
            startCalendarDateTimeRef.value,
            props.value,
            nowRef.value,
            (_a2 = firstDayOfWeekRef.value) !== null && _a2 !== void 0
                ? _a2
                : localeRef.value.firstDayOfWeek
        );
    });
    const endDateArrayRef = (0, vue_1.computed)(() => {
        var _a2;
        return (0, utils_1.dateArray)(
            endCalendarDateTimeRef.value,
            props.value,
            nowRef.value,
            (_a2 = firstDayOfWeekRef.value) !== null && _a2 !== void 0
                ? _a2
                : localeRef.value.firstDayOfWeek
        );
    });
    const weekdaysRef = (0, vue_1.computed)(() => {
        return startDateArrayRef.value.slice(0, 7).map((dateItem) => {
            const { ts } = dateItem;
            return (0, date_fns_1.format)(
                ts,
                localeRef.value.dayFormat,
                panelCommon.dateFnsOptions.value
            );
        });
    });
    const startCalendarMonthRef = (0, vue_1.computed)(() => {
        return (0, date_fns_1.format)(
            startCalendarDateTimeRef.value,
            localeRef.value.monthFormat,
            panelCommon.dateFnsOptions.value
        );
    });
    const endCalendarMonthRef = (0, vue_1.computed)(() => {
        return (0, date_fns_1.format)(
            endCalendarDateTimeRef.value,
            localeRef.value.monthFormat,
            panelCommon.dateFnsOptions.value
        );
    });
    const startCalendarYearRef = (0, vue_1.computed)(() => {
        return (0, date_fns_1.format)(
            startCalendarDateTimeRef.value,
            localeRef.value.yearFormat,
            panelCommon.dateFnsOptions.value
        );
    });
    const endCalendarYearRef = (0, vue_1.computed)(() => {
        return (0, date_fns_1.format)(
            endCalendarDateTimeRef.value,
            localeRef.value.yearFormat,
            panelCommon.dateFnsOptions.value
        );
    });
    const startTimeValueRef = (0, vue_1.computed)(() => {
        const { value: value2 } = props;
        if (Array.isArray(value2)) return value2[0];
        return null;
    });
    const endTimeValueRef = (0, vue_1.computed)(() => {
        const { value: value2 } = props;
        if (Array.isArray(value2)) return value2[1];
        return null;
    });
    const shortcutsRef = (0, vue_1.computed)(() => {
        const { shortcuts } = props;
        return shortcuts || rangesRef.value;
    });
    const startYearArrayRef = (0, vue_1.computed)(() => {
        return (0, utils_1.yearArray)(
            (0, utils_1.pluckValueFromRange)(props.value, 'start'),
            nowRef.value
        );
    });
    const endYearArrayRef = (0, vue_1.computed)(() => {
        return (0, utils_1.yearArray)(
            (0, utils_1.pluckValueFromRange)(props.value, 'end'),
            nowRef.value
        );
    });
    const startQuarterArrayRef = (0, vue_1.computed)(() => {
        const startValue = (0, utils_1.pluckValueFromRange)(
            props.value,
            'start'
        );
        return (0, utils_1.quarterArray)(
            startValue !== null && startValue !== void 0
                ? startValue
                : Date.now(),
            startValue,
            nowRef.value
        );
    });
    const endQuarterArrayRef = (0, vue_1.computed)(() => {
        const endValue = (0, utils_1.pluckValueFromRange)(props.value, 'end');
        return (0, utils_1.quarterArray)(
            endValue !== null && endValue !== void 0 ? endValue : Date.now(),
            endValue,
            nowRef.value
        );
    });
    const startMonthArrayRef = (0, vue_1.computed)(() => {
        const startValue = (0, utils_1.pluckValueFromRange)(
            props.value,
            'start'
        );
        return (0, utils_1.monthArray)(
            startValue !== null && startValue !== void 0
                ? startValue
                : Date.now(),
            startValue,
            nowRef.value
        );
    });
    const endMonthArrayRef = (0, vue_1.computed)(() => {
        const endValue = (0, utils_1.pluckValueFromRange)(props.value, 'end');
        return (0, utils_1.monthArray)(
            endValue !== null && endValue !== void 0 ? endValue : Date.now(),
            endValue,
            nowRef.value
        );
    });
    (0, vue_1.watch)(
        (0, vue_1.computed)(() => props.value),
        (value2) => {
            if (value2 !== null && Array.isArray(value2)) {
                const [startMoment, endMoment] = value2;
                startDateInput.value = (0, date_fns_1.format)(
                    startMoment,
                    mergedDateFormatRef.value,
                    panelCommon.dateFnsOptions.value
                );
                endDateInputRef.value = (0, date_fns_1.format)(
                    endMoment,
                    mergedDateFormatRef.value,
                    panelCommon.dateFnsOptions.value
                );
                if (!isSelectingRef.value) {
                    syncCalendarTimeWithValue(value2);
                }
            } else {
                startDateInput.value = '';
                endDateInputRef.value = '';
            }
        }
    );
    function handleCalendarChange(value2, oldValue) {
        if (type === 'daterange' || type === 'datetimerange') {
            if (
                (0, date_fns_1.getYear)(value2) !==
                    (0, date_fns_1.getYear)(oldValue) ||
                (0, date_fns_1.getMonth)(value2) !==
                    (0, date_fns_1.getMonth)(oldValue)
            ) {
                panelCommon.disableTransitionOneTick();
            }
        }
    }
    (0, vue_1.watch)(startCalendarDateTimeRef, handleCalendarChange);
    (0, vue_1.watch)(endCalendarDateTimeRef, handleCalendarChange);
    function adjustCalendarTimes(byStartCalendarTime) {
        const startTime = (0, date_fns_1.startOfMonth)(
            startCalendarDateTimeRef.value
        );
        const endTime = (0, date_fns_1.startOfMonth)(
            endCalendarDateTimeRef.value
        );
        if (props.bindCalendarMonths || startTime >= endTime) {
            if (byStartCalendarTime) {
                endCalendarDateTimeRef.value = (0, date_fns_1.getTime)(
                    (0, date_fns_1.addMonths)(startTime, 1)
                );
            } else {
                startCalendarDateTimeRef.value = (0, date_fns_1.getTime)(
                    (0, date_fns_1.addMonths)(endTime, -1)
                );
            }
        }
    }
    function startCalendarNextYear() {
        startCalendarDateTimeRef.value = (0, date_fns_1.getTime)(
            (0, date_fns_1.addMonths)(startCalendarDateTimeRef.value, 12)
        );
        adjustCalendarTimes(true);
    }
    function startCalendarPrevYear() {
        startCalendarDateTimeRef.value = (0, date_fns_1.getTime)(
            (0, date_fns_1.addMonths)(startCalendarDateTimeRef.value, -12)
        );
        adjustCalendarTimes(true);
    }
    function startCalendarNextMonth() {
        startCalendarDateTimeRef.value = (0, date_fns_1.getTime)(
            (0, date_fns_1.addMonths)(startCalendarDateTimeRef.value, 1)
        );
        adjustCalendarTimes(true);
    }
    function startCalendarPrevMonth() {
        startCalendarDateTimeRef.value = (0, date_fns_1.getTime)(
            (0, date_fns_1.addMonths)(startCalendarDateTimeRef.value, -1)
        );
        adjustCalendarTimes(true);
    }
    function endCalendarNextYear() {
        endCalendarDateTimeRef.value = (0, date_fns_1.getTime)(
            (0, date_fns_1.addMonths)(endCalendarDateTimeRef.value, 12)
        );
        adjustCalendarTimes(false);
    }
    function endCalendarPrevYear() {
        endCalendarDateTimeRef.value = (0, date_fns_1.getTime)(
            (0, date_fns_1.addMonths)(endCalendarDateTimeRef.value, -12)
        );
        adjustCalendarTimes(false);
    }
    function endCalendarNextMonth() {
        endCalendarDateTimeRef.value = (0, date_fns_1.getTime)(
            (0, date_fns_1.addMonths)(endCalendarDateTimeRef.value, 1)
        );
        adjustCalendarTimes(false);
    }
    function endCalendarPrevMonth() {
        endCalendarDateTimeRef.value = (0, date_fns_1.getTime)(
            (0, date_fns_1.addMonths)(endCalendarDateTimeRef.value, -1)
        );
        adjustCalendarTimes(false);
    }
    function onUpdateStartCalendarValue(value2) {
        startCalendarDateTimeRef.value = value2;
        adjustCalendarTimes(true);
    }
    function onUpdateEndCalendarValue(value2) {
        endCalendarDateTimeRef.value = value2;
        adjustCalendarTimes(false);
    }
    function mergedIsDateDisabled(ts) {
        const isDateDisabled = isDateDisabledRef.value;
        if (!isDateDisabled) return false;
        if (!Array.isArray(props.value))
            return isDateDisabled(ts, 'start', null);
        if (selectingPhaseRef.value === 'start') {
            return isDateDisabled(ts, 'start', null);
        } else {
            const { value: memorizedStartDateTime } = memorizedStartDateTimeRef;
            if (ts < memorizedStartDateTimeRef.value) {
                return isDateDisabled(ts, 'start', [
                    memorizedStartDateTime,
                    memorizedStartDateTime,
                ]);
            } else {
                return isDateDisabled(ts, 'end', [
                    memorizedStartDateTime,
                    memorizedStartDateTime,
                ]);
            }
        }
    }
    function syncCalendarTimeWithValue(value2) {
        if (value2 === null) return;
        const [startMoment, endMoment] = value2;
        startCalendarDateTimeRef.value = startMoment;
        if (
            (0, date_fns_1.startOfMonth)(endMoment) <=
            (0, date_fns_1.startOfMonth)(startMoment)
        ) {
            endCalendarDateTimeRef.value = (0, date_fns_1.getTime)(
                (0, date_fns_1.startOfMonth)(
                    (0, date_fns_1.addMonths)(startMoment, 1)
                )
            );
        } else {
            endCalendarDateTimeRef.value = (0, date_fns_1.getTime)(
                (0, date_fns_1.startOfMonth)(endMoment)
            );
        }
    }
    function handleDateClick(dateItem) {
        if (!isSelectingRef.value) {
            isSelectingRef.value = true;
            memorizedStartDateTimeRef.value = dateItem.ts;
            changeStartEndTime(dateItem.ts, dateItem.ts, 'done');
        } else {
            isSelectingRef.value = false;
            const { value: value2 } = props;
            if (props.panel && Array.isArray(value2)) {
                changeStartEndTime(value2[0], value2[1], 'done');
            } else {
                if (closeOnSelectRef.value && type === 'daterange') {
                    if (updateValueOnCloseRef.value) {
                        closeCalendar();
                    } else {
                        handleConfirmClick();
                    }
                }
            }
        }
    }
    function handleDateMouseEnter(dateItem) {
        if (isSelectingRef.value) {
            if (mergedIsDateDisabled(dateItem.ts)) return;
            if (dateItem.ts >= memorizedStartDateTimeRef.value) {
                changeStartEndTime(
                    memorizedStartDateTimeRef.value,
                    dateItem.ts,
                    'wipPreview'
                );
            } else {
                changeStartEndTime(
                    dateItem.ts,
                    memorizedStartDateTimeRef.value,
                    'wipPreview'
                );
            }
        }
    }
    function handleConfirmClick() {
        if (isRangeInvalidRef.value) {
            return;
        }
        panelCommon.doConfirm();
        closeCalendar();
    }
    function closeCalendar() {
        isSelectingRef.value = false;
        if (props.active) {
            panelCommon.doClose();
        }
    }
    function changeStartDateTime(time) {
        if (typeof time !== 'number') {
            time = (0, date_fns_1.getTime)(time);
        }
        if (props.value === null) {
            panelCommon.doUpdateValue([time, time], props.panel);
        } else if (Array.isArray(props.value)) {
            panelCommon.doUpdateValue(
                [time, Math.max(props.value[1], time)],
                props.panel
            );
        }
    }
    function changeEndDateTime(time) {
        if (typeof time !== 'number') {
            time = (0, date_fns_1.getTime)(time);
        }
        if (props.value === null) {
            panelCommon.doUpdateValue([time, time], props.panel);
        } else if (Array.isArray(props.value)) {
            panelCommon.doUpdateValue(
                [Math.min(props.value[0], time), time],
                props.panel
            );
        }
    }
    function changeStartEndTime(startTime, endTime, source) {
        if (typeof startTime !== 'number') {
            startTime = (0, date_fns_1.getTime)(startTime);
        }
        if (source !== 'shortcutPreview') {
            let startDefaultTime;
            let endDefaultTime;
            if (type === 'datetimerange') {
                const { defaultTime } = props;
                if (Array.isArray(defaultTime)) {
                    startDefaultTime = (0, utils_1.getDefaultTime)(
                        defaultTime[0]
                    );
                    endDefaultTime = (0, utils_1.getDefaultTime)(
                        defaultTime[1]
                    );
                } else {
                    startDefaultTime = (0, utils_1.getDefaultTime)(defaultTime);
                    endDefaultTime = startDefaultTime;
                }
            }
            if (startDefaultTime) {
                startTime = (0, date_fns_1.getTime)(
                    (0, date_fns_1.set)(startTime, startDefaultTime)
                );
            }
            if (endDefaultTime) {
                endTime = (0, date_fns_1.getTime)(
                    (0, date_fns_1.set)(endTime, endDefaultTime)
                );
            }
        }
        panelCommon.doUpdateValue(
            [startTime, endTime],
            props.panel && source === 'done'
        );
    }
    function sanitizeValue(datetime) {
        if (type === 'datetimerange') {
            return (0, date_fns_1.getTime)(
                (0, date_fns_1.startOfSecond)(datetime)
            );
        } else if (type === 'monthrange') {
            return (0, date_fns_1.getTime)(
                (0, date_fns_1.startOfMonth)(datetime)
            );
        } else {
            return (0, date_fns_1.getTime)(
                (0, date_fns_1.startOfDay)(datetime)
            );
        }
    }
    function handleStartDateInput(value2) {
        const date = (0, utils_1.strictParse)(
            value2,
            mergedDateFormatRef.value,
            new Date(),
            panelCommon.dateFnsOptions.value
        );
        if ((0, date_fns_1.isValid)(date)) {
            if (!props.value) {
                const newValue = (0, date_fns_1.set)(new Date(), {
                    year: (0, date_fns_1.getYear)(date),
                    month: (0, date_fns_1.getMonth)(date),
                    date: (0, date_fns_1.getDate)(date),
                });
                changeStartDateTime(
                    sanitizeValue((0, date_fns_1.getTime)(newValue))
                );
            } else if (Array.isArray(props.value)) {
                const newValue = (0, date_fns_1.set)(props.value[0], {
                    year: (0, date_fns_1.getYear)(date),
                    month: (0, date_fns_1.getMonth)(date),
                    date: (0, date_fns_1.getDate)(date),
                });
                changeStartDateTime(
                    sanitizeValue((0, date_fns_1.getTime)(newValue))
                );
            }
        } else {
            startDateInput.value = value2;
        }
    }
    function handleEndDateInput(value2) {
        const date = (0, utils_1.strictParse)(
            value2,
            mergedDateFormatRef.value,
            new Date(),
            panelCommon.dateFnsOptions.value
        );
        if ((0, date_fns_1.isValid)(date)) {
            if (props.value === null) {
                const newValue = (0, date_fns_1.set)(new Date(), {
                    year: (0, date_fns_1.getYear)(date),
                    month: (0, date_fns_1.getMonth)(date),
                    date: (0, date_fns_1.getDate)(date),
                });
                changeEndDateTime(
                    sanitizeValue((0, date_fns_1.getTime)(newValue))
                );
            } else if (Array.isArray(props.value)) {
                const newValue = (0, date_fns_1.set)(props.value[1], {
                    year: (0, date_fns_1.getYear)(date),
                    month: (0, date_fns_1.getMonth)(date),
                    date: (0, date_fns_1.getDate)(date),
                });
                changeEndDateTime(
                    sanitizeValue((0, date_fns_1.getTime)(newValue))
                );
            }
        } else {
            endDateInputRef.value = value2;
        }
    }
    function handleStartDateInputBlur() {
        const date = (0, utils_1.strictParse)(
            startDateInput.value,
            mergedDateFormatRef.value,
            new Date(),
            panelCommon.dateFnsOptions.value
        );
        const { value: value2 } = props;
        if ((0, date_fns_1.isValid)(date)) {
            if (value2 === null) {
                const newValue = (0, date_fns_1.set)(new Date(), {
                    year: (0, date_fns_1.getYear)(date),
                    month: (0, date_fns_1.getMonth)(date),
                    date: (0, date_fns_1.getDate)(date),
                });
                changeStartDateTime(
                    sanitizeValue((0, date_fns_1.getTime)(newValue))
                );
            } else if (Array.isArray(value2)) {
                const newValue = (0, date_fns_1.set)(value2[0], {
                    year: (0, date_fns_1.getYear)(date),
                    month: (0, date_fns_1.getMonth)(date),
                    date: (0, date_fns_1.getDate)(date),
                });
                changeStartDateTime(
                    sanitizeValue((0, date_fns_1.getTime)(newValue))
                );
            }
        } else {
            refreshDisplayDateString();
        }
    }
    function handleEndDateInputBlur() {
        const date = (0, utils_1.strictParse)(
            endDateInputRef.value,
            mergedDateFormatRef.value,
            new Date(),
            panelCommon.dateFnsOptions.value
        );
        const { value: value2 } = props;
        if ((0, date_fns_1.isValid)(date)) {
            if (value2 === null) {
                const newValue = (0, date_fns_1.set)(new Date(), {
                    year: (0, date_fns_1.getYear)(date),
                    month: (0, date_fns_1.getMonth)(date),
                    date: (0, date_fns_1.getDate)(date),
                });
                changeEndDateTime(
                    sanitizeValue((0, date_fns_1.getTime)(newValue))
                );
            } else if (Array.isArray(value2)) {
                const newValue = (0, date_fns_1.set)(value2[1], {
                    year: (0, date_fns_1.getYear)(date),
                    month: (0, date_fns_1.getMonth)(date),
                    date: (0, date_fns_1.getDate)(date),
                });
                changeEndDateTime(
                    sanitizeValue((0, date_fns_1.getTime)(newValue))
                );
            }
        } else {
            refreshDisplayDateString();
        }
    }
    function refreshDisplayDateString(times) {
        const { value: value2 } = props;
        if (value2 === null || !Array.isArray(value2)) {
            startDateInput.value = '';
            endDateInputRef.value = '';
            return;
        }
        if (times === void 0) {
            times = value2;
        }
        startDateInput.value = (0, date_fns_1.format)(
            times[0],
            mergedDateFormatRef.value,
            panelCommon.dateFnsOptions.value
        );
        endDateInputRef.value = (0, date_fns_1.format)(
            times[1],
            mergedDateFormatRef.value,
            panelCommon.dateFnsOptions.value
        );
    }
    function handleStartTimePickerChange(value2) {
        if (value2 === null) return;
        changeStartDateTime(value2);
    }
    function handleEndTimePickerChange(value2) {
        if (value2 === null) return;
        changeEndDateTime(value2);
    }
    function handleRangeShortcutMouseenter(shortcut) {
        panelCommon.cachePendingValue();
        const shortcutValue = panelCommon.getShortcutValue(shortcut);
        if (!Array.isArray(shortcutValue)) return;
        changeStartEndTime(
            shortcutValue[0],
            shortcutValue[1],
            'shortcutPreview'
        );
    }
    function handleRangeShortcutClick(shortcut) {
        const shortcutValue = panelCommon.getShortcutValue(shortcut);
        if (!Array.isArray(shortcutValue)) return;
        changeStartEndTime(shortcutValue[0], shortcutValue[1], 'done');
        panelCommon.clearPendingValue();
        handleConfirmClick();
    }
    function justifyColumnsScrollState(value2, type2) {
        const mergedValue = value2 === void 0 ? props.value : value2;
        if (value2 === void 0 || type2 === 'start') {
            if (startMonthScrollbarRef.value) {
                const monthIndex = !Array.isArray(mergedValue)
                    ? (0, date_fns_1.getMonth)(Date.now())
                    : (0, date_fns_1.getMonth)(mergedValue[0]);
                startMonthScrollbarRef.value.scrollTo({
                    debounce: false,
                    index: monthIndex,
                    elSize: config_1.MONTH_ITEM_HEIGHT,
                });
            }
            if (startYearVlRef.value) {
                const yearIndex =
                    (!Array.isArray(mergedValue)
                        ? (0, date_fns_1.getYear)(Date.now())
                        : (0, date_fns_1.getYear)(mergedValue[0])) -
                    config_1.START_YEAR;
                startYearVlRef.value.scrollTo({
                    index: yearIndex,
                    debounce: false,
                });
            }
        }
        if (value2 === void 0 || type2 === 'end') {
            if (endMonthScrollbarRef.value) {
                const monthIndex = !Array.isArray(mergedValue)
                    ? (0, date_fns_1.getMonth)(Date.now())
                    : (0, date_fns_1.getMonth)(mergedValue[1]);
                endMonthScrollbarRef.value.scrollTo({
                    debounce: false,
                    index: monthIndex,
                    elSize: config_1.MONTH_ITEM_HEIGHT,
                });
            }
            if (endYearVlRef.value) {
                const yearIndex =
                    (!Array.isArray(mergedValue)
                        ? (0, date_fns_1.getYear)(Date.now())
                        : (0, date_fns_1.getYear)(mergedValue[1])) -
                    config_1.START_YEAR;
                endYearVlRef.value.scrollTo({
                    index: yearIndex,
                    debounce: false,
                });
            }
        }
    }
    function handleColItemClick(dateItem, clickType) {
        const { value: value2 } = props;
        const noCurrentValue = !Array.isArray(value2);
        const itemTs =
            dateItem.type === 'year' && type !== 'yearrange'
                ? noCurrentValue
                    ? (0, date_fns_1.set)(dateItem.ts, {
                          month: (0, date_fns_1.getMonth)(
                              type === 'quarterrange'
                                  ? (0, date_fns_1.startOfQuarter)(new Date())
                                  : new Date()
                          ),
                      }).valueOf()
                    : (0, date_fns_1.set)(dateItem.ts, {
                          month: (0, date_fns_1.getMonth)(
                              type === 'quarterrange'
                                  ? (0, date_fns_1.startOfQuarter)(
                                        value2[clickType === 'start' ? 0 : 1]
                                    )
                                  : value2[clickType === 'start' ? 0 : 1]
                          ),
                      }).valueOf()
                : dateItem.ts;
        if (noCurrentValue) {
            const partialValue = sanitizeValue(itemTs);
            const nextValue2 = [partialValue, partialValue];
            panelCommon.doUpdateValue(nextValue2, props.panel);
            justifyColumnsScrollState(nextValue2, 'start');
            justifyColumnsScrollState(nextValue2, 'end');
            panelCommon.disableTransitionOneTick();
            return;
        }
        const nextValue = [value2[0], value2[1]];
        let otherPartsChanged = false;
        if (clickType === 'start') {
            nextValue[0] = sanitizeValue(itemTs);
            if (nextValue[0] > nextValue[1]) {
                nextValue[1] = nextValue[0];
                otherPartsChanged = true;
            }
        } else {
            nextValue[1] = sanitizeValue(itemTs);
            if (nextValue[0] > nextValue[1]) {
                nextValue[0] = nextValue[1];
                otherPartsChanged = true;
            }
        }
        panelCommon.doUpdateValue(nextValue, props.panel);
        switch (type) {
            case 'monthrange':
            case 'quarterrange':
                panelCommon.disableTransitionOneTick();
                if (otherPartsChanged) {
                    justifyColumnsScrollState(nextValue, 'start');
                    justifyColumnsScrollState(nextValue, 'end');
                } else {
                    justifyColumnsScrollState(nextValue, clickType);
                }
                break;
            case 'yearrange':
                panelCommon.disableTransitionOneTick();
                justifyColumnsScrollState(nextValue, 'start');
                justifyColumnsScrollState(nextValue, 'end');
        }
    }
    function handleStartYearVlScroll() {
        var _a2;
        (_a2 = startYearScrollbarRef.value) === null || _a2 === void 0
            ? void 0
            : _a2.sync();
    }
    function handleEndYearVlScroll() {
        var _a2;
        (_a2 = endYearScrollbarRef.value) === null || _a2 === void 0
            ? void 0
            : _a2.sync();
    }
    function virtualListContainer(type2) {
        var _a2, _b2;
        if (type2 === 'start') {
            return (_a2 = startYearVlRef.value) === null || _a2 === void 0
                ? void 0
                : _a2.listElRef;
        } else {
            return (_b2 = endYearVlRef.value) === null || _b2 === void 0
                ? void 0
                : _b2.listElRef;
        }
    }
    function virtualListContent(type2) {
        var _a2, _b2;
        if (type2 === 'start') {
            return (_a2 = startYearVlRef.value) === null || _a2 === void 0
                ? void 0
                : _a2.itemsElRef;
        } else {
            return (_b2 = endYearVlRef.value) === null || _b2 === void 0
                ? void 0
                : _b2.itemsElRef;
        }
    }
    const childComponentRefs = {
        startYearVlRef,
        endYearVlRef,
        startMonthScrollbarRef,
        endMonthScrollbarRef,
        startYearScrollbarRef,
        endYearScrollbarRef,
    };
    return Object.assign(
        Object.assign(
            Object.assign(
                Object.assign(
                    {
                        startDatesElRef,
                        endDatesElRef,
                        handleDateClick,
                        handleColItemClick,
                        handleDateMouseEnter,
                        handleConfirmClick,
                        startCalendarPrevYear,
                        startCalendarPrevMonth,
                        startCalendarNextYear,
                        startCalendarNextMonth,
                        endCalendarPrevYear,
                        endCalendarPrevMonth,
                        endCalendarNextMonth,
                        endCalendarNextYear,
                        mergedIsDateDisabled,
                        changeStartEndTime,
                        ranges: rangesRef,
                        startCalendarMonth: startCalendarMonthRef,
                        startCalendarYear: startCalendarYearRef,
                        endCalendarMonth: endCalendarMonthRef,
                        endCalendarYear: endCalendarYearRef,
                        weekdays: weekdaysRef,
                        startDateArray: startDateArrayRef,
                        endDateArray: endDateArrayRef,
                        startYearArray: startYearArrayRef,
                        startMonthArray: startMonthArrayRef,
                        startQuarterArray: startQuarterArrayRef,
                        endYearArray: endYearArrayRef,
                        endMonthArray: endMonthArrayRef,
                        endQuarterArray: endQuarterArrayRef,
                        isSelecting: isSelectingRef,
                        handleRangeShortcutMouseenter,
                        handleRangeShortcutClick,
                    },
                    panelCommon
                ),
                validation
            ),
            childComponentRefs
        ),
        {
            startDateDisplayString: startDateInput,
            endDateInput: endDateInputRef,
            timePickerSize: panelCommon.timePickerSize,
            startTimeValue: startTimeValueRef,
            endTimeValue: endTimeValueRef,
            datePickerSlots,
            shortcuts: shortcutsRef,
            startCalendarDateTime: startCalendarDateTimeRef,
            endCalendarDateTime: endCalendarDateTimeRef,
            justifyColumnsScrollState,
            handleFocusDetectorFocus: panelCommon.handleFocusDetectorFocus,
            handleStartTimePickerChange,
            handleEndTimePickerChange,
            handleStartDateInput,
            handleStartDateInputBlur,
            handleEndDateInput,
            handleEndDateInputBlur,
            handleStartYearVlScroll,
            handleEndYearVlScroll,
            virtualListContainer,
            virtualListContent,
            onUpdateStartCalendarValue,
            onUpdateEndCalendarValue,
        }
    );
}
exports.useDualCalendar = useDualCalendar;
