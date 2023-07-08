import { Ref } from 'vue';
import type { Option, OptionValue, Filter, CheckedStatus } from './interface';
interface UseTransferDataProps {
    defaultValue: OptionValue[] | null;
    value?: OptionValue[] | null;
    options: Option[];
    filterable: boolean;
    filter: Filter;
}
export declare function useTransferData(
    props: UseTransferDataProps,
    mergedDisabledRef: Ref<boolean>
): {
    uncontrolledValue: Ref<OptionValue[] | null>;
    mergedValue: globalThis.ComputedRef<OptionValue[] | null>;
    avlSrcValueSet: globalThis.ComputedRef<Set<OptionValue>>;
    avlTgtValueSet: globalThis.ComputedRef<Set<any>>;
    tgtOpts: globalThis.ComputedRef<any[]>;
    srcOpts: globalThis.ComputedRef<Option[]>;
    filteredSrcOpts: globalThis.ComputedRef<Option[]>;
    filteredTgtOpts: globalThis.ComputedRef<any[]>;
    srcCheckedValues: Ref<OptionValue[]>;
    tgtCheckedValues: Ref<OptionValue[]>;
    srcCheckedStatus: globalThis.ComputedRef<CheckedStatus>;
    tgtCheckedStatus: globalThis.ComputedRef<
        | {
              checked: boolean;
              indeterminate: boolean;
              disabled: boolean;
          }
        | {
              checked: boolean;
              indeterminate: boolean;
              disabled?: undefined;
          }
    >;
    srcPattern: Ref<string>;
    tgtPattern: Ref<string>;
    isInputing: Ref<boolean>;
    fromButtonDisabled: globalThis.ComputedRef<boolean>;
    toButtonDisabled: globalThis.ComputedRef<boolean>;
    handleInputFocus: () => void;
    handleInputBlur: () => void;
    handleTgtFilterUpdateValue: (value: string | null) => void;
    handleSrcFilterUpdateValue: (value: string | null) => void;
};
export {};
