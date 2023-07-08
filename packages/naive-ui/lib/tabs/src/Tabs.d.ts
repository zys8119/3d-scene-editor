import {
    PropType,
    CSSProperties,
    ComponentPublicInstance,
    nextTick,
    ExtractPropTypes,
} from 'vue';
import { VXScrollInst } from 'vueuc';
import type { MaybeArray, ExtractPublicPropTypes } from '../../_utils';
import type {
    Addable,
    OnClose,
    OnBeforeLeave,
    TabsType,
    OnUpdateValue,
} from './interface';
export declare const tabsProps: {
    readonly value: PropType<string | number>;
    readonly defaultValue: PropType<string | number>;
    readonly trigger: {
        readonly type: PropType<'click' | 'hover'>;
        readonly default: 'click';
    };
    readonly type: {
        readonly type: PropType<TabsType>;
        readonly default: 'bar';
    };
    readonly closable: BooleanConstructor;
    readonly justifyContent: PropType<
        | 'start'
        | 'end'
        | 'space-around'
        | 'space-between'
        | 'space-evenly'
        | 'center'
    >;
    readonly size: {
        readonly type: PropType<'small' | 'medium' | 'large'>;
        readonly default: 'medium';
    };
    readonly placement: {
        readonly type: PropType<'left' | 'right' | 'bottom' | 'top'>;
        readonly default: 'top';
    };
    readonly tabStyle: PropType<string | CSSProperties>;
    readonly barWidth: NumberConstructor;
    readonly paneClass: StringConstructor;
    readonly paneStyle: PropType<string | CSSProperties>;
    readonly addable: PropType<Addable>;
    readonly tabsPadding: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly animated: BooleanConstructor;
    readonly onBeforeLeave: PropType<OnBeforeLeave>;
    readonly onAdd: PropType<() => void>;
    readonly 'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>;
    readonly onUpdateValue: PropType<MaybeArray<OnUpdateValue>>;
    readonly onClose: PropType<MaybeArray<OnClose>>;
    readonly labelSize: PropType<'small' | 'medium' | 'large'>;
    readonly activeName: PropType<string | number>;
    readonly onActiveNameChange: PropType<
        MaybeArray<(value: string & number) => void>
    >;
    readonly theme: PropType<
        import('../../_mixins').Theme<
            'Tabs',
            {
                colorSegment: string;
                tabFontSizeCard: string;
                tabTextColorLine: string;
                tabTextColorActiveLine: string;
                tabTextColorHoverLine: string;
                tabTextColorDisabledLine: string;
                tabTextColorSegment: string;
                tabTextColorActiveSegment: string;
                tabTextColorHoverSegment: string;
                tabTextColorDisabledSegment: string;
                tabTextColorBar: string;
                tabTextColorActiveBar: string;
                tabTextColorHoverBar: string;
                tabTextColorDisabledBar: string;
                tabTextColorCard: string;
                tabTextColorHoverCard: string;
                tabTextColorActiveCard: string;
                tabTextColorDisabledCard: string;
                barColor: string;
                closeIconColor: string;
                closeIconColorHover: string;
                closeIconColorPressed: string;
                closeColorHover: string;
                closeColorPressed: string;
                closeBorderRadius: string;
                tabColor: string;
                tabColorSegment: string;
                tabBorderColor: string;
                tabFontWeightActive: string;
                tabFontWeight: string;
                tabBorderRadius: string;
                paneTextColor: string;
                fontWeightStrong: string;
                tabFontSizeSmall: string;
                tabFontSizeMedium: string;
                tabFontSizeLarge: string;
                tabGapSmallLine: string;
                tabGapMediumLine: string;
                tabGapLargeLine: string;
                tabPaddingSmallLine: string;
                tabPaddingMediumLine: string;
                tabPaddingLargeLine: string;
                tabPaddingVerticalSmallLine: string;
                tabPaddingVerticalMediumLine: string;
                tabPaddingVerticalLargeLine: string;
                tabGapSmallBar: string;
                tabGapMediumBar: string;
                tabGapLargeBar: string;
                tabPaddingSmallBar: string;
                tabPaddingMediumBar: string;
                tabPaddingLargeBar: string;
                tabPaddingVerticalSmallBar: string;
                tabPaddingVerticalMediumBar: string;
                tabPaddingVerticalLargeBar: string;
                tabGapSmallCard: string;
                tabGapMediumCard: string;
                tabGapLargeCard: string;
                tabPaddingSmallCard: string;
                tabPaddingMediumCard: string;
                tabPaddingLargeCard: string;
                tabPaddingSmallSegment: string;
                tabPaddingMediumSegment: string;
                tabPaddingLargeSegment: string;
                tabPaddingVerticalLargeSegment: string;
                tabPaddingVerticalSmallCard: string;
                tabPaddingVerticalMediumCard: string;
                tabPaddingVerticalLargeCard: string;
                tabPaddingVerticalSmallSegment: string;
                tabPaddingVerticalMediumSegment: string;
                tabGapSmallSegment: string;
                tabGapMediumSegment: string;
                tabGapLargeSegment: string;
                panePaddingSmall: string;
                panePaddingMedium: string;
                panePaddingLarge: string;
                closeSize: string;
                closeIconSize: string;
            },
            any
        >
    >;
    readonly themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Tabs',
                {
                    colorSegment: string;
                    tabFontSizeCard: string;
                    tabTextColorLine: string;
                    tabTextColorActiveLine: string;
                    tabTextColorHoverLine: string;
                    tabTextColorDisabledLine: string;
                    tabTextColorSegment: string;
                    tabTextColorActiveSegment: string;
                    tabTextColorHoverSegment: string;
                    tabTextColorDisabledSegment: string;
                    tabTextColorBar: string;
                    tabTextColorActiveBar: string;
                    tabTextColorHoverBar: string;
                    tabTextColorDisabledBar: string;
                    tabTextColorCard: string;
                    tabTextColorHoverCard: string;
                    tabTextColorActiveCard: string;
                    tabTextColorDisabledCard: string;
                    barColor: string;
                    closeIconColor: string;
                    closeIconColorHover: string;
                    closeIconColorPressed: string;
                    closeColorHover: string;
                    closeColorPressed: string;
                    closeBorderRadius: string;
                    tabColor: string;
                    tabColorSegment: string;
                    tabBorderColor: string;
                    tabFontWeightActive: string;
                    tabFontWeight: string;
                    tabBorderRadius: string;
                    paneTextColor: string;
                    fontWeightStrong: string;
                    tabFontSizeSmall: string;
                    tabFontSizeMedium: string;
                    tabFontSizeLarge: string;
                    tabGapSmallLine: string;
                    tabGapMediumLine: string;
                    tabGapLargeLine: string;
                    tabPaddingSmallLine: string;
                    tabPaddingMediumLine: string;
                    tabPaddingLargeLine: string;
                    tabPaddingVerticalSmallLine: string;
                    tabPaddingVerticalMediumLine: string;
                    tabPaddingVerticalLargeLine: string;
                    tabGapSmallBar: string;
                    tabGapMediumBar: string;
                    tabGapLargeBar: string;
                    tabPaddingSmallBar: string;
                    tabPaddingMediumBar: string;
                    tabPaddingLargeBar: string;
                    tabPaddingVerticalSmallBar: string;
                    tabPaddingVerticalMediumBar: string;
                    tabPaddingVerticalLargeBar: string;
                    tabGapSmallCard: string;
                    tabGapMediumCard: string;
                    tabGapLargeCard: string;
                    tabPaddingSmallCard: string;
                    tabPaddingMediumCard: string;
                    tabPaddingLargeCard: string;
                    tabPaddingSmallSegment: string;
                    tabPaddingMediumSegment: string;
                    tabPaddingLargeSegment: string;
                    tabPaddingVerticalLargeSegment: string;
                    tabPaddingVerticalSmallCard: string;
                    tabPaddingVerticalMediumCard: string;
                    tabPaddingVerticalLargeCard: string;
                    tabPaddingVerticalSmallSegment: string;
                    tabPaddingVerticalMediumSegment: string;
                    tabGapSmallSegment: string;
                    tabGapMediumSegment: string;
                    tabGapLargeSegment: string;
                    panePaddingSmall: string;
                    panePaddingMedium: string;
                    panePaddingLarge: string;
                    closeSize: string;
                    closeIconSize: string;
                },
                any
            >
        >
    >;
    readonly builtinThemeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Tabs',
                {
                    colorSegment: string;
                    tabFontSizeCard: string;
                    tabTextColorLine: string;
                    tabTextColorActiveLine: string;
                    tabTextColorHoverLine: string;
                    tabTextColorDisabledLine: string;
                    tabTextColorSegment: string;
                    tabTextColorActiveSegment: string;
                    tabTextColorHoverSegment: string;
                    tabTextColorDisabledSegment: string;
                    tabTextColorBar: string;
                    tabTextColorActiveBar: string;
                    tabTextColorHoverBar: string;
                    tabTextColorDisabledBar: string;
                    tabTextColorCard: string;
                    tabTextColorHoverCard: string;
                    tabTextColorActiveCard: string;
                    tabTextColorDisabledCard: string;
                    barColor: string;
                    closeIconColor: string;
                    closeIconColorHover: string;
                    closeIconColorPressed: string;
                    closeColorHover: string;
                    closeColorPressed: string;
                    closeBorderRadius: string;
                    tabColor: string;
                    tabColorSegment: string;
                    tabBorderColor: string;
                    tabFontWeightActive: string;
                    tabFontWeight: string;
                    tabBorderRadius: string;
                    paneTextColor: string;
                    fontWeightStrong: string;
                    tabFontSizeSmall: string;
                    tabFontSizeMedium: string;
                    tabFontSizeLarge: string;
                    tabGapSmallLine: string;
                    tabGapMediumLine: string;
                    tabGapLargeLine: string;
                    tabPaddingSmallLine: string;
                    tabPaddingMediumLine: string;
                    tabPaddingLargeLine: string;
                    tabPaddingVerticalSmallLine: string;
                    tabPaddingVerticalMediumLine: string;
                    tabPaddingVerticalLargeLine: string;
                    tabGapSmallBar: string;
                    tabGapMediumBar: string;
                    tabGapLargeBar: string;
                    tabPaddingSmallBar: string;
                    tabPaddingMediumBar: string;
                    tabPaddingLargeBar: string;
                    tabPaddingVerticalSmallBar: string;
                    tabPaddingVerticalMediumBar: string;
                    tabPaddingVerticalLargeBar: string;
                    tabGapSmallCard: string;
                    tabGapMediumCard: string;
                    tabGapLargeCard: string;
                    tabPaddingSmallCard: string;
                    tabPaddingMediumCard: string;
                    tabPaddingLargeCard: string;
                    tabPaddingSmallSegment: string;
                    tabPaddingMediumSegment: string;
                    tabPaddingLargeSegment: string;
                    tabPaddingVerticalLargeSegment: string;
                    tabPaddingVerticalSmallCard: string;
                    tabPaddingVerticalMediumCard: string;
                    tabPaddingVerticalLargeCard: string;
                    tabPaddingVerticalSmallSegment: string;
                    tabPaddingVerticalMediumSegment: string;
                    tabGapSmallSegment: string;
                    tabGapMediumSegment: string;
                    tabGapLargeSegment: string;
                    panePaddingSmall: string;
                    panePaddingMedium: string;
                    panePaddingLarge: string;
                    closeSize: string;
                    closeIconSize: string;
                },
                any
            >
        >
    >;
};
export type TabsProps = ExtractPublicPropTypes<typeof tabsProps>;
declare const _default: import('vue').DefineComponent<
    {
        readonly value: PropType<string | number>;
        readonly defaultValue: PropType<string | number>;
        readonly trigger: {
            readonly type: PropType<'click' | 'hover'>;
            readonly default: 'click';
        };
        readonly type: {
            readonly type: PropType<TabsType>;
            readonly default: 'bar';
        };
        readonly closable: BooleanConstructor;
        readonly justifyContent: PropType<
            | 'start'
            | 'end'
            | 'space-around'
            | 'space-between'
            | 'space-evenly'
            | 'center'
        >;
        readonly size: {
            readonly type: PropType<'small' | 'medium' | 'large'>;
            readonly default: 'medium';
        };
        readonly placement: {
            readonly type: PropType<'left' | 'right' | 'bottom' | 'top'>;
            readonly default: 'top';
        };
        readonly tabStyle: PropType<string | CSSProperties>;
        readonly barWidth: NumberConstructor;
        readonly paneClass: StringConstructor;
        readonly paneStyle: PropType<string | CSSProperties>;
        readonly addable: PropType<Addable>;
        readonly tabsPadding: {
            readonly type: NumberConstructor;
            readonly default: 0;
        };
        readonly animated: BooleanConstructor;
        readonly onBeforeLeave: PropType<OnBeforeLeave>;
        readonly onAdd: PropType<() => void>;
        readonly 'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>;
        readonly onUpdateValue: PropType<MaybeArray<OnUpdateValue>>;
        readonly onClose: PropType<MaybeArray<OnClose>>;
        readonly labelSize: PropType<'small' | 'medium' | 'large'>;
        readonly activeName: PropType<string | number>;
        readonly onActiveNameChange: PropType<
            MaybeArray<(value: never) => void>
        >;
        readonly theme: PropType<
            import('../../_mixins').Theme<
                'Tabs',
                {
                    colorSegment: string;
                    tabFontSizeCard: string;
                    tabTextColorLine: string;
                    tabTextColorActiveLine: string;
                    tabTextColorHoverLine: string;
                    tabTextColorDisabledLine: string;
                    tabTextColorSegment: string;
                    tabTextColorActiveSegment: string;
                    tabTextColorHoverSegment: string;
                    tabTextColorDisabledSegment: string;
                    tabTextColorBar: string;
                    tabTextColorActiveBar: string;
                    tabTextColorHoverBar: string;
                    tabTextColorDisabledBar: string;
                    tabTextColorCard: string;
                    tabTextColorHoverCard: string;
                    tabTextColorActiveCard: string;
                    tabTextColorDisabledCard: string;
                    barColor: string;
                    closeIconColor: string;
                    closeIconColorHover: string;
                    closeIconColorPressed: string;
                    closeColorHover: string;
                    closeColorPressed: string;
                    closeBorderRadius: string;
                    tabColor: string;
                    tabColorSegment: string;
                    tabBorderColor: string;
                    tabFontWeightActive: string;
                    tabFontWeight: string;
                    tabBorderRadius: string;
                    paneTextColor: string;
                    fontWeightStrong: string;
                    tabFontSizeSmall: string;
                    tabFontSizeMedium: string;
                    tabFontSizeLarge: string;
                    tabGapSmallLine: string;
                    tabGapMediumLine: string;
                    tabGapLargeLine: string;
                    tabPaddingSmallLine: string;
                    tabPaddingMediumLine: string;
                    tabPaddingLargeLine: string;
                    tabPaddingVerticalSmallLine: string;
                    tabPaddingVerticalMediumLine: string;
                    tabPaddingVerticalLargeLine: string;
                    tabGapSmallBar: string;
                    tabGapMediumBar: string;
                    tabGapLargeBar: string;
                    tabPaddingSmallBar: string;
                    tabPaddingMediumBar: string;
                    tabPaddingLargeBar: string;
                    tabPaddingVerticalSmallBar: string;
                    tabPaddingVerticalMediumBar: string;
                    tabPaddingVerticalLargeBar: string;
                    tabGapSmallCard: string;
                    tabGapMediumCard: string;
                    tabGapLargeCard: string;
                    tabPaddingSmallCard: string;
                    tabPaddingMediumCard: string;
                    tabPaddingLargeCard: string;
                    tabPaddingSmallSegment: string;
                    tabPaddingMediumSegment: string;
                    tabPaddingLargeSegment: string;
                    tabPaddingVerticalLargeSegment: string;
                    tabPaddingVerticalSmallCard: string;
                    tabPaddingVerticalMediumCard: string;
                    tabPaddingVerticalLargeCard: string;
                    tabPaddingVerticalSmallSegment: string;
                    tabPaddingVerticalMediumSegment: string;
                    tabGapSmallSegment: string;
                    tabGapMediumSegment: string;
                    tabGapLargeSegment: string;
                    panePaddingSmall: string;
                    panePaddingMedium: string;
                    panePaddingLarge: string;
                    closeSize: string;
                    closeIconSize: string;
                },
                any
            >
        >;
        readonly themeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Tabs',
                    {
                        colorSegment: string;
                        tabFontSizeCard: string;
                        tabTextColorLine: string;
                        tabTextColorActiveLine: string;
                        tabTextColorHoverLine: string;
                        tabTextColorDisabledLine: string;
                        tabTextColorSegment: string;
                        tabTextColorActiveSegment: string;
                        tabTextColorHoverSegment: string;
                        tabTextColorDisabledSegment: string;
                        tabTextColorBar: string;
                        tabTextColorActiveBar: string;
                        tabTextColorHoverBar: string;
                        tabTextColorDisabledBar: string;
                        tabTextColorCard: string;
                        tabTextColorHoverCard: string;
                        tabTextColorActiveCard: string;
                        tabTextColorDisabledCard: string;
                        barColor: string;
                        closeIconColor: string;
                        closeIconColorHover: string;
                        closeIconColorPressed: string;
                        closeColorHover: string;
                        closeColorPressed: string;
                        closeBorderRadius: string;
                        tabColor: string;
                        tabColorSegment: string;
                        tabBorderColor: string;
                        tabFontWeightActive: string;
                        tabFontWeight: string;
                        tabBorderRadius: string;
                        paneTextColor: string;
                        fontWeightStrong: string;
                        tabFontSizeSmall: string;
                        tabFontSizeMedium: string;
                        tabFontSizeLarge: string;
                        tabGapSmallLine: string;
                        tabGapMediumLine: string;
                        tabGapLargeLine: string;
                        tabPaddingSmallLine: string;
                        tabPaddingMediumLine: string;
                        tabPaddingLargeLine: string;
                        tabPaddingVerticalSmallLine: string;
                        tabPaddingVerticalMediumLine: string;
                        tabPaddingVerticalLargeLine: string;
                        tabGapSmallBar: string;
                        tabGapMediumBar: string;
                        tabGapLargeBar: string;
                        tabPaddingSmallBar: string;
                        tabPaddingMediumBar: string;
                        tabPaddingLargeBar: string;
                        tabPaddingVerticalSmallBar: string;
                        tabPaddingVerticalMediumBar: string;
                        tabPaddingVerticalLargeBar: string;
                        tabGapSmallCard: string;
                        tabGapMediumCard: string;
                        tabGapLargeCard: string;
                        tabPaddingSmallCard: string;
                        tabPaddingMediumCard: string;
                        tabPaddingLargeCard: string;
                        tabPaddingSmallSegment: string;
                        tabPaddingMediumSegment: string;
                        tabPaddingLargeSegment: string;
                        tabPaddingVerticalLargeSegment: string;
                        tabPaddingVerticalSmallCard: string;
                        tabPaddingVerticalMediumCard: string;
                        tabPaddingVerticalLargeCard: string;
                        tabPaddingVerticalSmallSegment: string;
                        tabPaddingVerticalMediumSegment: string;
                        tabGapSmallSegment: string;
                        tabGapMediumSegment: string;
                        tabGapLargeSegment: string;
                        panePaddingSmall: string;
                        panePaddingMedium: string;
                        panePaddingLarge: string;
                        closeSize: string;
                        closeIconSize: string;
                    },
                    any
                >
            >
        >;
        readonly builtinThemeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Tabs',
                    {
                        colorSegment: string;
                        tabFontSizeCard: string;
                        tabTextColorLine: string;
                        tabTextColorActiveLine: string;
                        tabTextColorHoverLine: string;
                        tabTextColorDisabledLine: string;
                        tabTextColorSegment: string;
                        tabTextColorActiveSegment: string;
                        tabTextColorHoverSegment: string;
                        tabTextColorDisabledSegment: string;
                        tabTextColorBar: string;
                        tabTextColorActiveBar: string;
                        tabTextColorHoverBar: string;
                        tabTextColorDisabledBar: string;
                        tabTextColorCard: string;
                        tabTextColorHoverCard: string;
                        tabTextColorActiveCard: string;
                        tabTextColorDisabledCard: string;
                        barColor: string;
                        closeIconColor: string;
                        closeIconColorHover: string;
                        closeIconColorPressed: string;
                        closeColorHover: string;
                        closeColorPressed: string;
                        closeBorderRadius: string;
                        tabColor: string;
                        tabColorSegment: string;
                        tabBorderColor: string;
                        tabFontWeightActive: string;
                        tabFontWeight: string;
                        tabBorderRadius: string;
                        paneTextColor: string;
                        fontWeightStrong: string;
                        tabFontSizeSmall: string;
                        tabFontSizeMedium: string;
                        tabFontSizeLarge: string;
                        tabGapSmallLine: string;
                        tabGapMediumLine: string;
                        tabGapLargeLine: string;
                        tabPaddingSmallLine: string;
                        tabPaddingMediumLine: string;
                        tabPaddingLargeLine: string;
                        tabPaddingVerticalSmallLine: string;
                        tabPaddingVerticalMediumLine: string;
                        tabPaddingVerticalLargeLine: string;
                        tabGapSmallBar: string;
                        tabGapMediumBar: string;
                        tabGapLargeBar: string;
                        tabPaddingSmallBar: string;
                        tabPaddingMediumBar: string;
                        tabPaddingLargeBar: string;
                        tabPaddingVerticalSmallBar: string;
                        tabPaddingVerticalMediumBar: string;
                        tabPaddingVerticalLargeBar: string;
                        tabGapSmallCard: string;
                        tabGapMediumCard: string;
                        tabGapLargeCard: string;
                        tabPaddingSmallCard: string;
                        tabPaddingMediumCard: string;
                        tabPaddingLargeCard: string;
                        tabPaddingSmallSegment: string;
                        tabPaddingMediumSegment: string;
                        tabPaddingLargeSegment: string;
                        tabPaddingVerticalLargeSegment: string;
                        tabPaddingVerticalSmallCard: string;
                        tabPaddingVerticalMediumCard: string;
                        tabPaddingVerticalLargeCard: string;
                        tabPaddingVerticalSmallSegment: string;
                        tabPaddingVerticalMediumSegment: string;
                        tabGapSmallSegment: string;
                        tabGapMediumSegment: string;
                        tabGapLargeSegment: string;
                        panePaddingSmall: string;
                        panePaddingMedium: string;
                        panePaddingLarge: string;
                        closeSize: string;
                        closeIconSize: string;
                    },
                    any
                >
            >
        >;
    },
    {
        syncBarPosition: () => void;
        mergedClsPrefix: globalThis.ComputedRef<string>;
        mergedValue: globalThis.ComputedRef<string | number | null>;
        renderedNames: Set<NonNullable<string | number>>;
        tabsRailElRef: globalThis.Ref<HTMLElement | null>;
        tabsPaneWrapperRef: globalThis.Ref<HTMLElement | null>;
        tabsElRef: globalThis.Ref<HTMLElement | null>;
        barElRef: globalThis.Ref<HTMLElement | null>;
        addTabInstRef: globalThis.Ref<ComponentPublicInstance<
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            false,
            import('vue').ComponentOptionsBase<
                any,
                any,
                any,
                any,
                any,
                any,
                any,
                any,
                any,
                {},
                {},
                string,
                {}
            >,
            {},
            {}
        > | null>;
        xScrollInstRef: globalThis.Ref<
            | (VXScrollInst & {
                  $: import('vue').ComponentInternalInstance;
                  $data: {};
                  $props: {};
                  $attrs: {
                      [x: string]: unknown;
                  };
                  $refs: {
                      [x: string]: unknown;
                  };
                  $slots: Readonly<{
                      [name: string]: import('vue').Slot<any> | undefined;
                  }>;
                  $root: ComponentPublicInstance<
                      {},
                      {},
                      {},
                      {},
                      {},
                      {},
                      {},
                      {},
                      false,
                      import('vue').ComponentOptionsBase<
                          any,
                          any,
                          any,
                          any,
                          any,
                          any,
                          any,
                          any,
                          any,
                          {},
                          {},
                          string,
                          {}
                      >,
                      {},
                      {}
                  > | null;
                  $parent: ComponentPublicInstance<
                      {},
                      {},
                      {},
                      {},
                      {},
                      {},
                      {},
                      {},
                      false,
                      import('vue').ComponentOptionsBase<
                          any,
                          any,
                          any,
                          any,
                          any,
                          any,
                          any,
                          any,
                          any,
                          {},
                          {},
                          string,
                          {}
                      >,
                      {},
                      {}
                  > | null;
                  $emit: (event: string, ...args: any[]) => void;
                  $el: any;
                  $options: import('vue').ComponentOptionsBase<
                      any,
                      any,
                      any,
                      any,
                      any,
                      any,
                      any,
                      any,
                      any,
                      {},
                      {},
                      string,
                      {}
                  > & {
                      beforeCreate?:
                          | ((() => void) | (() => void)[])
                          | undefined;
                      created?: ((() => void) | (() => void)[]) | undefined;
                      beforeMount?: ((() => void) | (() => void)[]) | undefined;
                      mounted?: ((() => void) | (() => void)[]) | undefined;
                      beforeUpdate?:
                          | ((() => void) | (() => void)[])
                          | undefined;
                      updated?: ((() => void) | (() => void)[]) | undefined;
                      activated?: ((() => void) | (() => void)[]) | undefined;
                      deactivated?: ((() => void) | (() => void)[]) | undefined;
                      beforeDestroy?:
                          | ((() => void) | (() => void)[])
                          | undefined;
                      beforeUnmount?:
                          | ((() => void) | (() => void)[])
                          | undefined;
                      destroyed?: ((() => void) | (() => void)[]) | undefined;
                      unmounted?: ((() => void) | (() => void)[]) | undefined;
                      renderTracked?:
                          | (
                                | ((e: import('vue').DebuggerEvent) => void)
                                | ((e: import('vue').DebuggerEvent) => void)[]
                            )
                          | undefined;
                      renderTriggered?:
                          | (
                                | ((e: import('vue').DebuggerEvent) => void)
                                | ((e: import('vue').DebuggerEvent) => void)[]
                            )
                          | undefined;
                      errorCaptured?:
                          | (
                                | ((
                                      err: unknown,
                                      instance: ComponentPublicInstance<
                                          {},
                                          {},
                                          {},
                                          {},
                                          {},
                                          {},
                                          {},
                                          {},
                                          false,
                                          import('vue').ComponentOptionsBase<
                                              any,
                                              any,
                                              any,
                                              any,
                                              any,
                                              any,
                                              any,
                                              any,
                                              any,
                                              {},
                                              {},
                                              string,
                                              {}
                                          >,
                                          {},
                                          {}
                                      > | null,
                                      info: string
                                  ) => boolean | void)
                                | ((
                                      err: unknown,
                                      instance: ComponentPublicInstance<
                                          {},
                                          {},
                                          {},
                                          {},
                                          {},
                                          {},
                                          {},
                                          {},
                                          false,
                                          import('vue').ComponentOptionsBase<
                                              any,
                                              any,
                                              any,
                                              any,
                                              any,
                                              any,
                                              any,
                                              any,
                                              any,
                                              {},
                                              {},
                                              string,
                                              {}
                                          >,
                                          {},
                                          {}
                                      > | null,
                                      info: string
                                  ) => boolean | void)[]
                            )
                          | undefined;
                  };
                  $forceUpdate: () => void;
                  $nextTick: typeof nextTick;
                  $watch<T extends string | ((...args: any) => any)>(
                      source: T,
                      cb: T extends (...args: any) => infer R
                          ? (args_0: R, args_1: R) => any
                          : (...args: any) => any,
                      options?: import('vue').WatchOptions<boolean> | undefined
                  ): import('vue').WatchStopHandle;
              } & import('vue').ShallowUnwrapRef<{}> & {} & import('vue').ComponentCustomProperties & {})
            | null
        >;
        scrollWrapperElRef: globalThis.Ref<HTMLElement | null>;
        addTabFixed: globalThis.Ref<boolean>;
        tabWrapperStyle: globalThis.ComputedRef<
            | {
                  display: string;
                  justifyContent:
                      | 'start'
                      | 'end'
                      | 'space-around'
                      | 'space-between'
                      | 'space-evenly'
                      | 'center';
              }
            | undefined
        >;
        handleNavResize: import('lodash').DebouncedFunc<
            (entry: ResizeObserverEntry) => void
        >;
        mergedSize: globalThis.ComputedRef<'small' | 'medium' | 'large'>;
        handleScroll: import('lodash').DebouncedFunc<(e: Event) => void>;
        handleTabsResize: import('lodash').DebouncedFunc<
            (entry: ResizeObserverEntry) => void
        >;
        cssVars:
            | globalThis.ComputedRef<{
                  '--n-bezier': string;
                  '--n-color-segment': string;
                  '--n-bar-color': string;
                  '--n-tab-font-size': string;
                  '--n-tab-text-color': string;
                  '--n-tab-text-color-active': string;
                  '--n-tab-text-color-disabled': string;
                  '--n-tab-text-color-hover': string;
                  '--n-pane-text-color': string;
                  '--n-tab-border-color': string;
                  '--n-tab-border-radius': string;
                  '--n-close-size': string;
                  '--n-close-icon-size': string;
                  '--n-close-color-hover': string;
                  '--n-close-color-pressed': string;
                  '--n-close-border-radius': string;
                  '--n-close-icon-color': string;
                  '--n-close-icon-color-hover': string;
                  '--n-close-icon-color-pressed': string;
                  '--n-tab-color': string;
                  '--n-tab-font-weight': string;
                  '--n-tab-font-weight-active': string;
                  '--n-tab-padding': string;
                  '--n-tab-padding-vertical': string;
                  '--n-tab-gap': string;
                  '--n-pane-padding': string;
                  '--n-font-weight-strong': string;
                  '--n-tab-color-segment': string;
              }>
            | undefined;
        themeClass: globalThis.Ref<string> | undefined;
        animationDirection: globalThis.Ref<'prev' | 'next'>;
        renderNameListRef: {
            value: Array<string | number>;
        };
        onAnimationBeforeLeave: (el: HTMLElement) => void;
        onAnimationEnter: (el: HTMLElement) => void;
        onAnimationAfterEnter: () => void;
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
        ExtractPropTypes<{
            readonly value: PropType<string | number>;
            readonly defaultValue: PropType<string | number>;
            readonly trigger: {
                readonly type: PropType<'click' | 'hover'>;
                readonly default: 'click';
            };
            readonly type: {
                readonly type: PropType<TabsType>;
                readonly default: 'bar';
            };
            readonly closable: BooleanConstructor;
            readonly justifyContent: PropType<
                | 'start'
                | 'end'
                | 'space-around'
                | 'space-between'
                | 'space-evenly'
                | 'center'
            >;
            readonly size: {
                readonly type: PropType<'small' | 'medium' | 'large'>;
                readonly default: 'medium';
            };
            readonly placement: {
                readonly type: PropType<'left' | 'right' | 'bottom' | 'top'>;
                readonly default: 'top';
            };
            readonly tabStyle: PropType<string | CSSProperties>;
            readonly barWidth: NumberConstructor;
            readonly paneClass: StringConstructor;
            readonly paneStyle: PropType<string | CSSProperties>;
            readonly addable: PropType<Addable>;
            readonly tabsPadding: {
                readonly type: NumberConstructor;
                readonly default: 0;
            };
            readonly animated: BooleanConstructor;
            readonly onBeforeLeave: PropType<OnBeforeLeave>;
            readonly onAdd: PropType<() => void>;
            readonly 'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>;
            readonly onUpdateValue: PropType<MaybeArray<OnUpdateValue>>;
            readonly onClose: PropType<MaybeArray<OnClose>>;
            readonly labelSize: PropType<'small' | 'medium' | 'large'>;
            readonly activeName: PropType<string | number>;
            readonly onActiveNameChange: PropType<
                MaybeArray<(value: never) => void>
            >;
            readonly theme: PropType<
                import('../../_mixins').Theme<
                    'Tabs',
                    {
                        colorSegment: string;
                        tabFontSizeCard: string;
                        tabTextColorLine: string;
                        tabTextColorActiveLine: string;
                        tabTextColorHoverLine: string;
                        tabTextColorDisabledLine: string;
                        tabTextColorSegment: string;
                        tabTextColorActiveSegment: string;
                        tabTextColorHoverSegment: string;
                        tabTextColorDisabledSegment: string;
                        tabTextColorBar: string;
                        tabTextColorActiveBar: string;
                        tabTextColorHoverBar: string;
                        tabTextColorDisabledBar: string;
                        tabTextColorCard: string;
                        tabTextColorHoverCard: string;
                        tabTextColorActiveCard: string;
                        tabTextColorDisabledCard: string;
                        barColor: string;
                        closeIconColor: string;
                        closeIconColorHover: string;
                        closeIconColorPressed: string;
                        closeColorHover: string;
                        closeColorPressed: string;
                        closeBorderRadius: string;
                        tabColor: string;
                        tabColorSegment: string;
                        tabBorderColor: string;
                        tabFontWeightActive: string;
                        tabFontWeight: string;
                        tabBorderRadius: string;
                        paneTextColor: string;
                        fontWeightStrong: string;
                        tabFontSizeSmall: string;
                        tabFontSizeMedium: string;
                        tabFontSizeLarge: string;
                        tabGapSmallLine: string;
                        tabGapMediumLine: string;
                        tabGapLargeLine: string;
                        tabPaddingSmallLine: string;
                        tabPaddingMediumLine: string;
                        tabPaddingLargeLine: string;
                        tabPaddingVerticalSmallLine: string;
                        tabPaddingVerticalMediumLine: string;
                        tabPaddingVerticalLargeLine: string;
                        tabGapSmallBar: string;
                        tabGapMediumBar: string;
                        tabGapLargeBar: string;
                        tabPaddingSmallBar: string;
                        tabPaddingMediumBar: string;
                        tabPaddingLargeBar: string;
                        tabPaddingVerticalSmallBar: string;
                        tabPaddingVerticalMediumBar: string;
                        tabPaddingVerticalLargeBar: string;
                        tabGapSmallCard: string;
                        tabGapMediumCard: string;
                        tabGapLargeCard: string;
                        tabPaddingSmallCard: string;
                        tabPaddingMediumCard: string;
                        tabPaddingLargeCard: string;
                        tabPaddingSmallSegment: string;
                        tabPaddingMediumSegment: string;
                        tabPaddingLargeSegment: string;
                        tabPaddingVerticalLargeSegment: string;
                        tabPaddingVerticalSmallCard: string;
                        tabPaddingVerticalMediumCard: string;
                        tabPaddingVerticalLargeCard: string;
                        tabPaddingVerticalSmallSegment: string;
                        tabPaddingVerticalMediumSegment: string;
                        tabGapSmallSegment: string;
                        tabGapMediumSegment: string;
                        tabGapLargeSegment: string;
                        panePaddingSmall: string;
                        panePaddingMedium: string;
                        panePaddingLarge: string;
                        closeSize: string;
                        closeIconSize: string;
                    },
                    any
                >
            >;
            readonly themeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Tabs',
                        {
                            colorSegment: string;
                            tabFontSizeCard: string;
                            tabTextColorLine: string;
                            tabTextColorActiveLine: string;
                            tabTextColorHoverLine: string;
                            tabTextColorDisabledLine: string;
                            tabTextColorSegment: string;
                            tabTextColorActiveSegment: string;
                            tabTextColorHoverSegment: string;
                            tabTextColorDisabledSegment: string;
                            tabTextColorBar: string;
                            tabTextColorActiveBar: string;
                            tabTextColorHoverBar: string;
                            tabTextColorDisabledBar: string;
                            tabTextColorCard: string;
                            tabTextColorHoverCard: string;
                            tabTextColorActiveCard: string;
                            tabTextColorDisabledCard: string;
                            barColor: string;
                            closeIconColor: string;
                            closeIconColorHover: string;
                            closeIconColorPressed: string;
                            closeColorHover: string;
                            closeColorPressed: string;
                            closeBorderRadius: string;
                            tabColor: string;
                            tabColorSegment: string;
                            tabBorderColor: string;
                            tabFontWeightActive: string;
                            tabFontWeight: string;
                            tabBorderRadius: string;
                            paneTextColor: string;
                            fontWeightStrong: string;
                            tabFontSizeSmall: string;
                            tabFontSizeMedium: string;
                            tabFontSizeLarge: string;
                            tabGapSmallLine: string;
                            tabGapMediumLine: string;
                            tabGapLargeLine: string;
                            tabPaddingSmallLine: string;
                            tabPaddingMediumLine: string;
                            tabPaddingLargeLine: string;
                            tabPaddingVerticalSmallLine: string;
                            tabPaddingVerticalMediumLine: string;
                            tabPaddingVerticalLargeLine: string;
                            tabGapSmallBar: string;
                            tabGapMediumBar: string;
                            tabGapLargeBar: string;
                            tabPaddingSmallBar: string;
                            tabPaddingMediumBar: string;
                            tabPaddingLargeBar: string;
                            tabPaddingVerticalSmallBar: string;
                            tabPaddingVerticalMediumBar: string;
                            tabPaddingVerticalLargeBar: string;
                            tabGapSmallCard: string;
                            tabGapMediumCard: string;
                            tabGapLargeCard: string;
                            tabPaddingSmallCard: string;
                            tabPaddingMediumCard: string;
                            tabPaddingLargeCard: string;
                            tabPaddingSmallSegment: string;
                            tabPaddingMediumSegment: string;
                            tabPaddingLargeSegment: string;
                            tabPaddingVerticalLargeSegment: string;
                            tabPaddingVerticalSmallCard: string;
                            tabPaddingVerticalMediumCard: string;
                            tabPaddingVerticalLargeCard: string;
                            tabPaddingVerticalSmallSegment: string;
                            tabPaddingVerticalMediumSegment: string;
                            tabGapSmallSegment: string;
                            tabGapMediumSegment: string;
                            tabGapLargeSegment: string;
                            panePaddingSmall: string;
                            panePaddingMedium: string;
                            panePaddingLarge: string;
                            closeSize: string;
                            closeIconSize: string;
                        },
                        any
                    >
                >
            >;
            readonly builtinThemeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Tabs',
                        {
                            colorSegment: string;
                            tabFontSizeCard: string;
                            tabTextColorLine: string;
                            tabTextColorActiveLine: string;
                            tabTextColorHoverLine: string;
                            tabTextColorDisabledLine: string;
                            tabTextColorSegment: string;
                            tabTextColorActiveSegment: string;
                            tabTextColorHoverSegment: string;
                            tabTextColorDisabledSegment: string;
                            tabTextColorBar: string;
                            tabTextColorActiveBar: string;
                            tabTextColorHoverBar: string;
                            tabTextColorDisabledBar: string;
                            tabTextColorCard: string;
                            tabTextColorHoverCard: string;
                            tabTextColorActiveCard: string;
                            tabTextColorDisabledCard: string;
                            barColor: string;
                            closeIconColor: string;
                            closeIconColorHover: string;
                            closeIconColorPressed: string;
                            closeColorHover: string;
                            closeColorPressed: string;
                            closeBorderRadius: string;
                            tabColor: string;
                            tabColorSegment: string;
                            tabBorderColor: string;
                            tabFontWeightActive: string;
                            tabFontWeight: string;
                            tabBorderRadius: string;
                            paneTextColor: string;
                            fontWeightStrong: string;
                            tabFontSizeSmall: string;
                            tabFontSizeMedium: string;
                            tabFontSizeLarge: string;
                            tabGapSmallLine: string;
                            tabGapMediumLine: string;
                            tabGapLargeLine: string;
                            tabPaddingSmallLine: string;
                            tabPaddingMediumLine: string;
                            tabPaddingLargeLine: string;
                            tabPaddingVerticalSmallLine: string;
                            tabPaddingVerticalMediumLine: string;
                            tabPaddingVerticalLargeLine: string;
                            tabGapSmallBar: string;
                            tabGapMediumBar: string;
                            tabGapLargeBar: string;
                            tabPaddingSmallBar: string;
                            tabPaddingMediumBar: string;
                            tabPaddingLargeBar: string;
                            tabPaddingVerticalSmallBar: string;
                            tabPaddingVerticalMediumBar: string;
                            tabPaddingVerticalLargeBar: string;
                            tabGapSmallCard: string;
                            tabGapMediumCard: string;
                            tabGapLargeCard: string;
                            tabPaddingSmallCard: string;
                            tabPaddingMediumCard: string;
                            tabPaddingLargeCard: string;
                            tabPaddingSmallSegment: string;
                            tabPaddingMediumSegment: string;
                            tabPaddingLargeSegment: string;
                            tabPaddingVerticalLargeSegment: string;
                            tabPaddingVerticalSmallCard: string;
                            tabPaddingVerticalMediumCard: string;
                            tabPaddingVerticalLargeCard: string;
                            tabPaddingVerticalSmallSegment: string;
                            tabPaddingVerticalMediumSegment: string;
                            tabGapSmallSegment: string;
                            tabGapMediumSegment: string;
                            tabGapLargeSegment: string;
                            panePaddingSmall: string;
                            panePaddingMedium: string;
                            panePaddingLarge: string;
                            closeSize: string;
                            closeIconSize: string;
                        },
                        any
                    >
                >
            >;
        }>
    >,
    {
        readonly type: TabsType;
        readonly size: 'small' | 'medium' | 'large';
        readonly closable: boolean;
        readonly placement: 'left' | 'right' | 'bottom' | 'top';
        readonly trigger: 'click' | 'hover';
        readonly animated: boolean;
        readonly tabsPadding: number;
    },
    {}
>;
export default _default;
