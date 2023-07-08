import { PropType, CSSProperties } from 'vue';
import type { ExtractPublicPropTypes } from '../../_utils';
export declare const descriptionsProps: {
    readonly title: StringConstructor;
    readonly column: {
        readonly type: NumberConstructor;
        readonly default: 3;
    };
    readonly columns: NumberConstructor;
    readonly labelPlacement: {
        readonly type: PropType<'left' | 'top'>;
        readonly default: 'top';
    };
    readonly labelAlign: {
        readonly type: PropType<'left' | 'right' | 'center'>;
        readonly default: 'left';
    };
    readonly separator: {
        readonly type: StringConstructor;
        readonly default: ':';
    };
    readonly size: {
        readonly type: PropType<'small' | 'medium' | 'large'>;
        readonly default: 'medium';
    };
    readonly bordered: BooleanConstructor;
    readonly labelStyle: PropType<string | CSSProperties>;
    readonly contentStyle: PropType<string | CSSProperties>;
    readonly theme: PropType<
        import('../../_mixins').Theme<
            'Descriptions',
            {
                lineHeight: string;
                fontSizeSmall: string;
                fontSizeMedium: string;
                fontSizeLarge: string;
                titleTextColor: string;
                thColor: string;
                thColorModal: string;
                thColorPopover: string;
                thTextColor: string;
                thFontWeight: string;
                tdTextColor: string;
                tdColor: string;
                tdColorModal: string;
                tdColorPopover: string;
                borderColor: string;
                borderColorModal: string;
                borderColorPopover: string;
                borderRadius: string;
                thPaddingBorderedSmall: string;
                thPaddingBorderedMedium: string;
                thPaddingBorderedLarge: string;
                thPaddingSmall: string;
                thPaddingMedium: string;
                thPaddingLarge: string;
                tdPaddingBorderedSmall: string;
                tdPaddingBorderedMedium: string;
                tdPaddingBorderedLarge: string;
                tdPaddingSmall: string;
                tdPaddingMedium: string;
                tdPaddingLarge: string;
            },
            any
        >
    >;
    readonly themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Descriptions',
                {
                    lineHeight: string;
                    fontSizeSmall: string;
                    fontSizeMedium: string;
                    fontSizeLarge: string;
                    titleTextColor: string;
                    thColor: string;
                    thColorModal: string;
                    thColorPopover: string;
                    thTextColor: string;
                    thFontWeight: string;
                    tdTextColor: string;
                    tdColor: string;
                    tdColorModal: string;
                    tdColorPopover: string;
                    borderColor: string;
                    borderColorModal: string;
                    borderColorPopover: string;
                    borderRadius: string;
                    thPaddingBorderedSmall: string;
                    thPaddingBorderedMedium: string;
                    thPaddingBorderedLarge: string;
                    thPaddingSmall: string;
                    thPaddingMedium: string;
                    thPaddingLarge: string;
                    tdPaddingBorderedSmall: string;
                    tdPaddingBorderedMedium: string;
                    tdPaddingBorderedLarge: string;
                    tdPaddingSmall: string;
                    tdPaddingMedium: string;
                    tdPaddingLarge: string;
                },
                any
            >
        >
    >;
    readonly builtinThemeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Descriptions',
                {
                    lineHeight: string;
                    fontSizeSmall: string;
                    fontSizeMedium: string;
                    fontSizeLarge: string;
                    titleTextColor: string;
                    thColor: string;
                    thColorModal: string;
                    thColorPopover: string;
                    thTextColor: string;
                    thFontWeight: string;
                    tdTextColor: string;
                    tdColor: string;
                    tdColorModal: string;
                    tdColorPopover: string;
                    borderColor: string;
                    borderColorModal: string;
                    borderColorPopover: string;
                    borderRadius: string;
                    thPaddingBorderedSmall: string;
                    thPaddingBorderedMedium: string;
                    thPaddingBorderedLarge: string;
                    thPaddingSmall: string;
                    thPaddingMedium: string;
                    thPaddingLarge: string;
                    tdPaddingBorderedSmall: string;
                    tdPaddingBorderedMedium: string;
                    tdPaddingBorderedLarge: string;
                    tdPaddingSmall: string;
                    tdPaddingMedium: string;
                    tdPaddingLarge: string;
                },
                any
            >
        >
    >;
};
export type DescriptionsProps = ExtractPublicPropTypes<
    typeof descriptionsProps
