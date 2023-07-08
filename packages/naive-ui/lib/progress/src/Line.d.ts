import { PropType, CSSProperties } from 'vue';
import { Status } from './interface';
declare const _default: import('vue').DefineComponent<
    {
        clsPrefix: {
            type: StringConstructor;
            required: true;
        };
        percentage: {
            type: NumberConstructor;
            default: number;
        };
        railColor: StringConstructor;
        railStyle: PropType<string | CSSProperties>;
        fillColor: PropType<string | string[]>;
        status: {
            type: PropType<Status>;
            required: true;
        };
        indicatorPlacement: {
            type: PropType<'inside' | 'outside'>;
            required: true;
        };
        indicatorTextColor: StringConstructor;
        unit: {
            type: StringConstructor;
            default: string;
        };
        processing: {
            type: BooleanConstructor;
            required: true;
        };
        showIndicator: {
            type: BooleanConstructor;
            required: true;
        };
        height: (StringConstructor | NumberConstructor)[];
        railBorderRadius: (StringConstructor | NumberConstructor)[];
        fillBorderRadius: (StringConstructor | NumberConstructor)[];
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
            percentage: {
                type: NumberConstructor;
                default: number;
            };
            railColor: StringConstructor;
            railStyle: PropType<string | CSSProperties>;
            fillColor: PropType<string | string[]>;
            status: {
                type: PropType<Status>;
                required: true;
            };
            indicatorPlacement: {
                type: PropType<'inside' | 'outside'>;
                required: true;
            };
            indicatorTextColor: StringConstructor;
            unit: {
                type: StringConstructor;
                default: string;
            };
            processing: {
                type: BooleanConstructor;
                required: true;
            };
            showIndicator: {
                type: BooleanConstructor;
                required: true;
            };
            height: (StringConstructor | NumberConstructor)[];
            railBorderRadius: (StringConstructor | NumberConstructor)[];
            fillBorderRadius: (StringConstructor | NumberConstructor)[];
        }>
    >,
    {
        unit: string;
        percentage: number;
    },
    {}
>;
export default _default;
