Object.defineProperty(exports, '__esModule', {
    value: true,
});
const cssr_1 = require('../../../_utils/cssr');
exports.default = (0, cssr_1.c)([
    (0, cssr_1.cB)(
        'dialog',
        `
 word-break: break-word;
 line-height: var(--n-line-height);
 position: relative;
 background: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 margin: auto;
 border-radius: var(--n-border-radius);
 padding: var(--n-padding);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `,
        [
            (0, cssr_1.cE)('icon', {
                color: 'var(--n-icon-color)',
            }),
            (0, cssr_1.cM)('bordered', {
                border: 'var(--n-border)',
            }),
            (0, cssr_1.cM)('icon-top', [
                (0, cssr_1.cE)('close', {
                    margin: 'var(--n-close-margin)',
                }),
                (0, cssr_1.cE)('icon', {
                    margin: 'var(--n-icon-margin)',
                }),
                (0, cssr_1.cE)('content', {
                    textAlign: 'center',
                }),
                (0, cssr_1.cE)('title', {
                    justifyContent: 'center',
                }),
                (0, cssr_1.cE)('action', {
                    justifyContent: 'center',
                }),
            ]),
            (0, cssr_1.cM)('icon-left', [
                (0, cssr_1.cE)('icon', {
                    margin: 'var(--n-icon-margin)',
                }),
                (0, cssr_1.cM)('closable', [
                    (0, cssr_1.cE)(
                        'title',
                        `
 padding-right: calc(var(--n-close-size) + 6px);
 `
                    ),
                ]),
            ]),
            (0, cssr_1.cE)(
                'close',
                `
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 z-index: 1;
 `
            ),
            (0, cssr_1.cE)(
                'content',
                `
 font-size: var(--n-font-size);
 margin: var(--n-content-margin);
 position: relative;
 word-break: break-word;
 `,
                [(0, cssr_1.cM)('last', 'margin-bottom: 0;')]
            ),
            (0, cssr_1.cE)(
                'action',
                `
 display: flex;
 justify-content: flex-end;
 `,
                [
                    (0, cssr_1.c)('> *:not(:last-child)', {
                        marginRight: 'var(--n-action-space)',
                    }),
                ]
            ),
            (0, cssr_1.cE)('icon', {
                fontSize: 'var(--n-icon-size)',
                transition: 'color .3s var(--n-bezier)',
            }),
            (0, cssr_1.cE)(
                'title',
                `
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `
            ),
            (0, cssr_1.cB)('dialog-icon-container', {
                display: 'flex',
                justifyContent: 'center',
            }),
        ]
    ),
    (0, cssr_1.insideModal)(
        (0, cssr_1.cB)(
            'dialog',
            `
 width: 446px;
 max-width: calc(100vw - 32px);
 `
        )
    ),
    (0, cssr_1.cB)('dialog', [
        (0, cssr_1.asModal)(`
 width: 446px;
 max-width: calc(100vw - 32px);
 `),
    ]),
]);
