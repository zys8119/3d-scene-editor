import type { NDateLocale } from '../../locales';
import { Value } from './interface';
declare function getDerivedTimeFromKeyboardEvent(
    prevValue: number | null,
    event: KeyboardEvent
): number;
export interface DateItem {
    type: 'date';
    dateObject: {
        date: number;
        month: number;
        year: number;
    };
    inCurrentMonth: boolean;
    isCurrentDate: boolean;
    inSpan: boolean;
    startOfSpan: boolean;
    endOfSpan: boolean;
    selected: boolean;
    ts: number;
}
export interface MonthItem {
    type: 'month';
    dateObject: {
        month: number;
        year: number;
    };
    isCurrent: boolean;
    selected: boolean;
    ts: number;
}
export interface YearItem {
    type: 'year';
    dateObject: {
        year: number;
    };
    isCurrent: boolean;
    selected: boolean;
    ts: number;
}
export interface QuarterItem {
    type: 'quarter';
    dateObject: {
        quarter: number;
        year: number;
    };
    isCurrent: boolean;
    selected: boolean;
    ts: number;
}
/**
 * Given time to display calendar, given the selected time, given current time,
 * return the date array of display time's month.
 */
declare function dateArray(
    monthTs: number,
    valueTs: number | [number, number] | null,
    currentTs: number,
    startDay: 0 | 1 | 2 | 3 | 4 | 5 | 6,
    strip?: boolean
): DateItem[];
declare function monthArray(
    yearAnchorTs: number,
    valueTs: number | null,
    currentTs: number
): MonthItem[];
declare function quarterArray(
    yearAnchorTs: number,
    valueTs: number | null,
    currentTs: number
): QuarterItem[];
declare function yearArray(
    valueTs: number | null,
    currentTs: number
): YearItem[];
declare function strictParse(
    string: string,
    pattern: string,
    backup: Date,
    option: {
        locale: NDateLocale['locale'];
    }
): Date;
declare function getDefaultTime(timeValue: string | undefined):
    | {
          hours: number;
          minutes: number;
          seconds: number;
      }
    | undefined;
declare function pluckValueFromRange(
    value: Value | null,
    type: 'start' | 'end'
): number | null;
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
