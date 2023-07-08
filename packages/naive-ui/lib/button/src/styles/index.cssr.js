Object.defineProperty(exports, '__esModule', {
    value: true,
});
const cssr_1 = require('../../../_utils/cssr');
const fade_in_width_expand_cssr_1 = require('../../../_styles/transitions/fade-in-width-expand.cssr');
const icon_switch_cssr_1 = require('../../../_styles/transitions/icon-switch.cssr');
const _utils_1 = require('../../../_utils');
exports.default = (0, cssr_1.c)([
    (0, cssr_1.cB)(
        'button',
        `
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,
        [
            (0, cssr_1.cM)('color', [
                (0, cssr_1.cE)('border', {
                    borderColor: 'var(--n-border-color)',
                }),
                (0, cssr_1.cM)('disabled', [
                    (0, cssr_1.cE)('border', {
                        borderColor: 'var(--n-border-color-disabled)',
                    }),
                ]),
                (0, cssr_1.cNotM)('disabled', [
                    (0, cssr_1.c)('&:focus', [
                        (0, cssr_1.cE)('state-border', {
                            borderColor: 'var(--n-border-color-focus)',
                        }),
                    ]),
                    (0, cssr_1.c)('&:hover', [
                        (0, cssr_1.cE)('state-border', {
                            borderColor: 'var(--n-border-color-hover)',
                        }),
                    ]),
                    (0, cssr_1.c)('&:active', [
                        (0, cssr_1.cE)('state-border', {
                            borderColor: 'var(--n-border-color-pressed)',
                        }),
                    ]),
                    (0, cssr_1.cM)('pressed', [
                        (0, cssr_1.cE)('state-border', {
                            borderColor: 'var(--n-border-color-pressed)',
                        }),
                    ]),
                ]),
            ]),
            (0, cssr_1.cM)(
                'disabled',
                {
                    backgroundColor: 'var(--n-color-disabled)',
                    color: 'var(--n-text-color-disabled)',
                },
                [
                    (0, cssr_1.cE)('border', {
                        border: 'var(--n-border-disabled)',
                    }),
                ]
            ),
            (0, cssr_1.cNotM)('disabled', [
                (0, cssr_1.c)(
                    '&:focus',
                    {
                        backgroundColor: 'var(--n-color-focus)',
                        color: 'var(--n-text-color-focus)',
                    },
                    [
                        (0, cssr_1.cE)('state-border', {
                            border: 'var(--n-border-focus)',
                        }),
                    ]
                ),
                (0, cssr_1.c)(
                    '&:hover',
                    {
                        backgroundColor: 'var(--n-color-hover)',
                        color: 'var(--n-text-color-hover)',
                    },
                    [
                        (0, cssr_1.cE)('state-border', {
                            border: 'var(--n-border-hover)',
                        }),
                    ]
                ),
                (0, cssr_1.c)(
                    '&:active',
                    {
                        backgroundColor: 'var(--n-color-pressed)',
                        color: 'var(--n-text-color-pressed)',
                    },
                    [
                        (0, cssr_1.cE)('state-border', {
                            border: 'var(--n-border-pressed)',
                        }),
                    ]
                ),
                (0, cssr_1.cM)(
                    'pressed',
                    {
                        backgroundColor: 'var(--n-color-pressed)',
                        color: 'var(--n-text-color-pressed)',
                    },
                    [
                        (0, cssr_1.cE)('state-border', {
                            border: 'var(--n-border-pressed)',
                        }),
                    ]
                ),
            ]),
            (0, cssr_1.cM)('loading', 'cursor: wait;'),
            (0, cssr_1.cB)(
                'base-wave',
                `
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,
                [
                    (0, cssr_1.cM)('active', {
                        zIndex: 1,
                        animationName:
                            'button-wave-spread, button-wave-opacity',
                    }),
                ]
            ),
            _utils_1.isBrowser &&
            'MozBoxSizing' in document.createElement('div').style
                ? (0, cssr_1.c)('&::moz-focus-inner', {
                      border: 0,
                  })
                : null,
            (0, cssr_1.cE)(
                'border, state-border',
                `
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `
            ),
            (0, cssr_1.cE)('border', {
                border: 'var(--n-border)',
            }),
            (0, cssr_1.cE)('state-border', {
                border: 'var(--n-border)',
                borderColor: '#0000',
                zIndex: 1,
            }),
            (0, cssr_1.cE)(
                'icon',
                `
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,
                [
                    (0, cssr_1.cB)(
                        'icon-slot',
                        `
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,
                        [
                            (0, icon_switch_cssr_1.iconSwitchTransition)({
                                top: '50%',
                                originalTransform: 'translateY(-50%)',
                            }),
                        ]
                    ),
                    (0,
                    fade_in_width_expand_cssr_1.fadeInWidthExpandTransition)(),
                ]
            ),
            (0, cssr_1.cE)(
                'content',
                `
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,
                [
                    (0, cssr_1.c)('~', [
                        (0, cssr_1.cE)('icon', {
                            margin: 'var(--n-icon-margin)',
                            marginRight: 0,
                        }),
                    ]),
                ]
            ),
            (0, cssr_1.cM)(
                'block',
                `
 display: flex;
 width: 100%;
 `
            ),
            (0, cssr_1.cM)('dashed', [
                (0, cssr_1.cE)('border, state-border', {
                    borderStyle: 'dashed !important',
                }),
            ]),
            (0, cssr_1.cM)('disabled', {
                cursor: 'not-allowed',
                opacity: 'var(--n-opacity-disabled)',
            }),
        ]
    ),
    (0, cssr_1.c)('@keyframes button-wave-spread', {
        from: {
            boxShadow: '0 0 0.5px 0 var(--n-ripple-color)',
        },
        to: {
            boxShadow: '0 0 0.5px 4.5px var(--n-ripple-color)',
        },
    }),
    (0, cssr_1.c)('@keyframes button-wave-opacity', {
        from: {
            opacity: 'var(--n-wave-opacity)',
        },
        to: {
            opacity: 0,
        },
    }),
]);
