import type { ExtractPublicPropTypes } from '../../_utils';
export interface AnchorInst {
    scrollTo: (href: string) => void;
}
export declare const anchorProps: {
    readonly type: {
        readonly type: globalThis.PropType<'block' | 'rail'>;
        readonly default: 'rail';
    };
    readonly showRail: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly showBackground: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly bound: {
        readonly type: NumberConstructor;
        readonly default: 12;
    };
    readonly internalScrollable: BooleanConstructor;
    readonly ignoreGap: BooleanConstructor;
    readonly offsetTarget: globalThis.PropType<
        string | import('./utils').OffsetTarget | (() => HTMLElement)
    >;
    readonly listenTo: globalThis.PropType<
        | string
        | import('../../affix/src/utils').ScrollTarget
        | (() => HTMLElement)
        | undefined
    >;
    readonly top: NumberConstructor;
    readonly bottom: NumberConstructor;
    readonly triggerTop: NumberConstructor;
    readonly triggerBottom: NumberConstructor;
    readonly position: {
        readonly type: globalThis.PropType<'absolute' | 'fix'>;
        readonly default: 'fix';
    };
    readonly offsetTop: {
        readonly type: globalThis.PropType<number | undefined>;
        readonly validator: () => boolean;
        readonly default: undefined;
    };
    readonly offsetBottom: {
        readonly type: globalThis.PropType<number | undefined>;
        readonly validator: () => boolean;
        readonly default: undefined;
    };
    readonly target: {
        readonly type: globalThis.PropType<(() => HTMLElement) | undefined>;
        readonly validator: () => boolean;
        readonly default: undefined;
    };
    readonly affix: BooleanConstructor;
    readonly theme: globalThis.PropType<
        import('../../_mixins').Theme<
            'Anchor',
            {
                borderRadius: string;
                railColor: string;
                railColorActive: string;
                linkColor: string;
                linkTextColor: string;
                linkTextColorHover: string;
                linkTextColorPressed: string;
                linkTextColorActive: string;
                linkFontSize: string;
                linkPadding: string;
                railWidth: string;
            },
            any
        >
    >;
    readonly themeOverrides: globalThis.PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Anchor',
                {
                    borderRadius: string;
                    railColor: string;
                    railColorActive: string;
                    linkColor: string;
                    linkTextColor: string;
                    linkTextColorHover: string;
                    linkTextColorPressed: string;
                    linkTextColorActive: string;
                    linkFontSize: string;
                    linkPadding: string;
                    railWidth: string;
                },
                any
            >
        >
    >;
    readonly builtinThemeOverrides: globalThis.PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Anchor',
                {
                    borderRadius: string;
                    railColor: string;
                    railColorActive: string;
                    linkColor: string;
                    linkTextColor: string;
                    linkTextColorHover: string;
                    linkTextColorPressed: string;
                    linkTextColorActive: string;
                    linkFontSize: string;
                    linkPadding: string;
                    railWidth: string;
                },
                any
            >
        >
    >;
};
export type AnchorProps = ExtractPublicPropTypes<typeof anchorProps>;
declare const _default: import('vue').DefineComponent<
    {
        readonly type: {
            readonly type: globalThis.PropType<'block' | 'rail'>;
            readonly default: 'rail';
        };
        readonly showRail: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly showBackground: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly bound: {
            readonly type: NumberConstructor;
            readonly default: 12;
        };
        readonly internalScrollable: BooleanConstructor;
        readonly ignoreGap: BooleanConstructor;
        readonly offsetTarget: globalThis.PropType<
            string | import('./utils').OffsetTarget | (() => HTMLElement)
        >;
        readonly listenTo: globalThis.PropType<
            | string
            | import('../../affix/src/utils').ScrollTarget
            | (() => HTMLElement)
            | undefined
        >;
        readonly top: NumberConstructor;
        readonly bottom: NumberConstructor;
        readonly triggerTop: NumberConstructor;
        readonly triggerBottom: NumberConstructor;
        readonly position: {
            readonly type: globalThis.PropType<'absolute' | 'fix'>;
            readonly default: 'fix';
        };
        readonly offsetTop: {
            readonly type: globalThis.PropType<number | undefined>;
            readonly validator: () => boolean;
            readonly default: undefined;
        };
        readonly offsetBottom: {
            readonly type: globalThis.PropType<number | undefined>;
            readonly validator: () => boolean;
            readonly default: undefined;
        };
        readonly target: {
            readonly type: globalThis.PropType<(() => HTMLElement) | undefined>;
            readonly validator: () => boolean;
            readonly default: undefined;
        };
        readonly affix: BooleanConstructor;
        readonly theme: globalThis.PropType<
            import('../../_mixins').Theme<
                'Anchor',
                {
                    borderRadius: string;
                    railColor: string;
                    railColorActive: string;
                    linkColor: string;
                    linkTextColor: string;
                    linkTextColorHover: string;
                    linkTextColorPressed: string;
                    linkTextColorActive: string;
                    linkFontSize: string;
                    linkPadding: string;
                    railWidth: string;
                },
                any
            >
        >;
        readonly themeOverrides: globalThis.PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Anchor',
                    {
                        borderRadius: string;
                        railColor: string;
                        railColorActive: string;
                        linkColor: string;
                        linkTextColor: string;
                        linkTextColorHover: string;
                        linkTextColorPressed: string;
                        linkTextColorActive: string;
                        linkFontSize: string;
                        linkPadding: string;
                        railWidth: string;
                    },
                    any
                >
            >
        >;
        readonly builtinThemeOverrides: globalThis.PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Anchor',
                    {
                        borderRadius: string;
                        railColor: string;
                        railColorActive: string;
                        linkColor: string;
                        linkTextColor: string;
                        linkTextColorHover: string;
                        linkTextColorPressed: string;
                        linkTextColorActive: string;
                        linkFontSize: string;
                        linkPadding: string;
                        railWidth: string;
                    },
                    any
                >
            >
        >;
    },
    {
        scrollTo(href: string): void;
        renderAnchor: () => JSX.Element;
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
                readonly type: globalThis.PropType<'block' | 'rail'>;
                readonly default: 'rail';
            };
            readonly showRail: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            readonly showBackground: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            readonly bound: {
                readonly type: NumberConstructor;
                readonly default: 12;
            };
            readonly internalScrollable: BooleanConstructor;
            readonly ignoreGap: BooleanConstructor;
            readonly offsetTarget: globalThis.PropType<
                string | import('./utils').OffsetTarget | (() => HTMLElement)
            >;
            readonly listenTo: globalThis.PropType<
                | string
                | import('../../affix/src/utils').ScrollTarget
                | (() => HTMLElement)
                | undefined
            >;
            readonly top: NumberConstructor;
            readonly bottom: NumberConstructor;
            readonly triggerTop: NumberConstructor;
            readonly triggerBottom: NumberConstructor;
            readonly position: {
                readonly type: globalThis.PropType<'absolute' | 'fix'>;
                readonly default: 'fix';
            };
            readonly offsetTop: {
                readonly type: globalThis.PropType<number | undefined>;
                readonly validator: () => boolean;
                readonly default: undefined;
            };
            readonly offsetBottom: {
                readonly type: globalThis.PropType<number | undefined>;
                readonly validator: () => boolean;
                readonly default: undefined;
            };
            readonly target: {
                readonly type: globalThis.PropType<
                    (() => HTMLElement) | undefined
                >;
                readonly validator: () => boolean;
                readonly default: undefined;
            };
            readonly affix: BooleanConstructor;
            readonly theme: globalThis.PropType<
                import('../../_mixins').Theme<
                    'Anchor',
                    {
                        borderRadius: string;
                        railColor: string;
                        railColorActive: string;
                        linkColor: string;
                        linkTextColor: string;
                        linkTextColorHover: string;
                        linkTextColorPressed: string;
                        linkTextColorActive: string;
                        linkFontSize: string;
                        linkPadding: string;
                        railWidth: string;
                    },
                    any
                >
            >;
            readonly themeOverrides: globalThis.PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Anchor',
                        {
                            borderRadius: string;
                            railColor: string;
                            railColorActive: string;
                            linkColor: string;
                            linkTextColor: string;
                            linkTextColorHover: string;
                            linkTextColorPressed: string;
                            linkTextColorActive: string;
                            linkFontSize: string;
                            linkPadding: string;
                            railWidth: string;
                        },
                        any
                    >
                >
            >;
            readonly builtinThemeOverrides: globalThis.PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Anchor',
                        {
                            borderRadius: string;
                            railColor: string;
                            railColorActive: string;
                            linkColor: string;
                            linkTextColor: string;
                            linkTextColorHover: string;
                            linkTextColorPressed: string;
                            linkTextColorActive: string;
                            linkFontSize: string;
                            linkPadding: string;
                            railWidth: string;
                        },
                        any
                    >
                >
            >;
        }>
    >,
    {
        readonly type: 'block' | 'rail';
        readonly bound: number;
        readonly position: 'absolute' | 'fix';
        readonly target: (() => HTMLElement) | undefined;
        readonly offsetTop: number | undefined;
        readonly offsetBottom: number | undefined;
        readonly showRail: boolean;
        readonly showBackground: boolean;
        readonly internalScrollable: boolean;
        readonly ignoreGap: boolean;
        readonly affix: boolean;
    },
    {}
>;
export default _default;
