import { PropType, Ref } from 'vue';
import { ExtractPublicPropTypes } from '../../_utils';
export declare const listProps: {
    size: {
        type: PropType<'small' | 'medium' | 'large'>;
        default: string;
    };
    bordered: BooleanConstructor;
    clickable: BooleanConstructor;
    hoverable: BooleanConstructor;
    showDivider: {
        type: BooleanConstructor;
        default: boolean;
    };
    theme: PropType<
        import('../../_mixins').Theme<
            'List',
            {
                textColor: string;
                color: string;
                colorHover: string;
                colorModal: string;
                colorHoverModal: string;
                colorPopover: string;
                colorHoverPopover: string;
                borderColor: string;
                borderColorModal: string;
                borderColorPopover: string;
                borderRadius: string;
                fontSize: string;
            },
            any
        >
    >;
    themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'List',
                {
                    textColor: string;
                    color: string;
                    colorHover: string;
                    colorModal: string;
                    colorHoverModal: string;
                    colorPopover: string;
                    colorHoverPopover: string;
                    borderColor: string;
                    borderColorModal: string;
                    borderColorPopover: string;
                    borderRadius: string;
                    fontSize: string;
                },
                any
            >
        >
    >;
    builtinThemeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'List',
                {
                    textColor: string;
                    color: string;
                    colorHover: string;
                    colorModal: string;
                    colorHoverModal: string;
                    colorPopover: string;
                    colorHoverPopover: string;
                    borderColor: string;
                    borderColorModal: string;
                    borderColorPopover: string;
                    borderRadius: string;
                    fontSize: string;
                },
                any
            >
        >
    >;
    draggable: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    onDrag: PropType<(e: DragEvent) => void>;
    onDragend: PropType<(e: DragEvent) => void>;
    onDragenter: PropType<(e: DragEvent) => void>;
    onDragleave: PropType<(e: DragEvent) => void>;
    onDragover: PropType<(e: DragEvent) => void>;
    onDragstart: PropType<(e: DragEvent) => void>;
    onDrop: PropType<(e: DragEvent) => void>;
};
export type ListProps = ExtractPublicPropTypes<typeof listProps>;
interface ListInjection {
    showDividerRef: Ref<boolean>;
    mergedClsPrefixRef: Ref<string>;
}
export declare const listInjectionKey: globalThis.InjectionKey<ListInjection>;
declare const _default: import('vue').DefineComponent<
    {
        size: {
            type: PropType<'small' | 'medium' | 'large'>;
            default: string;
        };
        bordered: BooleanConstructor;
        clickable: BooleanConstructor;
        hoverable: BooleanConstructor;
        showDivider: {
            type: BooleanConstructor;
            default: boolean;
        };
        theme: PropType<
            import('../../_mixins').Theme<
                'List',
                {
                    textColor: string;
                    color: string;
                    colorHover: string;
                    colorModal: string;
                    colorHoverModal: string;
                    colorPopover: string;
                    colorHoverPopover: string;
                    borderColor: string;
                    borderColorModal: string;
                    borderColorPopover: string;
                    borderRadius: string;
                    fontSize: string;
                },
                any
            >
        >;
        themeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'List',
                    {
                        textColor: string;
                        color: string;
                        colorHover: string;
                        colorModal: string;
                        colorHoverModal: string;
                        colorPopover: string;
                        colorHoverPopover: string;
                        borderColor: string;
                        borderColorModal: string;
                        borderColorPopover: string;
                        borderRadius: string;
                        fontSize: string;
                    },
                    any
                >
            >
        >;
        builtinThemeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'List',
                    {
                        textColor: string;
                        color: string;
                        colorHover: string;
                        colorModal: string;
                        colorHoverModal: string;
                        colorPopover: string;
                        colorHoverPopover: string;
                        borderColor: string;
                        borderColorModal: string;
                        borderColorPopover: string;
                        borderRadius: string;
                        fontSize: string;
                    },
                    any
                >
            >
        >;
        draggable: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        onDrag: PropType<(e: DragEvent) => void>;
        onDragend: PropType<(e: DragEvent) => void>;
        onDragenter: PropType<(e: DragEvent) => void>;
        onDragleave: PropType<(e: DragEvent) => void>;
        onDragover: PropType<(e: DragEvent) => void>;
        onDragstart: PropType<(e: DragEvent) => void>;
        onDrop: PropType<(e: DragEvent) => void>;
    },
    {
        dragProps: {
            draggable: boolean | undefined;
            onDrag: ((e: DragEvent) => void) | undefined;
            onDragend: ((e: DragEvent) => void) | undefined;
            onDragenter: ((e: DragEvent) => void) | undefined;
            onDragleave: ((e: DragEvent) => void) | undefined;
            onDragover: ((e: DragEvent) => void) | undefined;
            onDragstart: ((e: DragEvent) => void) | undefined;
            onDrop: ((e: DragEvent) => void) | undefined;
        };
        mergedClsPrefix: globalThis.ComputedRef<string>;
        rtlEnabled:
            | Ref<
                  | import('../../config-provider/src/internal-interface').RtlItem
                  | undefined
              >
            | undefined;
        cssVars:
            | globalThis.ComputedRef<{
                  '--n-font-size': string;
                  '--n-bezier': string;
                  '--n-text-color': string;
                  '--n-color': string;
                  '--n-border-radius': string;
                  '--n-border-color': string;
                  '--n-border-color-modal': string;
                  '--n-border-color-popover': string;
                  '--n-color-modal': string;
                  '--n-color-popover': string;
                  '--n-color-hover': string;
                  '--n-color-hover-modal': string;
                  '--n-color-hover-popover': string;
              }>
            | undefined;
        themeClass: Ref<string> | undefined;
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
            size: {
                type: PropType<'small' | 'medium' | 'large'>;
                default: string;
            };
            bordered: BooleanConstructor;
            clickable: BooleanConstructor;
            hoverable: BooleanConstructor;
            showDivider: {
                type: BooleanConstructor;
                default: boolean;
            };
            theme: PropType<
                import('../../_mixins').Theme<
                    'List',
                    {
                        textColor: string;
                        color: string;
                        colorHover: string;
                        colorModal: string;
                        colorHoverModal: string;
                        colorPopover: string;
                        colorHoverPopover: string;
                        borderColor: string;
                        borderColorModal: string;
                        borderColorPopover: string;
                        borderRadius: string;
                        fontSize: string;
                    },
                    any
                >
            >;
            themeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'List',
                        {
                            textColor: string;
                            color: string;
                            colorHover: string;
                            colorModal: string;
                            colorHoverModal: string;
                            colorPopover: string;
                            colorHoverPopover: string;
                            borderColor: string;
                            borderColorModal: string;
                            borderColorPopover: string;
                            borderRadius: string;
                            fontSize: string;
                        },
                        any
                    >
                >
            >;
            builtinThemeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'List',
                        {
                            textColor: string;
                            color: string;
                            colorHover: string;
                            colorModal: string;
                            colorHoverModal: string;
                            colorPopover: string;
                            colorHoverPopover: string;
                            borderColor: string;
                            borderColorModal: string;
                            borderColorPopover: string;
                            borderRadius: string;
                            fontSize: string;
                        },
                        any
                    >
                >
            >;
            draggable: {
                readonly type: BooleanConstructor;
                readonly default: false;
            };
            onDrag: PropType<(e: DragEvent) => void>;
            onDragend: PropType<(e: DragEvent) => void>;
            onDragenter: PropType<(e: DragEvent) => void>;
            onDragleave: PropType<(e: DragEvent) => void>;
            onDragover: PropType<(e: DragEvent) => void>;
            onDragstart: PropType<(e: DragEvent) => void>;
            onDrop: PropType<(e: DragEvent) => void>;
        }>
    >,
    {
        size: 'small' | 'medium' | 'large';
        draggable: boolean;
        bordered: boolean;
        clickable: boolean;
        hoverable: boolean;
        showDivider: boolean;
    },
    {}
>;
export default _default;
