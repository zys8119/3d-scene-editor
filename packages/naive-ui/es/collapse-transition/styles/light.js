import { commonLight } from '../../_styles/common';
export const self = (vars) => {
    const { cubicBezierEaseInOut } = vars;
    return {
        bezier: cubicBezierEaseInOut,
    };
};
const collapseTransitionLight = {
    name: 'CollapseTransition',
    common: commonLight,
    self,
};
export default collapseTransitionLight;
