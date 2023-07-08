import { commonDark } from '../../styles';
import commonVariables from './_common';
const tagSelectDark = {
    name: 'TagSelect',
    common: commonDark,
    self(vars) {
        const { primaryColor } = vars;
        return Object.assign(Object.assign({}, commonVariables), {
            tagSelectHandleColor: primaryColor,
        });
    },
};
export default tagSelectDark;
