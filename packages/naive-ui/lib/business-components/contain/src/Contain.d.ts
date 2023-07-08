import { ExtractPropTypes, PropType, CSSProperties } from 'vue';
import { ContainStyle } from './interface';
export declare const containProps: {
    readonly width: {
        readonly type: NumberConstructor;
        readonly default: 1920;
    };
    readonly height: {
        readonly type: NumberConstructor;
        readonly default: 1080;
    };
    readonly isDev: BooleanConstructor;
    readonly tag: {
        readonly type: PropType<keyof HTMLElementTagNameMap>;
        readonly default: 'div';
    };
};
export type ContainProps = ExtractPropTypes<typeof containProps>;
export declare function getStyle(
    style: CSSProperties & Partial<ContainStyle>,
    dev: boolean | undefined,
    width: number,
    height: number
): Partial<CSSProperties>;
declare const Contain: import('vue').DefineComponent<
    {
        readonly width: {
            readonly type: NumberConstructor;
            readonly default: 1920;
        };
        readonly height: {
            readonly type: NumberConstructor;
            readonly default: 1080;
        };
        readonly isDev: BooleanConstructor;
        readonly tag: {
            readonly type: PropType<keyof HTMLElementTagNameMap>;
            readonly default: 'div';
        };
    },
    {
        containRef: globalThis.Ref<HTMLDivElement | undefined>;
        mergedClsPrefixRef: globalThis.ComputedRef<string>;
        containStyle: globalThis.ComputedRef<{
            width: string;
            height: string;
            transform: string;
            position: string;
            flex: string;
        }>;
        getStyle: (
            style: CSSProperties & Partial<ContainStyle>,
            dev?: boolean
        ) => CSSProperties;
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
        ExtractPropTypes<{
            readonly width: {
                readonly type: NumberConstructor;
                readonly default: 1920;
            };
            readonly height: {
                readonly type: NumberConstructor;
                readonly default: 1080;
            };
            readonly isDev: BooleanConstructor;
            readonly tag: {
                readonly type: PropType<keyof HTMLElementTagNameMap>;
                readonly default: 'div';
            };
        }>
    >,
    {
        readonly tag: keyof HTMLElementTagNameMap;
        readonly height: number;
        readonly width: number;
        readonly isDev: boolean;
    },
    {}
>;
export default Contain;
