import { PropType, ExtractPropTypes, Ref, Slots } from 'vue';
import type { MergedTheme } from '../../_mixins';
import type { ExtractPublicPropTypes, MaybeArray } from '../../_utils';
import type { StepsTheme } from '../styles';
export declare const stepsProps: {
    current: NumberConstructor;
    status: {
        type: PropType<'wait' | 'error' | 'finish' | 'process'>;
        default: string;
    };
    size: {
        type: PropType<'small' | 'medium'>;
        default: string;
    };
    vertical: BooleanConstructor;
    'onUpdate:current': PropType<MaybeArray<(current: number) => void>>;
    onUpdateCurrent: PropType<MaybeArray<(current: number) => void>>;
    theme: PropType<
        import('../../_mixins').Theme<
            'Steps',
            {
                stepHeaderFontWeight: string;
                indicatorTextColorProcess: string;
                indicatorTextColorWait: string;
                indicatorTextColorFinish: string;
                indicatorTextColorError: string;
                indicatorBorderColorProcess: string;
                indicatorBorderColorWait: string;
                indicatorBorderColorFinish: string;
                indicatorBorderColorError: string;
                indicatorColorProcess: string;
                indicatorColorWait: string;
                indicatorColorFinish: string;
                indicatorColorError: string;
                splitorColorProcess: string;
                splitorColorWait: string;
                splitorColorFinish: string;
                splitorColorError: string;
                headerTextColorProcess: string;
                headerTextColorWait: string;
                headerTextColorFinish: string;
                headerTextColorError: string;
                descriptionTextColorProcess: string;
                descriptionTextColorWait: string;
                descriptionTextColorFinish: string;
                descriptionTextColorError: string;
                stepHeaderFontSizeSmall: string;
                stepHeaderFontSizeMedium: string;
                indicatorIndexFontSizeSmall: string;
                indicatorIndexFontSizeMedium: string;
                indicatorSizeSmall: string;
                indicatorSizeMedium: string;
                indicatorIconSizeSmall: string;
                indicatorIconSizeMedium: string;
            },
            any
        >
    >;
    themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Steps',
                {
                    stepHeaderFontWeight: string;
                    indicatorTextColorProcess: string;
                    indicatorTextColorWait: string;
                    indicatorTextColorFinish: string;
                    indicatorTextColorError: string;
                    indicatorBorderColorProcess: string;
                    indicatorBorderColorWait: string;
                    indicatorBorderColorFinish: string;
                    indicatorBorderColorError: string;
                    indicatorColorProcess: string;
                    indicatorColorWait: string;
                    indicatorColorFinish: string;
                    indicatorColorError: string;
                    splitorColorProcess: string;
                    splitorColorWait: string;
                    splitorColorFinish: string;
                    splitorColorError: string;
                    headerTextColorProcess: string;
                    headerTextColorWait: string;
                    headerTextColorFinish: string;
                    headerTextColorError: string;
                    descriptionTextColorProcess: string;
                    descriptionTextColorWait: string;
                    descriptionTextColorFinish: string;
                    descriptionTextColorError: string;
                    stepHeaderFontSizeSmall: string;
                    stepHeaderFontSizeMedium: string;
                    indicatorIndexFontSizeSmall: string;
                    indicatorIndexFontSizeMedium: string;
                    indicatorSizeSmall: string;
                    indicatorSizeMedium: string;
                    indicatorIconSizeSmall: string;
                    indicatorIconSizeMedium: string;
                },
                any
            >
        >
    >;
    builtinThemeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Steps',
                {
                    stepHeaderFontWeight: string;
                    indicatorTextColorProcess: string;
                    indicatorTextColorWait: string;
                    indicatorTextColorFinish: string;
                    indicatorTextColorError: string;
                    indicatorBorderColorProcess: string;
                    indicatorBorderColorWait: string;
                    indicatorBorderColorFinish: string;
                    indicatorBorderColorError: string;
                    indicatorColorProcess: string;
                    indicatorColorWait: string;
                    indicatorColorFinish: string;
                    indicatorColorError: string;
                    splitorColorProcess: string;
                    splitorColorWait: string;
                    splitorColorFinish: string;
                    splitorColorError: string;
                    headerTextColorProcess: string;
                    headerTextColorWait: string;
                    headerTextColorFinish: string;
                    headerTextColorError: string;
                    descriptionTextColorProcess: string;
                    descriptionTextColorWait: string;
                    descriptionTextColorFinish: string;
                    descriptionTextColorError: string;
                    stepHeaderFontSizeSmall: string;
                    stepHeaderFontSizeMedium: string;
                    indicatorIndexFontSizeSmall: string;
                    indicatorIndexFontSizeMedium: string;
                    indicatorSizeSmall: string;
                    indicatorSizeMedium: string;
                    indicatorIconSizeSmall: string;
                    indicatorIconSizeMedium: string;
                },
                any
            >
        >
    >;
};
export interface StepsInjection {
    props: ExtractPropTypes<typeof stepsProps>;
    mergedClsPrefixRef: Ref<string>;
    mergedThemeRef: Ref<MergedTheme<StepsTheme>>;
    stepsSlots: Slots;
}
export type StepsProps = ExtractPublicPropTypes<typeof stepsProps>;
export declare const stepsInjectionKey: globalThis.InjectionKey<StepsInjection>;
declare const _default: import('vue').DefineComponent<
    {
        current: NumberConstructor;
        status: {
            type: PropType<'wait' | 'error' | 'finish' | 'process'>;
            default: string;
        };
        size: {
            type: PropType<'small' | 'medium'>;
            default: string;
        };
        vertical: BooleanConstructor;
        'onUpdate:current': PropType<MaybeArray<(current: number) => void>>;
        onUpdateCurrent: PropType<MaybeArray<(current: number) => void>>;
        theme: PropType<
            import('../../_mixins').Theme<
                'Steps',
                {
                    stepHeaderFontWeight: string;
                    indicatorTextColorProcess: string;
                    indicatorTextColorWait: string;
                    indicatorTextColorFinish: string;
                    indicatorTextColorError: string;
                    indicatorBorderColorProcess: string;
                    indicatorBorderColorWait: string;
                    indicatorBorderColorFinish: string;
                    indicatorBorderColorError: string;
                    indicatorColorProcess: string;
                    indicatorColorWait: string;
                    indicatorColorFinish: string;
                    indicatorColorError: string;
                    splitorColorProcess: string;
                    splitorColorWait: string;
                    splitorColorFinish: string;
                    splitorColorError: string;
                    headerTextColorProcess: string;
                    headerTextColorWait: string;
                    headerTextColorFinish: string;
                    headerTextColorError: string;
                    descriptionTextColorProcess: string;
                    descriptionTextColorWait: string;
                    descriptionTextColorFinish: string;
                    descriptionTextColorError: string;
                    stepHeaderFontSizeSmall: string;
                    stepHeaderFontSizeMedium: string;
                    indicatorIndexFontSizeSmall: string;
                    indicatorIndexFontSizeMedium: string;
                    indicatorSizeSmall: string;
                    indicatorSizeMedium: string;
                    indicatorIconSizeSmall: string;
                    indicatorIconSizeMedium: string;
                },
                any
            >
        >;
        themeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Steps',
                    {
                        stepHeaderFontWeight: string;
                        indicatorTextColorProcess: string;
                        indicatorTextColorWait: string;
                        indicatorTextColorFinish: string;
                        indicatorTextColorError: string;
                        indicatorBorderColorProcess: string;
                        indicatorBorderColorWait: string;
                        indicatorBorderColorFinish: string;
                        indicatorBorderColorError: string;
                        indicatorColorProcess: string;
                        indicatorColorWait: string;
                        indicatorColorFinish: string;
                        indicatorColorError: string;
                        splitorColorProcess: string;
                        splitorColorWait: string;
                        splitorColorFinish: string;
                        splitorColorError: string;
                        headerTextColorProcess: string;
                        headerTextColorWait: string;
                        headerTextColorFinish: string;
                        headerTextColorError: string;
                        descriptionTextColorProcess: string;
                        descriptionTextColorWait: string;
                        descriptionTextColorFinish: string;
                        descriptionTextColorError: string;
                        stepHeaderFontSizeSmall: string;
                        stepHeaderFontSizeMedium: string;
                        indicatorIndexFontSizeSmall: string;
                        indicatorIndexFontSizeMedium: string;
                        indicatorSizeSmall: string;
                        indicatorSizeMedium: string;
                        indicatorIconSizeSmall: string;
                        indicatorIconSizeMedium: string;
                    },
                    any
                >
            >
        >;
        builtinThemeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Steps',
                    {
                        stepHeaderFontWeight: string;
                        indicatorTextColorProcess: string;
                        indicatorTextColorWait: string;
                        indicatorTextColorFinish: string;
                        indicatorTextColorError: string;
                        indicatorBorderColorProcess: string;
                        indicatorBorderColorWait: string;
                        indicatorBorderColorFinish: string;
                        indicatorBorderColorError: string;
                        indicatorColorProcess: string;
                        indicatorColorWait: string;
                        indicatorColorFinish: string;
                        indicatorColorError: string;
                        splitorColorProcess: string;
                        splitorColorWait: string;
                        splitorColorFinish: string;
                        splitorColorError: string;
                        headerTextColorProcess: string;
                        headerTextColorWait: string;
                        headerTextColorFinish: string;
                        headerTextColorError: string;
                        descriptionTextColorProcess: string;
                        descriptionTextColorWait: string;
                        descriptionTextColorFinish: string;
                        descriptionTextColorError: string;
                        stepHeaderFontSizeSmall: string;
                        stepHeaderFontSizeMedium: string;
                        indicatorIndexFontSizeSmall: string;
                        indicatorIndexFontSizeMedium: string;
                        indicatorSizeSmall: string;
                        indicatorSizeMedium: string;
                        indicatorIconSizeSmall: string;
                        indicatorIconSizeMedium: string;
                    },
                    any
                >
            >
        >;
    },
    {
        mergedClsPrefix: globalThis.ComputedRef<string>;
        rtlEnabled:
            | Ref<
                  | import('../../config-provider/src/internal-interface').RtlItem
                  | undefined
              >
            | undefined;
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
        ExtractPropTypes<{
            current: NumberConstructor;
            status: {
                type: PropType<'wait' | 'error' | 'finish' | 'process'>;
                default: string;
            };
            size: {
                type: PropType<'small' | 'medium'>;
                default: string;
            };
            vertical: BooleanConstructor;
            'onUpdate:current': PropType<MaybeArray<(current: number) => void>>;
            onUpdateCurrent: PropType<MaybeArray<(current: number) => void>>;
            theme: PropType<
                import('../../_mixins').Theme<
                    'Steps',
                    {
                        stepHeaderFontWeight: string;
                        indicatorTextColorProcess: string;
                        indicatorTextColorWait: string;
                        indicatorTextColorFinish: string;
                        indicatorTextColorError: string;
                        indicatorBorderColorProcess: string;
                        indicatorBorderColorWait: string;
                        indicatorBorderColorFinish: string;
                        indicatorBorderColorError: string;
                        indicatorColorProcess: string;
                        indicatorColorWait: string;
                        indicatorColorFinish: string;
                        indicatorColorError: string;
                        splitorColorProcess: string;
                        splitorColorWait: string;
                        splitorColorFinish: string;
                        splitorColorError: string;
                        headerTextColorProcess: string;
                        headerTextColorWait: string;
                        headerTextColorFinish: string;
                        headerTextColorError: string;
                        descriptionTextColorProcess: string;
                        descriptionTextColorWait: string;
                        descriptionTextColorFinish: string;
                        descriptionTextColorError: string;
                        stepHeaderFontSizeSmall: string;
                        stepHeaderFontSizeMedium: string;
                        indicatorIndexFontSizeSmall: string;
                        indicatorIndexFontSizeMedium: string;
                        indicatorSizeSmall: string;
                        indicatorSizeMedium: string;
                        indicatorIconSizeSmall: string;
                        indicatorIconSizeMedium: string;
                    },
                    any
                >
            >;
            themeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Steps',
                        {
                            stepHeaderFontWeight: string;
                            indicatorTextColorProcess: string;
                            indicatorTextColorWait: string;
                            indicatorTextColorFinish: string;
                            indicatorTextColorError: string;
                            indicatorBorderColorProcess: string;
                            indicatorBorderColorWait: string;
                            indicatorBorderColorFinish: string;
                            indicatorBorderColorError: string;
                            indicatorColorProcess: string;
                            indicatorColorWait: string;
                            indicatorColorFinish: string;
                            indicatorColorError: string;
                            splitorColorProcess: string;
                            splitorColorWait: string;
                            splitorColorFinish: string;
                            splitorColorError: string;
                            headerTextColorProcess: string;
                            headerTextColorWait: string;
                            headerTextColorFinish: string;
                            headerTextColorError: string;
                            descriptionTextColorProcess: string;
                            descriptionTextColorWait: string;
                            descriptionTextColorFinish: string;
                            descriptionTextColorError: string;
                            stepHeaderFontSizeSmall: string;
                            stepHeaderFontSizeMedium: string;
                            indicatorIndexFontSizeSmall: string;
                            indicatorIndexFontSizeMedium: string;
                            indicatorSizeSmall: string;
                            indicatorSizeMedium: string;
                            indicatorIconSizeSmall: string;
                            indicatorIconSizeMedium: string;
                        },
                        any
                    >
                >
            >;
            builtinThemeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Steps',
                        {
                            stepHeaderFontWeight: string;
                            indicatorTextColorProcess: string;
                            indicatorTextColorWait: string;
                            indicatorTextColorFinish: string;
                            indicatorTextColorError: string;
                            indicatorBorderColorProcess: string;
                            indicatorBorderColorWait: string;
                            indicatorBorderColorFinish: string;
                            indicatorBorderColorError: string;
                            indicatorColorProcess: string;
                            indicatorColorWait: string;
                            indicatorColorFinish: string;
                            indicatorColorError: string;
                            splitorColorProcess: string;
                            splitorColorWait: string;
                            splitorColorFinish: string;
                            splitorColorError: string;
                            headerTextColorProcess: string;
                            headerTextColorWait: string;
                            headerTextColorFinish: string;
                            headerTextColorError: string;
                            descriptionTextColorProcess: string;
                            descriptionTextColorWait: string;
                            descriptionTextColorFinish: string;
                            descriptionTextColorError: string;
                            stepHeaderFontSizeSmall: string;
                            stepHeaderFontSizeMedium: string;
                            indicatorIndexFontSizeSmall: string;
                            indicatorIndexFontSizeMedium: string;
                            indicatorSizeSmall: string;
                            indicatorSizeMedium: string;
                            indicatorIconSizeSmall: string;
                            indicatorIconSizeMedium: string;
                        },
                        any
                    >
                >
            >;
        }>
    >,
    {
        size: 'small' | 'medium';
        vertical: boolean;
        status: 'wait' | 'error' | 'finish' | 'process';
    },
    {}
>;
export default _default;
