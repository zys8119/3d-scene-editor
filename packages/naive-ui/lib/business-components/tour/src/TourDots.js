Object.defineProperty(exports, '__esModule', { value: true });
const vue_1 = require('vue');
const seemly_1 = require('seemly');
const _mixins_1 = require('../../../_mixins');
const tourDotsProps = {
    total: {
        type: Number,
        default: 0,
    },
    currentIndex: {
        type: Number,
        default: 0,
    },
};
exports.default = (0, vue_1.defineComponent)({
    name: 'TourDots',
    props: tourDotsProps,
    setup(props) {
        const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props);
        const dotElsRef = (0, vue_1.ref)([]);
        (0, vue_1.onBeforeUpdate)(() => (dotElsRef.value.length = 0));
        return {
            mergedClsPrefix: mergedClsPrefixRef,
            dotEls: dotElsRef,
        };
    },
    render() {
        const { mergedClsPrefix, dotEls } = this;
        return (0, vue_1.h)(
            'div',
            { class: `${mergedClsPrefix}-tour-dots`, role: 'tablist' },
            (0, seemly_1.indexMap)(this.total, (i) => {
                const selected = i === this.currentIndex;
                return (0, vue_1.h)('div', {
                    'aria-selected': selected,
                    ref: (el) => dotEls.push(el),
                    role: 'button',
                    tabindex: '0',
                    class: [
                        `${mergedClsPrefix}-tour-dot`,
                        selected && `${mergedClsPrefix}-tour-dot--active`,
                    ],
                    key: i,
                });
            })
        );
    },
});
