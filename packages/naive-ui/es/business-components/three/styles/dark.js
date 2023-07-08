import { commonDark } from '../../../_styles/common';
import { self } from './light';
const threeDark = {
    name: 'ScrollList',
    common: commonDark,
    self(vars) {
        return self(vars);
    },
};
export default threeDark;
