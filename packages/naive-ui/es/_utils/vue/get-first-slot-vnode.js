import { flatten } from './flatten';
import { warn } from '../naive';
export function getFirstSlotVNode(slots, slotName = 'default', props = void 0) {
    const slot = slots[slotName];
    if (!slot) {
        warn('getFirstSlotVNode', `slot[${slotName}] is empty`);
        return null;
    }
    const slotContent = flatten(slot(props));
    if (slotContent.length === 1) {
        return slotContent[0];
    } else {
        warn(
            'getFirstSlotVNode',
            `slot[${slotName}] should have exactly one child`
        );
        return null;
    }
}
