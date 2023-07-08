import { PropType, ExtractPropTypes } from 'vue';
import { AvatarProps } from '../../../avatar';
export declare const popDialogProps: {
    content: StringConstructor;
    showAvatar: {
        type: BooleanConstructor;
        default: boolean;
    };
    avatar: {
        type: PropType<Partial<AvatarProps> & Record<string, any>>;
        default: () => {};
    };
    right: BooleanConstructor;
    arrow: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: StringConstructor;
    showTitle: {
        type: BooleanConstructor;
        default: boolean;
    };
    renderHtml: BooleanConstructor;
};
export type PopDialogProps = ExtractPropTypes<typeof popDialogProps>;
declare const PopDialog: import('vue').DefineComponent<
    {
        content: StringConstructor;
        showAvatar: {
            type: BooleanConstructor;
            default: boolean;
        };
        avatar: {
            type: PropType<Partial<AvatarProps> & Record<string, any>>;
            default: () => {};
        };
        right: BooleanConstructor;
        arrow: {
            type: BooleanConstructor;
            default: boolean;
        };
        title: StringConstructor;
        showTitle: {
            type: BooleanConstructor;
            default: boolean;
        };
        renderHtml: BooleanConstructor;
    },
    {
        size: globalThis.ComputedRef<[string, number]>;
        mergedClsPrefix: globalThis.ComputedRef<string>;
        cssVars: globalThis.ComputedRef<{
            '--n-pop-dialog-left-color': string;
            '--n-pop-dialog-left-background-color': string;
            '--n-pop-dialog-left-active-background-color': string;
            '--n-pop-dialog-right-color': string;
            '--n-pop-dialog-right-background-color': string;
            '--n-pop-dialog-right-active-background-color': string;
            '--n-pop-dialog-right-file-hover-color': string;
            '--n-pop-dialog-arrow-size': string;
            '--n-pop-dialog-title-color': string;
            '--n-pop-dialog-title-font-size': string;
            '--n-pop-dialog-padding': string;
            '--n-pop-dialog-border-radius': string;
            '--n-pop-dialog-font-size': string;
            '--n-pop-dialog-margin': string;
        }>;
    },
    unknown,
    {},
    {},
    import('vue').ComponentOptionsMixin,
    import('vue').ComponentOptionsMixin,
    {
        click: (e: Event) => true;
        avatarClick: (e: Event) => true;
    },
    string,
    import('vue').VNodeProps &
        import('vue').AllowedComponentProps &
        import('vue').ComponentCustomProps,
    Readonly<
        ExtractPropTypes<{
            content: StringConstructor;
            showAvatar: {
                type: BooleanConstructor;
                default: boolean;
            };
            avatar: {
                type: PropType<Partial<AvatarProps> & Record<string, any>>;
                default: () => {};
            };
            right: BooleanConstructor;
            arrow: {
                type: BooleanConstructor;
                default: boolean;
            };
            title: StringConstructor;
            showTitle: {
                type: BooleanConstructor;
                default: boolean;
            };
            renderHtml: BooleanConstructor;
        }>
    > & {
        onClick?: ((e: Event) => any) | undefined;
        onAvatarClick?: ((e: Event) => any) | undefined;
    },
    {
        right: boolean;
        avatar: Partial<AvatarProps> & Record<string, any>;
        arrow: boolean;
        showAvatar: boolean;
        showTitle: boolean;
        renderHtml: boolean;
    },
    {}
>;
export default PopDialog;
