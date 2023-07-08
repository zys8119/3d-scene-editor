import { commonDark } from '../../../styles';
import { popoverDark } from '../../../popover/styles';
import { changeColor } from 'seemly';
import { self } from './light';
const popDialogDark = {
    name: 'PopDialog',
    common: commonDark,
    peers: {
        Popover: popoverDark,
    },
    self(vars) {
        const {
            primaryColorPressed,
            primaryColorSuppl,
            textColor7,
            popoverColor,
        } = vars;
        const commonSelf = self(vars);
        commonSelf.leftBackgroundColor = popoverColor;
        commonSelf.leftActiveBackgroundColor = changeColor(popoverColor, {
            alpha: 0.5,
        });
        commonSelf.rightBackgroundColor = popoverColor;
        commonSelf.rightActiveBackgroundColor = changeColor(popoverColor, {
            alpha: 0.5,
        });
        commonSelf.rightFileHoverColor = changeColor(primaryColorSuppl, {
            alpha: 0.2,
        });
        commonSelf.leftColor = textColor7;
        commonSelf.rightColor = primaryColorPressed;
        return commonSelf;
    },
};
export default popDialogDark;
