import { defineComponent, inject, h, computed } from 'vue';
import { resolveSlotWithProps } from '../../_utils';
import { inputInjectionKey } from './interface';
import { len } from './utils';
export default defineComponent({
    name: 'InputWordCount',
    setup(_, { slots }) {
        const {
            mergedValueRef,
            maxlengthRef,
            mergedClsPrefixRef,
            countGraphemesRef,
        } = inject(inputInjectionKey);
        const wordCountRef = computed(() => {
            const { value: mergedValue } = mergedValueRef;
            if (mergedValue === null || Array.isArray(mergedValue)) return 0;
            return (countGraphemesRef.value || len)(mergedValue);
        });
        return () => {
            const { value: maxlength } = maxlengthRef;
            const { value: mergedValue } = mergedValueRef;
            return h(
                'span',
                { class: `${mergedClsPrefixRef.value}-input-word-count` },
                resolveSlotWithProps(
                    slots.default,
                    {
                        value:
                            mergedValue === null || Array.isArray(mergedValue)
                                ? ''
                                : mergedValue,
                    },
                    () => [
                        maxlength === void 0
                            ? wordCountRef.value
                            : `${wordCountRef.value} / ${maxlength}`,
                    ]
                )
            );
        };
    },
});
