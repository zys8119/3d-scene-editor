import { PropType, Ref } from 'vue';
import type { MaybeArray, ExtractPublicPropTypes } from '../../_utils';
export interface TagPublicMethods {
    setTextContent: (textContent: string) => void;
}
export interface TagRef extends TagPublicMethods {
    $el: HTMLElement;
}
export declare const tagProps: {
    bordered: {
        type: PropType<boolean | undefined>;
        default: undefined;
    };
    checked: BooleanConstructor;
    checkable: BooleanConstructor;
    strong: BooleanConstructor;
    triggerClickOnClose: BooleanConstructor;
    onClose: PropType<MaybeArray<(e: MouseEvent) => void>>;
    onMouseenter: PropType<(e: MouseEvent) => void>;
    onMouseleave: PropType<(e: MouseEvent) => void>;
    'onUpdate:checked': PropType<(checked: boolean) => void>;
    onUpdateChecked: PropType<(checked: boolean) => void>;
    internalCloseFocusable: {
        type: BooleanConstructor;
        default: boolean;
    };
    internalCloseIsButtonTag: {
        type: BooleanConstructor;
        default: boolean;
    };
    onCheckedChange: PropType<(checked: boolean) => void>;
    color: PropType<import('./common-props').TagColor>;
    type: {
        readonly type: PropType<
            'default' | 'error' | 'primary' | 'info' | 'success' | 'warning'
        >;
        readonly default: 'default';
    };
    round: BooleanConstructor;
    size: {
        readonly type: PropType<'small' | 'medium' | 'large' | 'tiny'>;
        readonly default: 'medium';
    };
    closable: BooleanConstructor;
    disabled: {
        readonly type: PropType<boolean | undefined>;
        readonly default: undefined;
    };
    theme: PropType<
        import('../../_mixins').Theme<
            'Tag',
            {
                closeBorderRadius: string;
                heightTiny: string;
                heightSmall: string;
                heightMedium: string;
                heightLarge: string;
                borderRadius: string;
                opacityDisabled: string;
                fontSizeTiny: string;
                fontSizeSmall: string;
                fontSizeMedium: string;
                fontSizeLarge: string;
                fontWeightStrong: string;
                textColorCheckable: string;
                textColorHoverCheckable: string;
                textColorPressedCheckable: string;
                textColorChecked: string;
                colorCheckable: string;
                colorHoverCheckable: string;
                colorPressedCheckable: string;
                colorChecked: string;
                colorCheckedHover: string;
                colorCheckedPressed: string;
                border: string;
                textColor: string;
                color: string;
                colorBordered: string;
                closeIconColor: string;
                closeIconColorHover: string;
                closeIconColorPressed: string;
                closeColorHover: string;
                closeColorPressed: string;
                borderPrimary: string;
                textColorPrimary: string;
                colorPrimary: string;
                colorBorderedPrimary: string;
                closeIconColorPrimary: string;
                closeIconColorHoverPrimary: string;
                closeIconColorPressedPrimary: string;
                closeColorHoverPrimary: string;
                closeColorPressedPrimary: string;
                borderInfo: string;
                textColorInfo: string;
                colorInfo: string;
                colorBorderedInfo: string;
                closeIconColorInfo: string;
                closeIconColorHoverInfo: string;
                closeIconColorPressedInfo: string;
                closeColorHoverInfo: string;
                closeColorPressedInfo: string;
                borderSuccess: string;
                textColorSuccess: string;
                colorSuccess: string;
                colorBorderedSuccess: string;
                closeIconColorSuccess: string;
                closeIconColorHoverSuccess: string;
                closeIconColorPressedSuccess: string;
                closeColorHoverSuccess: string;
                closeColorPressedSuccess: string;
                borderWarning: string;
                textColorWarning: string;
                colorWarning: string;
                colorBorderedWarning: string;
                closeIconColorWarning: string;
                closeIconColorHoverWarning: string;
                closeIconColorPressedWarning: string;
                closeColorHoverWarning: string;
                closeColorPressedWarning: string;
                borderError: string;
                textColorError: string;
                colorError: string;
                colorBorderedError: string;
                closeIconColorError: string;
                closeIconColorHoverError: string;
                closeIconColorPressedError: string;
                closeColorHoverError: string;
                closeColorPressedError: string;
                closeIconSizeTiny: string;
                closeIconSizeSmall: string;
                closeIconSizeMedium: string;
                closeIconSizeLarge: string;
                closeSizeTiny: string;
                closeSizeSmall: string;
                closeSizeMedium: string;
                closeSizeLarge: string;
                padding: string;
                closeMargin: string;
                closeMarginRtl: string;
            },
            any
        >
    >;
    themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Tag',
                {
                    closeBorderRadius: string;
                    heightTiny: string;
                    heightSmall: string;
                    heightMedium: string;
                    heightLarge: string;
                    borderRadius: string;
                    opacityDisabled: string;
                    fontSizeTiny: string;
                    fontSizeSmall: string;
                    fontSizeMedium: string;
                    fontSizeLarge: string;
                    fontWeightStrong: string;
                    textColorCheckable: string;
                    textColorHoverCheckable: string;
                    textColorPressedCheckable: string;
                    textColorChecked: string;
                    colorCheckable: string;
                    colorHoverCheckable: string;
                    colorPressedCheckable: string;
                    colorChecked: string;
                    colorCheckedHover: string;
                    colorCheckedPressed: string;
                    border: string;
                    textColor: string;
                    color: string;
                    colorBordered: string;
                    closeIconColor: string;
                    closeIconColorHover: string;
                    closeIconColorPressed: string;
                    closeColorHover: string;
                    closeColorPressed: string;
                    borderPrimary: string;
                    textColorPrimary: string;
                    colorPrimary: string;
                    colorBorderedPrimary: string;
                    closeIconColorPrimary: string;
                    closeIconColorHoverPrimary: string;
                    closeIconColorPressedPrimary: string;
                    closeColorHoverPrimary: string;
                    closeColorPressedPrimary: string;
                    borderInfo: string;
                    textColorInfo: string;
                    colorInfo: string;
                    colorBorderedInfo: string;
                    closeIconColorInfo: string;
                    closeIconColorHoverInfo: string;
                    closeIconColorPressedInfo: string;
                    closeColorHoverInfo: string;
                    closeColorPressedInfo: string;
                    borderSuccess: string;
                    textColorSuccess: string;
                    colorSuccess: string;
                    colorBorderedSuccess: string;
                    closeIconColorSuccess: string;
                    closeIconColorHoverSuccess: string;
                    closeIconColorPressedSuccess: string;
                    closeColorHoverSuccess: string;
                    closeColorPressedSuccess: string;
                    borderWarning: string;
                    textColorWarning: string;
                    colorWarning: string;
                    colorBorderedWarning: string;
                    closeIconColorWarning: string;
                    closeIconColorHoverWarning: string;
                    closeIconColorPressedWarning: string;
                    closeColorHoverWarning: string;
                    closeColorPressedWarning: string;
                    borderError: string;
                    textColorError: string;
                    colorError: string;
                    colorBorderedError: string;
                    closeIconColorError: string;
                    closeIconColorHoverError: string;
                    closeIconColorPressedError: string;
                    closeColorHoverError: string;
                    closeColorPressedError: string;
                    closeIconSizeTiny: string;
                    closeIconSizeSmall: string;
                    closeIconSizeMedium: string;
                    closeIconSizeLarge: string;
                    closeSizeTiny: string;
                    closeSizeSmall: string;
                    closeSizeMedium: string;
                    closeSizeLarge: string;
                    padding: string;
                    closeMargin: string;
                    closeMarginRtl: string;
                },
                any
            >
        >
    >;
    builtinThemeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Tag',
                {
                    closeBorderRadius: string;
                    heightTiny: string;
                    heightSmall: string;
                    heightMedium: string;
                    heightLarge: string;
                    borderRadius: string;
                    opacityDisabled: string;
                    fontSizeTiny: string;
                    fontSizeSmall: string;
                    fontSizeMedium: string;
                    fontSizeLarge: string;
                    fontWeightStrong: string;
                    textColorCheckable: string;
                    textColorHoverCheckable: string;
                    textColorPressedCheckable: string;
                    textColorChecked: string;
                    colorCheckable: string;
                    colorHoverCheckable: string;
                    colorPressedCheckable: string;
                    colorChecked: string;
                    colorCheckedHover: string;
                    colorCheckedPressed: string;
                    border: string;
                    textColor: string;
                    color: string;
                    colorBordered: string;
                    closeIconColor: string;
                    closeIconColorHover: string;
                    closeIconColorPressed: string;
                    closeColorHover: string;
                    closeColorPressed: string;
                    borderPrimary: string;
                    textColorPrimary: string;
                    colorPrimary: string;
                    colorBorderedPrimary: string;
                    closeIconColorPrimary: string;
                    closeIconColorHoverPrimary: string;
                    closeIconColorPressedPrimary: string;
                    closeColorHoverPrimary: string;
                    closeColorPressedPrimary: string;
                    borderInfo: string;
                    textColorInfo: string;
                    colorInfo: string;
                    colorBorderedInfo: string;
                    closeIconColorInfo: string;
                    closeIconColorHoverInfo: string;
                    closeIconColorPressedInfo: string;
                    closeColorHoverInfo: string;
                    closeColorPressedInfo: string;
                    borderSuccess: string;
                    textColorSuccess: string;
                    colorSuccess: string;
                    colorBorderedSuccess: string;
                    closeIconColorSuccess: string;
                    closeIconColorHoverSuccess: string;
                    closeIconColorPressedSuccess: string;
                    closeColorHoverSuccess: string;
                    closeColorPressedSuccess: string;
                    borderWarning: string;
                    textColorWarning: string;
                    colorWarning: string;
                    colorBorderedWarning: string;
                    closeIconColorWarning: string;
                    closeIconColorHoverWarning: string;
                    closeIconColorPressedWarning: string;
                    closeColorHoverWarning: string;
                    closeColorPressedWarning: string;
                    borderError: string;
                    textColorError: string;
                    colorError: string;
                    colorBorderedError: string;
                    closeIconColorError: string;
                    closeIconColorHoverError: string;
                    closeIconColorPressedError: string;
                    closeColorHoverError: string;
                    closeColorPressedError: string;
                    closeIconSizeTiny: string;
                    closeIconSizeSmall: string;
                    closeIconSizeMedium: string;
                    closeIconSizeLarge: string;
                    closeSizeTiny: string;
                    closeSizeSmall: string;
                    closeSizeMedium: string;
                    closeSizeLarge: string;
                    padding: string;
                    closeMargin: string;
                    closeMarginRtl: string;
                },
                any
            >
        >
    >;
};
interface TagInjection {
    roundRef: Ref<boolean>;
}
export declare const tagInjectionKey: globalThis.InjectionKey<TagInjection>;
export type TagProps = ExtractPublicPropTypes<typeof tagProps>;
declare const _default: import('vue').DefineComponent<
    {
        bordered: {
            type: PropType<boolean | undefined>;
            default: undefined;
        };
        checked: BooleanConstructor;
        checkable: BooleanConstructor;
        strong: BooleanConstructor;
        triggerClickOnClose: BooleanConstructor;
        onClose: PropType<MaybeArray<(e: MouseEvent) => void>>;
        onMouseenter: PropType<(e: MouseEvent) => void>;
        onMouseleave: PropType<(e: MouseEvent) => void>;
        'onUpdate:checked': PropType<(checked: boolean) => void>;
        onUpdateChecked: PropType<(checked: boolean) => void>;
        internalCloseFocusable: {
            type: BooleanConstructor;
            default: boolean;
        };
        internalCloseIsButtonTag: {
            type: BooleanConstructor;
            default: boolean;
        };
        onCheckedChange: PropType<(checked: boolean) => void>;
        color: PropType<import('./common-props').TagColor>;
        type: {
            readonly type: PropType<
                'default' | 'error' | 'primary' | 'info' | 'success' | 'warning'
            >;
            readonly default: 'default';
        };
        round: BooleanConstructor;
        size: {
            readonly type: PropType<'small' | 'medium' | 'large' | 'tiny'>;
            readonly default: 'medium';
        };
        closable: BooleanConstructor;
        disabled: {
            readonly type: PropType<boolean | undefined>;
            readonly default: undefined;
        };
        theme: PropType<
            import('../../_mixins').Theme<
                'Tag',
                {
                    closeBorderRadius: string;
                    heightTiny: string;
                    heightSmall: string;
                    heightMedium: string;
                    heightLarge: string;
                    borderRadius: string;
                    opacityDisabled: string;
                    fontSizeTiny: string;
                    fontSizeSmall: string;
                    fontSizeMedium: string;
                    fontSizeLarge: string;
                    fontWeightStrong: string;
                    textColorCheckable: string;
                    textColorHoverCheckable: string;
                    textColorPressedCheckable: string;
                    textColorChecked: string;
                    colorCheckable: string;
                    colorHoverCheckable: string;
                    colorPressedCheckable: string;
                    colorChecked: string;
                    colorCheckedHover: string;
                    colorCheckedPressed: string;
                    border: string;
                    textColor: string;
                    color: string;
                    colorBordered: string;
                    closeIconColor: string;
                    closeIconColorHover: string;
                    closeIconColorPressed: string;
                    closeColorHover: string;
                    closeColorPressed: string;
                    borderPrimary: string;
                    textColorPrimary: string;
                    colorPrimary: string;
                    colorBorderedPrimary: string;
                    closeIconColorPrimary: string;
                    closeIconColorHoverPrimary: string;
                    closeIconColorPressedPrimary: string;
                    closeColorHoverPrimary: string;
                    closeColorPressedPrimary: string;
                    borderInfo: string;
                    textColorInfo: string;
                    colorInfo: string;
                    colorBorderedInfo: string;
                    closeIconColorInfo: string;
                    closeIconColorHoverInfo: string;
                    closeIconColorPressedInfo: string;
                    closeColorHoverInfo: string;
                    closeColorPressedInfo: string;
                    borderSuccess: string;
                    textColorSuccess: string;
                    colorSuccess: string;
                    colorBorderedSuccess: string;
                    closeIconColorSuccess: string;
                    closeIconColorHoverSuccess: string;
                    closeIconColorPressedSuccess: string;
                    closeColorHoverSuccess: string;
                    closeColorPressedSuccess: string;
                    borderWarning: string;
                    textColorWarning: string;
                    colorWarning: string;
                    colorBorderedWarning: string;
                    closeIconColorWarning: string;
                    closeIconColorHoverWarning: string;
                    closeIconColorPressedWarning: string;
                    closeColorHoverWarning: string;
                    closeColorPressedWarning: string;
                    borderError: string;
                    textColorError: string;
                    colorError: string;
                    colorBorderedError: string;
                    closeIconColorError: string;
                    closeIconColorHoverError: string;
                    closeIconColorPressedError: string;
                    closeColorHoverError: string;
                    closeColorPressedError: string;
                    closeIconSizeTiny: string;
                    closeIconSizeSmall: string;
                    closeIconSizeMedium: string;
                    closeIconSizeLarge: string;
                    closeSizeTiny: string;
                    closeSizeSmall: string;
                    closeSizeMedium: string;
                    closeSizeLarge: string;
                    padding: string;
                    closeMargin: string;
                    closeMarginRtl: string;
                },
                any
            >
        >;
        themeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Tag',
                    {
                        closeBorderRadius: string;
                        heightTiny: string;
                        heightSmall: string;
                        heightMedium: string;
                        heightLarge: string;
                        borderRadius: string;
                        opacityDisabled: string;
                        fontSizeTiny: string;
                        fontSizeSmall: string;
                        fontSizeMedium: string;
                        fontSizeLarge: string;
                        fontWeightStrong: string;
                        textColorCheckable: string;
                        textColorHoverCheckable: string;
                        textColorPressedCheckable: string;
                        textColorChecked: string;
                        colorCheckable: string;
                        colorHoverCheckable: string;
                        colorPressedCheckable: string;
                        colorChecked: string;
                        colorCheckedHover: string;
                        colorCheckedPressed: string;
                        border: string;
                        textColor: string;
                        color: string;
                        colorBordered: string;
                        closeIconColor: string;
                        closeIconColorHover: string;
                        closeIconColorPressed: string;
                        closeColorHover: string;
                        closeColorPressed: string;
                        borderPrimary: string;
                        textColorPrimary: string;
                        colorPrimary: string;
                        colorBorderedPrimary: string;
                        closeIconColorPrimary: string;
                        closeIconColorHoverPrimary: string;
                        closeIconColorPressedPrimary: string;
                        closeColorHoverPrimary: string;
                        closeColorPressedPrimary: string;
                        borderInfo: string;
                        textColorInfo: string;
                        colorInfo: string;
                        colorBorderedInfo: string;
                        closeIconColorInfo: string;
                        closeIconColorHoverInfo: string;
                        closeIconColorPressedInfo: string;
                        closeColorHoverInfo: string;
                        closeColorPressedInfo: string;
                        borderSuccess: string;
                        textColorSuccess: string;
                        colorSuccess: string;
                        colorBorderedSuccess: string;
                        closeIconColorSuccess: string;
                        closeIconColorHoverSuccess: string;
                        closeIconColorPressedSuccess: string;
                        closeColorHoverSuccess: string;
                        closeColorPressedSuccess: string;
                        borderWarning: string;
                        textColorWarning: string;
                        colorWarning: string;
                        colorBorderedWarning: string;
                        closeIconColorWarning: string;
                        closeIconColorHoverWarning: string;
                        closeIconColorPressedWarning: string;
                        closeColorHoverWarning: string;
                        closeColorPressedWarning: string;
                        borderError: string;
                        textColorError: string;
                        colorError: string;
                        colorBorderedError: string;
                        closeIconColorError: string;
                        closeIconColorHoverError: string;
                        closeIconColorPressedError: string;
                        closeColorHoverError: string;
                        closeColorPressedError: string;
                        closeIconSizeTiny: string;
                        closeIconSizeSmall: string;
                        closeIconSizeMedium: string;
                        closeIconSizeLarge: string;
                        closeSizeTiny: string;
                        closeSizeSmall: string;
                        closeSizeMedium: string;
                        closeSizeLarge: string;
                        padding: string;
                        closeMargin: string;
                        closeMarginRtl: string;
                    },
                    any
                >
            >
        >;
        builtinThemeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Tag',
                    {
                        closeBorderRadius: string;
                        heightTiny: string;
                        heightSmall: string;
                        heightMedium: string;
                        heightLarge: string;
                        borderRadius: string;
                        opacityDisabled: string;
                        fontSizeTiny: string;
                        fontSizeSmall: string;
                        fontSizeMedium: string;
                        fontSizeLarge: string;
                        fontWeightStrong: string;
                        textColorCheckable: string;
                        textColorHoverCheckable: string;
                        textColorPressedCheckable: string;
                        textColorChecked: string;
                        colorCheckable: string;
                        colorHoverCheckable: string;
                        colorPressedCheckable: string;
                        colorChecked: string;
                        colorCheckedHover: string;
                        colorCheckedPressed: string;
                        border: string;
                        textColor: string;
                        color: string;
                        colorBordered: string;
                        closeIconColor: string;
                        closeIconColorHover: string;
                        closeIconColorPressed: string;
                        closeColorHover: string;
                        closeColorPressed: string;
                        borderPrimary: string;
                        textColorPrimary: string;
                        colorPrimary: string;
                        colorBorderedPrimary: string;
                        closeIconColorPrimary: string;
                        closeIconColorHoverPrimary: string;
                        closeIconColorPressedPrimary: string;
                        closeColorHoverPrimary: string;
                        closeColorPressedPrimary: string;
                        borderInfo: string;
                        textColorInfo: string;
                        colorInfo: string;
                        colorBorderedInfo: string;
                        closeIconColorInfo: string;
                        closeIconColorHoverInfo: string;
                        closeIconColorPressedInfo: string;
                        closeColorHoverInfo: string;
                        closeColorPressedInfo: string;
                        borderSuccess: string;
                        textColorSuccess: string;
                        colorSuccess: string;
                        colorBorderedSuccess: string;
                        closeIconColorSuccess: string;
                        closeIconColorHoverSuccess: string;
                        closeIconColorPressedSuccess: string;
                        closeColorHoverSuccess: string;
                        closeColorPressedSuccess: string;
                        borderWarning: string;
                        textColorWarning: string;
                        colorWarning: string;
                        colorBorderedWarning: string;
                        closeIconColorWarning: string;
                        closeIconColorHoverWarning: string;
                        closeIconColorPressedWarning: string;
                        closeColorHoverWarning: string;
                        closeColorPressedWarning: string;
                        borderError: string;
                        textColorError: string;
                        colorError: string;
                        colorBorderedError: string;
                        closeIconColorError: string;
                        closeIconColorHoverError: string;
                        closeIconColorPressedError: string;
                        closeColorHoverError: string;
                        closeColorPressedError: string;
                        closeIconSizeTiny: string;
                        closeIconSizeSmall: string;
                        closeIconSizeMedium: string;
                        closeIconSizeLarge: string;
                        closeSizeTiny: string;
                        closeSizeSmall: string;
                        closeSizeMedium: string;
                        closeSizeLarge: string;
                        padding: string;
                        closeMargin: string;
                        closeMarginRtl: string;
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
        mergedClsPrefix: globalThis.ComputedRef<string>;
        contentRef: Ref<HTMLElement | null>;
        mergedBordered: globalThis.ComputedRef<boolean>;
        handleClick: (e: MouseEvent) => void;
        handleCloseClick: (e: MouseEvent) => void;
        cssVars:
            | globalThis.ComputedRef<{
                  '--n-font-weight-strong': string;
                  '--n-avatar-size-override': string;
                  '--n-bezier': string;
                  '--n-border-radius': string;
                  '--n-border': string;
                  '--n-close-icon-size': string;
                  '--n-close-color-pressed': string;
                  '--n-close-color-hover': string;
                  '--n-close-border-radius': string;
                  '--n-close-icon-color': string;
                  '--n-close-icon-color-hover': string;
                  '--n-close-icon-color-pressed': string;
                  '--n-close-icon-color-disabled': string;
                  '--n-close-margin': string;
                  '--n-close-margin-rtl': string;
                  '--n-close-size': string;
                  '--n-color': string;
                  '--n-color-checkable': string;
                  '--n-color-checked': string;
                  '--n-color-checked-hover': string;
                  '--n-color-checked-pressed': string;
                  '--n-color-hover-checkable': string;
                  '--n-color-pressed-checkable': string;
                  '--n-font-size': string;
                  '--n-height': string;
                  '--n-opacity-disabled': string;
                  '--n-padding': string;
                  '--n-text-color': string;
                  '--n-text-color-checkable': string;
                  '--n-text-color-checked': string;
                  '--n-text-color-hover-checkable': string;
                  '--n-text-color-pressed-checkable': string;
              }>
            | undefined;
        themeClass: Ref<string> | undefined;
        onRender: (() => void) | undefined;
        setTextContent: (textContent: string) => void;
    },
    unknown,
    {},
    {},
    import('vue').ComponentOptionsMixin,
    import('vue').ComponentOptionsMixin,
    {
        click: (e: MouseEvent) => true;
    },
    string,
    import('vue').VNodeProps &
        import('vue').AllowedComponentProps &
        import('vue').ComponentCustomProps,
    Readonly<
        import('vue').ExtractPropTypes<{
            bordered: {
                type: PropType<boolean | undefined>;
                default: undefined;
            };
            checked: BooleanConstructor;
            checkable: BooleanConstructor;
            strong: BooleanConstructor;
            triggerClickOnClose: BooleanConstructor;
            onClose: PropType<MaybeArray<(e: MouseEvent) => void>>;
            onMouseenter: PropType<(e: MouseEvent) => void>;
            onMouseleave: PropType<(e: MouseEvent) => void>;
            'onUpdate:checked': PropType<(checked: boolean) => void>;
            onUpdateChecked: PropType<(checked: boolean) => void>;
            internalCloseFocusable: {
                type: BooleanConstructor;
                default: boolean;
            };
            internalCloseIsButtonTag: {
                type: BooleanConstructor;
                default: boolean;
            };
            onCheckedChange: PropType<(checked: boolean) => void>;
            color: PropType<import('./common-props').TagColor>;
            type: {
                readonly type: PropType<
                    | 'default'
                    | 'error'
                    | 'primary'
                    | 'info'
                    | 'success'
                    | 'warning'
                >;
                readonly default: 'default';
            };
            round: BooleanConstructor;
            size: {
                readonly type: PropType<'small' | 'medium' | 'large' | 'tiny'>;
                readonly default: 'medium';
            };
            closable: BooleanConstructor;
            disabled: {
                readonly type: PropType<boolean | undefined>;
                readonly default: undefined;
            };
            theme: PropType<
                import('../../_mixins').Theme<
                    'Tag',
                    {
                        closeBorderRadius: string;
                        heightTiny: string;
                        heightSmall: string;
                        heightMedium: string;
                        heightLarge: string;
                        borderRadius: string;
                        opacityDisabled: string;
                        fontSizeTiny: string;
                        fontSizeSmall: string;
                        fontSizeMedium: string;
                        fontSizeLarge: string;
                        fontWeightStrong: string;
                        textColorCheckable: string;
                        textColorHoverCheckable: string;
                        textColorPressedCheckable: string;
                        textColorChecked: string;
                        colorCheckable: string;
                        colorHoverCheckable: string;
                        colorPressedCheckable: string;
                        colorChecked: string;
                        colorCheckedHover: string;
                        colorCheckedPressed: string;
                        border: string;
                        textColor: string;
                        color: string;
                        colorBordered: string;
                        closeIconColor: string;
                        closeIconColorHover: string;
                        closeIconColorPressed: string;
                        closeColorHover: string;
                        closeColorPressed: string;
                        borderPrimary: string;
                        textColorPrimary: string;
                        colorPrimary: string;
                        colorBorderedPrimary: string;
                        closeIconColorPrimary: string;
                        closeIconColorHoverPrimary: string;
                        closeIconColorPressedPrimary: string;
                        closeColorHoverPrimary: string;
                        closeColorPressedPrimary: string;
                        borderInfo: string;
                        textColorInfo: string;
                        colorInfo: string;
                        colorBorderedInfo: string;
                        closeIconColorInfo: string;
                        closeIconColorHoverInfo: string;
                        closeIconColorPressedInfo: string;
                        closeColorHoverInfo: string;
                        closeColorPressedInfo: string;
                        borderSuccess: string;
                        textColorSuccess: string;
                        colorSuccess: string;
                        colorBorderedSuccess: string;
                        closeIconColorSuccess: string;
                        closeIconColorHoverSuccess: string;
                        closeIconColorPressedSuccess: string;
                        closeColorHoverSuccess: string;
                        closeColorPressedSuccess: string;
                        borderWarning: string;
                        textColorWarning: string;
                        colorWarning: string;
                        colorBorderedWarning: string;
                        closeIconColorWarning: string;
                        closeIconColorHoverWarning: string;
                        closeIconColorPressedWarning: string;
                        closeColorHoverWarning: string;
                        closeColorPressedWarning: string;
                        borderError: string;
                        textColorError: string;
                        colorError: string;
                        colorBorderedError: string;
                        closeIconColorError: string;
                        closeIconColorHoverError: string;
                        closeIconColorPressedError: string;
                        closeColorHoverError: string;
                        closeColorPressedError: string;
                        closeIconSizeTiny: string;
                        closeIconSizeSmall: string;
                        closeIconSizeMedium: string;
                        closeIconSizeLarge: string;
                        closeSizeTiny: string;
                        closeSizeSmall: string;
                        closeSizeMedium: string;
                        closeSizeLarge: string;
                        padding: string;
                        closeMargin: string;
                        closeMarginRtl: string;
                    },
                    any
                >
            >;
            themeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Tag',
                        {
                            closeBorderRadius: string;
                            heightTiny: string;
                            heightSmall: string;
                            heightMedium: string;
                            heightLarge: string;
                            borderRadius: string;
                            opacityDisabled: string;
                            fontSizeTiny: string;
                            fontSizeSmall: string;
                            fontSizeMedium: string;
                            fontSizeLarge: string;
                            fontWeightStrong: string;
                            textColorCheckable: string;
                            textColorHoverCheckable: string;
                            textColorPressedCheckable: string;
                            textColorChecked: string;
                            colorCheckable: string;
                            colorHoverCheckable: string;
                            colorPressedCheckable: string;
                            colorChecked: string;
                            colorCheckedHover: string;
                            colorCheckedPressed: string;
                            border: string;
                            textColor: string;
                            color: string;
                            colorBordered: string;
                            closeIconColor: string;
                            closeIconColorHover: string;
                            closeIconColorPressed: string;
                            closeColorHover: string;
                            closeColorPressed: string;
                            borderPrimary: string;
                            textColorPrimary: string;
                            colorPrimary: string;
                            colorBorderedPrimary: string;
                            closeIconColorPrimary: string;
                            closeIconColorHoverPrimary: string;
                            closeIconColorPressedPrimary: string;
                            closeColorHoverPrimary: string;
                            closeColorPressedPrimary: string;
                            borderInfo: string;
                            textColorInfo: string;
                            colorInfo: string;
                            colorBorderedInfo: string;
                            closeIconColorInfo: string;
                            closeIconColorHoverInfo: string;
                            closeIconColorPressedInfo: string;
                            closeColorHoverInfo: string;
                            closeColorPressedInfo: string;
                            borderSuccess: string;
                            textColorSuccess: string;
                            colorSuccess: string;
                            colorBorderedSuccess: string;
                            closeIconColorSuccess: string;
                            closeIconColorHoverSuccess: string;
                            closeIconColorPressedSuccess: string;
                            closeColorHoverSuccess: string;
                            closeColorPressedSuccess: string;
                            borderWarning: string;
                            textColorWarning: string;
                            colorWarning: string;
                            colorBorderedWarning: string;
                            closeIconColorWarning: string;
                            closeIconColorHoverWarning: string;
                            closeIconColorPressedWarning: string;
                            closeColorHoverWarning: string;
                            closeColorPressedWarning: string;
                            borderError: string;
                            textColorError: string;
                            colorError: string;
                            colorBorderedError: string;
                            closeIconColorError: string;
                            closeIconColorHoverError: string;
                            closeIconColorPressedError: string;
                            closeColorHoverError: string;
                            closeColorPressedError: string;
                            closeIconSizeTiny: string;
                            closeIconSizeSmall: string;
                            closeIconSizeMedium: string;
                            closeIconSizeLarge: string;
                            closeSizeTiny: string;
                            closeSizeSmall: string;
                            closeSizeMedium: string;
                            closeSizeLarge: string;
                            padding: string;
                            closeMargin: string;
                            closeMarginRtl: string;
                        },
                        any
                    >
                >
            >;
            builtinThemeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Tag',
                        {
                            closeBorderRadius: string;
                            heightTiny: string;
                            heightSmall: string;
                            heightMedium: string;
                            heightLarge: string;
                            borderRadius: string;
                            opacityDisabled: string;
                            fontSizeTiny: string;
                            fontSizeSmall: string;
                            fontSizeMedium: string;
                            fontSizeLarge: string;
                            fontWeightStrong: string;
                            textColorCheckable: string;
                            textColorHoverCheckable: string;
                            textColorPressedCheckable: string;
                            textColorChecked: string;
                            colorCheckable: string;
                            colorHoverCheckable: string;
                            colorPressedCheckable: string;
                            colorChecked: string;
                            colorCheckedHover: string;
                            colorCheckedPressed: string;
                            border: string;
                            textColor: string;
                            color: string;
                            colorBordered: string;
                            closeIconColor: string;
                            closeIconColorHover: string;
                            closeIconColorPressed: string;
                            closeColorHover: string;
                            closeColorPressed: string;
                            borderPrimary: string;
                            textColorPrimary: string;
                            colorPrimary: string;
                            colorBorderedPrimary: string;
                            closeIconColorPrimary: string;
                            closeIconColorHoverPrimary: string;
                            closeIconColorPressedPrimary: string;
                            closeColorHoverPrimary: string;
                            closeColorPressedPrimary: string;
                            borderInfo: string;
                            textColorInfo: string;
                            colorInfo: string;
                            colorBorderedInfo: string;
                            closeIconColorInfo: string;
                            closeIconColorHoverInfo: string;
                            closeIconColorPressedInfo: string;
                            closeColorHoverInfo: string;
                            closeColorPressedInfo: string;
                            borderSuccess: string;
                            textColorSuccess: string;
                            colorSuccess: string;
                            colorBorderedSuccess: string;
                            closeIconColorSuccess: string;
                            closeIconColorHoverSuccess: string;
                            closeIconColorPressedSuccess: string;
                            closeColorHoverSuccess: string;
                            closeColorPressedSuccess: string;
                            borderWarning: string;
                            textColorWarning: string;
                            colorWarning: string;
                            colorBorderedWarning: string;
                            closeIconColorWarning: string;
                            closeIconColorHoverWarning: string;
                            closeIconColorPressedWarning: string;
                            closeColorHoverWarning: string;
                            closeColorPressedWarning: string;
                            borderError: string;
                            textColorError: string;
                            colorError: string;
                            colorBorderedError: string;
                            closeIconColorError: string;
                            closeIconColorHoverError: string;
                            closeIconColorPressedError: string;
                            closeColorHoverError: string;
                            closeColorPressedError: string;
                            closeIconSizeTiny: string;
                            closeIconSizeSmall: string;
                            closeIconSizeMedium: string;
                            closeIconSizeLarge: string;
                            closeSizeTiny: string;
                            closeSizeSmall: string;
                            closeSizeMedium: string;
                            closeSizeLarge: string;
                            padding: string;
                            closeMargin: string;
                            closeMarginRtl: string;
                        },
                        any
                    >
                >
            >;
        }>
    > & {
        onClick?: ((e: MouseEvent) => any) | undefined;
    },
    {
        type: 'default' | 'error' | 'primary' | 'info' | 'success' | 'warning';
        round: boolean;
        size: 'small' | 'medium' | 'large' | 'tiny';
        disabled: boolean | undefined;
        checked: boolean;
        strong: boolean;
        bordered: boolean | undefined;
        closable: boolean;
        checkable: boolean;
        triggerClickOnClose: boolean;
        internalCloseFocusable: boolean;
        internalCloseIsButtonTag: boolean;
    },
    {}
>;
export default _default;
