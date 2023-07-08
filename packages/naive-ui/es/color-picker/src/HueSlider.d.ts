import { PropType } from 'vue';
declare const _default: import('vue').DefineComponent<
    {
        clsPrefix: {
            type: StringConstructor;
            required: true;
        };
        hue: {
            type: NumberConstructor;
            required: true;
        };
        onUpdateHue: {
            type: PropType<(value: number) => void>;
            required: true;
        };
        onComplete: PropType<() => void>;
    },
    {
        railRef: globalThis.Ref<HTMLElement | null>;
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
            hue: {
                type: NumberConstructor;
                required: true;
            };
            onUpdateHue: {
                type: PropType<(value: number) => void>;
                required: true;
            };
            onComplete: PropType<() => void>;
        }>
    >,
    {},
    {}
>;
export default _default;
