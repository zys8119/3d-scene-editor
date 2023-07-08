Object.defineProperty(exports, '__esModule', { value: true });
exports.ensureSupportFlexGap = void 0;
const _utils_1 = require('../../_utils');
let supportFlexGap;
const ensureSupportFlexGap = () => {
    if (!_utils_1.isBrowser) return true;
    if (supportFlexGap === void 0) {
        const flex = document.createElement('div');
        flex.style.display = 'flex';
        flex.style.flexDirection = 'column';
        flex.style.rowGap = '1px';
        flex.appendChild(document.createElement('div'));
        flex.appendChild(document.createElement('div'));
        document.body.appendChild(flex);
        const isSupported = flex.scrollHeight === 1;
        document.body.removeChild(flex);
        return (supportFlexGap = isSupported);
    }
    return supportFlexGap;
};
exports.ensureSupportFlexGap = ensureSupportFlexGap;
