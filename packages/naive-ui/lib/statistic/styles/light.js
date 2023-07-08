Object.defineProperty(exports, '__esModule', { value: true });
exports.self = void 0;
const common_1 = require('../../_styles/common');
const self = (vars) => {
    const { textColor2, textColor3, fontSize, fontWeight } = vars;
    return {
        labelFontSize: fontSize,
        labelFontWeight: fontWeight,
        valueFontWeight: fontWeight,
        valueFontSize: '24px',
        labelTextColor: textColor3,
        valuePrefixTextColor: textColor2,
        valueSuffixTextColor: textColor2,
        valueTextColor: textColor2,
    };
};
exports.self = self;
const statisticLight = {
    name: 'Statistic',
    common: common_1.commonLight,
    self: exports.self,
};
exports.default = statisticLight;
