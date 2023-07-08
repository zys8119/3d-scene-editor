Object.defineProperty(exports, '__esModule', { value: true });
const styles_1 = require('../../tag/styles');
const styles_2 = require('../../input/styles');
const styles_3 = require('../../button/styles');
const styles_4 = require('../../space/styles');
const common_1 = require('../../_styles/common');
const _mixins_1 = require('../../_mixins');
const dynamicTagsLight = (0, _mixins_1.createTheme)({
    name: 'DynamicTags',
    common: common_1.commonLight,
    peers: {
        Input: styles_2.inputLight,
        Button: styles_3.buttonLight,
        Tag: styles_1.tagLight,
        Space: styles_4.spaceLight,
    },
    self() {
        return {
            inputWidth: '64px',
        };
    },
});
exports.default = dynamicTagsLight;
