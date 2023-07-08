import type { Option, OptionValue, Filter } from './interface';
interface UseTransferDataProps {
    defaultValue: OptionValue[] | null;
    value?: OptionValue[] | null;
    options: Option[];
    filterable: boolean | undefined;
    sourceFilterable: Boolean;
    targetFilterable: Boolean;
    showSelected: Boolean;
    filter: Filter;
}
export declare function useTransferData(props: UseTransferDataProps): {
    uncontrolledValueRef: globalThis.Ref<OptionValue[] | null>;
    mergedValueRef: globalThis.ComputedRef<OptionValue[] | null>;
    targetValueSetRef: globalThis.ComputedRef<Set<OptionValue>>;
    valueSetForCheckAllRef: globalThis.ComputedRef<Set<string | number>>;
    valueSetForUncheckAllRef: globalThis.ComputedRef<Set<string | number>>;
    valueSetForClearRef: globalThis.ComputedRef<Set<string | number>>;
    filteredTgtOptionsRef: globalThis.ComputedRef<Option[]>;
    filteredSrcOptionsRef: globalThis.ComputedRef<Option[]>;
    targetOptionsRef: globalThis.ComputedRef<Option[]>;
    canNotSelectAnythingRef: globalThis.ComputedRef<boolean>;
    canBeClearedRef: globalThis.ComputedRef<boolean>;
    allCheckedRef: globalThis.ComputedRef<boolean>;
    srcPatternRef: globalThis.Ref<string>;
    tgtPatternRef: globalThis.Ref<string>;
    mergedSrcFilterableRef: globalThis.ComputedRef<Boolean>;
    handleSrcFilterUpdateValue: (value: string | null) => void;
    handleTgtFilterUpdateValue: (value: string | null) => void;
};
export {};
