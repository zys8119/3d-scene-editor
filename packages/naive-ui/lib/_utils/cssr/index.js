Object.defineProperty(exports, '__esModule', { value: true });
exports.createKey =
    exports.find =
    exports.namespace =
    exports.prefix =
    exports.asModal =
    exports.insidePopover =
    exports.insideModal =
    exports.cCB =
    exports.cNotM =
    exports.cM =
    exports.cE =
    exports.cB =
    exports.c =
        void 0;
const css_render_1 = require('css-render');
const plugin_bem_1 = require('@css-render/plugin-bem');
const namespace = 'n';
exports.namespace = namespace;
const prefix = `.${namespace}-`;
exports.prefix = prefix;
const elementPrefix = '__';
const modifierPrefix = '--';
const cssr = (0, css_render_1.CssRender)();
const plugin = (0, plugin_bem_1.plugin)({
    blockPrefix: prefix,
    elementPrefix,
    modifierPrefix,
});
cssr.use(plugin);
const { c, find } = cssr;
exports.c = c;
exports.find = find;
const { cB, cE, cM, cNotM } = plugin;
exports.cB = cB;
exports.cE = cE;
exports.cM = cM;
exports.cNotM = cNotM;
function insideModal(style) {
    return c(
        ({ props: { bPrefix } }) =>
            `${bPrefix || prefix}modal, ${bPrefix || prefix}drawer`,
        [style]
    );
}
exports.insideModal = insideModal;
function insidePopover(style) {
    return c(
        ({ props: { bPrefix } }) => `${bPrefix || prefix}popover`,
        [style]
    );
}
exports.insidePopover = insidePopover;
function asModal(style) {
    return c(({ props: { bPrefix } }) => `&${bPrefix || prefix}modal`, style);
}
exports.asModal = asModal;
const cCB = (...args) => {
    return c('>', [cB(...args)]);
};
exports.cCB = cCB;
var create_key_1 = require('./create-key');
Object.defineProperty(exports, 'createKey', {
    enumerable: true,
    get: function () {
        return create_key_1.createKey;
    },
});
