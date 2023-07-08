import { ref } from 'vue';
export function createRefSetter(ref2) {
    return (inst) => {
        if (inst) {
            ref2.value = inst.$el;
        } else {
            ref2.value = null;
        }
    };
}
