Object.defineProperty(exports, '__esModule', { value: true });
exports.self = void 0;
const common_1 = require('../../_styles/common');
const self = (vars) => {
    const { cubicBezierEaseInOut } = vars;
    return {
        bezier: cubicBezierEaseInOut,
    };
};
exports.self = self;
const collapseTransitionLight = {
    name: 'CollapseTransition',
    common: common_1.commonLight,
    self: exports.self,
};
exports.default = collapseTransitionLight;
