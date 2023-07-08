Object.defineProperty(exports, '__esModule', { value: true });
exports.self = void 0;
const styles_1 = require('../../_internal/select-menu/styles');
const styles_2 = require('../../input/styles');
const common_1 = require('../../_styles/common');
const _mixins_1 = require('../../_mixins');
function self(vars) {
    const { boxShadow2 } = vars;
    return {
        menuBoxShadow: boxShadow2,
    };
}
exports.self = self;
const autoCompleteLight = (0, _mixins_1.createTheme)({
    name: 'AutoComplete',
    common: common_1.commonLight,
    peers: {
        InternalSelectMenu: styles_1.internalSelectMenuLight,
        Input: styles_2.inputLight,
    },
    self,
});
exports.default = autoCompleteLight;
