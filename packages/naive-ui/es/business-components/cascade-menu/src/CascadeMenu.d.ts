import { PropType } from 'vue';
import { ExtractPublicPropTypes } from '../../../_utils';
import { TreeNodeAddCallback, TreeNode } from './interfaces';
export declare const cascadeMenuProps: {
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    tree: PropType<
        TreeNode<Record<string, unknown>, 'name', 'parent', 'children'>[]
    >;
    loadTree: PropType<() => Promise<TreeNode[]>>;
    loadSelected: PropType<() => Promise<TreeNode[] | TreeNode>>;
    identifier: {
        type: PropType<string>;
        default: () => undefined;
    };
    selected: {
        type: PropType<
            | TreeNode<Record<string, unknown>, 'name', 'parent', 'children'>
            | TreeNode<Record<string, unknown>, 'name', 'parent', 'children'>[]
        >;
        default: () => undefined;
    };
    treeOptions: {
        type: PropType<
            Partial<{
                label: string;
                children: string;
                checked: string;
                expanded: string;
                parent: string;
            }>
        >;
        default: () => {
            label: string;
            children: string;
        };
    };
    config: {
        type: PropType<
            Partial<Record<'selectAllNodesText' | 'addNodeText', string>>
        >;
        default: () => {
            selectAllNodesText: string;
            addNodeText: string;
        };
    };
    editable: {
        type: BooleanConstructor;
        default: boolean;
    };
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    crossLevelDraggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    selectable: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    propagation: {
        type: BooleanConstructor;
        default: boolean;
    };
    theme: PropType<
        import('../../../_mixins').Theme<
            'CascadeMenu',
            {
                primaryColor: string;
                primaryColorHover: string;
                neutralCard: string;
            },
            any
        >
    >;
    themeOverrides: PropType<
        import('../../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../../_mixins').Theme<
                'CascadeMenu',
                {
                    primaryColor: string;
                    primaryColorHover: string;
                    neutralCard: string;
                },
                any
            >
        >
    >;
    builtinThemeOverrides: PropType<
        import('../../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../../_mixins').Theme<
                'CascadeMenu',
                {
                    primaryColor: string;
                    primaryColorHover: string;
                    neutralCard: string;
                },
                any
            >
        >
    >;
};
export type CascadeMenuProps = ExtractPublicPropTypes<typeof cascadeMenuProps>;
declare const CascadeMenu: import('vue').DefineComponent<
    {
        tag: {
            type: PropType<keyof HTMLElementTagNameMap>;
            default: string;
        };
        tree: PropType<
            TreeNode<Record<string, unknown>, 'name', 'parent', 'children'>[]
        >;
        loadTree: PropType<() => Promise<TreeNode[]>>;
        loadSelected: PropType<() => Promise<TreeNode[] | TreeNode>>;
        identifier: {
            type: PropType<string>;
            default: () => undefined;
        };
        selected: {
            type: PropType<
                | TreeNode<
                      Record<string, unknown>,
                      'name',
                      'parent',
                      'children'
                  >
                | TreeNode<
                      Record<string, unknown>,
                      'name',
                      'parent',
                      'children'
                  >[]
            >;
            default: () => undefined;
        };
        treeOptions: {
            type: PropType<
                Partial<{
                    label: string;
                    children: string;
                    checked: string;
                    expanded: string;
                    parent: string;
                }>
            >;
            default: () => {
                label: string;
                children: string;
            };
        };
        config: {
            type: PropType<
                Partial<Record<'selectAllNodesText' | 'addNodeText', string>>
            >;
            default: () => {
                selectAllNodesText: string;
                addNodeText: string;
            };
        };
        editable: {
            type: BooleanConstructor;
            default: boolean;
        };
        draggable: {
            type: BooleanConstructor;
            default: boolean;
        };
        crossLevelDraggable: {
            type: BooleanConstructor;
            default: boolean;
        };
        selectable: {
            type: BooleanConstructor;
            default: boolean;
        };
        multiple: {
            type: BooleanConstructor;
            default: boolean;
        };
        propagation: {
            type: BooleanConstructor;
            default: boolean;
        };
        theme: PropType<
            import('../../../_mixins').Theme<
                'CascadeMenu',
                {
                    primaryColor: string;
                    primaryColorHover: string;
                    neutralCard: string;
                },
                any
            >
        >;
        themeOverrides: PropType<
            import('../../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../../_mixins').Theme<
                    'CascadeMenu',
                    {
                        primaryColor: string;
                        primaryColorHover: string;
                        neutralCard: string;
                    },
                    any
                >
            >
        >;
        builtinThemeOverrides: PropType<
            import('../../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../../_mixins').Theme<
                    'CascadeMenu',
                    {
                        primaryColor: string;
                        primaryColorHover: string;
                        neutralCard: string;
                    },
                    any
                >
            >
        >;
    },
    {
        mergedClsPrefixRef: globalThis.ComputedRef<string>;
        cssVarsRef: globalThis.ComputedRef<{
            primaryColor: string;
            textColor1: string;
            textColor3: string;
            textColor7: string;
            primaryColorHover: string;
            neutralCard: string;
            '--n-background-color': string;
            '--n-draggable-background-color': string;
        }>;
        themeRef: globalThis.ComputedRef<{
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
                primaryColor: string;
                primaryColorHover: string;
                neutralCard: string;
            };
            peers: any;
            peerOverrides: {
                [x: string]: any;
            };
        }>;
        extendNode: (
            node: TreeNode,
            i: number,
            $$selected: TreeNode[],
            parent?: TreeNode
        ) => void;
        onNodeCheckStatusChange: any;
        cleanStateInDescent: (
            node: TreeNode,
            cleanAction: (node: TreeNode) => void
        ) => Promise<void>;
        isDescentOf: (
            maybeDescent: TreeNode,
            maybeAncestor: TreeNode
        ) => boolean;
    },
    unknown,
    {},
    {},
    import('vue').ComponentOptionsMixin,
    import('vue').ComponentOptionsMixin,
    {
        'node:drag': (
            source: TreeNode,
            target: TreeNode,
            tree: TreeNode[],
            done: () => void
        ) => true;
        'node:add': (
            parent: TreeNode | undefined,
            children: TreeNode[],
            done: TreeNodeAddCallback
        ) => true;
        'node:expanded': (node: TreeNode) => true;
        'node:edit': (node: TreeNode) => true;
        'node:delete': (node: TreeNode) => true;
        'update:selected': (nodes: TreeNode | TreeNode[]) => true;
        'update:tree': (nodes: TreeNode[]) => true;
    },
    string,
    import('vue').VNodeProps &
        import('vue').AllowedComponentProps &
        import('vue').ComponentCustomProps,
    Readonly<
        import('vue').ExtractPropTypes<{
            tag: {
                type: PropType<keyof HTMLElementTagNameMap>;
                default: string;
            };
            tree: PropType<
                TreeNode<
                    Record<string, unknown>,
                    'name',
                    'parent',
                    'children'
                >[]
            >;
            loadTree: PropType<() => Promise<TreeNode[]>>;
            loadSelected: PropType<() => Promise<TreeNode[] | TreeNode>>;
            identifier: {
                type: PropType<string>;
                default: () => undefined;
            };
            selected: {
                type: PropType<
                    | TreeNode<
                          Record<string, unknown>,
                          'name',
                          'parent',
                          'children'
                      >
                    | TreeNode<
                          Record<string, unknown>,
                          'name',
                          'parent',
                          'children'
                      >[]
                >;
                default: () => undefined;
            };
            treeOptions: {
                type: PropType<
                    Partial<{
                        label: string;
                        children: string;
                        checked: string;
                        expanded: string;
                        parent: string;
                    }>
                >;
                default: () => {
                    label: string;
                    children: string;
                };
            };
            config: {
                type: PropType<
                    Partial<
                        Record<'selectAllNodesText' | 'addNodeText', string>
                    >
                >;
                default: () => {
                    selectAllNodesText: string;
                    addNodeText: string;
                };
            };
            editable: {
                type: BooleanConstructor;
                default: boolean;
            };
            draggable: {
                type: BooleanConstructor;
                default: boolean;
            };
            crossLevelDraggable: {
                type: BooleanConstructor;
                default: boolean;
            };
            selectable: {
                type: BooleanConstructor;
                default: boolean;
            };
            multiple: {
                type: BooleanConstructor;
                default: boolean;
            };
            propagation: {
                type: BooleanConstructor;
                default: boolean;
            };
            theme: PropType<
                import('../../../_mixins').Theme<
                    'CascadeMenu',
                    {
                        primaryColor: string;
                        primaryColorHover: string;
                        neutralCard: string;
                    },
                    any
                >
            >;
            themeOverrides: PropType<
                import('../../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../../_mixins').Theme<
                        'CascadeMenu',
                        {
                            primaryColor: string;
                            primaryColorHover: string;
                            neutralCard: string;
                        },
                        any
                    >
                >
            >;
            builtinThemeOverrides: PropType<
                import('../../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../../_mixins').Theme<
                        'CascadeMenu',
                        {
                            primaryColor: string;
                            primaryColorHover: string;
                            neutralCard: string;
                        },
                        any
                    >
                >
            >;
        }>
    > & {
        'onNode:drag'?:
            | ((
                  source: TreeNode<
                      Record<string, unknown>,
                      'name',
                      'parent',
                      'children'
                  >,
                  target: TreeNode<
                      Record<string, unknown>,
                      'name',
                      'parent',
                      'children'
                  >,
                  tree: TreeNode<
                      Record<string, unknown>,
                      'name',
                      'parent',
                      'children'
                  >[],
                  done: () => void
              ) => any)
            | undefined;
        'onNode:add'?:
            | ((
                  parent:
                      | TreeNode<
                            Record<string, unknown>,
                            'name',
                            'parent',
                            'children'
                        >
                      | undefined,
                  children: TreeNode<
                      Record<string, unknown>,
                      'name',
                      'parent',
                      'children'
                  >[],
                  done: TreeNodeAddCallback
              ) => any)
            | undefined;
        'onNode:expanded'?:
            | ((
                  node: TreeNode<
                      Record<string, unknown>,
                      'name',
                      'parent',
                      'children'
                  >
              ) => any)
            | undefined;
        'onNode:edit'?:
            | ((
                  node: TreeNode<
                      Record<string, unknown>,
                      'name',
                      'parent',
                      'children'
                  >
              ) => any)
            | undefined;
        'onNode:delete'?:
            | ((
                  node: TreeNode<
                      Record<string, unknown>,
                      'name',
                      'parent',
                      'children'
                  >
              ) => any)
            | undefined;
        'onUpdate:selected'?:
            | ((
                  nodes:
                      | TreeNode<
                            Record<string, unknown>,
                            'name',
                            'parent',
                            'children'
                        >
                      | TreeNode<
                            Record<string, unknown>,
                            'name',
                            'parent',
                            'children'
                        >[]
              ) => any)
            | undefined;
        'onUpdate:tree'?:
            | ((
                  nodes: TreeNode<
                      Record<string, unknown>,
                      'name',
                      'parent',
                      'children'
                  >[]
              ) => any)
            | undefined;
    },
    {
        tag: keyof HTMLElementTagNameMap;
        config: Partial<Record<'selectAllNodesText' | 'addNodeText', string>>;
        multiple: boolean;
        draggable: boolean;
        selected:
            | TreeNode<Record<string, unknown>, 'name', 'parent', 'children'>
            | TreeNode<Record<string, unknown>, 'name', 'parent', 'children'>[];
        identifier: string;
        treeOptions: Partial<{
            label: string;
            children: string;
            checked: string;
            expanded: string;
            parent: string;
        }>;
        editable: boolean;
        crossLevelDraggable: boolean;
        selectable: boolean;
        propagation: boolean;
    },
    {}
>;
export default CascadeMenu;
