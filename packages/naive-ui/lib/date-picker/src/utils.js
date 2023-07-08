Object.defineProperty(exports, '__esModule', { value: true });
exports.pluckValueFromRange =
    exports.getDefaultTime =
    exports.getDerivedTimeFromKeyboardEvent =
    exports.strictParse =
    exports.quarterArray =
    exports.yearArray =
    exports.monthArray =
    exports.dateArray =
        void 0;
const date_fns_1 = require('date-fns');
const config_1 = require('./config');
function getDerivedTimeFromKeyboardEvent(prevValue, event) {
    const now = (0, date_fns_1.getTime)(Date.now());
    if (typeof prevValue !== 'number') return now;
    switch (event.key) {
        case 'ArrowUp':
            return (0, date_fns_1.getTime)(
                (0, date_fns_1.addDays)(prevValue, -7)
            );
        case 'ArrowDown':
            return (0, date_fns_1.getTime)(
                (0, date_fns_1.addDays)(prevValue, 7)
            );
        case 'ArrowRight':
            return (0, date_fns_1.getTime)(
                (0, date_fns_1.addDays)(prevValue, 1)
            );
        case 'ArrowLeft':
            return (0, date_fns_1.getTime)(
                (0, date_fns_1.addDays)(prevValue, -1)
            );
    }
    return now;
}
exports.getDerivedTimeFromKeyboardEvent = getDerivedTimeFromKeyboardEvent;
const matcherMap = {
    date: date_fns_1.isSameDay,
    month: date_fns_1.isSameMonth,
    year: date_fns_1.isSameYear,
    quarter: date_fns_1.isSameQuarter,
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
            date: (0, date_fns_1.getDate)(time),
            month: (0, date_fns_1.getMonth)(time),
            year: (0, date_fns_1.getYear)(time),
        },
        inCurrentMonth: (0, date_fns_1.isSameMonth)(time, monthTs),
        isCurrentDate: matchDate(currentTs, time, 'date'),
        inSpan,
        startOfSpan,
        endOfSpan,
        selected,
        ts: (0, date_fns_1.getTime)(time),
    };
}
function monthItem(monthTs, valueTs, currentTs) {
    return {
        type: 'month',
        dateObject: {
            month: (0, date_fns_1.getMonth)(monthTs),
            year: (0, date_fns_1.getYear)(monthTs),
        },
        isCurrent: (0, date_fns_1.isSameMonth)(currentTs, monthTs),
        selected: valueTs !== null && matchDate(valueTs, monthTs, 'month'),
        ts: (0, date_fns_1.getTime)(monthTs),
    };
}
function yearItem(yearTs, valueTs, currentTs) {
    return {
        type: 'year',
        dateObject: {
            year: (0, date_fns_1.getYear)(yearTs),
        },
        isCurrent: (0, date_fns_1.isSameYear)(currentTs, yearTs),
        selected: valueTs !== null && matchDate(valueTs, yearTs, 'year'),
        ts: (0, date_fns_1.getTime)(yearTs),
    };
}
function quarterItem(quarterTs, valueTs, currentTs) {
    return {
        type: 'quarter',
        dateObject: {
            quarter: (0, date_fns_1.getQuarter)(quarterTs),
            year: (0, date_fns_1.getYear)(quarterTs),
        },
        isCurrent: (0, date_fns_1.isSameQuarter)(currentTs, quarterTs),
        selected: valueTs !== null && matchDate(valueTs, quarterTs, 'quarter'),
        ts: (0, date_fns_1.getTime)(quarterTs),
    };
}
function dateArray(monthTs, valueTs, currentTs, startDay, strip = false) {
    const displayMonth = (0, date_fns_1.getMonth)(monthTs);
    let displayMonthIterator = (0, date_fns_1.getTime)(
        (0, date_fns_1.startOfMonth)(monthTs)
    );
    let lastMonthIterator = (0, date_fns_1.getTime)(
        (0, date_fns_1.addDays)(displayMonthIterator, -1)
    );
    const calendarDays = [];
    let protectLastMonthDateIsShownFlag = !strip;
    while (
        (0, date_fns_1.getDay)(lastMonthIterator) !== startDay ||
        protectLastMonthDateIsShownFlag
    ) {
        calendarDays.unshift(
            dateItem(lastMonthIterator, monthTs, valueTs, currentTs)
        );
        lastMonthIterator = (0, date_fns_1.getTime)(
            (0, date_fns_1.addDays)(lastMonthIterator, -1)
        );
        protectLastMonthDateIsShownFlag = false;
    }
    while ((0, date_fns_1.getMonth)(displayMonthIterator) === displayMonth) {
        calendarDays.push(
            dateItem(displayMonthIterator, monthTs, valueTs, currentTs)
        );
        displayMonthIterator = (0, date_fns_1.getTime)(
            (0, date_fns_1.addDays)(displayMonthIterator, 1)
        );
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
        displayMonthIterator = (0, date_fns_1.getTime)(
            (0, date_fns_1.addDays)(displayMonthIterator, 1)
        );
    }
    return calendarDays;
}
exports.dateArray = dateArray;
function monthArray(yearAnchorTs, valueTs, currentTs) {
    const calendarMonths = [];
    const yearStart = (0, date_fns_1.startOfYear)(yearAnchorTs);
    for (let i = 0; i < 12; i++) {
        calendarMonths.push(
            monthItem(
                (0, date_fns_1.getTime)(
                    (0, date_fns_1.addMonths)(yearStart, i)
                ),
                valueTs,
                currentTs
            )
        );
    }
    return calendarMonths;
}
exports.monthArray = monthArray;
function quarterArray(yearAnchorTs, valueTs, currentTs) {
    const calendarQuarters = [];
    const yearStart = (0, date_fns_1.startOfYear)(yearAnchorTs);
    for (let i = 0; i < 4; i++) {
        calendarQuarters.push(
            quarterItem(
                (0, date_fns_1.getTime)(
                    (0, date_fns_1.addQuarters)(yearStart, i)
                ),
                valueTs,
                currentTs
            )
        );
    }
    return calendarQuarters;
}
exports.quarterArray = quarterArray;
function yearArray(valueTs, currentTs) {
    const calendarYears = [];
    const time1900 = new Date(config_1.START_YEAR, 0, 1);
    for (let i = 0; i < 200; i++) {
        calendarYears.push(
            yearItem(
                (0, date_fns_1.getTime)((0, date_fns_1.addYears)(time1900, i)),
                valueTs,
                currentTs
            )
        );
    }
    return calendarYears;
}
exports.yearArray = yearArray;
function strictParse(string, pattern, backup, option) {
    const result = (0, date_fns_1.parse)(string, pattern, backup, option);
    if (!(0, date_fns_1.isValid)(result)) return result;
    else if ((0, date_fns_1.format)(result, pattern, option) === string)
        return result;
    else return new Date(NaN);
}
exports.strictParse = strictParse;
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
exports.getDefaultTime = getDefaultTime;
function pluckValueFromRange(value, type) {
    return Array.isArray(value) ? value[type === 'start' ? 0 : 1] : null;
}
exports.pluckValueFromRange = pluckValueFromRange;
