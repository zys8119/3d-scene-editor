import { c, cB } from '../../../_utils/cssr';
export default c([
    cB(
        'tag-select',
        `
 position: relative;
 overflow: hidden;
 flex: 1;
 height: var(--n-tag-select-item-height);
 `,
        [
            cB('tag-select-option', [
                c('&:hover', 'color: var(--n-tag-select-handle-text-color);'),
            ]),
        ]
    ),
    cB('tag-select-expand', [
        `
 height: auto;
 `,
    ]),
    cB(
        'tag-select-space',
        `
 overflow: hidden;
 width: 85%;
 `
    ),
    cB(
        'tag-select-handle',
        `
 position: absolute;
 top: 3px;
 right: 10px;
 `
    ),
    cB(
        'tag-select-handle-text',
        `
 color: var(--n-tag-select-handle-text-color);
 `
    ),
]);
