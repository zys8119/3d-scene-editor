Object.defineProperty(exports, '__esModule', { value: true });
const styles_1 = require('../../empty/styles');
const styles_2 = require('../../tree/styles');
const common_1 = require('../../_styles/common');
const styles_3 = require('../../_internal/selection/styles');
const treeSelectDark = {
    name: 'TreeSelect',
    common: common_1.commonDark,
    peers: {
        Tree: styles_2.treeDark,
        Empty: styles_1.emptyDark,
        InternalSelection: styles_3.internalSelectionDark,
    },
};
exports.default = treeSelectDark;
