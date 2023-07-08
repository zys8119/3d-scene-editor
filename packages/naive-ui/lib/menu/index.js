var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.menuProps = exports.NMenu = void 0;
var Menu_1 = require('./src/Menu');
Object.defineProperty(exports, 'NMenu', {
    enumerable: true,
    get: function () {
        return __importDefault(Menu_1).default;
    },
});
Object.defineProperty(exports, 'menuProps', {
    enumerable: true,
    get: function () {
        return Menu_1.menuProps;
    },
});
