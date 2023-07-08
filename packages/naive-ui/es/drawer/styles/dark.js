import { commonDark } from '../../_styles/common';
import { scrollbarDark } from '../../_internal/scrollbar/styles';
import { self } from './light';
const drawerDark = {
    name: 'Drawer',
    common: commonDark,
    peers: {
        Scrollbar: scrollbarDark,
    },
    self,
};
export default drawerDark;
