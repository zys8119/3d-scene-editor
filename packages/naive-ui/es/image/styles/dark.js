import { tooltipDark } from '../../styles';
import { commonDark } from '../../_styles/common';
export const imageDark = {
    name: 'Image',
    common: commonDark,
    peers: {
        Tooltip: tooltipDark,
    },
    self: (vars) => {
        const { textColor2 } = vars;
        return {
            toolbarIconColor: textColor2,
            toolbarColor: 'rgba(0, 0, 0, .35)',
            toolbarBoxShadow: 'none',
            toolbarBorderRadius: '24px',
        };
    },
};
