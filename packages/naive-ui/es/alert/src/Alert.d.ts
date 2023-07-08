import { PropType } from 'vue';
import type { ExtractPublicPropTypes } from '../../_utils';
export declare const alertProps: {
    title: StringConstructor;
    showIcon: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: PropType<'default' | 'error' | 'info' | 'success' | 'warning'>;
        default: string;
    };
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    closable: BooleanConstructor;
    onClose: FunctionConstructor;
    onAfterLeave: FunctionConstructor;
    /** @deprecated */
    onAfterHide: FunctionConstructor;
    theme: PropType<
        import('../../_mixins').Theme<
            'Alert',
            {
                fontSize: string;
                lineHeight: string;
                titleFontWeight: string;
                borderRadius: string;
                border: string;
                color: string;
                titleTextColor: string;
                iconColor: string;
                contentTextColor: string;
                closeBorderRadius: string;
                closeColorHover: string;
                closeColorPressed: string;
                closeIconColor: string;
                closeIconColorHover: string;
                closeIconColorPressed: string;
                borderInfo: string;
                colorInfo: string;
                titleTextColorInfo: string;
                iconColorInfo: string;
                contentTextColorInfo: string;
                closeColorHoverInfo: string;
                closeColorPressedInfo: string;
                closeIconColorInfo: string;
                closeIconColorHoverInfo: string;
                closeIconColorPressedInfo: string;
                borderSuccess: string;
                colorSuccess: string;
                titleTextColorSuccess: string;
                iconColorSuccess: string;
                contentTextColorSuccess: string;
                closeColorHoverSuccess: string;
                closeColorPressedSuccess: string;
                closeIconColorSuccess: string;
                closeIconColorHoverSuccess: string;
                closeIconColorPressedSuccess: string;
                borderWarning: string;
                colorWarning: string;
                titleTextColorWarning: string;
                iconColorWarning: string;
                contentTextColorWarning: string;
                closeColorHoverWarning: string;
                closeColorPressedWarning: string;
                closeIconColorWarning: string;
                closeIconColorHoverWarning: string;
                closeIconColorPressedWarning: string;
                borderError: string;
                colorError: string;
                titleTextColorError: string;
                iconColorError: string;
                contentTextColorError: string;
                closeColorHoverError: string;
                closeColorPressedError: string;
                closeIconColorError: string;
                closeIconColorHoverError: string;
                closeIconColorPressedError: string;
                iconMargin: string;
                iconMarginRtl: string;
                iconSize: string;
                closeIconSize: string;
                closeSize: string;
                closeMargin: string;
                closeMarginRtl: string;
                padding: string;
            },
            any
        >
    >;
    themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Alert',
                {
                    fontSize: string;
                    lineHeight: string;
                    titleFontWeight: string;
                    borderRadius: string;
                    border: string;
                    color: string;
                    titleTextColor: string;
                    iconColor: string;
                    contentTextColor: string;
                    closeBorderRadius: string;
                    closeColorHover: string;
                    closeColorPressed: string;
                    closeIconColor: string;
                    closeIconColorHover: string;
                    closeIconColorPressed: string;
                    borderInfo: string;
                    colorInfo: string;
                    titleTextColorInfo: string;
                    iconColorInfo: string;
                    contentTextColorInfo: string;
                    closeColorHoverInfo: string;
                    closeColorPressedInfo: string;
                    closeIconColorInfo: string;
                    closeIconColorHoverInfo: string;
                    closeIconColorPressedInfo: string;
                    borderSuccess: string;
                    colorSuccess: string;
                    titleTextColorSuccess: string;
                    iconColorSuccess: string;
                    contentTextColorSuccess: string;
                    closeColorHoverSuccess: string;
                    closeColorPressedSuccess: string;
                    closeIconColorSuccess: string;
                    closeIconColorHoverSuccess: string;
                    closeIconColorPressedSuccess: string;
                    borderWarning: string;
                    colorWarning: string;
                    titleTextColorWarning: string;
                    iconColorWarning: string;
                    contentTextColorWarning: string;
                    closeColorHoverWarning: string;
                    closeColorPressedWarning: string;
                    closeIconColorWarning: string;
                    closeIconColorHoverWarning: string;
                    closeIconColorPressedWarning: string;
                    borderError: string;
                    colorError: string;
                    titleTextColorError: string;
                    iconColorError: string;
                    contentTextColorError: string;
                    closeColorHoverError: string;
                    closeColorPressedError: string;
                    closeIconColorError: string;
                    closeIconColorHoverError: string;
                    closeIconColorPressedError: string;
                    iconMargin: string;
                    iconMarginRtl: string;
                    iconSize: string;
                    closeIconSize: string;
                    closeSize: string;
                    closeMargin: string;
                    closeMarginRtl: string;
                    padding: string;
                },
                any
            >
        >
    >;
    builtinThemeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Alert',
                {
                    fontSize: string;
                    lineHeight: string;
                    titleFontWeight: string;
                    borderRadius: string;
                    border: string;
                    color: string;
                    titleTextColor: string;
                    iconColor: string;
                    contentTextColor: string;
                    closeBorderRadius: string;
                    closeColorHover: string;
                    closeColorPressed: string;
                    closeIconColor: string;
                    closeIconColorHover: string;
                    closeIconColorPressed: string;
                    borderInfo: string;
                    colorInfo: string;
                    titleTextColorInfo: string;
                    iconColorInfo: string;
                    contentTextColorInfo: string;
                    closeColorHoverInfo: string;
                    closeColorPressedInfo: string;
                    closeIconColorInfo: string;
                    closeIconColorHoverInfo: string;
                    closeIconColorPressedInfo: string;
                    borderSuccess: string;
                    colorSuccess: string;
                    titleTextColorSuccess: string;
                    iconColorSuccess: string;
                    contentTextColorSuccess: string;
                    closeColorHoverSuccess: string;
                    closeColorPressedSuccess: string;
                    closeIconColorSuccess: string;
                    closeIconColorHoverSuccess: string;
                    closeIconColorPressedSuccess: string;
                    borderWarning: string;
                    colorWarning: string;
                    titleTextColorWarning: string;
                    iconColorWarning: string;
                    contentTextColorWarning: string;
                    closeColorHoverWarning: string;
                    closeColorPressedWarning: string;
                    closeIconColorWarning: string;
                    closeIconColorHoverWarning: string;
                    closeIconColorPressedWarning: string;
                    borderError: string;
                    colorError: string;
                    titleTextColorError: string;
                    iconColorError: string;
                    contentTextColorError: string;
                    closeColorHoverError: string;
                    closeColorPressedError: string;
                    closeIconColorError: string;
                    closeIconColorHoverError: string;
                    closeIconColorPressedError: string;
                    iconMargin: string;
                    iconMarginRtl: string;
                    iconSize: string;
                    closeIconSize: string;
                    closeSize: string;
                    closeMargin: string;
                    closeMarginRtl: string;
                    padding: string;
                },
                any
            >
        >
    >;
};
export type AlertProps = ExtractPublicPropTypes<typeof alertProps>;
declare const _default: import('vue').DefineComponent<
    {
        title: StringConstructor;
        showIcon: {
            type: BooleanConstructor;
            default: boolean;
        };
        type: {
            type: PropType<
                'default' | 'error' | 'info' | 'success' | 'warning'
            >;
            default: string;
        };
        bordered: {
            type: BooleanConstructor;
            default: boolean;
        };
        closable: BooleanConstructor;
        onClose: FunctionConstructor;
        onAfterLeave: FunctionConstructor;
        /** @deprecated */
        onAfterHide: FunctionConstructor;
        theme: PropType<
            import('../../_mixins').Theme<
                'Alert',
                {
                    fontSize: string;
                    lineHeight: string;
                    titleFontWeight: string;
                    borderRadius: string;
                    border: string;
                    color: string;
                    titleTextColor: string;
                    iconColor: string;
                    contentTextColor: string;
                    closeBorderRadius: string;
                    closeColorHover: string;
                    closeColorPressed: string;
                    closeIconColor: string;
                    closeIconColorHover: string;
                    closeIconColorPressed: string;
                    borderInfo: string;
                    colorInfo: string;
                    titleTextColorInfo: string;
                    iconColorInfo: string;
                    contentTextColorInfo: string;
                    closeColorHoverInfo: string;
                    closeColorPressedInfo: string;
                    closeIconColorInfo: string;
                    closeIconColorHoverInfo: string;
                    closeIconColorPressedInfo: string;
                    borderSuccess: string;
                    colorSuccess: string;
                    titleTextColorSuccess: string;
                    iconColorSuccess: string;
                    contentTextColorSuccess: string;
                    closeColorHoverSuccess: string;
                    closeColorPressedSuccess: string;
                    closeIconColorSuccess: string;
                    closeIconColorHoverSuccess: string;
                    closeIconColorPressedSuccess: string;
                    borderWarning: string;
                    colorWarning: string;
                    titleTextColorWarning: string;
                    iconColorWarning: string;
                    contentTextColorWarning: string;
                    closeColorHoverWarning: string;
                    closeColorPressedWarning: string;
                    closeIconColorWarning: string;
                    closeIconColorHoverWarning: string;
                    closeIconColorPressedWarning: string;
                    borderError: string;
                    colorError: string;
                    titleTextColorError: string;
                    iconColorError: string;
                    contentTextColorError: string;
                    closeColorHoverError: string;
                    closeColorPressedError: string;
                    closeIconColorError: string;
                    closeIconColorHoverError: string;
                    closeIconColorPressedError: string;
                    iconMargin: string;
                    iconMarginRtl: string;
                    iconSize: string;
                    closeIconSize: string;
                    closeSize: string;
                    closeMargin: string;
                    closeMarginRtl: string;
                    padding: string;
                },
                any
            >
        >;
        themeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Alert',
                    {
                        fontSize: string;
                        lineHeight: string;
                        titleFontWeight: string;
                        borderRadius: string;
                        border: string;
                        color: string;
                        titleTextColor: string;
                        iconColor: string;
                        contentTextColor: string;
                        closeBorderRadius: string;
                        closeColorHover: string;
                        closeColorPressed: string;
                        closeIconColor: string;
                        closeIconColorHover: string;
                        closeIconColorPressed: string;
                        borderInfo: string;
                        colorInfo: string;
                        titleTextColorInfo: string;
                        iconColorInfo: string;
                        contentTextColorInfo: string;
                        closeColorHoverInfo: string;
                        closeColorPressedInfo: string;
                        closeIconColorInfo: string;
                        closeIconColorHoverInfo: string;
                        closeIconColorPressedInfo: string;
                        borderSuccess: string;
                        colorSuccess: string;
                        titleTextColorSuccess: string;
                        iconColorSuccess: string;
                        contentTextColorSuccess: string;
                        closeColorHoverSuccess: string;
                        closeColorPressedSuccess: string;
                        closeIconColorSuccess: string;
                        closeIconColorHoverSuccess: string;
                        closeIconColorPressedSuccess: string;
                        borderWarning: string;
                        colorWarning: string;
                        titleTextColorWarning: string;
                        iconColorWarning: string;
                        contentTextColorWarning: string;
                        closeColorHoverWarning: string;
                        closeColorPressedWarning: string;
                        closeIconColorWarning: string;
                        closeIconColorHoverWarning: string;
                        closeIconColorPressedWarning: string;
                        borderError: string;
                        colorError: string;
                        titleTextColorError: string;
                        iconColorError: string;
                        contentTextColorError: string;
                        closeColorHoverError: string;
                        closeColorPressedError: string;
                        closeIconColorError: string;
                        closeIconColorHoverError: string;
                        closeIconColorPressedError: string;
                        iconMargin: string;
                        iconMarginRtl: string;
                        iconSize: string;
                        closeIconSize: string;
                        closeSize: string;
                        closeMargin: string;
                        closeMarginRtl: string;
                        padding: string;
                    },
                    any
                >
            >
        >;
        builtinThemeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Alert',
                    {
                        fontSize: string;
                        lineHeight: string;
                        titleFontWeight: string;
                        borderRadius: string;
                        border: string;
                        color: string;
                        titleTextColor: string;
                        iconColor: string;
                        contentTextColor: string;
                        closeBorderRadius: string;
                        closeColorHover: string;
                        closeColorPressed: string;
                        closeIconColor: string;
                        closeIconColorHover: string;
                        closeIconColorPressed: string;
                        borderInfo: string;
                        colorInfo: string;
                        titleTextColorInfo: string;
                        iconColorInfo: string;
                        contentTextColorInfo: string;
                        closeColorHoverInfo: string;
                        closeColorPressedInfo: string;
                        closeIconColorInfo: string;
                        closeIconColorHoverInfo: string;
                        closeIconColorPressedInfo: string;
                        borderSuccess: string;
                        colorSuccess: string;
                        titleTextColorSuccess: string;
                        iconColorSuccess: string;
                        contentTextColorSuccess: string;
                        closeColorHoverSuccess: string;
                        closeColorPressedSuccess: string;
                        closeIconColorSuccess: string;
                        closeIconColorHoverSuccess: string;
                        closeIconColorPressedSuccess: string;
                        borderWarning: string;
                        colorWarning: string;
                        titleTextColorWarning: string;
                        iconColorWarning: string;
                        contentTextColorWarning: string;
                        closeColorHoverWarning: string;
                        closeColorPressedWarning: string;
                        closeIconColorWarning: string;
                        closeIconColorHoverWarning: string;
                        closeIconColorPressedWarning: string;
                        borderError: string;
                        colorError: string;
                        titleTextColorError: string;
                        iconColorError: string;
                        contentTextColorError: string;
                        closeColorHoverError: string;
                        closeColorPressedError: string;
                        closeIconColorError: string;
                        closeIconColorHoverError: string;
                        closeIconColorPressedError: string;
                        iconMargin: string;
                        iconMarginRtl: string;
                        iconSize: string;
                        closeIconSize: string;
                        closeSize: string;
                        closeMargin: string;
                        closeMarginRtl: string;
                        padding: string;
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
        mergedBordered: globalThis.ComputedRef<boolean>;
        visible: globalThis.Ref<boolean>;
        handleCloseClick: () => void;
        handleAfterLeave: () => void;
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
                fontSize: string;
                lineHeight: string;
                titleFontWeight: string;
                borderRadius: string;
                border: string;
                color: string;
                titleTextColor: string;
                iconColor: string;
                contentTextColor: string;
                closeBorderRadius: string;
                closeColorHover: string;
                closeColorPressed: string;
                closeIconColor: string;
                closeIconColorHover: string;
                closeIconColorPressed: string;
                borderInfo: string;
                colorInfo: string;
                titleTextColorInfo: string;
                iconColorInfo: string;
                contentTextColorInfo: string;
                closeColorHoverInfo: string;
                closeColorPressedInfo: string;
                closeIconColorInfo: string;
                closeIconColorHoverInfo: string;
                closeIconColorPressedInfo: string;
                borderSuccess: string;
                colorSuccess: string;
                titleTextColorSuccess: string;
                iconColorSuccess: string;
                contentTextColorSuccess: string;
                closeColorHoverSuccess: string;
                closeColorPressedSuccess: string;
                closeIconColorSuccess: string;
                closeIconColorHoverSuccess: string;
                closeIconColorPressedSuccess: string;
                borderWarning: string;
                colorWarning: string;
                titleTextColorWarning: string;
                iconColorWarning: string;
                contentTextColorWarning: string;
                closeColorHoverWarning: string;
                closeColorPressedWarning: string;
                closeIconColorWarning: string;
                closeIconColorHoverWarning: string;
                closeIconColorPressedWarning: string;
                borderError: string;
                colorError: string;
                titleTextColorError: string;
                iconColorError: string;
                contentTextColorError: string;
                closeColorHoverError: string;
                closeColorPressedError: string;
                closeIconColorError: string;
                closeIconColorHoverError: string;
                closeIconColorPressedError: string;
                iconMargin: string;
                iconMarginRtl: string;
                iconSize: string;
                closeIconSize: string;
                closeSize: string;
                closeMargin: string;
                closeMarginRtl: string;
                padding: string;
            };
            peers: any;
            peerOverrides: {
                [x: string]: any;
            };
        }>;
        cssVars:
            | globalThis.ComputedRef<{
                  '--n-bezier': string;
                  '--n-color': string;
                  '--n-close-icon-size': string;
                  '--n-close-border-radius': string;
                  '--n-close-color-hover': string;
                  '--n-close-color-pressed': string;
                  '--n-close-icon-color': string;
                  '--n-close-icon-color-hover': string;
                  '--n-close-icon-color-pressed': string;
                  '--n-icon-color': string;
                  '--n-border': string;
                  '--n-title-text-color': string;
                  '--n-content-text-color': string;
                  '--n-line-height': string;
                  '--n-border-radius': string;
                  '--n-font-size': string;
                  '--n-title-font-weight': string;
                  '--n-icon-size': string;
                  '--n-icon-margin': string;
                  '--n-icon-margin-rtl': string;
                  '--n-close-size': string;
                  '--n-close-margin': string;
                  '--n-close-margin-rtl': string;
                  '--n-padding': string;
                  '--n-icon-margin-left': string;
                  '--n-icon-margin-right': string;
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
            showIcon: {
                type: BooleanConstructor;
                default: boolean;
            };
            type: {
                type: PropType<
                    'default' | 'error' | 'info' | 'success' | 'warning'
                >;
                default: string;
            };
            bordered: {
                type: BooleanConstructor;
                default: boolean;
            };
            closable: BooleanConstructor;
            onClose: FunctionConstructor;
            onAfterLeave: FunctionConstructor;
            /** @deprecated */
            onAfterHide: FunctionConstructor;
            theme: PropType<
                import('../../_mixins').Theme<
                    'Alert',
                    {
                        fontSize: string;
                        lineHeight: string;
                        titleFontWeight: string;
                        borderRadius: string;
                        border: string;
                        color: string;
                        titleTextColor: string;
                        iconColor: string;
                        contentTextColor: string;
                        closeBorderRadius: string;
                        closeColorHover: string;
                        closeColorPressed: string;
                        closeIconColor: string;
                        closeIconColorHover: string;
                        closeIconColorPressed: string;
                        borderInfo: string;
                        colorInfo: string;
                        titleTextColorInfo: string;
                        iconColorInfo: string;
                        contentTextColorInfo: string;
                        closeColorHoverInfo: string;
                        closeColorPressedInfo: string;
                        closeIconColorInfo: string;
                        closeIconColorHoverInfo: string;
                        closeIconColorPressedInfo: string;
                        borderSuccess: string;
                        colorSuccess: string;
                        titleTextColorSuccess: string;
                        iconColorSuccess: string;
                        contentTextColorSuccess: string;
                        closeColorHoverSuccess: string;
                        closeColorPressedSuccess: string;
                        closeIconColorSuccess: string;
                        closeIconColorHoverSuccess: string;
                        closeIconColorPressedSuccess: string;
                        borderWarning: string;
                        colorWarning: string;
                        titleTextColorWarning: string;
                        iconColorWarning: string;
                        contentTextColorWarning: string;
                        closeColorHoverWarning: string;
                        closeColorPressedWarning: string;
                        closeIconColorWarning: string;
                        closeIconColorHoverWarning: string;
                        closeIconColorPressedWarning: string;
                        borderError: string;
                        colorError: string;
                        titleTextColorError: string;
                        iconColorError: string;
                        contentTextColorError: string;
                        closeColorHoverError: string;
                        closeColorPressedError: string;
                        closeIconColorError: string;
                        closeIconColorHoverError: string;
                        closeIconColorPressedError: string;
                        iconMargin: string;
                        iconMarginRtl: string;
                        iconSize: string;
                        closeIconSize: string;
                        closeSize: string;
                        closeMargin: string;
                        closeMarginRtl: string;
                        padding: string;
                    },
                    any
                >
            >;
            themeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Alert',
                        {
                            fontSize: string;
                            lineHeight: string;
                            titleFontWeight: string;
                            borderRadius: string;
                            border: string;
                            color: string;
                            titleTextColor: string;
                            iconColor: string;
                            contentTextColor: string;
                            closeBorderRadius: string;
                            closeColorHover: string;
                            closeColorPressed: string;
                            closeIconColor: string;
                            closeIconColorHover: string;
                            closeIconColorPressed: string;
                            borderInfo: string;
                            colorInfo: string;
                            titleTextColorInfo: string;
                            iconColorInfo: string;
                            contentTextColorInfo: string;
                            closeColorHoverInfo: string;
                            closeColorPressedInfo: string;
                            closeIconColorInfo: string;
                            closeIconColorHoverInfo: string;
                            closeIconColorPressedInfo: string;
                            borderSuccess: string;
                            colorSuccess: string;
                            titleTextColorSuccess: string;
                            iconColorSuccess: string;
                            contentTextColorSuccess: string;
                            closeColorHoverSuccess: string;
                            closeColorPressedSuccess: string;
                            closeIconColorSuccess: string;
                            closeIconColorHoverSuccess: string;
                            closeIconColorPressedSuccess: string;
                            borderWarning: string;
                            colorWarning: string;
                            titleTextColorWarning: string;
                            iconColorWarning: string;
                            contentTextColorWarning: string;
                            closeColorHoverWarning: string;
                            closeColorPressedWarning: string;
                            closeIconColorWarning: string;
                            closeIconColorHoverWarning: string;
                            closeIconColorPressedWarning: string;
                            borderError: string;
                            colorError: string;
                            titleTextColorError: string;
                            iconColorError: string;
                            contentTextColorError: string;
                            closeColorHoverError: string;
                            closeColorPressedError: string;
                            closeIconColorError: string;
                            closeIconColorHoverError: string;
                            closeIconColorPressedError: string;
                            iconMargin: string;
                            iconMarginRtl: string;
                            iconSize: string;
                            closeIconSize: string;
                            closeSize: string;
                            closeMargin: string;
                            closeMarginRtl: string;
                            padding: string;
                        },
                        any
                    >
                >
            >;
            builtinThemeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Alert',
                        {
                            fontSize: string;
                            lineHeight: string;
                            titleFontWeight: string;
                            borderRadius: string;
                            border: string;
                            color: string;
                            titleTextColor: string;
                            iconColor: string;
                            contentTextColor: string;
                            closeBorderRadius: string;
                            closeColorHover: string;
                            closeColorPressed: string;
                            closeIconColor: string;
                            closeIconColorHover: string;
                            closeIconColorPressed: string;
                            borderInfo: string;
                            colorInfo: string;
                            titleTextColorInfo: string;
                            iconColorInfo: string;
                            contentTextColorInfo: string;
                            closeColorHoverInfo: string;
                            closeColorPressedInfo: string;
                            closeIconColorInfo: string;
                            closeIconColorHoverInfo: string;
                            closeIconColorPressedInfo: string;
                            borderSuccess: string;
                            colorSuccess: string;
                            titleTextColorSuccess: string;
                            iconColorSuccess: string;
                            contentTextColorSuccess: string;
                            closeColorHoverSuccess: string;
                            closeColorPressedSuccess: string;
                            closeIconColorSuccess: string;
                            closeIconColorHoverSuccess: string;
                            closeIconColorPressedSuccess: string;
                            borderWarning: string;
                            colorWarning: string;
                            titleTextColorWarning: string;
                            iconColorWarning: string;
                            contentTextColorWarning: string;
                            closeColorHoverWarning: string;
                            closeColorPressedWarning: string;
                            closeIconColorWarning: string;
                            closeIconColorHoverWarning: string;
                            closeIconColorPressedWarning: string;
                            borderError: string;
                            colorError: string;
                            titleTextColorError: string;
                            iconColorError: string;
                            contentTextColorError: string;
                            closeColorHoverError: string;
                            closeColorPressedError: string;
                            closeIconColorError: string;
                            closeIconColorHoverError: string;
                            closeIconColorPressedError: string;
                            iconMargin: string;
                            iconMarginRtl: string;
                            iconSize: string;
                            closeIconSize: string;
                            closeSize: string;
                            closeMargin: string;
                            closeMarginRtl: string;
                            padding: string;
                        },
                        any
                    >
                >
            >;
        }>
    >,
    {
        type: 'default' | 'error' | 'info' | 'success' | 'warning';
        bordered: boolean;
        showIcon: boolean;
        closable: boolean;
    },
    {}
>;
export default _default;
