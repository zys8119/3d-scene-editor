import { commonLight } from '../../_styles/common';
export const self = (vars) => {
    return {
        padding: '10px',
    };
};
const qrCodeLight = {
    name: 'QrCode',
    common: commonLight,
    self,
};
export default qrCodeLight;
