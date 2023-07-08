import * as components from './components';
import create from './create';
const naive = create({
    components: Object.keys(components).map((key) => components[key]),
});
export default naive;
export const install = naive.install;
