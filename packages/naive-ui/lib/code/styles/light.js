Object.defineProperty(exports, '__esModule', { value: true });
const common_1 = require('../../_styles/common');
const self = (vars) => {
    const { textColor2, fontSize, fontWeightStrong, textColor3 } = vars;
    return {
        textColor: textColor2,
        fontSize,
        fontWeightStrong,
        'mono-3': '#a0a1a7',
        'hue-1': '#0184bb',
        'hue-2': '#4078f2',
        'hue-3': '#a626a4',
        'hue-4': '#50a14f',
        'hue-5': '#e45649',
        'hue-5-2': '#c91243',
        'hue-6': '#986801',
        'hue-6-2': '#c18401',
        lineNumberTextColor: textColor3,
    };
};
const codeLight = {
    name: 'Code',
    common: common_1.commonLight,
    self,
};
exports.default = codeLight;
