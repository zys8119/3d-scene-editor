import { ExtractPublicPropTypes } from '../../../_utils';
declare const exposedLoadingProps: {
    strokeWidth: {
        type: NumberConstructor;
        default: number;
    };
    stroke: {
        type: StringConstructor;
        default: undefined;
    };
};
export type BaseLoadingExposedProps = ExtractPublicPropTypes<
    typeof exposedLoadingProps
>;
declare const _default: import('vue').DefineComponent<
    {
        strokeWidth: {
            type: NumberConstructor;
            default: number;
        };
        stroke: {
            type: StringConstructor;
            default: undefined;
        };
        clsPrefix: {
            type: StringConstructor;
            required: true;
        };
        show: {
            type: BooleanConstructor;
            default: boolean;
        };
        scale: {
            type: NumberConstructor;
            default: number;
        };
        radius: {
            type: NumberConstructor;
            default: number;
        };
    },
    void,
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
            strokeWidth: {
                type: NumberConstructor;
                default: number;
            };
            stroke: {
                type: StringConstructor;
                default: undefined;
            };
            clsPrefix: {
                type: StringConstructor;
                required: true;
            };
            show: {
                type: BooleanConstructor;
                default: boolean;
            };
            scale: {
                type: NumberConstructor;
                default: number;
            };
            radius: {
                type: NumberConstructor;
                default: number;
            };
        }>
    >,
    {
        show: boolean;
        stroke: string;
        scale: number;
        strokeWidth: number;
        radius: number;
    },
    {}
>;
export default _default;
