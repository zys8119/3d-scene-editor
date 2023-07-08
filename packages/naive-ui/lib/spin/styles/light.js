Object.defineProperty(exports, '__esModule', { value: true });
exports.self = void 0;
const common_1 = require('../../_styles/common');
const self = (vars) => {
    const {
        opacityDisabled,
        heightTiny,
        heightSmall,
        heightMedium,
        heightLarge,
        heightHuge,
        primaryColor,
        fontSize,
    } = vars;
    return {
        fontSize,
        textColor: primaryColor,
        sizeTiny: heightTiny,
        sizeSmall: heightSmall,
        sizeMedium: heightMedium,
        sizeLarge: heightLarge,
        sizeHuge: heightHuge,
        color: primaryColor,
        opacitySpinning: opacityDisabled,
    };
};
exports.self = self;
const spinLight = {
    name: 'Spin',
    common: common_1.commonLight,
    self: exports.self,
};
exports.default = spinLight;
