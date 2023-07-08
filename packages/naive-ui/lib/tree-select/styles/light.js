Object.defineProperty(exports, '__esModule', { value: true });
exports.self = void 0;
const common_1 = require('../../_styles/common');
const use_theme_1 = require('../../_mixins/use-theme');
const styles_1 = require('../../tree/styles');
const styles_2 = require('../../empty/styles');
const styles_3 = require('../../_internal/selection/styles');
const self = (vars) => {
    const {
        popoverColor,
        boxShadow2,
        borderRadius,
        heightMedium,
        dividerColor,
        textColor2,
    } = vars;
    return {
        menuPadding: '4px',
        menuColor: popoverColor,
        menuBoxShadow: boxShadow2,
        menuBorderRadius: borderRadius,
        menuHeight: `calc(${heightMedium} * 7.6)`,
        actionDividerColor: dividerColor,
        actionTextColor: textColor2,
        actionPadding: '8px 12px',
    };
};
exports.self = self;
const treeSelectLight = (0, use_theme_1.createTheme)({
    name: 'TreeSelect',
    common: common_1.commonLight,
    peers: {
        Tree: styles_1.treeLight,
        Empty: styles_2.emptyLight,
        InternalSelection: styles_3.internalSelectionLight,
    },
    self: exports.self,
});
exports.default = treeSelectLight;
