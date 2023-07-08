import { HSVA } from 'seemly';
import { PropType } from 'vue';
declare const _default: import('vue').DefineComponent<
    {
        clsPrefix: {
            type: StringConstructor;
            required: true;
        };
        rgba: {
            type: PropType<HSVA | null>;
            default: null;
        };
        displayedHue: {
            type: NumberConstructor;
            required: true;
        };
        displayedSv: {
            type: PropType<[number, number]>;
            required: true;
        };
        onUpdateSV: {
            type: PropType<(s: number, v: number) => void>;
            required: true;
        };
        onComplete: PropType<() => void>;
    },
    {
        palleteRef: globalThis.Ref<HTMLElement | null>;
        handleColor: globalThis.ComputedRef<string>;
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
                type: PropType<HSVA | null>;
                default: null;
            };
            displayedHue: {
                type: NumberConstructor;
                required: true;
            };
            displayedSv: {
                type: PropType<[number, number]>;
                required: true;
            };
            onUpdateSV: {
                type: PropType<(s: number, v: number) => void>;
                required: true;
            };
            onComplete: PropType<() => void>;
        }>
    >,
    {
        rgba: HSVA | null;
    },
    {}
>;
export default _default;
