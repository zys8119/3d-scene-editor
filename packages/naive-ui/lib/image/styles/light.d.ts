declare function self(): {
    toolbarIconColor: string;
    toolbarColor: string;
    toolbarBoxShadow: string;
    toolbarBorderRadius: string;
};
export declare const imageLight: import('../../_mixins').Theme<
    'Image',
    {
        toolbarIconColor: string;
        toolbarColor: string;
        toolbarBoxShadow: string;
        toolbarBorderRadius: string;
    },
    {
        Tooltip: import('../../_mixins').Theme<
            'Tooltip',
            {
                borderRadius: string;
                boxShadow: string;
                color: string;
                textColor: string;
                padding: string;
            },
            {
                Popover: import('../../_mixins').Theme<
                    'Popover',
                    {
                        fontSize: string;
                        borderRadius: string;
                        color: string;
                        dividerColor: string;
                        textColor: string;
                        boxShadow: string;
                        space: string;
                        spaceArrow: string;
                        arrowOffset: string;
                        arrowOffsetVertical: string;
                        arrowHeight: string;
                        padding: string;
                    },
                    any
                >;
            }
        >;
    }
>;
export type ImageTheme = typeof imageLight;
export type ImageThemeVars = ReturnType<typeof self>;
export {};
