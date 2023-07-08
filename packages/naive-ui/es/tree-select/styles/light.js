import { commonLight } from '../../_styles/common';
import { createTheme } from '../../_mixins/use-theme';
import { treeLight } from '../../tree/styles';
import { emptyLight } from '../../empty/styles';
import { internalSelectionLight } from '../../_internal/selection/styles';
export const self = (vars) => {
    const {
        popoverColor,
        boxShadow2,
        borderRadius,
        heightMedium,
        dividerColor,
        textColor2,
    } = vars;
    return {
        menuPadding: '4px',
        menuColor: popoverColor,
        menuBoxShadow: boxShadow2,
        menuBorderRadius: borderRadius,
        menuHeight: `calc(${heightMedium} * 7.6)`,
        actionDividerColor: dividerColor,
        actionTextColor: textColor2,
        actionPadding: '8px 12px',
    };
};
const treeSelectLight = createTheme({
    name: 'TreeSelect',
    common: commonLight,
    peers: {
        Tree: treeLight,
        Empty: emptyLight,
        InternalSelection: internalSelectionLight,
    },
    self,
});
export default treeSelectLight;
