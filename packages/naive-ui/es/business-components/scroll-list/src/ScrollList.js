var __awaiter = function (thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P
            ? value
            : new P(function (resolve) {
                  resolve(value);
              });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator['throw'](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done
                ? resolve(result.value)
                : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import {
    h,
    ref,
    computed,
    watch,
    nextTick,
    onBeforeUnmount,
    defineComponent,
} from 'vue';
import { flatten } from '../../../_utils';
import { useConfig, useTheme } from '../../../_mixins';
import { scrollListLight } from '../styles';
import style from './styles/index.cssr';
import { TransitionGroup } from './Transition/TransitionGroup';
import { useDebounceFn } from '@vueuse/core';
export const scrollListProps = Object.assign(
    Object.assign({}, useTheme.props),
    {
        height: { type: Number, default: 100 },
        scroll: { type: Boolean, default: true },
        count: { type: Number, default: 1 },
        duration: { type: Number, default: 2e3 },
        animationDuration: { type: Number, default: 400 },
        autoUpdate: { type: Boolean, default: true },
        space: { type: Number, default: 10 },
        sequence: { type: Boolean, default: true },
        loop: { type: Boolean, default: true },
        hoverStop: { type: Boolean, default: true },
        tag: { type: String, default: 'div' },
    }
);
const ScrollList = defineComponent({
    name: 'ScrollList',
    props: scrollListProps,
    setup(props, { slots, expose }) {
        const { mergedClsPrefixRef } = useConfig(props);
        const themeRef = useTheme(
            'ScrollList',
            '-scroll-list',
            style,
            scrollListLight,
            props,
            mergedClsPrefixRef
        );
        const cssVarsRef = computed(() => {
            const {
                self: { padding },
            } = themeRef.value;
            return {
                '--n-padding': padding,
                '--n-space': `${props.space}px`,
                '--n-height': `${props.height}px`,
                '--n-duration': props.duration,
            };
        });
        const getStringifySlot = () => {
            var _a;
            const elements = flatten(
                ((_a = slots.default) === null || _a === void 0
                    ? void 0
                    : _a.call(slots)) || []
            );
            const newElements = elements.map((element) => {
                const newElement = Object.assign({}, element);
                delete newElement.ctx;
                delete newElement.children;
                return newElement;
            });
            return JSON.stringify(newElements);
        };
        const getSlotsElements = () => {
            var _a;
            const elements =
                ((_a = slots.default) === null || _a === void 0
                    ? void 0
                    : _a.call(slots)) || [];
            const flattenElements = flatten(elements).map((element) =>
                Object.assign(Object.assign({}, element), { id: Symbol('id') })
            );
            if (!props.sequence) {
                flattenElements.reverse();
            }
            return flattenElements;
        };
        const slotBackup = ref(getStringifySlot());
        const slotsElements = ref(getSlotsElements());
        const scrollListRef = ref();
        const timer = ref(null);
        const delDom = ref([]);
        const popList = () => {
            if (!props.scroll) return;
            if (slotsElements.value.length < 2) return;
            if (scrollListRef.value) {
                if (
                    scrollListRef.value.$el.scrollHeight <=
                    scrollListRef.value.$el.offsetHeight
                ) {
                    slotsElements.value.unshift(...delDom.value);
                    delDom.value = [];
                    return;
                }
                if (scrollListRef.value.$el.scrollTop !== 0) {
                    scrollListRef.value.$el.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                    });
                    return;
                }
            }
            const count =
                props.count > slotsElements.value.length
                    ? slotsElements.value.length
                    : props.count;
            const pushTo = slotsElements.value.slice(0, count);
            delDom.value.push(...pushTo);
            slotsElements.value.splice(0, count);
            pushTo.forEach((child) => {
                child.id = Symbol('id');
                if (props.loop) slotsElements.value.push(child);
            });
        };
        const start = () => {
            end();
            timer.value = setInterval(() => {
                popList();
            }, props.duration + props.animationDuration);
        };
        const end = () => {
            if (timer.value) clearInterval(timer.value);
        };
        const updating = ref(false);
        const update = useDebounceFn(
            () =>
                __awaiter(this, void 0, void 0, function* () {
                    if (updating.value) return;
                    updating.value = true;
                    slotsElements.value = [];
                    yield nextTick();
                    yield new Promise((resolve) => {
                        setTimeout(() => {
                            slotsElements.value = getSlotsElements();
                            resolve();
                        }, 16);
                    });
                    yield nextTick();
                    updating.value = false;
                }),
            32,
            { maxWait: 5e3 }
        );
        document.addEventListener('visibilitychange', () => {
            const { visibilityState } = document;
            return visibilityState === 'visible' ? start() : end();
        });
        onBeforeUnmount(() => {
            end();
        });
        watch(
            () => props.scroll,
            () => {
                if (props.scroll) {
                    start();
                } else {
                    end();
                }
            },
            {
                immediate: true,
            }
        );
        return {
            cssVarsRef,
            mergedClsPrefix: mergedClsPrefixRef,
            slotsElements,
            getStringifySlot,
            start,
            scrollListRef,
            timer,
            end,
            slotBackup,
            update,
            updating,
        };
    },
    render() {
        const {
            mergedClsPrefix,
            slotsElements,
            autoUpdate,
            slotBackup,
            updating,
        } = this;
        if (autoUpdate) {
            const slotBackupMap = this.getStringifySlot();
            if (slotBackupMap !== slotBackup) {
                this.end();
                this.slotBackup = slotBackupMap;
                this.update();
                this.start();
            }
        }
        return h(
            h(
                TransitionGroup,
                {
                    class: [
                        `${mergedClsPrefix}-scroll-list`,
                        this.sequence
                            ? `${mergedClsPrefix}-scroll-list-reverse`
                            : '',
                        this.scroll
                            ? `${mergedClsPrefix}-scroll-list-hidden`
                            : '',
                    ],
                    name: updating
                        ? `${mergedClsPrefix}-scroll-fade`
                        : this.sequence
                        ? `${mergedClsPrefix}-scroll-flip-reverse`
                        : `${mergedClsPrefix}-scroll-flip`,
                    tag: this.tag,
                    style: this.cssVarsRef,
                    ref: 'scrollListRef',
                    onMouseenter: () =>
                        this.start && this.hoverStop && this.end(),
                    onMouseleave: () =>
                        this.start && this.hoverStop && this.start(),
                },
                {
                    default: () => [
                        slotsElements.map((element, index) =>
                            h(
                                'div',
                                {
                                    key: element.id,
                                    class: [
                                        `${mergedClsPrefix}-scroll-list-cell`,
                                        `${mergedClsPrefix}-linear`,
                                    ],
                                    style: {
                                        '--n-duration': `${
                                            this.animationDuration / 1e3
                                        }s`,
                                    },
                                },
                                element
                            )
                        ),
                    ],
                }
            )
        );
    },
});
export default ScrollList;
