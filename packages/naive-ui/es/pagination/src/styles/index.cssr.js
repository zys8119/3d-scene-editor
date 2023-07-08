import { cB, c, cM, cNotM } from '../../../_utils/cssr';
const hoverStyleProps = `
 background: var(--n-item-color-hover);
 color: var(--n-item-text-color-hover);
 border: var(--n-item-border-hover);
`;
const hoverStyleChildren = [
    cM(
        'button',
        `
 background: var(--n-button-color-hover);
 border: var(--n-button-border-hover);
 color: var(--n-button-icon-color-hover);
 `
    ),
];
export default cB(
    'pagination',
    `
 display: flex;
 vertical-align: middle;
 font-size: var(--n-item-font-size);
 flex-wrap: nowrap;
`,
    [
        cB(
            'pagination-prefix',
            `
 display: flex;
 align-items: center;
 margin: var(--n-prefix-margin);
 `
        ),
        cB(
            'pagination-suffix',
            `
 display: flex;
 align-items: center;
 margin: var(--n-suffix-margin);
 `
        ),
        c(
            '> *:not(:first-child)',
            `
 margin: var(--n-item-margin);
 `
        ),
        cB(
            'select',
            `
 width: var(--n-select-width);
 `
        ),
        c('&.transition-disabled', [
            cB('pagination-item', 'transition: none!important;'),
        ]),
        cB(
            'pagination-quick-jumper',
            `
 white-space: nowrap;
 display: flex;
 color: var(--n-jumper-text-color);
 transition: color .3s var(--n-bezier);
 align-items: center;
 font-size: var(--n-jumper-font-size);
 `,
            [
                cB(
                    'input',
                    `
 margin: var(--n-input-margin);
 width: var(--n-input-width);
 `
                ),
            ]
        ),
        cB(
            'pagination-item',
            `
 position: relative;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 display: flex;
 align-items: center;
 justify-content: center;
 box-sizing: border-box;
 min-width: var(--n-item-size);
 height: var(--n-item-size);
 padding: var(--n-item-padding);
 background-color: var(--n-item-color);
 color: var(--n-item-text-color);
 border-radius: var(--n-item-border-radius);
 border: var(--n-item-border);
 fill: var(--n-button-icon-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 fill .3s var(--n-bezier);
 `,
            [
                cM(
                    'button',
                    `
 background: var(--n-button-color);
 color: var(--n-button-icon-color);
 border: var(--n-button-border);
 padding: 0;
 `,
                    [
                        cB(
                            'base-icon',
                            `
 font-size: var(--n-button-icon-size);
 `
                        ),
                    ]
                ),
                cNotM('disabled', [
                    cM('hover', hoverStyleProps, hoverStyleChildren),
                    c('&:hover', hoverStyleProps, hoverStyleChildren),
                    c(
                        '&:active',
                        `
 background: var(--n-item-color-pressed);
 color: var(--n-item-text-color-pressed);
 border: var(--n-item-border-pressed);
 `,
                        [
                            cM(
                                'button',
                                `
 background: var(--n-button-color-pressed);
 border: var(--n-button-border-pressed);
 color: var(--n-button-icon-color-pressed);
 `
                            ),
                        ]
                    ),
                    cM(
                        'active',
                        `
 background: var(--n-item-color-active);
 color: var(--n-item-text-color-active);
 border: var(--n-item-border-active);
 `,
                        [
                            c(
                                '&:hover',
                                `
 background: var(--n-item-color-active-hover);
 `
                            ),
                        ]
                    ),
                ]),
                cM(
                    'disabled',
                    `
 cursor: not-allowed;
 color: var(--n-item-text-color-disabled);
 `,
                    [
                        cM(
                            'active, button',
                            `
 background-color: var(--n-item-color-disabled);
 border: var(--n-item-border-disabled);
 `
                        ),
                    ]
                ),
            ]
        ),
        cM(
            'disabled',
            `
 cursor: not-allowed;
 `,
            [
                cB(
                    'pagination-quick-jumper',
                    `
 color: var(--n-jumper-text-color-disabled);
 `
                ),
            ]
        ),
        cM(
            'simple',
            `
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 `,
            [
                cB('pagination-quick-jumper', [
                    cB(
                        'input',
                        `
 margin: 0;
 `
                    ),
                ]),
            ]
        ),
    ]
);
