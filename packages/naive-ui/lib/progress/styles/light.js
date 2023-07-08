Object.defineProperty(exports, '__esModule', { value: true });
exports.self = void 0;
const common_1 = require('../../_styles/common');
const self = (vars) => {
    const {
        infoColor,
        successColor,
        warningColor,
        errorColor,
        textColor2,
        progressRailColor,
        fontSize,
        fontWeight,
    } = vars;
    return {
        fontSize,
        fontSizeCircle: '28px',
        fontWeightCircle: fontWeight,
        railColor: progressRailColor,
        railHeight: '8px',
        iconSizeCircle: '36px',
        iconSizeLine: '18px',
        iconColor: infoColor,
        iconColorInfo: infoColor,
        iconColorSuccess: successColor,
        iconColorWarning: warningColor,
        iconColorError: errorColor,
        textColorCircle: textColor2,
        textColorLineInner: 'rgb(255, 255, 255)',
        textColorLineOuter: textColor2,
        fillColor: infoColor,
        fillColorInfo: infoColor,
        fillColorSuccess: successColor,
        fillColorWarning: warningColor,
        fillColorError: errorColor,
        lineBgProcessing:
            'linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)',
    };
};
exports.self = self;
const progressLight = {
    name: 'Progress',
    common: common_1.commonLight,
    self: exports.self,
};
exports.default = progressLight;
