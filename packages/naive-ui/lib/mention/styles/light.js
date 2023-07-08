Object.defineProperty(exports, '__esModule', { value: true });
const common_1 = require('../../_styles/common');
const _mixins_1 = require('../../_mixins');
const styles_1 = require('../../_internal/select-menu/styles');
const styles_2 = require('../../input/styles');
const self = (vars) => {
    const { boxShadow2 } = vars;
    return {
        menuBoxShadow: boxShadow2,
    };
};
const mentionLight = (0, _mixins_1.createTheme)({
    name: 'Mention',
    common: common_1.commonLight,
    peers: {
        InternalSelectMenu: styles_1.internalSelectMenuLight,
        Input: styles_2.inputLight,
    },
    self,
});
exports.default = mentionLight;
