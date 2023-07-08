import { PropType } from 'vue';
export declare const panelProps: {
    readonly positiveText: PropType<string | null>;
    readonly negativeText: PropType<string | null>;
    readonly showIcon: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly onPositiveClick: {
        readonly type: PropType<(e: MouseEvent) => void>;
        readonly required: true;
    };
    readonly onNegativeClick: {
        readonly type: PropType<(e: MouseEvent) => void>;
        readonly required: true;
    };
};
export declare const panelPropKeys: (
    | 'positiveText'
    | 'negativeText'
    | 'showIcon'
    | 'onPositiveClick'
    | 'onNegativeClick'
)[];
declare const _default: import('vue').DefineComponent<
    {
        readonly positiveText: PropType<string | null>;
        readonly negativeText: PropType<string | null>;
        readonly showIcon: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly onPositiveClick: {
            readonly type: PropType<(e: MouseEvent) => void>;
            readonly required: true;
        };
        readonly onNegativeClick: {
            readonly type: PropType<(e: MouseEvent) => void>;
            readonly required: true;
        };
    },
    {
        mergedClsPrefix: globalThis.Ref<string>;
        cssVars:
            | globalThis.ComputedRef<{
                  '--n-bezier': string;
                  '--n-font-size': string;
                  '--n-icon-size': string;
                  '--n-icon-color': string;
              }>
            | undefined;
        localizedPositiveText: globalThis.ComputedRef<string>;
        localizedNegativeText: globalThis.ComputedRef<string>;
        positiveButtonProps: globalThis.Ref<
            import('../../button').ButtonProps | undefined
        >;
        negativeButtonProps: globalThis.Ref<
            import('../../button').ButtonProps | undefined
        >;
        handlePositiveClick(e: MouseEvent): void;
        handleNegativeClick(e: MouseEvent): void;
        themeClass: globalThis.Ref<string> | undefined;
        onRender: (() => void) | undefined;
        localeRef: globalThis.Ref<{
            positiveText: string;
            negativeText: string;
        }>;
        dateLocaleRef: globalThis.Ref<
            import('../../locales/date/enUS').NDateLocale
        >;
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
            readonly positiveText: PropType<string | null>;
            readonly negativeText: PropType<string | null>;
            readonly showIcon: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            readonly onPositiveClick: {
                readonly type: PropType<(e: MouseEvent) => void>;
                readonly required: true;
            };
            readonly onNegativeClick: {
                readonly type: PropType<(e: MouseEvent) => void>;
                readonly required: true;
            };
        }>
    >,
    {
        readonly showIcon: boolean;
    },
    {}
>;
export default _default;
