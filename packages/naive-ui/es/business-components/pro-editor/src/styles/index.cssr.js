import { c, cB } from '../../../../_utils/cssr';
export default c([
    cB('pro-editor', null, [
        cB(
            'pro-editor-toolbar',
            `
 border: 1px solid var(--w-e-toolbar-border-color) !important;
 `
        ),
        cB(
            'pro-editor-editor',
            `
 border: 1px solid var(--w-e-textarea-border-color) !important;
 `
        ),
    ]),
]);
