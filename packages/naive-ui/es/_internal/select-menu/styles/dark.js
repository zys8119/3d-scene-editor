import { emptyDark } from '../../../empty/styles';
import { scrollbarDark } from '../../scrollbar/styles';
import { commonDark } from '../../../_styles/common';
import { self } from './light';
const internalSelectMenuDark = {
    name: 'InternalSelectMenu',
    common: commonDark,
    peers: {
        Scrollbar: scrollbarDark,
        Empty: emptyDark,
    },
    self,
};
export default internalSelectMenuDark;
