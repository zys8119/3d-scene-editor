import { c, cB } from '../../../../_utils/cssr';
export default c([
    cB('cascade-menu', null, [
        cB(
            'node',
            `
 background: var(--n-background-color);
 `
        ),
        cB(
            'node-draggable',
            `
 background: var(--n-draggable-background-color);
 `
        ),
    ]),
]);
