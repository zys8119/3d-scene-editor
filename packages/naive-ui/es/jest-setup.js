import { isBrowser } from './_utils';
if (isBrowser) {
    HTMLDivElement.prototype.scrollTo = () => {};
}
