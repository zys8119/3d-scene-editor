import { defineComponent, h, nextTick, ref, computed, watch, toRef } from 'vue';
export default defineComponent({
    name: 'SlotMachineNumber',
    props: {
        clsPrefix: {
            type: String,
            required: true,
        },
        value: {
            type: [Number, String],
            required: true,
        },
        oldOriginalNumber: {
            type: Number,
            default: void 0,
        },
        newOriginalNumber: {
            type: Number,
            default: void 0,
        },
    },
    setup(props) {
        const numberRef = ref(null);
        const oldNumberRef = ref(props.value);
        const newNumberRef = ref(props.value);
        const scrollAnimationDirectionRef = ref('up');
        const activeRef = ref(false);
        const newNumberScrollAnimationClassRef = computed(() => {
            return activeRef.value
                ? `${props.clsPrefix}-base-slot-machine-current-number--${scrollAnimationDirectionRef.value}-scroll`
                : null;
        });
        const oldNumberScrollAnimationClassRef = computed(() => {
            return activeRef.value
                ? `${props.clsPrefix}-base-slot-machine-old-number--${scrollAnimationDirectionRef.value}-scroll`
                : null;
        });
        watch(toRef(props, 'value'), (value, oldValue) => {
            oldNumberRef.value = oldValue;
            newNumberRef.value = value;
            void nextTick(scroll);
        });
        function scroll() {
            const newOriginalNumber = props.newOriginalNumber;
            const oldOriginalNumber = props.oldOriginalNumber;
            if (oldOriginalNumber === void 0 || newOriginalNumber === void 0) {
                return;
            }
            if (newOriginalNumber > oldOriginalNumber) {
                scrollByDir('up');
            } else if (oldOriginalNumber > newOriginalNumber) {
                scrollByDir('down');
            }
        }
        function scrollByDir(dir) {
            scrollAnimationDirectionRef.value = dir;
            activeRef.value = false;
            void nextTick(() => {
                var _a;
                void ((_a = numberRef.value) === null || _a === void 0
                    ? void 0
                    : _a.offsetWidth);
                activeRef.value = true;
            });
        }
        return () => {
            const { clsPrefix } = props;
            return h(
                'span',
                {
                    ref: numberRef,
                    class: `${clsPrefix}-base-slot-machine-number`,
                },
                oldNumberRef.value !== null
                    ? h(
                          'span',
                          {
                              class: [
                                  `${clsPrefix}-base-slot-machine-old-number ${clsPrefix}-base-slot-machine-old-number--top`,
                                  oldNumberScrollAnimationClassRef.value,
                              ],
                          },
                          oldNumberRef.value
                      )
                    : null,
                h(
                    'span',
                    {
                        class: [
                            `${clsPrefix}-base-slot-machine-current-number`,
                            newNumberScrollAnimationClassRef.value,
                        ],
                    },
                    h(
                        'span',
                        {
                            ref: 'numberWrapper',
                            class: [
                                `${clsPrefix}-base-slot-machine-current-number__inner`,
                                typeof props.value !== 'number' &&
                                    `${clsPrefix}-base-slot-machine-current-number__inner--not-number`,
                            ],
                        },
                        newNumberRef.value
                    )
                ),
                oldNumberRef.value !== null
                    ? h(
                          'span',
                          {
                              class: [
                                  `${clsPrefix}-base-slot-machine-old-number ${clsPrefix}-base-slot-machine-old-number--bottom`,
                                  oldNumberScrollAnimationClassRef.value,
                              ],
                          },
                          oldNumberRef.value
                      )
                    : null
            );
        };
    },
});
