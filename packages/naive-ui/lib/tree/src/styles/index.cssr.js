Object.defineProperty(exports, '__esModule', {
    value: true,
});
const cssr_1 = require('../../../_utils/cssr');
const icon_switch_cssr_1 = require('../../../_styles/transitions/icon-switch.cssr');
const fade_in_height_expand_cssr_1 = require('../../../_styles/transitions/fade-in-height-expand.cssr');
exports.default = (0, cssr_1.cB)(
    'tree',
    `
 font-size: var(--n-font-size);
 outline: none;
`,
    [
        (0, cssr_1.c)(
            'ul, li',
            `
 margin: 0;
 padding: 0;
 list-style: none;
 `
        ),
        (0, cssr_1.c)('>', [
            (0, cssr_1.cB)('tree-node', [
                (0, cssr_1.c)('&:first-child', {
                    marginTop: 0,
                }),
            ]),
        ]),
        (0, cssr_1.cB)(
            'tree-node-indent',
            `
 flex-grow: 0;
 flex-shrink: 0;
 height: 0;
 `
        ),
        (0, cssr_1.cB)('tree-motion-wrapper', [
            (0, cssr_1.cM)('expand', [
                (0, fade_in_height_expand_cssr_1.fadeInHeightExpandTransition)({
                    duration: '0.2s',
                }),
            ]),
            (0, cssr_1.cM)('collapse', [
                (0, fade_in_height_expand_cssr_1.fadeInHeightExpandTransition)({
                    duration: '0.2s',
                    reverse: true,
                }),
            ]),
        ]),
        (0, cssr_1.cB)(
            'tree-node-wrapper',
            `
 box-sizing: border-box;
 padding: 3px 0;
 `
        ),
        (0, cssr_1.cB)(
            'tree-node',
            `
 transform: translate3d(0,0,0);
 position: relative;
 display: flex;
 border-radius: var(--n-node-border-radius);
 transition: background-color .3s var(--n-bezier);
 `,
            [
                (0, cssr_1.cM)('highlight', [
                    (0, cssr_1.cB)('tree-node-content', [
                        (0, cssr_1.cE)('text', {
                            borderBottomColor:
                                'var(--n-node-text-color-disabled)',
                        }),
                    ]),
                ]),
                (0, cssr_1.cM)('disabled', [
                    (0, cssr_1.cB)(
                        'tree-node-content',
                        `
 color: var(--n-node-text-color-disabled);
 cursor: not-allowed;
 `
                    ),
                ]),
                (0, cssr_1.cNotM)('disabled', [
                    (0, cssr_1.cM)('clickable', [
                        (0, cssr_1.cB)(
                            'tree-node-content',
                            `
 cursor: pointer;
 `
                        ),
                    ]),
                ]),
            ]
        ),
        (0, cssr_1.cM)('block-node', [
            (0, cssr_1.cB)(
                'tree-node-content',
                `
 flex: 1;
 min-width: 0;
 `
            ),
        ]),
        (0, cssr_1.cNotM)('block-line', [
            (0, cssr_1.cB)('tree-node', [
                (0, cssr_1.cNotM)('disabled', [
                    (0, cssr_1.cB)('tree-node-content', [
                        (0, cssr_1.c)('&:hover', {
                            backgroundColor: 'var(--n-node-color-hover)',
                        }),
                    ]),
                    (0, cssr_1.cM)('selectable', [
                        (0, cssr_1.cB)('tree-node-content', [
                            (0, cssr_1.c)('&:active', {
                                backgroundColor: 'var(--n-node-color-pressed)',
                            }),
                        ]),
                    ]),
                    (0, cssr_1.cM)('pending', [
                        (0, cssr_1.cB)(
                            'tree-node-content',
                            `
 background-color: var(--n-node-color-hover);
 `
                        ),
                    ]),
                    (0, cssr_1.cM)('selected', [
                        (0, cssr_1.cB)('tree-node-content', {
                            backgroundColor: 'var(--n-node-color-active)',
                        }),
                    ]),
                ]),
            ]),
        ]),
        (0, cssr_1.cM)('block-line', [
            (0, cssr_1.cB)('tree-node', [
                (0, cssr_1.cNotM)('disabled', [
                    (0, cssr_1.c)('&:hover', {
                        backgroundColor: 'var(--n-node-color-hover)',
                    }),
                    (0, cssr_1.cM)(
                        'pending',
                        `
 background-color: var(--n-node-color-hover);
 `
                    ),
                    (0, cssr_1.cM)('selectable', [
                        (0, cssr_1.cNotM)('selected', [
                            (0, cssr_1.c)('&:active', {
                                backgroundColor: 'var(--n-node-color-pressed)',
                            }),
                        ]),
                    ]),
                    (0, cssr_1.cM)('selected', {
                        backgroundColor: 'var(--n-node-color-active)',
                    }),
                ]),
                (0, cssr_1.cM)(
                    'disabled',
                    `
 cursor: not-allowed;
 `
                ),
            ]),
        ]),
        (0, cssr_1.cB)(
            'tree-node-switcher',
            `
 cursor: pointer;
 display: inline-flex;
 flex-shrink: 0;
 height: 24px;
 width: 24px;
 align-items: center;
 justify-content: center;
 transition: transform .15s var(--n-bezier);
 vertical-align: bottom;
 `,
            [
                (0, cssr_1.cE)(
                    'icon',
                    `
 position: relative;
 height: 14px;
 width: 14px;
 display: flex;
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 font-size: 14px;
 `,
                    [
                        (0, cssr_1.cB)('icon', [
                            (0, icon_switch_cssr_1.iconSwitchTransition)(),
                        ]),
                        (0, cssr_1.cB)(
                            'base-loading',
                            `
 color: var(--n-loading-color);
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 `,
                            [(0, icon_switch_cssr_1.iconSwitchTransition)()]
                        ),
                        (0, cssr_1.cB)('base-icon', [
                            (0, icon_switch_cssr_1.iconSwitchTransition)(),
                        ]),
                    ]
                ),
                (0, cssr_1.cM)('hide', {
                    visibility: 'hidden',
                }),
                (0, cssr_1.cM)('expanded', {
                    transform: 'rotate(90deg)',
                }),
            ]
        ),
        (0, cssr_1.cB)(
            'tree-node-checkbox',
            `
 display: inline-flex;
 height: 24px;
 width: 16px;
 vertical-align: bottom;
 align-items: center;
 justify-content: center;
 margin-right: 4px;
 `,
            [(0, cssr_1.cM)('right', 'margin-left: 4px;')]
        ),
        (0, cssr_1.cM)('checkable', [
            (0, cssr_1.cB)(
                'tree-node-content',
                `
 padding: 0 6px;
 `
            ),
        ]),
        (0, cssr_1.cB)(
            'tree-node-content',
            `
 position: relative;
 display: inline-flex;
 align-items: center;
 min-height: 24px;
 box-sizing: border-box;
 line-height: 1.5;
 vertical-align: bottom;
 padding: 0 6px 0 4px;
 cursor: default;
 border-radius: var(--n-node-border-radius);
 text-decoration-color: #0000;
 text-decoration-line: underline;
 color: var(--n-node-text-color);
 transition:
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,
            [
                (0, cssr_1.c)('&:last-child', {
                    marginBottom: 0,
                }),
                (0, cssr_1.cE)(
                    'prefix',
                    `
 display: inline-flex;
 margin-right: 8px;
 `
                ),
                (0, cssr_1.cE)(
                    'text',
                    `
 border-bottom: 1px solid #0000;
 transition: border-color .3s var(--n-bezier);
 flex-grow: 1;
 max-width: 100%;
 `
                ),
                (0, cssr_1.cE)(
                    'suffix',
                    `
 display: inline-flex;
 `
                ),
            ]
        ),
        (0, cssr_1.cE)('empty', 'margin: auto;'),
    ]
);
