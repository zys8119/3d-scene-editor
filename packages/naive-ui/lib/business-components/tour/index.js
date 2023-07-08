var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.tourProps = exports.NTour = void 0;
var Tour_1 = require('./src/Tour');
Object.defineProperty(exports, 'NTour', {
    enumerable: true,
    get: function () {
        return __importDefault(Tour_1).default;
    },
});
Object.defineProperty(exports, 'tourProps', {
    enumerable: true,
    get: function () {
        return Tour_1.tourProps;
    },
});
