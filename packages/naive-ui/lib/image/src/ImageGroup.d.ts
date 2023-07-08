import { Ref } from 'vue';
import { ExtractPublicPropTypes } from '../../_utils';
import type { ImagePreviewInst } from './ImagePreview';
export declare const imageGroupInjectionKey: globalThis.InjectionKey<
    ImagePreviewInst & {
        groupId: string;
        mergedClsPrefixRef: Ref<string>;
    }
>;
export declare const imageGroupProps: {
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
export type ImageGroupProps = ExtractPublicPropTypes<typeof imageGroupProps>;
declare const _default: import('vue').DefineComponent<
    {
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
    },
    {
        mergedClsPrefix: globalThis.ComputedRef<string>;
        previewInstRef: Ref<{
            setThumbnailEl: (e: HTMLImageElement | null) => void;
            setPreviewSrc: (src?: string | undefined) => void;
            toggleShow: () => void;
        } | null>;
        next: () => void;
        prev: () => void;
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
        }>
    >,
    {
        showToolbar: boolean;
        showToolbarTooltip: boolean;
    },
    {}
>;
export default _default;
