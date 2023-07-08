import { commonDark } from '../../../_styles/common';
import { self } from './light';
const mapDark = {
    name: 'Map',
    common: commonDark,
    self(vars) {
        return self(vars);
    },
};
export default mapDark;
