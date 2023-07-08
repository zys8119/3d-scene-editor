Object.defineProperty(exports, '__esModule', {
    value: true,
});
const cssr_1 = require('../../../_utils/cssr');
exports.default = (0, cssr_1.cB)(
    'radio-group',
    `
 display: inline-block;
 font-size: var(--n-font-size);
`,
    [
        (0, cssr_1.cE)(
            'splitor',
            `
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `,
            [
                (0, cssr_1.cM)('checked', {
                    backgroundColor: 'var(--n-button-border-color-active)',
                }),
                (0, cssr_1.cM)('disabled', {
                    opacity: 'var(--n-opacity-disabled)',
                }),
            ]
        ),
        (0, cssr_1.cM)(
            'button-group',
            `
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `,
            [
                (0, cssr_1.cB)('radio-button', {
                    height: 'var(--n-height)',
                    lineHeight: 'var(--n-height)',
                }),
                (0, cssr_1.cE)('splitor', {
                    height: 'var(--n-height)',
                }),
            ]
        ),
        (0, cssr_1.cB)(
            'radio-button',
            `
 vertical-align: bottom;
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-block;
 box-sizing: border-box;
 padding-left: 14px;
 padding-right: 14px;
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: var(--n-button-text-color);
 border-top: 1px solid var(--n-button-border-color);
 border-bottom: 1px solid var(--n-button-border-color);
 `,
            [
                (0, cssr_1.cB)(
                    'radio-input',
                    `
 pointer-events: none;
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 `
                ),
                (0, cssr_1.cE)(
                    'state-border',
                    `
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `
                ),
                (0, cssr_1.c)(
                    '&:first-child',
                    `
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `,
                    [
                        (0, cssr_1.cE)(
                            'state-border',
                            `
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `
                        ),
                    ]
                ),
                (0, cssr_1.c)(
                    '&:last-child',
                    `
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `,
                    [
                        (0, cssr_1.cE)(
                            'state-border',
                            `
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `
                        ),
                    ]
                ),
                (0, cssr_1.cNotM)(
                    'disabled',
                    `
 cursor: pointer;
 `,
                    [
                        (0, cssr_1.c)('&:hover', [
                            (0, cssr_1.cE)(
                                'state-border',
                                `
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `
                            ),
                            (0, cssr_1.cNotM)('checked', {
                                color: 'var(--n-button-text-color-hover)',
                            }),
                        ]),
                        (0, cssr_1.cM)('focus', [
                            (0, cssr_1.c)('&:not(:active)', [
                                (0, cssr_1.cE)('state-border', {
                                    boxShadow:
                                        'var(--n-button-box-shadow-focus)',
                                }),
                            ]),
                        ]),
                    ]
                ),
                (0, cssr_1.cM)(
                    'checked',
                    `
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `
                ),
                (0, cssr_1.cM)(
                    'disabled',
                    `
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `
                ),
                (0, cssr_1.cE)(
                    'label',
                    `
 display: flex;
 align-items: center;
 color: var(--n-text-color);
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 transition: color .3s var(--n-bezier);
 `
                ),
                (0, cssr_1.cE)(
                    'span',
                    `
 padding-left: 5px;
 `
                ),
            ]
        ),
    ]
);
