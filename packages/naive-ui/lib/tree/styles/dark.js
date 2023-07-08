Object.defineProperty(exports, '__esModule', { value: true });
const seemly_1 = require('seemly');
const styles_1 = require('../../checkbox/styles');
const styles_2 = require('../../empty/styles');
const styles_3 = require('../../_internal/scrollbar/styles');
const common_1 = require('../../_styles/common');
const light_1 = require('./light');
const treeDark = {
    name: 'Tree',
    common: common_1.commonDark,
    peers: {
        Checkbox: styles_1.checkboxDark,
        Scrollbar: styles_3.scrollbarDark,
        Empty: styles_2.emptyDark,
    },
    self(vars) {
        const { primaryColor } = vars;
        const commonSelf = (0, light_1.self)(vars);
        commonSelf.nodeColorActive = (0, seemly_1.changeColor)(primaryColor, {
            alpha: 0.15,
        });
        return commonSelf;
    },
};
exports.default = treeDark;
