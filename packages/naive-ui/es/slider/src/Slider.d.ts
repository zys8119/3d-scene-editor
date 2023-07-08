import { PropType, CSSProperties } from 'vue';
import { FollowerPlacement } from 'vueuc';
import { MaybeArray, ExtractPublicPropTypes } from '../../_utils';
export interface ClosestMark {
    value: number;
    distance: number;
    index: number;
}
export declare const sliderProps: {
    readonly to: {
        type: PropType<string | boolean | HTMLElement>;
        default: undefined;
    };
    readonly defaultValue: {
        readonly type: PropType<number | number[]>;
        readonly default: 0;
    };
    readonly marks: PropType<Record<string, string>>;
    readonly disabled: {
        readonly type: PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly formatTooltip: PropType<(value: number) => string | number>;
    readonly keyboard: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly min: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly max: {
        readonly type: NumberConstructor;
        readonly default: 100;
    };
    readonly step: {
        readonly type: PropType<number | 'mark'>;
        readonly default: 1;
    };
    readonly range: BooleanConstructor;
    readonly value: PropType<number | number[]>;
    readonly placement: PropType<FollowerPlacement>;
    readonly showTooltip: {
        readonly type: PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly tooltip: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly vertical: BooleanConstructor;
    readonly reverse: BooleanConstructor;
    readonly 'onUpdate:value': PropType<
        MaybeArray<(value: number & number[]) => void>
    >;
    readonly onUpdateValue: PropType<
        MaybeArray<(value: number & number[]) => void>
    >;
    readonly theme: PropType<
        import('../../_mixins').Theme<
            'Slider',
            {
                fontSize: string;
                markFontSize: string;
                railColor: string;
                railColorHover: string;
                fillColor: string;
                fillColorHover: string;
                opacityDisabled: string;
                handleColor: string;
                dotColor: string;
                dotColorModal: string;
                dotColorPopover: string;
                handleBoxShadow: string;
                handleBoxShadowHover: string;
                handleBoxShadowActive: string;
                handleBoxShadowFocus: string;
                indicatorColor: string;
                indicatorBoxShadow: string;
                indicatorTextColor: string;
                indicatorBorderRadius: string;
                dotBorder: string;
                dotBorderActive: string;
                dotBoxShadow: string;
                railHeight: string;
                railWidthVertical: string;
                handleSize: string;
                dotHeight: string;
                dotWidth: string;
                dotBorderRadius: string;
            },
            any
        >
    >;
    readonly themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Slider',
                {
                    fontSize: string;
                    markFontSize: string;
                    railColor: string;
                    railColorHover: string;
                    fillColor: string;
                    fillColorHover: string;
                    opacityDisabled: string;
                    handleColor: string;
                    dotColor: string;
                    dotColorModal: string;
                    dotColorPopover: string;
                    handleBoxShadow: string;
                    handleBoxShadowHover: string;
                    handleBoxShadowActive: string;
                    handleBoxShadowFocus: string;
                    indicatorColor: string;
                    indicatorBoxShadow: string;
                    indicatorTextColor: string;
                    indicatorBorderRadius: string;
                    dotBorder: string;
                    dotBorderActive: string;
                    dotBoxShadow: string;
                    railHeight: string;
                    railWidthVertical: string;
                    handleSize: string;
                    dotHeight: string;
                    dotWidth: string;
                    dotBorderRadius: string;
                },
                any
            >
        >
    >;
    readonly builtinThemeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Slider',
                {
                    fontSize: string;
                    markFontSize: string;
                    railColor: string;
                    railColorHover: string;
                    fillColor: string;
                    fillColorHover: string;
                    opacityDisabled: string;
                    handleColor: string;
                    dotColor: string;
                    dotColorModal: string;
                    dotColorPopover: string;
                    handleBoxShadow: string;
                    handleBoxShadowHover: string;
                    handleBoxShadowActive: string;
                    handleBoxShadowFocus: string;
                    indicatorColor: string;
                    indicatorBoxShadow: string;
                    indicatorTextColor: string;
                    indicatorBorderRadius: string;
                    dotBorder: string;
                    dotBorderActive: string;
                    dotBoxShadow: string;
                    railHeight: string;
                    railWidthVertical: string;
                    handleSize: string;
                    dotHeight: string;
                    dotWidth: string;
                    dotBorderRadius: string;
                },
                any
            >
        >
    >;
};
export type SliderProps = ExtractPublicPropTypes<typeof sliderProps>;
declare const _default: import('vue').DefineComponent<
    {
        readonly to: {
            type: PropType<string | boolean | HTMLElement>;
            default: undefined;
        };
        readonly defaultValue: {
            readonly type: PropType<number | number[]>;
            readonly default: 0;
        };
        readonly marks: PropType<Record<string, string>>;
        readonly disabled: {
            readonly type: PropType<boolean | undefined>;
            readonly default: undefined;
        };
        readonly formatTooltip: PropType<(value: number) => string | number>;
        readonly keyboard: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly min: {
            readonly type: NumberConstructor;
            readonly default: 0;
        };
        readonly max: {
            readonly type: NumberConstructor;
            readonly default: 100;
        };
        readonly step: {
            readonly type: PropType<number | 'mark'>;
            readonly default: 1;
        };
        readonly range: BooleanConstructor;
        readonly value: PropType<number | number[]>;
        readonly placement: PropType<FollowerPlacement>;
        readonly showTooltip: {
            readonly type: PropType<boolean | undefined>;
            readonly default: undefined;
        };
        readonly tooltip: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly vertical: BooleanConstructor;
        readonly reverse: BooleanConstructor;
        readonly 'onUpdate:value': PropType<
            MaybeArray<(value: number & number[]) => void>
        >;
        readonly onUpdateValue: PropType<
            MaybeArray<(value: number & number[]) => void>
        >;
        readonly theme: PropType<
            import('../../_mixins').Theme<
                'Slider',
                {
                    fontSize: string;
                    markFontSize: string;
                    railColor: string;
                    railColorHover: string;
                    fillColor: string;
                    fillColorHover: string;
                    opacityDisabled: string;
                    handleColor: string;
                    dotColor: string;
                    dotColorModal: string;
                    dotColorPopover: string;
                    handleBoxShadow: string;
                    handleBoxShadowHover: string;
                    handleBoxShadowActive: string;
                    handleBoxShadowFocus: string;
                    indicatorColor: string;
                    indicatorBoxShadow: string;
                    indicatorTextColor: string;
                    indicatorBorderRadius: string;
                    dotBorder: string;
                    dotBorderActive: string;
                    dotBoxShadow: string;
                    railHeight: string;
                    railWidthVertical: string;
                    handleSize: string;
                    dotHeight: string;
                    dotWidth: string;
                    dotBorderRadius: string;
                },
                any
            >
        >;
        readonly themeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Slider',
                    {
                        fontSize: string;
                        markFontSize: string;
                        railColor: string;
                        railColorHover: string;
                        fillColor: string;
                        fillColorHover: string;
                        opacityDisabled: string;
                        handleColor: string;
                        dotColor: string;
                        dotColorModal: string;
                        dotColorPopover: string;
                        handleBoxShadow: string;
                        handleBoxShadowHover: string;
                        handleBoxShadowActive: string;
                        handleBoxShadowFocus: string;
                        indicatorColor: string;
                        indicatorBoxShadow: string;
                        indicatorTextColor: string;
                        indicatorBorderRadius: string;
                        dotBorder: string;
                        dotBorderActive: string;
                        dotBoxShadow: string;
                        railHeight: string;
                        railWidthVertical: string;
                        handleSize: string;
                        dotHeight: string;
                        dotWidth: string;
                        dotBorderRadius: string;
                    },
                    any
                >
            >
        >;
        readonly builtinThemeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Slider',
                    {
                        fontSize: string;
                        markFontSize: string;
                        railColor: string;
                        railColorHover: string;
                        fillColor: string;
                        fillColorHover: string;
                        opacityDisabled: string;
                        handleColor: string;
                        dotColor: string;
                        dotColorModal: string;
                        dotColorPopover: string;
                        handleBoxShadow: string;
                        handleBoxShadowHover: string;
                        handleBoxShadowActive: string;
                        handleBoxShadowFocus: string;
                        indicatorColor: string;
                        indicatorBoxShadow: string;
                        indicatorTextColor: string;
                        indicatorBorderRadius: string;
                        dotBorder: string;
                        dotBorderActive: string;
                        dotBoxShadow: string;
                        railHeight: string;
                        railWidthVertical: string;
                        handleSize: string;
                        dotHeight: string;
                        dotWidth: string;
                        dotBorderRadius: string;
                    },
                    any
                >
            >
        >;
    },
    {
        mergedClsPrefix: globalThis.ComputedRef<string>;
        namespace: globalThis.ComputedRef<string | undefined>;
        uncontrolledValue: globalThis.Ref<number | number[]>;
        mergedValue: globalThis.ComputedRef<number | number[]>;
        mergedDisabled: globalThis.ComputedRef<boolean>;
        mergedPlacement: globalThis.ComputedRef<FollowerPlacement>;
        isMounted: Readonly<globalThis.Ref<boolean>>;
        adjustedTo: globalThis.ComputedRef<string | HTMLElement>;
        dotTransitionDisabled: globalThis.Ref<boolean>;
        markInfos: globalThis.ComputedRef<
            {
                active: boolean;
                label: string;
                style: CSSProperties;
            }[]
        >;
        isShowTooltip: (index: number) => boolean;
        shouldKeepTooltipTransition: (index: number) => boolean;
        handleRailRef: globalThis.Ref<HTMLElement | null>;
        setHandleRefs: (key: number) => (el: any) => void;
        setFollowerRefs: (key: number) => (el: any) => void;
        fillStyle: globalThis.ComputedRef<
            | {
                  [x: string]: string;
                  height: string;
                  width?: undefined;
              }
            | {
                  [x: string]: string;
                  width: string;
                  height?: undefined;
              }
            | undefined
        >;
        getHandleStyle: (value: number, index: number) => Record<string, any>;
        activeIndex: globalThis.Ref<number>;
        arrifiedValues: globalThis.ComputedRef<number[]>;
        followerEnabledIndexSet: globalThis.Ref<Set<number>>;
        handleRailMouseDown: (event: MouseEvent | TouchEvent) => void;
        handleHandleFocus: (index: number) => void;
        handleHandleBlur: (index: number) => void;
        handleHandleMouseEnter: (index: number) => void;
        handleHandleMouseLeave: (index: number) => void;
        handleRailKeyDown: (e: KeyboardEvent) => void;
        indicatorCssVars:
            | globalThis.ComputedRef<{
                  '--n-font-size': string;
                  '--n-indicator-border-radius': string;
                  '--n-indicator-box-shadow': string;
                  '--n-indicator-color': string;
                  '--n-indicator-text-color': string;
              }>
            | undefined;
        indicatorThemeClass: globalThis.Ref<string> | undefined;
        indicatorOnRender: (() => void) | undefined;
        cssVars:
            | globalThis.ComputedRef<{
                  '--n-bezier': string;
                  '--n-dot-border': string;
                  '--n-dot-border-active': string;
                  '--n-dot-border-radius': string;
                  '--n-dot-box-shadow': string;
                  '--n-dot-color': string;
                  '--n-dot-color-modal': string;
                  '--n-dot-color-popover': string;
                  '--n-dot-height': string;
                  '--n-dot-width': string;
                  '--n-fill-color': string;
                  '--n-fill-color-hover': string;
                  '--n-font-size': string;
                  '--n-handle-box-shadow': string;
                  '--n-handle-box-shadow-active': string;
                  '--n-handle-box-shadow-focus': string;
                  '--n-handle-box-shadow-hover': string;
                  '--n-handle-color': string;
                  '--n-handle-size': string;
                  '--n-opacity-disabled': string;
                  '--n-rail-color': string;
                  '--n-rail-color-hover': string;
                  '--n-rail-height': string;
                  '--n-rail-width-vertical': string;
                  '--n-mark-font-size': string;
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
            readonly to: {
                type: PropType<string | boolean | HTMLElement>;
                default: undefined;
            };
            readonly defaultValue: {
                readonly type: PropType<number | number[]>;
                readonly default: 0;
            };
            readonly marks: PropType<Record<string, string>>;
            readonly disabled: {
                readonly type: PropType<boolean | undefined>;
                readonly default: undefined;
            };
            readonly formatTooltip: PropType<
                (value: number) => string | number
            >;
            readonly keyboard: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            readonly min: {
                readonly type: NumberConstructor;
                readonly default: 0;
            };
            readonly max: {
                readonly type: NumberConstructor;
                readonly default: 100;
            };
            readonly step: {
                readonly type: PropType<number | 'mark'>;
                readonly default: 1;
            };
            readonly range: BooleanConstructor;
            readonly value: PropType<number | number[]>;
            readonly placement: PropType<FollowerPlacement>;
            readonly showTooltip: {
                readonly type: PropType<boolean | undefined>;
                readonly default: undefined;
            };
            readonly tooltip: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            readonly vertical: BooleanConstructor;
            readonly reverse: BooleanConstructor;
            readonly 'onUpdate:value': PropType<
                MaybeArray<(value: number & number[]) => void>
            >;
            readonly onUpdateValue: PropType<
                MaybeArray<(value: number & number[]) => void>
            >;
            readonly theme: PropType<
                import('../../_mixins').Theme<
                    'Slider',
                    {
                        fontSize: string;
                        markFontSize: string;
                        railColor: string;
                        railColorHover: string;
                        fillColor: string;
                        fillColorHover: string;
                        opacityDisabled: string;
                        handleColor: string;
                        dotColor: string;
                        dotColorModal: string;
                        dotColorPopover: string;
                        handleBoxShadow: string;
                        handleBoxShadowHover: string;
                        handleBoxShadowActive: string;
                        handleBoxShadowFocus: string;
                        indicatorColor: string;
                        indicatorBoxShadow: string;
                        indicatorTextColor: string;
                        indicatorBorderRadius: string;
                        dotBorder: string;
                        dotBorderActive: string;
                        dotBoxShadow: string;
                        railHeight: string;
                        railWidthVertical: string;
                        handleSize: string;
                        dotHeight: string;
                        dotWidth: string;
                        dotBorderRadius: string;
                    },
                    any
                >
            >;
            readonly themeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Slider',
                        {
                            fontSize: string;
                            markFontSize: string;
                            railColor: string;
                            railColorHover: string;
                            fillColor: string;
                            fillColorHover: string;
                            opacityDisabled: string;
                            handleColor: string;
                            dotColor: string;
                            dotColorModal: string;
                            dotColorPopover: string;
                            handleBoxShadow: string;
                            handleBoxShadowHover: string;
                            handleBoxShadowActive: string;
                            handleBoxShadowFocus: string;
                            indicatorColor: string;
                            indicatorBoxShadow: string;
                            indicatorTextColor: string;
                            indicatorBorderRadius: string;
                            dotBorder: string;
                            dotBorderActive: string;
                            dotBoxShadow: string;
                            railHeight: string;
                            railWidthVertical: string;
                            handleSize: string;
                            dotHeight: string;
                            dotWidth: string;
                            dotBorderRadius: string;
                        },
                        any
                    >
                >
            >;
            readonly builtinThemeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Slider',
                        {
                            fontSize: string;
                            markFontSize: string;
                            railColor: string;
                            railColorHover: string;
                            fillColor: string;
                            fillColorHover: string;
                            opacityDisabled: string;
                            handleColor: string;
                            dotColor: string;
                            dotColorModal: string;
                            dotColorPopover: string;
                            handleBoxShadow: string;
                            handleBoxShadowHover: string;
                            handleBoxShadowActive: string;
                            handleBoxShadowFocus: string;
                            indicatorColor: string;
                            indicatorBoxShadow: string;
                            indicatorTextColor: string;
                            indicatorBorderRadius: string;
                            dotBorder: string;
                            dotBorderActive: string;
                            dotBoxShadow: string;
                            railHeight: string;
                            railWidthVertical: string;
                            handleSize: string;
                            dotHeight: string;
                            dotWidth: string;
                            dotBorderRadius: string;
                        },
                        any
                    >
                >
            >;
        }>
    >,
    {
        readonly range: boolean;
        readonly reverse: boolean;
        readonly vertical: boolean;
        readonly tooltip: boolean;
        readonly disabled: boolean | undefined;
        readonly step: number | 'mark';
        readonly max: number;
        readonly min: number;
        readonly to: string | boolean | HTMLElement;
        readonly defaultValue: number | number[];
        readonly keyboard: boolean;
        readonly showTooltip: boolean | undefined;
    },
    {}
>;
export default _default;
