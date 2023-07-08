import { PropType } from 'vue';
import type { Size } from '../../button/src/interface';
import type { ExtractPublicPropTypes } from '../../_utils';
export interface ButtonGroupInjection {
    size?: Size | undefined;
}
export declare const buttonGroupProps: {
    readonly size: {
        readonly type: PropType<Size | undefined>;
        readonly default: undefined;
    };
    readonly vertical: BooleanConstructor;
};
export type ButtonGroupProps = ExtractPublicPropTypes<typeof buttonGroupProps>;
declare const _default: import('vue').DefineComponent<
    {
        readonly size: {
            readonly type: PropType<Size | undefined>;
            readonly default: undefined;
        };
        readonly vertical: BooleanConstructor;
    },
    {
        rtlEnabled:
            | globalThis.Ref<
                  | import('../../config-provider/src/internal-interface').RtlItem
                  | undefined
              >
            | undefined;
        mergedClsPrefix: globalThis.ComputedRef<string>;
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
            readonly size: {
                readonly type: PropType<Size | undefined>;
                readonly default: undefined;
            };
            readonly vertical: BooleanConstructor;
        }>
    >,
    {
        readonly size: Size | undefined;
        readonly vertical: boolean;
    },
    {}
>;
export default _default;
