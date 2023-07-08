var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
const ru_1 = __importDefault(require('date-fns/locale/ru'));
const dateRuRU = {
    name: 'ru-RU',
    locale: ru_1.default,
};
exports.default = dateRuRU;
