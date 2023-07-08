import { internalSelectMenuLight } from '../../_internal/select-menu/styles';
import { commonLight } from '../../_styles/common';
import { popoverLight } from '../../popover/styles';
import { createTheme } from '../../_mixins';
export function self(vars) {
    const { boxShadow2 } = vars;
    return {
        menuBoxShadow: boxShadow2,
    };
}
const popselectLight = createTheme({
    name: 'Popselect',
    common: commonLight,
    peers: {
        Popover: popoverLight,
        InternalSelectMenu: internalSelectMenuLight,
    },
    self,
});
export default popselectLight;
