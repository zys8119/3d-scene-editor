import {
    h,
    defineComponent,
    TransitionGroup,
    computed,
    ref,
    watch,
    toRef,
} from 'vue';
import NFadeInExpandTransition from '../../fade-in-expand-transition';
import { useStyle } from '../../../_mixins';
import SlotMachineNumber from './SlotMachineNumber';
import style from './styles/index.cssr';
export default defineComponent({
    name: 'BaseSlotMachine',
    props: {
        clsPrefix: {
            type: String,
            required: true,
        },
        value: {
            type: [Number, String],
            default: 0,
        },
        max: {
            type: Number,
            default: void 0,
        },
        appeared: {
            type: Boolean,
            required: true,
        },
    },
    setup(props) {
        useStyle('-base-slot-machine', style, toRef(props, 'clsPrefix'));
        const oldValueRef = ref();
        const newValueRef = ref();
        const numbersRef = computed(() => {
            if (typeof props.value === 'string') return [];
            if (props.value < 1) return [0];
            const numbers = [];
            let value = props.value;
            if (props.max !== void 0) {
                value = Math.min(props.max, value);
            }
            while (value >= 1) {
                numbers.push(value % 10);
                value /= 10;
                value = Math.floor(value);
            }
            numbers.reverse();
            return numbers;
        });
        watch(toRef(props, 'value'), (value, oldValue) => {
            if (typeof value === 'string') {
                newValueRef.value = void 0;
                oldValueRef.value = void 0;
            } else {
                if (typeof oldValue === 'string') {
                    newValueRef.value = value;
                    oldValueRef.value = void 0;
                } else {
                    newValueRef.value = value;
                    oldValueRef.value = oldValue;
                }
            }
        });
        return () => {
            const { value, clsPrefix } = props;
            return typeof value === 'number'
                ? h(
                      'span',
                      { class: `${clsPrefix}-base-slot-machine` },
                      h(
                          TransitionGroup,
                          {
                              name: 'fade-up-width-expand-transition',
                              tag: 'span',
                          },
                          {
                              default: () =>
                                  numbersRef.value.map((number, i) =>
                                      h(SlotMachineNumber, {
                                          clsPrefix,
                                          key: numbersRef.value.length - i - 1,
                                          oldOriginalNumber: oldValueRef.value,
                                          newOriginalNumber: newValueRef.value,
                                          value: number,
                                      })
                                  ),
                          }
                      ),
                      h(
                          NFadeInExpandTransition,
                          { key: '+', width: true },
                          {
                              default: () =>
                                  props.max !== void 0 && props.max < value
                                      ? h(SlotMachineNumber, {
                                            clsPrefix,
                                            value: '+',
                                        })
                                      : null,
                          }
                      )
                  )
                : h('span', { class: `${clsPrefix}-base-slot-machine` }, value);
        };
    },
});
