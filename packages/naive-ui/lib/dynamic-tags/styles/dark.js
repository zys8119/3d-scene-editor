Object.defineProperty(exports, '__esModule', { value: true });
const styles_1 = require('../../tag/styles');
const styles_2 = require('../../input/styles');
const styles_3 = require('../../button/styles');
const styles_4 = require('../../space/styles');
const common_1 = require('../../_styles/common');
const dynamicTagsDark = {
    name: 'DynamicTags',
    common: common_1.commonDark,
    peers: {
        Input: styles_2.inputDark,
        Button: styles_3.buttonDark,
        Tag: styles_1.tagDark,
        Space: styles_4.spaceDark,
    },
    self() {
        return {
            inputWidth: '64px',
        };
    },
};
exports.default = dynamicTagsDark;
