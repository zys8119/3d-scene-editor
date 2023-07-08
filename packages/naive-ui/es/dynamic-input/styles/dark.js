import { inputDark } from '../../input/styles';
import { buttonDark } from '../../button/styles';
import { commonDark } from '../../_styles/common';
import commonVariables from './_common';
const dynamicInputDark = {
    name: 'DynamicInput',
    common: commonDark,
    peers: {
        Input: inputDark,
        Button: buttonDark,
    },
    self() {
        return commonVariables;
    },
};
export default dynamicInputDark;
