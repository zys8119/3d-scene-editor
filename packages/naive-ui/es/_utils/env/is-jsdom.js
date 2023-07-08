let _isJsdom;
export function isJsdom() {
    if (_isJsdom === void 0) {
        _isJsdom =
            navigator.userAgent.includes('Node.js') ||
            navigator.userAgent.includes('jsdom');
    }
    return _isJsdom;
}
