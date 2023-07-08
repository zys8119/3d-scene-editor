Object.defineProperty(exports, '__esModule', { value: true });
const common_1 = require('../../_styles/common');
const _mixins_1 = require('../../_mixins');
const watermarkLight = (0, _mixins_1.createTheme)({
    name: 'Watermark',
    common: common_1.commonLight,
    self(vars) {
        const { fontFamily } = vars;
        return {
            fontFamily,
        };
    },
});
exports.default = watermarkLight;
