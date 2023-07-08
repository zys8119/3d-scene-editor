import { commonDark } from '../../../_styles/common';
import { self } from './light';
const handWritingBoardDark = {
    name: 'HandWritingBoard',
    common: commonDark,
    self(vars) {
        return self(vars);
    },
};
export default handWritingBoardDark;
