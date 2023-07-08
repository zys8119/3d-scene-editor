import { commonDark } from '../../_styles/common';
import { self } from './light';
const notificationBarDark = {
    name: 'NotificationBar',
    common: commonDark,
    self(vars) {
        return self(vars);
    },
};
export default notificationBarDark;
