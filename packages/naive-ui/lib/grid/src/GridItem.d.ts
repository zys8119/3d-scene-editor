import { PropType } from 'vue';
import type { ExtractPublicPropTypes } from '../../_utils';
export declare const defaultSpan = 1;
export declare const gridItemProps: {
    readonly span: {
        readonly type: PropType<string | number>;
        readonly default: 1;
    };
    readonly offset: {
        readonly type: PropType<string | number>;
        readonly default: 0;
    };
    readonly suffix: BooleanConstructor;
    readonly privateOffset: NumberConstructor;
    readonly privateSpan: NumberConstructor;
    readonly privateColStart: NumberConstructor;
    readonly privateShow: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
};
export declare const gridItemPropKeys: (
    | 'offset'
    | 'span'
    | 'suffix'
    | 'privateSpan'
    | 'privateColStart'
    | 'privateShow'
    | 'privateOffset'
)[];
export type GridItemProps = ExtractPublicPropTypes<typeof gridItemProps>;
declare const _default: import('vue').DefineComponent<
    {
        readonly span: {
            readonly type: PropType<string | number>;
            readonly default: 1;
        };
        readonly offset: {
            readonly type: PropType<string | number>;
            readonly default: 0;
        };
        readonly suffix: BooleanConstructor;
        readonly privateOffset: NumberConstructor;
        readonly privateSpan: NumberConstructor;
        readonly privateColStart: NumberConstructor;
        readonly privateShow: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
    },
    {
        overflow: globalThis.Ref<boolean>;
        itemStyle: globalThis.Ref<
            string | import('vue').CSSProperties | undefined
        >;
        layoutShiftDisabled: globalThis.Ref<boolean>;
        mergedXGap: globalThis.ComputedRef<string>;
        deriveStyle: () => {
            display: string;
            gridColumn: string;
            marginLeft: string;
        };
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
            readonly span: {
                readonly type: PropType<string | number>;
                readonly default: 1;
            };
            readonly offset: {
                readonly type: PropType<string | number>;
                readonly default: 0;
            };
            readonly suffix: BooleanConstructor;
            readonly privateOffset: NumberConstructor;
            readonly privateSpan: NumberConstructor;
            readonly privateColStart: NumberConstructor;
            readonly privateShow: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
        }>
    >,
    {
        readonly offset: string | number;
        readonly span: string | number;
        readonly suffix: boolean;
        readonly privateShow: boolean;
    },
    {}
>;
export default _default;
