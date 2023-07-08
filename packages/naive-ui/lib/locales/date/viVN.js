var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
const vi_1 = __importDefault(require('date-fns/locale/vi'));
const dateVi = {
    name: 'vi-VN',
    locale: vi_1.default,
};
exports.default = dateVi;
