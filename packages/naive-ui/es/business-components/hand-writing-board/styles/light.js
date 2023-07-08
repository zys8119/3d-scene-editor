import { commonLight } from '../../../_styles/common';
export const self = (vars) => {
    const { baseColor, borderColor } = vars;
    return {
        baseColor,
        borderColor,
    };
};
const handWritingBoardLight = {
    name: 'HandWritingBoard',
    common: commonLight,
    self,
};
export default handWritingBoardLight;
