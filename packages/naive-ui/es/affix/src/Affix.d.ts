import { CSSProperties, PropType } from 'vue';
import type { ExtractPublicPropTypes } from '../../_utils';
import type { ScrollTarget } from './utils';
export declare const affixProps: {
    readonly listenTo: PropType<
        string | ScrollTarget | (() => HTMLElement) | undefined
    >;
    readonly top: NumberConstructor;
    readonly bottom: NumberConstructor;
    readonly triggerTop: NumberConstructor;
    readonly triggerBottom: NumberConstructor;
    readonly position: {
        readonly type: PropType<'absolute' | 'fix'>;
        readonly default: 'fix';
    };
    readonly offsetTop: {
        readonly type: PropType<number | undefined>;
        readonly validator: () => boolean;
        readonly default: undefined;
    };
    readonly offsetBottom: {
        readonly type: PropType<number | undefined>;
        readonly validator: () => boolean;
        readonly default: undefined;
    };
    readonly target: {
        readonly type: PropType<(() => HTMLElement) | undefined>;
        readonly validator: () => boolean;
        readonly default: undefined;
    };
};
export declare const affixPropKeys: (
    | 'bottom'
    | 'top'
    | 'position'
    | 'target'
    | 'listenTo'
    | 'triggerTop'
    | 'triggerBottom'
    | 'offsetTop'
    | 'offsetBottom'
)[];
export type AffixProps = ExtractPublicPropTypes<typeof affixProps>;
declare const _default: import('vue').DefineComponent<
    {
        readonly listenTo: PropType<
            string | ScrollTarget | (() => HTMLElement) | undefined
        >;
        readonly top: NumberConstructor;
        readonly bottom: NumberConstructor;
        readonly triggerTop: NumberConstructor;
        readonly triggerBottom: NumberConstructor;
        readonly position: {
            readonly type: PropType<'absolute' | 'fix'>;
            readonly default: 'fix';
        };
        readonly offsetTop: {
            readonly type: PropType<number | undefined>;
            readonly validator: () => boolean;
            readonly default: undefined;
        };
        readonly offsetBottom: {
            readonly type: PropType<number | undefined>;
            readonly validator: () => boolean;
            readonly default: undefined;
        };
        readonly target: {
            readonly type: PropType<(() => HTMLElement) | undefined>;
            readonly validator: () => boolean;
            readonly default: undefined;
        };
    },
    {
        selfRef: globalThis.Ref<Element | null>;
        affixed: globalThis.ComputedRef<boolean>;
        mergedClsPrefix: globalThis.ComputedRef<string>;
        mergedstyle: globalThis.ComputedRef<CSSProperties>;
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
            readonly listenTo: PropType<
                string | ScrollTarget | (() => HTMLElement) | undefined
            >;
            readonly top: NumberConstructor;
            readonly bottom: NumberConstructor;
            readonly triggerTop: NumberConstructor;
            readonly triggerBottom: NumberConstructor;
            readonly position: {
                readonly type: PropType<'absolute' | 'fix'>;
                readonly default: 'fix';
            };
            readonly offsetTop: {
                readonly type: PropType<number | undefined>;
                readonly validator: () => boolean;
                readonly default: undefined;
            };
            readonly offsetBottom: {
                readonly type: PropType<number | undefined>;
                readonly validator: () => boolean;
                readonly default: undefined;
            };
            readonly target: {
                readonly type: PropType<(() => HTMLElement) | undefined>;
                readonly validator: () => boolean;
                readonly default: undefined;
            };
        }>
    >,
    {
        readonly position: 'absolute' | 'fix';
        readonly target: (() => HTMLElement) | undefined;
        readonly offsetTop: number | undefined;
        readonly offsetBottom: number | undefined;
    },
    {}
>;
export default _default;
