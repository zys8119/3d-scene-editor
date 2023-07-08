Object.defineProperty(exports, '__esModule', { value: true });
const styles_1 = require('../../_internal/select-menu/styles');
const styles_2 = require('../../popover/styles');
const common_1 = require('../../_styles/common');
const popselect = {
    name: 'Popselect',
    common: common_1.commonDark,
    peers: {
        Popover: styles_2.popoverDark,
        InternalSelectMenu: styles_1.internalSelectMenuDark,
    },
};
exports.default = popselect;
