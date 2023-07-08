Object.defineProperty(exports, '__esModule', { value: true });
exports.self = void 0;
const common_1 = require('../../_styles/common');
const use_theme_1 = require('../../_mixins/use-theme');
const styles_1 = require('../../input/styles');
const styles_2 = require('../../button/styles');
const self = (vars) => {
    const {
        fontSize,
        boxShadow2,
        popoverColor,
        textColor2,
        borderRadius,
        borderColor,
        heightSmall,
        heightMedium,
        heightLarge,
        fontSizeSmall,
        fontSizeMedium,
        fontSizeLarge,
        dividerColor,
    } = vars;
    return {
        panelFontSize: fontSize,
        boxShadow: boxShadow2,
        color: popoverColor,
        textColor: textColor2,
        borderRadius,
        border: `1px solid ${borderColor}`,
        heightSmall,
        heightMedium,
        heightLarge,
        fontSizeSmall,
        fontSizeMedium,
        fontSizeLarge,
        dividerColor,
    };
};
exports.self = self;
const colorPickerLight = (0, use_theme_1.createTheme)({
    name: 'ColorPicker',
    common: common_1.commonLight,
    peers: {
        Input: styles_1.inputLight,
        Button: styles_2.buttonLight,
    },
    self: exports.self,
});
exports.default = colorPickerLight;
