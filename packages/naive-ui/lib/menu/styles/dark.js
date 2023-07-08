Object.defineProperty(exports, '__esModule', { value: true });
const seemly_1 = require('seemly');
const styles_1 = require('../../tooltip/styles');
const styles_2 = require('../../dropdown/styles');
const common_1 = require('../../_styles/common');
const light_1 = require('./light');
const menuDark = {
    name: 'Menu',
    common: common_1.commonDark,
    peers: {
        Tooltip: styles_1.tooltipDark,
        Dropdown: styles_2.dropdownDark,
    },
    self(vars) {
        const { primaryColor, primaryColorSuppl } = vars;
        const commonSelf = (0, light_1.self)(vars);
        commonSelf.itemColorActive = (0, seemly_1.changeColor)(primaryColor, {
            alpha: 0.15,
        });
        commonSelf.itemColorActiveHover = (0, seemly_1.changeColor)(
            primaryColor,
            { alpha: 0.15 }
        );
        commonSelf.itemColorActiveCollapsed = (0, seemly_1.changeColor)(
            primaryColor,
            {
                alpha: 0.15,
            }
        );
        commonSelf.itemColorActiveInverted = primaryColorSuppl;
        commonSelf.itemColorActiveHoverInverted = primaryColorSuppl;
        commonSelf.itemColorActiveCollapsedInverted = primaryColorSuppl;
        return commonSelf;
    },
};
exports.default = menuDark;
