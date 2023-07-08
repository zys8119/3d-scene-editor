import { PropType, VNodeChild } from 'vue';
import { TreeMateOptions, CheckStrategy } from 'treemate';
import type { ExtractPublicPropTypes, MaybeArray } from '../../_utils';
import type {
    TreeDragInfo,
    TreeDropInfo,
    TreeOptions,
    Key,
    TreeOption,
    AllowDrop,
    RenderSwitcherIcon,
    TreeNodeProps,
    CheckOnClick,
    GetChildren,
    OnLoad,
} from './interface';
import { defaultAllowDrop } from './dnd';
export declare function createTreeMateOptions<T>(
    keyField: string,
    childrenField: string,
    disabledField: string,
    getChildren: GetChildren | undefined
): TreeMateOptions<T, T, T>;
export type OnUpdateCheckedKeys = (
    value: Array<string & number>,
    option: Array<TreeOption | null>,
    meta: {
        node: TreeOption | null;
        action: 'check' | 'uncheck';
    }
) => void;
export type OnUpdateCheckedKeysImpl = (
    value: Key[],
    option: Array<TreeOption | null>,
    meta: {
        node: TreeOption | null;
        action: 'check' | 'uncheck';
    }
) => void;
export type OnUpdateIndeterminateKeys = (
    value: Array<string & number>,
    option: Array<TreeOption | null>
) => void;
export type OnUpdateIndeterminateKeysImpl = (
    value: Key[],
    option: Array<TreeOption | null>
) => void;
export type OnUpdateSelectedKeys = (
    value: Array<string & number>,
    option: Array<TreeOption | null>,
    meta: {
        node: TreeOption | null;
        action: 'select' | 'unselect';
    }
) => void;
export type OnUpdateSelectedKeysImpl = (
    value: Key[],
    option: Array<TreeOption | null>,
    meta: {
        node: TreeOption | null;
        action: 'select' | 'unselect';
    }
) => void;
export type onUpdateExpandedKeys = (
    value: Array<string & number>,
    option: Array<TreeOption | null>,
    meta:
        | {
              node: TreeOption;
              action: 'expand' | 'collapse';
          }
        | {
              node: null;
              action: 'filter';
          }
) => void;
export type OnUpdateExpandedKeysImpl = (
    value: Key[],
    option: Array<TreeOption | null>,
    meta:
        | {
              node: TreeOption;
              action: 'expand' | 'collapse';
          }
        | {
              node: null;
              action: 'filter';
          }
) => void;
export declare const treeSharedProps: {
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
    readonly defaultExpandedKeys: {
        readonly type: PropType<Key[]>;
        readonly default: () => never[];
    };
    readonly indeterminateKeys: PropType<Key[]>;
    readonly renderSwitcherIcon: PropType<RenderSwitcherIcon>;
    readonly onUpdateIndeterminateKeys: PropType<
        MaybeArray<OnUpdateIndeterminateKeys>
    >;
    readonly 'onUpdate:indeterminateKeys': PropType<
        MaybeArray<OnUpdateIndeterminateKeys>
    >;
    readonly onUpdateExpandedKeys: PropType<MaybeArray<onUpdateExpandedKeys>>;
    readonly 'onUpdate:expandedKeys': PropType<
        MaybeArray<onUpdateExpandedKeys>
    >;
};
export declare const treeProps: {
    readonly internalTreeSelect: BooleanConstructor;
    readonly internalScrollable: BooleanConstructor;
    readonly internalScrollablePadding: StringConstructor;
    readonly internalRenderEmpty: PropType<() => VNodeChild>;
    readonly internalHighlightKeySet: PropType<Set<Key> | null>;
    readonly internalUnifySelectCheck: BooleanConstructor;
    readonly internalCheckboxFocusable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly internalFocusable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly checkStrategy: {
        readonly type: PropType<CheckStrategy>;
        readonly default: 'all';
    };
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
    readonly defaultExpandedKeys: {
        readonly type: PropType<Key[]>;
        readonly default: () => never[];
    };
    readonly indeterminateKeys: PropType<Key[]>;
    readonly renderSwitcherIcon: PropType<RenderSwitcherIcon>;
    readonly onUpdateIndeterminateKeys: PropType<
        MaybeArray<OnUpdateIndeterminateKeys>
    >;
    readonly 'onUpdate:indeterminateKeys': PropType<
        MaybeArray<OnUpdateIndeterminateKeys>
    >;
    readonly onUpdateExpandedKeys: PropType<MaybeArray<onUpdateExpandedKeys>>;
    readonly 'onUpdate:expandedKeys': PropType<
        MaybeArray<onUpdateExpandedKeys>
    >;
    readonly accordion: BooleanConstructor;
    readonly showIrrelevantNodes: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly data: {
        readonly type: PropType<TreeOptions>;
        readonly default: () => never[];
    };
    readonly expandOnDragenter: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly expandOnClick: BooleanConstructor;
    readonly checkOnClick: {
        readonly type: PropType<boolean | CheckOnClick>;
        readonly default: false;
    };
    readonly cancelable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly checkable: BooleanConstructor;
    readonly draggable: BooleanConstructor;
    readonly blockNode: BooleanConstructor;
    readonly blockLine: BooleanConstructor;
    readonly disabled: BooleanConstructor;
    readonly checkedKeys: PropType<Key[]>;
    readonly defaultCheckedKeys: {
        readonly type: PropType<Key[]>;
        readonly default: () => never[];
    };
    readonly selectedKeys: PropType<Key[]>;
    readonly defaultSelectedKeys: {
        readonly type: PropType<Key[]>;
        readonly default: () => never[];
    };
    readonly multiple: BooleanConstructor;
    readonly pattern: {
        readonly type: StringConstructor;
        readonly default: '';
    };
    readonly onLoad: PropType<OnLoad>;
    readonly cascade: BooleanConstructor;
    readonly selectable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly indent: {
        readonly type: NumberConstructor;
        readonly default: 16;
    };
    readonly allowDrop: {
        readonly type: PropType<AllowDrop>;
        readonly default: typeof defaultAllowDrop;
    };
    readonly animated: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly checkboxPlacement: {
        readonly type: PropType<'left' | 'right'>;
        readonly default: 'left';
    };
    readonly virtualScroll: BooleanConstructor;
    readonly watchProps: PropType<
        ('defaultExpandedKeys' | 'defaultCheckedKeys' | 'defaultSelectedKeys')[]
    >;
    readonly renderLabel: PropType<
        ({
            option,
            checked,
            selected,
        }: import('./interface').TreeRenderProps) => VNodeChild
    >;
    readonly renderPrefix: PropType<
        ({
            option,
            checked,
            selected,
        }: import('./interface').TreeRenderProps) => VNodeChild
    >;
    readonly renderSuffix: PropType<
        ({
            option,
            checked,
            selected,
        }: import('./interface').TreeRenderProps) => VNodeChild
    >;
    readonly nodeProps: PropType<TreeNodeProps>;
    readonly keyboard: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly getChildren: PropType<GetChildren>;
    readonly onDragenter: PropType<MaybeArray<(e: TreeDragInfo) => void>>;
    readonly onDragleave: PropType<MaybeArray<(e: TreeDragInfo) => void>>;
    readonly onDragend: PropType<MaybeArray<(e: TreeDragInfo) => void>>;
    readonly onDragstart: PropType<MaybeArray<(e: TreeDragInfo) => void>>;
    readonly onDragover: PropType<MaybeArray<(e: TreeDragInfo) => void>>;
    readonly onDrop: PropType<MaybeArray<(e: TreeDropInfo) => void>>;
    readonly onUpdateCheckedKeys: PropType<MaybeArray<OnUpdateCheckedKeys>>;
    readonly 'onUpdate:checkedKeys': PropType<MaybeArray<OnUpdateCheckedKeys>>;
    readonly onUpdateSelectedKeys: PropType<MaybeArray<OnUpdateSelectedKeys>>;
    readonly 'onUpdate:selectedKeys': PropType<
        MaybeArray<OnUpdateSelectedKeys>
    >;
    readonly theme: PropType<
        import('../../_mixins').Theme<
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
        >
    >;
    readonly themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
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
            >
        >
    >;
    readonly builtinThemeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
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
            >
        >
    >;
};
export type TreeProps = ExtractPublicPropTypes<typeof treeProps>;
declare const _default: import('vue').DefineComponent<
    {
        readonly internalTreeSelect: BooleanConstructor;
        readonly internalScrollable: BooleanConstructor;
        readonly internalScrollablePadding: StringConstructor;
        readonly internalRenderEmpty: PropType<() => VNodeChild>;
        readonly internalHighlightKeySet: PropType<Set<Key> | null>;
        readonly internalUnifySelectCheck: BooleanConstructor;
        readonly internalCheckboxFocusable: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly internalFocusable: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly checkStrategy: {
            readonly type: PropType<CheckStrategy>;
            readonly default: 'all';
        };
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
        readonly defaultExpandedKeys: {
            readonly type: PropType<Key[]>;
            readonly default: () => never[];
        };
        readonly indeterminateKeys: PropType<Key[]>;
        readonly renderSwitcherIcon: PropType<RenderSwitcherIcon>;
        readonly onUpdateIndeterminateKeys: PropType<
            MaybeArray<OnUpdateIndeterminateKeys>
        >;
        readonly 'onUpdate:indeterminateKeys': PropType<
            MaybeArray<OnUpdateIndeterminateKeys>
        >;
        readonly onUpdateExpandedKeys: PropType<
            MaybeArray<onUpdateExpandedKeys>
        >;
        readonly 'onUpdate:expandedKeys': PropType<
            MaybeArray<onUpdateExpandedKeys>
        >;
        readonly accordion: BooleanConstructor;
        readonly showIrrelevantNodes: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly data: {
            readonly type: PropType<TreeOptions>;
            readonly default: () => never[];
        };
        readonly expandOnDragenter: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly expandOnClick: BooleanConstructor;
        readonly checkOnClick: {
            readonly type: PropType<boolean | CheckOnClick>;
            readonly default: false;
        };
        readonly cancelable: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly checkable: BooleanConstructor;
        readonly draggable: BooleanConstructor;
        readonly blockNode: BooleanConstructor;
        readonly blockLine: BooleanConstructor;
        readonly disabled: BooleanConstructor;
        readonly checkedKeys: PropType<Key[]>;
        readonly defaultCheckedKeys: {
            readonly type: PropType<Key[]>;
            readonly default: () => never[];
        };
        readonly selectedKeys: PropType<Key[]>;
        readonly defaultSelectedKeys: {
            readonly type: PropType<Key[]>;
            readonly default: () => never[];
        };
        readonly multiple: BooleanConstructor;
        readonly pattern: {
            readonly type: StringConstructor;
            readonly default: '';
        };
        readonly onLoad: PropType<OnLoad>;
        readonly cascade: BooleanConstructor;
        readonly selectable: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly indent: {
            readonly type: NumberConstructor;
            readonly default: 16;
        };
        readonly allowDrop: {
            readonly type: PropType<AllowDrop>;
            readonly default: typeof defaultAllowDrop;
        };
        readonly animated: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly checkboxPlacement: {
            readonly type: PropType<'left' | 'right'>;
            readonly default: 'left';
        };
        readonly virtualScroll: BooleanConstructor;
        readonly watchProps: PropType<
            (
                | 'defaultExpandedKeys'
                | 'defaultCheckedKeys'
                | 'defaultSelectedKeys'
            )[]
        >;
        readonly renderLabel: PropType<
            ({
                option,
                checked,
                selected,
            }: import('./interface').TreeRenderProps) => VNodeChild
        >;
        readonly renderPrefix: PropType<
            ({
                option,
                checked,
                selected,
            }: import('./interface').TreeRenderProps) => VNodeChild
        >;
        readonly renderSuffix: PropType<
            ({
                option,
                checked,
                selected,
            }: import('./interface').TreeRenderProps) => VNodeChild
        >;
        readonly nodeProps: PropType<TreeNodeProps>;
        readonly keyboard: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly getChildren: PropType<GetChildren>;
        readonly onDragenter: PropType<MaybeArray<(e: TreeDragInfo) => void>>;
        readonly onDragleave: PropType<MaybeArray<(e: TreeDragInfo) => void>>;
        readonly onDragend: PropType<MaybeArray<(e: TreeDragInfo) => void>>;
        readonly onDragstart: PropType<MaybeArray<(e: TreeDragInfo) => void>>;
        readonly onDragover: PropType<MaybeArray<(e: TreeDragInfo) => void>>;
        readonly onDrop: PropType<MaybeArray<(e: TreeDropInfo) => void>>;
        readonly onUpdateCheckedKeys: PropType<MaybeArray<OnUpdateCheckedKeys>>;
        readonly 'onUpdate:checkedKeys': PropType<
            MaybeArray<OnUpdateCheckedKeys>
        >;
        readonly onUpdateSelectedKeys: PropType<
            MaybeArray<OnUpdateSelectedKeys>
        >;
        readonly 'onUpdate:selectedKeys': PropType<
            MaybeArray<OnUpdateSelectedKeys>
        >;
        readonly theme: PropType<
            import('../../_mixins').Theme<
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
            >
        >;
        readonly themeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
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
                >
            >
        >;
        readonly builtinThemeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
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
                >
            >
        >;
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
            };
            peers: {
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
            };
            peerOverrides: {
                Checkbox?:
                    | {
                          peers?:
                              | {
                                    [x: string]: any;
                                }
                              | undefined;
                      }
                    | undefined;
                Scrollbar?:
                    | {
                          peers?:
                              | {
                                    [x: string]: any;
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
            };
        }>;
        rtlEnabled:
            | globalThis.Ref<
                  | import('../../config-provider/src/internal-interface').RtlItem
                  | undefined
              >
            | undefined;
        fNodes: globalThis.ComputedRef<
            (
                | {
                      key: import('treemate').Key;
                      rawNode: {
                          [x: string]: unknown;
                          key?: Key | undefined;
                          label?: string | undefined;
                          checkboxDisabled?: boolean | undefined;
                          disabled?: boolean | undefined;
                          isLeaf?: boolean | undefined;
                          children?: any[] | undefined;
                          prefix?: (() => VNodeChild) | undefined;
                          suffix?: (() => VNodeChild) | undefined;
                      };
                      level: number;
                      index: number;
                      isFirstChild: boolean;
                      isLastChild: boolean;
                      parent: {
                          key: import('treemate').Key;
                          rawNode: {
                              [x: string]: unknown;
                              key?: Key | undefined;
                              label?: string | undefined;
                              checkboxDisabled?: boolean | undefined;
                              disabled?: boolean | undefined;
                              isLeaf?: boolean | undefined;
                              children?: any[] | undefined;
                              prefix?: (() => VNodeChild) | undefined;
                              suffix?: (() => VNodeChild) | undefined;
                          };
                          level: number;
                          index: number;
                          isFirstChild: boolean;
                          isLastChild: boolean;
                          parent: any | null;
                          isLeaf: boolean;
                          isGroup: boolean;
                          ignored: boolean;
                          shallowLoaded: boolean;
                          disabled: boolean;
                          siblings: any[];
                          children?: any[] | undefined;
                          getPrev: (
                              options?:
                                  | import('treemate/lib/interface').GetPrevNextOptions
                                  | undefined
                          ) =>
                              | import('treemate').TreeNode<
                                    TreeOption,
                                    TreeOption,
                                    TreeOption
                                >
                              | null;
                          getNext: (
                              options?:
                                  | import('treemate/lib/interface').GetPrevNextOptions
                                  | undefined
                          ) =>
                              | import('treemate').TreeNode<
                                    TreeOption,
                                    TreeOption,
                                    TreeOption
                                >
                              | null;
                          getParent: () =>
                              | import('treemate').TreeNode<
                                    TreeOption,
                                    TreeOption,
                                    TreeOption
                                >
                              | null;
                          getChild: () =>
                              | import('treemate').TreeNode<
                                    TreeOption,
                                    TreeOption,
                                    TreeOption
                                >
                              | null;
                          contains: (
                              treeNode:
                                  | import('treemate').TreeNode<
                                        TreeOption,
                                        TreeOption,
                                        TreeOption
                                    >
                                  | null
                                  | undefined
                          ) => boolean;
                      } | null;
                      isLeaf: boolean;
                      isGroup: boolean;
                      ignored: boolean;
                      shallowLoaded: boolean;
                      disabled: boolean;
                      siblings: {
                          key: import('treemate').Key;
                          rawNode: {
                              [x: string]: unknown;
                              key?: Key | undefined;
                              label?: string | undefined;
                              checkboxDisabled?: boolean | undefined;
                              disabled?: boolean | undefined;
                              isLeaf?: boolean | undefined;
                              children?: any[] | undefined;
                              prefix?: (() => VNodeChild) | undefined;
                              suffix?: (() => VNodeChild) | undefined;
                          };
                          level: number;
                          index: number;
                          isFirstChild: boolean;
                          isLastChild: boolean;
                          parent: any | null;
                          isLeaf: boolean;
                          isGroup: boolean;
                          ignored: boolean;
                          shallowLoaded: boolean;
                          disabled: boolean;
                          siblings: any[];
                          children?: any[] | undefined;
                          getPrev: (
                              options?:
                                  | import('treemate/lib/interface').GetPrevNextOptions
                                  | undefined
                          ) =>
                              | import('treemate').TreeNode<
                                    TreeOption,
                                    TreeOption,
                                    TreeOption
                                >
                              | null;
                          getNext: (
                              options?:
                                  | import('treemate/lib/interface').GetPrevNextOptions
                                  | undefined
                          ) =>
                              | import('treemate').TreeNode<
                                    TreeOption,
                                    TreeOption,
                                    TreeOption
                                >
                              | null;
                          getParent: () =>
                              | import('treemate').TreeNode<
                                    TreeOption,
                                    TreeOption,
                                    TreeOption
                                >
                              | null;
                          getChild: () =>
                              | import('treemate').TreeNode<
                                    TreeOption,
                                    TreeOption,
                                    TreeOption
                                >
                              | null;
                          contains: (
                              treeNode:
                                  | import('treemate').TreeNode<
                                        TreeOption,
                                        TreeOption,
                                        TreeOption
                                    >
                                  | null
                                  | undefined
                          ) => boolean;
                      }[];
                      children?:
                          | {
                                key: import('treemate').Key;
                                rawNode: {
                                    [x: string]: unknown;
                                    key?: Key | undefined;
                                    label?: string | undefined;
                                    checkboxDisabled?: boolean | undefined;
                                    disabled?: boolean | undefined;
                                    isLeaf?: boolean | undefined;
                                    children?: any[] | undefined;
                                    prefix?: (() => VNodeChild) | undefined;
                                    suffix?: (() => VNodeChild) | undefined;
                                };
                                level: number;
                                index: number;
                                isFirstChild: boolean;
                                isLastChild: boolean;
                                parent: any | null;
                                isLeaf: boolean;
                                isGroup: boolean;
                                ignored: boolean;
                                shallowLoaded: boolean;
                                disabled: boolean;
                                siblings: any[];
                                children?: any[] | undefined;
                                getPrev: (
                                    options?:
                                        | import('treemate/lib/interface').GetPrevNextOptions
                                        | undefined
                                ) =>
                                    | import('treemate').TreeNode<
                                          TreeOption,
                                          TreeOption,
                                          TreeOption
                                      >
                                    | null;
                                getNext: (
                                    options?:
                                        | import('treemate/lib/interface').GetPrevNextOptions
                                        | undefined
                                ) =>
                                    | import('treemate').TreeNode<
                                          TreeOption,
                                          TreeOption,
                                          TreeOption
                                      >
                                    | null;
                                getParent: () =>
                                    | import('treemate').TreeNode<
                                          TreeOption,
                                          TreeOption,
                                          TreeOption
                                      >
                                    | null;
                                getChild: () =>
                                    | import('treemate').TreeNode<
                                          TreeOption,
                                          TreeOption,
                                          TreeOption
                                      >
                                    | null;
                                contains: (
                                    treeNode:
                                        | import('treemate').TreeNode<
                                              TreeOption,
                                              TreeOption,
                                              TreeOption
                                          >
                                        | null
                                        | undefined
                                ) => boolean;
                            }[]
                          | undefined;
                      getPrev: (
                          options?:
                              | import('treemate/lib/interface').GetPrevNextOptions
                              | undefined
                      ) =>
                          | import('treemate').TreeNode<
                                TreeOption,
                                TreeOption,
                                TreeOption
                            >
                          | null;
                      getNext: (
                          options?:
                              | import('treemate/lib/interface').GetPrevNextOptions
                              | undefined
                      ) =>
                          | import('treemate').TreeNode<
                                TreeOption,
                                TreeOption,
                                TreeOption
                            >
                          | null;
                      getParent: () =>
                          | import('treemate').TreeNode<
                                TreeOption,
                                TreeOption,
                                TreeOption
                            >
                          | null;
                      getChild: () =>
                          | import('treemate').TreeNode<
                                TreeOption,
                                TreeOption,
                                TreeOption
                            >
                          | null;
                      contains: (
                          treeNode:
                              | import('treemate').TreeNode<
                                    TreeOption,
                                    TreeOption,
                                    TreeOption
                                >
                              | null
                              | undefined
                      ) => boolean;
                  }
                | {
                      __motion: true;
                      height: number | undefined;
                      mode: 'collapse' | 'expand';
                      nodes: {
                          key: import('treemate').Key;
                          rawNode: {
                              [x: string]: unknown;
                              key?: Key | undefined;
                              label?: string | undefined;
                              checkboxDisabled?: boolean | undefined;
                              disabled?: boolean | undefined;
                              isLeaf?: boolean | undefined;
                              children?: any[] | undefined;
                              prefix?: (() => VNodeChild) | undefined;
                              suffix?: (() => VNodeChild) | undefined;
                          };
                          level: number;
                          index: number;
                          isFirstChild: boolean;
                          isLastChild: boolean;
                          parent: {
                              key: import('treemate').Key;
                              rawNode: {
                                  [x: string]: unknown;
                                  key?: Key | undefined;
                                  label?: string | undefined;
                                  checkboxDisabled?: boolean | undefined;
                                  disabled?: boolean | undefined;
                                  isLeaf?: boolean | undefined;
                                  children?: any[] | undefined;
                                  prefix?: (() => VNodeChild) | undefined;
                                  suffix?: (() => VNodeChild) | undefined;
                              };
                              level: number;
                              index: number;
                              isFirstChild: boolean;
                              isLastChild: boolean;
                              parent: any | null;
                              isLeaf: boolean;
                              isGroup: boolean;
                              ignored: boolean;
                              shallowLoaded: boolean;
                              disabled: boolean;
                              siblings: any[];
                              children?: any[] | undefined;
                              getPrev: (
                                  options?:
                                      | import('treemate/lib/interface').GetPrevNextOptions
                                      | undefined
                              ) =>
                                  | import('treemate').TreeNode<
                                        TreeOption,
                                        TreeOption,
                                        TreeOption
                                    >
                                  | null;
                              getNext: (
                                  options?:
                                      | import('treemate/lib/interface').GetPrevNextOptions
                                      | undefined
                              ) =>
                                  | import('treemate').TreeNode<
                                        TreeOption,
                                        TreeOption,
                                        TreeOption
                                    >
                                  | null;
                              getParent: () =>
                                  | import('treemate').TreeNode<
                                        TreeOption,
                                        TreeOption,
                                        TreeOption
                                    >
                                  | null;
                              getChild: () =>
                                  | import('treemate').TreeNode<
                                        TreeOption,
                                        TreeOption,
                                        TreeOption
                                    >
                                  | null;
                              contains: (
                                  treeNode:
                                      | import('treemate').TreeNode<
                                            TreeOption,
                                            TreeOption,
                                            TreeOption
                                        >
                                      | null
                                      | undefined
                              ) => boolean;
                          } | null;
                          isLeaf: boolean;
                          isGroup: boolean;
                          ignored: boolean;
                          shallowLoaded: boolean;
                          disabled: boolean;
                          siblings: {
                              key: import('treemate').Key;
                              rawNode: {
                                  [x: string]: unknown;
                                  key?: Key | undefined;
                                  label?: string | undefined;
                                  checkboxDisabled?: boolean | undefined;
                                  disabled?: boolean | undefined;
                                  isLeaf?: boolean | undefined;
                                  children?: any[] | undefined;
                                  prefix?: (() => VNodeChild) | undefined;
                                  suffix?: (() => VNodeChild) | undefined;
                              };
                              level: number;
                              index: number;
                              isFirstChild: boolean;
                              isLastChild: boolean;
                              parent: any | null;
                              isLeaf: boolean;
                              isGroup: boolean;
                              ignored: boolean;
                              shallowLoaded: boolean;
                              disabled: boolean;
                              siblings: any[];
                              children?: any[] | undefined;
                              getPrev: (
                                  options?:
                                      | import('treemate/lib/interface').GetPrevNextOptions
                                      | undefined
                              ) =>
                                  | import('treemate').TreeNode<
                                        TreeOption,
                                        TreeOption,
                                        TreeOption
                                    >
                                  | null;
                              getNext: (
                                  options?:
                                      | import('treemate/lib/interface').GetPrevNextOptions
                                      | undefined
                              ) =>
                                  | import('treemate').TreeNode<
                                        TreeOption,
                                        TreeOption,
                                        TreeOption
                                    >
                                  | null;
                              getParent: () =>
                                  | import('treemate').TreeNode<
                                        TreeOption,
                                        TreeOption,
                                        TreeOption
                                    >
                                  | null;
                              getChild: () =>
                                  | import('treemate').TreeNode<
                                        TreeOption,
                                        TreeOption,
                                        TreeOption
                                    >
                                  | null;
                              contains: (
                                  treeNode:
                                      | import('treemate').TreeNode<
                                            TreeOption,
                                            TreeOption,
                                            TreeOption
                                        >
                                      | null
                                      | undefined
                              ) => boolean;
                          }[];
                          children?:
                              | {
                                    key: import('treemate').Key;
                                    rawNode: {
                                        [x: string]: unknown;
                                        key?: Key | undefined;
                                        label?: string | undefined;
                                        checkboxDisabled?: boolean | undefined;
                                        disabled?: boolean | undefined;
                                        isLeaf?: boolean | undefined;
                                        children?: any[] | undefined;
                                        prefix?: (() => VNodeChild) | undefined;
                                        suffix?: (() => VNodeChild) | undefined;
                                    };
                                    level: number;
                                    index: number;
                                    isFirstChild: boolean;
                                    isLastChild: boolean;
                                    parent: any | null;
                                    isLeaf: boolean;
                                    isGroup: boolean;
                                    ignored: boolean;
                                    shallowLoaded: boolean;
                                    disabled: boolean;
                                    siblings: any[];
                                    children?: any[] | undefined;
                                    getPrev: (
                                        options?:
                                            | import('treemate/lib/interface').GetPrevNextOptions
                                            | undefined
                                    ) =>
                                        | import('treemate').TreeNode<
                                              TreeOption,
                                              TreeOption,
                                              TreeOption
                                          >
                                        | null;
                                    getNext: (
                                        options?:
                                            | import('treemate/lib/interface').GetPrevNextOptions
                                            | undefined
                                    ) =>
                                        | import('treemate').TreeNode<
                                              TreeOption,
                                              TreeOption,
                                              TreeOption
                                          >
                                        | null;
                                    getParent: () =>
                                        | import('treemate').TreeNode<
                                              TreeOption,
                                              TreeOption,
                                              TreeOption
                                          >
                                        | null;
                                    getChild: () =>
                                        | import('treemate').TreeNode<
                                              TreeOption,
                                              TreeOption,
                                              TreeOption
                                          >
                                        | null;
                                    contains: (
                                        treeNode:
                                            | import('treemate').TreeNode<
                                                  TreeOption,
                                                  TreeOption,
                                                  TreeOption
                                              >
                                            | null
                                            | undefined
                                    ) => boolean;
                                }[]
                              | undefined;
                          getPrev: (
                              options?:
                                  | import('treemate/lib/interface').GetPrevNextOptions
                                  | undefined
                          ) =>
                              | import('treemate').TreeNode<
                                    TreeOption,
                                    TreeOption,
                                    TreeOption
                                >
                              | null;
                          getNext: (
                              options?:
                                  | import('treemate/lib/interface').GetPrevNextOptions
                                  | undefined
                          ) =>
                              | import('treemate').TreeNode<
                                    TreeOption,
                                    TreeOption,
                                    TreeOption
                                >
                              | null;
                          getParent: () =>
                              | import('treemate').TreeNode<
                                    TreeOption,
                                    TreeOption,
                                    TreeOption
                                >
                              | null;
                          getChild: () =>
                              | import('treemate').TreeNode<
                                    TreeOption,
                                    TreeOption,
                                    TreeOption
                                >
                              | null;
                          contains: (
                              treeNode:
                                  | import('treemate').TreeNode<
                                        TreeOption,
                                        TreeOption,
                                        TreeOption
                                    >
                                  | null
                                  | undefined
                          ) => boolean;
                      }[];
                  }
            )[]
        >;
        aip: globalThis.Ref<boolean>;
        selfElRef: globalThis.Ref<HTMLDivElement | null>;
        virtualListInstRef: globalThis.Ref<{
            listElRef: HTMLElement;
            itemsElRef: HTMLElement | null;
            scrollTo: import('vueuc/lib/virtual-list/src/VirtualList').ScrollTo;
        } | null>;
        scrollbarInstRef: globalThis.Ref<{
            $el: HTMLElement;
            containerRef: HTMLElement | null;
            contentRef: HTMLElement | null;
            containerScrollTop: number;
            syncUnifiedContainer: () => void;
            scrollTo: import('../../_internal/scrollbar/src/Scrollbar').ScrollTo;
            scrollBy: import('../../_internal/scrollbar/src/Scrollbar').ScrollBy;
            sync: () => void;
            handleMouseEnterWrapper: () => void;
            handleMouseLeaveWrapper: () => void;
        } | null>;
        handleFocusout: (e: FocusEvent) => void;
        handleDragLeaveTree: (e: DragEvent) => void;
        handleScroll: () => void;
        getScrollContainer: () => HTMLElement | null | undefined;
        getScrollContent: () => HTMLElement | null | undefined;
        handleAfterEnter: () => void;
        handleResize: () => void;
        cssVars:
            | globalThis.ComputedRef<{
                  '--n-arrow-color': string;
                  '--n-loading-color': string;
                  '--n-bezier': string;
                  '--n-font-size': string;
                  '--n-node-border-radius': string;
                  '--n-node-color-active': string;
                  '--n-node-color-hover': string;
                  '--n-node-color-pressed': string;
                  '--n-node-text-color': string;
                  '--n-node-text-color-disabled': string;
                  '--n-drop-mark-color': string;
              }>
            | undefined;
        themeClass: globalThis.Ref<string> | undefined;
        onRender: (() => void) | undefined;
        handleKeydown: (e: KeyboardEvent) => void;
        scrollTo: (options: { key: Key }) => void;
        getCheckedData: () => {
            keys: Key[];
            options: (TreeOption | null)[];
        };
        getIndeterminateData: () => {
            keys: Key[];
            options: (TreeOption | null)[];
        };
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
            readonly internalTreeSelect: BooleanConstructor;
            readonly internalScrollable: BooleanConstructor;
            readonly internalScrollablePadding: StringConstructor;
            readonly internalRenderEmpty: PropType<() => VNodeChild>;
            readonly internalHighlightKeySet: PropType<Set<Key> | null>;
            readonly internalUnifySelectCheck: BooleanConstructor;
            readonly internalCheckboxFocusable: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            readonly internalFocusable: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            readonly checkStrategy: {
                readonly type: PropType<CheckStrategy>;
                readonly default: 'all';
            };
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
            readonly defaultExpandedKeys: {
                readonly type: PropType<Key[]>;
                readonly default: () => never[];
            };
            readonly indeterminateKeys: PropType<Key[]>;
            readonly renderSwitcherIcon: PropType<RenderSwitcherIcon>;
            readonly onUpdateIndeterminateKeys: PropType<
                MaybeArray<OnUpdateIndeterminateKeys>
            >;
            readonly 'onUpdate:indeterminateKeys': PropType<
                MaybeArray<OnUpdateIndeterminateKeys>
            >;
            readonly onUpdateExpandedKeys: PropType<
                MaybeArray<onUpdateExpandedKeys>
            >;
            readonly 'onUpdate:expandedKeys': PropType<
                MaybeArray<onUpdateExpandedKeys>
            >;
            readonly accordion: BooleanConstructor;
            readonly showIrrelevantNodes: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            readonly data: {
                readonly type: PropType<TreeOptions>;
                readonly default: () => never[];
            };
            readonly expandOnDragenter: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            readonly expandOnClick: BooleanConstructor;
            readonly checkOnClick: {
                readonly type: PropType<boolean | CheckOnClick>;
                readonly default: false;
            };
            readonly cancelable: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            readonly checkable: BooleanConstructor;
            readonly draggable: BooleanConstructor;
            readonly blockNode: BooleanConstructor;
            readonly blockLine: BooleanConstructor;
            readonly disabled: BooleanConstructor;
            readonly checkedKeys: PropType<Key[]>;
            readonly defaultCheckedKeys: {
                readonly type: PropType<Key[]>;
                readonly default: () => never[];
            };
            readonly selectedKeys: PropType<Key[]>;
            readonly defaultSelectedKeys: {
                readonly type: PropType<Key[]>;
                readonly default: () => never[];
            };
            readonly multiple: BooleanConstructor;
            readonly pattern: {
                readonly type: StringConstructor;
                readonly default: '';
            };
            readonly onLoad: PropType<OnLoad>;
            readonly cascade: BooleanConstructor;
            readonly selectable: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            readonly indent: {
                readonly type: NumberConstructor;
                readonly default: 16;
            };
            readonly allowDrop: {
                readonly type: PropType<AllowDrop>;
                readonly default: typeof defaultAllowDrop;
            };
            readonly animated: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            readonly checkboxPlacement: {
                readonly type: PropType<'left' | 'right'>;
                readonly default: 'left';
            };
            readonly virtualScroll: BooleanConstructor;
            readonly watchProps: PropType<
                (
                    | 'defaultExpandedKeys'
                    | 'defaultCheckedKeys'
                    | 'defaultSelectedKeys'
                )[]
            >;
            readonly renderLabel: PropType<
                ({
                    option,
                    checked,
                    selected,
                }: import('./interface').TreeRenderProps) => VNodeChild
            >;
            readonly renderPrefix: PropType<
                ({
                    option,
                    checked,
                    selected,
                }: import('./interface').TreeRenderProps) => VNodeChild
            >;
            readonly renderSuffix: PropType<
                ({
                    option,
                    checked,
                    selected,
                }: import('./interface').TreeRenderProps) => VNodeChild
            >;
            readonly nodeProps: PropType<TreeNodeProps>;
            readonly keyboard: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            readonly getChildren: PropType<GetChildren>;
            readonly onDragenter: PropType<
                MaybeArray<(e: TreeDragInfo) => void>
            >;
            readonly onDragleave: PropType<
                MaybeArray<(e: TreeDragInfo) => void>
            >;
            readonly onDragend: PropType<MaybeArray<(e: TreeDragInfo) => void>>;
            readonly onDragstart: PropType<
                MaybeArray<(e: TreeDragInfo) => void>
            >;
            readonly onDragover: PropType<
                MaybeArray<(e: TreeDragInfo) => void>
            >;
            readonly onDrop: PropType<MaybeArray<(e: TreeDropInfo) => void>>;
            readonly onUpdateCheckedKeys: PropType<
                MaybeArray<OnUpdateCheckedKeys>
            >;
            readonly 'onUpdate:checkedKeys': PropType<
                MaybeArray<OnUpdateCheckedKeys>
            >;
            readonly onUpdateSelectedKeys: PropType<
                MaybeArray<OnUpdateSelectedKeys>
            >;
            readonly 'onUpdate:selectedKeys': PropType<
                MaybeArray<OnUpdateSelectedKeys>
            >;
            readonly theme: PropType<
                import('../../_mixins').Theme<
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
                >
            >;
            readonly themeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
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
                    >
                >
            >;
            readonly builtinThemeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
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
                    >
                >
            >;
        }>
    >,
    {
        readonly pattern: string;
        readonly data: TreeOptions;
        readonly multiple: boolean;
        readonly disabled: boolean;
        readonly draggable: boolean;
        readonly keyField: string;
        readonly animated: boolean;
        readonly cancelable: boolean;
        readonly virtualScroll: boolean;
        readonly labelField: string;
        readonly keyboard: boolean;
        readonly childrenField: string;
        readonly defaultExpandAll: boolean;
        readonly allowCheckingNotLoaded: boolean;
        readonly cascade: boolean;
        readonly indent: number;
        readonly checkable: boolean;
        readonly internalScrollable: boolean;
        readonly selectable: boolean;
        readonly checkStrategy: CheckStrategy;
        readonly disabledField: string;
        readonly leafOnly: boolean;
        readonly accordion: boolean;
        readonly defaultExpandedKeys: Key[];
        readonly expandOnClick: boolean;
        readonly blockLine: boolean;
        readonly checkboxPlacement: 'left' | 'right';
        readonly defaultCheckedKeys: Key[];
        readonly defaultSelectedKeys: Key[];
        readonly internalTreeSelect: boolean;
        readonly internalUnifySelectCheck: boolean;
        readonly internalCheckboxFocusable: boolean;
        readonly internalFocusable: boolean;
        readonly showIrrelevantNodes: boolean;
        readonly expandOnDragenter: boolean;
        readonly checkOnClick: boolean | CheckOnClick;
        readonly blockNode: boolean;
        readonly allowDrop: AllowDrop;
    },
    {}
>;
export default _default;
