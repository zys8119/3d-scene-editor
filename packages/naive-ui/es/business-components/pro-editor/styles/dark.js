import { commonDark } from '../../../_styles/common';
const proEditorDark = {
    name: 'ProEditor',
    common: commonDark,
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
export default proEditorDark;
