var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.stepProps =
    exports.NStep =
    exports.stepsProps =
    exports.NSteps =
        void 0;
var Steps_1 = require('./src/Steps');
Object.defineProperty(exports, 'NSteps', {
    enumerable: true,
    get: function () {
        return __importDefault(Steps_1).default;
    },
});
Object.defineProperty(exports, 'stepsProps', {
    enumerable: true,
    get: function () {
        return Steps_1.stepsProps;
    },
});
var Step_1 = require('./src/Step');
Object.defineProperty(exports, 'NStep', {
    enumerable: true,
    get: function () {
        return __importDefault(Step_1).default;
    },
});
Object.defineProperty(exports, 'stepProps', {
    enumerable: true,
    get: function () {
        return Step_1.stepProps;
    },
});
