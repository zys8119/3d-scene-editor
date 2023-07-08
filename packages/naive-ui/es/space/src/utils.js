import { isBrowser } from '../../_utils';
let supportFlexGap;
export const ensureSupportFlexGap = () => {
    if (!isBrowser) return true;
    if (supportFlexGap === void 0) {
        const flex = document.createElement('div');
        flex.style.display = 'flex';
        flex.style.flexDirection = 'column';
        flex.style.rowGap = '1px';
        flex.appendChild(document.createElement('div'));
        flex.appendChild(document.createElement('div'));
        document.body.appendChild(flex);
        const isSupported = flex.scrollHeight === 1;
        document.body.removeChild(flex);
        return (supportFlexGap = isSupported);
    }
    return supportFlexGap;
};
