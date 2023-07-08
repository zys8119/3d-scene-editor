import { CssRender } from 'css-render';
import { plugin as BemPlugin } from '@css-render/plugin-bem';
const namespace = 'n';
const prefix = `.${namespace}-`;
const elementPrefix = '__';
const modifierPrefix = '--';
const cssr = CssRender();
const plugin = BemPlugin({
    blockPrefix: prefix,
    elementPrefix,
    modifierPrefix,
});
cssr.use(plugin);
const { c, find } = cssr;
const { cB, cE, cM, cNotM } = plugin;
function insideModal(style) {
    return c(
        ({ props: { bPrefix } }) =>
            `${bPrefix || prefix}modal, ${bPrefix || prefix}drawer`,
        [style]
    );
}
function insidePopover(style) {
    return c(
        ({ props: { bPrefix } }) => `${bPrefix || prefix}popover`,
        [style]
    );
}
function asModal(style) {
    return c(({ props: { bPrefix } }) => `&${bPrefix || prefix}modal`, style);
}
const cCB = (...args) => {
    return c('>', [cB(...args)]);
};
export {
    c,
    cB,
    cE,
    cM,
    cNotM,
    cCB,
    insideModal,
    insidePopover,
    asModal,
    prefix,
    namespace,
    find,
};
export { createKey } from './create-key';
