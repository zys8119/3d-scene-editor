Object.defineProperty(exports, '__esModule', { value: true });
exports.self = void 0;
const styles_1 = require('../../../popover/styles');
const common_1 = require('../../../_styles/common');
const self = (vars) => {
    const {
        textColor2,
        textColor6,
        textColor7,
        popoverColor,
        primaryColor,
        pressedColor,
        primaryColorPressed,
        primaryColorSuppl,
    } = vars;
    return {
        leftColor: textColor2,
        leftBackgroundColor: popoverColor,
        leftActiveBackgroundColor: pressedColor,
        rightColor: textColor7,
        rightBackgroundColor: primaryColor,
        rightActiveBackgroundColor: primaryColorPressed,
        rightFileHoverColor: primaryColorSuppl,
        titleColor: textColor6,
        borderRadius: '10px',
        titleFontSize: '12px',
        fontSize: '14px',
        arrowSize: '8px',
    };
};
exports.self = self;
const popDialogLight = {
    name: 'PopDialog',
    common: common_1.commonLight,
    peers: {
        Popover: styles_1.popoverLight,
    },
    self: exports.self,
};
exports.default = popDialogLight;
