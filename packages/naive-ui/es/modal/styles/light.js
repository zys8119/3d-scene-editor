import { scrollbarLight } from '../../_internal/scrollbar/styles';
import { dialogLight } from '../../dialog/styles';
import { cardLight } from '../../card/styles';
import { commonLight } from '../../_styles/common';
import { createTheme } from '../../_mixins';
export const self = (vars) => {
    const { modalColor, textColor2, boxShadow3 } = vars;
    return {
        color: modalColor,
        textColor: textColor2,
        boxShadow: boxShadow3,
    };
};
const modalLight = createTheme({
    name: 'Modal',
    common: commonLight,
    peers: {
        Scrollbar: scrollbarLight,
        Dialog: dialogLight,
        Card: cardLight,
    },
    self,
});
export default modalLight;
