Object.defineProperty(exports, '__esModule', { value: true });
const vue_1 = require('vue');
const tag_1 = require('../../tag');
const utils_1 = require('./utils');
exports.default = (0, vue_1.defineComponent)({
    name: 'TagSelectOption',
    props: {
        value: String,
        tagProps: {
            type: Object,
            default: () => ({}),
        },
    },
    setup() {
        const valueOwn = (0, vue_1.inject)(utils_1.tagSelectValue);
        const setValue = (0, vue_1.inject)(utils_1.setTagSelectValue);
        return {
            valueOwn,
            setValue,
        };
    },
    render() {
        return (0, vue_1.h)(
            tag_1.NTag,
            Object.assign(
                {
                    class: [
                        'n-tag-select-option',
                        {
                            'n-tag n-tag--checkable n-tag--checked':
                                this.valueOwn === this.value,
                        },
                    ],
                    onClick: () => {
                        var _a;
                        (_a = this.setValue) === null || _a === void 0
                            ? void 0
                            : _a.call(this, this.value);
                    },
                },
                this.tagProps
            ),
            this.$slots
        );
    },
});
