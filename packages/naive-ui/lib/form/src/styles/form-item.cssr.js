Object.defineProperty(exports, '__esModule', {
    value: true,
});
const cssr_1 = require('../../../_utils/cssr');
const fade_down_cssr_1 = require('../../../_styles/transitions/fade-down.cssr');
exports.default = (0, cssr_1.cB)(
    'form-item',
    `
 display: grid;
 line-height: var(--n-line-height);
`,
    [
        (0, cssr_1.cB)(
            'form-item-label',
            `
 grid-area: label;
 align-items: center;
 line-height: 1.25;
 text-align: var(--n-label-text-align);
 font-size: var(--n-label-font-size);
 min-height: var(--n-label-height);
 padding: var(--n-label-padding);
 color: var(--n-label-text-color);
 transition: color .3s var(--n-bezier);
 box-sizing: border-box;
 font-weight: var(--n-label-font-weight);
 `,
            [
                (0, cssr_1.cE)(
                    'asterisk',
                    `
 white-space: nowrap;
 user-select: none;
 -webkit-user-select: none;
 color: var(--n-asterisk-color);
 transition: color .3s var(--n-bezier);
 `
                ),
                (0, cssr_1.cE)(
                    'asterisk-placeholder',
                    `
 grid-area: mark;
 user-select: none;
 -webkit-user-select: none;
 visibility: hidden; 
 `
                ),
            ]
        ),
        (0, cssr_1.cB)(
            'form-item-blank',
            `
 grid-area: blank;
 min-height: var(--n-blank-height);
 `
        ),
        (0, cssr_1.cM)('auto-label-width', [
            (0, cssr_1.cB)('form-item-label', 'white-space: nowrap;'),
        ]),
        (0, cssr_1.cM)(
            'left-labelled',
            `
 grid-template-areas:
 "label blank"
 "label feedback";
 grid-template-columns: auto minmax(0, 1fr);
 grid-template-rows: auto 1fr;
 align-items: start;
 `,
            [
                (0, cssr_1.cB)(
                    'form-item-label',
                    `
 display: grid;
 grid-template-columns: 1fr auto;
 min-height: var(--n-blank-height);
 height: auto;
 box-sizing: border-box;
 flex-shrink: 0;
 flex-grow: 0;
 `,
                    [
                        (0, cssr_1.cM)(
                            'reverse-columns-space',
                            `
 grid-template-columns: auto 1fr;
 `
                        ),
                        (0, cssr_1.cM)(
                            'left-mark',
                            `
 grid-template-areas:
 "mark text"
 ". text";
 `
                        ),
                        (0, cssr_1.cM)(
                            'right-mark',
                            `
 grid-template-areas: 
 "text mark"
 "text .";
 `
                        ),
                        (0, cssr_1.cM)(
                            'right-hanging-mark',
                            `
 grid-template-areas: 
 "text mark"
 "text .";
 `
                        ),
                        (0, cssr_1.cE)(
                            'text',
                            `
 grid-area: text; 
 `
                        ),
                        (0, cssr_1.cE)(
                            'asterisk',
                            `
 grid-area: mark; 
 align-self: end;
 `
                        ),
                    ]
                ),
            ]
        ),
        (0, cssr_1.cM)(
            'top-labelled',
            `
 grid-template-areas:
 "label"
 "blank"
 "feedback";
 grid-template-rows: minmax(var(--n-label-height), auto) 1fr;
 grid-template-columns: minmax(0, 100%);
 `,
            [
                (0, cssr_1.cM)(
                    'no-label',
                    `
 grid-template-areas:
 "blank"
 "feedback";
 grid-template-rows: 1fr;
 `
                ),
                (0, cssr_1.cB)(
                    'form-item-label',
                    `
 display: flex;
 align-items: flex-start;
 justify-content: var(--n-label-text-align);
 `
                ),
            ]
        ),
        (0, cssr_1.cB)(
            'form-item-blank',
            `
 box-sizing: border-box;
 display: flex;
 align-items: center;
 position: relative;
 `
        ),
        (0, cssr_1.cB)(
            'form-item-feedback-wrapper',
            `
 grid-area: feedback;
 box-sizing: border-box;
 min-height: var(--n-feedback-height);
 font-size: var(--n-feedback-font-size);
 line-height: 1.25;
 transform-origin: top left;
 `,
            [
                (0, cssr_1.c)(
                    '&:not(:empty)',
                    `
 padding: var(--n-feedback-padding);
 `
                ),
                (0, cssr_1.cB)(
                    'form-item-feedback',
                    {
                        transition: 'color .3s var(--n-bezier)',
                        color: 'var(--n-feedback-text-color)',
                    },
                    [
                        (0, cssr_1.cM)('warning', {
                            color: 'var(--n-feedback-text-color-warning)',
                        }),
                        (0, cssr_1.cM)('error', {
                            color: 'var(--n-feedback-text-color-error)',
                        }),
                        (0, fade_down_cssr_1.fadeDownTransition)({
                            fromOffset: '-3px',
                            enterDuration: '.3s',
                            leaveDuration: '.2s',
                        }),
                    ]
                ),
            ]
        ),
    ]
);
