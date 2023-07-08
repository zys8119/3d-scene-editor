Object.defineProperty(exports, '__esModule', { value: true });
exports.isSafari = exports.isFirefox = exports.isChrome = void 0;
const is_browser_1 = require('./is-browser');
exports.isChrome = is_browser_1.isBrowser && 'chrome' in window;
exports.isFirefox =
    is_browser_1.isBrowser && navigator.userAgent.includes('Firefox');
exports.isSafari =
    is_browser_1.isBrowser &&
    navigator.userAgent.includes('Safari') &&
    !exports.isChrome;
