import { inputLight } from '../../input/styles';
import { buttonLight } from '../../button/styles';
import { commonLight } from '../../_styles/common';
import commonVariables from './_common';
import { createTheme } from '../../_mixins';
const self = () => {
    return commonVariables;
};
const dynamicInputLight = createTheme({
    name: 'DynamicInput',
    common: commonLight,
    peers: {
        Input: inputLight,
        Button: buttonLight,
    },
    self,
});
export default dynamicInputLight;
