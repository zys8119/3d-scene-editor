import { commonLight } from '../../../_styles/common';
export const self = (vars) => {
    const { textColor2 } = vars;
    return {
        padding: '10px',
        baseColor: textColor2,
    };
};
const proUploadLight = {
    name: 'ProUpload',
    common: commonLight,
    self,
};
export default proUploadLight;
