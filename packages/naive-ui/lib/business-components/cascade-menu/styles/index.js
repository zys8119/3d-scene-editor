var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.cascadeMenuDark = exports.cascadeMenuLight = void 0;
var light_1 = require('./light');
Object.defineProperty(exports, 'cascadeMenuLight', {
    enumerable: true,
    get: function () {
        return __importDefault(light_1).default;
    },
});
var dark_1 = require('./dark');
Object.defineProperty(exports, 'cascadeMenuDark', {
    enumerable: true,
    get: function () {
        return __importDefault(dark_1).default;
    },
});
