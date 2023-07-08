var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.self = void 0;
const styles_1 = require('../../../empty/styles');
const styles_2 = require('../../scrollbar/styles');
const common_1 = require('../../../_styles/common');
const _common_1 = __importDefault(require('./_common'));
const _mixins_1 = require('../../../_mixins');
const self = (vars) => {
    const {
        borderRadius,
        popoverColor,
        textColor3,
        dividerColor,
        textColor2,
        primaryColorPressed,
        textColorDisabled,
        primaryColor,
        opacityDisabled,
        hoverColor,
        fontSizeSmall,
        fontSizeMedium,
        fontSizeLarge,
        fontSizeHuge,
        heightSmall,
        heightMedium,
        heightLarge,
        heightHuge,
    } = vars;
    return Object.assign(Object.assign({}, _common_1.default), {
        optionFontSizeSmall: fontSizeSmall,
        optionFontSizeMedium: fontSizeMedium,
        optionFontSizeLarge: fontSizeLarge,
        optionFontSizeHuge: fontSizeHuge,
        optionHeightSmall: heightSmall,
        optionHeightMedium: heightMedium,
        optionHeightLarge: heightLarge,
        optionHeightHuge: heightHuge,
        borderRadius,
        color: popoverColor,
        groupHeaderTextColor: textColor3,
        actionDividerColor: dividerColor,
        optionTextColor: textColor2,
        optionTextColorPressed: primaryColorPressed,
        optionTextColorDisabled: textColorDisabled,
        optionTextColorActive: primaryColor,
        optionOpacityDisabled: opacityDisabled,
        optionCheckColor: primaryColor,
        optionColorPending: hoverColor,
        optionColorActive: 'rgba(0, 0, 0, 0)',
        optionColorActivePending: hoverColor,
        actionTextColor: textColor2,
        loadingColor: primaryColor,
    });
};
exports.self = self;
const internalSelectMenuLight = (0, _mixins_1.createTheme)({
    name: 'InternalSelectMenu',
    common: common_1.commonLight,
    peers: {
        Scrollbar: styles_2.scrollbarLight,
        Empty: styles_1.emptyLight,
    },
    self: exports.self,
});
exports.default = internalSelectMenuLight;
