import { buttonDark } from '../../button/styles';
import { commonDark } from '../../_styles/common';
import { self } from './light';
const dialogDark = {
    name: 'Dialog',
    common: commonDark,
    peers: {
        Button: buttonDark,
    },
    self,
};
export default dialogDark;
