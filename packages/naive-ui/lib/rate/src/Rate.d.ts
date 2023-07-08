import { PropType } from 'vue';
import type { ExtractPublicPropTypes, MaybeArray } from '../../_utils';
import type { RateOnUpdateValue } from './interface';
export declare const rateProps: {
    readonly allowHalf: BooleanConstructor;
    readonly count: {
        readonly type: NumberConstructor;
        readonly default: 5;
    };
    readonly value: NumberConstructor;
    readonly defaultValue: {
        readonly type: PropType<number | null>;
        readonly default: null;
    };
    readonly readonly: BooleanConstructor;
    readonly size: {
        readonly type: PropType<number | 'small' | 'medium' | 'large'>;
        readonly default: 'medium';
    };
    readonly clearable: BooleanConstructor;
    readonly color: StringConstructor;
    readonly onClear: PropType<() => void>;
    readonly 'onUpdate:value': PropType<MaybeArray<RateOnUpdateValue>>;
    readonly onUpdateValue: PropType<MaybeArray<RateOnUpdateValue>>;
    readonly theme: PropType<
        import('../../_mixins').Theme<
            'Rate',
            {
                itemColor: string;
                itemColorActive: string;
                sizeSmall: string;
                sizeMedium: string;
                sizeLarge: string;
            },
            any
        >
    >;
    readonly themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Rate',
                {
                    itemColor: string;
                    itemColorActive: string;
                    sizeSmall: string;
                    sizeMedium: string;
                    sizeLarge: string;
                },
                any
            >
        >
    >;
    readonly builtinThemeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Rate',
                {
                    itemColor: string;
                    itemColorActive: string;
                    sizeSmall: string;
                    sizeMedium: string;
                    sizeLarge: string;
                },
                any
            >
        >
    >;
};
export type RateProps = ExtractPublicPropTypes<typeof rateProps>;
declare const _default: import('vue').DefineComponent<
    {
        readonly allowHalf: BooleanConstructor;
        readonly count: {
            readonly type: NumberConstructor;
            readonly default: 5;
        };
        readonly value: NumberConstructor;
        readonly defaultValue: {
            readonly type: PropType<number | null>;
            readonly default: null;
        };
        readonly readonly: BooleanConstructor;
        readonly size: {
            readonly type: PropType<number | 'small' | 'medium' | 'large'>;
            readonly default: 'medium';
        };
        readonly clearable: BooleanConstructor;
        readonly color: StringConstructor;
        readonly onClear: PropType<() => void>;
        readonly 'onUpdate:value': PropType<MaybeArray<RateOnUpdateValue>>;
        readonly onUpdateValue: PropType<MaybeArray<RateOnUpdateValue>>;
        readonly theme: PropType<
            import('../../_mixins').Theme<
                'Rate',
                {
                    itemColor: string;
                    itemColorActive: string;
                    sizeSmall: string;
                    sizeMedium: string;
                    sizeLarge: string;
                },
                any
            >
        >;
        readonly themeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Rate',
                    {
                        itemColor: string;
                        itemColorActive: string;
                        sizeSmall: string;
                        sizeMedium: string;
                        sizeLarge: string;
                    },
                    any
                >
            >
        >;
        readonly builtinThemeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Rate',
                    {
                        itemColor: string;
                        itemColorActive: string;
                        sizeSmall: string;
                        sizeMedium: string;
                        sizeLarge: string;
                    },
                    any
                >
            >
        >;
    },
    {
        mergedClsPrefix: globalThis.ComputedRef<string>;
        mergedValue: globalThis.ComputedRef<number | null>;
        hoverIndex: globalThis.Ref<number | null>;
        handleMouseMove: (index: number, e: MouseEvent) => void;
        handleClick: (index: number, e: MouseEvent) => void;
        handleMouseLeave: () => void;
        handleMouseEnterSomeStar: () => void;
        cssVars:
            | globalThis.ComputedRef<{
                  '--n-bezier': string;
                  '--n-item-color': string;
                  '--n-item-color-active': string;
                  '--n-item-size': string;
              }>
            | undefined;
        themeClass: globalThis.Ref<string> | undefined;
        onRender: (() => void) | undefined;
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
            readonly allowHalf: BooleanConstructor;
            readonly count: {
                readonly type: NumberConstructor;
                readonly default: 5;
            };
            readonly value: NumberConstructor;
            readonly defaultValue: {
                readonly type: PropType<number | null>;
                readonly default: null;
            };
            readonly readonly: BooleanConstructor;
            readonly size: {
                readonly type: PropType<number | 'small' | 'medium' | 'large'>;
                readonly default: 'medium';
            };
            readonly clearable: BooleanConstructor;
            readonly color: StringConstructor;
            readonly onClear: PropType<() => void>;
            readonly 'onUpdate:value': PropType<MaybeArray<RateOnUpdateValue>>;
            readonly onUpdateValue: PropType<MaybeArray<RateOnUpdateValue>>;
            readonly theme: PropType<
                import('../../_mixins').Theme<
                    'Rate',
                    {
                        itemColor: string;
                        itemColorActive: string;
                        sizeSmall: string;
                        sizeMedium: string;
                        sizeLarge: string;
                    },
                    any
                >
            >;
            readonly themeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Rate',
                        {
                            itemColor: string;
                            itemColorActive: string;
                            sizeSmall: string;
                            sizeMedium: string;
                            sizeLarge: string;
                        },
                        any
                    >
                >
            >;
            readonly builtinThemeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Rate',
                        {
                            itemColor: string;
                            itemColorActive: string;
                            sizeSmall: string;
                            sizeMedium: string;
                            sizeLarge: string;
                        },
                        any
                    >
                >
            >;
        }>
    >,
    {
        readonly readonly: boolean;
        readonly size: number | 'small' | 'medium' | 'large';
        readonly clearable: boolean;
        readonly defaultValue: number | null;
        readonly count: number;
        readonly allowHalf: boolean;
    },
    {}
>;
export default _default;
