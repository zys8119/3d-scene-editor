Object.defineProperty(exports, '__esModule', { value: true });
const common_1 = require('../../_styles/common');
const light_1 = require('./light');
const notificationBarDark = {
    name: 'NotificationBar',
    common: common_1.commonDark,
    self(vars) {
        return (0, light_1.self)(vars);
    },
};
exports.default = notificationBarDark;
