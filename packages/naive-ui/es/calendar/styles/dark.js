import { commonDark } from '../../_styles/common';
import { self } from './light';
import { buttonDark } from '../../button/styles';
const calendarDark = {
    name: 'Calendar',
    common: commonDark,
    peers: {
        Button: buttonDark,
    },
    self,
};
export default calendarDark;
