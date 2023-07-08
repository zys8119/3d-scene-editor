import { ComputedRef } from 'vue';
import type { FormItemSetupProps } from './FormItem';
import type { Size, FormItemRule } from './interface';
export declare function formItemSize(props: FormItemSetupProps): {
    mergedSize: ComputedRef<Size>;
};
export declare function formItemMisc(props: FormItemSetupProps): {
    validationErrored: globalThis.Ref<boolean>;
    mergedLabelStyle: ComputedRef<(import('vue').StyleValue | undefined)[]>;
    mergedLabelPlacement: ComputedRef<import('./interface').LabelPlacement>;
    mergedLabelAlign: ComputedRef<import('./interface').LabelAlign | undefined>;
    mergedShowRequireMark: ComputedRef<boolean | undefined>;
    mergedRequireMarkPlacement: ComputedRef<'left' | 'right' | 'right-hanging'>;
    mergedValidationStatus: ComputedRef<
        'error' | 'success' | 'warning' | undefined
    >;
    mergedShowFeedback: ComputedRef<boolean>;
    mergedShowLabel: ComputedRef<boolean>;
    isAutoLabelWidth: ComputedRef<boolean>;
};
export declare function formItemRule(props: FormItemSetupProps): {
    mergedRules: ComputedRef<FormItemRule[]>;
    mergedRequired: ComputedRef<boolean>;
};
