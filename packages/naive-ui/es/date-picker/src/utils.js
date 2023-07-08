import {
    isValid,
    isSameDay,
    getDate,
    getMonth,
    getYear,
    isSameMonth,
    isSameYear,
    getTime,
    startOfMonth,
    addDays,
    addMonths,
    addYears,
    addQuarters,
    getDay,
    parse,
    format,
    startOfYear,
    getQuarter,
    isSameQuarter,
} from 'date-fns';
import { START_YEAR } from './config';
function getDerivedTimeFromKeyboardEvent(prevValue, event) {
    const now = getTime(Date.now());
    if (typeof prevValue !== 'number') return now;
    switch (event.key) {
        case 'ArrowUp':
            return getTime(addDays(prevValue, -7));
        case 'ArrowDown':
            return getTime(addDays(prevValue, 7));
        case 'ArrowRight':
            return getTime(addDays(prevValue, 1));
        case 'ArrowLeft':
            return getTime(addDays(prevValue, -1));
    }
    return now;
}
const matcherMap = {
    date: isSameDay,
    month: isSameMonth,
    year: isSameYear,
    quarter: isSameQuarter,
};
function matchDate(sourceTime, patternTime, type) {
    const matcher = matcherMap[type];
    if (Array.isArray(sourceTime)) {
        return sourceTime.some((time) => matcher(time, patternTime));
    } else {
        return matcher(sourceTime, patternTime);
    }
}
function dateItem(time, monthTs, valueTs, currentTs) {
    let inSpan = false;
    let startOfSpan = false;
    let endOfSpan = false;
    if (Array.isArray(valueTs)) {
        if (valueTs[0] < time && time < valueTs[1]) {
            inSpan = true;
        }
        if (matchDate(valueTs[0], time, 'date')) startOfSpan = true;
        if (matchDate(valueTs[1], time, 'date')) endOfSpan = true;
    }
    const selected =
        valueTs !== null &&
        (Array.isArray(valueTs)
            ? matchDate(valueTs[0], time, 'date') ||
              matchDate(valueTs[1], time, 'date')
            : matchDate(valueTs, time, 'date'));
    return {
        type: 'date',
        dateObject: {
            date: getDate(time),
            month: getMonth(time),
            year: getYear(time),
        },
        inCurrentMonth: isSameMonth(time, monthTs),
        isCurrentDate: matchDate(currentTs, time, 'date'),
        inSpan,
        startOfSpan,
        endOfSpan,
        selected,
        ts: getTime(time),
    };
}
function monthItem(monthTs, valueTs, currentTs) {
    return {
        type: 'month',
        dateObject: {
            month: getMonth(monthTs),
            year: getYear(monthTs),
        },
        isCurrent: isSameMonth(currentTs, monthTs),
        selected: valueTs !== null && matchDate(valueTs, monthTs, 'month'),
        ts: getTime(monthTs),
    };
}
function yearItem(yearTs, valueTs, currentTs) {
    return {
        type: 'year',
        dateObject: {
            year: getYear(yearTs),
        },
        isCurrent: isSameYear(currentTs, yearTs),
        selected: valueTs !== null && matchDate(valueTs, yearTs, 'year'),
        ts: getTime(yearTs),
    };
}
function quarterItem(quarterTs, valueTs, currentTs) {
    return {
        type: 'quarter',
        dateObject: {
            quarter: getQuarter(quarterTs),
            year: getYear(quarterTs),
        },
        isCurrent: isSameQuarter(currentTs, quarterTs),
        selected: valueTs !== null && matchDate(valueTs, quarterTs, 'quarter'),
        ts: getTime(quarterTs),
    };
}
function dateArray(monthTs, valueTs, currentTs, startDay, strip = false) {
    const displayMonth = getMonth(monthTs);
    let displayMonthIterator = getTime(startOfMonth(monthTs));
    let lastMonthIterator = getTime(addDays(displayMonthIterator, -1));
    const calendarDays = [];
    let protectLastMonthDateIsShownFlag = !strip;
    while (
        getDay(lastMonthIterator) !== startDay ||
        protectLastMonthDateIsShownFlag
    ) {
        calendarDays.unshift(
            dateItem(lastMonthIterator, monthTs, valueTs, currentTs)
        );
        lastMonthIterator = getTime(addDays(lastMonthIterator, -1));
        protectLastMonthDateIsShownFlag = false;
    }
    while (getMonth(displayMonthIterator) === displayMonth) {
        calendarDays.push(
            dateItem(displayMonthIterator, monthTs, valueTs, currentTs)
        );
        displayMonthIterator = getTime(addDays(displayMonthIterator, 1));
    }
    const endIndex = strip
        ? calendarDays.length <= 28
            ? 28
            : calendarDays.length <= 35
            ? 35
            : 42
        : 42;
    while (calendarDays.length < endIndex) {
        calendarDays.push(
            dateItem(displayMonthIterator, monthTs, valueTs, currentTs)
        );
        displayMonthIterator = getTime(addDays(displayMonthIterator, 1));
    }
    return calendarDays;
}
function monthArray(yearAnchorTs, valueTs, currentTs) {
    const calendarMonths = [];
    const yearStart = startOfYear(yearAnchorTs);
    for (let i = 0; i < 12; i++) {
        calendarMonths.push(
            monthItem(getTime(addMonths(yearStart, i)), valueTs, currentTs)
        );
    }
    return calendarMonths;
}
function quarterArray(yearAnchorTs, valueTs, currentTs) {
    const calendarQuarters = [];
    const yearStart = startOfYear(yearAnchorTs);
    for (let i = 0; i < 4; i++) {
        calendarQuarters.push(
            quarterItem(getTime(addQuarters(yearStart, i)), valueTs, currentTs)
        );
    }
    return calendarQuarters;
}
function yearArray(valueTs, currentTs) {
    const calendarYears = [];
    const time1900 = new Date(START_YEAR, 0, 1);
    for (let i = 0; i < 200; i++) {
        calendarYears.push(
            yearItem(getTime(addYears(time1900, i)), valueTs, currentTs)
        );
    }
    return calendarYears;
}
function strictParse(string, pattern, backup, option) {
    const result = parse(string, pattern, backup, option);
    if (!isValid(result)) return result;
    else if (format(result, pattern, option) === string) return result;
    else return new Date(NaN);
}
function getDefaultTime(timeValue) {
    if (timeValue === void 0) {
        return void 0;
    }
    if (typeof timeValue === 'number') {
        return timeValue;
    }
    const [hour, minute, second] = timeValue.split(':');
    return {
        hours: Number(hour),
        minutes: Number(minute),
        seconds: Number(second),
    };
}
function pluckValueFromRange(value, type) {
    return Array.isArray(value) ? value[type === 'start' ? 0 : 1] : null;
}
export {
    dateArray,
    monthArray,
    yearArray,
    quarterArray,
    strictParse,
    getDerivedTimeFromKeyboardEvent,
    getDefaultTime,
    pluckValueFromRange,
};
