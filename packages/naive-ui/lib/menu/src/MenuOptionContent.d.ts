import { PropType } from 'vue';
import { TmNode } from './interface';
declare const _default: import('vue').DefineComponent<
    {
        collapsed: BooleanConstructor;
        disabled: BooleanConstructor;
        title: (StringConstructor | FunctionConstructor)[];
        icon: FunctionConstructor;
        extra: (StringConstructor | FunctionConstructor)[];
        showArrow: BooleanConstructor;
        childActive: BooleanConstructor;
        hover: BooleanConstructor;
        paddingLeft: NumberConstructor;
        selected: BooleanConstructor;
        maxIconSize: {
            type: NumberConstructor;
            required: true;
        };
        activeIconSize: {
            type: NumberConstructor;
            required: true;
        };
        iconMarginRight: {
            type: NumberConstructor;
            required: true;
        };
        clsPrefix: {
            type: StringConstructor;
            required: true;
        };
        onClick: PropType<(e: MouseEvent) => void>;
        tmNode: {
            type: PropType<TmNode>;
            required: true;
        };
    },
    {
        menuProps: import('./Menu').MenuSetupProps;
        style: globalThis.ComputedRef<{
            paddingLeft: string | 0 | undefined;
        }>;
        iconStyle: globalThis.ComputedRef<{
            width: string;
            height: string;
            fontSize: string;
            marginRight: string;
        }>;
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
            collapsed: BooleanConstructor;
            disabled: BooleanConstructor;
            title: (StringConstructor | FunctionConstructor)[];
            icon: FunctionConstructor;
            extra: (StringConstructor | FunctionConstructor)[];
            showArrow: BooleanConstructor;
            childActive: BooleanConstructor;
            hover: BooleanConstructor;
            paddingLeft: NumberConstructor;
            selected: BooleanConstructor;
            maxIconSize: {
                type: NumberConstructor;
                required: true;
            };
            activeIconSize: {
                type: NumberConstructor;
                required: true;
            };
            iconMarginRight: {
                type: NumberConstructor;
                required: true;
            };
            clsPrefix: {
                type: StringConstructor;
                required: true;
            };
            onClick: PropType<(e: MouseEvent) => void>;
            tmNode: {
                type: PropType<TmNode>;
                required: true;
            };
        }>
    >,
    {
        disabled: boolean;
        selected: boolean;
        hover: boolean;
        showArrow: boolean;
        childActive: boolean;
        collapsed: boolean;
    },
    {}
>;
export default _default;
