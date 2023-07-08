import { emptyLight } from '../../../empty/styles';
import { scrollbarLight } from '../../scrollbar/styles';
import { commonLight } from '../../../_styles/common';
import commonVariables from './_common';
import { createTheme } from '../../../_mixins';
export const self = (vars) => {
    const {
        borderRadius,
        popoverColor,
        textColor3,
        dividerColor,
        textColor2,
        primaryColorPressed,
        textColorDisabled,
        primaryColor,
        opacityDisabled,
        hoverColor,
        fontSizeSmall,
        fontSizeMedium,
        fontSizeLarge,
        fontSizeHuge,
        heightSmall,
        heightMedium,
        heightLarge,
        heightHuge,
    } = vars;
    return Object.assign(Object.assign({}, commonVariables), {
        optionFontSizeSmall: fontSizeSmall,
        optionFontSizeMedium: fontSizeMedium,
        optionFontSizeLarge: fontSizeLarge,
        optionFontSizeHuge: fontSizeHuge,
        optionHeightSmall: heightSmall,
        optionHeightMedium: heightMedium,
        optionHeightLarge: heightLarge,
        optionHeightHuge: heightHuge,
        borderRadius,
        color: popoverColor,
        groupHeaderTextColor: textColor3,
        actionDividerColor: dividerColor,
        optionTextColor: textColor2,
        optionTextColorPressed: primaryColorPressed,
        optionTextColorDisabled: textColorDisabled,
        optionTextColorActive: primaryColor,
        optionOpacityDisabled: opacityDisabled,
        optionCheckColor: primaryColor,
        optionColorPending: hoverColor,
        optionColorActive: 'rgba(0, 0, 0, 0)',
        optionColorActivePending: hoverColor,
        actionTextColor: textColor2,
        loadingColor: primaryColor,
    });
};
const internalSelectMenuLight = createTheme({
    name: 'InternalSelectMenu',
    common: commonLight,
    peers: {
        Scrollbar: scrollbarLight,
        Empty: emptyLight,
    },
    self,
});
export default internalSelectMenuLight;
