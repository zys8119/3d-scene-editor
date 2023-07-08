import { commonDark } from '../../_styles/common';
import { self } from './light';
const checkboxDark = {
    name: 'Checkbox',
    common: commonDark,
    self(vars) {
        const { cardColor } = vars;
        const commonSelf = self(vars);
        commonSelf.color = '#0000';
        commonSelf.checkMarkColor = cardColor;
        return commonSelf;
    },
};
export default checkboxDark;
