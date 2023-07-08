import { commonLight } from '../../../_styles/common';
const self = (vars) => {
    return {
        textareaBgColor: '#fff',
        textareaColor: '#333',
        textareaBorderColor: '#ccc',
        textareaSlightBorderColor: '#e8e8e8',
        textareaSlightColor: '#e8e8e8',
        textareaSlightBgColor: '#e8e8e8',
        textareaSelectedBorderColor: '#B4D5FF',
        textareaHandlerBgColor: '#4290f7',
        toolbarColor: '#595959',
        toolbarBgColor: '#fff',
        toolbarActiveColor: '#333',
        toolbarActiveBgColor: '#f1f1f1',
        toolbarDisabledColor: '#999',
        toolbarBorderColor: '#e8e8e8',
        modalButtonBgColor: '#fafafa',
        modalButtonBorderColor: '#d9d9d9',
    };
};
const proEditorLight = {
    name: 'ProEditor',
    common: commonLight,
    self,
};
export default proEditorLight;
