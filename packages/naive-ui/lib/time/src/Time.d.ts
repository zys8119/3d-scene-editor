import { PropType } from 'vue';
import { ExtractPublicPropTypes } from '../../_utils';
export declare const timeProps: {
    readonly time: {
        readonly type: PropType<number | Date>;
        readonly default: undefined;
    };
    readonly type: {
        readonly type: PropType<'relative' | 'date' | 'datetime'>;
        readonly default: 'datetime';
    };
    readonly to: {
        readonly type: PropType<number | Date>;
        readonly default: undefined;
    };
    readonly unix: BooleanConstructor;
    readonly format: StringConstructor;
    readonly text: BooleanConstructor;
    readonly timeZone: StringConstructor;
};
export type TimeProps = ExtractPublicPropTypes<typeof timeProps>;
declare const _default: import('vue').DefineComponent<
    {
        readonly time: {
            readonly type: PropType<number | Date>;
            readonly default: undefined;
        };
        readonly type: {
            readonly type: PropType<'relative' | 'date' | 'datetime'>;
            readonly default: 'datetime';
        };
        readonly to: {
            readonly type: PropType<number | Date>;
            readonly default: undefined;
        };
        readonly unix: BooleanConstructor;
        readonly format: StringConstructor;
        readonly text: BooleanConstructor;
        readonly timeZone: StringConstructor;
    },
    {
        renderedTime: globalThis.ComputedRef<string>;
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
            readonly time: {
                readonly type: PropType<number | Date>;
                readonly default: undefined;
            };
            readonly type: {
                readonly type: PropType<'relative' | 'date' | 'datetime'>;
                readonly default: 'datetime';
            };
            readonly to: {
                readonly type: PropType<number | Date>;
                readonly default: undefined;
            };
            readonly unix: BooleanConstructor;
            readonly format: StringConstructor;
            readonly text: BooleanConstructor;
            readonly timeZone: StringConstructor;
        }>
    >,
    {
        readonly type: 'relative' | 'date' | 'datetime';
        readonly text: boolean;
        readonly time: number | Date;
        readonly to: number | Date;
        readonly unix: boolean;
    },
    {}
>;
export default _default;
