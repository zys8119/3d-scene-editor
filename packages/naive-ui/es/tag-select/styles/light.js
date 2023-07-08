import commonVariables from './_common';
import { commonLight } from '../../_styles/common';
const self = (vars) => {
    const { primaryColor } = vars;
    return Object.assign(Object.assign({}, commonVariables), {
        tagSelectHandleColor: primaryColor,
    });
};
const tagSelectLight = {
    name: 'TagSelect',
    common: commonLight,
    self,
};
export default tagSelectLight;
