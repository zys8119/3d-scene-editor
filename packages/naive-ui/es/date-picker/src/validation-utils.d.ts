import { Ref } from 'vue';
import type { DatePickerSetupProps } from './DatePicker';
export declare function uniCalendarValidation(
    props: DatePickerSetupProps,
    mergedValueRef: Ref<number | [number, number] | null>
): {
    isValueInvalidRef: globalThis.ComputedRef<boolean>;
    isDateInvalidRef: globalThis.ComputedRef<boolean>;
    isTimeInvalidRef: globalThis.ComputedRef<boolean>;
    isDateTimeInvalidRef: globalThis.ComputedRef<boolean>;
    isHourDisabledRef: globalThis.ComputedRef<
        import('../../time-picker/src/interface').IsHourDisabled | undefined
    >;
    isMinuteDisabledRef: globalThis.ComputedRef<
        import('../../time-picker/src/interface').IsMinuteDisabled | undefined
    >;
    isSecondDisabledRef: globalThis.ComputedRef<
        import('../../time-picker/src/interface').IsSecondDisabled | undefined
    >;
};
export declare function dualCalendarValidation(
    props: DatePickerSetupProps,
    mergedValueRef: Ref<number | [number, number] | null>
): {
    isStartDateInvalidRef: globalThis.ComputedRef<boolean>;
    isEndDateInvalidRef: globalThis.ComputedRef<boolean>;
    isStartTimeInvalidRef: globalThis.ComputedRef<boolean>;
    isEndTimeInvalidRef: globalThis.ComputedRef<boolean>;
    isStartValueInvalidRef: globalThis.ComputedRef<boolean>;
    isEndValueInvalidRef: globalThis.ComputedRef<boolean>;
    isRangeInvalidRef: globalThis.ComputedRef<boolean>;
    isStartHourDisabledRef: globalThis.ComputedRef<
        import('../../time-picker/src/interface').IsHourDisabled | undefined
    >;
    isEndHourDisabledRef: globalThis.ComputedRef<
        import('../../time-picker/src/interface').IsHourDisabled | undefined
    >;
    isStartMinuteDisabledRef: globalThis.ComputedRef<
        import('../../time-picker/src/interface').IsMinuteDisabled | undefined
    >;
    isEndMinuteDisabledRef: globalThis.ComputedRef<
        import('../../time-picker/src/interface').IsMinuteDisabled | undefined
    >;
    isStartSecondDisabledRef: globalThis.ComputedRef<
        import('../../time-picker/src/interface').IsSecondDisabled | undefined
    >;
    isEndSecondDisabledRef: globalThis.ComputedRef<
        import('../../time-picker/src/interface').IsSecondDisabled | undefined
    >;
};
