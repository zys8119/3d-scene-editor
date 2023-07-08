Object.defineProperty(exports, '__esModule', { value: true });
const common_1 = require('../../_styles/common');
const light_1 = require('./light');
const styles_1 = require('../../button/styles');
const calendarDark = {
    name: 'Calendar',
    common: common_1.commonDark,
    peers: {
        Button: styles_1.buttonDark,
    },
    self: light_1.self,
};
exports.default = calendarDark;
