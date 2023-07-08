Object.defineProperty(exports, '__esModule', { value: true });
const styles_1 = require('../../_internal/scrollbar/styles');
const styles_2 = require('../../dialog/styles');
const styles_3 = require('../../card/styles');
const common_1 = require('../../_styles/common');
const light_1 = require('./light');
const modalDark = {
    name: 'Modal',
    common: common_1.commonDark,
    peers: {
        Scrollbar: styles_1.scrollbarDark,
        Dialog: styles_2.dialogDark,
        Card: styles_3.cardDark,
    },
    self: light_1.self,
};
exports.default = modalDark;
