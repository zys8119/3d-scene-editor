Object.defineProperty(exports, '__esModule', {
    value: true,
});
const cssr_1 = require('../../../_utils/cssr');
exports.default = (0, cssr_1.c)([
    (0, cssr_1.cB)(
        'tag-select',
        `
 position: relative;
 overflow: hidden;
 flex: 1;
 height: var(--n-tag-select-item-height);
 `,
        [
            (0, cssr_1.cB)('tag-select-option', [
                (0, cssr_1.c)(
                    '&:hover',
                    'color: var(--n-tag-select-handle-text-color);'
                ),
            ]),
        ]
    ),
    (0, cssr_1.cB)('tag-select-expand', [
        `
 height: auto;
 `,
    ]),
    (0, cssr_1.cB)(
        'tag-select-space',
        `
 overflow: hidden;
 width: 85%;
 `
    ),
    (0, cssr_1.cB)(
        'tag-select-handle',
        `
 position: absolute;
 top: 3px;
 right: 10px;
 `
    ),
    (0, cssr_1.cB)(
        'tag-select-handle-text',
        `
 color: var(--n-tag-select-handle-text-color);
 `
    ),
]);
