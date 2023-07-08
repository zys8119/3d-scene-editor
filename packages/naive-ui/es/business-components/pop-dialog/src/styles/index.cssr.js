import { c, cB } from '../../../../_utils/cssr';
export default c([
    cB(
        'pop-dialog',
        `
 display: flex;
 `
    ),
    cB(
        'pop-dialog-content',
        `
 flex: 1;
 `,
        [
            c('& :not(.arrow)', 'overflow: hidden;'),
            c('& .arrow', '', [
                c(
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
            c('& .arrow-left', '', [
                c(
                    '&::before',
                    `
 background-color: var(--n-pop-dialog-left-background-color);
 left: calc(1px - var(--n-pop-dialog-arrow-size) / 2);
 `
                ),
            ]),
            c('& .arrow-right', '', [
                c(
                    '&::before',
                    `
 background-color: var(--n-pop-dialog-right-background-color);
 right: calc(1px - var(--n-pop-dialog-arrow-size) / 2);
 `
                ),
            ]),
            c(
                '&__title',
                `
 font-size: var(--n-pop-dialog-title-font-size);
 line-height: var(--n-pop-dialog-title-font-size);
 margin-bottom: 5px;
 color: var(--n-pop-dialog-title-color);
 cursor: default;
 `
            ),
            c(
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
                    c(
                        '&:active',
                        `
 --n-pop-dialog-left-background-color: var(--n-pop-dialog-left-active-background-color);
 --n-pop-dialog-right-background-color: var(--n-pop-dialog-right-active-background-color);
 `
                    ),
                    c(
                        '&-right',
                        `
 color: var(--n-pop-dialog-right-color);
 background: var(--n-pop-dialog-right-background-color);
 `,
                        [
                            c('> .n-upload-file-list .n-upload-file ', '', [
                                c(
                                    '&:hover',
                                    `
 background: var(--n-pop-dialog-right-file-hover-color)
 `
                                ),
                                c(
                                    '.n-upload-file-info .n-upload-file-info__name',
                                    `
 color: var(--n-pop-dialog-right-color) !important;
 `
                                ),
                            ]),
                        ]
                    ),
                ]
            ),
        ]
    ),
    c(
        'img',
        `
 vertical-align: middle;
 max-width: 100%;
 `
    ),
    c(
        'video',
        `
 vertical-align: middle;
 max-width: 100%;
 `
    ),
    cB('pop-dialog-avatar', 'margin-left: var(--n-pop-dialog-margin);', [
        c('&:first-child', 'margin-right: var(--n-pop-dialog-margin);'),
    ]),
]);
