Object.defineProperty(exports, '__esModule', { value: true });
exports.getDisplayTotalView =
    exports.getNextIndex =
    exports.getPrevIndex =
    exports.getRealIndex =
    exports.getDisplayIndex =
    exports.addDuplicateSlides =
        void 0;
const vue_1 = require('vue');
function addDuplicateSlides(slides) {
    const { length } = slides;
    if (length > 1) {
        slides.push(duplicateSlide(slides[0], 0, 'append'));
        slides.unshift(
            duplicateSlide(slides[length - 1], length - 1, 'prepend')
        );
        return slides;
    }
    return slides;
}
exports.addDuplicateSlides = addDuplicateSlides;
function duplicateSlide(child, index, position) {
    return (0, vue_1.cloneVNode)(child, {
        key: `carousel-item-duplicate-${index}-${position}`,
    });
}
function getDisplayIndex(current, length, duplicatedable) {
    return !duplicatedable
        ? current
        : current === 0
        ? length - 3
        : current === length - 1
        ? 0
        : current - 1;
}
exports.getDisplayIndex = getDisplayIndex;
function getRealIndex(current, duplicatedable) {
    return !duplicatedable ? current : current + 1;
}
exports.getRealIndex = getRealIndex;
function getPrevIndex(current, length, duplicatedable) {
    if (current < 0) return null;
    return current === 0 ? (duplicatedable ? length - 1 : null) : current - 1;
}
exports.getPrevIndex = getPrevIndex;
function getNextIndex(current, length, duplicatedable) {
    if (current > length - 1) return null;
    return current === length - 1 ? (duplicatedable ? 0 : null) : current + 1;
}
exports.getNextIndex = getNextIndex;
function getDisplayTotalView(total, duplicatedable) {
    return duplicatedable && total > 3 ? total - 2 : total;
}
exports.getDisplayTotalView = getDisplayTotalView;
