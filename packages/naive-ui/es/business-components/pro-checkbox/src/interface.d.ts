import { CheckboxInst, CheckboxProps } from '../../../checkbox';
import type { Ref } from 'vue';
export interface CheckboxMixedOption extends CheckboxProps {
    slots?: Record<string, () => JSX.Element | undefined>;
    ref?: CheckboxInst | undefined | Ref<CheckboxInst | undefined>;
}
