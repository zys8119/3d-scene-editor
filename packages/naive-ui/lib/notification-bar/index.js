var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.notificationBarProps = exports.NNotificationBar = void 0;
var NotificationBar_1 = require('./src/NotificationBar');
Object.defineProperty(exports, 'NNotificationBar', {
    enumerable: true,
    get: function () {
        return __importDefault(NotificationBar_1).default;
    },
});
Object.defineProperty(exports, 'notificationBarProps', {
    enumerable: true,
    get: function () {
        return NotificationBar_1.notificationBarProps;
    },
});
