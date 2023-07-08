var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
const ko_1 = __importDefault(require('date-fns/locale/ko'));
const dateKoKR = {
    name: 'ko-KR',
    locale: ko_1.default,
};
exports.default = dateKoKR;
