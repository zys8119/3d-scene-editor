Object.defineProperty(exports, '__esModule', {
    value: true,
});
const cssr_1 = require('../../../../_utils/cssr');
exports.default = (0, cssr_1.c)([
    (0, cssr_1.cB)(
        'pop-dialog',
        `
 display: flex;
 `
    ),
    (0, cssr_1.cB)(
        'pop-dialog-content',
        `
 flex: 1;
 `,
        [
            (0, cssr_1.c)('& :not(.arrow)', 'overflow: hidden;'),
            (0, cssr_1.c)('& .arrow', '', [
                (0, cssr_1.c)(
                    '&::before',
                    `
 content: '';
 position: absolute;
 height: var(--n-pop-dialog-arrow-size);
 width: var(--n-pop-dialog-arrow-size);
 top: var(--n-pop-dialog-arrow-size);
 transform: rotate(45deg);`
                ),
            ]),
            (0, cssr_1.c)('& .arrow-left', '', [
                (0, cssr_1.c)(
                    '&::before',
                    `
 background-color: var(--n-pop-dialog-left-background-color);
 left: calc(1px - var(--n-pop-dialog-arrow-size) / 2);
 `
                ),
            ]),
            (0, cssr_1.c)('& .arrow-right', '', [
                (0, cssr_1.c)(
                    '&::before',
                    `
 background-color: var(--n-pop-dialog-right-background-color);
 right: calc(1px - var(--n-pop-dialog-arrow-size) / 2);
 `
                ),
            ]),
            (0, cssr_1.c)(
                '&__title',
                `
 font-size: var(--n-pop-dialog-title-font-size);
 line-height: var(--n-pop-dialog-title-font-size);
 margin-bottom: 5px;
 color: var(--n-pop-dialog-title-color);
 cursor: default;
 `
            ),
            (0, cssr_1.c)(
                '&__in',
                `
 font-size: var(--n-pop-dialog-font-size);
 border-radius: var(--n-pop-dialog-border-radius);
 padding: var(--n-pop-dialog-padding);
 display: inline-block;
 position: relative;
 color: var(--n-pop-dialog-left-color);
 background: var(--n-pop-dialog-left-background-color);
 text-align: left;
 line-height: 1.5;
 cursor: default;
 word-break: break-word;
 `,
                [
                    (0, cssr_1.c)(
                        '&:active',
                        `
 --n-pop-dialog-left-background-color: var(--n-pop-dialog-left-active-background-color);
 --n-pop-dialog-right-background-color: var(--n-pop-dialog-right-active-background-color);
 `
                    ),
                    (0, cssr_1.c)(
                        '&-right',
                        `
 color: var(--n-pop-dialog-right-color);
 background: var(--n-pop-dialog-right-background-color);
 `,
                        [
                            (0, cssr_1.c)(
                                '> .n-upload-file-list .n-upload-file ',
                                '',
                                [
                                    (0, cssr_1.c)(
                                        '&:hover',
                                        `
 background: var(--n-pop-dialog-right-file-hover-color)
 `
                                    ),
                                    (0, cssr_1.c)(
                                        '.n-upload-file-info .n-upload-file-info__name',
                                        `
 color: var(--n-pop-dialog-right-color) !important;
 `
                                    ),
                                ]
                            ),
                        ]
                    ),
                ]
            ),
        ]
    ),
    (0, cssr_1.c)(
        'img',
        `
 vertical-align: middle;
 max-width: 100%;
 `
    ),
    (0, cssr_1.c)(
        'video',
        `
 vertical-align: middle;
 max-width: 100%;
 `
    ),
    (0, cssr_1.cB)(
        'pop-dialog-avatar',
        'margin-left: var(--n-pop-dialog-margin);',
        [
            (0, cssr_1.c)(
                '&:first-child',
                'margin-right: var(--n-pop-dialog-margin);'
            ),
        ]
    ),
]);
