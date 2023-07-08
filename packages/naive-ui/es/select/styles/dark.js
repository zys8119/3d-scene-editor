import { internalSelectionDark } from '../../_internal/selection/styles';
import { internalSelectMenuDark } from '../../_internal/select-menu/styles';
import { commonDark } from '../../_styles/common';
import { self } from './light';
const selectDark = {
    name: 'Select',
    common: commonDark,
    peers: {
        InternalSelection: internalSelectionDark,
        InternalSelectMenu: internalSelectMenuDark,
    },
    self,
};
export default selectDark;
