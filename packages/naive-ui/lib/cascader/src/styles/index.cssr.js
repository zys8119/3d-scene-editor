Object.defineProperty(exports, '__esModule', {
    value: true,
});
const cssr_1 = require('../../../_utils/cssr');
const fade_in_scale_up_cssr_1 = require('../../../_styles/transitions/fade-in-scale-up.cssr');
exports.default = (0, cssr_1.c)([
    (0, cssr_1.cB)(
        'cascader-menu',
        `
 outline: none;
 position: relative;
 margin: 4px 0;
 display: flex;
 flex-flow: column nowrap;
 border-radius: var(--n-menu-border-radius);
 overflow: hidden;
 box-shadow: var(--n-menu-box-shadow);
 color: var(--n-option-text-color);
 background-color: var(--n-menu-color);
 `,
        [
            (0, fade_in_scale_up_cssr_1.fadeInScaleUpTransition)({
                transformOrigin: 'inherit',
                duration: '0.2s',
            }),
            (0, cssr_1.cE)(
                'empty',
                `
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `
            ),
            (0, cssr_1.cB)('scrollbar', {
                width: '100%',
            }),
            (0, cssr_1.cB)('base-menu-mask', {
                backgroundColor: 'var(--n-menu-mask-color)',
            }),
            (0, cssr_1.cB)('base-loading', {
                color: 'var(--n-loading-color)',
            }),
            (0, cssr_1.cB)(
                'cascader-submenu-wrapper',
                `
 position: relative;
 display: flex;
 flex-wrap: nowrap;
 `
            ),
            (0, cssr_1.cB)(
                'cascader-submenu',
                `
 height: var(--n-menu-height);
 min-width: var(--n-column-width);
 position: relative;
 `,
                [
                    (0, cssr_1.cM)(
                        'virtual',
                        `
 width: var(--n-column-width);
 `
                    ),
                    (0, cssr_1.cB)('scrollbar-content', {
                        position: 'relative',
                    }),
                    (0, cssr_1.c)(
                        '&:first-child',
                        `
 border-top-left-radius: var(--n-menu-border-radius);
 border-bottom-left-radius: var(--n-menu-border-radius);
 `
                    ),
                    (0, cssr_1.c)(
                        '&:last-child',
                        `
 border-top-right-radius: var(--n-menu-border-radius);
 border-bottom-right-radius: var(--n-menu-border-radius);
 `
                    ),
                    (0, cssr_1.c)(
                        '&:not(:first-child)',
                        `
 border-left: 1px solid var(--n-menu-divider-color);
 `
                    ),
                ]
            ),
            (0, cssr_1.cB)(
                'cascader-menu-action',
                `
 box-sizing: border-box;
 padding: 8px;
 border-top: 1px solid var(--n-menu-divider-color);
 `
            ),
            (0, cssr_1.cB)(
                'cascader-option',
                `
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 padding: 0 0 0 18px;
 box-sizing: border-box;
 min-width: 182px;
 background-color: #0000;
 display: flex;
 align-items: center;
 white-space: nowrap;
 position: relative;
 cursor: pointer;
 transition:
 background-color .2s var(--n-bezier),
 color 0.2s var(--n-bezier);
 `,
                [
                    (0, cssr_1.cM)('show-prefix', {
                        paddingLeft: 0,
                    }),
                    (0, cssr_1.cE)(
                        'label',
                        `
 flex: 1 0 0;
 overflow: hidden;
 text-overflow: ellipsis;
 `
                    ),
                    (0, cssr_1.cE)('prefix', {
                        width: '32px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }),
                    (0, cssr_1.cE)('suffix', {
                        width: '32px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }),
                    (0, cssr_1.cB)(
                        'cascader-option-icon-placeholder',
                        {
                            lineHeight: 0,
                            position: 'relative',
                            width: '16px',
                            height: '16px',
                            fontSize: '16px',
                        },
                        [
                            (0, cssr_1.cB)('cascader-option-icon', [
                                (0, cssr_1.cM)(
                                    'checkmark',
                                    {
                                        color: 'var(--n-option-check-mark-color)',
                                    },
                                    [
                                        (0,
                                        fade_in_scale_up_cssr_1.fadeInScaleUpTransition)(
                                            {
                                                originalTransition:
                                                    'background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)',
                                            }
                                        ),
                                    ]
                                ),
                                (0, cssr_1.cM)('arrow', {
                                    color: 'var(--n-option-arrow-color)',
                                }),
                            ]),
                        ]
                    ),
                    (0, cssr_1.cM)('selected', {
                        color: 'var(--n-option-text-color-active)',
                    }),
                    (0, cssr_1.cM)('active', {
                        color: 'var(--n-option-text-color-active)',
                        backgroundColor: 'var(--n-option-color-hover)',
                    }),
                    (0, cssr_1.cM)('pending', {
                        backgroundColor: 'var(--n-option-color-hover)',
                    }),
                    (0, cssr_1.c)('&:hover', {
                        backgroundColor: 'var(--n-option-color-hover)',
                    }),
                    (0, cssr_1.cM)(
                        'disabled',
                        `
 color: var(--n-option-text-color-disabled);
 background-color: #0000;
 cursor: not-allowed;
 `,
                        [
                            (0, cssr_1.cB)('cascader-option-icon', [
                                (0, cssr_1.cM)('arrow', {
                                    color: 'var(--n-option-text-color-disabled)',
                                }),
                            ]),
                        ]
                    ),
                ]
            ),
        ]
    ),
    (0, cssr_1.cB)(
        'cascader',
        `
 z-index: auto;
 position: relative;
 width: 100%;
 `
    ),
]);
