var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.calendarProps = exports.NCalendar = void 0;
var Calendar_1 = require('./src/Calendar');
Object.defineProperty(exports, 'NCalendar', {
    enumerable: true,
    get: function () {
        return __importDefault(Calendar_1).default;
    },
});
Object.defineProperty(exports, 'calendarProps', {
    enumerable: true,
    get: function () {
        return Calendar_1.calendarProps;
    },
});
