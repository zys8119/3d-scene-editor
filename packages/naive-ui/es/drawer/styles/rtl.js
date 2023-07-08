import rtlStyle from '../src/styles/rtl.cssr';
import { scrollbarRtl } from '../../_internal/scrollbar/styles/rtl';
export const drawerRtl = {
    name: 'Drawer',
    style: rtlStyle,
    peers: [scrollbarRtl],
};
export default drawerRtl;