>;
/** @deprecated You should use `DescriptionsProps` */
export type DescriptionProps = DescriptionsProps;
declare const _default: import('vue').DefineComponent<
    {
        readonly title: StringConstructor;
        readonly column: {
            readonly type: NumberConstructor;
            readonly default: 3;
        };
        readonly columns: NumberConstructor;
        readonly labelPlacement: {
            readonly type: PropType<'left' | 'top'>;
            readonly default: 'top';
        };
        readonly labelAlign: {
            readonly type: PropType<'left' | 'right' | 'center'>;
            readonly default: 'left';
        };
        readonly separator: {
            readonly type: StringConstructor;
            readonly default: ':';
        };
        readonly size: {
            readonly type: PropType<'small' | 'medium' | 'large'>;
            readonly default: 'medium';
        };
        readonly bordered: BooleanConstructor;
        readonly labelStyle: PropType<string | CSSProperties>;
        readonly contentStyle: PropType<string | CSSProperties>;
        readonly theme: PropType<
            import('../../_mixins').Theme<
                'Descriptions',
                {
                    lineHeight: string;
                    fontSizeSmall: string;
                    fontSizeMedium: string;
                    fontSizeLarge: string;
                    titleTextColor: string;
                    thColor: string;
                    thColorModal: string;
                    thColorPopover: string;
                    thTextColor: string;
                    thFontWeight: string;
                    tdTextColor: string;
                    tdColor: string;
                    tdColorModal: string;
                    tdColorPopover: string;
                    borderColor: string;
                    borderColorModal: string;
                    borderColorPopover: string;
                    borderRadius: string;
                    thPaddingBorderedSmall: string;
                    thPaddingBorderedMedium: string;
                    thPaddingBorderedLarge: string;
                    thPaddingSmall: string;
                    thPaddingMedium: string;
                    thPaddingLarge: string;
                    tdPaddingBorderedSmall: string;
                    tdPaddingBorderedMedium: string;
                    tdPaddingBorderedLarge: string;
                    tdPaddingSmall: string;
                    tdPaddingMedium: string;
                    tdPaddingLarge: string;
                },
                any
            >
        >;
        readonly themeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Descriptions',
                    {
                        lineHeight: string;
                        fontSizeSmall: string;
                        fontSizeMedium: string;
                        fontSizeLarge: string;
                        titleTextColor: string;
                        thColor: string;
                        thColorModal: string;
                        thColorPopover: string;
                        thTextColor: string;
                        thFontWeight: string;
                        tdTextColor: string;
                        tdColor: string;
                        tdColorModal: string;
                        tdColorPopover: string;
                        borderColor: string;
                        borderColorModal: string;
                        borderColorPopover: string;
                        borderRadius: string;
                        thPaddingBorderedSmall: string;
                        thPaddingBorderedMedium: string;
                        thPaddingBorderedLarge: string;
                        thPaddingSmall: string;
                        thPaddingMedium: string;
                        thPaddingLarge: string;
                        tdPaddingBorderedSmall: string;
                        tdPaddingBorderedMedium: string;
                        tdPaddingBorderedLarge: string;
                        tdPaddingSmall: string;
                        tdPaddingMedium: string;
                        tdPaddingLarge: string;
                    },
                    any
                >
            >
        >;
        readonly builtinThemeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Descriptions',
                    {
                        lineHeight: string;
                        fontSizeSmall: string;
                        fontSizeMedium: string;
                        fontSizeLarge: string;
                        titleTextColor: string;
                        thColor: string;
                        thColorModal: string;
                        thColorPopover: string;
                        thTextColor: string;
                        thFontWeight: string;
                        tdTextColor: string;
                        tdColor: string;
                        tdColorModal: string;
                        tdColorPopover: string;
                        borderColor: string;
                        borderColorModal: string;
                        borderColorPopover: string;
                        borderRadius: string;
                        thPaddingBorderedSmall: string;
                        thPaddingBorderedMedium: string;
                        thPaddingBorderedLarge: string;
                        thPaddingSmall: string;
                        thPaddingMedium: string;
                        thPaddingLarge: string;
                        tdPaddingBorderedSmall: string;
                        tdPaddingBorderedMedium: string;
                        tdPaddingBorderedLarge: string;
                        tdPaddingSmall: string;
                        tdPaddingMedium: string;
                        tdPaddingLarge: string;
                    },
                    any
                >
            >
        >;
    },
    {
        mergedClsPrefix: globalThis.ComputedRef<string>;
        cssVars:
            | globalThis.ComputedRef<{
                  '--n-title-text-color': string;
                  '--n-th-padding': string;
                  '--n-td-padding': string;
                  '--n-font-size': string;
                  '--n-bezier': string;
                  '--n-th-font-weight': string;
                  '--n-line-height': string;
                  '--n-th-text-color': string;
                  '--n-td-text-color': string;
                  '--n-th-color': string;
                  '--n-th-color-modal': string;
                  '--n-th-color-popover': string;
                  '--n-td-color': string;
                  '--n-td-color-modal': string;
                  '--n-td-color-popover': string;
                  '--n-border-radius': string;
                  '--n-border-color': string;
                  '--n-border-color-modal': string;
                  '--n-border-color-popover': string;
              }>
            | undefined;
        themeClass: globalThis.Ref<string> | undefined;
        onRender: (() => void) | undefined;
        compitableColumn: globalThis.ComputedRef<number>;
        inlineThemeDisabled: boolean | undefined;
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
            readonly title: StringConstructor;
            readonly column: {
                readonly type: NumberConstructor;
                readonly default: 3;
            };
            readonly columns: NumberConstructor;
            readonly labelPlacement: {
                readonly type: PropType<'left' | 'top'>;
                readonly default: 'top';
            };
            readonly labelAlign: {
                readonly type: PropType<'left' | 'right' | 'center'>;
                readonly default: 'left';
            };
            readonly separator: {
                readonly type: StringConstructor;
                readonly default: ':';
            };
            readonly size: {
                readonly type: PropType<'small' | 'medium' | 'large'>;
                readonly default: 'medium';
            };
            readonly bordered: BooleanConstructor;
            readonly labelStyle: PropType<string | CSSProperties>;
            readonly contentStyle: PropType<string | CSSProperties>;
            readonly theme: PropType<
                import('../../_mixins').Theme<
                    'Descriptions',
                    {
                        lineHeight: string;
                        fontSizeSmall: string;
                        fontSizeMedium: string;
                        fontSizeLarge: string;
                        titleTextColor: string;
                        thColor: string;
                        thColorModal: string;
                        thColorPopover: string;
                        thTextColor: string;
                        thFontWeight: string;
                        tdTextColor: string;
                        tdColor: string;
                        tdColorModal: string;
                        tdColorPopover: string;
                        borderColor: string;
                        borderColorModal: string;
                        borderColorPopover: string;
                        borderRadius: string;
                        thPaddingBorderedSmall: string;
                        thPaddingBorderedMedium: string;
                        thPaddingBorderedLarge: string;
                        thPaddingSmall: string;
                        thPaddingMedium: string;
                        thPaddingLarge: string;
                        tdPaddingBorderedSmall: string;
                        tdPaddingBorderedMedium: string;
                        tdPaddingBorderedLarge: string;
                        tdPaddingSmall: string;
                        tdPaddingMedium: string;
                        tdPaddingLarge: string;
                    },
                    any
                >
            >;
            readonly themeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Descriptions',
                        {
                            lineHeight: string;
                            fontSizeSmall: string;
                            fontSizeMedium: string;
                            fontSizeLarge: string;
                            titleTextColor: string;
                            thColor: string;
                            thColorModal: string;
                            thColorPopover: string;
                            thTextColor: string;
                            thFontWeight: string;
                            tdTextColor: string;
                            tdColor: string;
                            tdColorModal: string;
                            tdColorPopover: string;
                            borderColor: string;
                            borderColorModal: string;
                            borderColorPopover: string;
                            borderRadius: string;
                            thPaddingBorderedSmall: string;
                            thPaddingBorderedMedium: string;
                            thPaddingBorderedLarge: string;
                            thPaddingSmall: string;
                            thPaddingMedium: string;
                            thPaddingLarge: string;
                            tdPaddingBorderedSmall: string;
                            tdPaddingBorderedMedium: string;
                            tdPaddingBorderedLarge: string;
                            tdPaddingSmall: string;
                            tdPaddingMedium: string;
                            tdPaddingLarge: string;
                        },
                        any
                    >
                >
            >;
            readonly builtinThemeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Descriptions',
                        {
                            lineHeight: string;
                            fontSizeSmall: string;
                            fontSizeMedium: string;
                            fontSizeLarge: string;
                            titleTextColor: string;
                            thColor: string;
                            thColorModal: string;
                            thColorPopover: string;
                            thTextColor: string;
                            thFontWeight: string;
                            tdTextColor: string;
                            tdColor: string;
                            tdColorModal: string;
                            tdColorPopover: string;
                            borderColor: string;
                            borderColorModal: string;
                            borderColorPopover: string;
                            borderRadius: string;
                            thPaddingBorderedSmall: string;
                            thPaddingBorderedMedium: string;
                            thPaddingBorderedLarge: string;
                            thPaddingSmall: string;
                            thPaddingMedium: string;
                            thPaddingLarge: string;
                            tdPaddingBorderedSmall: string;
                            tdPaddingBorderedMedium: string;
                            tdPaddingBorderedLarge: string;
                            tdPaddingSmall: string;
                            tdPaddingMedium: string;
                            tdPaddingLarge: string;
                        },
                        any
                    >
                >
            >;
        }>
    >,
    {
        readonly column: number;
        readonly size: 'small' | 'medium' | 'large';
        readonly separator: string;
        readonly bordered: boolean;
        readonly labelAlign: 'left' | 'right' | 'center';
        readonly labelPlacement: 'left' | 'top';
    },
    {}
>;
export default _default;
