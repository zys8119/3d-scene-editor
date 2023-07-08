import { internalSelectMenuDark } from '../../_internal/select-menu/styles';
import { popoverDark } from '../../popover/styles';
import { commonDark } from '../../_styles/common';
const popselect = {
    name: 'Popselect',
    common: commonDark,
    peers: {
        Popover: popoverDark,
        InternalSelectMenu: internalSelectMenuDark,
    },
};
export default popselect;
