import { internalSelectMenuDark } from '../../_internal/select-menu/styles';
import { inputDark } from '../../input/styles';
import { commonDark } from '../../_styles/common';
import { self } from './light';
const autoCompleteDark = {
    name: 'AutoComplete',
    common: commonDark,
    peers: {
        InternalSelectMenu: internalSelectMenuDark,
        Input: inputDark,
    },
    self,
};
export default autoCompleteDark;
