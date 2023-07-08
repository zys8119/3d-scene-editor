import { ImgHTMLAttributes, Ref } from 'vue';
export interface MoveStrategy {
    moveVerticalDirection: 'verticalTop' | 'verticalBottom';
    moveHorizontalDirection: 'horizontalLeft' | 'horizontalRight';
    deltaHorizontal: number;
    deltaVertical: number;
}
export declare const imagePreviewSharedProps: {
    showToolbar: {
        type: BooleanConstructor;
        default: boolean;
    };
    showToolbarTooltip: BooleanConstructor;
    theme: globalThis.PropType<
        import('../../_mixins').Theme<
            'Image',
            {
                toolbarIconColor: string;
                toolbarColor: string;
                toolbarBoxShadow: string;
                toolbarBorderRadius: string;
            },
            {
                Tooltip: import('../../_mixins').Theme<
                    'Tooltip',
                    {
                        borderRadius: string;
                        boxShadow: string;
                        color: string;
                        textColor: string;
                        padding: string;
                    },
                    {
                        Popover: import('../../_mixins').Theme<
                            'Popover',
                            {
                                fontSize: string;
                                borderRadius: string;
                                color: string;
                                dividerColor: string;
                                textColor: string;
                                boxShadow: string;
                                space: string;
                                spaceArrow: string;
                                arrowOffset: string;
                                arrowOffsetVertical: string;
                                arrowHeight: string;
                                padding: string;
                            },
                            any
                        >;
                    }
                >;
            }
        >
    >;
    themeOverrides: globalThis.PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Image',
                {
                    toolbarIconColor: string;
                    toolbarColor: string;
                    toolbarBoxShadow: string;
                    toolbarBorderRadius: string;
                },
                {
                    Tooltip: import('../../_mixins').Theme<
                        'Tooltip',
                        {
                            borderRadius: string;
                            boxShadow: string;
                            color: string;
                            textColor: string;
                            padding: string;
                        },
                        {
                            Popover: import('../../_mixins').Theme<
                                'Popover',
                                {
                                    fontSize: string;
                                    borderRadius: string;
                                    color: string;
                                    dividerColor: string;
                                    textColor: string;
                                    boxShadow: string;
                                    space: string;
                                    spaceArrow: string;
                                    arrowOffset: string;
                                    arrowOffsetVertical: string;
                                    arrowHeight: string;
                                    padding: string;
                                },
                                any
                            >;
                        }
                    >;
                }
            >
        >
    >;
    builtinThemeOverrides: globalThis.PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Image',
                {
                    toolbarIconColor: string;
                    toolbarColor: string;
                    toolbarBoxShadow: string;
                    toolbarBorderRadius: string;
                },
                {
                    Tooltip: import('../../_mixins').Theme<
                        'Tooltip',
                        {
                            borderRadius: string;
                            boxShadow: string;
                            color: string;
                            textColor: string;
                            padding: string;
                        },
                        {
                            Popover: import('../../_mixins').Theme<
                                'Popover',
                                {
                                    fontSize: string;
                                    borderRadius: string;
                                    color: string;
                                    dividerColor: string;
                                    textColor: string;
                                    boxShadow: string;
                                    space: string;
                                    spaceArrow: string;
                                    arrowOffset: string;
                                    arrowOffsetVertical: string;
                                    arrowHeight: string;
                                    padding: string;
                                },
                                any
                            >;
                        }
                    >;
                }
            >
        >
    >;
};
export interface ImageContext {
    previewedImgPropsRef: Ref<ImgHTMLAttributes>;
}
export declare const imageContextKey: globalThis.InjectionKey<ImageContext>;
