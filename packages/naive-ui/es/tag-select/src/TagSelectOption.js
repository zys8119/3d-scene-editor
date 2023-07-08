import { h, defineComponent, inject } from 'vue';
import { NTag } from '../../tag';
import { tagSelectValue, setTagSelectValue } from './utils';
export default defineComponent({
    name: 'TagSelectOption',
    props: {
        value: String,
        tagProps: {
            type: Object,
            default: () => ({}),
        },
    },
    setup() {
        const valueOwn = inject(tagSelectValue);
        const setValue = inject(setTagSelectValue);
        return {
            valueOwn,
            setValue,
        };
    },
    render() {
        return h(
            NTag,
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
