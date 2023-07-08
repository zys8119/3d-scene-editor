import { scrollbarDark } from '../../_internal/scrollbar/styles';
import { dialogDark } from '../../dialog/styles';
import { cardDark } from '../../card/styles';
import { commonDark } from '../../_styles/common';
import { self } from './light';
const modalDark = {
    name: 'Modal',
    common: commonDark,
    peers: {
        Scrollbar: scrollbarDark,
        Dialog: dialogDark,
        Card: cardDark,
    },
    self,
};
export default modalDark;
