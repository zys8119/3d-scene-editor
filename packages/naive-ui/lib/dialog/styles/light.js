var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.self = void 0;
const _common_1 = __importDefault(require('./_common'));
const styles_1 = require('../../button/styles');
const common_1 = require('../../_styles/common');
const _mixins_1 = require('../../_mixins');
const self = (vars) => {
    const {
        textColor1,
        textColor2,
        modalColor,
        closeIconColor,
        closeIconColorHover,
        closeIconColorPressed,
        closeColorHover,
        closeColorPressed,
        infoColor,
        successColor,
        warningColor,
        errorColor,
        primaryColor,
        dividerColor,
        borderRadius,
        fontWeightStrong,
        lineHeight,
        fontSize,
    } = vars;
    return Object.assign(Object.assign({}, _common_1.default), {
        fontSize,
        lineHeight,
        border: `1px solid ${dividerColor}`,
        titleTextColor: textColor1,
        textColor: textColor2,
        color: modalColor,
        closeColorHover,
        closeColorPressed,
        closeIconColor,
        closeIconColorHover,
        closeIconColorPressed,
        closeBorderRadius: borderRadius,
        iconColor: primaryColor,
        iconColorInfo: infoColor,
        iconColorSuccess: successColor,
        iconColorWarning: warningColor,
        iconColorError: errorColor,
        borderRadius,
        titleFontWeight: fontWeightStrong,
    });
};
exports.self = self;
const dialogLight = (0, _mixins_1.createTheme)({
    name: 'Dialog',
    common: common_1.commonLight,
    peers: {
        Button: styles_1.buttonLight,
    },
    self: exports.self,
});
exports.default = dialogLight;
