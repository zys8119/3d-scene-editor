import { buttonLight } from '../../button/styles';
import { inputLight } from '../../input/styles';
import { commonLight } from '../../_styles/common';
import { createTheme } from '../../_mixins';
const self = (vars) => {
    const { textColorDisabled } = vars;
    return {
        iconColorDisabled: textColorDisabled,
    };
};
const inputNumberLight = createTheme({
    name: 'InputNumber',
    common: commonLight,
    peers: {
        Button: buttonLight,
        Input: inputLight,
    },
    self,
});
export default inputNumberLight;
