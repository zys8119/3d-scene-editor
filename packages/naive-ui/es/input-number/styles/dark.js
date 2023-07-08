import { buttonDark } from '../../button/styles';
import { inputDark } from '../../input/styles';
import { commonDark } from '../../_styles/common';
const inputNumberDark = {
    name: 'InputNumber',
    common: commonDark,
    peers: {
        Button: buttonDark,
        Input: inputDark,
    },
    self(vars) {
        const { textColorDisabled } = vars;
        return {
            iconColorDisabled: textColorDisabled,
        };
    },
};
export default inputNumberDark;
