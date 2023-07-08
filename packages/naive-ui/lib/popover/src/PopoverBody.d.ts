import { PropType, CSSProperties, VNode } from 'vue';
import { FollowerPlacement } from 'vueuc';
import type { PopoverTrigger } from './interface';
export declare const popoverBodyProps: {
    to: {
        type: PropType<string | boolean | HTMLElement>;
        default: undefined;
    };
    show: BooleanConstructor;
    trigger: PropType<PopoverTrigger>;
    showArrow: BooleanConstructor;
    delay: NumberConstructor;
    duration: NumberConstructor;
    raw: BooleanConstructor;
    arrowPointToCenter: BooleanConstructor;
    arrowStyle: PropType<string | CSSProperties>;
    displayDirective: PropType<'show' | 'if'>;
    x: NumberConstructor;
    y: NumberConstructor;
    flip: BooleanConstructor;
    overlap: BooleanConstructor;
    placement: PropType<FollowerPlacement>;
    width: PropType<number | 'trigger'>;
    keepAliveOnHover: BooleanConstructor;
    scrollable: BooleanConstructor;
    contentStyle: PropType<string | CSSProperties>;
    headerStyle: PropType<string | CSSProperties>;
    footerStyle: PropType<string | CSSProperties>;
    internalDeactivateImmediately: BooleanConstructor;
    animated: BooleanConstructor;
    onClickoutside: PropType<(e: MouseEvent) => void>;
    internalTrapFocus: BooleanConstructor;
    internalOnAfterLeave: PropType<() => void>;
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
interface RenderArrowProps {
    arrowStyle: string | CSSProperties | undefined;
    clsPrefix: string;
}
export declare const renderArrow: ({
    arrowStyle,
    clsPrefix,
}: RenderArrowProps) => VNode | null;
declare const _default: import('vue').DefineComponent<
    {
        to: {
            type: PropType<string | boolean | HTMLElement>;
            default: undefined;
        };
        show: BooleanConstructor;
        trigger: PropType<PopoverTrigger>;
        showArrow: BooleanConstructor;
        delay: NumberConstructor;
        duration: NumberConstructor;
        raw: BooleanConstructor;
        arrowPointToCenter: BooleanConstructor;
        arrowStyle: PropType<string | CSSProperties>;
        displayDirective: PropType<'show' | 'if'>;
        x: NumberConstructor;
        y: NumberConstructor;
        flip: BooleanConstructor;
        overlap: BooleanConstructor;
        placement: PropType<FollowerPlacement>;
        width: PropType<number | 'trigger'>;
        keepAliveOnHover: BooleanConstructor;
        scrollable: BooleanConstructor;
        contentStyle: PropType<string | CSSProperties>;
        headerStyle: PropType<string | CSSProperties>;
        footerStyle: PropType<string | CSSProperties>;
        internalDeactivateImmediately: BooleanConstructor;
        animated: BooleanConstructor;
        onClickoutside: PropType<(e: MouseEvent) => void>;
        internalTrapFocus: BooleanConstructor;
        internalOnAfterLeave: PropType<() => void>;
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
        displayed: globalThis.Ref<boolean>;
        namespace: globalThis.ComputedRef<string | undefined>;
        isMounted: globalThis.Ref<boolean>;
        zIndex: globalThis.Ref<number | undefined>;
        followerRef: globalThis.Ref<{
            syncPosition: () => void;
        } | null>;
        adjustedTo: globalThis.ComputedRef<string | HTMLElement>;
        followerEnabled: globalThis.Ref<boolean>;
        renderContentNode: () => VNode | null;
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
            to: {
                type: PropType<string | boolean | HTMLElement>;
                default: undefined;
            };
            show: BooleanConstructor;
            trigger: PropType<PopoverTrigger>;
            showArrow: BooleanConstructor;
            delay: NumberConstructor;
            duration: NumberConstructor;
            raw: BooleanConstructor;
            arrowPointToCenter: BooleanConstructor;
            arrowStyle: PropType<string | CSSProperties>;
            displayDirective: PropType<'show' | 'if'>;
            x: NumberConstructor;
            y: NumberConstructor;
            flip: BooleanConstructor;
            overlap: BooleanConstructor;
            placement: PropType<FollowerPlacement>;
            width: PropType<number | 'trigger'>;
            keepAliveOnHover: BooleanConstructor;
            scrollable: BooleanConstructor;
            contentStyle: PropType<string | CSSProperties>;
            headerStyle: PropType<string | CSSProperties>;
            footerStyle: PropType<string | CSSProperties>;
            internalDeactivateImmediately: BooleanConstructor;
            animated: BooleanConstructor;
            onClickoutside: PropType<(e: MouseEvent) => void>;
            internalTrapFocus: BooleanConstructor;
            internalOnAfterLeave: PropType<() => void>;
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
        show: boolean;
        flip: boolean;
        to: string | boolean | HTMLElement;
        raw: boolean;
        overlap: boolean;
        scrollable: boolean;
        showArrow: boolean;
        arrowPointToCenter: boolean;
        keepAliveOnHover: boolean;
        internalDeactivateImmediately: boolean;
        animated: boolean;
        internalTrapFocus: boolean;
    },
    {}
>;
export default _default;
