import { PropType } from 'vue';
import { Hljs } from '../../_mixins';
import type { ExtractPublicPropTypes } from '../../_utils';
export declare const codeProps: {
    language: StringConstructor;
    code: {
        type: StringConstructor;
        default: string;
    };
    trim: {
        type: BooleanConstructor;
        default: boolean;
    };
    hljs: PropType<Hljs>;
    uri: BooleanConstructor;
    inline: BooleanConstructor;
    wordWrap: BooleanConstructor;
    showLineNumbers: BooleanConstructor;
    internalFontSize: NumberConstructor;
    internalNoHighlight: BooleanConstructor;
    theme: PropType<
        import('../../_mixins').Theme<
            'Code',
            {
                textColor: string;
                fontSize: string;
                fontWeightStrong: string;
                'mono-3': string;
                'hue-1': string;
                'hue-2': string;
                'hue-3': string;
                'hue-4': string;
                'hue-5': string;
                'hue-5-2': string;
                'hue-6': string;
                'hue-6-2': string;
                lineNumberTextColor: string;
            },
            any
        >
    >;
    themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Code',
                {
                    textColor: string;
                    fontSize: string;
                    fontWeightStrong: string;
                    'mono-3': string;
                    'hue-1': string;
                    'hue-2': string;
                    'hue-3': string;
                    'hue-4': string;
                    'hue-5': string;
                    'hue-5-2': string;
                    'hue-6': string;
                    'hue-6-2': string;
                    lineNumberTextColor: string;
                },
                any
            >
        >
    >;
    builtinThemeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Code',
                {
                    textColor: string;
                    fontSize: string;
                    fontWeightStrong: string;
                    'mono-3': string;
                    'hue-1': string;
                    'hue-2': string;
                    'hue-3': string;
                    'hue-4': string;
                    'hue-5': string;
                    'hue-5-2': string;
                    'hue-6': string;
                    'hue-6-2': string;
                    lineNumberTextColor: string;
                },
                any
            >
        >
    >;
};
export type CodeProps = ExtractPublicPropTypes<typeof codeProps>;
declare const _default: import('vue').DefineComponent<
    {
        language: StringConstructor;
        code: {
            type: StringConstructor;
            default: string;
        };
        trim: {
            type: BooleanConstructor;
            default: boolean;
        };
        hljs: PropType<Hljs>;
        uri: BooleanConstructor;
        inline: BooleanConstructor;
        wordWrap: BooleanConstructor;
        showLineNumbers: BooleanConstructor;
        internalFontSize: NumberConstructor;
        internalNoHighlight: BooleanConstructor;
        theme: PropType<
            import('../../_mixins').Theme<
                'Code',
                {
                    textColor: string;
                    fontSize: string;
                    fontWeightStrong: string;
                    'mono-3': string;
                    'hue-1': string;
                    'hue-2': string;
                    'hue-3': string;
                    'hue-4': string;
                    'hue-5': string;
                    'hue-5-2': string;
                    'hue-6': string;
                    'hue-6-2': string;
                    lineNumberTextColor: string;
                },
                any
            >
        >;
        themeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Code',
                    {
                        textColor: string;
                        fontSize: string;
                        fontWeightStrong: string;
                        'mono-3': string;
                        'hue-1': string;
                        'hue-2': string;
                        'hue-3': string;
                        'hue-4': string;
                        'hue-5': string;
                        'hue-5-2': string;
                        'hue-6': string;
                        'hue-6-2': string;
                        lineNumberTextColor: string;
                    },
                    any
                >
            >
        >;
        builtinThemeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Code',
                    {
                        textColor: string;
                        fontSize: string;
                        fontWeightStrong: string;
                        'mono-3': string;
                        'hue-1': string;
                        'hue-2': string;
                        'hue-3': string;
                        'hue-4': string;
                        'hue-5': string;
                        'hue-5-2': string;
                        'hue-6': string;
                        'hue-6-2': string;
                        lineNumberTextColor: string;
                    },
                    any
                >
            >
        >;
    },
    {
        mergedClsPrefix: globalThis.ComputedRef<string>;
        codeRef: globalThis.Ref<HTMLElement | null>;
        mergedShowLineNumbers: globalThis.ComputedRef<boolean>;
        lineNumbers: globalThis.ComputedRef<string>;
        cssVars:
            | globalThis.ComputedRef<{
                  '--n-font-size': string;
                  '--n-font-family': string;
                  '--n-font-weight-strong': string;
                  '--n-bezier': string;
                  '--n-text-color': string;
                  '--n-mono-3': string;
                  '--n-hue-1': string;
                  '--n-hue-2': string;
                  '--n-hue-3': string;
                  '--n-hue-4': string;
                  '--n-hue-5': string;
                  '--n-hue-5-2': string;
                  '--n-hue-6': string;
                  '--n-hue-6-2': string;
                  '--n-line-number-text-color': string;
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
            language: StringConstructor;
            code: {
                type: StringConstructor;
                default: string;
            };
            trim: {
                type: BooleanConstructor;
                default: boolean;
            };
            hljs: PropType<Hljs>;
            uri: BooleanConstructor;
            inline: BooleanConstructor;
            wordWrap: BooleanConstructor;
            showLineNumbers: BooleanConstructor;
            internalFontSize: NumberConstructor;
            internalNoHighlight: BooleanConstructor;
            theme: PropType<
                import('../../_mixins').Theme<
                    'Code',
                    {
                        textColor: string;
                        fontSize: string;
                        fontWeightStrong: string;
                        'mono-3': string;
                        'hue-1': string;
                        'hue-2': string;
                        'hue-3': string;
                        'hue-4': string;
                        'hue-5': string;
                        'hue-5-2': string;
                        'hue-6': string;
                        'hue-6-2': string;
                        lineNumberTextColor: string;
                    },
                    any
                >
            >;
            themeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Code',
                        {
                            textColor: string;
                            fontSize: string;
                            fontWeightStrong: string;
                            'mono-3': string;
                            'hue-1': string;
                            'hue-2': string;
                            'hue-3': string;
                            'hue-4': string;
                            'hue-5': string;
                            'hue-5-2': string;
                            'hue-6': string;
                            'hue-6-2': string;
                            lineNumberTextColor: string;
                        },
                        any
                    >
                >
            >;
            builtinThemeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Code',
                        {
                            textColor: string;
                            fontSize: string;
                            fontWeightStrong: string;
                            'mono-3': string;
                            'hue-1': string;
                            'hue-2': string;
                            'hue-3': string;
                            'hue-4': string;
                            'hue-5': string;
                            'hue-5-2': string;
                            'hue-6': string;
                            'hue-6-2': string;
                            lineNumberTextColor: string;
                        },
                        any
                    >
                >
            >;
        }>
    >,
    {
        inline: boolean;
        trim: boolean;
        wordWrap: boolean;
        code: string;
        uri: boolean;
        showLineNumbers: boolean;
        internalNoHighlight: boolean;
    },
    {}
>;
export default _default;
