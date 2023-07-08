import { inject, computed, watch, ref } from 'vue';
import {
    addMonths,
    format,
    getYear,
    getMonth,
    startOfMonth,
    isValid,
    startOfSecond,
    startOfDay,
    set,
    getDate,
    getTime,
    startOfQuarter,
} from 'date-fns';
import {
    dateArray,
    strictParse,
    yearArray,
    monthArray,
    getDefaultTime,
    pluckValueFromRange,
    quarterArray,
} from '../utils';
import { usePanelCommon, usePanelCommonProps } from './use-panel-common';
import { datePickerInjectionKey } from '../interface';
import { MONTH_ITEM_HEIGHT, START_YEAR } from '../config';
const useDualCalendarProps = Object.assign(
    Object.assign({}, usePanelCommonProps),
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
    } = inject(datePickerInjectionKey);
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
    const panelCommon = usePanelCommon(props);
    const startDatesElRef = ref(null);
    const endDatesElRef = ref(null);
    const startYearScrollbarRef = ref(null);
    const endYearScrollbarRef = ref(null);
    const startYearVlRef = ref(null);
    const endYearVlRef = ref(null);
    const startMonthScrollbarRef = ref(null);
    const endMonthScrollbarRef = ref(null);
    const { value } = props;
    const defaultCalendarStartTime =
        (_a = props.defaultCalendarStartTime) !== null && _a !== void 0
            ? _a
            : Array.isArray(value) && typeof value[0] === 'number'
            ? value[0]
            : Date.now();
    const startCalendarDateTimeRef = ref(defaultCalendarStartTime);
    const endCalendarDateTimeRef = ref(
        (_b = props.defaultCalendarEndTime) !== null && _b !== void 0
            ? _b
            : Array.isArray(value) && typeof value[1] === 'number'
            ? value[1]
            : getTime(addMonths(defaultCalendarStartTime, 1))
    );
    adjustCalendarTimes(true);
    const nowRef = ref(Date.now());
    const isSelectingRef = ref(false);
    const memorizedStartDateTimeRef = ref(0);
    const mergedDateFormatRef = computed(
        () => props.dateFormat || localeRef.value.dateFormat
    );
    const startDateInput = ref(
        Array.isArray(value)
            ? format(
                  value[0],
                  mergedDateFormatRef.value,
                  panelCommon.dateFnsOptions.value
              )
            : ''
    );
    const endDateInputRef = ref(
        Array.isArray(value)
            ? format(
                  value[1],
                  mergedDateFormatRef.value,
                  panelCommon.dateFnsOptions.value
              )
            : ''
    );
    const selectingPhaseRef = computed(() => {
        if (isSelectingRef.value) return 'end';
        else return 'start';
    });
    const startDateArrayRef = computed(() => {
        var _a2;
        return dateArray(
            startCalendarDateTimeRef.value,
            props.value,
            nowRef.value,
            (_a2 = firstDayOfWeekRef.value) !== null && _a2 !== void 0
                ? _a2
                : localeRef.value.firstDayOfWeek
        );
    });
    const endDateArrayRef = computed(() => {
        var _a2;
        return dateArray(
            endCalendarDateTimeRef.value,
            props.value,
            nowRef.value,
            (_a2 = firstDayOfWeekRef.value) !== null && _a2 !== void 0
                ? _a2
                : localeRef.value.firstDayOfWeek
        );
    });
    const weekdaysRef = computed(() => {
        return startDateArrayRef.value.slice(0, 7).map((dateItem) => {
            const { ts } = dateItem;
            return format(
                ts,
                localeRef.value.dayFormat,
                panelCommon.dateFnsOptions.value
            );
        });
    });
    const startCalendarMonthRef = computed(() => {
        return format(
            startCalendarDateTimeRef.value,
            localeRef.value.monthFormat,
            panelCommon.dateFnsOptions.value
        );
    });
    const endCalendarMonthRef = computed(() => {
        return format(
            endCalendarDateTimeRef.value,
            localeRef.value.monthFormat,
            panelCommon.dateFnsOptions.value
        );
    });
    const startCalendarYearRef = computed(() => {
        return format(
            startCalendarDateTimeRef.value,
            localeRef.value.yearFormat,
            panelCommon.dateFnsOptions.value
        );
    });
    const endCalendarYearRef = computed(() => {
        return format(
            endCalendarDateTimeRef.value,
            localeRef.value.yearFormat,
            panelCommon.dateFnsOptions.value
        );
    });
    const startTimeValueRef = computed(() => {
        const { value: value2 } = props;
        if (Array.isArray(value2)) return value2[0];
        return null;
    });
    const endTimeValueRef = computed(() => {
        const { value: value2 } = props;
        if (Array.isArray(value2)) return value2[1];
        return null;
    });
    const shortcutsRef = computed(() => {
        const { shortcuts } = props;
        return shortcuts || rangesRef.value;
    });
    const startYearArrayRef = computed(() => {
        return yearArray(
            pluckValueFromRange(props.value, 'start'),
            nowRef.value
        );
    });
    const endYearArrayRef = computed(() => {
        return yearArray(pluckValueFromRange(props.value, 'end'), nowRef.value);
    });
    const startQuarterArrayRef = computed(() => {
        const startValue = pluckValueFromRange(props.value, 'start');
        return quarterArray(
            startValue !== null && startValue !== void 0
                ? startValue
                : Date.now(),
            startValue,
            nowRef.value
        );
    });
    const endQuarterArrayRef = computed(() => {
        const endValue = pluckValueFromRange(props.value, 'end');
        return quarterArray(
            endValue !== null && endValue !== void 0 ? endValue : Date.now(),
            endValue,
            nowRef.value
        );
    });
    const startMonthArrayRef = computed(() => {
        const startValue = pluckValueFromRange(props.value, 'start');
        return monthArray(
            startValue !== null && startValue !== void 0
                ? startValue
                : Date.now(),
            startValue,
            nowRef.value
        );
    });
    const endMonthArrayRef = computed(() => {
        const endValue = pluckValueFromRange(props.value, 'end');
        return monthArray(
            endValue !== null && endValue !== void 0 ? endValue : Date.now(),
            endValue,
            nowRef.value
        );
    });
    watch(
        computed(() => props.value),
        (value2) => {
            if (value2 !== null && Array.isArray(value2)) {
                const [startMoment, endMoment] = value2;
                startDateInput.value = format(
                    startMoment,
                    mergedDateFormatRef.value,
                    panelCommon.dateFnsOptions.value
                );
                endDateInputRef.value = format(
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
                getYear(value2) !== getYear(oldValue) ||
                getMonth(value2) !== getMonth(oldValue)
            ) {
                panelCommon.disableTransitionOneTick();
            }
        }
    }
    watch(startCalendarDateTimeRef, handleCalendarChange);
    watch(endCalendarDateTimeRef, handleCalendarChange);
    function adjustCalendarTimes(byStartCalendarTime) {
        const startTime = startOfMonth(startCalendarDateTimeRef.value);
        const endTime = startOfMonth(endCalendarDateTimeRef.value);
        if (props.bindCalendarMonths || startTime >= endTime) {
            if (byStartCalendarTime) {
                endCalendarDateTimeRef.value = getTime(addMonths(startTime, 1));
            } else {
                startCalendarDateTimeRef.value = getTime(
                    addMonths(endTime, -1)
                );
            }
        }
    }
    function startCalendarNextYear() {
        startCalendarDateTimeRef.value = getTime(
            addMonths(startCalendarDateTimeRef.value, 12)
        );
        adjustCalendarTimes(true);
    }
    function startCalendarPrevYear() {
        startCalendarDateTimeRef.value = getTime(
            addMonths(startCalendarDateTimeRef.value, -12)
        );
        adjustCalendarTimes(true);
    }
    function startCalendarNextMonth() {
        startCalendarDateTimeRef.value = getTime(
            addMonths(startCalendarDateTimeRef.value, 1)
        );
        adjustCalendarTimes(true);
    }
    function startCalendarPrevMonth() {
        startCalendarDateTimeRef.value = getTime(
            addMonths(startCalendarDateTimeRef.value, -1)
        );
        adjustCalendarTimes(true);
    }
    function endCalendarNextYear() {
        endCalendarDateTimeRef.value = getTime(
            addMonths(endCalendarDateTimeRef.value, 12)
        );
        adjustCalendarTimes(false);
    }
    function endCalendarPrevYear() {
        endCalendarDateTimeRef.value = getTime(
            addMonths(endCalendarDateTimeRef.value, -12)
        );
        adjustCalendarTimes(false);
    }
    function endCalendarNextMonth() {
        endCalendarDateTimeRef.value = getTime(
            addMonths(endCalendarDateTimeRef.value, 1)
        );
        adjustCalendarTimes(false);
    }
    function endCalendarPrevMonth() {
        endCalendarDateTimeRef.value = getTime(
            addMonths(endCalendarDateTimeRef.value, -1)
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
        if (startOfMonth(endMoment) <= startOfMonth(startMoment)) {
            endCalendarDateTimeRef.value = getTime(
                startOfMonth(addMonths(startMoment, 1))
            );
        } else {
            endCalendarDateTimeRef.value = getTime(startOfMonth(endMoment));
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
            time = getTime(time);
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
            time = getTime(time);
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
            startTime = getTime(startTime);
        }
        if (source !== 'shortcutPreview') {
            let startDefaultTime;
            let endDefaultTime;
            if (type === 'datetimerange') {
                const { defaultTime } = props;
                if (Array.isArray(defaultTime)) {
                    startDefaultTime = getDefaultTime(defaultTime[0]);
                    endDefaultTime = getDefaultTime(defaultTime[1]);
                } else {
                    startDefaultTime = getDefaultTime(defaultTime);
                    endDefaultTime = startDefaultTime;
                }
            }
            if (startDefaultTime) {
                startTime = getTime(set(startTime, startDefaultTime));
            }
            if (endDefaultTime) {
                endTime = getTime(set(endTime, endDefaultTime));
            }
        }
        panelCommon.doUpdateValue(
            [startTime, endTime],
            props.panel && source === 'done'
        );
    }
    function sanitizeValue(datetime) {
        if (type === 'datetimerange') {
            return getTime(startOfSecond(datetime));
        } else if (type === 'monthrange') {
            return getTime(startOfMonth(datetime));
        } else {
            return getTime(startOfDay(datetime));
        }
    }
    function handleStartDateInput(value2) {
        const date = strictParse(
            value2,
            mergedDateFormatRef.value,
            new Date(),
            panelCommon.dateFnsOptions.value
        );
        if (isValid(date)) {
            if (!props.value) {
                const newValue = set(new Date(), {
                    year: getYear(date),
                    month: getMonth(date),
                    date: getDate(date),
                });
                changeStartDateTime(sanitizeValue(getTime(newValue)));
            } else if (Array.isArray(props.value)) {
                const newValue = set(props.value[0], {
                    year: getYear(date),
                    month: getMonth(date),
                    date: getDate(date),
                });
                changeStartDateTime(sanitizeValue(getTime(newValue)));
            }
        } else {
            startDateInput.value = value2;
        }
    }
    function handleEndDateInput(value2) {
        const date = strictParse(
            value2,
            mergedDateFormatRef.value,
            new Date(),
            panelCommon.dateFnsOptions.value
        );
        if (isValid(date)) {
            if (props.value === null) {
                const newValue = set(new Date(), {
                    year: getYear(date),
                    month: getMonth(date),
                    date: getDate(date),
                });
                changeEndDateTime(sanitizeValue(getTime(newValue)));
            } else if (Array.isArray(props.value)) {
                const newValue = set(props.value[1], {
                    year: getYear(date),
                    month: getMonth(date),
                    date: getDate(date),
                });
                changeEndDateTime(sanitizeValue(getTime(newValue)));
            }
        } else {
            endDateInputRef.value = value2;
        }
    }
    function handleStartDateInputBlur() {
        const date = strictParse(
            startDateInput.value,
            mergedDateFormatRef.value,
            new Date(),
            panelCommon.dateFnsOptions.value
        );
        const { value: value2 } = props;
        if (isValid(date)) {
            if (value2 === null) {
                const newValue = set(new Date(), {
                    year: getYear(date),
                    month: getMonth(date),
                    date: getDate(date),
                });
                changeStartDateTime(sanitizeValue(getTime(newValue)));
            } else if (Array.isArray(value2)) {
                const newValue = set(value2[0], {
                    year: getYear(date),
                    month: getMonth(date),
                    date: getDate(date),
                });
                changeStartDateTime(sanitizeValue(getTime(newValue)));
            }
        } else {
            refreshDisplayDateString();
        }
    }
    function handleEndDateInputBlur() {
        const date = strictParse(
            endDateInputRef.value,
            mergedDateFormatRef.value,
            new Date(),
            panelCommon.dateFnsOptions.value
        );
        const { value: value2 } = props;
        if (isValid(date)) {
            if (value2 === null) {
                const newValue = set(new Date(), {
                    year: getYear(date),
                    month: getMonth(date),
                    date: getDate(date),
                });
                changeEndDateTime(sanitizeValue(getTime(newValue)));
            } else if (Array.isArray(value2)) {
                const newValue = set(value2[1], {
                    year: getYear(date),
                    month: getMonth(date),
                    date: getDate(date),
                });
                changeEndDateTime(sanitizeValue(getTime(newValue)));
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
        startDateInput.value = format(
            times[0],
            mergedDateFormatRef.value,
            panelCommon.dateFnsOptions.value
        );
        endDateInputRef.value = format(
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
                    ? getMonth(Date.now())
                    : getMonth(mergedValue[0]);
                startMonthScrollbarRef.value.scrollTo({
                    debounce: false,
                    index: monthIndex,
                    elSize: MONTH_ITEM_HEIGHT,
                });
            }
            if (startYearVlRef.value) {
                const yearIndex =
                    (!Array.isArray(mergedValue)
                        ? getYear(Date.now())
                        : getYear(mergedValue[0])) - START_YEAR;
                startYearVlRef.value.scrollTo({
                    index: yearIndex,
                    debounce: false,
                });
            }
        }
        if (value2 === void 0 || type2 === 'end') {
            if (endMonthScrollbarRef.value) {
                const monthIndex = !Array.isArray(mergedValue)
                    ? getMonth(Date.now())
                    : getMonth(mergedValue[1]);
                endMonthScrollbarRef.value.scrollTo({
                    debounce: false,
                    index: monthIndex,
                    elSize: MONTH_ITEM_HEIGHT,
                });
            }
            if (endYearVlRef.value) {
                const yearIndex =
                    (!Array.isArray(mergedValue)
                        ? getYear(Date.now())
                        : getYear(mergedValue[1])) - START_YEAR;
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
                    ? set(dateItem.ts, {
                          month: getMonth(
                              type === 'quarterrange'
                                  ? startOfQuarter(new Date())
                                  : new Date()
                          ),
                      }).valueOf()
                    : set(dateItem.ts, {
                          month: getMonth(
                              type === 'quarterrange'
                                  ? startOfQuarter(
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
export { useDualCalendar, useDualCalendarProps };
