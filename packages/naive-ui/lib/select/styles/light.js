Object.defineProperty(exports, '__esModule', { value: true });
exports.self = void 0;
const styles_1 = require('../../_internal/selection/styles');
const styles_2 = require('../../_internal/select-menu/styles');
const common_1 = require('../../_styles/common');
const _mixins_1 = require('../../_mixins');
function self(vars) {
    const { boxShadow2 } = vars;
    return {
        menuBoxShadow: boxShadow2,
    };
}
exports.self = self;
const selectLight = (0, _mixins_1.createTheme)({
    name: 'Select',
    common: common_1.commonLight,
    peers: {
        InternalSelection: styles_1.internalSelectionLight,
        InternalSelectMenu: styles_2.internalSelectMenuLight,
    },
    self,
});
exports.default = selectLight;
