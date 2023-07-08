Object.defineProperty(exports, '__esModule', {
    value: true,
});
const fade_in_scale_up_cssr_1 = require('../../../_styles/transitions/fade-in-scale-up.cssr');
const cssr_1 = require('../../../_utils/cssr');
exports.default = (0, cssr_1.c)([
    (0, cssr_1.cB)(
        'tree-select',
        `
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `
    ),
    (0, cssr_1.cB)(
        'tree-select-menu',
        `
 position: relative;
 overflow: hidden;
 margin: 4px 0;
 transition: box-shadow .3s var(--n-bezier), background-color .3s var(--n-bezier);
 border-radius: var(--n-menu-border-radius);
 box-shadow: var(--n-menu-box-shadow);
 background-color: var(--n-menu-color);
 outline: none;
 `,
        [
            (0, cssr_1.cB)('tree', 'max-height: var(--n-menu-height);'),
            (0, cssr_1.cE)(
                'empty',
                `
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `
            ),
            (0, cssr_1.cE)(
                'action',
                `
 padding: var(--n-action-padding);
 transition: 
 color .3s var(--n-bezier);
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `
            ),
            (0, fade_in_scale_up_cssr_1.fadeInScaleUpTransition)(),
        ]
    ),
]);
