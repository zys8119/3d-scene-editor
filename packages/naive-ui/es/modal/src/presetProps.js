import { dialogProps } from '../../dialog/src/dialogProps';
import { cardBaseProps } from '../../card/src/Card';
import { keysOf } from '../../_utils';
const presetProps = Object.assign(
    Object.assign({}, cardBaseProps),
    dialogProps
);
const presetPropsKeys = keysOf(presetProps);
export { presetProps, presetPropsKeys };
