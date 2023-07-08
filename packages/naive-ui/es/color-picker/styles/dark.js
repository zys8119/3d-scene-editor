import { buttonDark } from '../../button/styles';
import { inputDark } from '../../input/styles';
import { commonDark } from '../../_styles/common';
import { self } from './light';
const colorPickerDark = {
    name: 'ColorPicker',
    common: commonDark,
    peers: {
        Input: inputDark,
        Button: buttonDark,
    },
    self,
};
export default colorPickerDark;
