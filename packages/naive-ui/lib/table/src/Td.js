Object.defineProperty(exports, '__esModule', { value: true });
const vue_1 = require('vue');
exports.default = (0, vue_1.defineComponent)({
    name: 'Td',
    render() {
        return (0, vue_1.h)('td', null, this.$slots);
    },
});
