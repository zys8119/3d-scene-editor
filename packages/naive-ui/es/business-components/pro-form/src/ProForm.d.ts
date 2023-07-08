import { ExtractPropTypes, PropType } from 'vue';
import { FormItemProps, FormProps } from '../../../form';
import { Options } from './interface';
export declare const proFormProps: {
    readonly value: {
        readonly type: PropType<any>;
        readonly default: () => void;
    };
    readonly options: {
        readonly type: PropType<Options[]>;
        readonly default: () => never[];
    };
    readonly formProps: {
        readonly type: PropType<FormProps>;
        readonly default: {};
    };
    readonly formItemProps: {
        readonly type: PropType<FormItemProps>;
        readonly default: {};
    };
    readonly 'onUpdate:value': PropType<any>;
    readonly theme: PropType<
        import('../../../_mixins').Theme<
            'ProForm',
            {
                padding: string;
            },
            any
        >
    >;
    readonly themeOverrides: PropType<
        import('../../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../../_mixins').Theme<
                'ProForm',
                {
                    padding: string;
                },
                any
            >
        >
    >;
    readonly builtinThemeOverrides: PropType<
        import('../../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../../_mixins').Theme<
                'ProForm',
                {
                    padding: string;
                },
                any
            >
        >
    >;
};
export type ProFormProps = ExtractPropTypes<typeof proFormProps>;
declare const _default: import('vue').DefineComponent<
    {
        readonly value: {
            readonly type: PropType<any>;
            readonly default: () => void;
        };
        readonly options: {
            readonly type: PropType<Options[]>;
            readonly default: () => never[];
        };
        readonly formProps: {
            readonly type: PropType<FormProps>;
            readonly default: {};
        };
        readonly formItemProps: {
            readonly type: PropType<FormItemProps>;
            readonly default: {};
        };
        readonly 'onUpdate:value': PropType<any>;
        readonly theme: PropType<
            import('../../../_mixins').Theme<
                'ProForm',
                {
                    padding: string;
                },
                any
            >
        >;
        readonly themeOverrides: PropType<
            import('../../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../../_mixins').Theme<
                    'ProForm',
                    {
                        padding: string;
                    },
                    any
                >
            >
        >;
        readonly builtinThemeOverrides: PropType<
            import('../../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../../_mixins').Theme<
                    'ProForm',
                    {
                        padding: string;
                    },
                    any
                >
            >
        >;
    },
    {
        cssVarsRef: globalThis.ComputedRef<{
            '--n-padding': string;
        }>;
        mergedClsPrefix: globalThis.ComputedRef<string>;
        rules: any;
        formRef: globalThis.Ref<any>;
        reset: () => void;
        submit: (e?: Event) => void;
    },
    unknown,
    {},
    {},
    import('vue').ComponentOptionsMixin,
    import('vue').ComponentOptionsMixin,
    {
        submit: () => true;
        'update:value': (value: Record<string, any>) => boolean;
    },
    string,
    import('vue').VNodeProps &
        import('vue').AllowedComponentProps &
        import('vue').ComponentCustomProps,
    Readonly<
        ExtractPropTypes<{
            readonly value: {
                readonly type: PropType<any>;
                readonly default: () => void;
            };
            readonly options: {
                readonly type: PropType<Options[]>;
                readonly default: () => never[];
            };
            readonly formProps: {
                readonly type: PropType<FormProps>;
                readonly default: {};
            };
            readonly formItemProps: {
                readonly type: PropType<FormItemProps>;
                readonly default: {};
            };
            readonly 'onUpdate:value': PropType<any>;
            readonly theme: PropType<
                import('../../../_mixins').Theme<
                    'ProForm',
                    {
                        padding: string;
                    },
                    any
                >
            >;
            readonly themeOverrides: PropType<
                import('../../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../../_mixins').Theme<
                        'ProForm',
                        {
                            padding: string;
                        },
                        any
                    >
                >
            >;
            readonly builtinThemeOverrides: PropType<
                import('../../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../../_mixins').Theme<
                        'ProForm',
                        {
                            padding: string;
                        },
                        any
                    >
                >
            >;
        }>
    > & {
        onSubmit?: (() => any) | undefined;
        'onUpdate:value'?: ((value: Record<string, any>) => any) | undefined;
    },
    {
        readonly value: any;
        readonly options: Options[];
        readonly formProps: FormProps;
        readonly formItemProps: FormItemProps;
    },
    {}
>;
export default _default;
