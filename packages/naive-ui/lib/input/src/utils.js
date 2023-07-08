Object.defineProperty(exports, '__esModule', { value: true });
exports.useCursor = exports.isEmptyInputValue = exports.len = void 0;
const vue_1 = require('vue');
function len(s) {
    let count = 0;
    for (const _ of s) {
        count++;
    }
    return count;
}
exports.len = len;
function isEmptyInputValue(value) {
    return value === '' || value == null;
}
exports.isEmptyInputValue = isEmptyInputValue;
function useCursor(inputElRef) {
    const selectionRef = (0, vue_1.ref)(null);
    function recordCursor() {
        const { value: input } = inputElRef;
        if (!(input === null || input === void 0 ? void 0 : input.focus)) {
            reset();
            return;
        }
        const { selectionStart, selectionEnd, value } = input;
        if (selectionStart == null || selectionEnd == null) {
            reset();
            return;
        }
        selectionRef.value = {
            start: selectionStart,
            end: selectionEnd,
            beforeText: value.slice(0, selectionStart),
            afterText: value.slice(selectionEnd),
        };
    }
    function restoreCursor() {
        var _a;
        const { value: selection } = selectionRef;
        const { value: inputEl } = inputElRef;
        if (!selection || !inputEl) {
            return;
        }
        const { value } = inputEl;
        const { start, beforeText, afterText } = selection;
        let startPos = value.length;
        if (value.endsWith(afterText)) {
            startPos = value.length - afterText.length;
        } else if (value.startsWith(beforeText)) {
            startPos = beforeText.length;
        } else {
            const beforeLastChar = beforeText[start - 1];
            const newIndex = value.indexOf(beforeLastChar, start - 1);
            if (newIndex !== -1) {
                startPos = newIndex + 1;
            }
        }
        (_a = inputEl.setSelectionRange) === null || _a === void 0
            ? void 0
            : _a.call(inputEl, startPos, startPos);
    }
    function reset() {
        selectionRef.value = null;
    }
    (0, vue_1.watch)(inputElRef, reset);
    return {
        recordCursor,
        restoreCursor,
    };
}
exports.useCursor = useCursor;
