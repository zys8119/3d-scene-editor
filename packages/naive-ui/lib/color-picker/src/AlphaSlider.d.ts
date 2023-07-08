import { PropType } from 'vue';
import { RGBA } from 'seemly';
declare const _default: import('vue').DefineComponent<
    {
        clsPrefix: {
            type: StringConstructor;
            required: true;
        };
        rgba: {
            type: PropType<RGBA | null>;
            default: null;
        };
        alpha: {
            type: NumberConstructor;
            default: number;
        };
        onUpdateAlpha: {
            type: PropType<(value: number) => void>;
            required: true;
        };
        onComplete: PropType<() => void>;
    },
    {
        railRef: globalThis.Ref<HTMLElement | null>;
        railBackgroundImage: globalThis.ComputedRef<string>;
        handleMouseDown: (e: MouseEvent) => void;
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
            clsPrefix: {
                type: StringConstructor;
                required: true;
            };
            rgba: {
                type: PropType<RGBA | null>;
                default: null;
            };
            alpha: {
                type: NumberConstructor;
                default: number;
            };
            onUpdateAlpha: {
                type: PropType<(value: number) => void>;
                required: true;
            };
            onComplete: PropType<() => void>;
        }>
    >,
    {
        alpha: number;
        rgba: RGBA | null;
    },
    {}
>;
export default _default;
