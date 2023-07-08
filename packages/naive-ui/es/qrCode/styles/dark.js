import { commonDark } from '../../_styles/common';
import { self } from './light';
const qrCodeDark = {
    name: 'QrCode',
    common: commonDark,
    self(vars) {
        return self(vars);
    },
};
export default qrCodeDark;
