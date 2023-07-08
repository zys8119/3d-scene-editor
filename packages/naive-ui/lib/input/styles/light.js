var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
const _common_1 = __importDefault(require('./_common'));
const seemly_1 = require('seemly');
const common_1 = require('../../_styles/common');
const self = (vars) => {
    const {
        textColor2,
        textColor3,
        textColorDisabled,
        primaryColor,
        primaryColorHover,
        inputColor,
        inputColorDisabled,
        borderColor,
        warningColor,
        warningColorHover,
        errorColor,
        errorColorHover,
        borderRadius,
        lineHeight,
        fontSizeTiny,
        fontSizeSmall,
        fontSizeMedium,
        fontSizeLarge,
        heightTiny,
        heightSmall,
        heightMedium,
        heightLarge,
        actionColor,
        clearColor,
        clearColorHover,
        clearColorPressed,
        placeholderColor,
        placeholderColorDisabled,
        iconColor,
        iconColorDisabled,
        iconColorHover,
        iconColorPressed,
    } = vars;
    return Object.assign(Object.assign({}, _common_1.default), {
        countTextColorDisabled: textColorDisabled,
        countTextColor: textColor3,
        heightTiny,
        heightSmall,
        heightMedium,
        heightLarge,
        fontSizeTiny,
        fontSizeSmall,
        fontSizeMedium,
        fontSizeLarge,
        lineHeight,
        lineHeightTextarea: lineHeight,
        borderRadius,
        iconSize: '16px',
        groupLabelColor: actionColor,
        groupLabelTextColor: textColor2,
        textColor: textColor2,
        textColorDisabled,
        textDecorationColor: textColor2,
        caretColor: primaryColor,
        placeholderColor,
        placeholderColorDisabled,
        color: inputColor,
        colorDisabled: inputColorDisabled,
        colorFocus: inputColor,
        groupLabelBorder: `1px solid ${borderColor}`,
        border: `1px solid ${borderColor}`,
        borderHover: `1px solid ${primaryColorHover}`,
        borderDisabled: `1px solid ${borderColor}`,
        borderFocus: `1px solid ${primaryColorHover}`,
        boxShadowFocus: `0 0 0 2px ${(0, seemly_1.changeColor)(primaryColor, {
            alpha: 0.2,
        })}`,
        loadingColor: primaryColor,
        loadingColorWarning: warningColor,
        borderWarning: `1px solid ${warningColor}`,
        borderHoverWarning: `1px solid ${warningColorHover}`,
        colorFocusWarning: inputColor,
        borderFocusWarning: `1px solid ${warningColorHover}`,
        boxShadowFocusWarning: `0 0 0 2px ${(0, seemly_1.changeColor)(
            warningColor,
            {
                alpha: 0.2,
            }
        )}`,
        caretColorWarning: warningColor,
        loadingColorError: errorColor,
        borderError: `1px solid ${errorColor}`,
        borderHoverError: `1px solid ${errorColorHover}`,
        colorFocusError: inputColor,
        borderFocusError: `1px solid ${errorColorHover}`,
        boxShadowFocusError: `0 0 0 2px ${(0, seemly_1.changeColor)(
            errorColor,
            {
                alpha: 0.2,
            }
        )}`,
        caretColorError: errorColor,
        clearColor,
        clearColorHover,
        clearColorPressed,
        iconColor,
        iconColorDisabled,
        iconColorHover,
        iconColorPressed,
        suffixTextColor: textColor2,
    });
};
const inputLight = {
    name: 'Input',
    common: common_1.commonLight,
    self,
};
exports.default = inputLight;
