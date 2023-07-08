Object.defineProperty(exports, '__esModule', { value: true });
exports.self = void 0;
const seemly_1 = require('seemly');
const styles_1 = require('../../checkbox/styles');
const styles_2 = require('../../empty/styles');
const styles_3 = require('../../_internal/scrollbar/styles');
const common_1 = require('../../_styles/common');
const use_theme_1 = require('../../_mixins/use-theme');
const self = (vars) => {
    const {
        borderRadiusSmall,
        hoverColor,
        pressedColor,
        primaryColor,
        textColor3,
        textColor2,
        textColorDisabled,
        fontSize,
    } = vars;
    return {
        fontSize,
        nodeBorderRadius: borderRadiusSmall,
        nodeColorHover: hoverColor,
        nodeColorPressed: pressedColor,
        nodeColorActive: (0, seemly_1.changeColor)(primaryColor, {
            alpha: 0.1,
        }),
        arrowColor: textColor3,
        nodeTextColor: textColor2,
        nodeTextColorDisabled: textColorDisabled,
        loadingColor: primaryColor,
        dropMarkColor: primaryColor,
    };
};
exports.self = self;
const treeLight = (0, use_theme_1.createTheme)({
    name: 'Tree',
    common: common_1.commonLight,
    peers: {
        Checkbox: styles_1.checkboxLight,
        Scrollbar: styles_3.scrollbarLight,
        Empty: styles_2.emptyLight,
    },
    self: exports.self,
});
exports.default = treeLight;
