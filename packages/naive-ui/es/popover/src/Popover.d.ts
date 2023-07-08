import { PropType, CSSProperties, ComputedRef, Ref } from 'vue';
import { FollowerPlacement } from 'vueuc';
import type {
    ExtractPublicPropTypes,
    ExtractInternalPropTypes,
    MaybeArray,
} from '../../_utils';
import type { PopoverTrigger, InternalRenderBody } from './interface';
export interface TriggerEventHandlers {
    onClick: (e: MouseEvent) => void;
    onMouseenter: (e: MouseEvent) => void;
    onMouseleave: (e: MouseEvent) => void;
    onFocus: (e: FocusEvent) => void;
    onBlur: (e: FocusEvent) => void;
}
interface BodyInstance {
    syncPosition: () => void;
    [key: string]: unknown;
}
export interface PopoverInjection {
    handleMouseLeave: (e: MouseEvent) => void;
    handleMouseEnter: (e: MouseEvent) => void;
    handleMouseMoveOutside: (e: MouseEvent) => void;
    handleClickOutside: (e: MouseEvent) => void;
    handleKeydown: (e: KeyboardEvent) => void;
    getTriggerElement: () => HTMLElement;
    setBodyInstance: (value: BodyInstance | null) => void;
    zIndexRef: Ref<number | undefined>;
    internalRenderBodyRef: Ref<InternalRenderBody | undefined>;
    positionManuallyRef: ComputedRef<boolean>;
    isMountedRef: Ref<boolean>;
    extraClassRef: Ref<string[]>;
}
export declare const popoverBaseProps: {
    show: {
        type: PropType<boolean | undefined>;
        default: undefined;
    };
    defaultShow: BooleanConstructor;
    showArrow: {
        type: BooleanConstructor;
        default: boolean;
    };
    trigger: {
        type: PropType<PopoverTrigger>;
        default: string;
    };
    delay: {
        type: NumberConstructor;
        default: number;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    raw: BooleanConstructor;
    placement: {
        type: PropType<FollowerPlacement>;
        default: string;
    };
    x: NumberConstructor;
    y: NumberConstructor;
    arrowPointToCenter: BooleanConstructor;
    disabled: BooleanConstructor;
    getDisabled: PropType<() => boolean>;
    displayDirective: {
        type: PropType<'show' | 'if'>;
        default: string;
    };
    arrowStyle: PropType<string | CSSProperties>;
    flip: {
        type: BooleanConstructor;
        default: boolean;
    };
    animated: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: PropType<number | 'trigger'>;
        default: undefined;
    };
    overlap: BooleanConstructor;
    keepAliveOnHover: {
        type: BooleanConstructor;
        default: boolean;
    };
    zIndex: NumberConstructor;
    to: {
        type: PropType<string | boolean | HTMLElement>;
        default: undefined;
    };
    scrollable: BooleanConstructor;
    contentStyle: PropType<string | CSSProperties>;
    headerStyle: PropType<string | CSSProperties>;
    footerStyle: PropType<string | CSSProperties>;
    onClickoutside: PropType<(e: MouseEvent) => void>;
    'onUpdate:show': PropType<MaybeArray<(value: boolean) => void>>;
    onUpdateShow: PropType<MaybeArray<(value: boolean) => void>>;
    internalDeactivateImmediately: BooleanConstructor;
    internalSyncTargetWithParent: BooleanConstructor;
    internalInheritedEventHandlers: {
        type: PropType<TriggerEventHandlers[]>;
        default: () => never[];
    };
    internalTrapFocus: BooleanConstructor;
    internalExtraClass: {
        type: PropType<string[]>;
        default: () => never[];
    };
    onShow: PropType<MaybeArray<(value: boolean) => void> | undefined>;
    onHide: PropType<MaybeArray<(value: boolean) => void> | undefined>;
    arrow: {
        type: PropType<boolean | undefined>;
        default: undefined;
    };
    minWidth: NumberConstructor;
    maxWidth: NumberConstructor;
};
export declare const popoverProps: {
    internalOnAfterLeave: PropType<() => void>;
    internalRenderBody: PropType<InternalRenderBody>;
    show: {
        type: PropType<boolean | undefined>;
        default: undefined;
    };
    defaultShow: BooleanConstructor;
    showArrow: {
        type: BooleanConstructor;
        default: boolean;
    };
    trigger: {
        type: PropType<PopoverTrigger>;
        default: string;
    };
    delay: {
        type: NumberConstructor;
        default: number;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    raw: BooleanConstructor;
    placement: {
        type: PropType<FollowerPlacement>;
        default: string;
    };
    x: NumberConstructor;
    y: NumberConstructor;
    arrowPointToCenter: BooleanConstructor;
    disabled: BooleanConstructor;
    getDisabled: PropType<() => boolean>;
    displayDirective: {
        type: PropType<'show' | 'if'>;
        default: string;
    };
    arrowStyle: PropType<string | CSSProperties>;
    flip: {
        type: BooleanConstructor;
        default: boolean;
    };
    animated: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: PropType<number | 'trigger'>;
        default: undefined;
    };
    overlap: BooleanConstructor;
    keepAliveOnHover: {
        type: BooleanConstructor;
        default: boolean;
    };
    zIndex: NumberConstructor;
    to: {
        type: PropType<string | boolean | HTMLElement>;
        default: undefined;
    };
    scrollable: BooleanConstructor;
    contentStyle: PropType<string | CSSProperties>;
    headerStyle: PropType<string | CSSProperties>;
    footerStyle: PropType<string | CSSProperties>;
    onClickoutside: PropType<(e: MouseEvent) => void>;
    'onUpdate:show': PropType<MaybeArray<(value: boolean) => void>>;
    onUpdateShow: PropType<MaybeArray<(value: boolean) => void>>;
    internalDeactivateImmediately: BooleanConstructor;
    internalSyncTargetWithParent: BooleanConstructor;
    internalInheritedEventHandlers: {
        type: PropType<TriggerEventHandlers[]>;
        default: () => never[];
    };
    internalTrapFocus: BooleanConstructor;
    internalExtraClass: {
        type: PropType<string[]>;
        default: () => never[];
    };
    onShow: PropType<MaybeArray<(value: boolean) => void> | undefined>;
    onHide: PropType<MaybeArray<(value: boolean) => void> | undefined>;
    arrow: {
        type: PropType<boolean | undefined>;
        default: undefined;
    };
    minWidth: NumberConstructor;
    maxWidth: NumberConstructor;
    theme: PropType<
        import('../../_mixins').Theme<
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
        >
    >;
    themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
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
            >
        >
    >;
    builtinThemeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
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
            >
        >
    >;
};
export type PopoverProps = ExtractPublicPropTypes<typeof popoverBaseProps>;
export type PopoverInternalProps = ExtractInternalPropTypes<
    typeof popoverProps
