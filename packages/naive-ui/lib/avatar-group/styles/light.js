Object.defineProperty(exports, '__esModule', { value: true });
exports.self = void 0;
const common_1 = require('../../_styles/common');
const _mixins_1 = require('../../_mixins');
const styles_1 = require('../../avatar/styles');
const self = () => {
    return {
        gap: '-12px',
    };
};
exports.self = self;
const avatarGroupLight = (0, _mixins_1.createTheme)({
    name: 'AvatarGroup',
    common: common_1.commonLight,
    peers: {
        Avatar: styles_1.avatarLight,
    },
    self: exports.self,
});
exports.default = avatarGroupLight;
