var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.collapseTransitionProps = exports.NCollapseTransition = void 0;
var CollapseTransition_1 = require('./src/CollapseTransition');
Object.defineProperty(exports, 'NCollapseTransition', {
    enumerable: true,
    get: function () {
        return __importDefault(CollapseTransition_1).default;
    },
});
Object.defineProperty(exports, 'collapseTransitionProps', {
    enumerable: true,
    get: function () {
        return CollapseTransition_1.collapseTransitionProps;
    },
});
