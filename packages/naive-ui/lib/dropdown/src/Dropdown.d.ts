import { PropType, Ref } from 'vue';
import { Key, TreeNode } from 'treemate';
import { FollowerPlacement } from 'vueuc';
import { MaybeArray, ExtractPublicPropTypes } from '../../_utils';
import {
    DropdownMixedOption,
    OnUpdateValue,
    OnUpdateValueImpl,
    RenderLabel,
    RenderIcon,
    RenderLabelImpl,
    RenderIconImpl,
    RenderOption,
    NodeProps,
    RenderOptionImpl,
    DropdownMenuProps,
} from './interface';
export interface DropdownInjection {
    renderLabelRef: Ref<RenderLabelImpl | undefined>;
    renderIconRef: Ref<RenderIconImpl | undefined>;
    renderOptionRef: Ref<RenderOptionImpl | undefined>;
    menuPropsRef: Ref<DropdownMenuProps | undefined>;
    nodePropsRef: Ref<NodeProps | undefined>;
    hoverKeyRef: Ref<Key | null>;
    keyboardKeyRef: Ref<Key | null>;
    lastToggledSubmenuKeyRef: Ref<Key | null>;
    pendingKeyPathRef: Ref<Key[]>;
    activeKeyPathRef: Ref<Key[]>;
    animatedRef: Ref<boolean>;
    mergedShowRef: Ref<boolean>;
    labelFieldRef: Ref<string>;
    childrenFieldRef: Ref<string>;
    doSelect: OnUpdateValueImpl;
    doUpdateShow: (value: boolean) => void;
}
export declare const dropdownProps: {
    readonly theme: PropType<
        import('../../_mixins').Theme<
            'Dropdown',
            {
                optionHeightSmall: string;
                optionHeightMedium: string;
                optionHeightLarge: string;
                optionHeightHuge: string;
                borderRadius: string;
                fontSizeSmall: string;
                fontSizeMedium: string;
                fontSizeLarge: string;
                fontSizeHuge: string;
                optionTextColor: string;
                optionTextColorHover: string;
                optionTextColorActive: string;
                optionTextColorChildActive: string;
                color: string;
                dividerColor: string;
                suffixColor: string;
                prefixColor: string;
                optionColorHover: string;
                optionColorActive: string;
                groupHeaderTextColor: string;
                optionTextColorInverted: string;
                optionTextColorHoverInverted: string;
                optionTextColorActiveInverted: string;
                optionTextColorChildActiveInverted: string;
                colorInverted: string;
                dividerColorInverted: string;
                suffixColorInverted: string;
                prefixColorInverted: string;
                optionColorHoverInverted: string;
                optionColorActiveInverted: string;
                groupHeaderTextColorInverted: string;
                optionOpacityDisabled: string;
                padding: string;
                optionIconSizeSmall: string;
                optionIconSizeMedium: string;
                optionIconSizeLarge: string;
                optionIconSizeHuge: string;
                optionSuffixWidthSmall: string;
                optionSuffixWidthMedium: string;
                optionSuffixWidthLarge: string;
                optionSuffixWidthHuge: string;
                optionIconSuffixWidthSmall: string;
                optionIconSuffixWidthMedium: string;
                optionIconSuffixWidthLarge: string;
                optionIconSuffixWidthHuge: string;
                optionPrefixWidthSmall: string;
                optionPrefixWidthMedium: string;
                optionPrefixWidthLarge: string;
                optionPrefixWidthHuge: string;
                optionIconPrefixWidthSmall: string;
                optionIconPrefixWidthMedium: string;
                optionIconPrefixWidthLarge: string;
                optionIconPrefixWidthHuge: string;
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
        >
    >;
    readonly themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Dropdown',
                {
                    optionHeightSmall: string;
                    optionHeightMedium: string;
                    optionHeightLarge: string;
                    optionHeightHuge: string;
                    borderRadius: string;
                    fontSizeSmall: string;
                    fontSizeMedium: string;
                    fontSizeLarge: string;
                    fontSizeHuge: string;
                    optionTextColor: string;
                    optionTextColorHover: string;
                    optionTextColorActive: string;
                    optionTextColorChildActive: string;
                    color: string;
                    dividerColor: string;
                    suffixColor: string;
                    prefixColor: string;
                    optionColorHover: string;
                    optionColorActive: string;
                    groupHeaderTextColor: string;
                    optionTextColorInverted: string;
                    optionTextColorHoverInverted: string;
                    optionTextColorActiveInverted: string;
                    optionTextColorChildActiveInverted: string;
                    colorInverted: string;
                    dividerColorInverted: string;
                    suffixColorInverted: string;
                    prefixColorInverted: string;
                    optionColorHoverInverted: string;
                    optionColorActiveInverted: string;
                    groupHeaderTextColorInverted: string;
                    optionOpacityDisabled: string;
                    padding: string;
                    optionIconSizeSmall: string;
                    optionIconSizeMedium: string;
                    optionIconSizeLarge: string;
                    optionIconSizeHuge: string;
                    optionSuffixWidthSmall: string;
                    optionSuffixWidthMedium: string;
                    optionSuffixWidthLarge: string;
                    optionSuffixWidthHuge: string;
                    optionIconSuffixWidthSmall: string;
                    optionIconSuffixWidthMedium: string;
                    optionIconSuffixWidthLarge: string;
                    optionIconSuffixWidthHuge: string;
                    optionPrefixWidthSmall: string;
                    optionPrefixWidthMedium: string;
                    optionPrefixWidthLarge: string;
                    optionPrefixWidthHuge: string;
                    optionIconPrefixWidthSmall: string;
                    optionIconPrefixWidthMedium: string;
                    optionIconPrefixWidthLarge: string;
                    optionIconPrefixWidthHuge: string;
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
            >
        >
    >;
    readonly builtinThemeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Dropdown',
                {
                    optionHeightSmall: string;
                    optionHeightMedium: string;
                    optionHeightLarge: string;
                    optionHeightHuge: string;
                    borderRadius: string;
                    fontSizeSmall: string;
                    fontSizeMedium: string;
                    fontSizeLarge: string;
                    fontSizeHuge: string;
                    optionTextColor: string;
                    optionTextColorHover: string;
                    optionTextColorActive: string;
                    optionTextColorChildActive: string;
                    color: string;
                    dividerColor: string;
                    suffixColor: string;
                    prefixColor: string;
                    optionColorHover: string;
                    optionColorActive: string;
                    groupHeaderTextColor: string;
                    optionTextColorInverted: string;
                    optionTextColorHoverInverted: string;
                    optionTextColorActiveInverted: string;
                    optionTextColorChildActiveInverted: string;
                    colorInverted: string;
                    dividerColorInverted: string;
                    suffixColorInverted: string;
                    prefixColorInverted: string;
                    optionColorHoverInverted: string;
                    optionColorActiveInverted: string;
                    groupHeaderTextColorInverted: string;
                    optionOpacityDisabled: string;
                    padding: string;
                    optionIconSizeSmall: string;
                    optionIconSizeMedium: string;
                    optionIconSizeLarge: string;
                    optionIconSizeHuge: string;
                    optionSuffixWidthSmall: string;
                    optionSuffixWidthMedium: string;
                    optionSuffixWidthLarge: string;
                    optionSuffixWidthHuge: string;
                    optionIconSuffixWidthSmall: string;
                    optionIconSuffixWidthMedium: string;
                    optionIconSuffixWidthLarge: string;
                    optionIconSuffixWidthHuge: string;
                    optionPrefixWidthSmall: string;
                    optionPrefixWidthMedium: string;
                    optionPrefixWidthLarge: string;
                    optionPrefixWidthHuge: string;
                    optionIconPrefixWidthSmall: string;
                    optionIconPrefixWidthMedium: string;
                    optionIconPrefixWidthLarge: string;
                    optionIconPrefixWidthHuge: string;
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
            >
        >
    >;
    readonly animated: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly keyboard: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly size: {
        readonly type: PropType<'small' | 'medium' | 'large' | 'huge'>;
        readonly default: 'medium';
    };
    readonly inverted: BooleanConstructor;
    readonly placement: {
        readonly type: PropType<FollowerPlacement>;
        readonly default: 'bottom';
    };
    readonly onSelect: PropType<MaybeArray<OnUpdateValue>>;
    readonly options: {
        readonly type: PropType<DropdownMixedOption[]>;
        readonly default: () => never[];
    };
    readonly menuProps: PropType<DropdownMenuProps>;
    readonly showArrow: BooleanConstructor;
    readonly renderLabel: PropType<RenderLabel>;
    readonly renderIcon: PropType<RenderIcon>;
    readonly renderOption: PropType<RenderOption>;
    readonly nodeProps: PropType<import('../..').MenuNodeProps>;
    readonly labelField: {
        readonly type: StringConstructor;
        readonly default: 'label';
    };
    readonly keyField: {
        readonly type: StringConstructor;
        readonly default: 'key';
    };
    readonly childrenField: {
        readonly type: StringConstructor;
        readonly default: 'children';
    };
    readonly value: PropType<Key | null>;
    readonly show: {
        type: PropType<boolean | undefined>;
        default: undefined;
    };
    readonly defaultShow: BooleanConstructor;
    readonly trigger: {
        type: PropType<import('../../popover').PopoverTrigger>;
        default: string;
    };
    readonly delay: {
        type: NumberConstructor;
        default: number;
    };
    readonly duration: {
        type: NumberConstructor;
        default: number;
    };
    readonly raw: BooleanConstructor;
    readonly x: NumberConstructor;
    readonly y: NumberConstructor;
    readonly arrowPointToCenter: BooleanConstructor;
    readonly disabled: BooleanConstructor;
    readonly getDisabled: PropType<() => boolean>;
    readonly displayDirective: {
        type: PropType<'show' | 'if'>;
        default: string;
    };
    readonly arrowStyle: PropType<string | import('vue').CSSProperties>;
    readonly flip: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly width: {
        type: PropType<number | 'trigger'>;
        default: undefined;
    };
    readonly overlap: BooleanConstructor;
    readonly keepAliveOnHover: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly zIndex: NumberConstructor;
    readonly to: {
        type: PropType<string | boolean | HTMLElement>;
        default: undefined;
    };
    readonly scrollable: BooleanConstructor;
    readonly contentStyle: PropType<string | import('vue').CSSProperties>;
    readonly headerStyle: PropType<string | import('vue').CSSProperties>;
    readonly footerStyle: PropType<string | import('vue').CSSProperties>;
    readonly onClickoutside: PropType<(e: MouseEvent) => void>;
    readonly 'onUpdate:show': PropType<MaybeArray<(value: boolean) => void>>;
    readonly onUpdateShow: PropType<MaybeArray<(value: boolean) => void>>;
    readonly internalDeactivateImmediately: BooleanConstructor;
    readonly internalSyncTargetWithParent: BooleanConstructor;
    readonly internalInheritedEventHandlers: {
        type: PropType<
            import('../../popover/src/Popover').TriggerEventHandlers[]
        >;
        default: () => never[];
    };
    readonly internalTrapFocus: BooleanConstructor;
    readonly internalExtraClass: {
        type: PropType<string[]>;
        default: () => never[];
    };
    readonly onShow: PropType<MaybeArray<(value: boolean) => void> | undefined>;
    readonly onHide: PropType<MaybeArray<(value: boolean) => void> | undefined>;
    readonly arrow: {
        type: PropType<boolean | undefined>;
        default: undefined;
    };
    readonly minWidth: NumberConstructor;
    readonly maxWidth: NumberConstructor;
};
export type DropdownProps = ExtractPublicPropTypes<typeof dropdownProps>;
declare const _default: import('vue').DefineComponent<
    {
        readonly theme: PropType<
            import('../../_mixins').Theme<
                'Dropdown',
                {
                    optionHeightSmall: string;
                    optionHeightMedium: string;
                    optionHeightLarge: string;
                    optionHeightHuge: string;
                    borderRadius: string;
                    fontSizeSmall: string;
                    fontSizeMedium: string;
                    fontSizeLarge: string;
                    fontSizeHuge: string;
                    optionTextColor: string;
                    optionTextColorHover: string;
                    optionTextColorActive: string;
                    optionTextColorChildActive: string;
                    color: string;
                    dividerColor: string;
                    suffixColor: string;
                    prefixColor: string;
                    optionColorHover: string;
                    optionColorActive: string;
                    groupHeaderTextColor: string;
                    optionTextColorInverted: string;
                    optionTextColorHoverInverted: string;
                    optionTextColorActiveInverted: string;
                    optionTextColorChildActiveInverted: string;
                    colorInverted: string;
                    dividerColorInverted: string;
                    suffixColorInverted: string;
                    prefixColorInverted: string;
                    optionColorHoverInverted: string;
                    optionColorActiveInverted: string;
                    groupHeaderTextColorInverted: string;
                    optionOpacityDisabled: string;
                    padding: string;
                    optionIconSizeSmall: string;
                    optionIconSizeMedium: string;
                    optionIconSizeLarge: string;
                    optionIconSizeHuge: string;
                    optionSuffixWidthSmall: string;
                    optionSuffixWidthMedium: string;
                    optionSuffixWidthLarge: string;
                    optionSuffixWidthHuge: string;
                    optionIconSuffixWidthSmall: string;
                    optionIconSuffixWidthMedium: string;
                    optionIconSuffixWidthLarge: string;
                    optionIconSuffixWidthHuge: string;
                    optionPrefixWidthSmall: string;
                    optionPrefixWidthMedium: string;
                    optionPrefixWidthLarge: string;
                    optionPrefixWidthHuge: string;
                    optionIconPrefixWidthSmall: string;
                    optionIconPrefixWidthMedium: string;
                    optionIconPrefixWidthLarge: string;
                    optionIconPrefixWidthHuge: string;
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
            >
        >;
        readonly themeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Dropdown',
                    {
                        optionHeightSmall: string;
                        optionHeightMedium: string;
                        optionHeightLarge: string;
                        optionHeightHuge: string;
                        borderRadius: string;
                        fontSizeSmall: string;
                        fontSizeMedium: string;
                        fontSizeLarge: string;
                        fontSizeHuge: string;
                        optionTextColor: string;
                        optionTextColorHover: string;
                        optionTextColorActive: string;
                        optionTextColorChildActive: string;
                        color: string;
                        dividerColor: string;
                        suffixColor: string;
                        prefixColor: string;
                        optionColorHover: string;
                        optionColorActive: string;
                        groupHeaderTextColor: string;
                        optionTextColorInverted: string;
                        optionTextColorHoverInverted: string;
                        optionTextColorActiveInverted: string;
                        optionTextColorChildActiveInverted: string;
                        colorInverted: string;
                        dividerColorInverted: string;
                        suffixColorInverted: string;
                        prefixColorInverted: string;
                        optionColorHoverInverted: string;
                        optionColorActiveInverted: string;
                        groupHeaderTextColorInverted: string;
                        optionOpacityDisabled: string;
                        padding: string;
                        optionIconSizeSmall: string;
                        optionIconSizeMedium: string;
                        optionIconSizeLarge: string;
                        optionIconSizeHuge: string;
                        optionSuffixWidthSmall: string;
                        optionSuffixWidthMedium: string;
                        optionSuffixWidthLarge: string;
                        optionSuffixWidthHuge: string;
                        optionIconSuffixWidthSmall: string;
                        optionIconSuffixWidthMedium: string;
                        optionIconSuffixWidthLarge: string;
                        optionIconSuffixWidthHuge: string;
                        optionPrefixWidthSmall: string;
                        optionPrefixWidthMedium: string;
                        optionPrefixWidthLarge: string;
                        optionPrefixWidthHuge: string;
                        optionIconPrefixWidthSmall: string;
                        optionIconPrefixWidthMedium: string;
                        optionIconPrefixWidthLarge: string;
                        optionIconPrefixWidthHuge: string;
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
                >
            >
        >;
        readonly builtinThemeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Dropdown',
                    {
                        optionHeightSmall: string;
                        optionHeightMedium: string;
                        optionHeightLarge: string;
                        optionHeightHuge: string;
                        borderRadius: string;
                        fontSizeSmall: string;
                        fontSizeMedium: string;
                        fontSizeLarge: string;
                        fontSizeHuge: string;
                        optionTextColor: string;
                        optionTextColorHover: string;
                        optionTextColorActive: string;
                        optionTextColorChildActive: string;
                        color: string;
                        dividerColor: string;
                        suffixColor: string;
                        prefixColor: string;
                        optionColorHover: string;
                        optionColorActive: string;
                        groupHeaderTextColor: string;
                        optionTextColorInverted: string;
                        optionTextColorHoverInverted: string;
                        optionTextColorActiveInverted: string;
                        optionTextColorChildActiveInverted: string;
                        colorInverted: string;
                        dividerColorInverted: string;
                        suffixColorInverted: string;
                        prefixColorInverted: string;
                        optionColorHoverInverted: string;
                        optionColorActiveInverted: string;
                        groupHeaderTextColorInverted: string;
                        optionOpacityDisabled: string;
                        padding: string;
                        optionIconSizeSmall: string;
                        optionIconSizeMedium: string;
                        optionIconSizeLarge: string;
                        optionIconSizeHuge: string;
                        optionSuffixWidthSmall: string;
                        optionSuffixWidthMedium: string;
                        optionSuffixWidthLarge: string;
                        optionSuffixWidthHuge: string;
                        optionIconSuffixWidthSmall: string;
                        optionIconSuffixWidthMedium: string;
                        optionIconSuffixWidthLarge: string;
                        optionIconSuffixWidthHuge: string;
                        optionPrefixWidthSmall: string;
                        optionPrefixWidthMedium: string;
                        optionPrefixWidthLarge: string;
                        optionPrefixWidthHuge: string;
                        optionIconPrefixWidthSmall: string;
                        optionIconPrefixWidthMedium: string;
                        optionIconPrefixWidthLarge: string;
                        optionIconPrefixWidthHuge: string;
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
                >
            >
        >;
        readonly animated: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly keyboard: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly size: {
            readonly type: PropType<'small' | 'medium' | 'large' | 'huge'>;
            readonly default: 'medium';
        };
        readonly inverted: BooleanConstructor;
        readonly placement: {
            readonly type: PropType<FollowerPlacement>;
            readonly default: 'bottom';
        };
        readonly onSelect: PropType<MaybeArray<OnUpdateValue>>;
        readonly options: {
            readonly type: PropType<DropdownMixedOption[]>;
            readonly default: () => never[];
        };
        readonly menuProps: PropType<DropdownMenuProps>;
        readonly showArrow: BooleanConstructor;
        readonly renderLabel: PropType<RenderLabel>;
        readonly renderIcon: PropType<RenderIcon>;
        readonly renderOption: PropType<RenderOption>;
        readonly nodeProps: PropType<import('../..').MenuNodeProps>;
        readonly labelField: {
            readonly type: StringConstructor;
            readonly default: 'label';
        };
        readonly keyField: {
            readonly type: StringConstructor;
            readonly default: 'key';
        };
        readonly childrenField: {
            readonly type: StringConstructor;
            readonly default: 'children';
        };
        readonly value: PropType<Key | null>;
        readonly show: {
            type: PropType<boolean | undefined>;
            default: undefined;
        };
        readonly defaultShow: BooleanConstructor;
        readonly trigger: {
            type: PropType<import('../../popover').PopoverTrigger>;
            default: string;
        };
        readonly delay: {
            type: NumberConstructor;
            default: number;
        };
        readonly duration: {
            type: NumberConstructor;
            default: number;
        };
        readonly raw: BooleanConstructor;
        readonly x: NumberConstructor;
        readonly y: NumberConstructor;
        readonly arrowPointToCenter: BooleanConstructor;
        readonly disabled: BooleanConstructor;
        readonly getDisabled: PropType<() => boolean>;
        readonly displayDirective: {
            type: PropType<'show' | 'if'>;
            default: string;
        };
        readonly arrowStyle: PropType<string | import('vue').CSSProperties>;
        readonly flip: {
            type: BooleanConstructor;
            default: boolean;
        };
        readonly width: {
            type: PropType<number | 'trigger'>;
            default: undefined;
        };
        readonly overlap: BooleanConstructor;
        readonly keepAliveOnHover: {
            type: BooleanConstructor;
            default: boolean;
        };
        readonly zIndex: NumberConstructor;
        readonly to: {
            type: PropType<string | boolean | HTMLElement>;
            default: undefined;
        };
        readonly scrollable: BooleanConstructor;
        readonly contentStyle: PropType<string | import('vue').CSSProperties>;
        readonly headerStyle: PropType<string | import('vue').CSSProperties>;
        readonly footerStyle: PropType<string | import('vue').CSSProperties>;
        readonly onClickoutside: PropType<(e: MouseEvent) => void>;
        readonly 'onUpdate:show': PropType<
            MaybeArray<(value: boolean) => void>
        >;
        readonly onUpdateShow: PropType<MaybeArray<(value: boolean) => void>>;
        readonly internalDeactivateImmediately: BooleanConstructor;
        readonly internalSyncTargetWithParent: BooleanConstructor;
        readonly internalInheritedEventHandlers: {
            type: PropType<
                import('../../popover/src/Popover').TriggerEventHandlers[]
            >;
            default: () => never[];
        };
        readonly internalTrapFocus: BooleanConstructor;
        readonly internalExtraClass: {
            type: PropType<string[]>;
            default: () => never[];
        };
        readonly onShow: PropType<
            MaybeArray<(value: boolean) => void> | undefined
        >;
        readonly onHide: PropType<
            MaybeArray<(value: boolean) => void> | undefined
        >;
        readonly arrow: {
            type: PropType<boolean | undefined>;
            default: undefined;
        };
        readonly minWidth: NumberConstructor;
        readonly maxWidth: NumberConstructor;
    },
    {
        mergedClsPrefix: globalThis.ComputedRef<string>;
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
                optionHeightSmall: string;
                optionHeightMedium: string;
                optionHeightLarge: string;
                optionHeightHuge: string;
                borderRadius: string;
                fontSizeSmall: string;
                fontSizeMedium: string;
                fontSizeLarge: string;
                fontSizeHuge: string;
                optionTextColor: string;
                optionTextColorHover: string;
                optionTextColorActive: string;
                optionTextColorChildActive: string;
                color: string;
                dividerColor: string;
                suffixColor: string;
                prefixColor: string;
                optionColorHover: string;
                optionColorActive: string;
                groupHeaderTextColor: string;
                optionTextColorInverted: string;
                optionTextColorHoverInverted: string;
                optionTextColorActiveInverted: string;
                optionTextColorChildActiveInverted: string;
                colorInverted: string;
                dividerColorInverted: string;
                suffixColorInverted: string;
                prefixColorInverted: string;
                optionColorHoverInverted: string;
                optionColorActiveInverted: string;
                groupHeaderTextColorInverted: string;
                optionOpacityDisabled: string;
                padding: string;
                optionIconSizeSmall: string;
                optionIconSizeMedium: string;
                optionIconSizeLarge: string;
                optionIconSizeHuge: string;
                optionSuffixWidthSmall: string;
                optionSuffixWidthMedium: string;
                optionSuffixWidthLarge: string;
                optionSuffixWidthHuge: string;
                optionIconSuffixWidthSmall: string;
                optionIconSuffixWidthMedium: string;
                optionIconSuffixWidthLarge: string;
                optionIconSuffixWidthHuge: string;
                optionPrefixWidthSmall: string;
                optionPrefixWidthMedium: string;
                optionPrefixWidthLarge: string;
                optionPrefixWidthHuge: string;
                optionIconPrefixWidthSmall: string;
                optionIconPrefixWidthMedium: string;
                optionIconPrefixWidthLarge: string;
                optionIconPrefixWidthHuge: string;
            };
            peers: {
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
            };
            peerOverrides: {
                Popover?:
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
        tmNodes: globalThis.ComputedRef<
            TreeNode<
                | import('../..').MenuOption
                | import('../../menu/src/interface').MenuRenderOption,
                import('../..').MenuGroupOption,
                import('../../menu/src/interface').MenuIgnoredOption
            >[]
        >;
        mergedShow: globalThis.ComputedRef<boolean>;
        handleAfterLeave: () => void;
        doUpdateShow: (value: boolean) => void;
        cssVars: globalThis.ComputedRef<any> | undefined;
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
            readonly theme: PropType<
                import('../../_mixins').Theme<
                    'Dropdown',
                    {
                        optionHeightSmall: string;
                        optionHeightMedium: string;
                        optionHeightLarge: string;
                        optionHeightHuge: string;
                        borderRadius: string;
                        fontSizeSmall: string;
                        fontSizeMedium: string;
                        fontSizeLarge: string;
                        fontSizeHuge: string;
                        optionTextColor: string;
                        optionTextColorHover: string;
                        optionTextColorActive: string;
                        optionTextColorChildActive: string;
                        color: string;
                        dividerColor: string;
                        suffixColor: string;
                        prefixColor: string;
                        optionColorHover: string;
                        optionColorActive: string;
                        groupHeaderTextColor: string;
                        optionTextColorInverted: string;
                        optionTextColorHoverInverted: string;
                        optionTextColorActiveInverted: string;
                        optionTextColorChildActiveInverted: string;
                        colorInverted: string;
                        dividerColorInverted: string;
                        suffixColorInverted: string;
                        prefixColorInverted: string;
                        optionColorHoverInverted: string;
                        optionColorActiveInverted: string;
                        groupHeaderTextColorInverted: string;
                        optionOpacityDisabled: string;
                        padding: string;
                        optionIconSizeSmall: string;
                        optionIconSizeMedium: string;
                        optionIconSizeLarge: string;
                        optionIconSizeHuge: string;
                        optionSuffixWidthSmall: string;
                        optionSuffixWidthMedium: string;
                        optionSuffixWidthLarge: string;
                        optionSuffixWidthHuge: string;
                        optionIconSuffixWidthSmall: string;
                        optionIconSuffixWidthMedium: string;
                        optionIconSuffixWidthLarge: string;
                        optionIconSuffixWidthHuge: string;
                        optionPrefixWidthSmall: string;
                        optionPrefixWidthMedium: string;
                        optionPrefixWidthLarge: string;
                        optionPrefixWidthHuge: string;
                        optionIconPrefixWidthSmall: string;
                        optionIconPrefixWidthMedium: string;
                        optionIconPrefixWidthLarge: string;
                        optionIconPrefixWidthHuge: string;
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
                >
            >;
            readonly themeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Dropdown',
                        {
                            optionHeightSmall: string;
                            optionHeightMedium: string;
                            optionHeightLarge: string;
                            optionHeightHuge: string;
                            borderRadius: string;
                            fontSizeSmall: string;
                            fontSizeMedium: string;
                            fontSizeLarge: string;
                            fontSizeHuge: string;
                            optionTextColor: string;
                            optionTextColorHover: string;
                            optionTextColorActive: string;
                            optionTextColorChildActive: string;
                            color: string;
                            dividerColor: string;
                            suffixColor: string;
                            prefixColor: string;
                            optionColorHover: string;
                            optionColorActive: string;
                            groupHeaderTextColor: string;
                            optionTextColorInverted: string;
                            optionTextColorHoverInverted: string;
                            optionTextColorActiveInverted: string;
                            optionTextColorChildActiveInverted: string;
                            colorInverted: string;
                            dividerColorInverted: string;
                            suffixColorInverted: string;
                            prefixColorInverted: string;
                            optionColorHoverInverted: string;
                            optionColorActiveInverted: string;
                            groupHeaderTextColorInverted: string;
                            optionOpacityDisabled: string;
                            padding: string;
                            optionIconSizeSmall: string;
                            optionIconSizeMedium: string;
                            optionIconSizeLarge: string;
                            optionIconSizeHuge: string;
                            optionSuffixWidthSmall: string;
                            optionSuffixWidthMedium: string;
                            optionSuffixWidthLarge: string;
                            optionSuffixWidthHuge: string;
                            optionIconSuffixWidthSmall: string;
                            optionIconSuffixWidthMedium: string;
                            optionIconSuffixWidthLarge: string;
                            optionIconSuffixWidthHuge: string;
                            optionPrefixWidthSmall: string;
                            optionPrefixWidthMedium: string;
                            optionPrefixWidthLarge: string;
                            optionPrefixWidthHuge: string;
                            optionIconPrefixWidthSmall: string;
                            optionIconPrefixWidthMedium: string;
                            optionIconPrefixWidthLarge: string;
                            optionIconPrefixWidthHuge: string;
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
                    >
                >
            >;
            readonly builtinThemeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Dropdown',
                        {
                            optionHeightSmall: string;
                            optionHeightMedium: string;
                            optionHeightLarge: string;
                            optionHeightHuge: string;
                            borderRadius: string;
                            fontSizeSmall: string;
                            fontSizeMedium: string;
                            fontSizeLarge: string;
                            fontSizeHuge: string;
                            optionTextColor: string;
                            optionTextColorHover: string;
                            optionTextColorActive: string;
                            optionTextColorChildActive: string;
                            color: string;
                            dividerColor: string;
                            suffixColor: string;
                            prefixColor: string;
                            optionColorHover: string;
                            optionColorActive: string;
                            groupHeaderTextColor: string;
                            optionTextColorInverted: string;
                            optionTextColorHoverInverted: string;
                            optionTextColorActiveInverted: string;
                            optionTextColorChildActiveInverted: string;
                            colorInverted: string;
                            dividerColorInverted: string;
                            suffixColorInverted: string;
                            prefixColorInverted: string;
                            optionColorHoverInverted: string;
                            optionColorActiveInverted: string;
                            groupHeaderTextColorInverted: string;
                            optionOpacityDisabled: string;
                            padding: string;
                            optionIconSizeSmall: string;
                            optionIconSizeMedium: string;
                            optionIconSizeLarge: string;
                            optionIconSizeHuge: string;
                            optionSuffixWidthSmall: string;
                            optionSuffixWidthMedium: string;
                            optionSuffixWidthLarge: string;
                            optionSuffixWidthHuge: string;
                            optionIconSuffixWidthSmall: string;
                            optionIconSuffixWidthMedium: string;
                            optionIconSuffixWidthLarge: string;
                            optionIconSuffixWidthHuge: string;
                            optionPrefixWidthSmall: string;
                            optionPrefixWidthMedium: string;
                            optionPrefixWidthLarge: string;
                            optionPrefixWidthHuge: string;
                            optionIconPrefixWidthSmall: string;
                            optionIconPrefixWidthMedium: string;
                            optionIconPrefixWidthLarge: string;
                            optionIconPrefixWidthHuge: string;
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
                    >
                >
            >;
            readonly animated: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            readonly keyboard: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            readonly size: {
                readonly type: PropType<'small' | 'medium' | 'large' | 'huge'>;
                readonly default: 'medium';
            };
            readonly inverted: BooleanConstructor;
            readonly placement: {
                readonly type: PropType<FollowerPlacement>;
                readonly default: 'bottom';
            };
            readonly onSelect: PropType<MaybeArray<OnUpdateValue>>;
            readonly options: {
                readonly type: PropType<DropdownMixedOption[]>;
                readonly default: () => never[];
            };
            readonly menuProps: PropType<DropdownMenuProps>;
            readonly showArrow: BooleanConstructor;
            readonly renderLabel: PropType<RenderLabel>;
            readonly renderIcon: PropType<RenderIcon>;
            readonly renderOption: PropType<RenderOption>;
            readonly nodeProps: PropType<import('../..').MenuNodeProps>;
            readonly labelField: {
                readonly type: StringConstructor;
                readonly default: 'label';
            };
            readonly keyField: {
                readonly type: StringConstructor;
                readonly default: 'key';
            };
            readonly childrenField: {
                readonly type: StringConstructor;
                readonly default: 'children';
            };
            readonly value: PropType<Key | null>;
            readonly show: {
                type: PropType<boolean | undefined>;
                default: undefined;
            };
            readonly defaultShow: BooleanConstructor;
            readonly trigger: {
                type: PropType<import('../../popover').PopoverTrigger>;
                default: string;
            };
            readonly delay: {
                type: NumberConstructor;
                default: number;
            };
            readonly duration: {
                type: NumberConstructor;
                default: number;
            };
            readonly raw: BooleanConstructor;
            readonly x: NumberConstructor;
            readonly y: NumberConstructor;
            readonly arrowPointToCenter: BooleanConstructor;
            readonly disabled: BooleanConstructor;
            readonly getDisabled: PropType<() => boolean>;
            readonly displayDirective: {
                type: PropType<'show' | 'if'>;
                default: string;
            };
            readonly arrowStyle: PropType<string | import('vue').CSSProperties>;
            readonly flip: {
                type: BooleanConstructor;
                default: boolean;
            };
            readonly width: {
                type: PropType<number | 'trigger'>;
                default: undefined;
            };
            readonly overlap: BooleanConstructor;
            readonly keepAliveOnHover: {
                type: BooleanConstructor;
                default: boolean;
            };
            readonly zIndex: NumberConstructor;
            readonly to: {
                type: PropType<string | boolean | HTMLElement>;
                default: undefined;
            };
            readonly scrollable: BooleanConstructor;
            readonly contentStyle: PropType<
                string | import('vue').CSSProperties
            >;
            readonly headerStyle: PropType<
                string | import('vue').CSSProperties
            >;
            readonly footerStyle: PropType<
                string | import('vue').CSSProperties
            >;
            readonly onClickoutside: PropType<(e: MouseEvent) => void>;
            readonly 'onUpdate:show': PropType<
                MaybeArray<(value: boolean) => void>
            >;
            readonly onUpdateShow: PropType<
                MaybeArray<(value: boolean) => void>
            >;
            readonly internalDeactivateImmediately: BooleanConstructor;
            readonly internalSyncTargetWithParent: BooleanConstructor;
            readonly internalInheritedEventHandlers: {
                type: PropType<
                    import('../../popover/src/Popover').TriggerEventHandlers[]
                >;
                default: () => never[];
            };
            readonly internalTrapFocus: BooleanConstructor;
            readonly internalExtraClass: {
                type: PropType<string[]>;
                default: () => never[];
            };
            readonly onShow: PropType<
                MaybeArray<(value: boolean) => void> | undefined
            >;
            readonly onHide: PropType<
                MaybeArray<(value: boolean) => void> | undefined
            >;
            readonly arrow: {
                type: PropType<boolean | undefined>;
                default: undefined;
            };
            readonly minWidth: NumberConstructor;
            readonly maxWidth: NumberConstructor;
        }>
    >,
    {
        readonly size: 'small' | 'medium' | 'large' | 'huge';
        readonly show: boolean | undefined;
        readonly flip: boolean;
        readonly width: number | 'trigger';
        readonly disabled: boolean;
        readonly duration: number;
        readonly to: string | boolean | HTMLElement;
        readonly options: DropdownMixedOption[];
        readonly raw: boolean;
        readonly placement: FollowerPlacement;
        readonly overlap: boolean;
        readonly keyField: string;
        readonly scrollable: boolean;
        readonly trigger: import('../../popover').PopoverTrigger;
        readonly labelField: string;
        readonly showArrow: boolean;
        readonly delay: number;
        readonly arrowPointToCenter: boolean;
        readonly displayDirective: 'show' | 'if';
        readonly keepAliveOnHover: boolean;
        readonly internalDeactivateImmediately: boolean;
        readonly animated: boolean;
        readonly internalTrapFocus: boolean;
        readonly defaultShow: boolean;
        readonly internalSyncTargetWithParent: boolean;
        readonly internalInheritedEventHandlers: import('../../popover/src/Popover').TriggerEventHandlers[];
        readonly internalExtraClass: string[];
        readonly arrow: boolean | undefined;
        readonly keyboard: boolean;
        readonly childrenField: string;
        readonly inverted: boolean;
    },
    {}
>;
export default _default;
