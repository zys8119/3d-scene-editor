Object.defineProperty(exports, '__esModule', { value: true });
const styles_1 = require('../../ellipsis/styles');
const styles_2 = require('../../button/styles');
const styles_3 = require('../../checkbox/styles');
const styles_4 = require('../../radio/styles');
const styles_5 = require('../../pagination/styles');
const styles_6 = require('../../_internal/scrollbar/styles');
const styles_7 = require('../../popover/styles');
const styles_8 = require('../../empty/styles');
const styles_9 = require('../../dropdown/styles');
const common_1 = require('../../_styles/common');
const light_1 = require('./light');
const dataTableDark = {
    name: 'DataTable',
    common: common_1.commonDark,
    peers: {
        Button: styles_2.buttonDark,
        Checkbox: styles_3.checkboxDark,
        Radio: styles_4.radioDark,
        Pagination: styles_5.paginationDark,
        Scrollbar: styles_6.scrollbarDark,
        Empty: styles_8.emptyDark,
        Popover: styles_7.popoverDark,
        Ellipsis: styles_1.ellipsisDark,
        Dropdown: styles_9.dropdownDark,
    },
    self(vars) {
        const commonSelf = (0, light_1.self)(vars);
        commonSelf.boxShadowAfter = 'inset 12px 0 8px -12px rgba(0, 0, 0, .36)';
        commonSelf.boxShadowBefore =
            'inset -12px 0 8px -12px rgba(0, 0, 0, .36)';
        return commonSelf;
    },
};
exports.default = dataTableDark;
