import { commonDark } from '../../_styles/common';
import { popoverDark } from '../../popover/styles';
import commonVars from './_common';
const tooltipDark = {
    name: 'Tooltip',
    common: commonDark,
    peers: {
        Popover: popoverDark,
    },
    self(vars) {
        const { borderRadius, boxShadow2, popoverColor, textColor2 } = vars;
        return Object.assign(Object.assign({}, commonVars), {
            borderRadius,
            boxShadow: boxShadow2,
            color: popoverColor,
            textColor: textColor2,
        });
    },
};
export default tooltipDark;
