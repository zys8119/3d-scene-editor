Object.defineProperty(exports, '__esModule', { value: true });
exports.self = void 0;
const styles_1 = require('../../_internal/selection/styles');
const styles_2 = require('../../_internal/select-menu/styles');
const styles_3 = require('../../_internal/scrollbar/styles');
const styles_4 = require('../../checkbox/styles');
const common_1 = require('../../_styles/common');
const _mixins_1 = require('../../_mixins');
const styles_5 = require('../../empty/styles');
const self = (vars) => {
    const {
        borderRadius,
        boxShadow2,
        popoverColor,
        textColor2,
        textColor3,
        primaryColor,
        textColorDisabled,
        dividerColor,
        hoverColor,
        fontSizeMedium,
        heightMedium,
    } = vars;
    return {
        menuBorderRadius: borderRadius,
        menuColor: popoverColor,
        menuBoxShadow: boxShadow2,
        menuDividerColor: dividerColor,
        menuHeight: 'calc(var(--n-option-height) * 6.6)',
        optionArrowColor: textColor3,
        optionHeight: heightMedium,
        optionFontSize: fontSizeMedium,
        optionColorHover: hoverColor,
        optionTextColor: textColor2,
        optionTextColorActive: primaryColor,
        optionTextColorDisabled: textColorDisabled,
        optionCheckMarkColor: primaryColor,
        loadingColor: primaryColor,
        columnWidth: '180px',
    };
};
exports.self = self;
const cascaderLight = (0, _mixins_1.createTheme)({
    name: 'Cascader',
    common: common_1.commonLight,
    peers: {
        InternalSelectMenu: styles_2.internalSelectMenuLight,
        InternalSelection: styles_1.internalSelectionLight,
        Scrollbar: styles_3.scrollbarLight,
        Checkbox: styles_4.checkboxLight,
        Empty: styles_5.emptyLight,
    },
    self: exports.self,
});
exports.default = cascaderLight;
