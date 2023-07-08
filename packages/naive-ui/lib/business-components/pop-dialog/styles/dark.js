Object.defineProperty(exports, '__esModule', { value: true });
const styles_1 = require('../../../styles');
const styles_2 = require('../../../popover/styles');
const seemly_1 = require('seemly');
const light_1 = require('./light');
const popDialogDark = {
    name: 'PopDialog',
    common: styles_1.commonDark,
    peers: {
        Popover: styles_2.popoverDark,
    },
    self(vars) {
        const {
            primaryColorPressed,
            primaryColorSuppl,
            textColor7,
            popoverColor,
        } = vars;
        const commonSelf = (0, light_1.self)(vars);
        commonSelf.leftBackgroundColor = popoverColor;
        commonSelf.leftActiveBackgroundColor = (0, seemly_1.changeColor)(
            popoverColor,
            {
                alpha: 0.5,
            }
        );
        commonSelf.rightBackgroundColor = popoverColor;
        commonSelf.rightActiveBackgroundColor = (0, seemly_1.changeColor)(
            popoverColor,
            {
                alpha: 0.5,
            }
        );
        commonSelf.rightFileHoverColor = (0, seemly_1.changeColor)(
            primaryColorSuppl,
            {
                alpha: 0.2,
            }
        );
        commonSelf.leftColor = textColor7;
        commonSelf.rightColor = primaryColorPressed;
        return commonSelf;
    },
};
exports.default = popDialogDark;
