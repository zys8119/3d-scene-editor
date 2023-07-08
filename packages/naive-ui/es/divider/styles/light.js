import { commonLight } from '../../_styles/common';
export const self = (vars) => {
    const { textColor1, dividerColor, fontWeightStrong } = vars;
    return {
        textColor: textColor1,
        color: dividerColor,
        fontWeight: fontWeightStrong,
    };
};
const dividerLight = {
    name: 'Divider',
    common: commonLight,
    self,
};
export default dividerLight;
