var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.alertRtl = void 0;
const rtl_cssr_1 = __importDefault(require('../src/styles/rtl.cssr'));
exports.alertRtl = {
    name: 'Alert',
    style: rtl_cssr_1.default,
};
