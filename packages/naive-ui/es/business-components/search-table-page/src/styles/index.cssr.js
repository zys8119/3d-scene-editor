import { c, cB } from '../../../../_utils/cssr';
export default c([
    cB(
        'search-table-page',
        `
 background: var(--n-background-color);
 padding: var(padding);
 `,
        [
            cB(
                'data-table',
                `
 z-index: 0
 `
            ),
        ]
    ),
]);
