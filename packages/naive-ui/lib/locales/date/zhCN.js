var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
const zh_CN_1 = __importDefault(require('date-fns/locale/zh-CN'));
const dateZhCN = {
    name: 'zh-CN',
    locale: zh_CN_1.default,
};
exports.default = dateZhCN;
