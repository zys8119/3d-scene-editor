Object.defineProperty(exports, '__esModule', { value: true });
exports.isImageSupportNativeLazy = void 0;
const is_browser_1 = require('./is-browser');
exports.isImageSupportNativeLazy =
    is_browser_1.isBrowser && 'loading' in document.createElement('img');
