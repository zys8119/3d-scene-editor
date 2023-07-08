import { commonLight } from '../../_styles/common';
export const self = (vars) => {
    const { textColor1, textColor2, fontWeightStrong, fontSize } = vars;
    return {
        fontSize,
        titleTextColor: textColor1,
        textColor: textColor2,
        titleFontWeight: fontWeightStrong,
    };
};
const thingLight = {
    name: 'Thing',
    common: commonLight,
    self,
};
export default thingLight;
