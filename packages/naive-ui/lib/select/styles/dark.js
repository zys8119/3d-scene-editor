Object.defineProperty(exports, '__esModule', { value: true });
const styles_1 = require('../../_internal/selection/styles');
const styles_2 = require('../../_internal/select-menu/styles');
const common_1 = require('../../_styles/common');
const light_1 = require('./light');
const selectDark = {
    name: 'Select',
    common: common_1.commonDark,
    peers: {
        InternalSelection: styles_1.internalSelectionDark,
        InternalSelectMenu: styles_2.internalSelectMenuDark,
    },
    self: light_1.self,
};
exports.default = selectDark;
