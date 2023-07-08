import { commonDark } from '../../_styles/common';
const watermarkDark = {
    name: 'Watermark',
    common: commonDark,
    self(vars) {
        const { fontFamily } = vars;
        return {
            fontFamily,
        };
    },
};
export default watermarkDark;
