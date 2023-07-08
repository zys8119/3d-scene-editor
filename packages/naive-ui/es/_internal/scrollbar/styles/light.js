import { commonLight } from '../../../_styles/common';
export const self = (vars) => {
    const { scrollbarColor, scrollbarColorHover } = vars;
    return {
        color: scrollbarColor,
        colorHover: scrollbarColorHover,
    };
};
const scrollbarLight = {
    name: 'Scrollbar',
    common: commonLight,
    self,
};
export default scrollbarLight;
