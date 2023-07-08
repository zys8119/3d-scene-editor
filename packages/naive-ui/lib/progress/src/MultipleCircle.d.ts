import { PropType, CSSProperties } from 'vue';
declare const _default: import('vue').DefineComponent<
    {
        clsPrefix: {
            type: StringConstructor;
            required: true;
        };
        viewBoxWidth: {
            type: NumberConstructor;
            required: true;
        };
        percentage: {
            type: PropType<number[]>;
            default: number[];
        };
        strokeWidth: {
            type: NumberConstructor;
            required: true;
        };
        circleGap: {
            type: NumberConstructor;
            required: true;
        };
        showIndicator: {
            type: BooleanConstructor;
            required: true;
        };
        fillColor: {
            type: PropType<string[]>;
            default: () => never[];
        };
        railColor: {
            type: PropType<string[]>;
            default: () => never[];
        };
        railStyle: {
            type: PropType<(string | CSSProperties)[]>;
            default: () => never[];
        };
    },
    () => JSX.Element,
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
            clsPrefix: {
                type: StringConstructor;
                required: true;
            };
            viewBoxWidth: {
                type: NumberConstructor;
                required: true;
            };
            percentage: {
                type: PropType<number[]>;
                default: number[];
            };
            strokeWidth: {
                type: NumberConstructor;
                required: true;
            };
            circleGap: {
                type: NumberConstructor;
                required: true;
            };
            showIndicator: {
                type: BooleanConstructor;
                required: true;
            };
            fillColor: {
                type: PropType<string[]>;
                default: () => never[];
            };
            railColor: {
                type: PropType<string[]>;
                default: () => never[];
            };
            railStyle: {
                type: PropType<(string | CSSProperties)[]>;
                default: () => never[];
            };
        }>
    >,
    {
        railColor: string[];
        fillColor: string[];
        railStyle: (string | CSSProperties)[];
        percentage: number[];
    },
    {}
>;
export default _default;
