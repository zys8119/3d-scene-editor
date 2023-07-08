const { ref } = require('vue');
Object.defineProperty(exports, '__esModule', { value: true });
exports.createRefSetter = void 0;
function createRefSetter(ref2) {
    return (inst) => {
        if (inst) {
            ref2.value = inst.$el;
        } else {
            ref2.value = null;
        }
    };
}
exports.createRefSetter = createRefSetter;
