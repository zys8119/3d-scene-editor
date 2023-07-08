export type TreeNode<
    T = Record<string, unknown>,
    Label extends string = 'name',
    Parent extends string = 'parent',
    Children extends string = 'children'
> = {
    [key in Children]?: Array<TreeNode<T, Label, Parent, Children>>;
} & {
    [key in Parent]?: TreeNode<T, Label, Parent, Children>;
} & {
    [key in Label]?: string;
} & {
    __id__?: string;
    parent?: TreeNode<T, Label, Children>;
    expanded?: boolean;
    checked?: boolean;
    path?: string;
} & T;
export type Children = TreeNode[] | undefined;
export type TreeOptions = Partial<{
    label: string;
    children: string;
    checked: string;
    expanded: string;
    parent: string;
}>;
export type TreeNodeAddCallback = (created: Partial<TreeNode>) => void;
