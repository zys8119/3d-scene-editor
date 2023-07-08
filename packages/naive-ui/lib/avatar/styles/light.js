Object.defineProperty(exports, '__esModule', { value: true });
exports.self = void 0;
const common_1 = require('../../_styles/common');
const seemly_1 = require('seemly');
const self = (vars) => {
    const {
        borderRadius,
        avatarColor,
        cardColor,
        fontSize,
        heightTiny,
        heightSmall,
        heightMedium,
        heightLarge,
        heightHuge,
        modalColor,
        popoverColor,
    } = vars;
    return {
        borderRadius,
        fontSize,
        border: `2px solid ${cardColor}`,
        heightTiny,
        heightSmall,
        heightMedium,
        heightLarge,
        heightHuge,
        color: (0, seemly_1.composite)(cardColor, avatarColor),
        colorModal: (0, seemly_1.composite)(modalColor, avatarColor),
        colorPopover: (0, seemly_1.composite)(popoverColor, avatarColor),
    };
};
exports.self = self;
const avatarLight = {
    name: 'Avatar',
    common: common_1.commonLight,
    self: exports.self,
};
exports.default = avatarLight;
