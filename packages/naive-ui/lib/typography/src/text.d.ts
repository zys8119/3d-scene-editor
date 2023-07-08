import { PropType } from 'vue';
import type { ExtractPublicPropTypes } from '../../_utils';
export declare const textProps: {
    readonly code: BooleanConstructor;
    readonly type: {
        readonly type: StringConstructor;
        readonly default: 'default';
    };
    readonly delete: BooleanConstructor;
    readonly strong: BooleanConstructor;
    readonly italic: BooleanConstructor;
    readonly underline: BooleanConstructor;
    readonly depth: PropType<2 | 1 | 3 | '1' | '2' | '3'>;
    readonly tag: StringConstructor;
    readonly as: {
        readonly type: StringConstructor;
        readonly validator: () => boolean;
        readonly default: undefined;
    };
    readonly theme: PropType<
        import('../../_mixins').Theme<
            'Typography',
            {
                aTextColor: string;
                blockquoteTextColor: string;
                blockquotePrefixColor: string;
                blockquoteLineHeight: string;
                blockquoteFontSize: string;
                codeBorderRadius: string;
                liTextColor: string;
                liLineHeight: string;
                liFontSize: string;
                hrColor: string;
                headerFontWeight: string;
                headerTextColor: string;
                pTextColor: string;
                pTextColor1Depth: string;
                pTextColor2Depth: string;
                pTextColor3Depth: string;
                pLineHeight: string;
                pFontSize: string;
                headerBarColor: string;
                headerBarColorPrimary: string;
                headerBarColorInfo: string;
                headerBarColorError: string;
                headerBarColorWarning: string;
                headerBarColorSuccess: string;
                textColor: string;
                textColor1Depth: string;
                textColor2Depth: string;
                textColor3Depth: string;
                textColorPrimary: string;
                textColorInfo: string;
                textColorSuccess: string;
                textColorWarning: string;
                textColorError: string;
                codeTextColor: string;
                codeColor: string;
                codeBorder: string;
                headerFontSize1: string;
                headerFontSize2: string;
                headerFontSize3: string;
                headerFontSize4: string;
                headerFontSize5: string;
                headerFontSize6: string;
                headerMargin1: string;
                headerMargin2: string;
                headerMargin3: string;
                headerMargin4: string;
                headerMargin5: string;
                headerMargin6: string;
                headerPrefixWidth1: string;
                headerPrefixWidth2: string;
                headerPrefixWidth3: string;
                headerPrefixWidth4: string;
                headerPrefixWidth5: string;
                headerPrefixWidth6: string;
                headerBarWidth1: string;
                headerBarWidth2: string;
                headerBarWidth3: string;
                headerBarWidth4: string;
                headerBarWidth5: string;
                headerBarWidth6: string;
                pMargin: string;
                liMargin: string;
                olPadding: string;
                ulPadding: string;
            },
            any
        >
    >;
    readonly themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Typography',
                {
                    aTextColor: string;
                    blockquoteTextColor: string;
                    blockquotePrefixColor: string;
                    blockquoteLineHeight: string;
                    blockquoteFontSize: string;
                    codeBorderRadius: string;
                    liTextColor: string;
                    liLineHeight: string;
                    liFontSize: string;
                    hrColor: string;
                    headerFontWeight: string;
                    headerTextColor: string;
                    pTextColor: string;
                    pTextColor1Depth: string;
                    pTextColor2Depth: string;
                    pTextColor3Depth: string;
                    pLineHeight: string;
                    pFontSize: string;
                    headerBarColor: string;
                    headerBarColorPrimary: string;
                    headerBarColorInfo: string;
                    headerBarColorError: string;
                    headerBarColorWarning: string;
                    headerBarColorSuccess: string;
                    textColor: string;
                    textColor1Depth: string;
                    textColor2Depth: string;
                    textColor3Depth: string;
                    textColorPrimary: string;
                    textColorInfo: string;
                    textColorSuccess: string;
                    textColorWarning: string;
                    textColorError: string;
                    codeTextColor: string;
                    codeColor: string;
                    codeBorder: string;
                    headerFontSize1: string;
                    headerFontSize2: string;
                    headerFontSize3: string;
                    headerFontSize4: string;
                    headerFontSize5: string;
                    headerFontSize6: string;
                    headerMargin1: string;
                    headerMargin2: string;
                    headerMargin3: string;
                    headerMargin4: string;
                    headerMargin5: string;
                    headerMargin6: string;
                    headerPrefixWidth1: string;
                    headerPrefixWidth2: string;
                    headerPrefixWidth3: string;
                    headerPrefixWidth4: string;
                    headerPrefixWidth5: string;
                    headerPrefixWidth6: string;
                    headerBarWidth1: string;
                    headerBarWidth2: string;
                    headerBarWidth3: string;
                    headerBarWidth4: string;
                    headerBarWidth5: string;
                    headerBarWidth6: string;
                    pMargin: string;
                    liMargin: string;
                    olPadding: string;
                    ulPadding: string;
                },
                any
            >
        >
    >;
    readonly builtinThemeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Typography',
                {
                    aTextColor: string;
                    blockquoteTextColor: string;
                    blockquotePrefixColor: string;
                    blockquoteLineHeight: string;
                    blockquoteFontSize: string;
                    codeBorderRadius: string;
                    liTextColor: string;
                    liLineHeight: string;
                    liFontSize: string;
                    hrColor: string;
                    headerFontWeight: string;
                    headerTextColor: string;
                    pTextColor: string;
                    pTextColor1Depth: string;
                    pTextColor2Depth: string;
                    pTextColor3Depth: string;
                    pLineHeight: string;
                    pFontSize: string;
                    headerBarColor: string;
                    headerBarColorPrimary: string;
                    headerBarColorInfo: string;
                    headerBarColorError: string;
                    headerBarColorWarning: string;
                    headerBarColorSuccess: string;
                    textColor: string;
                    textColor1Depth: string;
                    textColor2Depth: string;
                    textColor3Depth: string;
                    textColorPrimary: string;
                    textColorInfo: string;
                    textColorSuccess: string;
                    textColorWarning: string;
                    textColorError: string;
                    codeTextColor: string;
                    codeColor: string;
                    codeBorder: string;
                    headerFontSize1: string;
                    headerFontSize2: string;
                    headerFontSize3: string;
                    headerFontSize4: string;
                    headerFontSize5: string;
                    headerFontSize6: string;
                    headerMargin1: string;
                    headerMargin2: string;
                    headerMargin3: string;
                    headerMargin4: string;
                    headerMargin5: string;
                    headerMargin6: string;
                    headerPrefixWidth1: string;
                    headerPrefixWidth2: string;
                    headerPrefixWidth3: string;
                    headerPrefixWidth4: string;
                    headerPrefixWidth5: string;
                    headerPrefixWidth6: string;
                    headerBarWidth1: string;
                    headerBarWidth2: string;
                    headerBarWidth3: string;
                    headerBarWidth4: string;
                    headerBarWidth5: string;
                    headerBarWidth6: string;
                    pMargin: string;
                    liMargin: string;
                    olPadding: string;
                    ulPadding: string;
                },
                any
            >
        >
    >;
};
export type TextProps = ExtractPublicPropTypes<typeof textProps>;
declare const _default: import('vue').DefineComponent<
    {
        readonly code: BooleanConstructor;
        readonly type: {
            readonly type: StringConstructor;
            readonly default: 'default';
        };
        readonly delete: BooleanConstructor;
        readonly strong: BooleanConstructor;
        readonly italic: BooleanConstructor;
        readonly underline: BooleanConstructor;
        readonly depth: PropType<2 | 1 | 3 | '1' | '2' | '3'>;
        readonly tag: StringConstructor;
        readonly as: {
            readonly type: StringConstructor;
            readonly validator: () => boolean;
            readonly default: undefined;
        };
        readonly theme: PropType<
            import('../../_mixins').Theme<
                'Typography',
                {
                    aTextColor: string;
                    blockquoteTextColor: string;
                    blockquotePrefixColor: string;
                    blockquoteLineHeight: string;
                    blockquoteFontSize: string;
                    codeBorderRadius: string;
                    liTextColor: string;
                    liLineHeight: string;
                    liFontSize: string;
                    hrColor: string;
                    headerFontWeight: string;
                    headerTextColor: string;
                    pTextColor: string;
                    pTextColor1Depth: string;
                    pTextColor2Depth: string;
                    pTextColor3Depth: string;
                    pLineHeight: string;
                    pFontSize: string;
                    headerBarColor: string;
                    headerBarColorPrimary: string;
                    headerBarColorInfo: string;
                    headerBarColorError: string;
                    headerBarColorWarning: string;
                    headerBarColorSuccess: string;
                    textColor: string;
                    textColor1Depth: string;
                    textColor2Depth: string;
                    textColor3Depth: string;
                    textColorPrimary: string;
                    textColorInfo: string;
                    textColorSuccess: string;
                    textColorWarning: string;
                    textColorError: string;
                    codeTextColor: string;
                    codeColor: string;
                    codeBorder: string;
                    headerFontSize1: string;
                    headerFontSize2: string;
                    headerFontSize3: string;
                    headerFontSize4: string;
                    headerFontSize5: string;
                    headerFontSize6: string;
                    headerMargin1: string;
                    headerMargin2: string;
                    headerMargin3: string;
                    headerMargin4: string;
                    headerMargin5: string;
                    headerMargin6: string;
                    headerPrefixWidth1: string;
                    headerPrefixWidth2: string;
                    headerPrefixWidth3: string;
                    headerPrefixWidth4: string;
                    headerPrefixWidth5: string;
                    headerPrefixWidth6: string;
                    headerBarWidth1: string;
                    headerBarWidth2: string;
                    headerBarWidth3: string;
                    headerBarWidth4: string;
                    headerBarWidth5: string;
                    headerBarWidth6: string;
                    pMargin: string;
                    liMargin: string;
                    olPadding: string;
                    ulPadding: string;
                },
                any
            >
        >;
        readonly themeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Typography',
                    {
                        aTextColor: string;
                        blockquoteTextColor: string;
                        blockquotePrefixColor: string;
                        blockquoteLineHeight: string;
                        blockquoteFontSize: string;
                        codeBorderRadius: string;
                        liTextColor: string;
                        liLineHeight: string;
                        liFontSize: string;
                        hrColor: string;
                        headerFontWeight: string;
                        headerTextColor: string;
                        pTextColor: string;
                        pTextColor1Depth: string;
                        pTextColor2Depth: string;
                        pTextColor3Depth: string;
                        pLineHeight: string;
                        pFontSize: string;
                        headerBarColor: string;
                        headerBarColorPrimary: string;
                        headerBarColorInfo: string;
                        headerBarColorError: string;
                        headerBarColorWarning: string;
                        headerBarColorSuccess: string;
                        textColor: string;
                        textColor1Depth: string;
                        textColor2Depth: string;
                        textColor3Depth: string;
                        textColorPrimary: string;
                        textColorInfo: string;
                        textColorSuccess: string;
                        textColorWarning: string;
                        textColorError: string;
                        codeTextColor: string;
                        codeColor: string;
                        codeBorder: string;
                        headerFontSize1: string;
                        headerFontSize2: string;
                        headerFontSize3: string;
                        headerFontSize4: string;
                        headerFontSize5: string;
                        headerFontSize6: string;
                        headerMargin1: string;
                        headerMargin2: string;
                        headerMargin3: string;
                        headerMargin4: string;
                        headerMargin5: string;
                        headerMargin6: string;
                        headerPrefixWidth1: string;
                        headerPrefixWidth2: string;
                        headerPrefixWidth3: string;
                        headerPrefixWidth4: string;
                        headerPrefixWidth5: string;
                        headerPrefixWidth6: string;
                        headerBarWidth1: string;
                        headerBarWidth2: string;
                        headerBarWidth3: string;
                        headerBarWidth4: string;
                        headerBarWidth5: string;
                        headerBarWidth6: string;
                        pMargin: string;
                        liMargin: string;
                        olPadding: string;
                        ulPadding: string;
                    },
                    any
                >
            >
        >;
        readonly builtinThemeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Typography',
                    {
                        aTextColor: string;
                        blockquoteTextColor: string;
                        blockquotePrefixColor: string;
                        blockquoteLineHeight: string;
                        blockquoteFontSize: string;
                        codeBorderRadius: string;
                        liTextColor: string;
                        liLineHeight: string;
                        liFontSize: string;
                        hrColor: string;
                        headerFontWeight: string;
                        headerTextColor: string;
                        pTextColor: string;
                        pTextColor1Depth: string;
                        pTextColor2Depth: string;
                        pTextColor3Depth: string;
                        pLineHeight: string;
                        pFontSize: string;
                        headerBarColor: string;
                        headerBarColorPrimary: string;
                        headerBarColorInfo: string;
                        headerBarColorError: string;
                        headerBarColorWarning: string;
                        headerBarColorSuccess: string;
                        textColor: string;
                        textColor1Depth: string;
                        textColor2Depth: string;
                        textColor3Depth: string;
                        textColorPrimary: string;
                        textColorInfo: string;
                        textColorSuccess: string;
                        textColorWarning: string;
                        textColorError: string;
                        codeTextColor: string;
                        codeColor: string;
                        codeBorder: string;
                        headerFontSize1: string;
                        headerFontSize2: string;
                        headerFontSize3: string;
                        headerFontSize4: string;
                        headerFontSize5: string;
                        headerFontSize6: string;
                        headerMargin1: string;
                        headerMargin2: string;
                        headerMargin3: string;
                        headerMargin4: string;
                        headerMargin5: string;
                        headerMargin6: string;
                        headerPrefixWidth1: string;
                        headerPrefixWidth2: string;
                        headerPrefixWidth3: string;
                        headerPrefixWidth4: string;
                        headerPrefixWidth5: string;
                        headerPrefixWidth6: string;
                        headerBarWidth1: string;
                        headerBarWidth2: string;
                        headerBarWidth3: string;
                        headerBarWidth4: string;
                        headerBarWidth5: string;
                        headerBarWidth6: string;
                        pMargin: string;
                        liMargin: string;
                        olPadding: string;
                        ulPadding: string;
                    },
                    any
                >
            >
        >;
    },
    {
        mergedClsPrefix: globalThis.ComputedRef<string>;
        compitableTag: globalThis.ComputedRef<string | undefined>;
        cssVars:
            | globalThis.ComputedRef<{
                  '--n-bezier': string;
                  '--n-text-color': string;
                  '--n-font-weight-strong': string;
                  '--n-font-famliy-mono': string;
                  '--n-code-border-radius': string;
                  '--n-code-text-color': string;
                  '--n-code-color': string;
                  '--n-code-border': string;
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
            readonly code: BooleanConstructor;
            readonly type: {
                readonly type: StringConstructor;
                readonly default: 'default';
            };
            readonly delete: BooleanConstructor;
            readonly strong: BooleanConstructor;
            readonly italic: BooleanConstructor;
            readonly underline: BooleanConstructor;
            readonly depth: PropType<2 | 1 | 3 | '1' | '2' | '3'>;
            readonly tag: StringConstructor;
            readonly as: {
                readonly type: StringConstructor;
                readonly validator: () => boolean;
                readonly default: undefined;
            };
            readonly theme: PropType<
                import('../../_mixins').Theme<
                    'Typography',
                    {
                        aTextColor: string;
                        blockquoteTextColor: string;
                        blockquotePrefixColor: string;
                        blockquoteLineHeight: string;
                        blockquoteFontSize: string;
                        codeBorderRadius: string;
                        liTextColor: string;
                        liLineHeight: string;
                        liFontSize: string;
                        hrColor: string;
                        headerFontWeight: string;
                        headerTextColor: string;
                        pTextColor: string;
                        pTextColor1Depth: string;
                        pTextColor2Depth: string;
                        pTextColor3Depth: string;
                        pLineHeight: string;
                        pFontSize: string;
                        headerBarColor: string;
                        headerBarColorPrimary: string;
                        headerBarColorInfo: string;
                        headerBarColorError: string;
                        headerBarColorWarning: string;
                        headerBarColorSuccess: string;
                        textColor: string;
                        textColor1Depth: string;
                        textColor2Depth: string;
                        textColor3Depth: string;
                        textColorPrimary: string;
                        textColorInfo: string;
                        textColorSuccess: string;
                        textColorWarning: string;
                        textColorError: string;
                        codeTextColor: string;
                        codeColor: string;
                        codeBorder: string;
                        headerFontSize1: string;
                        headerFontSize2: string;
                        headerFontSize3: string;
                        headerFontSize4: string;
                        headerFontSize5: string;
                        headerFontSize6: string;
                        headerMargin1: string;
                        headerMargin2: string;
                        headerMargin3: string;
                        headerMargin4: string;
                        headerMargin5: string;
                        headerMargin6: string;
                        headerPrefixWidth1: string;
                        headerPrefixWidth2: string;
                        headerPrefixWidth3: string;
                        headerPrefixWidth4: string;
                        headerPrefixWidth5: string;
                        headerPrefixWidth6: string;
                        headerBarWidth1: string;
                        headerBarWidth2: string;
                        headerBarWidth3: string;
                        headerBarWidth4: string;
                        headerBarWidth5: string;
                        headerBarWidth6: string;
                        pMargin: string;
                        liMargin: string;
                        olPadding: string;
                        ulPadding: string;
                    },
                    any
                >
            >;
            readonly themeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Typography',
                        {
                            aTextColor: string;
                            blockquoteTextColor: string;
                            blockquotePrefixColor: string;
                            blockquoteLineHeight: string;
                            blockquoteFontSize: string;
                            codeBorderRadius: string;
                            liTextColor: string;
                            liLineHeight: string;
                            liFontSize: string;
                            hrColor: string;
                            headerFontWeight: string;
                            headerTextColor: string;
                            pTextColor: string;
                            pTextColor1Depth: string;
                            pTextColor2Depth: string;
                            pTextColor3Depth: string;
                            pLineHeight: string;
                            pFontSize: string;
                            headerBarColor: string;
                            headerBarColorPrimary: string;
                            headerBarColorInfo: string;
                            headerBarColorError: string;
                            headerBarColorWarning: string;
                            headerBarColorSuccess: string;
                            textColor: string;
                            textColor1Depth: string;
                            textColor2Depth: string;
                            textColor3Depth: string;
                            textColorPrimary: string;
                            textColorInfo: string;
                            textColorSuccess: string;
                            textColorWarning: string;
                            textColorError: string;
                            codeTextColor: string;
                            codeColor: string;
                            codeBorder: string;
                            headerFontSize1: string;
                            headerFontSize2: string;
                            headerFontSize3: string;
                            headerFontSize4: string;
                            headerFontSize5: string;
                            headerFontSize6: string;
                            headerMargin1: string;
                            headerMargin2: string;
                            headerMargin3: string;
                            headerMargin4: string;
                            headerMargin5: string;
                            headerMargin6: string;
                            headerPrefixWidth1: string;
                            headerPrefixWidth2: string;
                            headerPrefixWidth3: string;
                            headerPrefixWidth4: string;
                            headerPrefixWidth5: string;
                            headerPrefixWidth6: string;
                            headerBarWidth1: string;
                            headerBarWidth2: string;
                            headerBarWidth3: string;
                            headerBarWidth4: string;
                            headerBarWidth5: string;
                            headerBarWidth6: string;
                            pMargin: string;
                            liMargin: string;
                            olPadding: string;
                            ulPadding: string;
                        },
                        any
                    >
                >
            >;
            readonly builtinThemeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Typography',
                        {
                            aTextColor: string;
                            blockquoteTextColor: string;
                            blockquotePrefixColor: string;
                            blockquoteLineHeight: string;
                            blockquoteFontSize: string;
                            codeBorderRadius: string;
                            liTextColor: string;
                            liLineHeight: string;
                            liFontSize: string;
                            hrColor: string;
                            headerFontWeight: string;
                            headerTextColor: string;
                            pTextColor: string;
                            pTextColor1Depth: string;
                            pTextColor2Depth: string;
                            pTextColor3Depth: string;
                            pLineHeight: string;
                            pFontSize: string;
                            headerBarColor: string;
                            headerBarColorPrimary: string;
                            headerBarColorInfo: string;
                            headerBarColorError: string;
                            headerBarColorWarning: string;
                            headerBarColorSuccess: string;
                            textColor: string;
                            textColor1Depth: string;
                            textColor2Depth: string;
                            textColor3Depth: string;
                            textColorPrimary: string;
                            textColorInfo: string;
                            textColorSuccess: string;
                            textColorWarning: string;
                            textColorError: string;
                            codeTextColor: string;
                            codeColor: string;
                            codeBorder: string;
                            headerFontSize1: string;
                            headerFontSize2: string;
                            headerFontSize3: string;
                            headerFontSize4: string;
                            headerFontSize5: string;
                            headerFontSize6: string;
                            headerMargin1: string;
                            headerMargin2: string;
                            headerMargin3: string;
                            headerMargin4: string;
                            headerMargin5: string;
                            headerMargin6: string;
                            headerPrefixWidth1: string;
                            headerPrefixWidth2: string;
                            headerPrefixWidth3: string;
                            headerPrefixWidth4: string;
                            headerPrefixWidth5: string;
                            headerPrefixWidth6: string;
                            headerBarWidth1: string;
                            headerBarWidth2: string;
                            headerBarWidth3: string;
                            headerBarWidth4: string;
                            headerBarWidth5: string;
                            headerBarWidth6: string;
                            pMargin: string;
                            liMargin: string;
                            olPadding: string;
                            ulPadding: string;
                        },
                        any
                    >
                >
            >;
        }>
    >,
    {
        readonly type: string;
        readonly delete: boolean;
        readonly italic: boolean;
        readonly underline: boolean;
        readonly as: string;
        readonly code: boolean;
        readonly strong: boolean;
    },
    {}
>;
export default _default;
