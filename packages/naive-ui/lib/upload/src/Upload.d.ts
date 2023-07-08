import { PropType, CSSProperties, InputHTMLAttributes } from 'vue';
import type { ExtractPublicPropTypes, MaybeArray } from '../../_utils';
import type { ImageGroupProps } from '../../image';
import type {
    FileInfo,
    FuncOrRecordOrUndef,
    OnFinish,
    OnRemove,
    OnDownload,
    OnChange,
    OnUpdateFileList,
    OnBeforeUpload,
    ListType,
    OnPreview,
    CreateThumbnailUrl,
    CustomRequest,
    OnError,
    SettledFileInfo,
    ShouldUseThumbnailUrl,
    RenderIcon,
} from './interface';
export declare const uploadProps: {
    readonly name: {
        readonly type: StringConstructor;
        readonly default: 'file';
    };
    readonly accept: StringConstructor;
    readonly action: StringConstructor;
    readonly customRequest: PropType<CustomRequest>;
    readonly directory: BooleanConstructor;
    readonly directoryDnd: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly method: {
        readonly type: StringConstructor;
        readonly default: 'POST';
    };
    readonly multiple: BooleanConstructor;
    readonly showFileList: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly data: PropType<FuncOrRecordOrUndef>;
    readonly headers: PropType<FuncOrRecordOrUndef>;
    readonly withCredentials: BooleanConstructor;
    readonly responseType: {
        readonly type: PropType<XMLHttpRequestResponseType>;
        readonly default: '';
    };
    readonly disabled: {
        readonly type: PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly onChange: PropType<OnChange>;
    readonly onRemove: PropType<OnRemove>;
    readonly onFinish: PropType<OnFinish>;
    readonly onError: PropType<OnError>;
    readonly onBeforeUpload: PropType<OnBeforeUpload>;
    readonly isErrorState: PropType<(xhr: XMLHttpRequest) => boolean>;
    /** currently not used */
    readonly onDownload: PropType<OnDownload>;
    readonly defaultUpload: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly fileList: PropType<FileInfo[]>;
    readonly 'onUpdate:fileList': PropType<MaybeArray<OnUpdateFileList>>;
    readonly onUpdateFileList: PropType<MaybeArray<OnUpdateFileList>>;
    readonly fileListStyle: PropType<string | CSSProperties>;
    readonly defaultFileList: {
        readonly type: PropType<FileInfo[]>;
        readonly default: () => never[];
    };
    readonly showCancelButton: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly showRemoveButton: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly showDownloadButton: BooleanConstructor;
    readonly showRetryButton: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly showPreviewButton: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly listType: {
        readonly type: PropType<ListType>;
        readonly default: 'text';
    };
    readonly onPreview: PropType<OnPreview>;
    readonly shouldUseThumbnailUrl: {
        readonly type: PropType<ShouldUseThumbnailUrl>;
        readonly default: (file: SettledFileInfo) => boolean;
    };
    readonly createThumbnailUrl: PropType<CreateThumbnailUrl>;
    readonly abstract: BooleanConstructor;
    readonly max: NumberConstructor;
    readonly showTrigger: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly imageGroupProps: PropType<ImageGroupProps>;
    readonly inputProps: PropType<InputHTMLAttributes>;
    readonly triggerStyle: PropType<string | CSSProperties>;
    readonly renderIcon: PropType<RenderIcon>;
    readonly theme: PropType<
        import('../../_mixins').Theme<
            'Upload',
            {
                fontSize: string;
                lineHeight: string;
                borderRadius: string;
                draggerColor: string;
                draggerBorder: string;
                draggerBorderHover: string;
                itemColorHover: string;
                itemColorHoverError: string;
                itemTextColor: string;
                itemTextColorError: string;
                itemTextColorSuccess: string;
                itemIconColor: string;
                itemDisabledOpacity: string;
                itemBorderImageCardError: string;
                itemBorderImageCard: string;
            },
            {
                Button: import('../../_mixins').Theme<
                    'Button',
                    {
                        heightTiny: string;
                        heightSmall: string;
                        heightMedium: string;
                        heightLarge: string;
                        borderRadiusTiny: string;
                        borderRadiusSmall: string;
                        borderRadiusMedium: string;
                        borderRadiusLarge: string;
                        fontSizeTiny: string;
                        fontSizeSmall: string;
                        fontSizeMedium: string;
                        fontSizeLarge: string;
                        opacityDisabled: string;
                        colorOpacitySecondary: string;
                        /**
                         * fils status ['pending', 'uploading', 'finished', 'removed', 'error']
                         */
                        colorOpacitySecondaryHover: string;
                        colorOpacitySecondaryPressed: string;
                        colorSecondary: string;
                        colorSecondaryHover: string;
                        colorSecondaryPressed: string;
                        colorTertiary: string;
                        colorTertiaryHover: string;
                        colorTertiaryPressed: string;
                        colorQuaternary: string;
                        colorQuaternaryHover: string;
                        colorQuaternaryPressed: string;
                        color: string;
                        colorHover: string;
                        colorPressed: string;
                        colorFocus: string;
                        colorDisabled: string;
                        textColor: string;
                        textColorTertiary: string;
                        textColorHover: string;
                        textColorPressed: string;
                        textColorFocus: string;
                        textColorDisabled: string;
                        textColorText: string;
                        textColorTextHover: string;
                        textColorTextPressed: string;
                        textColorTextFocus: string;
                        textColorTextDisabled: string;
                        textColorGhost: string;
                        textColorGhostHover: string;
                        textColorGhostPressed: string;
                        textColorGhostFocus: string;
                        textColorGhostDisabled: string;
                        border: string;
                        borderHover: string;
                        borderPressed: string;
                        borderFocus: string;
                        borderDisabled: string;
                        rippleColor: string;
                        colorPrimary: string;
                        colorHoverPrimary: string;
                        colorPressedPrimary: string;
                        colorFocusPrimary: string;
                        colorDisabledPrimary: string;
                        textColorPrimary: string;
                        textColorHoverPrimary: string;
                        textColorPressedPrimary: string;
                        textColorFocusPrimary: string;
                        textColorDisabledPrimary: string;
                        textColorTextPrimary: string;
                        textColorTextHoverPrimary: string;
                        textColorTextPressedPrimary: string;
                        textColorTextFocusPrimary: string;
                        textColorTextDisabledPrimary: string;
                        textColorGhostPrimary: string;
                        textColorGhostHoverPrimary: string;
                        textColorGhostPressedPrimary: string;
                        textColorGhostFocusPrimary: string;
                        textColorGhostDisabledPrimary: string;
                        borderPrimary: string;
                        borderHoverPrimary: string;
                        borderPressedPrimary: string;
                        borderFocusPrimary: string;
                        borderDisabledPrimary: string;
                        rippleColorPrimary: string;
                        colorInfo: string;
                        colorHoverInfo: string;
                        colorPressedInfo: string;
                        colorFocusInfo: string;
                        colorDisabledInfo: string;
                        textColorInfo: string;
                        textColorHoverInfo: string;
                        textColorPressedInfo: string;
                        textColorFocusInfo: string;
                        textColorDisabledInfo: string;
                        textColorTextInfo: string;
                        textColorTextHoverInfo: string;
                        textColorTextPressedInfo: string;
                        textColorTextFocusInfo: string;
                        textColorTextDisabledInfo: string;
                        textColorGhostInfo: string;
                        textColorGhostHoverInfo: string;
                        textColorGhostPressedInfo: string;
                        textColorGhostFocusInfo: string;
                        textColorGhostDisabledInfo: string;
                        borderInfo: string;
                        borderHoverInfo: string;
                        borderPressedInfo: string;
                        borderFocusInfo: string;
                        borderDisabledInfo: string;
                        rippleColorInfo: string;
                        colorSuccess: string;
                        colorHoverSuccess: string;
                        colorPressedSuccess: string;
                        colorFocusSuccess: string;
                        colorDisabledSuccess: string;
                        textColorSuccess: string;
                        textColorHoverSuccess: string;
                        textColorPressedSuccess: string;
                        textColorFocusSuccess: string;
                        textColorDisabledSuccess: string;
                        textColorTextSuccess: string;
                        textColorTextHoverSuccess: string;
                        textColorTextPressedSuccess: string;
                        textColorTextFocusSuccess: string;
                        textColorTextDisabledSuccess: string;
                        textColorGhostSuccess: string;
                        textColorGhostHoverSuccess: string;
                        textColorGhostPressedSuccess: string;
                        textColorGhostFocusSuccess: string;
                        textColorGhostDisabledSuccess: string;
                        borderSuccess: string;
                        borderHoverSuccess: string;
                        borderPressedSuccess: string;
                        borderFocusSuccess: string;
                        borderDisabledSuccess: string;
                        rippleColorSuccess: string;
                        colorWarning: string;
                        colorHoverWarning: string;
                        colorPressedWarning: string;
                        colorFocusWarning: string;
                        colorDisabledWarning: string;
                        textColorWarning: string;
                        textColorHoverWarning: string;
                        textColorPressedWarning: string;
                        textColorFocusWarning: string;
                        textColorDisabledWarning: string;
                        textColorTextWarning: string;
                        textColorTextHoverWarning: string;
                        textColorTextPressedWarning: string;
                        textColorTextFocusWarning: string;
                        textColorTextDisabledWarning: string;
                        textColorGhostWarning: string;
                        textColorGhostHoverWarning: string;
                        textColorGhostPressedWarning: string;
                        textColorGhostFocusWarning: string;
                        textColorGhostDisabledWarning: string;
                        borderWarning: string;
                        borderHoverWarning: string;
                        borderPressedWarning: string;
                        borderFocusWarning: string;
                        borderDisabledWarning: string;
                        rippleColorWarning: string;
                        colorError: string;
                        colorHoverError: string;
                        colorPressedError: string;
                        colorFocusError: string;
                        colorDisabledError: string;
                        textColorError: string;
                        textColorHoverError: string;
                        textColorPressedError: string;
                        textColorFocusError: string;
                        textColorDisabledError: string;
                        textColorTextError: string;
                        textColorTextHoverError: string;
                        textColorTextPressedError: string;
                        textColorTextFocusError: string;
                        textColorTextDisabledError: string;
                        textColorGhostError: string;
                        textColorGhostHoverError: string;
                        textColorGhostPressedError: string;
                        textColorGhostFocusError: string;
                        textColorGhostDisabledError: string;
                        borderError: string;
                        borderHoverError: string;
                        borderPressedError: string;
                        borderFocusError: string;
                        borderDisabledError: string;
                        rippleColorError: string;
                        waveOpacity: string;
                        fontWeight: string;
                        fontWeightStrong: string;
                        paddingTiny: string;
                        paddingSmall: string;
                        paddingMedium: string;
                        paddingLarge: string;
                        paddingRoundTiny: string;
                        paddingRoundSmall: string;
                        paddingRoundMedium: string;
                        paddingRoundLarge: string;
                        iconMarginTiny: string;
                        iconMarginSmall: string;
                        iconMarginMedium: string;
                        iconMarginLarge: string;
                        iconSizeTiny: string;
                        iconSizeSmall: string;
                        iconSizeMedium: string;
                        iconSizeLarge: string;
                        rippleDuration: string;
                    },
                    any
                >;
                /**
                 * fils status ['pending', 'uploading', 'finished', 'removed', 'error']
                 */
                Progress: import('../../_mixins').Theme<
                    'Progress',
                    {
                        fontSize: string;
                        fontSizeCircle: string;
                        fontWeightCircle: string;
                        railColor: string;
                        railHeight: string;
                        iconSizeCircle: string;
                        iconSizeLine: string;
                        iconColor: string;
                        iconColorInfo: string;
                        iconColorSuccess: string;
                        iconColorWarning: string;
                        iconColorError: string;
                        textColorCircle: string;
                        textColorLineInner: string;
                        textColorLineOuter: string;
                        fillColor: string;
                        fillColorInfo: string;
                        fillColorSuccess: string;
                        fillColorWarning: string;
                        fillColorError: string;
                        lineBgProcessing: string;
                    },
                    any
                >;
            }
        >
    >;
    readonly themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Upload',
                {
                    fontSize: string;
                    lineHeight: string;
                    borderRadius: string;
                    draggerColor: string;
                    draggerBorder: string;
                    draggerBorderHover: string;
                    itemColorHover: string;
                    itemColorHoverError: string;
                    itemTextColor: string;
                    itemTextColorError: string;
                    itemTextColorSuccess: string;
                    itemIconColor: string;
                    itemDisabledOpacity: string;
                    itemBorderImageCardError: string;
                    itemBorderImageCard: string;
                },
                {
                    Button: import('../../_mixins').Theme<
                        'Button',
                        {
                            heightTiny: string;
                            heightSmall: string;
                            heightMedium: string;
                            heightLarge: string;
                            borderRadiusTiny: string;
                            borderRadiusSmall: string;
                            borderRadiusMedium: string;
                            borderRadiusLarge: string;
                            fontSizeTiny: string;
                            fontSizeSmall: string;
                            fontSizeMedium: string;
                            fontSizeLarge: string;
                            opacityDisabled: string;
                            colorOpacitySecondary: string;
                            /**
                             * fils status ['pending', 'uploading', 'finished', 'removed', 'error']
                             */
                            colorOpacitySecondaryHover: string;
                            colorOpacitySecondaryPressed: string;
                            colorSecondary: string;
                            colorSecondaryHover: string;
                            colorSecondaryPressed: string;
                            colorTertiary: string;
                            colorTertiaryHover: string;
                            colorTertiaryPressed: string;
                            colorQuaternary: string;
                            colorQuaternaryHover: string;
                            colorQuaternaryPressed: string;
                            color: string;
                            colorHover: string;
                            colorPressed: string;
                            colorFocus: string;
                            colorDisabled: string;
                            textColor: string;
                            textColorTertiary: string;
                            textColorHover: string;
                            textColorPressed: string;
                            textColorFocus: string;
                            textColorDisabled: string;
                            textColorText: string;
                            textColorTextHover: string;
                            textColorTextPressed: string;
                            textColorTextFocus: string;
                            textColorTextDisabled: string;
                            textColorGhost: string;
                            textColorGhostHover: string;
                            textColorGhostPressed: string;
                            textColorGhostFocus: string;
                            textColorGhostDisabled: string;
                            border: string;
                            borderHover: string;
                            borderPressed: string;
                            borderFocus: string;
                            borderDisabled: string;
                            rippleColor: string;
                            colorPrimary: string;
                            colorHoverPrimary: string;
                            colorPressedPrimary: string;
                            colorFocusPrimary: string;
                            colorDisabledPrimary: string;
                            textColorPrimary: string;
                            textColorHoverPrimary: string;
                            textColorPressedPrimary: string;
                            textColorFocusPrimary: string;
                            textColorDisabledPrimary: string;
                            textColorTextPrimary: string;
                            textColorTextHoverPrimary: string;
                            textColorTextPressedPrimary: string;
                            textColorTextFocusPrimary: string;
                            textColorTextDisabledPrimary: string;
                            textColorGhostPrimary: string;
                            textColorGhostHoverPrimary: string;
                            textColorGhostPressedPrimary: string;
                            textColorGhostFocusPrimary: string;
                            textColorGhostDisabledPrimary: string;
                            borderPrimary: string;
                            borderHoverPrimary: string;
                            borderPressedPrimary: string;
                            borderFocusPrimary: string;
                            borderDisabledPrimary: string;
                            rippleColorPrimary: string;
                            colorInfo: string;
                            colorHoverInfo: string;
                            colorPressedInfo: string;
                            colorFocusInfo: string;
                            colorDisabledInfo: string;
                            textColorInfo: string;
                            textColorHoverInfo: string;
                            textColorPressedInfo: string;
                            textColorFocusInfo: string;
                            textColorDisabledInfo: string;
                            textColorTextInfo: string;
                            textColorTextHoverInfo: string;
                            textColorTextPressedInfo: string;
                            textColorTextFocusInfo: string;
                            textColorTextDisabledInfo: string;
                            textColorGhostInfo: string;
                            textColorGhostHoverInfo: string;
                            textColorGhostPressedInfo: string;
                            textColorGhostFocusInfo: string;
                            textColorGhostDisabledInfo: string;
                            borderInfo: string;
                            borderHoverInfo: string;
                            borderPressedInfo: string;
                            borderFocusInfo: string;
                            borderDisabledInfo: string;
                            rippleColorInfo: string;
                            colorSuccess: string;
                            colorHoverSuccess: string;
                            colorPressedSuccess: string;
                            colorFocusSuccess: string;
                            colorDisabledSuccess: string;
                            textColorSuccess: string;
                            textColorHoverSuccess: string;
                            textColorPressedSuccess: string;
                            textColorFocusSuccess: string;
                            textColorDisabledSuccess: string;
                            textColorTextSuccess: string;
                            textColorTextHoverSuccess: string;
                            textColorTextPressedSuccess: string;
                            textColorTextFocusSuccess: string;
                            textColorTextDisabledSuccess: string;
                            textColorGhostSuccess: string;
                            textColorGhostHoverSuccess: string;
                            textColorGhostPressedSuccess: string;
                            textColorGhostFocusSuccess: string;
                            textColorGhostDisabledSuccess: string;
                            borderSuccess: string;
                            borderHoverSuccess: string;
                            borderPressedSuccess: string;
                            borderFocusSuccess: string;
                            borderDisabledSuccess: string;
                            rippleColorSuccess: string;
                            colorWarning: string;
                            colorHoverWarning: string;
                            colorPressedWarning: string;
                            colorFocusWarning: string;
                            colorDisabledWarning: string;
                            textColorWarning: string;
                            textColorHoverWarning: string;
                            textColorPressedWarning: string;
                            textColorFocusWarning: string;
                            textColorDisabledWarning: string;
                            textColorTextWarning: string;
                            textColorTextHoverWarning: string;
                            textColorTextPressedWarning: string;
                            textColorTextFocusWarning: string;
                            textColorTextDisabledWarning: string;
                            textColorGhostWarning: string;
                            textColorGhostHoverWarning: string;
                            textColorGhostPressedWarning: string;
                            textColorGhostFocusWarning: string;
                            textColorGhostDisabledWarning: string;
                            borderWarning: string;
                            borderHoverWarning: string;
                            borderPressedWarning: string;
                            borderFocusWarning: string;
                            borderDisabledWarning: string;
                            rippleColorWarning: string;
                            colorError: string;
                            colorHoverError: string;
                            colorPressedError: string;
                            colorFocusError: string;
                            colorDisabledError: string;
                            textColorError: string;
                            textColorHoverError: string;
                            textColorPressedError: string;
                            textColorFocusError: string;
                            textColorDisabledError: string;
                            textColorTextError: string;
                            textColorTextHoverError: string;
                            textColorTextPressedError: string;
                            textColorTextFocusError: string;
                            textColorTextDisabledError: string;
                            textColorGhostError: string;
                            textColorGhostHoverError: string;
                            textColorGhostPressedError: string;
                            textColorGhostFocusError: string;
                            textColorGhostDisabledError: string;
                            borderError: string;
                            borderHoverError: string;
                            borderPressedError: string;
                            borderFocusError: string;
                            borderDisabledError: string;
                            rippleColorError: string;
                            waveOpacity: string;
                            fontWeight: string;
                            fontWeightStrong: string;
                            paddingTiny: string;
                            paddingSmall: string;
                            paddingMedium: string;
                            paddingLarge: string;
                            paddingRoundTiny: string;
                            paddingRoundSmall: string;
                            paddingRoundMedium: string;
                            paddingRoundLarge: string;
                            iconMarginTiny: string;
                            iconMarginSmall: string;
                            iconMarginMedium: string;
                            iconMarginLarge: string;
                            iconSizeTiny: string;
                            iconSizeSmall: string;
                            iconSizeMedium: string;
                            iconSizeLarge: string;
                            rippleDuration: string;
                        },
                        any
                    >;
                    /**
                     * fils status ['pending', 'uploading', 'finished', 'removed', 'error']
                     */
                    Progress: import('../../_mixins').Theme<
                        'Progress',
                        {
                            fontSize: string;
                            fontSizeCircle: string;
                            fontWeightCircle: string;
                            railColor: string;
                            railHeight: string;
                            iconSizeCircle: string;
                            iconSizeLine: string;
                            iconColor: string;
                            iconColorInfo: string;
                            iconColorSuccess: string;
                            iconColorWarning: string;
                            iconColorError: string;
                            textColorCircle: string;
                            textColorLineInner: string;
                            textColorLineOuter: string;
                            fillColor: string;
                            fillColorInfo: string;
                            fillColorSuccess: string;
                            fillColorWarning: string;
                            fillColorError: string;
                            lineBgProcessing: string;
                        },
                        any
                    >;
                }
            >
        >
    >;
    readonly builtinThemeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Upload',
                {
                    fontSize: string;
                    lineHeight: string;
                    borderRadius: string;
                    draggerColor: string;
                    draggerBorder: string;
                    draggerBorderHover: string;
                    itemColorHover: string;
                    itemColorHoverError: string;
                    itemTextColor: string;
                    itemTextColorError: string;
                    itemTextColorSuccess: string;
                    itemIconColor: string;
                    itemDisabledOpacity: string;
                    itemBorderImageCardError: string;
                    itemBorderImageCard: string;
                },
                {
                    Button: import('../../_mixins').Theme<
                        'Button',
                        {
                            heightTiny: string;
                            heightSmall: string;
                            heightMedium: string;
                            heightLarge: string;
                            borderRadiusTiny: string;
                            borderRadiusSmall: string;
                            borderRadiusMedium: string;
                            borderRadiusLarge: string;
                            fontSizeTiny: string;
                            fontSizeSmall: string;
                            fontSizeMedium: string;
                            fontSizeLarge: string;
                            opacityDisabled: string;
                            colorOpacitySecondary: string;
                            /**
                             * fils status ['pending', 'uploading', 'finished', 'removed', 'error']
                             */
                            colorOpacitySecondaryHover: string;
                            colorOpacitySecondaryPressed: string;
                            colorSecondary: string;
                            colorSecondaryHover: string;
                            colorSecondaryPressed: string;
                            colorTertiary: string;
                            colorTertiaryHover: string;
                            colorTertiaryPressed: string;
                            colorQuaternary: string;
                            colorQuaternaryHover: string;
                            colorQuaternaryPressed: string;
                            color: string;
                            colorHover: string;
                            colorPressed: string;
                            colorFocus: string;
                            colorDisabled: string;
                            textColor: string;
                            textColorTertiary: string;
                            textColorHover: string;
                            textColorPressed: string;
                            textColorFocus: string;
                            textColorDisabled: string;
                            textColorText: string;
                            textColorTextHover: string;
                            textColorTextPressed: string;
                            textColorTextFocus: string;
                            textColorTextDisabled: string;
                            textColorGhost: string;
                            textColorGhostHover: string;
                            textColorGhostPressed: string;
                            textColorGhostFocus: string;
                            textColorGhostDisabled: string;
                            border: string;
                            borderHover: string;
                            borderPressed: string;
                            borderFocus: string;
                            borderDisabled: string;
                            rippleColor: string;
                            colorPrimary: string;
                            colorHoverPrimary: string;
                            colorPressedPrimary: string;
                            colorFocusPrimary: string;
                            colorDisabledPrimary: string;
                            textColorPrimary: string;
                            textColorHoverPrimary: string;
                            textColorPressedPrimary: string;
                            textColorFocusPrimary: string;
                            textColorDisabledPrimary: string;
                            textColorTextPrimary: string;
                            textColorTextHoverPrimary: string;
                            textColorTextPressedPrimary: string;
                            textColorTextFocusPrimary: string;
                            textColorTextDisabledPrimary: string;
                            textColorGhostPrimary: string;
                            textColorGhostHoverPrimary: string;
                            textColorGhostPressedPrimary: string;
                            textColorGhostFocusPrimary: string;
                            textColorGhostDisabledPrimary: string;
                            borderPrimary: string;
                            borderHoverPrimary: string;
                            borderPressedPrimary: string;
                            borderFocusPrimary: string;
                            borderDisabledPrimary: string;
                            rippleColorPrimary: string;
                            colorInfo: string;
                            colorHoverInfo: string;
                            colorPressedInfo: string;
                            colorFocusInfo: string;
                            colorDisabledInfo: string;
                            textColorInfo: string;
                            textColorHoverInfo: string;
                            textColorPressedInfo: string;
                            textColorFocusInfo: string;
                            textColorDisabledInfo: string;
                            textColorTextInfo: string;
                            textColorTextHoverInfo: string;
                            textColorTextPressedInfo: string;
                            textColorTextFocusInfo: string;
                            textColorTextDisabledInfo: string;
                            textColorGhostInfo: string;
                            textColorGhostHoverInfo: string;
                            textColorGhostPressedInfo: string;
                            textColorGhostFocusInfo: string;
                            textColorGhostDisabledInfo: string;
                            borderInfo: string;
                            borderHoverInfo: string;
                            borderPressedInfo: string;
                            borderFocusInfo: string;
                            borderDisabledInfo: string;
                            rippleColorInfo: string;
                            colorSuccess: string;
                            colorHoverSuccess: string;
                            colorPressedSuccess: string;
                            colorFocusSuccess: string;
                            colorDisabledSuccess: string;
                            textColorSuccess: string;
                            textColorHoverSuccess: string;
                            textColorPressedSuccess: string;
                            textColorFocusSuccess: string;
                            textColorDisabledSuccess: string;
                            textColorTextSuccess: string;
                            textColorTextHoverSuccess: string;
                            textColorTextPressedSuccess: string;
                            textColorTextFocusSuccess: string;
                            textColorTextDisabledSuccess: string;
                            textColorGhostSuccess: string;
                            textColorGhostHoverSuccess: string;
                            textColorGhostPressedSuccess: string;
                            textColorGhostFocusSuccess: string;
                            textColorGhostDisabledSuccess: string;
                            borderSuccess: string;
                            borderHoverSuccess: string;
                            borderPressedSuccess: string;
                            borderFocusSuccess: string;
                            borderDisabledSuccess: string;
                            rippleColorSuccess: string;
                            colorWarning: string;
                            colorHoverWarning: string;
                            colorPressedWarning: string;
                            colorFocusWarning: string;
                            colorDisabledWarning: string;
                            textColorWarning: string;
                            textColorHoverWarning: string;
                            textColorPressedWarning: string;
                            textColorFocusWarning: string;
                            textColorDisabledWarning: string;
                            textColorTextWarning: string;
                            textColorTextHoverWarning: string;
                            textColorTextPressedWarning: string;
                            textColorTextFocusWarning: string;
                            textColorTextDisabledWarning: string;
                            textColorGhostWarning: string;
                            textColorGhostHoverWarning: string;
                            textColorGhostPressedWarning: string;
                            textColorGhostFocusWarning: string;
                            textColorGhostDisabledWarning: string;
                            borderWarning: string;
                            borderHoverWarning: string;
                            borderPressedWarning: string;
                            borderFocusWarning: string;
                            borderDisabledWarning: string;
                            rippleColorWarning: string;
                            colorError: string;
                            colorHoverError: string;
                            colorPressedError: string;
                            colorFocusError: string;
                            colorDisabledError: string;
                            textColorError: string;
                            textColorHoverError: string;
                            textColorPressedError: string;
                            textColorFocusError: string;
                            textColorDisabledError: string;
                            textColorTextError: string;
                            textColorTextHoverError: string;
                            textColorTextPressedError: string;
                            textColorTextFocusError: string;
                            textColorTextDisabledError: string;
                            textColorGhostError: string;
                            textColorGhostHoverError: string;
                            textColorGhostPressedError: string;
                            textColorGhostFocusError: string;
                            textColorGhostDisabledError: string;
                            borderError: string;
                            borderHoverError: string;
                            borderPressedError: string;
                            borderFocusError: string;
                            borderDisabledError: string;
                            rippleColorError: string;
                            waveOpacity: string;
                            fontWeight: string;
                            fontWeightStrong: string;
                            paddingTiny: string;
                            paddingSmall: string;
                            paddingMedium: string;
                            paddingLarge: string;
                            paddingRoundTiny: string;
                            paddingRoundSmall: string;
                            paddingRoundMedium: string;
                            paddingRoundLarge: string;
                            iconMarginTiny: string;
                            iconMarginSmall: string;
                            iconMarginMedium: string;
                            iconMarginLarge: string;
                            iconSizeTiny: string;
                            iconSizeSmall: string;
                            iconSizeMedium: string;
                            iconSizeLarge: string;
                            rippleDuration: string;
                        },
                        any
                    >;
                    /**
                     * fils status ['pending', 'uploading', 'finished', 'removed', 'error']
                     */
                    Progress: import('../../_mixins').Theme<
                        'Progress',
                        {
                            fontSize: string;
                            fontSizeCircle: string;
                            fontWeightCircle: string;
                            railColor: string;
                            railHeight: string;
                            iconSizeCircle: string;
                            iconSizeLine: string;
                            iconColor: string;
                            iconColorInfo: string;
                            iconColorSuccess: string;
                            iconColorWarning: string;
                            iconColorError: string;
                            textColorCircle: string;
                            textColorLineInner: string;
                            textColorLineOuter: string;
                            fillColor: string;
                            fillColorInfo: string;
                            fillColorSuccess: string;
                            fillColorWarning: string;
                            fillColorError: string;
                            lineBgProcessing: string;
                        },
                        any
                    >;
                }
            >
        >
    >;
};
export type UploadProps = ExtractPublicPropTypes<typeof uploadProps>;
declare const _default: import('vue').DefineComponent<
    {
        readonly name: {
            readonly type: StringConstructor;
            readonly default: 'file';
        };
        readonly accept: StringConstructor;
        readonly action: StringConstructor;
        readonly customRequest: PropType<CustomRequest>;
        readonly directory: BooleanConstructor;
        readonly directoryDnd: {
            readonly type: BooleanConstructor;
            readonly default: undefined;
        };
        readonly method: {
            readonly type: StringConstructor;
            readonly default: 'POST';
        };
        readonly multiple: BooleanConstructor;
        readonly showFileList: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly data: PropType<FuncOrRecordOrUndef>;
        readonly headers: PropType<FuncOrRecordOrUndef>;
        readonly withCredentials: BooleanConstructor;
        readonly responseType: {
            readonly type: PropType<XMLHttpRequestResponseType>;
            readonly default: '';
        };
        readonly disabled: {
            readonly type: PropType<boolean | undefined>;
            readonly default: undefined;
        };
        readonly onChange: PropType<OnChange>;
        readonly onRemove: PropType<OnRemove>;
        readonly onFinish: PropType<OnFinish>;
        readonly onError: PropType<OnError>;
        readonly onBeforeUpload: PropType<OnBeforeUpload>;
        readonly isErrorState: PropType<(xhr: XMLHttpRequest) => boolean>;
        /** currently not used */
        readonly onDownload: PropType<OnDownload>;
        readonly defaultUpload: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly fileList: PropType<FileInfo[]>;
        readonly 'onUpdate:fileList': PropType<MaybeArray<OnUpdateFileList>>;
        readonly onUpdateFileList: PropType<MaybeArray<OnUpdateFileList>>;
        readonly fileListStyle: PropType<string | CSSProperties>;
        readonly defaultFileList: {
            readonly type: PropType<FileInfo[]>;
            readonly default: () => never[];
        };
        readonly showCancelButton: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly showRemoveButton: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly showDownloadButton: BooleanConstructor;
        readonly showRetryButton: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly showPreviewButton: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly listType: {
            readonly type: PropType<ListType>;
            readonly default: 'text';
        };
        readonly onPreview: PropType<OnPreview>;
        readonly shouldUseThumbnailUrl: {
            readonly type: PropType<ShouldUseThumbnailUrl>;
            readonly default: (file: Required<FileInfo>) => boolean;
        };
        readonly createThumbnailUrl: PropType<CreateThumbnailUrl>;
        readonly abstract: BooleanConstructor;
        readonly max: NumberConstructor;
        readonly showTrigger: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly imageGroupProps: PropType<ImageGroupProps>;
        readonly inputProps: PropType<InputHTMLAttributes>;
        readonly triggerStyle: PropType<string | CSSProperties>;
        readonly renderIcon: PropType<RenderIcon>;
        readonly theme: PropType<
            import('../../_mixins').Theme<
                'Upload',
                {
                    fontSize: string;
                    lineHeight: string;
                    borderRadius: string;
                    draggerColor: string;
                    draggerBorder: string;
                    draggerBorderHover: string;
                    itemColorHover: string;
                    itemColorHoverError: string;
                    itemTextColor: string;
                    itemTextColorError: string;
                    itemTextColorSuccess: string;
                    itemIconColor: string;
                    itemDisabledOpacity: string;
                    itemBorderImageCardError: string;
                    itemBorderImageCard: string;
                },
                {
                    Button: import('../../_mixins').Theme<
                        'Button',
                        {
                            heightTiny: string;
                            heightSmall: string;
                            heightMedium: string;
                            heightLarge: string;
                            borderRadiusTiny: string;
                            borderRadiusSmall: string;
                            borderRadiusMedium: string;
                            borderRadiusLarge: string;
                            fontSizeTiny: string;
                            fontSizeSmall: string;
                            fontSizeMedium: string;
                            fontSizeLarge: string;
                            opacityDisabled: string;
                            colorOpacitySecondary: string;
                            /**
                             * fils status ['pending', 'uploading', 'finished', 'removed', 'error']
                             */
                            colorOpacitySecondaryHover: string;
                            colorOpacitySecondaryPressed: string;
                            colorSecondary: string;
                            colorSecondaryHover: string;
                            colorSecondaryPressed: string;
                            colorTertiary: string;
                            colorTertiaryHover: string;
                            colorTertiaryPressed: string;
                            colorQuaternary: string;
                            colorQuaternaryHover: string;
                            colorQuaternaryPressed: string;
                            color: string;
                            colorHover: string;
                            colorPressed: string;
                            colorFocus: string;
                            colorDisabled: string;
                            textColor: string;
                            textColorTertiary: string;
                            textColorHover: string;
                            textColorPressed: string;
                            textColorFocus: string;
                            textColorDisabled: string;
                            textColorText: string;
                            textColorTextHover: string;
                            textColorTextPressed: string;
                            textColorTextFocus: string;
                            textColorTextDisabled: string;
                            textColorGhost: string;
                            textColorGhostHover: string;
                            textColorGhostPressed: string;
                            textColorGhostFocus: string;
                            textColorGhostDisabled: string;
                            border: string;
                            borderHover: string;
                            borderPressed: string;
                            borderFocus: string;
                            borderDisabled: string;
                            rippleColor: string;
                            colorPrimary: string;
                            colorHoverPrimary: string;
                            colorPressedPrimary: string;
                            colorFocusPrimary: string;
                            colorDisabledPrimary: string;
                            textColorPrimary: string;
                            textColorHoverPrimary: string;
                            textColorPressedPrimary: string;
                            textColorFocusPrimary: string;
                            textColorDisabledPrimary: string;
                            textColorTextPrimary: string;
                            textColorTextHoverPrimary: string;
                            textColorTextPressedPrimary: string;
                            textColorTextFocusPrimary: string;
                            textColorTextDisabledPrimary: string;
                            textColorGhostPrimary: string;
                            textColorGhostHoverPrimary: string;
                            textColorGhostPressedPrimary: string;
                            textColorGhostFocusPrimary: string;
                            textColorGhostDisabledPrimary: string;
                            borderPrimary: string;
                            borderHoverPrimary: string;
                            borderPressedPrimary: string;
                            borderFocusPrimary: string;
                            borderDisabledPrimary: string;
                            rippleColorPrimary: string;
                            colorInfo: string;
                            colorHoverInfo: string;
                            colorPressedInfo: string;
                            colorFocusInfo: string;
                            colorDisabledInfo: string;
                            textColorInfo: string;
                            textColorHoverInfo: string;
                            textColorPressedInfo: string;
                            textColorFocusInfo: string;
                            textColorDisabledInfo: string;
                            textColorTextInfo: string;
                            textColorTextHoverInfo: string;
                            textColorTextPressedInfo: string;
                            textColorTextFocusInfo: string;
                            textColorTextDisabledInfo: string;
                            textColorGhostInfo: string;
                            textColorGhostHoverInfo: string;
                            textColorGhostPressedInfo: string;
                            textColorGhostFocusInfo: string;
                            textColorGhostDisabledInfo: string;
                            borderInfo: string;
                            borderHoverInfo: string;
                            borderPressedInfo: string;
                            borderFocusInfo: string;
                            borderDisabledInfo: string;
                            rippleColorInfo: string;
                            colorSuccess: string;
                            colorHoverSuccess: string;
                            colorPressedSuccess: string;
                            colorFocusSuccess: string;
                            colorDisabledSuccess: string;
                            textColorSuccess: string;
                            textColorHoverSuccess: string;
                            textColorPressedSuccess: string;
                            textColorFocusSuccess: string;
                            textColorDisabledSuccess: string;
                            textColorTextSuccess: string;
                            textColorTextHoverSuccess: string;
                            textColorTextPressedSuccess: string;
                            textColorTextFocusSuccess: string;
                            textColorTextDisabledSuccess: string;
                            textColorGhostSuccess: string;
                            textColorGhostHoverSuccess: string;
                            textColorGhostPressedSuccess: string;
                            textColorGhostFocusSuccess: string;
                            textColorGhostDisabledSuccess: string;
                            borderSuccess: string;
                            borderHoverSuccess: string;
                            borderPressedSuccess: string;
                            borderFocusSuccess: string;
                            borderDisabledSuccess: string;
                            rippleColorSuccess: string;
                            colorWarning: string;
                            colorHoverWarning: string;
                            colorPressedWarning: string;
                            colorFocusWarning: string;
                            colorDisabledWarning: string;
                            textColorWarning: string;
                            textColorHoverWarning: string;
                            textColorPressedWarning: string;
                            textColorFocusWarning: string;
                            textColorDisabledWarning: string;
                            textColorTextWarning: string;
                            textColorTextHoverWarning: string;
                            textColorTextPressedWarning: string;
                            textColorTextFocusWarning: string;
                            textColorTextDisabledWarning: string;
                            textColorGhostWarning: string;
                            textColorGhostHoverWarning: string;
                            textColorGhostPressedWarning: string;
                            textColorGhostFocusWarning: string;
                            textColorGhostDisabledWarning: string;
                            borderWarning: string;
                            borderHoverWarning: string;
                            borderPressedWarning: string;
                            borderFocusWarning: string;
                            borderDisabledWarning: string;
                            rippleColorWarning: string;
                            colorError: string;
                            colorHoverError: string;
                            colorPressedError: string;
                            colorFocusError: string;
                            colorDisabledError: string;
                            textColorError: string;
                            textColorHoverError: string;
                            textColorPressedError: string;
                            textColorFocusError: string;
                            textColorDisabledError: string;
                            textColorTextError: string;
                            textColorTextHoverError: string;
                            textColorTextPressedError: string;
                            textColorTextFocusError: string;
                            textColorTextDisabledError: string;
                            textColorGhostError: string;
                            textColorGhostHoverError: string;
                            textColorGhostPressedError: string;
                            textColorGhostFocusError: string;
                            textColorGhostDisabledError: string;
                            borderError: string;
                            borderHoverError: string;
                            borderPressedError: string;
                            borderFocusError: string;
                            borderDisabledError: string;
                            rippleColorError: string;
                            waveOpacity: string;
                            fontWeight: string;
                            fontWeightStrong: string;
                            paddingTiny: string;
                            paddingSmall: string;
                            paddingMedium: string;
                            paddingLarge: string;
                            paddingRoundTiny: string;
                            paddingRoundSmall: string;
                            paddingRoundMedium: string;
                            paddingRoundLarge: string;
                            iconMarginTiny: string;
                            iconMarginSmall: string;
                            iconMarginMedium: string;
                            iconMarginLarge: string;
                            iconSizeTiny: string;
                            iconSizeSmall: string;
                            iconSizeMedium: string;
                            iconSizeLarge: string;
                            rippleDuration: string;
                        },
                        any
                    >;
                    /**
                     * fils status ['pending', 'uploading', 'finished', 'removed', 'error']
                     */
                    Progress: import('../../_mixins').Theme<
                        'Progress',
                        {
                            fontSize: string;
                            fontSizeCircle: string;
                            fontWeightCircle: string;
                            railColor: string;
                            railHeight: string;
                            iconSizeCircle: string;
                            iconSizeLine: string;
                            iconColor: string;
                            iconColorInfo: string;
                            iconColorSuccess: string;
                            iconColorWarning: string;
                            iconColorError: string;
                            textColorCircle: string;
                            textColorLineInner: string;
                            textColorLineOuter: string;
                            fillColor: string;
                            fillColorInfo: string;
                            fillColorSuccess: string;
                            fillColorWarning: string;
                            fillColorError: string;
                            lineBgProcessing: string;
                        },
                        any
                    >;
                }
            >
        >;
        readonly themeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Upload',
                    {
                        fontSize: string;
                        lineHeight: string;
                        borderRadius: string;
                        draggerColor: string;
                        draggerBorder: string;
                        draggerBorderHover: string;
                        itemColorHover: string;
                        itemColorHoverError: string;
                        itemTextColor: string;
                        itemTextColorError: string;
                        itemTextColorSuccess: string;
                        itemIconColor: string;
                        itemDisabledOpacity: string;
                        itemBorderImageCardError: string;
                        itemBorderImageCard: string;
                    },
                    {
                        Button: import('../../_mixins').Theme<
                            'Button',
                            {
                                heightTiny: string;
                                heightSmall: string;
                                heightMedium: string;
                                heightLarge: string;
                                borderRadiusTiny: string;
                                borderRadiusSmall: string;
                                borderRadiusMedium: string;
                                borderRadiusLarge: string;
                                fontSizeTiny: string;
                                fontSizeSmall: string;
                                fontSizeMedium: string;
                                fontSizeLarge: string;
                                opacityDisabled: string;
                                colorOpacitySecondary: string;
                                /**
                                 * fils status ['pending', 'uploading', 'finished', 'removed', 'error']
                                 */
                                colorOpacitySecondaryHover: string;
                                colorOpacitySecondaryPressed: string;
                                colorSecondary: string;
                                colorSecondaryHover: string;
                                colorSecondaryPressed: string;
                                colorTertiary: string;
                                colorTertiaryHover: string;
                                colorTertiaryPressed: string;
                                colorQuaternary: string;
                                colorQuaternaryHover: string;
                                colorQuaternaryPressed: string;
                                color: string;
                                colorHover: string;
                                colorPressed: string;
                                colorFocus: string;
                                colorDisabled: string;
                                textColor: string;
                                textColorTertiary: string;
                                textColorHover: string;
                                textColorPressed: string;
                                textColorFocus: string;
                                textColorDisabled: string;
                                textColorText: string;
                                textColorTextHover: string;
                                textColorTextPressed: string;
                                textColorTextFocus: string;
                                textColorTextDisabled: string;
                                textColorGhost: string;
                                textColorGhostHover: string;
                                textColorGhostPressed: string;
                                textColorGhostFocus: string;
                                textColorGhostDisabled: string;
                                border: string;
                                borderHover: string;
                                borderPressed: string;
                                borderFocus: string;
                                borderDisabled: string;
                                rippleColor: string;
                                colorPrimary: string;
                                colorHoverPrimary: string;
                                colorPressedPrimary: string;
                                colorFocusPrimary: string;
                                colorDisabledPrimary: string;
                                textColorPrimary: string;
                                textColorHoverPrimary: string;
                                textColorPressedPrimary: string;
                                textColorFocusPrimary: string;
                                textColorDisabledPrimary: string;
                                textColorTextPrimary: string;
                                textColorTextHoverPrimary: string;
                                textColorTextPressedPrimary: string;
                                textColorTextFocusPrimary: string;
                                textColorTextDisabledPrimary: string;
                                textColorGhostPrimary: string;
                                textColorGhostHoverPrimary: string;
                                textColorGhostPressedPrimary: string;
                                textColorGhostFocusPrimary: string;
                                textColorGhostDisabledPrimary: string;
                                borderPrimary: string;
                                borderHoverPrimary: string;
                                borderPressedPrimary: string;
                                borderFocusPrimary: string;
                                borderDisabledPrimary: string;
                                rippleColorPrimary: string;
                                colorInfo: string;
                                colorHoverInfo: string;
                                colorPressedInfo: string;
                                colorFocusInfo: string;
                                colorDisabledInfo: string;
                                textColorInfo: string;
                                textColorHoverInfo: string;
                                textColorPressedInfo: string;
                                textColorFocusInfo: string;
                                textColorDisabledInfo: string;
                                textColorTextInfo: string;
                                textColorTextHoverInfo: string;
                                textColorTextPressedInfo: string;
                                textColorTextFocusInfo: string;
                                textColorTextDisabledInfo: string;
                                textColorGhostInfo: string;
                                textColorGhostHoverInfo: string;
                                textColorGhostPressedInfo: string;
                                textColorGhostFocusInfo: string;
                                textColorGhostDisabledInfo: string;
                                borderInfo: string;
                                borderHoverInfo: string;
                                borderPressedInfo: string;
                                borderFocusInfo: string;
                                borderDisabledInfo: string;
                                rippleColorInfo: string;
                                colorSuccess: string;
                                colorHoverSuccess: string;
                                colorPressedSuccess: string;
                                colorFocusSuccess: string;
                                colorDisabledSuccess: string;
                                textColorSuccess: string;
                                textColorHoverSuccess: string;
                                textColorPressedSuccess: string;
                                textColorFocusSuccess: string;
                                textColorDisabledSuccess: string;
                                textColorTextSuccess: string;
                                textColorTextHoverSuccess: string;
                                textColorTextPressedSuccess: string;
                                textColorTextFocusSuccess: string;
                                textColorTextDisabledSuccess: string;
                                textColorGhostSuccess: string;
                                textColorGhostHoverSuccess: string;
                                textColorGhostPressedSuccess: string;
                                textColorGhostFocusSuccess: string;
                                textColorGhostDisabledSuccess: string;
                                borderSuccess: string;
                                borderHoverSuccess: string;
                                borderPressedSuccess: string;
                                borderFocusSuccess: string;
                                borderDisabledSuccess: string;
                                rippleColorSuccess: string;
                                colorWarning: string;
                                colorHoverWarning: string;
                                colorPressedWarning: string;
                                colorFocusWarning: string;
                                colorDisabledWarning: string;
                                textColorWarning: string;
                                textColorHoverWarning: string;
                                textColorPressedWarning: string;
                                textColorFocusWarning: string;
                                textColorDisabledWarning: string;
                                textColorTextWarning: string;
                                textColorTextHoverWarning: string;
                                textColorTextPressedWarning: string;
                                textColorTextFocusWarning: string;
                                textColorTextDisabledWarning: string;
                                textColorGhostWarning: string;
                                textColorGhostHoverWarning: string;
                                textColorGhostPressedWarning: string;
                                textColorGhostFocusWarning: string;
                                textColorGhostDisabledWarning: string;
                                borderWarning: string;
                                borderHoverWarning: string;
                                borderPressedWarning: string;
                                borderFocusWarning: string;
                                borderDisabledWarning: string;
                                rippleColorWarning: string;
                                colorError: string;
                                colorHoverError: string;
                                colorPressedError: string;
                                colorFocusError: string;
                                colorDisabledError: string;
                                textColorError: string;
                                textColorHoverError: string;
                                textColorPressedError: string;
                                textColorFocusError: string;
                                textColorDisabledError: string;
                                textColorTextError: string;
                                textColorTextHoverError: string;
                                textColorTextPressedError: string;
                                textColorTextFocusError: string;
                                textColorTextDisabledError: string;
                                textColorGhostError: string;
                                textColorGhostHoverError: string;
                                textColorGhostPressedError: string;
                                textColorGhostFocusError: string;
                                textColorGhostDisabledError: string;
                                borderError: string;
                                borderHoverError: string;
                                borderPressedError: string;
                                borderFocusError: string;
                                borderDisabledError: string;
                                rippleColorError: string;
                                waveOpacity: string;
                                fontWeight: string;
                                fontWeightStrong: string;
                                paddingTiny: string;
                                paddingSmall: string;
                                paddingMedium: string;
                                paddingLarge: string;
                                paddingRoundTiny: string;
                                paddingRoundSmall: string;
                                paddingRoundMedium: string;
                                paddingRoundLarge: string;
                                iconMarginTiny: string;
                                iconMarginSmall: string;
                                iconMarginMedium: string;
                                iconMarginLarge: string;
                                iconSizeTiny: string;
                                iconSizeSmall: string;
                                iconSizeMedium: string;
                                iconSizeLarge: string;
                                rippleDuration: string;
                            },
                            any
                        >;
                        /**
                         * fils status ['pending', 'uploading', 'finished', 'removed', 'error']
                         */
                        Progress: import('../../_mixins').Theme<
                            'Progress',
                            {
                                fontSize: string;
                                fontSizeCircle: string;
                                fontWeightCircle: string;
                                railColor: string;
                                railHeight: string;
                                iconSizeCircle: string;
                                iconSizeLine: string;
                                iconColor: string;
                                iconColorInfo: string;
                                iconColorSuccess: string;
                                iconColorWarning: string;
                                iconColorError: string;
                                textColorCircle: string;
                                textColorLineInner: string;
                                textColorLineOuter: string;
                                fillColor: string;
                                fillColorInfo: string;
                                fillColorSuccess: string;
                                fillColorWarning: string;
                                fillColorError: string;
                                lineBgProcessing: string;
                            },
                            any
                        >;
                    }
                >
            >
        >;
        readonly builtinThemeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Upload',
                    {
                        fontSize: string;
                        lineHeight: string;
                        borderRadius: string;
                        draggerColor: string;
                        draggerBorder: string;
                        draggerBorderHover: string;
                        itemColorHover: string;
                        itemColorHoverError: string;
                        itemTextColor: string;
                        itemTextColorError: string;
                        itemTextColorSuccess: string;
                        itemIconColor: string;
                        itemDisabledOpacity: string;
                        itemBorderImageCardError: string;
                        itemBorderImageCard: string;
                    },
                    {
                        Button: import('../../_mixins').Theme<
                            'Button',
                            {
                                heightTiny: string;
                                heightSmall: string;
                                heightMedium: string;
                                heightLarge: string;
                                borderRadiusTiny: string;
                                borderRadiusSmall: string;
                                borderRadiusMedium: string;
                                borderRadiusLarge: string;
                                fontSizeTiny: string;
                                fontSizeSmall: string;
                                fontSizeMedium: string;
                                fontSizeLarge: string;
                                opacityDisabled: string;
                                colorOpacitySecondary: string;
                                /**
                                 * fils status ['pending', 'uploading', 'finished', 'removed', 'error']
                                 */
                                colorOpacitySecondaryHover: string;
                                colorOpacitySecondaryPressed: string;
                                colorSecondary: string;
                                colorSecondaryHover: string;
                                colorSecondaryPressed: string;
                                colorTertiary: string;
                                colorTertiaryHover: string;
                                colorTertiaryPressed: string;
                                colorQuaternary: string;
                                colorQuaternaryHover: string;
                                colorQuaternaryPressed: string;
                                color: string;
                                colorHover: string;
                                colorPressed: string;
                                colorFocus: string;
                                colorDisabled: string;
                                textColor: string;
                                textColorTertiary: string;
                                textColorHover: string;
                                textColorPressed: string;
                                textColorFocus: string;
                                textColorDisabled: string;
                                textColorText: string;
                                textColorTextHover: string;
                                textColorTextPressed: string;
                                textColorTextFocus: string;
                                textColorTextDisabled: string;
                                textColorGhost: string;
                                textColorGhostHover: string;
                                textColorGhostPressed: string;
                                textColorGhostFocus: string;
                                textColorGhostDisabled: string;
                                border: string;
                                borderHover: string;
                                borderPressed: string;
                                borderFocus: string;
                                borderDisabled: string;
                                rippleColor: string;
                                colorPrimary: string;
                                colorHoverPrimary: string;
                                colorPressedPrimary: string;
                                colorFocusPrimary: string;
                                colorDisabledPrimary: string;
                                textColorPrimary: string;
                                textColorHoverPrimary: string;
                                textColorPressedPrimary: string;
                                textColorFocusPrimary: string;
                                textColorDisabledPrimary: string;
                                textColorTextPrimary: string;
                                textColorTextHoverPrimary: string;
                                textColorTextPressedPrimary: string;
                                textColorTextFocusPrimary: string;
                                textColorTextDisabledPrimary: string;
                                textColorGhostPrimary: string;
                                textColorGhostHoverPrimary: string;
                                textColorGhostPressedPrimary: string;
                                textColorGhostFocusPrimary: string;
                                textColorGhostDisabledPrimary: string;
                                borderPrimary: string;
                                borderHoverPrimary: string;
                                borderPressedPrimary: string;
                                borderFocusPrimary: string;
                                borderDisabledPrimary: string;
                                rippleColorPrimary: string;
                                colorInfo: string;
                                colorHoverInfo: string;
                                colorPressedInfo: string;
                                colorFocusInfo: string;
                                colorDisabledInfo: string;
                                textColorInfo: string;
                                textColorHoverInfo: string;
                                textColorPressedInfo: string;
                                textColorFocusInfo: string;
                                textColorDisabledInfo: string;
                                textColorTextInfo: string;
                                textColorTextHoverInfo: string;
                                textColorTextPressedInfo: string;
                                textColorTextFocusInfo: string;
                                textColorTextDisabledInfo: string;
                                textColorGhostInfo: string;
                                textColorGhostHoverInfo: string;
                                textColorGhostPressedInfo: string;
                                textColorGhostFocusInfo: string;
                                textColorGhostDisabledInfo: string;
                                borderInfo: string;
                                borderHoverInfo: string;
                                borderPressedInfo: string;
                                borderFocusInfo: string;
                                borderDisabledInfo: string;
                                rippleColorInfo: string;
                                colorSuccess: string;
                                colorHoverSuccess: string;
                                colorPressedSuccess: string;
                                colorFocusSuccess: string;
                                colorDisabledSuccess: string;
                                textColorSuccess: string;
                                textColorHoverSuccess: string;
                                textColorPressedSuccess: string;
                                textColorFocusSuccess: string;
                                textColorDisabledSuccess: string;
                                textColorTextSuccess: string;
                                textColorTextHoverSuccess: string;
                                textColorTextPressedSuccess: string;
                                textColorTextFocusSuccess: string;
                                textColorTextDisabledSuccess: string;
                                textColorGhostSuccess: string;
                                textColorGhostHoverSuccess: string;
                                textColorGhostPressedSuccess: string;
                                textColorGhostFocusSuccess: string;
                                textColorGhostDisabledSuccess: string;
                                borderSuccess: string;
                                borderHoverSuccess: string;
                                borderPressedSuccess: string;
                                borderFocusSuccess: string;
                                borderDisabledSuccess: string;
                                rippleColorSuccess: string;
                                colorWarning: string;
                                colorHoverWarning: string;
                                colorPressedWarning: string;
                                colorFocusWarning: string;
                                colorDisabledWarning: string;
                                textColorWarning: string;
                                textColorHoverWarning: string;
                                textColorPressedWarning: string;
                                textColorFocusWarning: string;
                                textColorDisabledWarning: string;
                                textColorTextWarning: string;
                                textColorTextHoverWarning: string;
                                textColorTextPressedWarning: string;
                                textColorTextFocusWarning: string;
                                textColorTextDisabledWarning: string;
                                textColorGhostWarning: string;
                                textColorGhostHoverWarning: string;
                                textColorGhostPressedWarning: string;
                                textColorGhostFocusWarning: string;
                                textColorGhostDisabledWarning: string;
                                borderWarning: string;
                                borderHoverWarning: string;
                                borderPressedWarning: string;
                                borderFocusWarning: string;
                                borderDisabledWarning: string;
                                rippleColorWarning: string;
                                colorError: string;
                                colorHoverError: string;
                                colorPressedError: string;
                                colorFocusError: string;
                                colorDisabledError: string;
                                textColorError: string;
                                textColorHoverError: string;
                                textColorPressedError: string;
                                textColorFocusError: string;
                                textColorDisabledError: string;
                                textColorTextError: string;
                                textColorTextHoverError: string;
                                textColorTextPressedError: string;
                                textColorTextFocusError: string;
                                textColorTextDisabledError: string;
                                textColorGhostError: string;
                                textColorGhostHoverError: string;
                                textColorGhostPressedError: string;
                                textColorGhostFocusError: string;
                                textColorGhostDisabledError: string;
                                borderError: string;
                                borderHoverError: string;
                                borderPressedError: string;
                                borderFocusError: string;
                                borderDisabledError: string;
                                rippleColorError: string;
                                waveOpacity: string;
                                fontWeight: string;
                                fontWeightStrong: string;
                                paddingTiny: string;
                                paddingSmall: string;
                                paddingMedium: string;
                                paddingLarge: string;
                                paddingRoundTiny: string;
                                paddingRoundSmall: string;
                                paddingRoundMedium: string;
                                paddingRoundLarge: string;
                                iconMarginTiny: string;
                                iconMarginSmall: string;
                                iconMarginMedium: string;
                                iconMarginLarge: string;
                                iconSizeTiny: string;
                                iconSizeSmall: string;
                                iconSizeMedium: string;
                                iconSizeLarge: string;
                                rippleDuration: string;
                            },
                            any
                        >;
                        /**
                         * fils status ['pending', 'uploading', 'finished', 'removed', 'error']
                         */
                        Progress: import('../../_mixins').Theme<
                            'Progress',
                            {
                                fontSize: string;
                                fontSizeCircle: string;
                                fontWeightCircle: string;
                                railColor: string;
                                railHeight: string;
                                iconSizeCircle: string;
                                iconSizeLine: string;
                                iconColor: string;
                                iconColorInfo: string;
                                iconColorSuccess: string;
                                iconColorWarning: string;
                                iconColorError: string;
                                textColorCircle: string;
                                textColorLineInner: string;
                                textColorLineOuter: string;
                                fillColor: string;
                                fillColorInfo: string;
                                fillColorSuccess: string;
                                fillColorWarning: string;
                                fillColorError: string;
                                lineBgProcessing: string;
                            },
                            any
                        >;
                    }
                >
            >
        >;
    },
    {
        openOpenFileDialog: () => void;
        submit: () => void;
        clear: () => void;
        mergedClsPrefix: globalThis.ComputedRef<string>;
        draggerInsideRef: {
            value: boolean;
        };
        inputElRef: globalThis.Ref<HTMLInputElement | null>;
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
                borderRadius: string;
                draggerColor: string;
                draggerBorder: string;
                draggerBorderHover: string;
                itemColorHover: string;
                itemColorHoverError: string;
                itemTextColor: string;
                itemTextColorError: string;
                itemTextColorSuccess: string;
                itemIconColor: string;
                itemDisabledOpacity: string;
                itemBorderImageCardError: string;
                itemBorderImageCard: string;
            };
            peers: {
                Button: import('../../_mixins').Theme<
                    'Button',
                    {
                        heightTiny: string;
                        heightSmall: string;
                        heightMedium: string;
                        heightLarge: string;
                        borderRadiusTiny: string;
                        borderRadiusSmall: string;
                        borderRadiusMedium: string;
                        borderRadiusLarge: string;
                        fontSizeTiny: string;
                        fontSizeSmall: string;
                        fontSizeMedium: string;
                        fontSizeLarge: string;
                        opacityDisabled: string;
                        colorOpacitySecondary: string;
                        /**
                         * fils status ['pending', 'uploading', 'finished', 'removed', 'error']
                         */
                        colorOpacitySecondaryHover: string;
                        colorOpacitySecondaryPressed: string;
                        colorSecondary: string;
                        colorSecondaryHover: string;
                        colorSecondaryPressed: string;
                        colorTertiary: string;
                        colorTertiaryHover: string;
                        colorTertiaryPressed: string;
                        colorQuaternary: string;
                        colorQuaternaryHover: string;
                        colorQuaternaryPressed: string;
                        color: string;
                        colorHover: string;
                        colorPressed: string;
                        colorFocus: string;
                        colorDisabled: string;
                        textColor: string;
                        textColorTertiary: string;
                        textColorHover: string;
                        textColorPressed: string;
                        textColorFocus: string;
                        textColorDisabled: string;
                        textColorText: string;
                        textColorTextHover: string;
                        textColorTextPressed: string;
                        textColorTextFocus: string;
                        textColorTextDisabled: string;
                        textColorGhost: string;
                        textColorGhostHover: string;
                        textColorGhostPressed: string;
                        textColorGhostFocus: string;
                        textColorGhostDisabled: string;
                        border: string;
                        borderHover: string;
                        borderPressed: string;
                        borderFocus: string;
                        borderDisabled: string;
                        rippleColor: string;
                        colorPrimary: string;
                        colorHoverPrimary: string;
                        colorPressedPrimary: string;
                        colorFocusPrimary: string;
                        colorDisabledPrimary: string;
                        textColorPrimary: string;
                        textColorHoverPrimary: string;
                        textColorPressedPrimary: string;
                        textColorFocusPrimary: string;
                        textColorDisabledPrimary: string;
                        textColorTextPrimary: string;
                        textColorTextHoverPrimary: string;
                        textColorTextPressedPrimary: string;
                        textColorTextFocusPrimary: string;
                        textColorTextDisabledPrimary: string;
                        textColorGhostPrimary: string;
                        textColorGhostHoverPrimary: string;
                        textColorGhostPressedPrimary: string;
                        textColorGhostFocusPrimary: string;
                        textColorGhostDisabledPrimary: string;
                        borderPrimary: string;
                        borderHoverPrimary: string;
                        borderPressedPrimary: string;
                        borderFocusPrimary: string;
                        borderDisabledPrimary: string;
                        rippleColorPrimary: string;
                        colorInfo: string;
                        colorHoverInfo: string;
                        colorPressedInfo: string;
                        colorFocusInfo: string;
                        colorDisabledInfo: string;
                        textColorInfo: string;
                        textColorHoverInfo: string;
                        textColorPressedInfo: string;
                        textColorFocusInfo: string;
                        textColorDisabledInfo: string;
                        textColorTextInfo: string;
                        textColorTextHoverInfo: string;
                        textColorTextPressedInfo: string;
                        textColorTextFocusInfo: string;
                        textColorTextDisabledInfo: string;
                        textColorGhostInfo: string;
                        textColorGhostHoverInfo: string;
                        textColorGhostPressedInfo: string;
                        textColorGhostFocusInfo: string;
                        textColorGhostDisabledInfo: string;
                        borderInfo: string;
                        borderHoverInfo: string;
                        borderPressedInfo: string;
                        borderFocusInfo: string;
                        borderDisabledInfo: string;
                        rippleColorInfo: string;
                        colorSuccess: string;
                        colorHoverSuccess: string;
                        colorPressedSuccess: string;
                        colorFocusSuccess: string;
                        colorDisabledSuccess: string;
                        textColorSuccess: string;
                        textColorHoverSuccess: string;
                        textColorPressedSuccess: string;
                        textColorFocusSuccess: string;
                        textColorDisabledSuccess: string;
                        textColorTextSuccess: string;
                        textColorTextHoverSuccess: string;
                        textColorTextPressedSuccess: string;
                        textColorTextFocusSuccess: string;
                        textColorTextDisabledSuccess: string;
                        textColorGhostSuccess: string;
                        textColorGhostHoverSuccess: string;
                        textColorGhostPressedSuccess: string;
                        textColorGhostFocusSuccess: string;
                        textColorGhostDisabledSuccess: string;
                        borderSuccess: string;
                        borderHoverSuccess: string;
                        borderPressedSuccess: string;
                        borderFocusSuccess: string;
                        borderDisabledSuccess: string;
                        rippleColorSuccess: string;
                        colorWarning: string;
                        colorHoverWarning: string;
                        colorPressedWarning: string;
                        colorFocusWarning: string;
                        colorDisabledWarning: string;
                        textColorWarning: string;
                        textColorHoverWarning: string;
                        textColorPressedWarning: string;
                        textColorFocusWarning: string;
                        textColorDisabledWarning: string;
                        textColorTextWarning: string;
                        textColorTextHoverWarning: string;
                        textColorTextPressedWarning: string;
                        textColorTextFocusWarning: string;
                        textColorTextDisabledWarning: string;
                        textColorGhostWarning: string;
                        textColorGhostHoverWarning: string;
                        textColorGhostPressedWarning: string;
                        textColorGhostFocusWarning: string;
                        textColorGhostDisabledWarning: string;
                        borderWarning: string;
                        borderHoverWarning: string;
                        borderPressedWarning: string;
                        borderFocusWarning: string;
                        borderDisabledWarning: string;
                        rippleColorWarning: string;
                        colorError: string;
                        colorHoverError: string;
                        colorPressedError: string;
                        colorFocusError: string;
                        colorDisabledError: string;
                        textColorError: string;
                        textColorHoverError: string;
                        textColorPressedError: string;
                        textColorFocusError: string;
                        textColorDisabledError: string;
                        textColorTextError: string;
                        textColorTextHoverError: string;
                        textColorTextPressedError: string;
                        textColorTextFocusError: string;
                        textColorTextDisabledError: string;
                        textColorGhostError: string;
                        textColorGhostHoverError: string;
                        textColorGhostPressedError: string;
                        textColorGhostFocusError: string;
                        textColorGhostDisabledError: string;
                        borderError: string;
                        borderHoverError: string;
                        borderPressedError: string;
                        borderFocusError: string;
                        borderDisabledError: string;
                        rippleColorError: string;
                        waveOpacity: string;
                        fontWeight: string;
                        fontWeightStrong: string;
                        paddingTiny: string;
                        paddingSmall: string;
                        paddingMedium: string;
                        paddingLarge: string;
                        paddingRoundTiny: string;
                        paddingRoundSmall: string;
                        paddingRoundMedium: string;
                        paddingRoundLarge: string;
                        iconMarginTiny: string;
                        iconMarginSmall: string;
                        iconMarginMedium: string;
                        iconMarginLarge: string;
                        iconSizeTiny: string;
                        iconSizeSmall: string;
                        iconSizeMedium: string;
                        iconSizeLarge: string;
                        rippleDuration: string;
                    },
                    any
                >;
                /**
                 * fils status ['pending', 'uploading', 'finished', 'removed', 'error']
                 */
                Progress: import('../../_mixins').Theme<
                    'Progress',
                    {
                        fontSize: string;
                        fontSizeCircle: string;
                        fontWeightCircle: string;
                        railColor: string;
                        railHeight: string;
                        iconSizeCircle: string;
                        iconSizeLine: string;
                        iconColor: string;
                        iconColorInfo: string;
                        iconColorSuccess: string;
                        iconColorWarning: string;
                        iconColorError: string;
                        textColorCircle: string;
                        textColorLineInner: string;
                        textColorLineOuter: string;
                        fillColor: string;
                        fillColorInfo: string;
                        fillColorSuccess: string;
                        fillColorWarning: string;
                        fillColorError: string;
                        lineBgProcessing: string;
                    },
                    any
                >;
            };
            peerOverrides: {
                Button?:
                    | {
                          peers?:
                              | {
                                    [x: string]: any;
                                }
                              | undefined;
                      }
                    | undefined;
                Progress?:
                    | {
                          peers?:
                              | {
                                    [x: string]: any;
                                }
                              | undefined;
                      }
                    | undefined;
            };
        }>;
        dragOver: globalThis.Ref<boolean>;
        mergedMultiple: globalThis.ComputedRef<boolean>;
        cssVars: globalThis.ComputedRef<any> | undefined;
        themeClass: globalThis.Ref<string> | undefined;
        onRender: (() => void) | undefined;
        handleFileInputChange: (e: Event) => void;
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
            readonly name: {
                readonly type: StringConstructor;
                readonly default: 'file';
            };
            readonly accept: StringConstructor;
            readonly action: StringConstructor;
            readonly customRequest: PropType<CustomRequest>;
            readonly directory: BooleanConstructor;
            readonly directoryDnd: {
                readonly type: BooleanConstructor;
                readonly default: undefined;
            };
            readonly method: {
                readonly type: StringConstructor;
                readonly default: 'POST';
            };
            readonly multiple: BooleanConstructor;
            readonly showFileList: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            readonly data: PropType<FuncOrRecordOrUndef>;
            readonly headers: PropType<FuncOrRecordOrUndef>;
            readonly withCredentials: BooleanConstructor;
            readonly responseType: {
                readonly type: PropType<XMLHttpRequestResponseType>;
                readonly default: '';
            };
            readonly disabled: {
                readonly type: PropType<boolean | undefined>;
                readonly default: undefined;
            };
            readonly onChange: PropType<OnChange>;
            readonly onRemove: PropType<OnRemove>;
            readonly onFinish: PropType<OnFinish>;
            readonly onError: PropType<OnError>;
            readonly onBeforeUpload: PropType<OnBeforeUpload>;
            readonly isErrorState: PropType<(xhr: XMLHttpRequest) => boolean>;
            /** currently not used */
            readonly onDownload: PropType<OnDownload>;
            readonly defaultUpload: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            readonly fileList: PropType<FileInfo[]>;
            readonly 'onUpdate:fileList': PropType<
                MaybeArray<OnUpdateFileList>
            >;
            readonly onUpdateFileList: PropType<MaybeArray<OnUpdateFileList>>;
            readonly fileListStyle: PropType<string | CSSProperties>;
            readonly defaultFileList: {
                readonly type: PropType<FileInfo[]>;
                readonly default: () => never[];
            };
            readonly showCancelButton: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            readonly showRemoveButton: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            readonly showDownloadButton: BooleanConstructor;
            readonly showRetryButton: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            readonly showPreviewButton: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            readonly listType: {
                readonly type: PropType<ListType>;
                readonly default: 'text';
            };
            readonly onPreview: PropType<OnPreview>;
            readonly shouldUseThumbnailUrl: {
                readonly type: PropType<ShouldUseThumbnailUrl>;
                readonly default: (file: Required<FileInfo>) => boolean;
            };
            readonly createThumbnailUrl: PropType<CreateThumbnailUrl>;
            readonly abstract: BooleanConstructor;
            readonly max: NumberConstructor;
            readonly showTrigger: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            readonly imageGroupProps: PropType<ImageGroupProps>;
            readonly inputProps: PropType<InputHTMLAttributes>;
            readonly triggerStyle: PropType<string | CSSProperties>;
            readonly renderIcon: PropType<RenderIcon>;
            readonly theme: PropType<
                import('../../_mixins').Theme<
                    'Upload',
                    {
                        fontSize: string;
                        lineHeight: string;
                        borderRadius: string;
                        draggerColor: string;
                        draggerBorder: string;
                        draggerBorderHover: string;
                        itemColorHover: string;
                        itemColorHoverError: string;
                        itemTextColor: string;
                        itemTextColorError: string;
                        itemTextColorSuccess: string;
                        itemIconColor: string;
                        itemDisabledOpacity: string;
                        itemBorderImageCardError: string;
                        itemBorderImageCard: string;
                    },
                    {
                        Button: import('../../_mixins').Theme<
                            'Button',
                            {
                                heightTiny: string;
                                heightSmall: string;
                                heightMedium: string;
                                heightLarge: string;
                                borderRadiusTiny: string;
                                borderRadiusSmall: string;
                                borderRadiusMedium: string;
                                borderRadiusLarge: string;
                                fontSizeTiny: string;
                                fontSizeSmall: string;
                                fontSizeMedium: string;
                                fontSizeLarge: string;
                                opacityDisabled: string;
                                colorOpacitySecondary: string;
                                /**
                                 * fils status ['pending', 'uploading', 'finished', 'removed', 'error']
                                 */
                                colorOpacitySecondaryHover: string;
                                colorOpacitySecondaryPressed: string;
                                colorSecondary: string;
                                colorSecondaryHover: string;
                                colorSecondaryPressed: string;
                                colorTertiary: string;
                                colorTertiaryHover: string;
                                colorTertiaryPressed: string;
                                colorQuaternary: string;
                                colorQuaternaryHover: string;
                                colorQuaternaryPressed: string;
                                color: string;
                                colorHover: string;
                                colorPressed: string;
                                colorFocus: string;
                                colorDisabled: string;
                                textColor: string;
                                textColorTertiary: string;
                                textColorHover: string;
                                textColorPressed: string;
                                textColorFocus: string;
                                textColorDisabled: string;
                                textColorText: string;
                                textColorTextHover: string;
                                textColorTextPressed: string;
                                textColorTextFocus: string;
                                textColorTextDisabled: string;
                                textColorGhost: string;
                                textColorGhostHover: string;
                                textColorGhostPressed: string;
                                textColorGhostFocus: string;
                                textColorGhostDisabled: string;
                                border: string;
                                borderHover: string;
                                borderPressed: string;
                                borderFocus: string;
                                borderDisabled: string;
                                rippleColor: string;
                                colorPrimary: string;
                                colorHoverPrimary: string;
                                colorPressedPrimary: string;
                                colorFocusPrimary: string;
                                colorDisabledPrimary: string;
                                textColorPrimary: string;
                                textColorHoverPrimary: string;
                                textColorPressedPrimary: string;
                                textColorFocusPrimary: string;
                                textColorDisabledPrimary: string;
                                textColorTextPrimary: string;
                                textColorTextHoverPrimary: string;
                                textColorTextPressedPrimary: string;
                                textColorTextFocusPrimary: string;
                                textColorTextDisabledPrimary: string;
                                textColorGhostPrimary: string;
                                textColorGhostHoverPrimary: string;
                                textColorGhostPressedPrimary: string;
                                textColorGhostFocusPrimary: string;
                                textColorGhostDisabledPrimary: string;
                                borderPrimary: string;
                                borderHoverPrimary: string;
                                borderPressedPrimary: string;
                                borderFocusPrimary: string;
                                borderDisabledPrimary: string;
                                rippleColorPrimary: string;
                                colorInfo: string;
                                colorHoverInfo: string;
                                colorPressedInfo: string;
                                colorFocusInfo: string;
                                colorDisabledInfo: string;
                                textColorInfo: string;
                                textColorHoverInfo: string;
                                textColorPressedInfo: string;
                                textColorFocusInfo: string;
                                textColorDisabledInfo: string;
                                textColorTextInfo: string;
                                textColorTextHoverInfo: string;
                                textColorTextPressedInfo: string;
                                textColorTextFocusInfo: string;
                                textColorTextDisabledInfo: string;
                                textColorGhostInfo: string;
                                textColorGhostHoverInfo: string;
                                textColorGhostPressedInfo: string;
                                textColorGhostFocusInfo: string;
                                textColorGhostDisabledInfo: string;
                                borderInfo: string;
                                borderHoverInfo: string;
                                borderPressedInfo: string;
                                borderFocusInfo: string;
                                borderDisabledInfo: string;
                                rippleColorInfo: string;
                                colorSuccess: string;
                                colorHoverSuccess: string;
                                colorPressedSuccess: string;
                                colorFocusSuccess: string;
                                colorDisabledSuccess: string;
                                textColorSuccess: string;
                                textColorHoverSuccess: string;
                                textColorPressedSuccess: string;
                                textColorFocusSuccess: string;
                                textColorDisabledSuccess: string;
                                textColorTextSuccess: string;
                                textColorTextHoverSuccess: string;
                                textColorTextPressedSuccess: string;
                                textColorTextFocusSuccess: string;
                                textColorTextDisabledSuccess: string;
                                textColorGhostSuccess: string;
                                textColorGhostHoverSuccess: string;
                                textColorGhostPressedSuccess: string;
                                textColorGhostFocusSuccess: string;
                                textColorGhostDisabledSuccess: string;
                                borderSuccess: string;
                                borderHoverSuccess: string;
                                borderPressedSuccess: string;
                                borderFocusSuccess: string;
                                borderDisabledSuccess: string;
                                rippleColorSuccess: string;
                                colorWarning: string;
                                colorHoverWarning: string;
                                colorPressedWarning: string;
                                colorFocusWarning: string;
                                colorDisabledWarning: string;
                                textColorWarning: string;
                                textColorHoverWarning: string;
                                textColorPressedWarning: string;
                                textColorFocusWarning: string;
                                textColorDisabledWarning: string;
                                textColorTextWarning: string;
                                textColorTextHoverWarning: string;
                                textColorTextPressedWarning: string;
                                textColorTextFocusWarning: string;
                                textColorTextDisabledWarning: string;
                                textColorGhostWarning: string;
                                textColorGhostHoverWarning: string;
                                textColorGhostPressedWarning: string;
                                textColorGhostFocusWarning: string;
                                textColorGhostDisabledWarning: string;
                                borderWarning: string;
                                borderHoverWarning: string;
                                borderPressedWarning: string;
                                borderFocusWarning: string;
                                borderDisabledWarning: string;
                                rippleColorWarning: string;
                                colorError: string;
                                colorHoverError: string;
                                colorPressedError: string;
                                colorFocusError: string;
                                colorDisabledError: string;
                                textColorError: string;
                                textColorHoverError: string;
                                textColorPressedError: string;
                                textColorFocusError: string;
                                textColorDisabledError: string;
                                textColorTextError: string;
                                textColorTextHoverError: string;
                                textColorTextPressedError: string;
                                textColorTextFocusError: string;
                                textColorTextDisabledError: string;
                                textColorGhostError: string;
                                textColorGhostHoverError: string;
                                textColorGhostPressedError: string;
                                textColorGhostFocusError: string;
                                textColorGhostDisabledError: string;
                                borderError: string;
                                borderHoverError: string;
                                borderPressedError: string;
                                borderFocusError: string;
                                borderDisabledError: string;
                                rippleColorError: string;
                                waveOpacity: string;
                                fontWeight: string;
                                fontWeightStrong: string;
                                paddingTiny: string;
                                paddingSmall: string;
                                paddingMedium: string;
                                paddingLarge: string;
                                paddingRoundTiny: string;
                                paddingRoundSmall: string;
                                paddingRoundMedium: string;
                                paddingRoundLarge: string;
                                iconMarginTiny: string;
                                iconMarginSmall: string;
                                iconMarginMedium: string;
                                iconMarginLarge: string;
                                iconSizeTiny: string;
                                iconSizeSmall: string;
                                iconSizeMedium: string;
                                iconSizeLarge: string;
                                rippleDuration: string;
                            },
                            any
                        >;
                        /**
                         * fils status ['pending', 'uploading', 'finished', 'removed', 'error']
                         */
                        Progress: import('../../_mixins').Theme<
                            'Progress',
                            {
                                fontSize: string;
                                fontSizeCircle: string;
                                fontWeightCircle: string;
                                railColor: string;
                                railHeight: string;
                                iconSizeCircle: string;
                                iconSizeLine: string;
                                iconColor: string;
                                iconColorInfo: string;
                                iconColorSuccess: string;
                                iconColorWarning: string;
                                iconColorError: string;
                                textColorCircle: string;
                                textColorLineInner: string;
                                textColorLineOuter: string;
                                fillColor: string;
                                fillColorInfo: string;
                                fillColorSuccess: string;
                                fillColorWarning: string;
                                fillColorError: string;
                                lineBgProcessing: string;
                            },
                            any
                        >;
                    }
                >
            >;
            readonly themeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Upload',
                        {
                            fontSize: string;
                            lineHeight: string;
                            borderRadius: string;
                            draggerColor: string;
                            draggerBorder: string;
                            draggerBorderHover: string;
                            itemColorHover: string;
                            itemColorHoverError: string;
                            itemTextColor: string;
                            itemTextColorError: string;
                            itemTextColorSuccess: string;
                            itemIconColor: string;
                            itemDisabledOpacity: string;
                            itemBorderImageCardError: string;
                            itemBorderImageCard: string;
                        },
                        {
                            Button: import('../../_mixins').Theme<
                                'Button',
                                {
                                    heightTiny: string;
                                    heightSmall: string;
                                    heightMedium: string;
                                    heightLarge: string;
                                    borderRadiusTiny: string;
                                    borderRadiusSmall: string;
                                    borderRadiusMedium: string;
                                    borderRadiusLarge: string;
                                    fontSizeTiny: string;
                                    fontSizeSmall: string;
                                    fontSizeMedium: string;
                                    fontSizeLarge: string;
                                    opacityDisabled: string;
                                    colorOpacitySecondary: string;
                                    /**
                                     * fils status ['pending', 'uploading', 'finished', 'removed', 'error']
                                     */
                                    colorOpacitySecondaryHover: string;
                                    colorOpacitySecondaryPressed: string;
                                    colorSecondary: string;
                                    colorSecondaryHover: string;
                                    colorSecondaryPressed: string;
                                    colorTertiary: string;
                                    colorTertiaryHover: string;
                                    colorTertiaryPressed: string;
                                    colorQuaternary: string;
                                    colorQuaternaryHover: string;
                                    colorQuaternaryPressed: string;
                                    color: string;
                                    colorHover: string;
                                    colorPressed: string;
                                    colorFocus: string;
                                    colorDisabled: string;
                                    textColor: string;
                                    textColorTertiary: string;
                                    textColorHover: string;
                                    textColorPressed: string;
                                    textColorFocus: string;
                                    textColorDisabled: string;
                                    textColorText: string;
                                    textColorTextHover: string;
                                    textColorTextPressed: string;
                                    textColorTextFocus: string;
                                    textColorTextDisabled: string;
                                    textColorGhost: string;
                                    textColorGhostHover: string;
                                    textColorGhostPressed: string;
                                    textColorGhostFocus: string;
                                    textColorGhostDisabled: string;
                                    border: string;
                                    borderHover: string;
                                    borderPressed: string;
                                    borderFocus: string;
                                    borderDisabled: string;
                                    rippleColor: string;
                                    colorPrimary: string;
                                    colorHoverPrimary: string;
                                    colorPressedPrimary: string;
                                    colorFocusPrimary: string;
                                    colorDisabledPrimary: string;
                                    textColorPrimary: string;
                                    textColorHoverPrimary: string;
                                    textColorPressedPrimary: string;
                                    textColorFocusPrimary: string;
                                    textColorDisabledPrimary: string;
                                    textColorTextPrimary: string;
                                    textColorTextHoverPrimary: string;
                                    textColorTextPressedPrimary: string;
                                    textColorTextFocusPrimary: string;
                                    textColorTextDisabledPrimary: string;
                                    textColorGhostPrimary: string;
                                    textColorGhostHoverPrimary: string;
                                    textColorGhostPressedPrimary: string;
                                    textColorGhostFocusPrimary: string;
                                    textColorGhostDisabledPrimary: string;
                                    borderPrimary: string;
                                    borderHoverPrimary: string;
                                    borderPressedPrimary: string;
                                    borderFocusPrimary: string;
                                    borderDisabledPrimary: string;
                                    rippleColorPrimary: string;
                                    colorInfo: string;
                                    colorHoverInfo: string;
                                    colorPressedInfo: string;
                                    colorFocusInfo: string;
                                    colorDisabledInfo: string;
                                    textColorInfo: string;
                                    textColorHoverInfo: string;
                                    textColorPressedInfo: string;
                                    textColorFocusInfo: string;
                                    textColorDisabledInfo: string;
                                    textColorTextInfo: string;
                                    textColorTextHoverInfo: string;
                                    textColorTextPressedInfo: string;
                                    textColorTextFocusInfo: string;
                                    textColorTextDisabledInfo: string;
                                    textColorGhostInfo: string;
                                    textColorGhostHoverInfo: string;
                                    textColorGhostPressedInfo: string;
                                    textColorGhostFocusInfo: string;
                                    textColorGhostDisabledInfo: string;
                                    borderInfo: string;
                                    borderHoverInfo: string;
                                    borderPressedInfo: string;
                                    borderFocusInfo: string;
                                    borderDisabledInfo: string;
                                    rippleColorInfo: string;
                                    colorSuccess: string;
                                    colorHoverSuccess: string;
                                    colorPressedSuccess: string;
                                    colorFocusSuccess: string;
                                    colorDisabledSuccess: string;
                                    textColorSuccess: string;
                                    textColorHoverSuccess: string;
                                    textColorPressedSuccess: string;
                                    textColorFocusSuccess: string;
                                    textColorDisabledSuccess: string;
                                    textColorTextSuccess: string;
                                    textColorTextHoverSuccess: string;
                                    textColorTextPressedSuccess: string;
                                    textColorTextFocusSuccess: string;
                                    textColorTextDisabledSuccess: string;
                                    textColorGhostSuccess: string;
                                    textColorGhostHoverSuccess: string;
                                    textColorGhostPressedSuccess: string;
                                    textColorGhostFocusSuccess: string;
                                    textColorGhostDisabledSuccess: string;
                                    borderSuccess: string;
                                    borderHoverSuccess: string;
                                    borderPressedSuccess: string;
                                    borderFocusSuccess: string;
                                    borderDisabledSuccess: string;
                                    rippleColorSuccess: string;
                                    colorWarning: string;
                                    colorHoverWarning: string;
                                    colorPressedWarning: string;
                                    colorFocusWarning: string;
                                    colorDisabledWarning: string;
                                    textColorWarning: string;
                                    textColorHoverWarning: string;
                                    textColorPressedWarning: string;
                                    textColorFocusWarning: string;
                                    textColorDisabledWarning: string;
                                    textColorTextWarning: string;
                                    textColorTextHoverWarning: string;
                                    textColorTextPressedWarning: string;
                                    textColorTextFocusWarning: string;
                                    textColorTextDisabledWarning: string;
                                    textColorGhostWarning: string;
                                    textColorGhostHoverWarning: string;
                                    textColorGhostPressedWarning: string;
                                    textColorGhostFocusWarning: string;
                                    textColorGhostDisabledWarning: string;
                                    borderWarning: string;
                                    borderHoverWarning: string;
                                    borderPressedWarning: string;
                                    borderFocusWarning: string;
                                    borderDisabledWarning: string;
                                    rippleColorWarning: string;
                                    colorError: string;
                                    colorHoverError: string;
                                    colorPressedError: string;
                                    colorFocusError: string;
                                    colorDisabledError: string;
                                    textColorError: string;
                                    textColorHoverError: string;
                                    textColorPressedError: string;
                                    textColorFocusError: string;
                                    textColorDisabledError: string;
                                    textColorTextError: string;
                                    textColorTextHoverError: string;
                                    textColorTextPressedError: string;
                                    textColorTextFocusError: string;
                                    textColorTextDisabledError: string;
                                    textColorGhostError: string;
                                    textColorGhostHoverError: string;
                                    textColorGhostPressedError: string;
                                    textColorGhostFocusError: string;
                                    textColorGhostDisabledError: string;
                                    borderError: string;
                                    borderHoverError: string;
                                    borderPressedError: string;
                                    borderFocusError: string;
                                    borderDisabledError: string;
                                    rippleColorError: string;
                                    waveOpacity: string;
                                    fontWeight: string;
                                    fontWeightStrong: string;
                                    paddingTiny: string;
                                    paddingSmall: string;
                                    paddingMedium: string;
                                    paddingLarge: string;
                                    paddingRoundTiny: string;
                                    paddingRoundSmall: string;
                                    paddingRoundMedium: string;
                                    paddingRoundLarge: string;
                                    iconMarginTiny: string;
                                    iconMarginSmall: string;
                                    iconMarginMedium: string;
                                    iconMarginLarge: string;
                                    iconSizeTiny: string;
                                    iconSizeSmall: string;
                                    iconSizeMedium: string;
                                    iconSizeLarge: string;
                                    rippleDuration: string;
                                },
                                any
                            >;
                            /**
                             * fils status ['pending', 'uploading', 'finished', 'removed', 'error']
                             */
                            Progress: import('../../_mixins').Theme<
                                'Progress',
                                {
                                    fontSize: string;
                                    fontSizeCircle: string;
                                    fontWeightCircle: string;
                                    railColor: string;
                                    railHeight: string;
                                    iconSizeCircle: string;
                                    iconSizeLine: string;
                                    iconColor: string;
                                    iconColorInfo: string;
                                    iconColorSuccess: string;
                                    iconColorWarning: string;
                                    iconColorError: string;
                                    textColorCircle: string;
                                    textColorLineInner: string;
                                    textColorLineOuter: string;
                                    fillColor: string;
                                    fillColorInfo: string;
                                    fillColorSuccess: string;
                                    fillColorWarning: string;
                                    fillColorError: string;
                                    lineBgProcessing: string;
                                },
                                any
                            >;
                        }
                    >
                >
            >;
            readonly builtinThemeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Upload',
                        {
                            fontSize: string;
                            lineHeight: string;
                            borderRadius: string;
                            draggerColor: string;
                            draggerBorder: string;
                            draggerBorderHover: string;
                            itemColorHover: string;
                            itemColorHoverError: string;
                            itemTextColor: string;
                            itemTextColorError: string;
                            itemTextColorSuccess: string;
                            itemIconColor: string;
                            itemDisabledOpacity: string;
                            itemBorderImageCardError: string;
                            itemBorderImageCard: string;
                        },
                        {
                            Button: import('../../_mixins').Theme<
                                'Button',
                                {
                                    heightTiny: string;
                                    heightSmall: string;
                                    heightMedium: string;
                                    heightLarge: string;
                                    borderRadiusTiny: string;
                                    borderRadiusSmall: string;
                                    borderRadiusMedium: string;
                                    borderRadiusLarge: string;
                                    fontSizeTiny: string;
                                    fontSizeSmall: string;
                                    fontSizeMedium: string;
                                    fontSizeLarge: string;
                                    opacityDisabled: string;
                                    colorOpacitySecondary: string;
                                    /**
                                     * fils status ['pending', 'uploading', 'finished', 'removed', 'error']
                                     */
                                    colorOpacitySecondaryHover: string;
                                    colorOpacitySecondaryPressed: string;
                                    colorSecondary: string;
                                    colorSecondaryHover: string;
                                    colorSecondaryPressed: string;
                                    colorTertiary: string;
                                    colorTertiaryHover: string;
                                    colorTertiaryPressed: string;
                                    colorQuaternary: string;
                                    colorQuaternaryHover: string;
                                    colorQuaternaryPressed: string;
                                    color: string;
                                    colorHover: string;
                                    colorPressed: string;
                                    colorFocus: string;
                                    colorDisabled: string;
                                    textColor: string;
                                    textColorTertiary: string;
                                    textColorHover: string;
                                    textColorPressed: string;
                                    textColorFocus: string;
                                    textColorDisabled: string;
                                    textColorText: string;
                                    textColorTextHover: string;
                                    textColorTextPressed: string;
                                    textColorTextFocus: string;
                                    textColorTextDisabled: string;
                                    textColorGhost: string;
                                    textColorGhostHover: string;
                                    textColorGhostPressed: string;
                                    textColorGhostFocus: string;
                                    textColorGhostDisabled: string;
                                    border: string;
                                    borderHover: string;
                                    borderPressed: string;
                                    borderFocus: string;
                                    borderDisabled: string;
                                    rippleColor: string;
                                    colorPrimary: string;
                                    colorHoverPrimary: string;
                                    colorPressedPrimary: string;
                                    colorFocusPrimary: string;
                                    colorDisabledPrimary: string;
                                    textColorPrimary: string;
                                    textColorHoverPrimary: string;
                                    textColorPressedPrimary: string;
                                    textColorFocusPrimary: string;
                                    textColorDisabledPrimary: string;
                                    textColorTextPrimary: string;
                                    textColorTextHoverPrimary: string;
                                    textColorTextPressedPrimary: string;
                                    textColorTextFocusPrimary: string;
                                    textColorTextDisabledPrimary: string;
                                    textColorGhostPrimary: string;
                                    textColorGhostHoverPrimary: string;
                                    textColorGhostPressedPrimary: string;
                                    textColorGhostFocusPrimary: string;
                                    textColorGhostDisabledPrimary: string;
                                    borderPrimary: string;
                                    borderHoverPrimary: string;
                                    borderPressedPrimary: string;
                                    borderFocusPrimary: string;
                                    borderDisabledPrimary: string;
                                    rippleColorPrimary: string;
                                    colorInfo: string;
                                    colorHoverInfo: string;
                                    colorPressedInfo: string;
                                    colorFocusInfo: string;
                                    colorDisabledInfo: string;
                                    textColorInfo: string;
                                    textColorHoverInfo: string;
                                    textColorPressedInfo: string;
                                    textColorFocusInfo: string;
                                    textColorDisabledInfo: string;
                                    textColorTextInfo: string;
                                    textColorTextHoverInfo: string;
                                    textColorTextPressedInfo: string;
                                    textColorTextFocusInfo: string;
                                    textColorTextDisabledInfo: string;
                                    textColorGhostInfo: string;
                                    textColorGhostHoverInfo: string;
                                    textColorGhostPressedInfo: string;
                                    textColorGhostFocusInfo: string;
                                    textColorGhostDisabledInfo: string;
                                    borderInfo: string;
                                    borderHoverInfo: string;
                                    borderPressedInfo: string;
                                    borderFocusInfo: string;
                                    borderDisabledInfo: string;
                                    rippleColorInfo: string;
                                    colorSuccess: string;
                                    colorHoverSuccess: string;
                                    colorPressedSuccess: string;
                                    colorFocusSuccess: string;
                                    colorDisabledSuccess: string;
                                    textColorSuccess: string;
                                    textColorHoverSuccess: string;
                                    textColorPressedSuccess: string;
                                    textColorFocusSuccess: string;
                                    textColorDisabledSuccess: string;
                                    textColorTextSuccess: string;
                                    textColorTextHoverSuccess: string;
                                    textColorTextPressedSuccess: string;
                                    textColorTextFocusSuccess: string;
                                    textColorTextDisabledSuccess: string;
                                    textColorGhostSuccess: string;
                                    textColorGhostHoverSuccess: string;
                                    textColorGhostPressedSuccess: string;
                                    textColorGhostFocusSuccess: string;
                                    textColorGhostDisabledSuccess: string;
                                    borderSuccess: string;
                                    borderHoverSuccess: string;
                                    borderPressedSuccess: string;
                                    borderFocusSuccess: string;
                                    borderDisabledSuccess: string;
                                    rippleColorSuccess: string;
                                    colorWarning: string;
                                    colorHoverWarning: string;
                                    colorPressedWarning: string;
                                    colorFocusWarning: string;
                                    colorDisabledWarning: string;
                                    textColorWarning: string;
                                    textColorHoverWarning: string;
                                    textColorPressedWarning: string;
                                    textColorFocusWarning: string;
                                    textColorDisabledWarning: string;
                                    textColorTextWarning: string;
                                    textColorTextHoverWarning: string;
                                    textColorTextPressedWarning: string;
                                    textColorTextFocusWarning: string;
                                    textColorTextDisabledWarning: string;
                                    textColorGhostWarning: string;
                                    textColorGhostHoverWarning: string;
                                    textColorGhostPressedWarning: string;
                                    textColorGhostFocusWarning: string;
                                    textColorGhostDisabledWarning: string;
                                    borderWarning: string;
                                    borderHoverWarning: string;
                                    borderPressedWarning: string;
                                    borderFocusWarning: string;
                                    borderDisabledWarning: string;
                                    rippleColorWarning: string;
                                    colorError: string;
                                    colorHoverError: string;
                                    colorPressedError: string;
                                    colorFocusError: string;
                                    colorDisabledError: string;
                                    textColorError: string;
                                    textColorHoverError: string;
                                    textColorPressedError: string;
                                    textColorFocusError: string;
                                    textColorDisabledError: string;
                                    textColorTextError: string;
                                    textColorTextHoverError: string;
                                    textColorTextPressedError: string;
                                    textColorTextFocusError: string;
                                    textColorTextDisabledError: string;
                                    textColorGhostError: string;
                                    textColorGhostHoverError: string;
                                    textColorGhostPressedError: string;
                                    textColorGhostFocusError: string;
                                    textColorGhostDisabledError: string;
                                    borderError: string;
                                    borderHoverError: string;
                                    borderPressedError: string;
                                    borderFocusError: string;
                                    borderDisabledError: string;
                                    rippleColorError: string;
                                    waveOpacity: string;
                                    fontWeight: string;
                                    fontWeightStrong: string;
                                    paddingTiny: string;
                                    paddingSmall: string;
                                    paddingMedium: string;
                                    paddingLarge: string;
                                    paddingRoundTiny: string;
                                    paddingRoundSmall: string;
                                    paddingRoundMedium: string;
                                    paddingRoundLarge: string;
                                    iconMarginTiny: string;
                                    iconMarginSmall: string;
                                    iconMarginMedium: string;
                                    iconMarginLarge: string;
                                    iconSizeTiny: string;
                                    iconSizeSmall: string;
                                    iconSizeMedium: string;
                                    iconSizeLarge: string;
                                    rippleDuration: string;
                                },
                                any
                            >;
                            /**
                             * fils status ['pending', 'uploading', 'finished', 'removed', 'error']
                             */
                            Progress: import('../../_mixins').Theme<
                                'Progress',
                                {
                                    fontSize: string;
                                    fontSizeCircle: string;
                                    fontWeightCircle: string;
                                    railColor: string;
                                    railHeight: string;
                                    iconSizeCircle: string;
                                    iconSizeLine: string;
                                    iconColor: string;
                                    iconColorInfo: string;
                                    iconColorSuccess: string;
                                    iconColorWarning: string;
                                    iconColorError: string;
                                    textColorCircle: string;
                                    textColorLineInner: string;
                                    textColorLineOuter: string;
                                    fillColor: string;
                                    fillColorInfo: string;
                                    fillColorSuccess: string;
                                    fillColorWarning: string;
                                    fillColorError: string;
                                    lineBgProcessing: string;
                                },
                                any
                            >;
                        }
                    >
                >
            >;
        }>
    >,
    {
        readonly method: string;
        readonly abstract: boolean;
        readonly name: string;
        readonly multiple: boolean;
        readonly disabled: boolean | undefined;
        readonly directory: boolean;
        readonly directoryDnd: boolean;
        readonly showFileList: boolean;
        readonly withCredentials: boolean;
        readonly responseType: XMLHttpRequestResponseType;
        readonly defaultUpload: boolean;
        readonly defaultFileList: FileInfo[];
        readonly showCancelButton: boolean;
        readonly showRemoveButton: boolean;
        readonly showDownloadButton: boolean;
        readonly showRetryButton: boolean;
        readonly showPreviewButton: boolean;
        readonly listType: ListType;
        readonly shouldUseThumbnailUrl: ShouldUseThumbnailUrl;
        readonly showTrigger: boolean;
    },
    {}
>;
export default _default;
