import { buttonLight } from '../../button/styles';
import { popoverLight } from '../../popover/styles';
import { createTheme } from '../../_mixins';
import { commonLight } from '../../_styles/common';
import commonVars from './_common';
export const self = (vars) => {
    const { fontSize, warningColor } = vars;
    return Object.assign(Object.assign({}, commonVars), {
        fontSize,
        iconColor: warningColor,
    });
};
const popconfirmLight = createTheme({
    name: 'Popconfirm',
    common: commonLight,
    peers: {
        Button: buttonLight,
        Popover: popoverLight,
    },
    self,
});
export default popconfirmLight;
