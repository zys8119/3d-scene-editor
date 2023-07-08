import { PropType, Ref, ExtractPropTypes, Slots } from 'vue';
import { ExtractPublicPropTypes } from '../../_utils';
import type { MaybeArray } from '../../_utils';
import { OnItemHeaderClick, OnUpdateExpandedNames } from './interface';
export declare const collapseProps: {
    readonly defaultExpandedNames: {
        readonly type: PropType<string | number | (string | number)[] | null>;
        readonly default: null;
    };
    readonly expandedNames: PropType<
        string | number | (string | number)[] | null
    >;
    readonly arrowPlacement: {
        readonly type: PropType<'left' | 'right'>;
        readonly default: 'left';
    };
    readonly accordion: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly displayDirective: {
        readonly type: PropType<'show' | 'if'>;
        readonly default: 'if';
    };
    readonly onItemHeaderClick: PropType<MaybeArray<OnItemHeaderClick>>;
    readonly 'onUpdate:expandedNames': PropType<
        MaybeArray<OnUpdateExpandedNames>
    >;
    readonly onUpdateExpandedNames: PropType<MaybeArray<OnUpdateExpandedNames>>;
    readonly onExpandedNamesChange: {
        readonly type: PropType<MaybeArray<OnUpdateExpandedNames> | undefined>;
        readonly validator: () => boolean;
        readonly default: undefined;
    };
    readonly theme: PropType<
        import('../../_mixins').Theme<
            'Collapse',
            {
                titleFontSize: string;
                titleFontWeight: string;
                dividerColor: string;
                titleTextColor: string;
                titleTextColorDisabled: string;
                fontSize: string;
                textColor: string;
                arrowColor: string;
                arrowColorDisabled: string;
                itemMargin: string;
            },
            any
        >
    >;
    readonly themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Collapse',
                {
                    titleFontSize: string;
                    titleFontWeight: string;
                    dividerColor: string;
                    titleTextColor: string;
                    titleTextColorDisabled: string;
                    fontSize: string;
                    textColor: string;
                    arrowColor: string;
                    arrowColorDisabled: string;
                    itemMargin: string;
                },
                any
            >
        >
    >;
    readonly builtinThemeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Collapse',
                {
                    titleFontSize: string;
                    titleFontWeight: string;
                    dividerColor: string;
                    titleTextColor: string;
                    titleTextColorDisabled: string;
                    fontSize: string;
                    textColor: string;
                    arrowColor: string;
                    arrowColorDisabled: string;
                    itemMargin: string;
                },
                any
            >
        >
    >;
};
export type CollapseProps = ExtractPublicPropTypes<typeof collapseProps>;
export interface NCollapseInjection {
    props: ExtractPropTypes<typeof collapseProps>;
    expandedNamesRef: Ref<string | number | Array<string | number> | null>;
    mergedClsPrefixRef: Ref<string>;
    slots: Slots;
    toggleItem: (
        collapse: boolean,
        name: string | number,
        event: MouseEvent
    ) => void;
}
export declare const collapseInjectionKey: globalThis.InjectionKey<NCollapseInjection>;
declare const _default: import('vue').DefineComponent<
    {
        readonly defaultExpandedNames: {
            readonly type: PropType<
                string | number | (string | number)[] | null
            >;
            readonly default: null;
        };
        readonly expandedNames: PropType<
            string | number | (string | number)[] | null
        >;
        readonly arrowPlacement: {
            readonly type: PropType<'left' | 'right'>;
            readonly default: 'left';
        };
        readonly accordion: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly displayDirective: {
            readonly type: PropType<'show' | 'if'>;
            readonly default: 'if';
        };
        readonly onItemHeaderClick: PropType<MaybeArray<OnItemHeaderClick>>;
        readonly 'onUpdate:expandedNames': PropType<
            MaybeArray<OnUpdateExpandedNames>
        >;
        readonly onUpdateExpandedNames: PropType<
            MaybeArray<OnUpdateExpandedNames>
        >;
        readonly onExpandedNamesChange: {
            readonly type: PropType<
                MaybeArray<OnUpdateExpandedNames> | undefined
            >;
            readonly validator: () => boolean;
            readonly default: undefined;
        };
        readonly theme: PropType<
            import('../../_mixins').Theme<
                'Collapse',
                {
                    titleFontSize: string;
                    titleFontWeight: string;
                    dividerColor: string;
                    titleTextColor: string;
                    titleTextColorDisabled: string;
                    fontSize: string;
                    textColor: string;
                    arrowColor: string;
                    arrowColorDisabled: string;
                    itemMargin: string;
                },
                any
            >
        >;
        readonly themeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Collapse',
                    {
                        titleFontSize: string;
                        titleFontWeight: string;
                        dividerColor: string;
                        titleTextColor: string;
                        titleTextColorDisabled: string;
                        fontSize: string;
                        textColor: string;
                        arrowColor: string;
                        arrowColorDisabled: string;
                        itemMargin: string;
                    },
                    any
                >
            >
        >;
        readonly builtinThemeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Collapse',
                    {
                        titleFontSize: string;
                        titleFontWeight: string;
                        dividerColor: string;
                        titleTextColor: string;
                        titleTextColorDisabled: string;
                        fontSize: string;
                        textColor: string;
                        arrowColor: string;
                        arrowColorDisabled: string;
                        itemMargin: string;
                    },
                    any
                >
            >
        >;
    },
    {
        rtlEnabled:
            | Ref<
                  | import('../../config-provider/src/internal-interface').RtlItem
                  | undefined
              >
            | undefined;
        mergedTheme: globalThis.ComputedRef<{
            common: {
                baseColor: string;
                primaryColor: string;
                primaryColorHover: string;
                primaryColorPressed: string;
                primaryColorSuppl: string;
                infoColor: string;
                infoColorHover: string;
                infoColorPressed: string;
                infoColorSuppl: string;
                successColor: string;
                successColorHover: string;
                successColorPressed: string;
                successColorSuppl: string;
                warningColor: string;
                warningColorHover: string;
                warningColorPressed: string;
                warningColorSuppl: string;
                errorColor: string;
                errorColorHover: string;
                errorColorPressed: string;
                errorColorSuppl: string;
                textColorBase: string;
                textColor1: string;
                textColor2: string;
                textColor3: string;
                textColor6: string;
                textColor7: string;
                textColorDisabled: string;
                placeholderColor: string;
                placeholderColorDisabled: string;
                iconColor: string;
                iconColorHover: string;
                iconColorPressed: string;
                iconColorDisabled: string;
                opacity1: string;
                opacity2: string;
                opacity3: string;
                opacity4: string;
                opacity5: string;
                dividerColor: string;
                borderColor: string;
                closeIconColor: string;
                closeIconColorHover: string;
                closeIconColorPressed: string;
                closeColorHover: string;
                closeColorPressed: string;
                clearColor: string;
                clearColorHover: string;
                clearColorPressed: string;
                scrollbarColor: string;
                scrollbarColorHover: string;
                scrollbarWidth: string;
                scrollbarHeight: string;
                scrollbarBorderRadius: string;
                progressRailColor: string;
                railColor: string;
                popoverColor: string;
                tableColor: string;
                cardColor: string;
                modalColor: string;
                bodyColor: string;
                tagColor: string;
                avatarColor: string;
                invertedColor: string;
                inputColor: string;
                codeColor: string;
                tabColor: string;
                actionColor: string;
                tableHeaderColor: string;
                hoverColor: string;
                tableColorHover: string;
                tableColorStriped: string;
                pressedColor: string;
                opacityDisabled: string;
                inputColorDisabled: string;
                buttonColor2: string;
                buttonColor2Hover: string;
                buttonColor2Pressed: string;
                boxShadow1: string;
                boxShadow2: string;
                boxShadow3: string;
                fontFamily: string;
                fontFamilyMono: string;
                fontWeight: string;
                fontWeightStrong: string;
                cubicBezierEaseInOut: string;
                cubicBezierEaseOut: string;
                cubicBezierEaseIn: string;
                borderRadius: string;
                borderRadiusSmall: string;
                fontSize: string;
                fontSizeMini: string;
                fontSizeTiny: string;
                fontSizeSmall: string;
                fontSizeMedium: string;
                fontSizeLarge: string;
                fontSizeHuge: string;
                lineHeight: string;
                heightMini: string;
                heightTiny: string;
                heightSmall: string;
                heightMedium: string;
                heightLarge: string;
                heightHuge: string;
                name: 'common';
            };
            self: {
                titleFontSize: string;
                titleFontWeight: string;
                dividerColor: string;
                titleTextColor: string;
                titleTextColorDisabled: string;
                fontSize: string;
                textColor: string;
                arrowColor: string;
                arrowColorDisabled: string;
                itemMargin: string;
            };
            peers: any;
            peerOverrides: {
                [x: string]: any;
            };
        }>;
        mergedClsPrefix: globalThis.ComputedRef<string>;
        cssVars:
            | globalThis.ComputedRef<{
                  '--n-font-size': string;
                  '--n-bezier': string;
                  '--n-text-color': string;
                  '--n-divider-color': string;
                  '--n-title-font-size': string;
                  '--n-title-text-color': string;
                  '--n-title-text-color-disabled': string;
                  '--n-title-font-weight': string;
                  '--n-arrow-color': string;
                  '--n-arrow-color-disabled': string;
                  '--n-item-margin': string;
              }>
            | undefined;
        themeClass: Ref<string> | undefined;
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
        ExtractPropTypes<{
            readonly defaultExpandedNames: {
                readonly type: PropType<
                    string | number | (string | number)[] | null
                >;
                readonly default: null;
            };
            readonly expandedNames: PropType<
                string | number | (string | number)[] | null
            >;
            readonly arrowPlacement: {
                readonly type: PropType<'left' | 'right'>;
                readonly default: 'left';
            };
            readonly accordion: {
                readonly type: BooleanConstructor;
                readonly default: false;
            };
            readonly displayDirective: {
                readonly type: PropType<'show' | 'if'>;
                readonly default: 'if';
            };
            readonly onItemHeaderClick: PropType<MaybeArray<OnItemHeaderClick>>;
            readonly 'onUpdate:expandedNames': PropType<
                MaybeArray<OnUpdateExpandedNames>
            >;
            readonly onUpdateExpandedNames: PropType<
                MaybeArray<OnUpdateExpandedNames>
            >;
            readonly onExpandedNamesChange: {
                readonly type: PropType<
                    MaybeArray<OnUpdateExpandedNames> | undefined
                >;
                readonly validator: () => boolean;
                readonly default: undefined;
            };
            readonly theme: PropType<
                import('../../_mixins').Theme<
                    'Collapse',
                    {
                        titleFontSize: string;
                        titleFontWeight: string;
                        dividerColor: string;
                        titleTextColor: string;
                        titleTextColorDisabled: string;
                        fontSize: string;
                        textColor: string;
                        arrowColor: string;
                        arrowColorDisabled: string;
                        itemMargin: string;
                    },
                    any
                >
            >;
            readonly themeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Collapse',
                        {
                            titleFontSize: string;
                            titleFontWeight: string;
                            dividerColor: string;
                            titleTextColor: string;
                            titleTextColorDisabled: string;
                            fontSize: string;
                            textColor: string;
                            arrowColor: string;
                            arrowColorDisabled: string;
                            itemMargin: string;
                        },
                        any
                    >
                >
            >;
            readonly builtinThemeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Collapse',
                        {
                            titleFontSize: string;
                            titleFontWeight: string;
                            dividerColor: string;
                            titleTextColor: string;
                            titleTextColorDisabled: string;
                            fontSize: string;
                            textColor: string;
                            arrowColor: string;
                            arrowColorDisabled: string;
                            itemMargin: string;
                        },
                        any
                    >
                >
            >;
        }>
    >,
    {
        readonly displayDirective: 'show' | 'if';
        readonly defaultExpandedNames:
            | string
            | number
            | (string | number)[]
            | null;
        readonly arrowPlacement: 'left' | 'right';
        readonly accordion: boolean;
        readonly onExpandedNamesChange:
            | MaybeArray<OnUpdateExpandedNames>
            | undefined;
    },
    {}
>;
export default _default;
