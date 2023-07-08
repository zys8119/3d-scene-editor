import { h, defineComponent } from 'vue';
export default defineComponent({
    name: 'Switcher',
    render() {
        return h(
            'svg',
            { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32' },
            h('path', { d: 'M12 8l10 8l-10 8z' })
        );
    },
});
