var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.useMessage =
    exports.messageProviderProps =
    exports.NMessageProvider =
        void 0;
var MessageProvider_1 = require('./src/MessageProvider');
Object.defineProperty(exports, 'NMessageProvider', {
    enumerable: true,
    get: function () {
        return __importDefault(MessageProvider_1).default;
    },
});
Object.defineProperty(exports, 'messageProviderProps', {
    enumerable: true,
    get: function () {
        return MessageProvider_1.messageProviderProps;
    },
});
var use_message_1 = require('./src/use-message');
Object.defineProperty(exports, 'useMessage', {
    enumerable: true,
    get: function () {
        return use_message_1.useMessage;
    },
});
