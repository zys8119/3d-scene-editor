import { changeColor } from 'seemly';
import { buttonDark } from '../../button/styles';
import { progressDark } from '../../progress/styles';
import { commonDark } from '../../_styles/common';
import { self } from './light';
const uploadDark = {
    name: 'Upload',
    common: commonDark,
    peers: {
        Button: buttonDark,
        Progress: progressDark,
    },
    self(vars) {
        const { errorColor } = vars;
        const commonSelf = self(vars);
        commonSelf.itemColorHoverError = changeColor(errorColor, {
            alpha: 0.09,
        });
        return commonSelf;
    },
};
export default uploadDark;
