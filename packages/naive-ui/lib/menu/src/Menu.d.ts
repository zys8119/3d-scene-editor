import { PropType, ExtractPropTypes, VNodeChild } from 'vue';
import { Key } from 'treemate';
import { FollowerPlacement } from 'vueuc';
import { DropdownProps } from '../../dropdown';
import type { MaybeArray } from '../../_utils';
import {
    MenuOption,
    MenuGroupOption,
    MenuIgnoredOption,
    MenuMixedOption,
    OnUpdateValue,
    OnUpdateKeys,
    MenuNodeProps,
} from './interface';
export declare const menuProps: {
    readonly options: {
        readonly type: PropType<MenuMixedOption[]>;
        readonly default: () => never[];
    };
    readonly collapsed: {
        readonly type: PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly collapsedWidth: {
        readonly type: NumberConstructor;
        readonly default: 48;
    };
    readonly iconSize: {
        readonly type: NumberConstructor;
        readonly default: 20;
    };
    readonly collapsedIconSize: {
        readonly type: NumberConstructor;
        readonly default: 24;
    };
    readonly rootIndent: NumberConstructor;
    readonly indent: {
        readonly type: NumberConstructor;
        readonly default: 32;
    };
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
    readonly disabledField: {
        readonly type: StringConstructor;
        readonly default: 'disabled';
    };
    readonly defaultExpandAll: BooleanConstructor;
    readonly defaultExpandedKeys: PropType<Key[]>;
    readonly expandedKeys: PropType<Key[]>;
    readonly value: PropType<Key | null>;
    readonly defaultValue: {
        readonly type: PropType<Key | null>;
        readonly default: null;
    };
    readonly mode: {
        readonly type: PropType<'horizontal' | 'vertical'>;
        readonly default: 'vertical';
    };
    readonly watchProps: {
        readonly type: PropType<('defaultValue' | 'defaultExpandedKeys')[]>;
        readonly default: undefined;
    };
    readonly disabled: BooleanConstructor;
    readonly show: {
        readonly type: BooleanConstructor;
        readonly defalut: true;
    };
    readonly inverted: BooleanConstructor;
    readonly 'onUpdate:expandedKeys': PropType<MaybeArray<OnUpdateKeys>>;
    readonly onUpdateExpandedKeys: PropType<MaybeArray<OnUpdateKeys>>;
    readonly onUpdateValue: PropType<MaybeArray<OnUpdateValue>>;
    readonly 'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>;
    readonly expandIcon: PropType<(option: MenuOption) => VNodeChild>;
    readonly renderIcon: PropType<(option: MenuOption) => VNodeChild>;
    readonly renderLabel: PropType<
        (option: MenuOption | MenuGroupOption) => VNodeChild
    >;
    readonly renderExtra: PropType<
        (option: MenuOption | MenuGroupOption) => VNodeChild
    >;
    readonly dropdownProps: PropType<DropdownProps>;
    readonly accordion: BooleanConstructor;
    readonly nodeProps: PropType<MenuNodeProps>;
    readonly items: PropType<(MenuOption | MenuGroupOption)[]>;
    readonly onOpenNamesChange: PropType<MaybeArray<OnUpdateKeys>>;
    readonly onSelect: PropType<MaybeArray<OnUpdateValue>>;
    readonly onExpandedNamesChange: PropType<MaybeArray<OnUpdateKeys>>;
    readonly expandedNames: PropType<Key[]>;
    readonly defaultExpandedNames: PropType<Key[]>;
    readonly dropdownPlacement: {
        readonly type: PropType<FollowerPlacement>;
        readonly default: 'bottom';
    };
    readonly theme: PropType<
        import('../../_mixins').Theme<
            'Menu',
            {
                itemColorHoverInverted: string;
                itemColorActiveInverted: string;
                itemColorActiveHoverInverted: string;
                itemColorActiveCollapsedInverted: string;
                itemTextColorInverted: string;
                itemTextColorHoverInverted: string;
                itemTextColorChildActiveInverted: string;
                itemTextColorChildActiveHoverInverted: string;
                itemTextColorActiveInverted: string;
                itemTextColorActiveHoverInverted: string;
                itemTextColorHorizontalInverted: string;
                itemTextColorHoverHorizontalInverted: string;
                itemTextColorChildActiveHorizontalInverted: string;
                itemTextColorChildActiveHoverHorizontalInverted: string;
                itemTextColorActiveHorizontalInverted: string;
                itemTextColorActiveHoverHorizontalInverted: string;
                itemIconColorInverted: string;
                itemIconColorHoverInverted: string;
                itemIconColorActiveInverted: string;
                itemIconColorActiveHoverInverted: string;
                itemIconColorChildActiveInverted: string;
                itemIconColorChildActiveHoverInverted: string;
                itemIconColorCollapsedInverted: string;
                itemIconColorHorizontalInverted: string;
                itemIconColorHoverHorizontalInverted: string;
                itemIconColorActiveHorizontalInverted: string;
                itemIconColorActiveHoverHorizontalInverted: string;
                itemIconColorChildActiveHorizontalInverted: string;
                itemIconColorChildActiveHoverHorizontalInverted: string;
                arrowColorInverted: string;
                arrowColorHoverInverted: string;
                arrowColorActiveInverted: string;
                arrowColorActiveHoverInverted: string;
                arrowColorChildActiveInverted: string;
                arrowColorChildActiveHoverInverted: string;
                groupTextColorInverted: string;
                borderRadius: string;
                color: string;
                groupTextColor: string;
                itemColorHover: string;
                itemColorActive: string;
                itemColorActiveHover: string;
                itemColorActiveCollapsed: string;
                itemTextColor: string;
                itemTextColorHover: string;
                itemTextColorActive: string;
                itemTextColorActiveHover: string;
                itemTextColorChildActive: string;
                itemTextColorChildActiveHover: string;
                itemTextColorHorizontal: string;
                itemTextColorHoverHorizontal: string;
                itemTextColorActiveHorizontal: string;
                itemTextColorActiveHoverHorizontal: string;
                itemTextColorChildActiveHorizontal: string;
                itemTextColorChildActiveHoverHorizontal: string;
                itemIconColor: string;
                itemIconColorHover: string;
                itemIconColorActive: string;
                itemIconColorActiveHover: string;
                itemIconColorChildActive: string;
                itemIconColorChildActiveHover: string;
                itemIconColorCollapsed: string;
                itemIconColorHorizontal: string;
                itemIconColorHoverHorizontal: string;
                itemIconColorActiveHorizontal: string;
                itemIconColorActiveHoverHorizontal: string;
                itemIconColorChildActiveHorizontal: string;
                itemIconColorChildActiveHoverHorizontal: string;
                itemHeight: string;
                arrowColor: string;
                arrowColorHover: string;
                arrowColorActive: string;
                arrowColorActiveHover: string;
                arrowColorChildActive: string;
                arrowColorChildActiveHover: string;
                colorInverted: string;
                borderColorHorizontal: string;
                fontSize: string;
                dividerColor: string;
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
                Dropdown: import('../../_mixins').Theme<
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
                >;
            }
        >
    >;
    readonly themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Menu',
                {
                    itemColorHoverInverted: string;
                    itemColorActiveInverted: string;
                    itemColorActiveHoverInverted: string;
                    itemColorActiveCollapsedInverted: string;
                    itemTextColorInverted: string;
                    itemTextColorHoverInverted: string;
                    itemTextColorChildActiveInverted: string;
                    itemTextColorChildActiveHoverInverted: string;
                    itemTextColorActiveInverted: string;
                    itemTextColorActiveHoverInverted: string;
                    itemTextColorHorizontalInverted: string;
                    itemTextColorHoverHorizontalInverted: string;
                    itemTextColorChildActiveHorizontalInverted: string;
                    itemTextColorChildActiveHoverHorizontalInverted: string;
                    itemTextColorActiveHorizontalInverted: string;
                    itemTextColorActiveHoverHorizontalInverted: string;
                    itemIconColorInverted: string;
                    itemIconColorHoverInverted: string;
                    itemIconColorActiveInverted: string;
                    itemIconColorActiveHoverInverted: string;
                    itemIconColorChildActiveInverted: string;
                    itemIconColorChildActiveHoverInverted: string;
                    itemIconColorCollapsedInverted: string;
                    itemIconColorHorizontalInverted: string;
                    itemIconColorHoverHorizontalInverted: string;
                    itemIconColorActiveHorizontalInverted: string;
                    itemIconColorActiveHoverHorizontalInverted: string;
                    itemIconColorChildActiveHorizontalInverted: string;
                    itemIconColorChildActiveHoverHorizontalInverted: string;
                    arrowColorInverted: string;
                    arrowColorHoverInverted: string;
                    arrowColorActiveInverted: string;
                    arrowColorActiveHoverInverted: string;
                    arrowColorChildActiveInverted: string;
                    arrowColorChildActiveHoverInverted: string;
                    groupTextColorInverted: string;
                    borderRadius: string;
                    color: string;
                    groupTextColor: string;
                    itemColorHover: string;
                    itemColorActive: string;
                    itemColorActiveHover: string;
                    itemColorActiveCollapsed: string;
                    itemTextColor: string;
                    itemTextColorHover: string;
                    itemTextColorActive: string;
                    itemTextColorActiveHover: string;
                    itemTextColorChildActive: string;
                    itemTextColorChildActiveHover: string;
                    itemTextColorHorizontal: string;
                    itemTextColorHoverHorizontal: string;
                    itemTextColorActiveHorizontal: string;
                    itemTextColorActiveHoverHorizontal: string;
                    itemTextColorChildActiveHorizontal: string;
                    itemTextColorChildActiveHoverHorizontal: string;
                    itemIconColor: string;
                    itemIconColorHover: string;
                    itemIconColorActive: string;
                    itemIconColorActiveHover: string;
                    itemIconColorChildActive: string;
                    itemIconColorChildActiveHover: string;
                    itemIconColorCollapsed: string;
                    itemIconColorHorizontal: string;
                    itemIconColorHoverHorizontal: string;
                    itemIconColorActiveHorizontal: string;
                    itemIconColorActiveHoverHorizontal: string;
                    itemIconColorChildActiveHorizontal: string;
                    itemIconColorChildActiveHoverHorizontal: string;
                    itemHeight: string;
                    arrowColor: string;
                    arrowColorHover: string;
                    arrowColorActive: string;
                    arrowColorActiveHover: string;
                    arrowColorChildActive: string;
                    arrowColorChildActiveHover: string;
                    colorInverted: string;
                    borderColorHorizontal: string;
                    fontSize: string;
                    dividerColor: string;
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
                    Dropdown: import('../../_mixins').Theme<
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
                    >;
                }
            >
        >
    >;
    readonly builtinThemeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Menu',
                {
                    itemColorHoverInverted: string;
                    itemColorActiveInverted: string;
                    itemColorActiveHoverInverted: string;
                    itemColorActiveCollapsedInverted: string;
                    itemTextColorInverted: string;
                    itemTextColorHoverInverted: string;
                    itemTextColorChildActiveInverted: string;
                    itemTextColorChildActiveHoverInverted: string;
                    itemTextColorActiveInverted: string;
                    itemTextColorActiveHoverInverted: string;
                    itemTextColorHorizontalInverted: string;
                    itemTextColorHoverHorizontalInverted: string;
                    itemTextColorChildActiveHorizontalInverted: string;
                    itemTextColorChildActiveHoverHorizontalInverted: string;
                    itemTextColorActiveHorizontalInverted: string;
                    itemTextColorActiveHoverHorizontalInverted: string;
                    itemIconColorInverted: string;
                    itemIconColorHoverInverted: string;
                    itemIconColorActiveInverted: string;
                    itemIconColorActiveHoverInverted: string;
                    itemIconColorChildActiveInverted: string;
                    itemIconColorChildActiveHoverInverted: string;
                    itemIconColorCollapsedInverted: string;
                    itemIconColorHorizontalInverted: string;
                    itemIconColorHoverHorizontalInverted: string;
                    itemIconColorActiveHorizontalInverted: string;
                    itemIconColorActiveHoverHorizontalInverted: string;
                    itemIconColorChildActiveHorizontalInverted: string;
                    itemIconColorChildActiveHoverHorizontalInverted: string;
                    arrowColorInverted: string;
                    arrowColorHoverInverted: string;
                    arrowColorActiveInverted: string;
                    arrowColorActiveHoverInverted: string;
                    arrowColorChildActiveInverted: string;
                    arrowColorChildActiveHoverInverted: string;
                    groupTextColorInverted: string;
                    borderRadius: string;
                    color: string;
                    groupTextColor: string;
                    itemColorHover: string;
                    itemColorActive: string;
                    itemColorActiveHover: string;
                    itemColorActiveCollapsed: string;
                    itemTextColor: string;
                    itemTextColorHover: string;
                    itemTextColorActive: string;
                    itemTextColorActiveHover: string;
                    itemTextColorChildActive: string;
                    itemTextColorChildActiveHover: string;
                    itemTextColorHorizontal: string;
                    itemTextColorHoverHorizontal: string;
                    itemTextColorActiveHorizontal: string;
                    itemTextColorActiveHoverHorizontal: string;
                    itemTextColorChildActiveHorizontal: string;
                    itemTextColorChildActiveHoverHorizontal: string;
                    itemIconColor: string;
                    itemIconColorHover: string;
                    itemIconColorActive: string;
                    itemIconColorActiveHover: string;
                    itemIconColorChildActive: string;
                    itemIconColorChildActiveHover: string;
                    itemIconColorCollapsed: string;
                    itemIconColorHorizontal: string;
                    itemIconColorHoverHorizontal: string;
                    itemIconColorActiveHorizontal: string;
                    itemIconColorActiveHoverHorizontal: string;
                    itemIconColorChildActiveHorizontal: string;
                    itemIconColorChildActiveHoverHorizontal: string;
                    itemHeight: string;
                    arrowColor: string;
                    arrowColorHover: string;
                    arrowColorActive: string;
                    arrowColorActiveHover: string;
                    arrowColorChildActive: string;
                    arrowColorChildActiveHover: string;
                    colorInverted: string;
                    borderColorHorizontal: string;
                    fontSize: string;
                    dividerColor: string;
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
                    Dropdown: import('../../_mixins').Theme<
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
                    >;
                }
            >
        >
    >;
};
export type MenuSetupProps = ExtractPropTypes<typeof menuProps>;
export type MenuProps = Partial<MenuSetupProps>;
declare const _default: import('vue').DefineComponent<
    {
        readonly options: {
            readonly type: PropType<MenuMixedOption[]>;
            readonly default: () => never[];
        };
        readonly collapsed: {
            readonly type: PropType<boolean | undefined>;
            readonly default: undefined;
        };
        readonly collapsedWidth: {
            readonly type: NumberConstructor;
            readonly default: 48;
        };
        readonly iconSize: {
            readonly type: NumberConstructor;
            readonly default: 20;
        };
        readonly collapsedIconSize: {
            readonly type: NumberConstructor;
            readonly default: 24;
        };
        readonly rootIndent: NumberConstructor;
        readonly indent: {
            readonly type: NumberConstructor;
            readonly default: 32;
        };
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
        readonly disabledField: {
            readonly type: StringConstructor;
            readonly default: 'disabled';
        };
        readonly defaultExpandAll: BooleanConstructor;
        readonly defaultExpandedKeys: PropType<Key[]>;
        readonly expandedKeys: PropType<Key[]>;
        readonly value: PropType<Key | null>;
        readonly defaultValue: {
            readonly type: PropType<Key | null>;
            readonly default: null;
        };
        readonly mode: {
            readonly type: PropType<'horizontal' | 'vertical'>;
            readonly default: 'vertical';
        };
        readonly watchProps: {
            readonly type: PropType<('defaultValue' | 'defaultExpandedKeys')[]>;
            readonly default: undefined;
        };
        readonly disabled: BooleanConstructor;
        readonly show: {
            readonly type: BooleanConstructor;
            readonly defalut: true;
        };
        readonly inverted: BooleanConstructor;
        readonly 'onUpdate:expandedKeys': PropType<MaybeArray<OnUpdateKeys>>;
        readonly onUpdateExpandedKeys: PropType<MaybeArray<OnUpdateKeys>>;
        readonly onUpdateValue: PropType<MaybeArray<OnUpdateValue>>;
        readonly 'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>;
        readonly expandIcon: PropType<(option: MenuOption) => VNodeChild>;
        readonly renderIcon: PropType<(option: MenuOption) => VNodeChild>;
        readonly renderLabel: PropType<
            (option: MenuOption | MenuGroupOption) => VNodeChild
        >;
        readonly renderExtra: PropType<
            (option: MenuOption | MenuGroupOption) => VNodeChild
        >;
        readonly dropdownProps: PropType<DropdownProps>;
        readonly accordion: BooleanConstructor;
        readonly nodeProps: PropType<MenuNodeProps>;
        readonly items: PropType<(MenuOption | MenuGroupOption)[]>;
        readonly onOpenNamesChange: PropType<MaybeArray<OnUpdateKeys>>;
        readonly onSelect: PropType<MaybeArray<OnUpdateValue>>;
        readonly onExpandedNamesChange: PropType<MaybeArray<OnUpdateKeys>>;
        readonly expandedNames: PropType<Key[]>;
        readonly defaultExpandedNames: PropType<Key[]>;
        readonly dropdownPlacement: {
            readonly type: PropType<FollowerPlacement>;
            readonly default: 'bottom';
        };
        readonly theme: PropType<
            import('../../_mixins').Theme<
                'Menu',
                {
                    itemColorHoverInverted: string;
                    itemColorActiveInverted: string;
                    itemColorActiveHoverInverted: string;
                    itemColorActiveCollapsedInverted: string;
                    itemTextColorInverted: string;
                    itemTextColorHoverInverted: string;
                    itemTextColorChildActiveInverted: string;
                    itemTextColorChildActiveHoverInverted: string;
                    itemTextColorActiveInverted: string;
                    itemTextColorActiveHoverInverted: string;
                    itemTextColorHorizontalInverted: string;
                    itemTextColorHoverHorizontalInverted: string;
                    itemTextColorChildActiveHorizontalInverted: string;
                    itemTextColorChildActiveHoverHorizontalInverted: string;
                    itemTextColorActiveHorizontalInverted: string;
                    itemTextColorActiveHoverHorizontalInverted: string;
                    itemIconColorInverted: string;
                    itemIconColorHoverInverted: string;
                    itemIconColorActiveInverted: string;
                    itemIconColorActiveHoverInverted: string;
                    itemIconColorChildActiveInverted: string;
                    itemIconColorChildActiveHoverInverted: string;
                    itemIconColorCollapsedInverted: string;
                    itemIconColorHorizontalInverted: string;
                    itemIconColorHoverHorizontalInverted: string;
                    itemIconColorActiveHorizontalInverted: string;
                    itemIconColorActiveHoverHorizontalInverted: string;
                    itemIconColorChildActiveHorizontalInverted: string;
                    itemIconColorChildActiveHoverHorizontalInverted: string;
                    arrowColorInverted: string;
                    arrowColorHoverInverted: string;
                    arrowColorActiveInverted: string;
                    arrowColorActiveHoverInverted: string;
                    arrowColorChildActiveInverted: string;
                    arrowColorChildActiveHoverInverted: string;
                    groupTextColorInverted: string;
                    borderRadius: string;
                    color: string;
                    groupTextColor: string;
                    itemColorHover: string;
                    itemColorActive: string;
                    itemColorActiveHover: string;
                    itemColorActiveCollapsed: string;
                    itemTextColor: string;
                    itemTextColorHover: string;
                    itemTextColorActive: string;
                    itemTextColorActiveHover: string;
                    itemTextColorChildActive: string;
                    itemTextColorChildActiveHover: string;
                    itemTextColorHorizontal: string;
                    itemTextColorHoverHorizontal: string;
                    itemTextColorActiveHorizontal: string;
                    itemTextColorActiveHoverHorizontal: string;
                    itemTextColorChildActiveHorizontal: string;
                    itemTextColorChildActiveHoverHorizontal: string;
                    itemIconColor: string;
                    itemIconColorHover: string;
                    itemIconColorActive: string;
                    itemIconColorActiveHover: string;
                    itemIconColorChildActive: string;
                    itemIconColorChildActiveHover: string;
                    itemIconColorCollapsed: string;
                    itemIconColorHorizontal: string;
                    itemIconColorHoverHorizontal: string;
                    itemIconColorActiveHorizontal: string;
                    itemIconColorActiveHoverHorizontal: string;
                    itemIconColorChildActiveHorizontal: string;
                    itemIconColorChildActiveHoverHorizontal: string;
                    itemHeight: string;
                    arrowColor: string;
                    arrowColorHover: string;
                    arrowColorActive: string;
                    arrowColorActiveHover: string;
                    arrowColorChildActive: string;
                    arrowColorChildActiveHover: string;
                    colorInverted: string;
                    borderColorHorizontal: string;
                    fontSize: string;
                    dividerColor: string;
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
                    Dropdown: import('../../_mixins').Theme<
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
                    >;
                }
            >
        >;
        readonly themeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Menu',
                    {
                        itemColorHoverInverted: string;
                        itemColorActiveInverted: string;
                        itemColorActiveHoverInverted: string;
                        itemColorActiveCollapsedInverted: string;
                        itemTextColorInverted: string;
                        itemTextColorHoverInverted: string;
                        itemTextColorChildActiveInverted: string;
                        itemTextColorChildActiveHoverInverted: string;
                        itemTextColorActiveInverted: string;
                        itemTextColorActiveHoverInverted: string;
                        itemTextColorHorizontalInverted: string;
                        itemTextColorHoverHorizontalInverted: string;
                        itemTextColorChildActiveHorizontalInverted: string;
                        itemTextColorChildActiveHoverHorizontalInverted: string;
                        itemTextColorActiveHorizontalInverted: string;
                        itemTextColorActiveHoverHorizontalInverted: string;
                        itemIconColorInverted: string;
                        itemIconColorHoverInverted: string;
                        itemIconColorActiveInverted: string;
                        itemIconColorActiveHoverInverted: string;
                        itemIconColorChildActiveInverted: string;
                        itemIconColorChildActiveHoverInverted: string;
                        itemIconColorCollapsedInverted: string;
                        itemIconColorHorizontalInverted: string;
                        itemIconColorHoverHorizontalInverted: string;
                        itemIconColorActiveHorizontalInverted: string;
                        itemIconColorActiveHoverHorizontalInverted: string;
                        itemIconColorChildActiveHorizontalInverted: string;
                        itemIconColorChildActiveHoverHorizontalInverted: string;
                        arrowColorInverted: string;
                        arrowColorHoverInverted: string;
                        arrowColorActiveInverted: string;
                        arrowColorActiveHoverInverted: string;
                        arrowColorChildActiveInverted: string;
                        arrowColorChildActiveHoverInverted: string;
                        groupTextColorInverted: string;
                        borderRadius: string;
                        color: string;
                        groupTextColor: string;
                        itemColorHover: string;
                        itemColorActive: string;
                        itemColorActiveHover: string;
                        itemColorActiveCollapsed: string;
                        itemTextColor: string;
                        itemTextColorHover: string;
                        itemTextColorActive: string;
                        itemTextColorActiveHover: string;
                        itemTextColorChildActive: string;
                        itemTextColorChildActiveHover: string;
                        itemTextColorHorizontal: string;
                        itemTextColorHoverHorizontal: string;
                        itemTextColorActiveHorizontal: string;
                        itemTextColorActiveHoverHorizontal: string;
                        itemTextColorChildActiveHorizontal: string;
                        itemTextColorChildActiveHoverHorizontal: string;
                        itemIconColor: string;
                        itemIconColorHover: string;
                        itemIconColorActive: string;
                        itemIconColorActiveHover: string;
                        itemIconColorChildActive: string;
                        itemIconColorChildActiveHover: string;
                        itemIconColorCollapsed: string;
                        itemIconColorHorizontal: string;
                        itemIconColorHoverHorizontal: string;
                        itemIconColorActiveHorizontal: string;
                        itemIconColorActiveHoverHorizontal: string;
                        itemIconColorChildActiveHorizontal: string;
                        itemIconColorChildActiveHoverHorizontal: string;
                        itemHeight: string;
                        arrowColor: string;
                        arrowColorHover: string;
                        arrowColorActive: string;
                        arrowColorActiveHover: string;
                        arrowColorChildActive: string;
                        arrowColorChildActiveHover: string;
                        colorInverted: string;
                        borderColorHorizontal: string;
                        fontSize: string;
                        dividerColor: string;
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
                        Dropdown: import('../../_mixins').Theme<
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
                        >;
                    }
                >
            >
        >;
        readonly builtinThemeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Menu',
                    {
                        itemColorHoverInverted: string;
                        itemColorActiveInverted: string;
                        itemColorActiveHoverInverted: string;
                        itemColorActiveCollapsedInverted: string;
                        itemTextColorInverted: string;
                        itemTextColorHoverInverted: string;
                        itemTextColorChildActiveInverted: string;
                        itemTextColorChildActiveHoverInverted: string;
                        itemTextColorActiveInverted: string;
                        itemTextColorActiveHoverInverted: string;
                        itemTextColorHorizontalInverted: string;
                        itemTextColorHoverHorizontalInverted: string;
                        itemTextColorChildActiveHorizontalInverted: string;
                        itemTextColorChildActiveHoverHorizontalInverted: string;
                        itemTextColorActiveHorizontalInverted: string;
                        itemTextColorActiveHoverHorizontalInverted: string;
                        itemIconColorInverted: string;
                        itemIconColorHoverInverted: string;
                        itemIconColorActiveInverted: string;
                        itemIconColorActiveHoverInverted: string;
                        itemIconColorChildActiveInverted: string;
                        itemIconColorChildActiveHoverInverted: string;
                        itemIconColorCollapsedInverted: string;
                        itemIconColorHorizontalInverted: string;
                        itemIconColorHoverHorizontalInverted: string;
                        itemIconColorActiveHorizontalInverted: string;
                        itemIconColorActiveHoverHorizontalInverted: string;
                        itemIconColorChildActiveHorizontalInverted: string;
                        itemIconColorChildActiveHoverHorizontalInverted: string;
                        arrowColorInverted: string;
                        arrowColorHoverInverted: string;
                        arrowColorActiveInverted: string;
                        arrowColorActiveHoverInverted: string;
                        arrowColorChildActiveInverted: string;
                        arrowColorChildActiveHoverInverted: string;
                        groupTextColorInverted: string;
                        borderRadius: string;
                        color: string;
                        groupTextColor: string;
                        itemColorHover: string;
                        itemColorActive: string;
                        itemColorActiveHover: string;
                        itemColorActiveCollapsed: string;
                        itemTextColor: string;
                        itemTextColorHover: string;
                        itemTextColorActive: string;
                        itemTextColorActiveHover: string;
                        itemTextColorChildActive: string;
                        itemTextColorChildActiveHover: string;
                        itemTextColorHorizontal: string;
                        itemTextColorHoverHorizontal: string;
                        itemTextColorActiveHorizontal: string;
                        itemTextColorActiveHoverHorizontal: string;
                        itemTextColorChildActiveHorizontal: string;
                        itemTextColorChildActiveHoverHorizontal: string;
                        itemIconColor: string;
                        itemIconColorHover: string;
                        itemIconColorActive: string;
                        itemIconColorActiveHover: string;
                        itemIconColorChildActive: string;
                        itemIconColorChildActiveHover: string;
                        itemIconColorCollapsed: string;
                        itemIconColorHorizontal: string;
                        itemIconColorHoverHorizontal: string;
                        itemIconColorActiveHorizontal: string;
                        itemIconColorActiveHoverHorizontal: string;
                        itemIconColorChildActiveHorizontal: string;
                        itemIconColorChildActiveHoverHorizontal: string;
                        itemHeight: string;
                        arrowColor: string;
                        arrowColorHover: string;
                        arrowColorActive: string;
                        arrowColorActiveHover: string;
                        arrowColorChildActive: string;
                        arrowColorChildActiveHover: string;
                        colorInverted: string;
                        borderColorHorizontal: string;
                        fontSize: string;
                        dividerColor: string;
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
                        Dropdown: import('../../_mixins').Theme<
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
                        >;
                    }
                >
            >
        >;
    },
    {
        mergedClsPrefix: globalThis.ComputedRef<string>;
        controlledExpandedKeys: globalThis.ComputedRef<Key[] | undefined>;
        uncontrolledExpanededKeys: globalThis.Ref<Key[]>;
        mergedExpandedKeys: globalThis.ComputedRef<Key[]>;
        uncontrolledValue: globalThis.Ref<Key | null>;
        mergedValue: globalThis.ComputedRef<Key | null>;
        activePath: globalThis.ComputedRef<Key[]>;
        tmNodes: globalThis.ComputedRef<
            import('treemate').TreeNode<
                MenuOption,
                MenuGroupOption,
                MenuIgnoredOption
            >[]
        >;
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
                itemColorHoverInverted: string;
                itemColorActiveInverted: string;
                itemColorActiveHoverInverted: string;
                itemColorActiveCollapsedInverted: string;
                itemTextColorInverted: string;
                itemTextColorHoverInverted: string;
                itemTextColorChildActiveInverted: string;
                itemTextColorChildActiveHoverInverted: string;
                itemTextColorActiveInverted: string;
                itemTextColorActiveHoverInverted: string;
                itemTextColorHorizontalInverted: string;
                itemTextColorHoverHorizontalInverted: string;
                itemTextColorChildActiveHorizontalInverted: string;
                itemTextColorChildActiveHoverHorizontalInverted: string;
                itemTextColorActiveHorizontalInverted: string;
                itemTextColorActiveHoverHorizontalInverted: string;
                itemIconColorInverted: string;
                itemIconColorHoverInverted: string;
                itemIconColorActiveInverted: string;
                itemIconColorActiveHoverInverted: string;
                itemIconColorChildActiveInverted: string;
                itemIconColorChildActiveHoverInverted: string;
                itemIconColorCollapsedInverted: string;
                itemIconColorHorizontalInverted: string;
                itemIconColorHoverHorizontalInverted: string;
                itemIconColorActiveHorizontalInverted: string;
                itemIconColorActiveHoverHorizontalInverted: string;
                itemIconColorChildActiveHorizontalInverted: string;
                itemIconColorChildActiveHoverHorizontalInverted: string;
                arrowColorInverted: string;
                arrowColorHoverInverted: string;
                arrowColorActiveInverted: string;
                arrowColorActiveHoverInverted: string;
                arrowColorChildActiveInverted: string;
                arrowColorChildActiveHoverInverted: string;
                groupTextColorInverted: string;
                borderRadius: string;
                color: string;
                groupTextColor: string;
                itemColorHover: string;
                itemColorActive: string;
                itemColorActiveHover: string;
                itemColorActiveCollapsed: string;
                itemTextColor: string;
                itemTextColorHover: string;
                itemTextColorActive: string;
                itemTextColorActiveHover: string;
                itemTextColorChildActive: string;
                itemTextColorChildActiveHover: string;
                itemTextColorHorizontal: string;
                itemTextColorHoverHorizontal: string;
                itemTextColorActiveHorizontal: string;
                itemTextColorActiveHoverHorizontal: string;
                itemTextColorChildActiveHorizontal: string;
                itemTextColorChildActiveHoverHorizontal: string;
                itemIconColor: string;
                itemIconColorHover: string;
                itemIconColorActive: string;
                itemIconColorActiveHover: string;
                itemIconColorChildActive: string;
                itemIconColorChildActiveHover: string;
                itemIconColorCollapsed: string;
                itemIconColorHorizontal: string;
                itemIconColorHoverHorizontal: string;
                itemIconColorActiveHorizontal: string;
                itemIconColorActiveHoverHorizontal: string;
                itemIconColorChildActiveHorizontal: string;
                itemIconColorChildActiveHoverHorizontal: string;
                itemHeight: string;
                arrowColor: string;
                arrowColorHover: string;
                arrowColorActive: string;
                arrowColorActiveHover: string;
                arrowColorChildActive: string;
                arrowColorChildActiveHover: string;
                colorInverted: string;
                borderColorHorizontal: string;
                fontSize: string;
                dividerColor: string;
            };
            peers: {
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
                Dropdown: import('../../_mixins').Theme<
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
                >;
            };
            peerOverrides: {
                Tooltip?:
                    | {
                          peers?:
                              | {
                                    Popover?:
                                        | import('../../_mixins/use-theme').ExtractThemeOverrides<
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
                                        | undefined;
                                }
                              | undefined;
                      }
                    | undefined;
                Dropdown?:
                    | {
                          peers?:
                              | {
                                    Popover?:
                                        | import('../../_mixins/use-theme').ExtractThemeOverrides<
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
                                        | undefined;
                                }
                              | undefined;
                      }
                    | undefined;
            };
        }>;
        mergedCollapsed: globalThis.ComputedRef<boolean>;
        cssVars: globalThis.ComputedRef<any> | undefined;
        themeClass: globalThis.Ref<string> | undefined;
        onRender: (() => void) | undefined;
        showOption: (key?: import('./interface').Key | undefined) => void;
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
            readonly options: {
                readonly type: PropType<MenuMixedOption[]>;
                readonly default: () => never[];
            };
            readonly collapsed: {
                readonly type: PropType<boolean | undefined>;
                readonly default: undefined;
            };
            readonly collapsedWidth: {
                readonly type: NumberConstructor;
                readonly default: 48;
            };
            readonly iconSize: {
                readonly type: NumberConstructor;
                readonly default: 20;
            };
            readonly collapsedIconSize: {
                readonly type: NumberConstructor;
                readonly default: 24;
            };
            readonly rootIndent: NumberConstructor;
            readonly indent: {
                readonly type: NumberConstructor;
                readonly default: 32;
            };
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
            readonly disabledField: {
                readonly type: StringConstructor;
                readonly default: 'disabled';
            };
            readonly defaultExpandAll: BooleanConstructor;
            readonly defaultExpandedKeys: PropType<Key[]>;
            readonly expandedKeys: PropType<Key[]>;
            readonly value: PropType<Key | null>;
            readonly defaultValue: {
                readonly type: PropType<Key | null>;
                readonly default: null;
            };
            readonly mode: {
                readonly type: PropType<'horizontal' | 'vertical'>;
                readonly default: 'vertical';
            };
            readonly watchProps: {
                readonly type: PropType<
                    ('defaultValue' | 'defaultExpandedKeys')[]
                >;
                readonly default: undefined;
            };
            readonly disabled: BooleanConstructor;
            readonly show: {
                readonly type: BooleanConstructor;
                readonly defalut: true;
            };
            readonly inverted: BooleanConstructor;
            readonly 'onUpdate:expandedKeys': PropType<
                MaybeArray<OnUpdateKeys>
            >;
            readonly onUpdateExpandedKeys: PropType<MaybeArray<OnUpdateKeys>>;
            readonly onUpdateValue: PropType<MaybeArray<OnUpdateValue>>;
            readonly 'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>;
            readonly expandIcon: PropType<(option: MenuOption) => VNodeChild>;
            readonly renderIcon: PropType<(option: MenuOption) => VNodeChild>;
            readonly renderLabel: PropType<
                (option: MenuOption | MenuGroupOption) => VNodeChild
            >;
            readonly renderExtra: PropType<
                (option: MenuOption | MenuGroupOption) => VNodeChild
            >;
            readonly dropdownProps: PropType<DropdownProps>;
            readonly accordion: BooleanConstructor;
            readonly nodeProps: PropType<MenuNodeProps>;
            readonly items: PropType<(MenuOption | MenuGroupOption)[]>;
            readonly onOpenNamesChange: PropType<MaybeArray<OnUpdateKeys>>;
            readonly onSelect: PropType<MaybeArray<OnUpdateValue>>;
            readonly onExpandedNamesChange: PropType<MaybeArray<OnUpdateKeys>>;
            readonly expandedNames: PropType<Key[]>;
            readonly defaultExpandedNames: PropType<Key[]>;
            readonly dropdownPlacement: {
                readonly type: PropType<FollowerPlacement>;
                readonly default: 'bottom';
            };
            readonly theme: PropType<
                import('../../_mixins').Theme<
                    'Menu',
                    {
                        itemColorHoverInverted: string;
                        itemColorActiveInverted: string;
                        itemColorActiveHoverInverted: string;
                        itemColorActiveCollapsedInverted: string;
                        itemTextColorInverted: string;
                        itemTextColorHoverInverted: string;
                        itemTextColorChildActiveInverted: string;
                        itemTextColorChildActiveHoverInverted: string;
                        itemTextColorActiveInverted: string;
                        itemTextColorActiveHoverInverted: string;
                        itemTextColorHorizontalInverted: string;
                        itemTextColorHoverHorizontalInverted: string;
                        itemTextColorChildActiveHorizontalInverted: string;
                        itemTextColorChildActiveHoverHorizontalInverted: string;
                        itemTextColorActiveHorizontalInverted: string;
                        itemTextColorActiveHoverHorizontalInverted: string;
                        itemIconColorInverted: string;
                        itemIconColorHoverInverted: string;
                        itemIconColorActiveInverted: string;
                        itemIconColorActiveHoverInverted: string;
                        itemIconColorChildActiveInverted: string;
                        itemIconColorChildActiveHoverInverted: string;
                        itemIconColorCollapsedInverted: string;
                        itemIconColorHorizontalInverted: string;
                        itemIconColorHoverHorizontalInverted: string;
                        itemIconColorActiveHorizontalInverted: string;
                        itemIconColorActiveHoverHorizontalInverted: string;
                        itemIconColorChildActiveHorizontalInverted: string;
                        itemIconColorChildActiveHoverHorizontalInverted: string;
                        arrowColorInverted: string;
                        arrowColorHoverInverted: string;
                        arrowColorActiveInverted: string;
                        arrowColorActiveHoverInverted: string;
                        arrowColorChildActiveInverted: string;
                        arrowColorChildActiveHoverInverted: string;
                        groupTextColorInverted: string;
                        borderRadius: string;
                        color: string;
                        groupTextColor: string;
                        itemColorHover: string;
                        itemColorActive: string;
                        itemColorActiveHover: string;
                        itemColorActiveCollapsed: string;
                        itemTextColor: string;
                        itemTextColorHover: string;
                        itemTextColorActive: string;
                        itemTextColorActiveHover: string;
                        itemTextColorChildActive: string;
                        itemTextColorChildActiveHover: string;
                        itemTextColorHorizontal: string;
                        itemTextColorHoverHorizontal: string;
                        itemTextColorActiveHorizontal: string;
                        itemTextColorActiveHoverHorizontal: string;
                        itemTextColorChildActiveHorizontal: string;
                        itemTextColorChildActiveHoverHorizontal: string;
                        itemIconColor: string;
                        itemIconColorHover: string;
                        itemIconColorActive: string;
                        itemIconColorActiveHover: string;
                        itemIconColorChildActive: string;
                        itemIconColorChildActiveHover: string;
                        itemIconColorCollapsed: string;
                        itemIconColorHorizontal: string;
                        itemIconColorHoverHorizontal: string;
                        itemIconColorActiveHorizontal: string;
                        itemIconColorActiveHoverHorizontal: string;
                        itemIconColorChildActiveHorizontal: string;
                        itemIconColorChildActiveHoverHorizontal: string;
                        itemHeight: string;
                        arrowColor: string;
                        arrowColorHover: string;
                        arrowColorActive: string;
                        arrowColorActiveHover: string;
                        arrowColorChildActive: string;
                        arrowColorChildActiveHover: string;
                        colorInverted: string;
                        borderColorHorizontal: string;
                        fontSize: string;
                        dividerColor: string;
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
                        Dropdown: import('../../_mixins').Theme<
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
                        >;
                    }
                >
            >;
            readonly themeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Menu',
                        {
                            itemColorHoverInverted: string;
                            itemColorActiveInverted: string;
                            itemColorActiveHoverInverted: string;
                            itemColorActiveCollapsedInverted: string;
                            itemTextColorInverted: string;
                            itemTextColorHoverInverted: string;
                            itemTextColorChildActiveInverted: string;
                            itemTextColorChildActiveHoverInverted: string;
                            itemTextColorActiveInverted: string;
                            itemTextColorActiveHoverInverted: string;
                            itemTextColorHorizontalInverted: string;
                            itemTextColorHoverHorizontalInverted: string;
                            itemTextColorChildActiveHorizontalInverted: string;
                            itemTextColorChildActiveHoverHorizontalInverted: string;
                            itemTextColorActiveHorizontalInverted: string;
                            itemTextColorActiveHoverHorizontalInverted: string;
                            itemIconColorInverted: string;
                            itemIconColorHoverInverted: string;
                            itemIconColorActiveInverted: string;
                            itemIconColorActiveHoverInverted: string;
                            itemIconColorChildActiveInverted: string;
                            itemIconColorChildActiveHoverInverted: string;
                            itemIconColorCollapsedInverted: string;
                            itemIconColorHorizontalInverted: string;
                            itemIconColorHoverHorizontalInverted: string;
                            itemIconColorActiveHorizontalInverted: string;
                            itemIconColorActiveHoverHorizontalInverted: string;
                            itemIconColorChildActiveHorizontalInverted: string;
                            itemIconColorChildActiveHoverHorizontalInverted: string;
                            arrowColorInverted: string;
                            arrowColorHoverInverted: string;
                            arrowColorActiveInverted: string;
                            arrowColorActiveHoverInverted: string;
                            arrowColorChildActiveInverted: string;
                            arrowColorChildActiveHoverInverted: string;
                            groupTextColorInverted: string;
                            borderRadius: string;
                            color: string;
                            groupTextColor: string;
                            itemColorHover: string;
                            itemColorActive: string;
                            itemColorActiveHover: string;
                            itemColorActiveCollapsed: string;
                            itemTextColor: string;
                            itemTextColorHover: string;
                            itemTextColorActive: string;
                            itemTextColorActiveHover: string;
                            itemTextColorChildActive: string;
                            itemTextColorChildActiveHover: string;
                            itemTextColorHorizontal: string;
                            itemTextColorHoverHorizontal: string;
                            itemTextColorActiveHorizontal: string;
                            itemTextColorActiveHoverHorizontal: string;
                            itemTextColorChildActiveHorizontal: string;
                            itemTextColorChildActiveHoverHorizontal: string;
                            itemIconColor: string;
                            itemIconColorHover: string;
                            itemIconColorActive: string;
                            itemIconColorActiveHover: string;
                            itemIconColorChildActive: string;
                            itemIconColorChildActiveHover: string;
                            itemIconColorCollapsed: string;
                            itemIconColorHorizontal: string;
                            itemIconColorHoverHorizontal: string;
                            itemIconColorActiveHorizontal: string;
                            itemIconColorActiveHoverHorizontal: string;
                            itemIconColorChildActiveHorizontal: string;
                            itemIconColorChildActiveHoverHorizontal: string;
                            itemHeight: string;
                            arrowColor: string;
                            arrowColorHover: string;
                            arrowColorActive: string;
                            arrowColorActiveHover: string;
                            arrowColorChildActive: string;
                            arrowColorChildActiveHover: string;
                            colorInverted: string;
                            borderColorHorizontal: string;
                            fontSize: string;
                            dividerColor: string;
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
                            Dropdown: import('../../_mixins').Theme<
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
                            >;
                        }
                    >
                >
            >;
            readonly builtinThemeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Menu',
                        {
                            itemColorHoverInverted: string;
                            itemColorActiveInverted: string;
                            itemColorActiveHoverInverted: string;
                            itemColorActiveCollapsedInverted: string;
                            itemTextColorInverted: string;
                            itemTextColorHoverInverted: string;
                            itemTextColorChildActiveInverted: string;
                            itemTextColorChildActiveHoverInverted: string;
                            itemTextColorActiveInverted: string;
                            itemTextColorActiveHoverInverted: string;
                            itemTextColorHorizontalInverted: string;
                            itemTextColorHoverHorizontalInverted: string;
                            itemTextColorChildActiveHorizontalInverted: string;
                            itemTextColorChildActiveHoverHorizontalInverted: string;
                            itemTextColorActiveHorizontalInverted: string;
                            itemTextColorActiveHoverHorizontalInverted: string;
                            itemIconColorInverted: string;
                            itemIconColorHoverInverted: string;
                            itemIconColorActiveInverted: string;
                            itemIconColorActiveHoverInverted: string;
                            itemIconColorChildActiveInverted: string;
                            itemIconColorChildActiveHoverInverted: string;
                            itemIconColorCollapsedInverted: string;
                            itemIconColorHorizontalInverted: string;
                            itemIconColorHoverHorizontalInverted: string;
                            itemIconColorActiveHorizontalInverted: string;
                            itemIconColorActiveHoverHorizontalInverted: string;
                            itemIconColorChildActiveHorizontalInverted: string;
                            itemIconColorChildActiveHoverHorizontalInverted: string;
                            arrowColorInverted: string;
                            arrowColorHoverInverted: string;
                            arrowColorActiveInverted: string;
                            arrowColorActiveHoverInverted: string;
                            arrowColorChildActiveInverted: string;
                            arrowColorChildActiveHoverInverted: string;
                            groupTextColorInverted: string;
                            borderRadius: string;
                            color: string;
                            groupTextColor: string;
                            itemColorHover: string;
                            itemColorActive: string;
                            itemColorActiveHover: string;
                            itemColorActiveCollapsed: string;
                            itemTextColor: string;
                            itemTextColorHover: string;
                            itemTextColorActive: string;
                            itemTextColorActiveHover: string;
                            itemTextColorChildActive: string;
                            itemTextColorChildActiveHover: string;
                            itemTextColorHorizontal: string;
                            itemTextColorHoverHorizontal: string;
                            itemTextColorActiveHorizontal: string;
                            itemTextColorActiveHoverHorizontal: string;
                            itemTextColorChildActiveHorizontal: string;
                            itemTextColorChildActiveHoverHorizontal: string;
                            itemIconColor: string;
                            itemIconColorHover: string;
                            itemIconColorActive: string;
                            itemIconColorActiveHover: string;
                            itemIconColorChildActive: string;
                            itemIconColorChildActiveHover: string;
                            itemIconColorCollapsed: string;
                            itemIconColorHorizontal: string;
                            itemIconColorHoverHorizontal: string;
                            itemIconColorActiveHorizontal: string;
                            itemIconColorActiveHoverHorizontal: string;
                            itemIconColorChildActiveHorizontal: string;
                            itemIconColorChildActiveHoverHorizontal: string;
                            itemHeight: string;
                            arrowColor: string;
                            arrowColorHover: string;
                            arrowColorActive: string;
                            arrowColorActiveHover: string;
                            arrowColorChildActive: string;
                            arrowColorChildActiveHover: string;
                            colorInverted: string;
                            borderColorHorizontal: string;
                            fontSize: string;
                            dividerColor: string;
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
                            Dropdown: import('../../_mixins').Theme<
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
                            >;
                        }
                    >
                >
            >;
        }>
    >,
    {
        readonly mode: 'horizontal' | 'vertical';
        readonly show: boolean;
        readonly disabled: boolean;
        readonly options: MenuMixedOption[];
        readonly iconSize: number;
        readonly keyField: string;
        readonly labelField: string;
        readonly defaultValue: Key | null;
        readonly childrenField: string;
        readonly defaultExpandAll: boolean;
        readonly indent: number;
        readonly inverted: boolean;
        readonly collapsed: boolean | undefined;
        readonly disabledField: string;
        readonly accordion: boolean;
        readonly collapsedWidth: number;
        readonly collapsedIconSize: number;
        readonly watchProps: ('defaultValue' | 'defaultExpandedKeys')[];
        readonly dropdownPlacement: FollowerPlacement;
    },
    {}
>;
export default _default;
