Object.defineProperty(exports, '__esModule', { value: true });
const common_1 = require('../../_styles/common');
const styles_1 = require('../../_internal/scrollbar/styles');
const light_1 = require('./light');
const drawerDark = {
    name: 'Drawer',
    common: common_1.commonDark,
    peers: {
        Scrollbar: styles_1.scrollbarDark,
    },
    self: light_1.self,
};
exports.default = drawerDark;
