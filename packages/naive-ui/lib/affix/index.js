var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.affixProps = exports.NAffix = void 0;
var Affix_1 = require('./src/Affix');
Object.defineProperty(exports, 'NAffix', {
    enumerable: true,
    get: function () {
        return __importDefault(Affix_1).default;
    },
});
Object.defineProperty(exports, 'affixProps', {
    enumerable: true,
    get: function () {
        return Affix_1.affixProps;
    },
});
