var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
const _common_1 = __importDefault(require('./_common'));
const seemly_1 = require('seemly');
const styles_1 = require('../../checkbox/styles');
const styles_2 = require('../../_internal/scrollbar/styles');
const styles_3 = require('../../input/styles');
const common_1 = require('../../_styles/common');
const styles_4 = require('../../empty/styles');
const styles_5 = require('../../button/styles');
const _mixins_1 = require('../../_mixins');
const self = (vars) => {
    const {
        fontWeight,
        iconColorDisabled,
        iconColor,
        fontSizeLarge,
        fontSizeMedium,
        fontSizeSmall,
        heightLarge,
        heightMedium,
        heightSmall,
        borderRadius,
        cardColor,
        tableHeaderColor,
        textColor1,
        textColorDisabled,
        textColor2,
        borderColor,
        hoverColor,
    } = vars;
    return Object.assign(Object.assign({}, _common_1.default), {
        itemHeightSmall: heightSmall,
        itemHeightMedium: heightMedium,
        itemHeightLarge: heightLarge,
        fontSizeSmall,
        fontSizeMedium,
        fontSizeLarge,
        borderRadius,
        borderColor,
        listColor: cardColor,
        headerColor: (0, seemly_1.composite)(cardColor, tableHeaderColor),
        titleTextColor: textColor1,
        titleTextColorDisabled: textColorDisabled,
        extraTextColor: textColor2,
        filterDividerColor: borderColor,
        itemTextColor: textColor2,
        itemTextColorDisabled: textColorDisabled,
        itemColorPending: hoverColor,
        titleFontWeight: fontWeight,
        iconColor,
        iconColorDisabled,
    });
};
const transferLight = (0, _mixins_1.createTheme)({
    name: 'Transfer',
    common: common_1.commonLight,
    peers: {
        Checkbox: styles_1.checkboxLight,
        Scrollbar: styles_2.scrollbarLight,
        Input: styles_3.inputLight,
        Empty: styles_4.emptyLight,
        Button: styles_5.buttonLight,
    },
    self,
});
exports.default = transferLight;
