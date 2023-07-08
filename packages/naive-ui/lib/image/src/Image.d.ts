import { PropType, ImgHTMLAttributes } from 'vue';
import type { ExtractPublicPropTypes } from '../../_utils';
import type { IntersectionObserverOptions } from './utils';
export interface ImageInst {
    click: () => void;
}
export declare const imageProps: {
    showToolbar: {
        type: BooleanConstructor;
        default: boolean;
    };
    showToolbarTooltip: BooleanConstructor;
    theme: PropType<
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
    themeOverrides: PropType<
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
    builtinThemeOverrides: PropType<
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
    alt: StringConstructor;
    height: PropType<string | number>;
    imgProps: PropType<ImgHTMLAttributes>;
    previewedImgProps: PropType<ImgHTMLAttributes>;
    lazy: BooleanConstructor;
    intersectionObserverOptions: PropType<IntersectionObserverOptions>;
    objectFit: {
        type: PropType<'fill' | 'none' | 'contain' | 'cover' | 'scale-down'>;
        default: string;
    };
    previewSrc: StringConstructor;
    fallbackSrc: StringConstructor;
    width: PropType<string | number>;
    src: StringConstructor;
    previewDisabled: BooleanConstructor;
    loadDescription: StringConstructor;
    onError: PropType<(e: Event) => void>;
    onLoad: PropType<(e: Event) => void>;
};
export type ImageProps = ExtractPublicPropTypes<typeof imageProps>;
declare const _default: import('vue').DefineComponent<
    {
        showToolbar: {
            type: BooleanConstructor;
            default: boolean;
        };
        showToolbarTooltip: BooleanConstructor;
        theme: PropType<
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
        themeOverrides: PropType<
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
        builtinThemeOverrides: PropType<
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
        alt: StringConstructor;
        height: PropType<string | number>;
        imgProps: PropType<ImgHTMLAttributes>;
        previewedImgProps: PropType<ImgHTMLAttributes>;
        lazy: BooleanConstructor;
        intersectionObserverOptions: PropType<IntersectionObserverOptions>;
        objectFit: {
            type: PropType<
                'fill' | 'none' | 'contain' | 'cover' | 'scale-down'
            >;
            default: string;
        };
        previewSrc: StringConstructor;
        fallbackSrc: StringConstructor;
        width: PropType<string | number>;
        src: StringConstructor;
        previewDisabled: BooleanConstructor;
        loadDescription: StringConstructor;
        onError: PropType<(e: Event) => void>;
        onLoad: PropType<(e: Event) => void>;
    },
    {
        click: () => void;
        mergedClsPrefix:
            | globalThis.Ref<string>
            | globalThis.ComputedRef<string>;
        groupId: string | undefined;
        previewInstRef: globalThis.Ref<{
            setThumbnailEl: (e: HTMLImageElement | null) => void;
            setPreviewSrc: (src?: string | undefined) => void;
            toggleShow: () => void;
        } | null>;
        imageRef: globalThis.Ref<HTMLImageElement | null>;
        showError: globalThis.Ref<boolean>;
        shouldStartLoading: globalThis.Ref<boolean>;
        loaded: globalThis.Ref<boolean>;
        mergedOnClick: (e: MouseEvent) => void;
        mergedOnError: (e: Event) => void;
        mergedOnLoad: (e: Event) => void;
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
            showToolbar: {
                type: BooleanConstructor;
                default: boolean;
            };
            showToolbarTooltip: BooleanConstructor;
            theme: PropType<
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
            themeOverrides: PropType<
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
            builtinThemeOverrides: PropType<
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
            alt: StringConstructor;
            height: PropType<string | number>;
            imgProps: PropType<ImgHTMLAttributes>;
            previewedImgProps: PropType<ImgHTMLAttributes>;
            lazy: BooleanConstructor;
            intersectionObserverOptions: PropType<IntersectionObserverOptions>;
            objectFit: {
                type: PropType<
                    'fill' | 'none' | 'contain' | 'cover' | 'scale-down'
                >;
                default: string;
            };
            previewSrc: StringConstructor;
            fallbackSrc: StringConstructor;
            width: PropType<string | number>;
            src: StringConstructor;
            previewDisabled: BooleanConstructor;
            loadDescription: StringConstructor;
            onError: PropType<(e: Event) => void>;
            onLoad: PropType<(e: Event) => void>;
        }>
    >,
    {
        lazy: boolean;
        objectFit: 'fill' | 'none' | 'contain' | 'cover' | 'scale-down';
        showToolbar: boolean;
        showToolbarTooltip: boolean;
        previewDisabled: boolean;
    },
    {}
>;
export default _default;
