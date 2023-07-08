import rtlStyle from '../src/styles/rtl.cssr';
import { inputRtl } from '../../input/styles/rtl';
import { buttonRtl } from '../../button/styles/rtl';
export const inputNumberRtl = {
    name: 'InputNumber',
    style: rtlStyle,
    peers: [inputRtl, buttonRtl],
};
