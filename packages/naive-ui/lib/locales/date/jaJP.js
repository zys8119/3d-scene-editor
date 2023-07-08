var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
const ja_1 = __importDefault(require('date-fns/locale/ja'));
const dateJaJP = {
    name: 'ja-JP',
    locale: ja_1.default,
};
exports.default = dateJaJP;
