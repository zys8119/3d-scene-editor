import { changeColor } from 'seemly';
import { commonLight } from '../../../_styles/common';
import { popoverLight } from '../../../popover/styles';
import commonVariables from './_common';
import { createTheme } from '../../../_mixins';
const self = (vars) => {
    const {
        borderRadius,
        textColor2,
        textColorDisabled,
        inputColor,
        inputColorDisabled,
        primaryColor,
        primaryColorHover,
        warningColor,
        warningColorHover,
        errorColor,
        errorColorHover,
        borderColor,
        iconColor,
        iconColorDisabled,
        clearColor,
        clearColorHover,
        clearColorPressed,
        placeholderColor,
        placeholderColorDisabled,
        fontSizeTiny,
        fontSizeSmall,
        fontSizeMedium,
        fontSizeLarge,
        heightTiny,
        heightSmall,
        heightMedium,
        heightLarge,
    } = vars;
    return Object.assign(Object.assign({}, commonVariables), {
        fontSizeTiny,
        fontSizeSmall,
        fontSizeMedium,
        fontSizeLarge,
        heightTiny,
        heightSmall,
        heightMedium,
        heightLarge,
        borderRadius,
        textColor: textColor2,
        textColorDisabled,
        placeholderColor,
        placeholderColorDisabled,
        color: inputColor,
        colorDisabled: inputColorDisabled,
        colorActive: inputColor,
        border: `1px solid ${borderColor}`,
        borderHover: `1px solid ${primaryColorHover}`,
        borderActive: `1px solid ${primaryColor}`,
        borderFocus: `1px solid ${primaryColorHover}`,
        boxShadowHover: 'none',
        boxShadowActive: `0 0 0 2px ${changeColor(primaryColor, {
            alpha: 0.2,
        })}`,
        boxShadowFocus: `0 0 0 2px ${changeColor(primaryColor, {
            alpha: 0.2,
        })}`,
        caretColor: primaryColor,
        arrowColor: iconColor,
        arrowColorDisabled: iconColorDisabled,
        loadingColor: primaryColor,
        borderWarning: `1px solid ${warningColor}`,
        borderHoverWarning: `1px solid ${warningColorHover}`,
        borderActiveWarning: `1px solid ${warningColor}`,
        borderFocusWarning: `1px solid ${warningColorHover}`,
        boxShadowHoverWarning: 'none',
        boxShadowActiveWarning: `0 0 0 2px ${changeColor(warningColor, {
            alpha: 0.2,
        })}`,
        boxShadowFocusWarning: `0 0 0 2px ${changeColor(warningColor, {
            alpha: 0.2,
        })}`,
        colorActiveWarning: inputColor,
        caretColorWarning: warningColor,
        borderError: `1px solid ${errorColor}`,
        borderHoverError: `1px solid ${errorColorHover}`,
        borderActiveError: `1px solid ${errorColor}`,
        borderFocusError: `1px solid ${errorColorHover}`,
        boxShadowHoverError: 'none',
        boxShadowActiveError: `0 0 0 2px ${changeColor(errorColor, {
            alpha: 0.2,
        })}`,
        boxShadowFocusError: `0 0 0 2px ${changeColor(errorColor, {
            alpha: 0.2,
        })}`,
        colorActiveError: inputColor,
        caretColorError: errorColor,
        clearColor,
        clearColorHover,
        clearColorPressed,
    });
};
const internalSelectionLight = createTheme({
    name: 'InternalSelection',
    common: commonLight,
    peers: {
        Popover: popoverLight,
    },
    self,
});
export default internalSelectionLight;
