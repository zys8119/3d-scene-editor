export declare const NH1: import('vue').DefineComponent<
    {
        readonly type: {
            readonly type: globalThis.PropType<
                'default' | 'error' | 'info' | 'success' | 'warning'
            >;
            readonly default: 'default';
        };
        readonly prefix: StringConstructor;
        readonly alignText: BooleanConstructor;
        readonly theme: globalThis.PropType<
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
        readonly themeOverrides: globalThis.PropType<
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
        readonly builtinThemeOverrides: globalThis.PropType<
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
        cssVars:
            | globalThis.ComputedRef<{
                  '--n-bezier': string;
                  '--n-font-size': string;
                  '--n-margin': string;
                  '--n-bar-color': string;
                  '--n-bar-width': string;
                  '--n-font-weight': string;
                  '--n-text-color': string;
                  '--n-prefix-width': string;
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
            readonly type: {
                readonly type: globalThis.PropType<
                    'default' | 'error' | 'info' | 'success' | 'warning'
                >;
                readonly default: 'default';
            };
            readonly prefix: StringConstructor;
            readonly alignText: BooleanConstructor;
            readonly theme: globalThis.PropType<
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
            readonly themeOverrides: globalThis.PropType<
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
            readonly builtinThemeOverrides: globalThis.PropType<
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
        readonly type: 'default' | 'error' | 'info' | 'success' | 'warning';
        readonly alignText: boolean;
    },
    {}
>;
export declare const NH2: import('vue').DefineComponent<
    {
        readonly type: {
            readonly type: globalThis.PropType<
                'default' | 'error' | 'info' | 'success' | 'warning'
            >;
            readonly default: 'default';
        };
        readonly prefix: StringConstructor;
        readonly alignText: BooleanConstructor;
        readonly theme: globalThis.PropType<
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
        readonly themeOverrides: globalThis.PropType<
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
        readonly builtinThemeOverrides: globalThis.PropType<
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
        cssVars:
            | globalThis.ComputedRef<{
                  '--n-bezier': string;
                  '--n-font-size': string;
                  '--n-margin': string;
                  '--n-bar-color': string;
                  '--n-bar-width': string;
                  '--n-font-weight': string;
                  '--n-text-color': string;
                  '--n-prefix-width': string;
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
            readonly type: {
                readonly type: globalThis.PropType<
                    'default' | 'error' | 'info' | 'success' | 'warning'
                >;
                readonly default: 'default';
            };
            readonly prefix: StringConstructor;
            readonly alignText: BooleanConstructor;
            readonly theme: globalThis.PropType<
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
            readonly themeOverrides: globalThis.PropType<
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
            readonly builtinThemeOverrides: globalThis.PropType<
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
        readonly type: 'default' | 'error' | 'info' | 'success' | 'warning';
        readonly alignText: boolean;
    },
    {}
>;
export declare const NH3: import('vue').DefineComponent<
    {
        readonly type: {
            readonly type: globalThis.PropType<
                'default' | 'error' | 'info' | 'success' | 'warning'
            >;
            readonly default: 'default';
        };
        readonly prefix: StringConstructor;
        readonly alignText: BooleanConstructor;
        readonly theme: globalThis.PropType<
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
        readonly themeOverrides: globalThis.PropType<
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
        readonly builtinThemeOverrides: globalThis.PropType<
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
        cssVars:
            | globalThis.ComputedRef<{
                  '--n-bezier': string;
                  '--n-font-size': string;
                  '--n-margin': string;
                  '--n-bar-color': string;
                  '--n-bar-width': string;
                  '--n-font-weight': string;
                  '--n-text-color': string;
                  '--n-prefix-width': string;
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
            readonly type: {
                readonly type: globalThis.PropType<
                    'default' | 'error' | 'info' | 'success' | 'warning'
                >;
                readonly default: 'default';
            };
            readonly prefix: StringConstructor;
            readonly alignText: BooleanConstructor;
            readonly theme: globalThis.PropType<
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
            readonly themeOverrides: globalThis.PropType<
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
            readonly builtinThemeOverrides: globalThis.PropType<
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
        readonly type: 'default' | 'error' | 'info' | 'success' | 'warning';
        readonly alignText: boolean;
    },
    {}
>;
export declare const NH4: import('vue').DefineComponent<
    {
        readonly type: {
            readonly type: globalThis.PropType<
                'default' | 'error' | 'info' | 'success' | 'warning'
            >;
            readonly default: 'default';
        };
        readonly prefix: StringConstructor;
        readonly alignText: BooleanConstructor;
        readonly theme: globalThis.PropType<
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
        readonly themeOverrides: globalThis.PropType<
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
        readonly builtinThemeOverrides: globalThis.PropType<
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
        cssVars:
            | globalThis.ComputedRef<{
                  '--n-bezier': string;
                  '--n-font-size': string;
                  '--n-margin': string;
                  '--n-bar-color': string;
                  '--n-bar-width': string;
                  '--n-font-weight': string;
                  '--n-text-color': string;
                  '--n-prefix-width': string;
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
            readonly type: {
                readonly type: globalThis.PropType<
                    'default' | 'error' | 'info' | 'success' | 'warning'
                >;
                readonly default: 'default';
            };
            readonly prefix: StringConstructor;
            readonly alignText: BooleanConstructor;
            readonly theme: globalThis.PropType<
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
            readonly themeOverrides: globalThis.PropType<
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
            readonly builtinThemeOverrides: globalThis.PropType<
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
        readonly type: 'default' | 'error' | 'info' | 'success' | 'warning';
        readonly alignText: boolean;
    },
    {}
>;
export declare const NH5: import('vue').DefineComponent<
    {
        readonly type: {
            readonly type: globalThis.PropType<
                'default' | 'error' | 'info' | 'success' | 'warning'
            >;
            readonly default: 'default';
        };
        readonly prefix: StringConstructor;
        readonly alignText: BooleanConstructor;
        readonly theme: globalThis.PropType<
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
        readonly themeOverrides: globalThis.PropType<
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
        readonly builtinThemeOverrides: globalThis.PropType<
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
        cssVars:
            | globalThis.ComputedRef<{
                  '--n-bezier': string;
                  '--n-font-size': string;
                  '--n-margin': string;
                  '--n-bar-color': string;
                  '--n-bar-width': string;
                  '--n-font-weight': string;
                  '--n-text-color': string;
                  '--n-prefix-width': string;
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
            readonly type: {
                readonly type: globalThis.PropType<
                    'default' | 'error' | 'info' | 'success' | 'warning'
                >;
                readonly default: 'default';
            };
            readonly prefix: StringConstructor;
            readonly alignText: BooleanConstructor;
            readonly theme: globalThis.PropType<
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
            readonly themeOverrides: globalThis.PropType<
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
            readonly builtinThemeOverrides: globalThis.PropType<
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
        readonly type: 'default' | 'error' | 'info' | 'success' | 'warning';
        readonly alignText: boolean;
    },
    {}
>;
export declare const NH6: import('vue').DefineComponent<
    {
        readonly type: {
            readonly type: globalThis.PropType<
                'default' | 'error' | 'info' | 'success' | 'warning'
            >;
            readonly default: 'default';
        };
        readonly prefix: StringConstructor;
        readonly alignText: BooleanConstructor;
        readonly theme: globalThis.PropType<
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
        readonly themeOverrides: globalThis.PropType<
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
        readonly builtinThemeOverrides: globalThis.PropType<
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
        cssVars:
            | globalThis.ComputedRef<{
                  '--n-bezier': string;
                  '--n-font-size': string;
                  '--n-margin': string;
                  '--n-bar-color': string;
                  '--n-bar-width': string;
                  '--n-font-weight': string;
                  '--n-text-color': string;
                  '--n-prefix-width': string;
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
            readonly type: {
                readonly type: globalThis.PropType<
                    'default' | 'error' | 'info' | 'success' | 'warning'
                >;
                readonly default: 'default';
            };
            readonly prefix: StringConstructor;
            readonly alignText: BooleanConstructor;
            readonly theme: globalThis.PropType<
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
            readonly themeOverrides: globalThis.PropType<
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
            readonly builtinThemeOverrides: globalThis.PropType<
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
        readonly type: 'default' | 'error' | 'info' | 'success' | 'warning';
        readonly alignText: boolean;
    },
    {}
>;
