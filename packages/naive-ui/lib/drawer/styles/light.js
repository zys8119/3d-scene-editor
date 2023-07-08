Object.defineProperty(exports, '__esModule', { value: true });
exports.self = void 0;
const common_1 = require('../../_styles/common');
const styles_1 = require('../../_internal/scrollbar/styles');
const _mixins_1 = require('../../_mixins');
const self = (vars) => {
    const {
        modalColor,
        textColor1,
        textColor2,
        boxShadow3,
        lineHeight,
        fontWeightStrong,
        dividerColor,
        closeColorHover,
        closeColorPressed,
        closeIconColor,
        closeIconColorHover,
        closeIconColorPressed,
        borderRadius,
        primaryColorHover,
    } = vars;
    return {
        bodyPadding: '16px 24px',
        headerPadding: '16px 24px',
        footerPadding: '16px 24px',
        color: modalColor,
        textColor: textColor2,
        titleTextColor: textColor1,
        titleFontSize: '18px',
        titleFontWeight: fontWeightStrong,
        boxShadow: boxShadow3,
        lineHeight,
        headerBorderBottom: `1px solid ${dividerColor}`,
        footerBorderTop: `1px solid ${dividerColor}`,
        closeIconColor,
        closeIconColorHover,
        closeIconColorPressed,
        closeSize: '22px',
        closeIconSize: '18px',
        closeColorHover,
        closeColorPressed,
        closeBorderRadius: borderRadius,
        resizableTriggerColorHover: primaryColorHover,
    };
};
exports.self = self;
const drawerLight = (0, _mixins_1.createTheme)({
    name: 'Drawer',
    common: common_1.commonLight,
    peers: {
        Scrollbar: styles_1.scrollbarLight,
    },
    self: exports.self,
});
exports.default = drawerLight;
