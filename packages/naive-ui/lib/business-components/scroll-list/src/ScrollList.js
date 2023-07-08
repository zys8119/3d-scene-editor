var __awaiter =
    (this && this.__awaiter) ||
    function (thisArg, _arguments, P, generator) {
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
            step(
                (generator = generator.apply(thisArg, _arguments || [])).next()
            );
        });
    };
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.scrollListProps = void 0;
const vue_1 = require('vue');
const _utils_1 = require('../../../_utils');
const _mixins_1 = require('../../../_mixins');
const styles_1 = require('../styles');
const index_cssr_1 = __importDefault(require('./styles/index.cssr'));
const TransitionGroup_1 = require('./Transition/TransitionGroup');
const core_1 = require('@vueuse/core');
exports.scrollListProps = Object.assign(
    Object.assign({}, _mixins_1.useTheme.props),
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
const ScrollList = (0, vue_1.defineComponent)({
    name: 'ScrollList',
    props: exports.scrollListProps,
    setup(props, { slots, expose }) {
        const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props);
        const themeRef = (0, _mixins_1.useTheme)(
            'ScrollList',
            '-scroll-list',
            index_cssr_1.default,
            styles_1.scrollListLight,
            props,
            mergedClsPrefixRef
        );
        const cssVarsRef = (0, vue_1.computed)(() => {
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
            const elements = (0, _utils_1.flatten)(
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
            const flattenElements = (0, _utils_1.flatten)(elements).map(
                (element) =>
                    Object.assign(Object.assign({}, element), {
                        id: Symbol('id'),
                    })
            );
            if (!props.sequence) {
                flattenElements.reverse();
            }
            return flattenElements;
        };
        const slotBackup = (0, vue_1.ref)(getStringifySlot());
        const slotsElements = (0, vue_1.ref)(getSlotsElements());
        const scrollListRef = (0, vue_1.ref)();
        const timer = (0, vue_1.ref)(null);
        const delDom = (0, vue_1.ref)([]);
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
        const updating = (0, vue_1.ref)(false);
        const update = (0, core_1.useDebounceFn)(
            () =>
                __awaiter(this, void 0, void 0, function* () {
                    if (updating.value) return;
                    updating.value = true;
                    slotsElements.value = [];
                    yield (0, vue_1.nextTick)();
                    yield new Promise((resolve) => {
                        setTimeout(() => {
                            slotsElements.value = getSlotsElements();
                            resolve();
                        }, 16);
                    });
                    yield (0, vue_1.nextTick)();
                    updating.value = false;
                }),
            32,
            { maxWait: 5e3 }
        );
        document.addEventListener('visibilitychange', () => {
            const { visibilityState } = document;
            return visibilityState === 'visible' ? start() : end();
        });
        (0, vue_1.onBeforeUnmount)(() => {
            end();
        });
        (0, vue_1.watch)(
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
        return (0, vue_1.h)(
            (0, vue_1.h)(
                TransitionGroup_1.TransitionGroup,
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
                            (0, vue_1.h)(
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
exports.default = ScrollList;
