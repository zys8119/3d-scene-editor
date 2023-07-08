Object.defineProperty(exports, '__esModule', { value: true });
exports.self = void 0;
const seemly_1 = require('seemly');
const common_1 = require('../../_styles/common');
const self = (vars) => {
    const {
        textColor2,
        cardColor,
        modalColor,
        popoverColor,
        dividerColor,
        borderRadius,
        fontSize,
        hoverColor,
    } = vars;
    return {
        textColor: textColor2,
        color: cardColor,
        colorHover: hoverColor,
        colorModal: modalColor,
        colorHoverModal: (0, seemly_1.composite)(modalColor, hoverColor),
        colorPopover: popoverColor,
        colorHoverPopover: (0, seemly_1.composite)(popoverColor, hoverColor),
        borderColor: dividerColor,
        borderColorModal: (0, seemly_1.composite)(modalColor, dividerColor),
        borderColorPopover: (0, seemly_1.composite)(popoverColor, dividerColor),
        borderRadius,
        fontSize,
    };
};
exports.self = self;
const listLight = {
    name: 'List',
    common: common_1.commonLight,
    self: exports.self,
};
exports.default = listLight;
