import { PropType, CSSProperties } from 'vue';
import type { ExtractPublicPropTypes, MaybeArray } from '../../_utils';
export interface CardSegmented {
    content?: boolean | 'soft';
    footer?: boolean | 'soft';
    action?: boolean | 'soft';
}
export declare const cardBaseProps: {
    readonly title: StringConstructor;
    readonly contentStyle: PropType<string | CSSProperties>;
    readonly headerStyle: PropType<string | CSSProperties>;
    readonly headerExtraStyle: PropType<string | CSSProperties>;
    readonly footerStyle: PropType<string | CSSProperties>;
    readonly embedded: BooleanConstructor;
    readonly segmented: {
        readonly type: PropType<boolean | CardSegmented>;
        readonly default: false;
    };
    readonly size: {
        readonly type: PropType<'small' | 'medium' | 'large' | 'huge'>;
        readonly default: 'medium';
    };
    readonly bordered: {
        readonly type: BooleanConstructor;
        readonly default: boolean;
    };
    readonly closable: BooleanConstructor;
    readonly hoverable: BooleanConstructor;
    readonly role: StringConstructor;
    readonly onClose: PropType<MaybeArray<() => void>>;
    readonly tag: {
        readonly type: PropType<keyof HTMLElementTagNameMap>;
        readonly default: 'div';
    };
};
export declare const cardBasePropKeys: (
    | 'tag'
    | 'size'
    | 'title'
    | 'role'
    | 'bordered'
    | 'closable'
    | 'contentStyle'
    | 'onClose'
    | 'headerStyle'
    | 'footerStyle'
    | 'headerExtraStyle'
    | 'embedded'
    | 'segmented'
    | 'hoverable'
)[];
export declare const cardProps: {
    title: StringConstructor;
    contentStyle: PropType<string | CSSProperties>;
    headerStyle: PropType<string | CSSProperties>;
    headerExtraStyle: PropType<string | CSSProperties>;
    footerStyle: PropType<string | CSSProperties>;
    embedded: BooleanConstructor;
    segmented: {
        readonly type: PropType<boolean | CardSegmented>;
        readonly default: false;
    };
    size: {
        readonly type: PropType<'small' | 'medium' | 'large' | 'huge'>;
        readonly default: 'medium';
    };
    bordered: {
        readonly type: BooleanConstructor;
        readonly default: boolean;
    };
    closable: BooleanConstructor;
    hoverable: BooleanConstructor;
    role: StringConstructor;
    onClose: PropType<MaybeArray<() => void>>;
    tag: {
        readonly type: PropType<keyof HTMLElementTagNameMap>;
        readonly default: 'div';
    };
    theme: PropType<
        import('../../_mixins').Theme<
            'Card',
            {
                lineHeight: string;
                color: string;
                colorModal: string;
                colorPopover: string;
                colorTarget: string;
                colorEmbedded: string;
                colorEmbeddedModal: string;
                colorEmbeddedPopover: string;
                textColor: string;
                titleTextColor: string;
                borderColor: string;
                actionColor: string;
                titleFontWeight: string;
                closeColorHover: string;
                closeColorPressed: string;
                closeBorderRadius: string;
                closeIconColor: string;
                closeIconColorHover: string;
                closeIconColorPressed: string;
                fontSizeSmall: string;
                fontSizeMedium: string;
                fontSizeLarge: string;
                fontSizeHuge: string;
                boxShadow: string;
                borderRadius: string;
                paddingSmall: string;
                paddingMedium: string;
                paddingLarge: string;
                paddingHuge: string;
                titleFontSizeSmall: string;
                titleFontSizeMedium: string;
                titleFontSizeLarge: string;
                titleFontSizeHuge: string;
                closeIconSize: string;
                closeSize: string;
            },
            any
        >
    >;
    themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Card',
                {
                    lineHeight: string;
                    color: string;
                    colorModal: string;
                    colorPopover: string;
                    colorTarget: string;
                    colorEmbedded: string;
                    colorEmbeddedModal: string;
                    colorEmbeddedPopover: string;
                    textColor: string;
                    titleTextColor: string;
                    borderColor: string;
                    actionColor: string;
                    titleFontWeight: string;
                    closeColorHover: string;
                    closeColorPressed: string;
                    closeBorderRadius: string;
                    closeIconColor: string;
                    closeIconColorHover: string;
                    closeIconColorPressed: string;
                    fontSizeSmall: string;
                    fontSizeMedium: string;
                    fontSizeLarge: string;
                    fontSizeHuge: string;
                    boxShadow: string;
                    borderRadius: string;
                    paddingSmall: string;
                    paddingMedium: string;
                    paddingLarge: string;
                    paddingHuge: string;
                    titleFontSizeSmall: string;
                    titleFontSizeMedium: string;
                    titleFontSizeLarge: string;
                    titleFontSizeHuge: string;
                    closeIconSize: string;
                    closeSize: string;
                },
                any
            >
        >
    >;
    builtinThemeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Card',
                {
                    lineHeight: string;
                    color: string;
                    colorModal: string;
                    colorPopover: string;
                    colorTarget: string;
                    colorEmbedded: string;
                    colorEmbeddedModal: string;
                    colorEmbeddedPopover: string;
                    textColor: string;
                    titleTextColor: string;
                    borderColor: string;
                    actionColor: string;
                    titleFontWeight: string;
                    closeColorHover: string;
                    closeColorPressed: string;
                    closeBorderRadius: string;
                    closeIconColor: string;
                    closeIconColorHover: string;
                    closeIconColorPressed: string;
                    fontSizeSmall: string;
                    fontSizeMedium: string;
                    fontSizeLarge: string;
                    fontSizeHuge: string;
                    boxShadow: string;
                    borderRadius: string;
                    paddingSmall: string;
                    paddingMedium: string;
                    paddingLarge: string;
                    paddingHuge: string;
                    titleFontSizeSmall: string;
                    titleFontSizeMedium: string;
                    titleFontSizeLarge: string;
                    titleFontSizeHuge: string;
                    closeIconSize: string;
                    closeSize: string;
                },
                any
            >
        >
    >;
};
export type CardProps = ExtractPublicPropTypes<typeof cardProps>;
declare const _default: import('vue').DefineComponent<
    {
        title: StringConstructor;
        contentStyle: PropType<string | CSSProperties>;
        headerStyle: PropType<string | CSSProperties>;
        headerExtraStyle: PropType<string | CSSProperties>;
        footerStyle: PropType<string | CSSProperties>;
        embedded: BooleanConstructor;
        segmented: {
            readonly type: PropType<boolean | CardSegmented>;
            readonly default: false;
        };
        size: {
            readonly type: PropType<'small' | 'medium' | 'large' | 'huge'>;
            readonly default: 'medium';
        };
        bordered: {
            readonly type: BooleanConstructor;
            readonly default: boolean;
        };
        closable: BooleanConstructor;
        hoverable: BooleanConstructor;
        role: StringConstructor;
        onClose: PropType<MaybeArray<() => void>>;
        tag: {
            readonly type: PropType<keyof HTMLElementTagNameMap>;
            readonly default: 'div';
        };
        theme: PropType<
            import('../../_mixins').Theme<
                'Card',
                {
                    lineHeight: string;
                    color: string;
                    colorModal: string;
                    colorPopover: string;
                    colorTarget: string;
                    colorEmbedded: string;
                    colorEmbeddedModal: string;
                    colorEmbeddedPopover: string;
                    textColor: string;
                    titleTextColor: string;
                    borderColor: string;
                    actionColor: string;
                    titleFontWeight: string;
                    closeColorHover: string;
                    closeColorPressed: string;
                    closeBorderRadius: string;
                    closeIconColor: string;
                    closeIconColorHover: string;
                    closeIconColorPressed: string;
                    fontSizeSmall: string;
                    fontSizeMedium: string;
                    fontSizeLarge: string;
                    fontSizeHuge: string;
                    boxShadow: string;
                    borderRadius: string;
                    paddingSmall: string;
                    paddingMedium: string;
                    paddingLarge: string;
                    paddingHuge: string;
                    titleFontSizeSmall: string;
                    titleFontSizeMedium: string;
                    titleFontSizeLarge: string;
                    titleFontSizeHuge: string;
                    closeIconSize: string;
                    closeSize: string;
                },
                any
            >
        >;
        themeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Card',
                    {
                        lineHeight: string;
                        color: string;
                        colorModal: string;
                        colorPopover: string;
                        colorTarget: string;
                        colorEmbedded: string;
                        colorEmbeddedModal: string;
                        colorEmbeddedPopover: string;
                        textColor: string;
                        titleTextColor: string;
                        borderColor: string;
                        actionColor: string;
                        titleFontWeight: string;
                        closeColorHover: string;
                        closeColorPressed: string;
                        closeBorderRadius: string;
                        closeIconColor: string;
                        closeIconColorHover: string;
                        closeIconColorPressed: string;
                        fontSizeSmall: string;
                        fontSizeMedium: string;
                        fontSizeLarge: string;
                        fontSizeHuge: string;
                        boxShadow: string;
                        borderRadius: string;
                        paddingSmall: string;
                        paddingMedium: string;
                        paddingLarge: string;
                        paddingHuge: string;
                        titleFontSizeSmall: string;
                        titleFontSizeMedium: string;
                        titleFontSizeLarge: string;
                        titleFontSizeHuge: string;
                        closeIconSize: string;
                        closeSize: string;
                    },
                    any
                >
            >
        >;
        builtinThemeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Card',
                    {
                        lineHeight: string;
                        color: string;
                        colorModal: string;
                        colorPopover: string;
                        colorTarget: string;
                        colorEmbedded: string;
                        colorEmbeddedModal: string;
                        colorEmbeddedPopover: string;
                        textColor: string;
                        titleTextColor: string;
                        borderColor: string;
                        actionColor: string;
                        titleFontWeight: string;
                        closeColorHover: string;
                        closeColorPressed: string;
                        closeBorderRadius: string;
                        closeIconColor: string;
                        closeIconColorHover: string;
                        closeIconColorPressed: string;
                        fontSizeSmall: string;
                        fontSizeMedium: string;
                        fontSizeLarge: string;
                        fontSizeHuge: string;
                        boxShadow: string;
                        borderRadius: string;
                        paddingSmall: string;
                        paddingMedium: string;
                        paddingLarge: string;
                        paddingHuge: string;
                        titleFontSizeSmall: string;
                        titleFontSizeMedium: string;
                        titleFontSizeLarge: string;
                        titleFontSizeHuge: string;
                        closeIconSize: string;
                        closeSize: string;
                    },
                    any
                >
            >
        >;
    },
    {
        rtlEnabled:
            | globalThis.Ref<
                  | import('../../config-provider/src/internal-interface').RtlItem
                  | undefined
              >
            | undefined;
        mergedClsPrefix: globalThis.ComputedRef<string>;
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
                lineHeight: string;
                color: string;
                colorModal: string;
                colorPopover: string;
                colorTarget: string;
                colorEmbedded: string;
                colorEmbeddedModal: string;
                colorEmbeddedPopover: string;
                textColor: string;
                titleTextColor: string;
                borderColor: string;
                actionColor: string;
                titleFontWeight: string;
                closeColorHover: string;
                closeColorPressed: string;
                closeBorderRadius: string;
                closeIconColor: string;
                closeIconColorHover: string;
                closeIconColorPressed: string;
                fontSizeSmall: string;
                fontSizeMedium: string;
                fontSizeLarge: string;
                fontSizeHuge: string;
                boxShadow: string;
                borderRadius: string;
                paddingSmall: string;
                paddingMedium: string;
                paddingLarge: string;
                paddingHuge: string;
                titleFontSizeSmall: string;
                titleFontSizeMedium: string;
                titleFontSizeLarge: string;
                titleFontSizeHuge: string;
                closeIconSize: string;
                closeSize: string;
            };
            peers: any;
            peerOverrides: {
                [x: string]: any;
            };
        }>;
        handleCloseClick: () => void;
        cssVars:
            | globalThis.ComputedRef<{
                  '--n-bezier': string;
                  '--n-border-radius': string;
                  '--n-color': string;
                  '--n-color-modal': string;
                  '--n-color-popover': string;
                  '--n-color-embedded': string;
                  '--n-color-embedded-modal': string;
                  '--n-color-embedded-popover': string;
                  '--n-color-target': string;
                  '--n-text-color': string;
                  '--n-line-height': string;
                  '--n-action-color': string;
                  '--n-title-text-color': string;
                  '--n-title-font-weight': string;
                  '--n-close-icon-color': string;
                  '--n-close-icon-color-hover': string;
                  '--n-close-icon-color-pressed': string;
                  '--n-close-color-hover': string;
                  '--n-close-color-pressed': string;
                  '--n-border-color': string;
                  '--n-box-shadow': string;
                  '--n-padding-top': string;
                  '--n-padding-bottom': string;
                  '--n-padding-left': string;
                  '--n-font-size': string;
                  '--n-title-font-size': string;
                  '--n-close-size': string;
                  '--n-close-icon-size': string;
                  '--n-close-border-radius': string;
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
            title: StringConstructor;
            contentStyle: PropType<string | CSSProperties>;
            headerStyle: PropType<string | CSSProperties>;
            headerExtraStyle: PropType<string | CSSProperties>;
            footerStyle: PropType<string | CSSProperties>;
            embedded: BooleanConstructor;
            segmented: {
                readonly type: PropType<boolean | CardSegmented>;
                readonly default: false;
            };
            size: {
                readonly type: PropType<'small' | 'medium' | 'large' | 'huge'>;
                readonly default: 'medium';
            };
            bordered: {
                readonly type: BooleanConstructor;
                readonly default: boolean;
            };
            closable: BooleanConstructor;
            hoverable: BooleanConstructor;
            role: StringConstructor;
            onClose: PropType<MaybeArray<() => void>>;
            tag: {
                readonly type: PropType<keyof HTMLElementTagNameMap>;
                readonly default: 'div';
            };
            theme: PropType<
                import('../../_mixins').Theme<
                    'Card',
                    {
                        lineHeight: string;
                        color: string;
                        colorModal: string;
                        colorPopover: string;
                        colorTarget: string;
                        colorEmbedded: string;
                        colorEmbeddedModal: string;
                        colorEmbeddedPopover: string;
                        textColor: string;
                        titleTextColor: string;
                        borderColor: string;
                        actionColor: string;
                        titleFontWeight: string;
                        closeColorHover: string;
                        closeColorPressed: string;
                        closeBorderRadius: string;
                        closeIconColor: string;
                        closeIconColorHover: string;
                        closeIconColorPressed: string;
                        fontSizeSmall: string;
                        fontSizeMedium: string;
                        fontSizeLarge: string;
                        fontSizeHuge: string;
                        boxShadow: string;
                        borderRadius: string;
                        paddingSmall: string;
                        paddingMedium: string;
                        paddingLarge: string;
                        paddingHuge: string;
                        titleFontSizeSmall: string;
                        titleFontSizeMedium: string;
                        titleFontSizeLarge: string;
                        titleFontSizeHuge: string;
                        closeIconSize: string;
                        closeSize: string;
                    },
                    any
                >
            >;
            themeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Card',
                        {
                            lineHeight: string;
                            color: string;
                            colorModal: string;
                            colorPopover: string;
                            colorTarget: string;
                            colorEmbedded: string;
                            colorEmbeddedModal: string;
                            colorEmbeddedPopover: string;
                            textColor: string;
                            titleTextColor: string;
                            borderColor: string;
                            actionColor: string;
                            titleFontWeight: string;
                            closeColorHover: string;
                            closeColorPressed: string;
                            closeBorderRadius: string;
                            closeIconColor: string;
                            closeIconColorHover: string;
                            closeIconColorPressed: string;
                            fontSizeSmall: string;
                            fontSizeMedium: string;
                            fontSizeLarge: string;
                            fontSizeHuge: string;
                            boxShadow: string;
                            borderRadius: string;
                            paddingSmall: string;
                            paddingMedium: string;
                            paddingLarge: string;
                            paddingHuge: string;
                            titleFontSizeSmall: string;
                            titleFontSizeMedium: string;
                            titleFontSizeLarge: string;
                            titleFontSizeHuge: string;
                            closeIconSize: string;
                            closeSize: string;
                        },
                        any
                    >
                >
            >;
            builtinThemeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Card',
                        {
                            lineHeight: string;
                            color: string;
                            colorModal: string;
                            colorPopover: string;
                            colorTarget: string;
                            colorEmbedded: string;
                            colorEmbeddedModal: string;
                            colorEmbeddedPopover: string;
                            textColor: string;
                            titleTextColor: string;
                            borderColor: string;
                            actionColor: string;
                            titleFontWeight: string;
                            closeColorHover: string;
                            closeColorPressed: string;
                            closeBorderRadius: string;
                            closeIconColor: string;
                            closeIconColorHover: string;
                            closeIconColorPressed: string;
                            fontSizeSmall: string;
                            fontSizeMedium: string;
                            fontSizeLarge: string;
                            fontSizeHuge: string;
                            boxShadow: string;
                            borderRadius: string;
                            paddingSmall: string;
                            paddingMedium: string;
                            paddingLarge: string;
                            paddingHuge: string;
                            titleFontSizeSmall: string;
                            titleFontSizeMedium: string;
                            titleFontSizeLarge: string;
                            titleFontSizeHuge: string;
                            closeIconSize: string;
                            closeSize: string;
                        },
                        any
                    >
                >
            >;
        }>
    >,
    {
        tag: keyof HTMLElementTagNameMap;
        size: 'small' | 'medium' | 'large' | 'huge';
        bordered: boolean;
        closable: boolean;
        embedded: boolean;
        segmented: boolean | CardSegmented;
        hoverable: boolean;
    },
    {}
>;
export default _default;
