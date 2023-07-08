import { commonLight } from '../../_styles/common';
import { createTheme } from '../../_mixins';
import { avatarLight } from '../../avatar/styles';
export const self = () => {
    return {
        gap: '-12px',
    };
};
const avatarGroupLight = createTheme({
    name: 'AvatarGroup',
    common: commonLight,
    peers: {
        Avatar: avatarLight,
    },
    self,
});
export default avatarGroupLight;
