import { PropType, HTMLAttributes, VNodeChild } from 'vue';
import { FollowerPlacement } from 'vueuc';
import { CheckStrategy } from 'treemate';
import type { FormValidationStatus } from '../../form/src/interface';
import { Key, TreeOption } from '../../tree/src/interface';
import type {
    SelectBaseOption,
    SelectOption,
} from '../../select/src/interface';
import { ExtractPublicPropTypes, MaybeArray } from '../../_utils';
import type {
    OnUpdateValue,
    TreeSelectNodeProps,
    TreeSelectOption,
    TreeSelectRenderTag,
} from './interface';
type OnLoad = (node: TreeSelectOption) => Promise<void>;
export declare const treeSelectProps: {
    readonly renderLabel: PropType<
        import('./interface').TreeSelectRenderTreePart
    >;
    readonly renderPrefix: PropType<
        import('./interface').TreeSelectRenderTreePart
    >;
    readonly renderSuffix: PropType<
        import('./interface').TreeSelectRenderTreePart
    >;
    readonly nodeProps: PropType<TreeSelectNodeProps>;
    readonly onBlur: PropType<(e: FocusEvent) => void>;
    readonly onFocus: PropType<(e: FocusEvent) => void>;
    readonly onLoad: PropType<OnLoad>;
    readonly onUpdateShow: PropType<MaybeArray<(show: boolean) => void>>;
    readonly onUpdateValue: PropType<MaybeArray<OnUpdateValue>>;
    readonly 'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>;
    readonly 'onUpdate:show': PropType<MaybeArray<(show: boolean) => void>>;
    /**
     * @deprecated
     */
    readonly leafOnly: BooleanConstructor;
    readonly allowCheckingNotLoaded: BooleanConstructor;
    readonly filter: PropType<(pattern: string, node: TreeOption) => boolean>;
    readonly defaultExpandAll: BooleanConstructor;
    readonly expandedKeys: PropType<Key[]>;
    readonly keyField: {
        readonly type: StringConstructor;
        readonly default: 'key';
    };
    readonly labelField: {
        readonly type: StringConstructor;
        readonly default: 'label';
    };
    readonly childrenField: {
        readonly type: StringConstructor;
        readonly default: 'children';
    };
    readonly disabledField: {
        readonly type: StringConstructor;
        readonly default: 'disabled';
    };
    /**
     * @deprecated
     */
    readonly defaultExpandedKeys: {
        readonly type: PropType<Key[]>;
        readonly default: () => never[];
    };
    readonly indeterminateKeys: PropType<Key[]>;
    readonly renderSwitcherIcon: PropType<
        import('../../tree/src/interface').RenderSwitcherIcon
    >;
    readonly onUpdateIndeterminateKeys: PropType<
        MaybeArray<import('../../tree/src/Tree').OnUpdateIndeterminateKeys>
    >;
    readonly 'onUpdate:indeterminateKeys': PropType<
        MaybeArray<import('../../tree/src/Tree').OnUpdateIndeterminateKeys>
    >;
    readonly onUpdateExpandedKeys: PropType<
        MaybeArray<import('../../tree/src/Tree').onUpdateExpandedKeys>
    >;
    readonly 'onUpdate:expandedKeys': PropType<
        MaybeArray<import('../../tree/src/Tree').onUpdateExpandedKeys>
    >;
    readonly bordered: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly cascade: BooleanConstructor;
    readonly checkable: BooleanConstructor;
    readonly clearable: BooleanConstructor;
    readonly clearFilterAfterSelect: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly consistentMenuWidth: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly defaultShow: BooleanConstructor;
    readonly defaultValue: {
        readonly type: PropType<string | number | (string | number)[] | null>;
        readonly default: null;
    };
    readonly disabled: {
        readonly type: PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly filterable: BooleanConstructor;
    readonly checkStrategy: {
        readonly type: PropType<CheckStrategy>;
        readonly default: 'all';
    };
    readonly loading: BooleanConstructor;
    readonly maxTagCount: PropType<number | 'responsive'>;
    readonly multiple: BooleanConstructor;
    readonly showPath: BooleanConstructor;
    readonly separator: {
        readonly type: StringConstructor;
        readonly default: ' / ';
    };
    readonly options: {
        readonly type: PropType<TreeSelectOption[]>;
        readonly default: () => never[];
    };
    readonly placeholder: StringConstructor;
    readonly placement: {
        readonly type: PropType<FollowerPlacement>;
        readonly default: 'bottom-start';
    };
    readonly show: {
        readonly type: PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly size: PropType<'small' | 'medium' | 'large'>;
    readonly value: PropType<string | number | (string | number)[] | null>;
    readonly to: {
        type: PropType<string | boolean | HTMLElement>;
        default: undefined;
    };
    readonly menuProps: PropType<HTMLAttributes>;
    readonly virtualScroll: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly status: PropType<FormValidationStatus>;
    readonly renderTag: PropType<TreeSelectRenderTag>;
    readonly theme: PropType<
        import('../../_mixins').Theme<
            'TreeSelect',
            {
                menuPadding: string;
                menuColor: string;
                menuBoxShadow: string;
                menuBorderRadius: string;
                menuHeight: string;
                actionDividerColor: string;
                actionTextColor: string;
                actionPadding: string;
            },
            {
                Tree: import('../../_mixins').Theme<
                    'Tree',
                    {
                        fontSize: string;
                        nodeBorderRadius: string;
                        nodeColorHover: string;
                        nodeColorPressed: string;
                        nodeColorActive: string;
                        arrowColor: string;
                        nodeTextColor: string;
                        nodeTextColorDisabled: string;
                        loadingColor: string;
                        dropMarkColor: string;
                    },
                    {
                        Checkbox: import('../../_mixins').Theme<
                            'Checkbox',
                            {
                                labelLineHeight: string;
                                fontSizeSmall: string;
                                fontSizeMedium: string;
                                fontSizeLarge: string;
                                borderRadius: string;
                                color: string;
                                colorChecked: string;
                                colorDisabled: string;
                                colorDisabledChecked: string;
                                colorTableHeader: string;
                                colorTableHeaderModal: string;
                                colorTableHeaderPopover: string;
                                checkMarkColor: string;
                                checkMarkColorDisabled: string;
                                checkMarkColorDisabledChecked: string;
                                border: string;
                                borderDisabled: string;
                                borderDisabledChecked: string;
                                borderChecked: string;
                                borderFocus: string;
                                boxShadowFocus: string;
                                textColor: string;
                                textColorDisabled: string;
                                sizeSmall: string;
                                sizeMedium: string;
                                sizeLarge: string;
                                labelPadding: string;
                                labelFontWeight: string;
                            },
                            any
                        >;
                        Scrollbar: import('../../_mixins').Theme<
                            'Scrollbar',
                            {
                                color: string;
                                colorHover: string;
                            },
                            any
                        >;
                        Empty: import('../../_mixins').Theme<
                            'Empty',
                            {
                                fontSizeSmall: string;
                                fontSizeMedium: string;
                                fontSizeLarge: string;
                                fontSizeHuge: string;
                                textColor: string;
                                iconColor: string;
                                extraTextColor: string;
                                iconSizeSmall: string;
                                iconSizeMedium: string;
                                iconSizeLarge: string;
                                iconSizeHuge: string;
                            },
                            any
                        >;
                    }
                >;
                Empty: import('../../_mixins').Theme<
                    'Empty',
                    {
                        fontSizeSmall: string;
                        fontSizeMedium: string;
                        fontSizeLarge: string;
                        fontSizeHuge: string;
                        textColor: string;
                        iconColor: string;
                        extraTextColor: string;
                        iconSizeSmall: string;
                        iconSizeMedium: string;
                        iconSizeLarge: string;
                        iconSizeHuge: string;
                    },
                    any
                >;
                InternalSelection: import('../../_mixins').Theme<
                    'InternalSelection',
                    {
                        fontSizeTiny: string;
                        fontSizeSmall: string;
                        fontSizeMedium: string;
                        fontSizeLarge: string;
                        heightTiny: string;
                        heightSmall: string;
                        heightMedium: string;
                        heightLarge: string;
                        borderRadius: string;
                        textColor: string;
                        textColorDisabled: string;
                        placeholderColor: string;
                        placeholderColorDisabled: string;
                        color: string;
                        colorDisabled: string;
                        colorActive: string;
                        border: string;
                        borderHover: string;
                        borderActive: string;
                        borderFocus: string;
                        boxShadowHover: string;
                        boxShadowActive: string;
                        boxShadowFocus: string;
                        caretColor: string;
                        arrowColor: string;
                        arrowColorDisabled: string;
                        loadingColor: string;
                        borderWarning: string;
                        borderHoverWarning: string;
                        borderActiveWarning: string;
                        borderFocusWarning: string;
                        boxShadowHoverWarning: string;
                        boxShadowActiveWarning: string;
                        boxShadowFocusWarning: string;
                        colorActiveWarning: string;
                        caretColorWarning: string;
                        borderError: string;
                        borderHoverError: string;
                        borderActiveError: string;
                        borderFocusError: string;
                        boxShadowHoverError: string;
                        boxShadowActiveError: string;
                        boxShadowFocusError: string;
                        colorActiveError: string;
                        caretColorError: string;
                        clearColor: string;
                        clearColorHover: string;
                        clearColorPressed: string;
                        paddingSingle: string;
                        paddingMultiple: string;
                        clearSize: string;
                        arrowSize: string;
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
                'TreeSelect',
                {
                    menuPadding: string;
                    menuColor: string;
                    menuBoxShadow: string;
                    menuBorderRadius: string;
                    menuHeight: string;
                    actionDividerColor: string;
                    actionTextColor: string;
                    actionPadding: string;
                },
                {
                    Tree: import('../../_mixins').Theme<
                        'Tree',
                        {
                            fontSize: string;
                            nodeBorderRadius: string;
                            nodeColorHover: string;
                            nodeColorPressed: string;
                            nodeColorActive: string;
                            arrowColor: string;
                            nodeTextColor: string;
                            nodeTextColorDisabled: string;
                            loadingColor: string;
                            dropMarkColor: string;
                        },
                        {
                            Checkbox: import('../../_mixins').Theme<
                                'Checkbox',
                                {
                                    labelLineHeight: string;
                                    fontSizeSmall: string;
                                    fontSizeMedium: string;
                                    fontSizeLarge: string;
                                    borderRadius: string;
                                    color: string;
                                    colorChecked: string;
                                    colorDisabled: string;
                                    colorDisabledChecked: string;
                                    colorTableHeader: string;
                                    colorTableHeaderModal: string;
                                    colorTableHeaderPopover: string;
                                    checkMarkColor: string;
                                    checkMarkColorDisabled: string;
                                    checkMarkColorDisabledChecked: string;
                                    border: string;
                                    borderDisabled: string;
                                    borderDisabledChecked: string;
                                    borderChecked: string;
                                    borderFocus: string;
                                    boxShadowFocus: string;
                                    textColor: string;
                                    textColorDisabled: string;
                                    sizeSmall: string;
                                    sizeMedium: string;
                                    sizeLarge: string;
                                    labelPadding: string;
                                    labelFontWeight: string;
                                },
                                any
                            >;
                            Scrollbar: import('../../_mixins').Theme<
                                'Scrollbar',
                                {
                                    color: string;
                                    colorHover: string;
                                },
                                any
                            >;
                            Empty: import('../../_mixins').Theme<
                                'Empty',
                                {
                                    fontSizeSmall: string;
                                    fontSizeMedium: string;
                                    fontSizeLarge: string;
                                    fontSizeHuge: string;
                                    textColor: string;
                                    iconColor: string;
                                    extraTextColor: string;
                                    iconSizeSmall: string;
                                    iconSizeMedium: string;
                                    iconSizeLarge: string;
                                    iconSizeHuge: string;
                                },
                                any
                            >;
                        }
                    >;
                    Empty: import('../../_mixins').Theme<
                        'Empty',
                        {
                            fontSizeSmall: string;
                            fontSizeMedium: string;
                            fontSizeLarge: string;
                            fontSizeHuge: string;
                            textColor: string;
                            iconColor: string;
                            extraTextColor: string;
                            iconSizeSmall: string;
                            iconSizeMedium: string;
                            iconSizeLarge: string;
                            iconSizeHuge: string;
                        },
                        any
                    >;
                    InternalSelection: import('../../_mixins').Theme<
                        'InternalSelection',
                        {
                            fontSizeTiny: string;
                            fontSizeSmall: string;
                            fontSizeMedium: string;
                            fontSizeLarge: string;
                            heightTiny: string;
                            heightSmall: string;
                            heightMedium: string;
                            heightLarge: string;
                            borderRadius: string;
                            textColor: string;
                            textColorDisabled: string;
                            placeholderColor: string;
                            placeholderColorDisabled: string;
                            color: string;
                            colorDisabled: string;
                            colorActive: string;
                            border: string;
                            borderHover: string;
                            borderActive: string;
                            borderFocus: string;
                            boxShadowHover: string;
                            boxShadowActive: string;
                            boxShadowFocus: string;
                            caretColor: string;
                            arrowColor: string;
                            arrowColorDisabled: string;
                            loadingColor: string;
                            borderWarning: string;
                            borderHoverWarning: string;
                            borderActiveWarning: string;
                            borderFocusWarning: string;
                            boxShadowHoverWarning: string;
                            boxShadowActiveWarning: string;
                            boxShadowFocusWarning: string;
                            colorActiveWarning: string;
                            caretColorWarning: string;
                            borderError: string;
                            borderHoverError: string;
                            borderActiveError: string;
                            borderFocusError: string;
                            boxShadowHoverError: string;
                            boxShadowActiveError: string;
                            boxShadowFocusError: string;
                            colorActiveError: string;
                            caretColorError: string;
                            clearColor: string;
                            clearColorHover: string;
                            clearColorPressed: string;
                            paddingSingle: string;
                            paddingMultiple: string;
                            clearSize: string;
                            arrowSize: string;
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
                'TreeSelect',
                {
                    menuPadding: string;
                    menuColor: string;
                    menuBoxShadow: string;
                    menuBorderRadius: string;
                    menuHeight: string;
                    actionDividerColor: string;
                    actionTextColor: string;
                    actionPadding: string;
                },
                {
                    Tree: import('../../_mixins').Theme<
                        'Tree',
                        {
                            fontSize: string;
                            nodeBorderRadius: string;
                            nodeColorHover: string;
                            nodeColorPressed: string;
                            nodeColorActive: string;
                            arrowColor: string;
                            nodeTextColor: string;
                            nodeTextColorDisabled: string;
                            loadingColor: string;
                            dropMarkColor: string;
                        },
                        {
                            Checkbox: import('../../_mixins').Theme<
                                'Checkbox',
                                {
                                    labelLineHeight: string;
                                    fontSizeSmall: string;
                                    fontSizeMedium: string;
                                    fontSizeLarge: string;
                                    borderRadius: string;
                                    color: string;
                                    colorChecked: string;
                                    colorDisabled: string;
                                    colorDisabledChecked: string;
                                    colorTableHeader: string;
                                    colorTableHeaderModal: string;
                                    colorTableHeaderPopover: string;
                                    checkMarkColor: string;
                                    checkMarkColorDisabled: string;
                                    checkMarkColorDisabledChecked: string;
                                    border: string;
                                    borderDisabled: string;
                                    borderDisabledChecked: string;
                                    borderChecked: string;
                                    borderFocus: string;
                                    boxShadowFocus: string;
                                    textColor: string;
                                    textColorDisabled: string;
                                    sizeSmall: string;
                                    sizeMedium: string;
                                    sizeLarge: string;
                                    labelPadding: string;
                                    labelFontWeight: string;
                                },
                                any
                            >;
                            Scrollbar: import('../../_mixins').Theme<
                                'Scrollbar',
                                {
                                    color: string;
                                    colorHover: string;
                                },
                                any
                            >;
                            Empty: import('../../_mixins').Theme<
                                'Empty',
                                {
                                    fontSizeSmall: string;
                                    fontSizeMedium: string;
                                    fontSizeLarge: string;
                                    fontSizeHuge: string;
                                    textColor: string;
                                    iconColor: string;
                                    extraTextColor: string;
                                    iconSizeSmall: string;
                                    iconSizeMedium: string;
                                    iconSizeLarge: string;
                                    iconSizeHuge: string;
                                },
                                any
                            >;
                        }
                    >;
                    Empty: import('../../_mixins').Theme<
                        'Empty',
                        {
                            fontSizeSmall: string;
                            fontSizeMedium: string;
                            fontSizeLarge: string;
                            fontSizeHuge: string;
                            textColor: string;
                            iconColor: string;
                            extraTextColor: string;
                            iconSizeSmall: string;
                            iconSizeMedium: string;
                            iconSizeLarge: string;
                            iconSizeHuge: string;
                        },
                        any
                    >;
                    InternalSelection: import('../../_mixins').Theme<
                        'InternalSelection',
                        {
                            fontSizeTiny: string;
                            fontSizeSmall: string;
                            fontSizeMedium: string;
                            fontSizeLarge: string;
                            heightTiny: string;
                            heightSmall: string;
                            heightMedium: string;
                            heightLarge: string;
                            borderRadius: string;
                            textColor: string;
                            textColorDisabled: string;
                            placeholderColor: string;
                            placeholderColorDisabled: string;
                            color: string;
                            colorDisabled: string;
                            colorActive: string;
                            border: string;
                            borderHover: string;
                            borderActive: string;
                            borderFocus: string;
                            boxShadowHover: string;
                            boxShadowActive: string;
                            boxShadowFocus: string;
                            caretColor: string;
                            arrowColor: string;
                            arrowColorDisabled: string;
                            loadingColor: string;
                            borderWarning: string;
                            borderHoverWarning: string;
                            borderActiveWarning: string;
                            borderFocusWarning: string;
                            boxShadowHoverWarning: string;
                            boxShadowActiveWarning: string;
                            boxShadowFocusWarning: string;
                            colorActiveWarning: string;
                            caretColorWarning: string;
                            borderError: string;
                            borderHoverError: string;
                            borderActiveError: string;
                            borderFocusError: string;
                            boxShadowHoverError: string;
                            boxShadowActiveError: string;
                            boxShadowFocusError: string;
                            colorActiveError: string;
                            caretColorError: string;
                            clearColor: string;
                            clearColorHover: string;
                            clearColorPressed: string;
                            paddingSingle: string;
                            paddingMultiple: string;
                            clearSize: string;
                            arrowSize: string;
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
export type TreeSelectProps = ExtractPublicPropTypes<typeof treeSelectProps>;
declare const _default: import('vue').DefineComponent<
    {
        readonly renderLabel: PropType<
            import('./interface').TreeSelectRenderTreePart
        >;
        readonly renderPrefix: PropType<
            import('./interface').TreeSelectRenderTreePart
        >;
        readonly renderSuffix: PropType<
            import('./interface').TreeSelectRenderTreePart
        >;
        readonly nodeProps: PropType<TreeSelectNodeProps>;
        readonly onBlur: PropType<(e: FocusEvent) => void>;
        readonly onFocus: PropType<(e: FocusEvent) => void>;
        readonly onLoad: PropType<OnLoad>;
        readonly onUpdateShow: PropType<MaybeArray<(show: boolean) => void>>;
        readonly onUpdateValue: PropType<MaybeArray<OnUpdateValue>>;
        readonly 'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>;
        readonly 'onUpdate:show': PropType<MaybeArray<(show: boolean) => void>>;
        /**
         * @deprecated
         */
        readonly leafOnly: BooleanConstructor;
        readonly allowCheckingNotLoaded: BooleanConstructor;
        readonly filter: PropType<
            (pattern: string, node: TreeOption) => boolean
        >;
        readonly defaultExpandAll: BooleanConstructor;
        readonly expandedKeys: PropType<Key[]>;
        readonly keyField: {
            readonly type: StringConstructor;
            readonly default: 'key';
        };
        readonly labelField: {
            readonly type: StringConstructor;
            readonly default: 'label';
        };
        readonly childrenField: {
            readonly type: StringConstructor;
            readonly default: 'children';
        };
        readonly disabledField: {
            readonly type: StringConstructor;
            readonly default: 'disabled';
        };
        /**
         * @deprecated
         */
        readonly defaultExpandedKeys: {
            readonly type: PropType<Key[]>;
            readonly default: () => never[];
        };
        readonly indeterminateKeys: PropType<Key[]>;
        readonly renderSwitcherIcon: PropType<
            import('../../tree/src/interface').RenderSwitcherIcon
        >;
        readonly onUpdateIndeterminateKeys: PropType<
            MaybeArray<import('../../tree/src/Tree').OnUpdateIndeterminateKeys>
        >;
        readonly 'onUpdate:indeterminateKeys': PropType<
            MaybeArray<import('../../tree/src/Tree').OnUpdateIndeterminateKeys>
        >;
        readonly onUpdateExpandedKeys: PropType<
            MaybeArray<import('../../tree/src/Tree').onUpdateExpandedKeys>
        >;
        readonly 'onUpdate:expandedKeys': PropType<
            MaybeArray<import('../../tree/src/Tree').onUpdateExpandedKeys>
        >;
        readonly bordered: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly cascade: BooleanConstructor;
        readonly checkable: BooleanConstructor;
        readonly clearable: BooleanConstructor;
        readonly clearFilterAfterSelect: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly consistentMenuWidth: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly defaultShow: BooleanConstructor;
        readonly defaultValue: {
            readonly type: PropType<
                string | number | (string | number)[] | null
            >;
            readonly default: null;
        };
        readonly disabled: {
            readonly type: PropType<boolean | undefined>;
            readonly default: undefined;
        };
        readonly filterable: BooleanConstructor;
        readonly checkStrategy: {
            readonly type: PropType<CheckStrategy>;
            readonly default: 'all';
        };
        readonly loading: BooleanConstructor;
        readonly maxTagCount: PropType<number | 'responsive'>;
        readonly multiple: BooleanConstructor;
        readonly showPath: BooleanConstructor;
        readonly separator: {
            readonly type: StringConstructor;
            readonly default: ' / ';
        };
        readonly options: {
            readonly type: PropType<TreeSelectOption[]>;
            readonly default: () => never[];
        };
        readonly placeholder: StringConstructor;
        readonly placement: {
            readonly type: PropType<FollowerPlacement>;
            readonly default: 'bottom-start';
        };
        readonly show: {
            readonly type: PropType<boolean | undefined>;
            readonly default: undefined;
        };
        readonly size: PropType<'small' | 'medium' | 'large'>;
        readonly value: PropType<string | number | (string | number)[] | null>;
        readonly to: {
            type: PropType<string | boolean | HTMLElement>;
            default: undefined;
        };
        readonly menuProps: PropType<HTMLAttributes>;
        readonly virtualScroll: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly status: PropType<FormValidationStatus>;
        readonly renderTag: PropType<TreeSelectRenderTag>;
        readonly theme: PropType<
            import('../../_mixins').Theme<
                'TreeSelect',
                {
                    menuPadding: string;
                    menuColor: string;
                    menuBoxShadow: string;
                    menuBorderRadius: string;
                    menuHeight: string;
                    actionDividerColor: string;
                    actionTextColor: string;
                    actionPadding: string;
                },
                {
                    Tree: import('../../_mixins').Theme<
                        'Tree',
                        {
                            fontSize: string;
                            nodeBorderRadius: string;
                            nodeColorHover: string;
                            nodeColorPressed: string;
                            nodeColorActive: string;
                            arrowColor: string;
                            nodeTextColor: string;
                            nodeTextColorDisabled: string;
                            loadingColor: string;
                            dropMarkColor: string;
                        },
                        {
                            Checkbox: import('../../_mixins').Theme<
                                'Checkbox',
                                {
                                    labelLineHeight: string;
                                    fontSizeSmall: string;
                                    fontSizeMedium: string;
                                    fontSizeLarge: string;
                                    borderRadius: string;
                                    color: string;
                                    colorChecked: string;
                                    colorDisabled: string;
                                    colorDisabledChecked: string;
                                    colorTableHeader: string;
                                    colorTableHeaderModal: string;
                                    colorTableHeaderPopover: string;
                                    checkMarkColor: string;
                                    checkMarkColorDisabled: string;
                                    checkMarkColorDisabledChecked: string;
                                    border: string;
                                    borderDisabled: string;
                                    borderDisabledChecked: string;
                                    borderChecked: string;
                                    borderFocus: string;
                                    boxShadowFocus: string;
                                    textColor: string;
                                    textColorDisabled: string;
                                    sizeSmall: string;
                                    sizeMedium: string;
                                    sizeLarge: string;
                                    labelPadding: string;
                                    labelFontWeight: string;
                                },
                                any
                            >;
                            Scrollbar: import('../../_mixins').Theme<
                                'Scrollbar',
                                {
                                    color: string;
                                    colorHover: string;
                                },
                                any
                            >;
                            Empty: import('../../_mixins').Theme<
                                'Empty',
                                {
                                    fontSizeSmall: string;
                                    fontSizeMedium: string;
                                    fontSizeLarge: string;
                                    fontSizeHuge: string;
                                    textColor: string;
                                    iconColor: string;
                                    extraTextColor: string;
                                    iconSizeSmall: string;
                                    iconSizeMedium: string;
                                    iconSizeLarge: string;
                                    iconSizeHuge: string;
                                },
                                any
                            >;
                        }
                    >;
                    Empty: import('../../_mixins').Theme<
                        'Empty',
                        {
                            fontSizeSmall: string;
                            fontSizeMedium: string;
                            fontSizeLarge: string;
                            fontSizeHuge: string;
                            textColor: string;
                            iconColor: string;
                            extraTextColor: string;
                            iconSizeSmall: string;
                            iconSizeMedium: string;
                            iconSizeLarge: string;
                            iconSizeHuge: string;
                        },
                        any
                    >;
                    InternalSelection: import('../../_mixins').Theme<
                        'InternalSelection',
                        {
                            fontSizeTiny: string;
                            fontSizeSmall: string;
                            fontSizeMedium: string;
                            fontSizeLarge: string;
                            heightTiny: string;
                            heightSmall: string;
                            heightMedium: string;
                            heightLarge: string;
                            borderRadius: string;
                            textColor: string;
                            textColorDisabled: string;
                            placeholderColor: string;
                            placeholderColorDisabled: string;
                            color: string;
                            colorDisabled: string;
                            colorActive: string;
                            border: string;
                            borderHover: string;
                            borderActive: string;
                            borderFocus: string;
                            boxShadowHover: string;
                            boxShadowActive: string;
                            boxShadowFocus: string;
                            caretColor: string;
                            arrowColor: string;
                            arrowColorDisabled: string;
                            loadingColor: string;
                            borderWarning: string;
                            borderHoverWarning: string;
                            borderActiveWarning: string;
                            borderFocusWarning: string;
                            boxShadowHoverWarning: string;
                            boxShadowActiveWarning: string;
                            boxShadowFocusWarning: string;
                            colorActiveWarning: string;
                            caretColorWarning: string;
                            borderError: string;
                            borderHoverError: string;
                            borderActiveError: string;
                            borderFocusError: string;
                            boxShadowHoverError: string;
                            boxShadowActiveError: string;
                            boxShadowFocusError: string;
                            colorActiveError: string;
                            caretColorError: string;
                            clearColor: string;
                            clearColorHover: string;
                            clearColorPressed: string;
                            paddingSingle: string;
                            paddingMultiple: string;
                            clearSize: string;
                            arrowSize: string;
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
                    'TreeSelect',
                    {
                        menuPadding: string;
                        menuColor: string;
                        menuBoxShadow: string;
                        menuBorderRadius: string;
                        menuHeight: string;
                        actionDividerColor: string;
                        actionTextColor: string;
                        actionPadding: string;
                    },
                    {
                        Tree: import('../../_mixins').Theme<
                            'Tree',
                            {
                                fontSize: string;
                                nodeBorderRadius: string;
                                nodeColorHover: string;
                                nodeColorPressed: string;
                                nodeColorActive: string;
                                arrowColor: string;
                                nodeTextColor: string;
                                nodeTextColorDisabled: string;
                                loadingColor: string;
                                dropMarkColor: string;
                            },
                            {
                                Checkbox: import('../../_mixins').Theme<
                                    'Checkbox',
                                    {
                                        labelLineHeight: string;
                                        fontSizeSmall: string;
                                        fontSizeMedium: string;
                                        fontSizeLarge: string;
                                        borderRadius: string;
                                        color: string;
                                        colorChecked: string;
                                        colorDisabled: string;
                                        colorDisabledChecked: string;
                                        colorTableHeader: string;
                                        colorTableHeaderModal: string;
                                        colorTableHeaderPopover: string;
                                        checkMarkColor: string;
                                        checkMarkColorDisabled: string;
                                        checkMarkColorDisabledChecked: string;
                                        border: string;
                                        borderDisabled: string;
                                        borderDisabledChecked: string;
                                        borderChecked: string;
                                        borderFocus: string;
                                        boxShadowFocus: string;
                                        textColor: string;
                                        textColorDisabled: string;
                                        sizeSmall: string;
                                        sizeMedium: string;
                                        sizeLarge: string;
                                        labelPadding: string;
                                        labelFontWeight: string;
                                    },
                                    any
                                >;
                                Scrollbar: import('../../_mixins').Theme<
                                    'Scrollbar',
                                    {
                                        color: string;
                                        colorHover: string;
                                    },
                                    any
                                >;
                                Empty: import('../../_mixins').Theme<
                                    'Empty',
                                    {
                                        fontSizeSmall: string;
                                        fontSizeMedium: string;
                                        fontSizeLarge: string;
                                        fontSizeHuge: string;
                                        textColor: string;
                                        iconColor: string;
                                        extraTextColor: string;
                                        iconSizeSmall: string;
                                        iconSizeMedium: string;
                                        iconSizeLarge: string;
                                        iconSizeHuge: string;
                                    },
                                    any
                                >;
                            }
                        >;
                        Empty: import('../../_mixins').Theme<
                            'Empty',
                            {
                                fontSizeSmall: string;
                                fontSizeMedium: string;
                                fontSizeLarge: string;
                                fontSizeHuge: string;
                                textColor: string;
                                iconColor: string;
                                extraTextColor: string;
                                iconSizeSmall: string;
                                iconSizeMedium: string;
                                iconSizeLarge: string;
                                iconSizeHuge: string;
                            },
                            any
                        >;
                        InternalSelection: import('../../_mixins').Theme<
                            'InternalSelection',
                            {
                                fontSizeTiny: string;
                                fontSizeSmall: string;
                                fontSizeMedium: string;
                                fontSizeLarge: string;
                                heightTiny: string;
                                heightSmall: string;
                                heightMedium: string;
                                heightLarge: string;
                                borderRadius: string;
                                textColor: string;
                                textColorDisabled: string;
                                placeholderColor: string;
                                placeholderColorDisabled: string;
                                color: string;
                                colorDisabled: string;
                                colorActive: string;
                                border: string;
                                borderHover: string;
                                borderActive: string;
                                borderFocus: string;
                                boxShadowHover: string;
                                boxShadowActive: string;
                                boxShadowFocus: string;
                                caretColor: string;
                                arrowColor: string;
                                arrowColorDisabled: string;
                                loadingColor: string;
                                borderWarning: string;
                                borderHoverWarning: string;
                                borderActiveWarning: string;
                                borderFocusWarning: string;
                                boxShadowHoverWarning: string;
                                boxShadowActiveWarning: string;
                                boxShadowFocusWarning: string;
                                colorActiveWarning: string;
                                caretColorWarning: string;
                                borderError: string;
                                borderHoverError: string;
                                borderActiveError: string;
                                borderFocusError: string;
                                boxShadowHoverError: string;
                                boxShadowActiveError: string;
                                boxShadowFocusError: string;
                                colorActiveError: string;
                                caretColorError: string;
                                clearColor: string;
                                clearColorHover: string;
                                clearColorPressed: string;
                                paddingSingle: string;
                                paddingMultiple: string;
                                clearSize: string;
                                arrowSize: string;
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
                    'TreeSelect',
                    {
                        menuPadding: string;
                        menuColor: string;
                        menuBoxShadow: string;
                        menuBorderRadius: string;
                        menuHeight: string;
                        actionDividerColor: string;
                        actionTextColor: string;
                        actionPadding: string;
                    },
                    {
                        Tree: import('../../_mixins').Theme<
                            'Tree',
                            {
                                fontSize: string;
                                nodeBorderRadius: string;
                                nodeColorHover: string;
                                nodeColorPressed: string;
                                nodeColorActive: string;
                                arrowColor: string;
                                nodeTextColor: string;
                                nodeTextColorDisabled: string;
                                loadingColor: string;
                                dropMarkColor: string;
                            },
                            {
                                Checkbox: import('../../_mixins').Theme<
                                    'Checkbox',
                                    {
                                        labelLineHeight: string;
                                        fontSizeSmall: string;
                                        fontSizeMedium: string;
                                        fontSizeLarge: string;
                                        borderRadius: string;
                                        color: string;
                                        colorChecked: string;
                                        colorDisabled: string;
                                        colorDisabledChecked: string;
                                        colorTableHeader: string;
                                        colorTableHeaderModal: string;
                                        colorTableHeaderPopover: string;
                                        checkMarkColor: string;
                                        checkMarkColorDisabled: string;
                                        checkMarkColorDisabledChecked: string;
                                        border: string;
                                        borderDisabled: string;
                                        borderDisabledChecked: string;
                                        borderChecked: string;
                                        borderFocus: string;
                                        boxShadowFocus: string;
                                        textColor: string;
                                        textColorDisabled: string;
                                        sizeSmall: string;
                                        sizeMedium: string;
                                        sizeLarge: string;
                                        labelPadding: string;
                                        labelFontWeight: string;
                                    },
                                    any
                                >;
                                Scrollbar: import('../../_mixins').Theme<
                                    'Scrollbar',
                                    {
                                        color: string;
                                        colorHover: string;
                                    },
                                    any
                                >;
                                Empty: import('../../_mixins').Theme<
                                    'Empty',
                                    {
                                        fontSizeSmall: string;
                                        fontSizeMedium: string;
                                        fontSizeLarge: string;
                                        fontSizeHuge: string;
                                        textColor: string;
                                        iconColor: string;
                                        extraTextColor: string;
                                        iconSizeSmall: string;
                                        iconSizeMedium: string;
                                        iconSizeLarge: string;
                                        iconSizeHuge: string;
                                    },
                                    any
                                >;
                            }
                        >;
                        Empty: import('../../_mixins').Theme<
                            'Empty',
                            {
                                fontSizeSmall: string;
                                fontSizeMedium: string;
                                fontSizeLarge: string;
                                fontSizeHuge: string;
                                textColor: string;
                                iconColor: string;
                                extraTextColor: string;
                                iconSizeSmall: string;
                                iconSizeMedium: string;
                                iconSizeLarge: string;
                                iconSizeHuge: string;
                            },
                            any
                        >;
                        InternalSelection: import('../../_mixins').Theme<
                            'InternalSelection',
                            {
                                fontSizeTiny: string;
                                fontSizeSmall: string;
                                fontSizeMedium: string;
                                fontSizeLarge: string;
                                heightTiny: string;
                                heightSmall: string;
                                heightMedium: string;
                                heightLarge: string;
                                borderRadius: string;
                                textColor: string;
                                textColorDisabled: string;
                                placeholderColor: string;
                                placeholderColorDisabled: string;
                                color: string;
                                colorDisabled: string;
                                colorActive: string;
                                border: string;
                                borderHover: string;
                                borderActive: string;
                                borderFocus: string;
                                boxShadowHover: string;
                                boxShadowActive: string;
                                boxShadowFocus: string;
                                caretColor: string;
                                arrowColor: string;
                                arrowColorDisabled: string;
                                loadingColor: string;
                                borderWarning: string;
                                borderHoverWarning: string;
                                borderActiveWarning: string;
                                borderFocusWarning: string;
                                boxShadowHoverWarning: string;
                                boxShadowActiveWarning: string;
                                boxShadowFocusWarning: string;
                                colorActiveWarning: string;
                                caretColorWarning: string;
                                borderError: string;
                                borderHoverError: string;
                                borderActiveError: string;
                                borderFocusError: string;
                                boxShadowHoverError: string;
                                boxShadowActiveError: string;
                                boxShadowFocusError: string;
                                colorActiveError: string;
                                caretColorError: string;
                                clearColor: string;
                                clearColorHover: string;
                                clearColorPressed: string;
                                paddingSingle: string;
                                paddingMultiple: string;
                                clearSize: string;
                                arrowSize: string;
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
        menuElRef: globalThis.Ref<HTMLDivElement | null>;
        mergedStatus: globalThis.ComputedRef<FormValidationStatus | undefined>;
        triggerInstRef: globalThis.Ref<{
            isComposing: boolean;
            focus: () => void;
            focusInput: () => void;
            blur: () => void;
            $el: HTMLElement;
        } | null>;
        followerInstRef: globalThis.Ref<{
            syncPosition: () => void;
        } | null>;
        treeInstRef: globalThis.Ref<{
            handleKeydown: (e: KeyboardEvent) => void;
        } | null>;
        mergedClsPrefix: globalThis.ComputedRef<string>;
        mergedValue: globalThis.ComputedRef<
            string | number | (string | number)[] | null
        >;
        mergedShow: globalThis.ComputedRef<boolean>;
        namespace: globalThis.ComputedRef<string | undefined>;
        adjustedTo: globalThis.ComputedRef<string | HTMLElement>;
        isMounted: Readonly<globalThis.Ref<boolean>>;
        focused: globalThis.Ref<boolean>;
        menuPadding: globalThis.ComputedRef<string>;
        mergedPlaceholder: globalThis.ComputedRef<string>;
        mergedExpandedKeys: globalThis.ComputedRef<Key[] | undefined>;
        treeSelectedKeys: globalThis.ComputedRef<Key[]>;
        treeCheckedKeys: globalThis.ComputedRef<Key[]>;
        mergedSize: globalThis.ComputedRef<'small' | 'medium' | 'large'>;
        mergedDisabled: globalThis.ComputedRef<boolean>;
        selectedOption: globalThis.ComputedRef<SelectBaseOption<
            string | number,
            | string
            | ((
                  option: SelectBaseOption<string | number, string | any>,
                  selected: boolean
              ) => VNodeChild)
        > | null>;
        selectedOptions: globalThis.ComputedRef<
            | SelectBaseOption<
                  string | number,
                  | string
                  | ((
                        option: SelectBaseOption<string | number, string | any>,
                        selected: boolean
                    ) => VNodeChild)
              >[]
            | null
        >;
        pattern: globalThis.Ref<string>;
        pendingNodeKey: globalThis.Ref<string | number | null>;
        mergedCascade: globalThis.ComputedRef<boolean>;
        mergedFilter: globalThis.ComputedRef<
            (pattern: string, node: TreeOption) => boolean
        >;
        selectionRenderTag: globalThis.ComputedRef<
            | (({
                  option,
                  handleClose,
              }: {
                  option: SelectOption;
                  handleClose: () => void;
              }) => VNodeChild)
            | undefined
        >;
        handleTriggerOrMenuResize: () => void;
        doUpdateExpandedKeys: (
            keys: Key[],
            option: Array<TreeSelectOption | null>,
            meta:
                | {
                      node: TreeSelectOption;
                      action: 'expand' | 'collapse';
                  }
                | {
                      node: null;
                      action: 'filter';
                  }
        ) => void;
        handleMenuLeave: () => void;
        handleTriggerClick: () => void;
        handleMenuClickoutside: (e: MouseEvent) => void;
        handleUpdateCheckedKeys: (
            keys: Key[],
            _: unknown,
            meta: {
                node: TreeOption | null;
                action: 'check' | 'uncheck';
            }
        ) => void;
        handleUpdateIndeterminateKeys: (keys: Key[]) => void;
        handleTriggerFocus: (e: FocusEvent) => void;
        handleTriggerBlur: (e: FocusEvent) => void;
        handleMenuFocusin: (e: FocusEvent) => void;
        handleMenuFocusout: (e: FocusEvent) => void;
        handleClear: (e: MouseEvent) => void;
        handleDeleteOption: (option: SelectBaseOption) => void;
        handlePatternInput: (e: InputEvent) => void;
        handleKeydown: (e: KeyboardEvent) => void;
        handleTabOut: () => void;
        handleMenuMousedown: (e: MouseEvent) => void;
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
                menuPadding: string;
                menuColor: string;
                menuBoxShadow: string;
                menuBorderRadius: string;
                menuHeight: string;
                actionDividerColor: string;
                actionTextColor: string;
                actionPadding: string;
            };
            peers: {
                Tree: import('../../_mixins').Theme<
                    'Tree',
                    {
                        fontSize: string;
                        nodeBorderRadius: string;
                        nodeColorHover: string;
                        nodeColorPressed: string;
                        nodeColorActive: string;
                        arrowColor: string;
                        nodeTextColor: string;
                        nodeTextColorDisabled: string;
                        loadingColor: string;
                        dropMarkColor: string;
                    },
                    {
                        Checkbox: import('../../_mixins').Theme<
                            'Checkbox',
                            {
                                labelLineHeight: string;
                                fontSizeSmall: string;
                                fontSizeMedium: string;
                                fontSizeLarge: string;
                                borderRadius: string;
                                color: string;
                                colorChecked: string;
                                colorDisabled: string;
                                colorDisabledChecked: string;
                                colorTableHeader: string;
                                colorTableHeaderModal: string;
                                colorTableHeaderPopover: string;
                                checkMarkColor: string;
                                checkMarkColorDisabled: string;
                                checkMarkColorDisabledChecked: string;
                                border: string;
                                borderDisabled: string;
                                borderDisabledChecked: string;
                                borderChecked: string;
                                borderFocus: string;
                                boxShadowFocus: string;
                                textColor: string;
                                textColorDisabled: string;
                                sizeSmall: string;
                                sizeMedium: string;
                                sizeLarge: string;
                                labelPadding: string;
                                labelFontWeight: string;
                            },
                            any
                        >;
                        Scrollbar: import('../../_mixins').Theme<
                            'Scrollbar',
                            {
                                color: string;
                                colorHover: string;
                            },
                            any
                        >;
                        Empty: import('../../_mixins').Theme<
                            'Empty',
                            {
                                fontSizeSmall: string;
                                fontSizeMedium: string;
                                fontSizeLarge: string;
                                fontSizeHuge: string;
                                textColor: string;
                                iconColor: string;
                                extraTextColor: string;
                                iconSizeSmall: string;
                                iconSizeMedium: string;
                                iconSizeLarge: string;
                                iconSizeHuge: string;
                            },
                            any
                        >;
                    }
                >;
                Empty: import('../../_mixins').Theme<
                    'Empty',
                    {
                        fontSizeSmall: string;
                        fontSizeMedium: string;
                        fontSizeLarge: string;
                        fontSizeHuge: string;
                        textColor: string;
                        iconColor: string;
                        extraTextColor: string;
                        iconSizeSmall: string;
                        iconSizeMedium: string;
                        iconSizeLarge: string;
                        iconSizeHuge: string;
                    },
                    any
                >;
                InternalSelection: import('../../_mixins').Theme<
                    'InternalSelection',
                    {
                        fontSizeTiny: string;
                        fontSizeSmall: string;
                        fontSizeMedium: string;
                        fontSizeLarge: string;
                        heightTiny: string;
                        heightSmall: string;
                        heightMedium: string;
                        heightLarge: string;
                        borderRadius: string;
                        textColor: string;
                        textColorDisabled: string;
                        placeholderColor: string;
                        placeholderColorDisabled: string;
                        color: string;
                        colorDisabled: string;
                        colorActive: string;
                        border: string;
                        borderHover: string;
                        borderActive: string;
                        borderFocus: string;
                        boxShadowHover: string;
                        boxShadowActive: string;
                        boxShadowFocus: string;
                        caretColor: string;
                        arrowColor: string;
                        arrowColorDisabled: string;
                        loadingColor: string;
                        borderWarning: string;
                        borderHoverWarning: string;
                        borderActiveWarning: string;
                        borderFocusWarning: string;
                        boxShadowHoverWarning: string;
                        boxShadowActiveWarning: string;
                        boxShadowFocusWarning: string;
                        colorActiveWarning: string;
                        caretColorWarning: string;
                        borderError: string;
                        borderHoverError: string;
                        borderActiveError: string;
                        borderFocusError: string;
                        boxShadowHoverError: string;
                        boxShadowActiveError: string;
                        boxShadowFocusError: string;
                        colorActiveError: string;
                        caretColorError: string;
                        clearColor: string;
                        clearColorHover: string;
                        clearColorPressed: string;
                        paddingSingle: string;
                        paddingMultiple: string;
                        clearSize: string;
                        arrowSize: string;
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
                Tree?:
                    | {
                          peers?:
                              | {
                                    Checkbox?:
                                        | import('../../_mixins/use-theme').ExtractThemeOverrides<
                                              import('../../_mixins').Theme<
                                                  'Checkbox',
                                                  {
                                                      labelLineHeight: string;
                                                      fontSizeSmall: string;
                                                      fontSizeMedium: string;
                                                      fontSizeLarge: string;
                                                      borderRadius: string;
                                                      color: string;
                                                      colorChecked: string;
                                                      colorDisabled: string;
                                                      colorDisabledChecked: string;
                                                      colorTableHeader: string;
                                                      colorTableHeaderModal: string;
                                                      colorTableHeaderPopover: string;
                                                      checkMarkColor: string;
                                                      checkMarkColorDisabled: string;
                                                      checkMarkColorDisabledChecked: string;
                                                      border: string;
                                                      borderDisabled: string;
                                                      borderDisabledChecked: string;
                                                      borderChecked: string;
                                                      borderFocus: string;
                                                      boxShadowFocus: string;
                                                      textColor: string;
                                                      textColorDisabled: string;
                                                      sizeSmall: string;
                                                      sizeMedium: string;
                                                      sizeLarge: string;
                                                      labelPadding: string;
                                                      labelFontWeight: string;
                                                  },
                                                  any
                                              >
                                          >
                                        | undefined;
                                    Scrollbar?:
                                        | import('../../_mixins/use-theme').ExtractThemeOverrides<
                                              import('../../_mixins').Theme<
                                                  'Scrollbar',
                                                  {
                                                      color: string;
                                                      colorHover: string;
                                                  },
                                                  any
                                              >
                                          >
                                        | undefined;
                                    Empty?:
                                        | import('../../_mixins/use-theme').ExtractThemeOverrides<
                                              import('../../_mixins').Theme<
                                                  'Empty',
                                                  {
                                                      fontSizeSmall: string;
                                                      fontSizeMedium: string;
                                                      fontSizeLarge: string;
                                                      fontSizeHuge: string;
                                                      textColor: string;
                                                      iconColor: string;
                                                      extraTextColor: string;
                                                      iconSizeSmall: string;
                                                      iconSizeMedium: string;
                                                      iconSizeLarge: string;
                                                      iconSizeHuge: string;
                                                  },
                                                  any
                                              >
                                          >
                                        | undefined;
                                }
                              | undefined;
                      }
                    | undefined;
                Empty?:
                    | {
                          peers?:
                              | {
                                    [x: string]: any;
                                }
                              | undefined;
                      }
                    | undefined;
                InternalSelection?:
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
        cssVars:
            | globalThis.ComputedRef<{
                  '--n-menu-box-shadow': string;
                  '--n-menu-border-radius': string;
                  '--n-menu-color': string;
                  '--n-menu-height': string;
                  '--n-bezier': string;
                  '--n-action-padding': string;
                  '--n-action-text-color': string;
                  '--n-action-divider-color': string;
              }>
            | undefined;
        themeClass: globalThis.Ref<string> | undefined;
        onRender: (() => void) | undefined;
        getCheckedData: () => {
            keys: (string | number)[];
            options: (TreeSelectOption | null)[];
        };
        getIndeterminateData: () => {
            keys: (string | number)[];
            options: (TreeSelectOption | null)[];
        };
        focus: () => void;
        blur: () => void;
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
            readonly renderLabel: PropType<
                import('./interface').TreeSelectRenderTreePart
            >;
            readonly renderPrefix: PropType<
                import('./interface').TreeSelectRenderTreePart
            >;
            readonly renderSuffix: PropType<
                import('./interface').TreeSelectRenderTreePart
            >;
            readonly nodeProps: PropType<TreeSelectNodeProps>;
            readonly onBlur: PropType<(e: FocusEvent) => void>;
            readonly onFocus: PropType<(e: FocusEvent) => void>;
            readonly onLoad: PropType<OnLoad>;
            readonly onUpdateShow: PropType<
                MaybeArray<(show: boolean) => void>
            >;
            readonly onUpdateValue: PropType<MaybeArray<OnUpdateValue>>;
            readonly 'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>;
            readonly 'onUpdate:show': PropType<
                MaybeArray<(show: boolean) => void>
            >;
            /**
             * @deprecated
             */
            readonly leafOnly: BooleanConstructor;
            readonly allowCheckingNotLoaded: BooleanConstructor;
            readonly filter: PropType<
                (pattern: string, node: TreeOption) => boolean
            >;
            readonly defaultExpandAll: BooleanConstructor;
            readonly expandedKeys: PropType<Key[]>;
            readonly keyField: {
                readonly type: StringConstructor;
                readonly default: 'key';
            };
            readonly labelField: {
                readonly type: StringConstructor;
                readonly default: 'label';
            };
            readonly childrenField: {
                readonly type: StringConstructor;
                readonly default: 'children';
            };
            readonly disabledField: {
                readonly type: StringConstructor;
                readonly default: 'disabled';
            };
            /**
             * @deprecated
             */
            readonly defaultExpandedKeys: {
                readonly type: PropType<Key[]>;
                readonly default: () => never[];
            };
            readonly indeterminateKeys: PropType<Key[]>;
            readonly renderSwitcherIcon: PropType<
                import('../../tree/src/interface').RenderSwitcherIcon
            >;
            readonly onUpdateIndeterminateKeys: PropType<
                MaybeArray<
                    import('../../tree/src/Tree').OnUpdateIndeterminateKeys
                >
            >;
            readonly 'onUpdate:indeterminateKeys': PropType<
                MaybeArray<
                    import('../../tree/src/Tree').OnUpdateIndeterminateKeys
                >
            >;
            readonly onUpdateExpandedKeys: PropType<
                MaybeArray<import('../../tree/src/Tree').onUpdateExpandedKeys>
            >;
            readonly 'onUpdate:expandedKeys': PropType<
                MaybeArray<import('../../tree/src/Tree').onUpdateExpandedKeys>
            >;
            readonly bordered: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            readonly cascade: BooleanConstructor;
            readonly checkable: BooleanConstructor;
            readonly clearable: BooleanConstructor;
            readonly clearFilterAfterSelect: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            readonly consistentMenuWidth: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            readonly defaultShow: BooleanConstructor;
            readonly defaultValue: {
                readonly type: PropType<
                    string | number | (string | number)[] | null
                >;
                readonly default: null;
            };
            readonly disabled: {
                readonly type: PropType<boolean | undefined>;
                readonly default: undefined;
            };
            readonly filterable: BooleanConstructor;
            readonly checkStrategy: {
                readonly type: PropType<CheckStrategy>;
                readonly default: 'all';
            };
            readonly loading: BooleanConstructor;
            readonly maxTagCount: PropType<number | 'responsive'>;
            readonly multiple: BooleanConstructor;
            readonly showPath: BooleanConstructor;
            readonly separator: {
                readonly type: StringConstructor;
                readonly default: ' / ';
            };
            readonly options: {
                readonly type: PropType<TreeSelectOption[]>;
                readonly default: () => never[];
            };
            readonly placeholder: StringConstructor;
            readonly placement: {
                readonly type: PropType<FollowerPlacement>;
                readonly default: 'bottom-start';
            };
            readonly show: {
                readonly type: PropType<boolean | undefined>;
                readonly default: undefined;
            };
            readonly size: PropType<'small' | 'medium' | 'large'>;
            readonly value: PropType<
                string | number | (string | number)[] | null
            >;
            readonly to: {
                type: PropType<string | boolean | HTMLElement>;
                default: undefined;
            };
            readonly menuProps: PropType<HTMLAttributes>;
            readonly virtualScroll: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            readonly status: PropType<FormValidationStatus>;
            readonly renderTag: PropType<TreeSelectRenderTag>;
            readonly theme: PropType<
                import('../../_mixins').Theme<
                    'TreeSelect',
                    {
                        menuPadding: string;
                        menuColor: string;
                        menuBoxShadow: string;
                        menuBorderRadius: string;
                        menuHeight: string;
                        actionDividerColor: string;
                        actionTextColor: string;
                        actionPadding: string;
                    },
                    {
                        Tree: import('../../_mixins').Theme<
                            'Tree',
                            {
                                fontSize: string;
                                nodeBorderRadius: string;
                                nodeColorHover: string;
                                nodeColorPressed: string;
                                nodeColorActive: string;
                                arrowColor: string;
                                nodeTextColor: string;
                                nodeTextColorDisabled: string;
                                loadingColor: string;
                                dropMarkColor: string;
                            },
                            {
                                Checkbox: import('../../_mixins').Theme<
                                    'Checkbox',
                                    {
                                        labelLineHeight: string;
                                        fontSizeSmall: string;
                                        fontSizeMedium: string;
                                        fontSizeLarge: string;
                                        borderRadius: string;
                                        color: string;
                                        colorChecked: string;
                                        colorDisabled: string;
                                        colorDisabledChecked: string;
                                        colorTableHeader: string;
                                        colorTableHeaderModal: string;
                                        colorTableHeaderPopover: string;
                                        checkMarkColor: string;
                                        checkMarkColorDisabled: string;
                                        checkMarkColorDisabledChecked: string;
                                        border: string;
                                        borderDisabled: string;
                                        borderDisabledChecked: string;
                                        borderChecked: string;
                                        borderFocus: string;
                                        boxShadowFocus: string;
                                        textColor: string;
                                        textColorDisabled: string;
                                        sizeSmall: string;
                                        sizeMedium: string;
                                        sizeLarge: string;
                                        labelPadding: string;
                                        labelFontWeight: string;
                                    },
                                    any
                                >;
                                Scrollbar: import('../../_mixins').Theme<
                                    'Scrollbar',
                                    {
                                        color: string;
                                        colorHover: string;
                                    },
                                    any
                                >;
                                Empty: import('../../_mixins').Theme<
                                    'Empty',
                                    {
                                        fontSizeSmall: string;
                                        fontSizeMedium: string;
                                        fontSizeLarge: string;
                                        fontSizeHuge: string;
                                        textColor: string;
                                        iconColor: string;
                                        extraTextColor: string;
                                        iconSizeSmall: string;
                                        iconSizeMedium: string;
                                        iconSizeLarge: string;
                                        iconSizeHuge: string;
                                    },
                                    any
                                >;
                            }
                        >;
                        Empty: import('../../_mixins').Theme<
                            'Empty',
                            {
                                fontSizeSmall: string;
                                fontSizeMedium: string;
                                fontSizeLarge: string;
                                fontSizeHuge: string;
                                textColor: string;
                                iconColor: string;
                                extraTextColor: string;
                                iconSizeSmall: string;
                                iconSizeMedium: string;
                                iconSizeLarge: string;
                                iconSizeHuge: string;
                            },
                            any
                        >;
                        InternalSelection: import('../../_mixins').Theme<
                            'InternalSelection',
                            {
                                fontSizeTiny: string;
                                fontSizeSmall: string;
                                fontSizeMedium: string;
                                fontSizeLarge: string;
                                heightTiny: string;
                                heightSmall: string;
                                heightMedium: string;
                                heightLarge: string;
                                borderRadius: string;
                                textColor: string;
                                textColorDisabled: string;
                                placeholderColor: string;
                                placeholderColorDisabled: string;
                                color: string;
                                colorDisabled: string;
                                colorActive: string;
                                border: string;
                                borderHover: string;
                                borderActive: string;
                                borderFocus: string;
                                boxShadowHover: string;
                                boxShadowActive: string;
                                boxShadowFocus: string;
                                caretColor: string;
                                arrowColor: string;
                                arrowColorDisabled: string;
                                loadingColor: string;
                                borderWarning: string;
                                borderHoverWarning: string;
                                borderActiveWarning: string;
                                borderFocusWarning: string;
                                boxShadowHoverWarning: string;
                                boxShadowActiveWarning: string;
                                boxShadowFocusWarning: string;
                                colorActiveWarning: string;
                                caretColorWarning: string;
                                borderError: string;
                                borderHoverError: string;
                                borderActiveError: string;
                                borderFocusError: string;
                                boxShadowHoverError: string;
                                boxShadowActiveError: string;
                                boxShadowFocusError: string;
                                colorActiveError: string;
                                caretColorError: string;
                                clearColor: string;
                                clearColorHover: string;
                                clearColorPressed: string;
                                paddingSingle: string;
                                paddingMultiple: string;
                                clearSize: string;
                                arrowSize: string;
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
                        'TreeSelect',
                        {
                            menuPadding: string;
                            menuColor: string;
                            menuBoxShadow: string;
                            menuBorderRadius: string;
                            menuHeight: string;
                            actionDividerColor: string;
                            actionTextColor: string;
                            actionPadding: string;
                        },
                        {
                            Tree: import('../../_mixins').Theme<
                                'Tree',
                                {
                                    fontSize: string;
                                    nodeBorderRadius: string;
                                    nodeColorHover: string;
                                    nodeColorPressed: string;
                                    nodeColorActive: string;
                                    arrowColor: string;
                                    nodeTextColor: string;
                                    nodeTextColorDisabled: string;
                                    loadingColor: string;
                                    dropMarkColor: string;
                                },
                                {
                                    Checkbox: import('../../_mixins').Theme<
                                        'Checkbox',
                                        {
                                            labelLineHeight: string;
                                            fontSizeSmall: string;
                                            fontSizeMedium: string;
                                            fontSizeLarge: string;
                                            borderRadius: string;
                                            color: string;
                                            colorChecked: string;
                                            colorDisabled: string;
                                            colorDisabledChecked: string;
                                            colorTableHeader: string;
                                            colorTableHeaderModal: string;
                                            colorTableHeaderPopover: string;
                                            checkMarkColor: string;
                                            checkMarkColorDisabled: string;
                                            checkMarkColorDisabledChecked: string;
                                            border: string;
                                            borderDisabled: string;
                                            borderDisabledChecked: string;
                                            borderChecked: string;
                                            borderFocus: string;
                                            boxShadowFocus: string;
                                            textColor: string;
                                            textColorDisabled: string;
                                            sizeSmall: string;
                                            sizeMedium: string;
                                            sizeLarge: string;
                                            labelPadding: string;
                                            labelFontWeight: string;
                                        },
                                        any
                                    >;
                                    Scrollbar: import('../../_mixins').Theme<
                                        'Scrollbar',
                                        {
                                            color: string;
                                            colorHover: string;
                                        },
                                        any
                                    >;
                                    Empty: import('../../_mixins').Theme<
                                        'Empty',
                                        {
                                            fontSizeSmall: string;
                                            fontSizeMedium: string;
                                            fontSizeLarge: string;
                                            fontSizeHuge: string;
                                            textColor: string;
                                            iconColor: string;
                                            extraTextColor: string;
                                            iconSizeSmall: string;
                                            iconSizeMedium: string;
                                            iconSizeLarge: string;
                                            iconSizeHuge: string;
                                        },
                                        any
                                    >;
                                }
                            >;
                            Empty: import('../../_mixins').Theme<
                                'Empty',
                                {
                                    fontSizeSmall: string;
                                    fontSizeMedium: string;
                                    fontSizeLarge: string;
                                    fontSizeHuge: string;
                                    textColor: string;
                                    iconColor: string;
                                    extraTextColor: string;
                                    iconSizeSmall: string;
                                    iconSizeMedium: string;
                                    iconSizeLarge: string;
                                    iconSizeHuge: string;
                                },
                                any
                            >;
                            InternalSelection: import('../../_mixins').Theme<
                                'InternalSelection',
                                {
                                    fontSizeTiny: string;
                                    fontSizeSmall: string;
                                    fontSizeMedium: string;
                                    fontSizeLarge: string;
                                    heightTiny: string;
                                    heightSmall: string;
                                    heightMedium: string;
                                    heightLarge: string;
                                    borderRadius: string;
                                    textColor: string;
                                    textColorDisabled: string;
                                    placeholderColor: string;
                                    placeholderColorDisabled: string;
                                    color: string;
                                    colorDisabled: string;
                                    colorActive: string;
                                    border: string;
                                    borderHover: string;
                                    borderActive: string;
                                    borderFocus: string;
                                    boxShadowHover: string;
                                    boxShadowActive: string;
                                    boxShadowFocus: string;
                                    caretColor: string;
                                    arrowColor: string;
                                    arrowColorDisabled: string;
                                    loadingColor: string;
                                    borderWarning: string;
                                    borderHoverWarning: string;
                                    borderActiveWarning: string;
                                    borderFocusWarning: string;
                                    boxShadowHoverWarning: string;
                                    boxShadowActiveWarning: string;
                                    boxShadowFocusWarning: string;
                                    colorActiveWarning: string;
                                    caretColorWarning: string;
                                    borderError: string;
                                    borderHoverError: string;
                                    borderActiveError: string;
                                    borderFocusError: string;
                                    boxShadowHoverError: string;
                                    boxShadowActiveError: string;
                                    boxShadowFocusError: string;
                                    colorActiveError: string;
                                    caretColorError: string;
                                    clearColor: string;
                                    clearColorHover: string;
                                    clearColorPressed: string;
                                    paddingSingle: string;
                                    paddingMultiple: string;
                                    clearSize: string;
                                    arrowSize: string;
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
                        'TreeSelect',
                        {
                            menuPadding: string;
                            menuColor: string;
                            menuBoxShadow: string;
                            menuBorderRadius: string;
                            menuHeight: string;
                            actionDividerColor: string;
                            actionTextColor: string;
                            actionPadding: string;
                        },
                        {
                            Tree: import('../../_mixins').Theme<
                                'Tree',
                                {
                                    fontSize: string;
                                    nodeBorderRadius: string;
                                    nodeColorHover: string;
                                    nodeColorPressed: string;
                                    nodeColorActive: string;
                                    arrowColor: string;
                                    nodeTextColor: string;
                                    nodeTextColorDisabled: string;
                                    loadingColor: string;
                                    dropMarkColor: string;
                                },
                                {
                                    Checkbox: import('../../_mixins').Theme<
                                        'Checkbox',
                                        {
                                            labelLineHeight: string;
                                            fontSizeSmall: string;
                                            fontSizeMedium: string;
                                            fontSizeLarge: string;
                                            borderRadius: string;
                                            color: string;
                                            colorChecked: string;
                                            colorDisabled: string;
                                            colorDisabledChecked: string;
                                            colorTableHeader: string;
                                            colorTableHeaderModal: string;
                                            colorTableHeaderPopover: string;
                                            checkMarkColor: string;
                                            checkMarkColorDisabled: string;
                                            checkMarkColorDisabledChecked: string;
                                            border: string;
                                            borderDisabled: string;
                                            borderDisabledChecked: string;
                                            borderChecked: string;
                                            borderFocus: string;
                                            boxShadowFocus: string;
                                            textColor: string;
                                            textColorDisabled: string;
                                            sizeSmall: string;
                                            sizeMedium: string;
                                            sizeLarge: string;
                                            labelPadding: string;
                                            labelFontWeight: string;
                                        },
                                        any
                                    >;
                                    Scrollbar: import('../../_mixins').Theme<
                                        'Scrollbar',
                                        {
                                            color: string;
                                            colorHover: string;
                                        },
                                        any
                                    >;
                                    Empty: import('../../_mixins').Theme<
                                        'Empty',
                                        {
                                            fontSizeSmall: string;
                                            fontSizeMedium: string;
                                            fontSizeLarge: string;
                                            fontSizeHuge: string;
                                            textColor: string;
                                            iconColor: string;
                                            extraTextColor: string;
                                            iconSizeSmall: string;
                                            iconSizeMedium: string;
                                            iconSizeLarge: string;
                                            iconSizeHuge: string;
                                        },
                                        any
                                    >;
                                }
                            >;
                            Empty: import('../../_mixins').Theme<
                                'Empty',
                                {
                                    fontSizeSmall: string;
                                    fontSizeMedium: string;
                                    fontSizeLarge: string;
                                    fontSizeHuge: string;
                                    textColor: string;
                                    iconColor: string;
                                    extraTextColor: string;
                                    iconSizeSmall: string;
                                    iconSizeMedium: string;
                                    iconSizeLarge: string;
                                    iconSizeHuge: string;
                                },
                                any
                            >;
                            InternalSelection: import('../../_mixins').Theme<
                                'InternalSelection',
                                {
                                    fontSizeTiny: string;
                                    fontSizeSmall: string;
                                    fontSizeMedium: string;
                                    fontSizeLarge: string;
                                    heightTiny: string;
                                    heightSmall: string;
                                    heightMedium: string;
                                    heightLarge: string;
                                    borderRadius: string;
                                    textColor: string;
                                    textColorDisabled: string;
                                    placeholderColor: string;
                                    placeholderColorDisabled: string;
                                    color: string;
                                    colorDisabled: string;
                                    colorActive: string;
                                    border: string;
                                    borderHover: string;
                                    borderActive: string;
                                    borderFocus: string;
                                    boxShadowHover: string;
                                    boxShadowActive: string;
                                    boxShadowFocus: string;
                                    caretColor: string;
                                    arrowColor: string;
                                    arrowColorDisabled: string;
                                    loadingColor: string;
                                    borderWarning: string;
                                    borderHoverWarning: string;
                                    borderActiveWarning: string;
                                    borderFocusWarning: string;
                                    boxShadowHoverWarning: string;
                                    boxShadowActiveWarning: string;
                                    boxShadowFocusWarning: string;
                                    colorActiveWarning: string;
                                    caretColorWarning: string;
                                    borderError: string;
                                    borderHoverError: string;
                                    borderActiveError: string;
                                    borderFocusError: string;
                                    boxShadowHoverError: string;
                                    boxShadowActiveError: string;
                                    boxShadowFocusError: string;
                                    colorActiveError: string;
                                    caretColorError: string;
                                    clearColor: string;
                                    clearColorHover: string;
                                    clearColorPressed: string;
                                    paddingSingle: string;
                                    paddingMultiple: string;
                                    clearSize: string;
                                    arrowSize: string;
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
        readonly show: boolean | undefined;
        readonly separator: string;
        readonly multiple: boolean;
        readonly disabled: boolean | undefined;
        readonly to: string | boolean | HTMLElement;
        readonly options: TreeSelectOption[];
        readonly loading: boolean;
        readonly bordered: boolean;
        readonly placement: FollowerPlacement;
        readonly keyField: string;
        readonly defaultShow: boolean;
        readonly virtualScroll: boolean;
        readonly labelField: string;
        readonly clearable: boolean;
        readonly clearFilterAfterSelect: boolean;
        readonly defaultValue: string | number | (string | number)[] | null;
        readonly filterable: boolean;
        readonly consistentMenuWidth: boolean;
        readonly childrenField: string;
        readonly defaultExpandAll: boolean;
        readonly allowCheckingNotLoaded: boolean;
        readonly cascade: boolean;
        readonly checkable: boolean;
        readonly showPath: boolean;
        readonly checkStrategy: CheckStrategy;
        readonly disabledField: string;
        readonly leafOnly: boolean;
        readonly defaultExpandedKeys: Key[];
    },
    {}
>;
export default _default;
