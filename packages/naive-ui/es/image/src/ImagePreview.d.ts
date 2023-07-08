import { PropType, VNode } from 'vue';
export interface ImagePreviewInst {
    setThumbnailEl: (e: HTMLImageElement | null) => void;
    setPreviewSrc: (src?: string) => void;
    toggleShow: () => void;
}
declare const _default: import('vue').DefineComponent<
    {
        onNext: PropType<() => void>;
        onPrev: PropType<() => void>;
        clsPrefix: {
            type: StringConstructor;
            required: true;
        };
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
    },
    {
        setThumbnailEl: (e: HTMLImageElement | null) => void;
        setPreviewSrc: (src?: string | undefined) => void;
        toggleShow: () => void;
        previewRef: globalThis.Ref<HTMLImageElement | null>;
        previewWrapperRef: globalThis.Ref<HTMLDivElement | null>;
        previewSrc: globalThis.Ref<string | undefined>;
        show: globalThis.Ref<boolean>;
        appear: Readonly<globalThis.Ref<boolean>>;
        displayed: globalThis.Ref<boolean>;
        previewedImgProps:
            | globalThis.Ref<import('vue').ImgHTMLAttributes>
            | undefined;
        handleWheel(e: WheelEvent): void;
        handlePreviewMousedown: (e: MouseEvent) => void;
        handlePreviewDblclick: (e: MouseEvent) => void;
        syncTransformOrigin: () => void;
        handleAfterLeave: () => void;
        handleDragStart: (e: DragEvent) => void;
        zoomIn: () => void;
        zoomOut: () => void;
        rotateCounterclockwise: () => void;
        rotateClockwise: () => void;
        handleSwitchPrev: () => void;
        handleSwitchNext: () => void;
        withTooltip: (
            node: VNode,
            tooltipKey:
                | 'tipPrevious'
                | 'tipNext'
                | 'tipCounterclockwise'
                | 'tipClockwise'
                | 'tipZoomOut'
                | 'tipZoomIn'
                | 'tipClose'
                | 'tipOriginalSize'
        ) => VNode;
        resizeToOrignalImageSize: () => void;
        cssVars:
            | globalThis.ComputedRef<{
                  '--n-bezier': string;
                  '--n-toolbar-icon-color': string;
                  '--n-toolbar-color': string;
                  '--n-toolbar-border-radius': string;
                  '--n-toolbar-box-shadow': string;
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
            onNext: PropType<() => void>;
            onPrev: PropType<() => void>;
            clsPrefix: {
                type: StringConstructor;
                required: true;
            };
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
        }>
    >,
    {
        showToolbar: boolean;
        showToolbarTooltip: boolean;
    },
    {}
>;
export default _default;
