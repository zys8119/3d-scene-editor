Object.defineProperty(exports, '__esModule', { value: true });
const styles_1 = require('../../../empty/styles');
const styles_2 = require('../../scrollbar/styles');
const common_1 = require('../../../_styles/common');
const light_1 = require('./light');
const internalSelectMenuDark = {
    name: 'InternalSelectMenu',
    common: common_1.commonDark,
    peers: {
        Scrollbar: styles_2.scrollbarDark,
        Empty: styles_1.emptyDark,
    },
    self: light_1.self,
};
exports.default = internalSelectMenuDark;
