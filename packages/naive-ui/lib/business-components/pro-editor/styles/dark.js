Object.defineProperty(exports, '__esModule', { value: true });
const common_1 = require('../../../_styles/common');
const proEditorDark = {
    name: 'ProEditor',
    common: common_1.commonDark,
    self(vars) {
        return {
            textareaBgColor: vars.cardColor,
            textareaColor: vars.textColorBase,
            textareaBorderColor: vars.borderColor,
            textareaSlightBorderColor: vars.borderColor,
            textareaSlightColor: vars.textColorBase,
            textareaSlightBgColor: vars.textColorBase,
            textareaSelectedBorderColor: vars.primaryColorHover,
            textareaHandlerBgColor: vars.primaryColor,
            toolbarColor: vars.textColor7,
            toolbarBgColor: vars.cardColor,
            toolbarActiveColor: vars.textColor1,
            toolbarActiveBgColor: vars.primaryColorSuppl,
            toolbarDisabledColor: vars.textColorDisabled,
            toolbarBorderColor: vars.borderColor,
            modalButtonBgColor: vars.primaryColorSuppl,
            modalButtonBorderColor: vars.borderColor,
        };
    },
};
exports.default = proEditorDark;
