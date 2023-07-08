import { PropType, VNodeChild } from 'vue';
import type { ExtractPublicPropTypes } from '../../_utils';
export interface CountdownTimeInfo {
    day: number;
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
}
export interface CountdownInst {
    reset: () => void;
}
export declare const countdownProps: {
    duration: {
        type: NumberConstructor;
        default: number;
    };
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    precision: {
        type: PropType<0 | 2 | 1 | 3>;
        default: number;
    };
    render: PropType<(props: CountdownTimeInfo) => VNodeChild>;
    onFinish: PropType<() => void>;
};
export type CountdownProps = ExtractPublicPropTypes<typeof countdownProps>;
declare const _default: import('vue').DefineComponent<
    {
        duration: {
            type: NumberConstructor;
            default: number;
        };
        active: {
            type: BooleanConstructor;
            default: boolean;
        };
        precision: {
            type: PropType<0 | 2 | 1 | 3>;
            default: number;
        };
        render: PropType<(props: CountdownTimeInfo) => VNodeChild>;
        onFinish: PropType<() => void>;
    },
    CountdownInst & {
        distance: globalThis.Ref<number>;
        getTimeInfo: (distance: number) => CountdownTimeInfo;
        getDisplayValue: (info: CountdownTimeInfo) => string;
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
            duration: {
                type: NumberConstructor;
                default: number;
            };
            active: {
                type: BooleanConstructor;
                default: boolean;
            };
            precision: {
                type: PropType<0 | 2 | 1 | 3>;
                default: number;
            };
            render: PropType<(props: CountdownTimeInfo) => VNodeChild>;
            onFinish: PropType<() => void>;
        }>
    >,
    {
        active: boolean;
        duration: number;
        precision: 0 | 2 | 1 | 3;
    },
    {}
>;
export default _default;
