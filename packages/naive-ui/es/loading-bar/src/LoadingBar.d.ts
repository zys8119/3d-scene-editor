import { PropType, CSSProperties } from 'vue';
declare const _default: import('vue').DefineComponent<
    {
        containerStyle: PropType<string | CSSProperties>;
    },
    {
        mergedClsPrefix: globalThis.Ref<string>;
        loadingBarRef: globalThis.Ref<HTMLElement | null>;
        started: globalThis.Ref<boolean>;
        loading: globalThis.Ref<boolean>;
        entering: globalThis.Ref<boolean>;
        transitionDisabled: globalThis.Ref<boolean>;
        start: (
            fromProgress?: number,
            toProgress?: number,
            status?: 'starting' | 'error'
        ) => Promise<void>;
        error: () => void;
        finish: () => void;
        handleEnter: () => void;
        handleAfterEnter: () => void;
        handleAfterLeave: () => Promise<void>;
        mergedLoadingBarStyle: globalThis.ComputedRef<
            string | CSSProperties | undefined
        >;
        cssVars:
            | globalThis.ComputedRef<{
                  '--n-height': string;
                  '--n-color-loading': string;
                  '--n-color-error': string;
              }>
            | undefined;
        themeClass: globalThis.Ref<string> | undefined;
        onRender: (() => void) | undefined;
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
            containerStyle: PropType<string | CSSProperties>;
        }>
    >,
    {},
    {}
>;
export default _default;
