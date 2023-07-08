import { changeColor } from 'seemly';
import { checkboxLight } from '../../checkbox/styles';
import { emptyLight } from '../../empty/styles';
import { scrollbarLight } from '../../_internal/scrollbar/styles';
import { commonLight } from '../../_styles/common';
import { createTheme } from '../../_mixins/use-theme';
export const self = (vars) => {
    const {
        borderRadiusSmall,
        hoverColor,
        pressedColor,
        primaryColor,
        textColor3,
        textColor2,
        textColorDisabled,
        fontSize,
    } = vars;
    return {
        fontSize,
        nodeBorderRadius: borderRadiusSmall,
        nodeColorHover: hoverColor,
        nodeColorPressed: pressedColor,
        nodeColorActive: changeColor(primaryColor, { alpha: 0.1 }),
        arrowColor: textColor3,
        nodeTextColor: textColor2,
        nodeTextColorDisabled: textColorDisabled,
        loadingColor: primaryColor,
        dropMarkColor: primaryColor,
    };
};
const treeLight = createTheme({
    name: 'Tree',
    common: commonLight,
    peers: {
        Checkbox: checkboxLight,
        Scrollbar: scrollbarLight,
        Empty: emptyLight,
    },
    self,
});
export default treeLight;
