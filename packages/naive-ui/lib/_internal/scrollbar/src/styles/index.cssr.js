Object.defineProperty(exports, '__esModule', {
    value: true,
});
const cssr_1 = require('../../../../_utils/cssr');
const fade_in_cssr_1 = require('../../../../_styles/transitions/fade-in.cssr');
exports.default = (0, cssr_1.cB)(
    'scrollbar',
    `
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`,
    [
        (0, cssr_1.c)('>', [
            (0, cssr_1.cB)(
                'scrollbar-container',
                `
 width: 100%;
 overflow: scroll;
 height: 100%;
 max-height: inherit;
 scrollbar-width: none;
 `,
                [
                    (0, cssr_1.c)(
                        '&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb',
                        `
 width: 0;
 height: 0;
 display: none;
 `
                    ),
                    (0, cssr_1.c)('>', [
                        (0, cssr_1.cB)(
                            'scrollbar-content',
                            `
 box-sizing: border-box;
 min-width: 100%;
 `
                        ),
                    ]),
                ]
            ),
        ]),
        (0, cssr_1.c)('>, +', [
            (0, cssr_1.cB)(
                'scrollbar-rail',
                `
 position: absolute;
 pointer-events: none;
 user-select: none;
 -webkit-user-select: none;
 `,
                [
                    (0, cssr_1.cM)(
                        'horizontal',
                        `
 left: 2px;
 right: 2px;
 bottom: 4px;
 height: var(--n-scrollbar-height);
 `,
                        [
                            (0, cssr_1.c)('>', [
                                (0, cssr_1.cE)(
                                    'scrollbar',
                                    `
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `
                                ),
                            ]),
                        ]
                    ),
                    (0, cssr_1.cM)(
                        'vertical',
                        `
 right: 4px;
 top: 2px;
 bottom: 2px;
 width: var(--n-scrollbar-width);
 `,
                        [
                            (0, cssr_1.c)('>', [
                                (0, cssr_1.cE)(
                                    'scrollbar',
                                    `
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `
                                ),
                            ]),
                        ]
                    ),
                    (0, cssr_1.cM)('disabled', [
                        (0, cssr_1.c)('>', [
                            (0, cssr_1.cE)('scrollbar', {
                                pointerEvents: 'none',
                            }),
                        ]),
                    ]),
                    (0, cssr_1.c)('>', [
                        (0, cssr_1.cE)(
                            'scrollbar',
                            `
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `,
                            [
                                (0, fade_in_cssr_1.fadeInTransition)(),
                                (0, cssr_1.c)('&:hover', {
                                    backgroundColor:
                                        'var(--n-scrollbar-color-hover)',
                                }),
                            ]
                        ),
                    ]),
                ]
            ),
        ]),
    ]
);
