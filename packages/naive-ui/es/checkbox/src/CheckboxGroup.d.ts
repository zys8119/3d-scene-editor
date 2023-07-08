import { PropType, Ref, ComputedRef } from 'vue';
import { MaybeArray } from '../../_utils';
import type { ExtractPublicPropTypes } from '../../_utils';
export interface CheckboxGroupInjection {
    checkedCountRef: ComputedRef<number>;
    maxRef: Ref<number | undefined>;
    minRef: Ref<number | undefined>;
    disabledRef: Ref<boolean>;
    valueSetRef: Ref<Set<string | number>>;
    mergedSizeRef: Ref<'small' | 'medium' | 'large'>;
    toggleCheckbox: (checked: boolean, checkboxValue: string | number) => void;
}
export declare const checkboxGroupInjectionKey: globalThis.InjectionKey<CheckboxGroupInjection>;
export declare const checkboxGroupProps: {
    readonly min: NumberConstructor;
    readonly max: NumberConstructor;
    readonly size: PropType<'small' | 'medium' | 'large'>;
    readonly value: PropType<(string | number)[] | null>;
    readonly defaultValue: {
        readonly type: PropType<(string | number)[] | null>;
        readonly default: null;
    };
    readonly disabled: {
        readonly type: PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly 'onUpdate:value': PropType<
        MaybeArray<
            (
                value: Array<string | number>,
                meta: {
                    actionType: 'check' | 'uncheck';
                    value: string | number;
                }
            ) => void
        >
    >;
    readonly onUpdateValue: PropType<
        MaybeArray<
            (
                value: Array<string | number>,
                meta: {
                    actionType: 'check' | 'uncheck';
                    value: string | number;
                }
            ) => void
        >
    >;
    readonly onChange: PropType<
        MaybeArray<(value: Array<string | number>) => void> | undefined
    >;
};
export type CheckboxGroupProps = ExtractPublicPropTypes<
    typeof checkboxGroupProps
>;
declare const _default: import('vue').DefineComponent<
    {
        readonly min: NumberConstructor;
        readonly max: NumberConstructor;
        readonly size: PropType<'small' | 'medium' | 'large'>;
        readonly value: PropType<(string | number)[] | null>;
        readonly defaultValue: {
            readonly type: PropType<(string | number)[] | null>;
            readonly default: null;
        };
        readonly disabled: {
            readonly type: PropType<boolean | undefined>;
            readonly default: undefined;
        };
        readonly 'onUpdate:value': PropType<
            MaybeArray<
                (
                    value: (string | number)[],
                    meta: {
                        actionType: 'check' | 'uncheck';
                        value: string | number;
                    }
                ) => void
            >
        >;
        readonly onUpdateValue: PropType<
            MaybeArray<
                (
                    value: (string | number)[],
                    meta: {
                        actionType: 'check' | 'uncheck';
                        value: string | number;
                    }
                ) => void
            >
        >;
        readonly onChange: PropType<
            MaybeArray<(value: (string | number)[]) => void> | undefined
        >;
    },
    {
        mergedClsPrefix: ComputedRef<string>;
    },
    unknown,
    {},
    {},
    import('vue').ComponentOptionsMixin,
    import('vue').ComponentOptionsMixin,
    {},
    string,
    import('vue').VNodeProps &
        import('vue').AllowedComponentProps &
        import('vue').ComponentCustomProps,
    Readonly<
        import('vue').ExtractPropTypes<{
            readonly min: NumberConstructor;
            readonly max: NumberConstructor;
            readonly size: PropType<'small' | 'medium' | 'large'>;
            readonly value: PropType<(string | number)[] | null>;
            readonly defaultValue: {
                readonly type: PropType<(string | number)[] | null>;
                readonly default: null;
            };
            readonly disabled: {
                readonly type: PropType<boolean | undefined>;
                readonly default: undefined;
            };
            readonly 'onUpdate:value': PropType<
                MaybeArray<
                    (
                        value: (string | number)[],
                        meta: {
                            actionType: 'check' | 'uncheck';
                            value: string | number;
                        }
                    ) => void
                >
            >;
            readonly onUpdateValue: PropType<
                MaybeArray<
                    (
                        value: (string | number)[],
                        meta: {
                            actionType: 'check' | 'uncheck';
                            value: string | number;
                        }
                    ) => void
                >
            >;
            readonly onChange: PropType<
                MaybeArray<(value: (string | number)[]) => void> | undefined
            >;
        }>
    >,
    {
        readonly disabled: boolean | undefined;
        readonly defaultValue: (string | number)[] | null;
    },
    {}
>;
export default _default;
