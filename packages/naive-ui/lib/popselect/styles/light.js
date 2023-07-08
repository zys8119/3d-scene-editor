Object.defineProperty(exports, '__esModule', { value: true });
exports.self = void 0;
const styles_1 = require('../../_internal/select-menu/styles');
const common_1 = require('../../_styles/common');
const styles_2 = require('../../popover/styles');
const _mixins_1 = require('../../_mixins');
function self(vars) {
    const { boxShadow2 } = vars;
    return {
        menuBoxShadow: boxShadow2,
    };
}
exports.self = self;
const popselectLight = (0, _mixins_1.createTheme)({
    name: 'Popselect',
    common: common_1.commonLight,
    peers: {
        Popover: styles_2.popoverLight,
        InternalSelectMenu: styles_1.internalSelectMenuLight,
    },
    self,
});
exports.default = popselectLight;