>;
declare const _default: import('vue').DefineComponent<
    {
        internalOnAfterLeave: PropType<() => void>;
        internalRenderBody: PropType<InternalRenderBody>;
        show: {
            type: PropType<boolean | undefined>;
            default: undefined;
        };
        defaultShow: BooleanConstructor;
        showArrow: {
            type: BooleanConstructor;
            default: boolean;
        };
        trigger: {
            type: PropType<PopoverTrigger>;
            default: string;
        };
        delay: {
            type: NumberConstructor;
            default: number;
        };
        duration: {
            type: NumberConstructor;
            default: number;
        };
        raw: BooleanConstructor;
        placement: {
            type: PropType<FollowerPlacement>;
            default: string;
        };
        x: NumberConstructor;
        y: NumberConstructor;
        arrowPointToCenter: BooleanConstructor;
        disabled: BooleanConstructor;
        getDisabled: PropType<() => boolean>;
        displayDirective: {
            type: PropType<'show' | 'if'>;
            default: string;
        };
        arrowStyle: PropType<string | CSSProperties>;
        flip: {
            type: BooleanConstructor;
            default: boolean;
        };
        animated: {
            type: BooleanConstructor;
            default: boolean;
        };
        width: {
            type: PropType<number | 'trigger'>;
            default: undefined;
        };
        overlap: BooleanConstructor;
        keepAliveOnHover: {
            type: BooleanConstructor;
            default: boolean;
        };
        zIndex: NumberConstructor;
        to: {
            type: PropType<string | boolean | HTMLElement>;
            default: undefined;
        };
        scrollable: BooleanConstructor;
        contentStyle: PropType<string | CSSProperties>;
        headerStyle: PropType<string | CSSProperties>;
        footerStyle: PropType<string | CSSProperties>;
        onClickoutside: PropType<(e: MouseEvent) => void>;
        'onUpdate:show': PropType<MaybeArray<(value: boolean) => void>>;
        onUpdateShow: PropType<MaybeArray<(value: boolean) => void>>;
        internalDeactivateImmediately: BooleanConstructor;
        internalSyncTargetWithParent: BooleanConstructor;
        internalInheritedEventHandlers: {
            type: PropType<TriggerEventHandlers[]>;
            default: () => never[];
        };
        internalTrapFocus: BooleanConstructor;
        internalExtraClass: {
            type: PropType<string[]>;
            default: () => never[];
        };
        onShow: PropType<MaybeArray<(value: boolean) => void> | undefined>;
        onHide: PropType<MaybeArray<(value: boolean) => void> | undefined>;
        arrow: {
            type: PropType<boolean | undefined>;
            default: undefined;
        };
        minWidth: NumberConstructor;
        maxWidth: NumberConstructor;
        theme: PropType<
            import('../../_mixins').Theme<
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
            >
        >;
        themeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
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
                >
            >
        >;
        builtinThemeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
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
                >
            >
        >;
    },
    {
        binderInstRef: Ref<{
            targetRef: HTMLElement | null;
        } | null>;
        positionManually: ComputedRef<boolean>;
        mergedShowConsideringDisabledProp: ComputedRef<boolean>;
        uncontrolledShow: Ref<boolean>;
        mergedShowArrow: ComputedRef<boolean>;
        getMergedShow: () => boolean;
        setShow: (value: boolean) => void;
        handleClick: () => void;
        handleMouseEnter: () => void;
        handleMouseLeave: () => void;
        handleFocus: () => void;
        handleBlur: () => void;
        syncPosition: () => void;
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
            internalOnAfterLeave: PropType<() => void>;
            internalRenderBody: PropType<InternalRenderBody>;
            show: {
                type: PropType<boolean | undefined>;
                default: undefined;
            };
            defaultShow: BooleanConstructor;
            showArrow: {
                type: BooleanConstructor;
                default: boolean;
            };
            trigger: {
                type: PropType<PopoverTrigger>;
                default: string;
            };
            delay: {
                type: NumberConstructor;
                default: number;
            };
            duration: {
                type: NumberConstructor;
                default: number;
            };
            raw: BooleanConstructor;
            placement: {
                type: PropType<FollowerPlacement>;
                default: string;
            };
            x: NumberConstructor;
            y: NumberConstructor;
            arrowPointToCenter: BooleanConstructor;
            disabled: BooleanConstructor;
            getDisabled: PropType<() => boolean>;
            displayDirective: {
                type: PropType<'show' | 'if'>;
                default: string;
            };
            arrowStyle: PropType<string | CSSProperties>;
            flip: {
                type: BooleanConstructor;
                default: boolean;
            };
            animated: {
                type: BooleanConstructor;
                default: boolean;
            };
            width: {
                type: PropType<number | 'trigger'>;
                default: undefined;
            };
            overlap: BooleanConstructor;
            keepAliveOnHover: {
                type: BooleanConstructor;
                default: boolean;
            };
            zIndex: NumberConstructor;
            to: {
                type: PropType<string | boolean | HTMLElement>;
                default: undefined;
            };
            scrollable: BooleanConstructor;
            contentStyle: PropType<string | CSSProperties>;
            headerStyle: PropType<string | CSSProperties>;
            footerStyle: PropType<string | CSSProperties>;
            onClickoutside: PropType<(e: MouseEvent) => void>;
            'onUpdate:show': PropType<MaybeArray<(value: boolean) => void>>;
            onUpdateShow: PropType<MaybeArray<(value: boolean) => void>>;
            internalDeactivateImmediately: BooleanConstructor;
            internalSyncTargetWithParent: BooleanConstructor;
            internalInheritedEventHandlers: {
                type: PropType<TriggerEventHandlers[]>;
                default: () => never[];
            };
            internalTrapFocus: BooleanConstructor;
            internalExtraClass: {
                type: PropType<string[]>;
                default: () => never[];
            };
            onShow: PropType<MaybeArray<(value: boolean) => void> | undefined>;
            onHide: PropType<MaybeArray<(value: boolean) => void> | undefined>;
            arrow: {
                type: PropType<boolean | undefined>;
                default: undefined;
            };
            minWidth: NumberConstructor;
            maxWidth: NumberConstructor;
            theme: PropType<
                import('../../_mixins').Theme<
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
                >
            >;
            themeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
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
                    >
                >
            >;
            builtinThemeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
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
                    >
                >
            >;
        }>
    >,
    {
        show: boolean | undefined;
        flip: boolean;
        width: number | 'trigger';
        disabled: boolean;
        duration: number;
        to: string | boolean | HTMLElement;
        raw: boolean;
        placement: FollowerPlacement;
        overlap: boolean;
        scrollable: boolean;
        trigger: PopoverTrigger;
        showArrow: boolean;
        delay: number;
        arrowPointToCenter: boolean;
        displayDirective: 'show' | 'if';
        keepAliveOnHover: boolean;
        internalDeactivateImmediately: boolean;
        animated: boolean;
        internalTrapFocus: boolean;
        defaultShow: boolean;
        internalSyncTargetWithParent: boolean;
        internalInheritedEventHandlers: TriggerEventHandlers[];
        internalExtraClass: string[];
        arrow: boolean | undefined;
    },
    {}
>;
export default _default;
