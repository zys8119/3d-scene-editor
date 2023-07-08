import { scrollbarDark } from '../../_internal/scrollbar/styles';
import { commonDark } from '../../_styles/common';
import { self } from './light';
const notificationDark = {
    name: 'Notification',
    common: commonDark,
    peers: {
        Scrollbar: scrollbarDark,
    },
    self,
};
export default notificationDark;
