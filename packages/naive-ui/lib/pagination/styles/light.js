var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.self = void 0;
const styles_1 = require('../../popselect/styles');
const styles_2 = require('../../select/styles');
const styles_3 = require('../../input/styles');
const common_1 = require('../../_styles/common');
const _common_1 = __importDefault(require('./_common'));
const _mixins_1 = require('../../_mixins');
const self = (vars) => {
    const {
        textColor2,
        primaryColor,
        primaryColorHover,
        primaryColorPressed,
        inputColorDisabled,
        textColorDisabled,
        borderColor,
        borderRadius,
        fontSizeTiny,
        fontSizeSmall,
        fontSizeMedium,
        heightTiny,
        heightSmall,
        heightMedium,
    } = vars;
    return Object.assign(Object.assign({}, _common_1.default), {
        buttonColor: '#0000',
        buttonColorHover: '#0000',
        buttonColorPressed: '#0000',
        buttonBorder: `1px solid ${borderColor}`,
        buttonBorderHover: `1px solid ${borderColor}`,
        buttonBorderPressed: `1px solid ${borderColor}`,
        buttonIconColor: textColor2,
        buttonIconColorHover: textColor2,
        buttonIconColorPressed: textColor2,
        itemTextColor: textColor2,
        itemTextColorHover: primaryColorHover,
        itemTextColorPressed: primaryColorPressed,
        itemTextColorActive: primaryColor,
        itemTextColorDisabled: textColorDisabled,
        itemColor: '#0000',
        itemColorHover: '#0000',
        itemColorPressed: '#0000',
        itemColorActive: '#0000',
        itemColorActiveHover: '#0000',
        itemColorDisabled: inputColorDisabled,
        itemBorder: '1px solid #0000',
        itemBorderHover: '1px solid #0000',
        itemBorderPressed: '1px solid #0000',
        itemBorderActive: `1px solid ${primaryColor}`,
        itemBorderDisabled: `1px solid ${borderColor}`,
        itemBorderRadius: borderRadius,
        itemSizeSmall: heightTiny,
        itemSizeMedium: heightSmall,
        itemSizeLarge: heightMedium,
        itemFontSizeSmall: fontSizeTiny,
        itemFontSizeMedium: fontSizeSmall,
        itemFontSizeLarge: fontSizeMedium,
        jumperFontSizeSmall: fontSizeTiny,
        jumperFontSizeMedium: fontSizeSmall,
        jumperFontSizeLarge: fontSizeMedium,
        jumperTextColor: textColor2,
        jumperTextColorDisabled: textColorDisabled,
    });
};
exports.self = self;
const paginationLight = (0, _mixins_1.createTheme)({
    name: 'Pagination',
    common: common_1.commonLight,
    peers: {
        Select: styles_2.selectLight,
        Input: styles_3.inputLight,
        Popselect: styles_1.popselectLight,
    },
    self: exports.self,
});
exports.default = paginationLight;
