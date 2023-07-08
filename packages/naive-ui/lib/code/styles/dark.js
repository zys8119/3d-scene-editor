Object.defineProperty(exports, '__esModule', { value: true });
const common_1 = require('../../_styles/common');
const codeDark = {
    name: 'Code',
    common: common_1.commonDark,
    self(vars) {
        const { textColor2, fontSize, fontWeightStrong, textColor3 } = vars;
        return {
            textColor: textColor2,
            fontSize,
            fontWeightStrong,
            'mono-3': '#5c6370',
            'hue-1': '#56b6c2',
            'hue-2': '#61aeee',
            'hue-3': '#c678dd',
            'hue-4': '#98c379',
            'hue-5': '#e06c75',
            'hue-5-2': '#be5046',
            'hue-6': '#d19a66',
            'hue-6-2': '#e6c07b',
            lineNumberTextColor: textColor3,
        };
    },
};
exports.default = codeDark;
