var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.self = void 0;
const _common_1 = __importDefault(require('./_common'));
const common_1 = require('../../_styles/common');
const self = (vars) => {
    const {
        textColor2,
        primaryColor,
        textColorDisabled,
        closeIconColor,
        closeIconColorHover,
        closeIconColorPressed,
        closeColorHover,
        closeColorPressed,
        tabColor,
        baseColor,
        dividerColor,
        fontWeight,
        textColor1,
        borderRadius,
        fontSize,
        fontWeightStrong,
    } = vars;
    return Object.assign(Object.assign({}, _common_1.default), {
        colorSegment: tabColor,
        tabFontSizeCard: fontSize,
        tabTextColorLine: textColor1,
        tabTextColorActiveLine: primaryColor,
        tabTextColorHoverLine: primaryColor,
        tabTextColorDisabledLine: textColorDisabled,
        tabTextColorSegment: textColor1,
        tabTextColorActiveSegment: textColor2,
        tabTextColorHoverSegment: textColor2,
        tabTextColorDisabledSegment: textColorDisabled,
        tabTextColorBar: textColor1,
        tabTextColorActiveBar: primaryColor,
        tabTextColorHoverBar: primaryColor,
        tabTextColorDisabledBar: textColorDisabled,
        tabTextColorCard: textColor1,
        tabTextColorHoverCard: textColor1,
        tabTextColorActiveCard: primaryColor,
        tabTextColorDisabledCard: textColorDisabled,
        barColor: primaryColor,
        closeIconColor,
        closeIconColorHover,
        closeIconColorPressed,
        closeColorHover,
        closeColorPressed,
        closeBorderRadius: borderRadius,
        tabColor,
        tabColorSegment: baseColor,
        tabBorderColor: dividerColor,
        tabFontWeightActive: fontWeight,
        tabFontWeight: fontWeight,
        tabBorderRadius: borderRadius,
        paneTextColor: textColor2,
        fontWeightStrong,
    });
};
exports.self = self;
const tabsLight = {
    name: 'Tabs',
    common: common_1.commonLight,
    self: exports.self,
};
exports.default = tabsLight;
