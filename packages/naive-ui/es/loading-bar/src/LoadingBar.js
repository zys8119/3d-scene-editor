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
    Transition,
    computed,
    defineComponent,
    inject,
    withDirectives,
    vShow,
    ref,
    nextTick,
} from 'vue';
import { useConfig, useTheme, useThemeClass } from '../../_mixins';
import { loadingBarLight } from '../styles';
import { loadingBarProviderInjectionKey } from './context';
import style from './styles/index.cssr';
function createClassName(status, clsPrefix) {
    return `${clsPrefix}-loading-bar ${clsPrefix}-loading-bar--${status}`;
}
export default defineComponent({
    name: 'LoadingBar',
    props: {
        containerStyle: [String, Object],
    },
    setup() {
        const { inlineThemeDisabled } = useConfig();
        const { props: providerProps, mergedClsPrefixRef } = inject(
            loadingBarProviderInjectionKey
        );
        const loadingBarRef = ref(null);
        const enteringRef = ref(false);
        const startedRef = ref(false);
        const loadingRef = ref(false);
        const transitionDisabledRef = ref(false);
        let finishing = false;
        const erroringRef = ref(false);
        const mergedLoadingBarStyle = computed(() => {
            const { loadingBarStyle } = providerProps;
            if (!loadingBarStyle) return '';
            return loadingBarStyle[erroringRef.value ? 'error' : 'loading'];
        });
        function init() {
            return __awaiter(this, void 0, void 0, function* () {
                enteringRef.value = false;
                loadingRef.value = false;
                finishing = false;
                erroringRef.value = false;
                transitionDisabledRef.value = true;
                yield nextTick();
                transitionDisabledRef.value = false;
            });
        }
        function start(fromProgress = 0, toProgress = 80, status = 'starting') {
            return __awaiter(this, void 0, void 0, function* () {
                yield init();
                loadingRef.value = true;
                startedRef.value = true;
                yield nextTick();
                const el = loadingBarRef.value;
                if (!el) return;
                el.style.maxWidth = `${fromProgress}%`;
                el.style.transition = 'none';
                void el.offsetWidth;
                el.className = createClassName(
                    status,
                    mergedClsPrefixRef.value
                );
                el.style.transition = '';
                el.style.maxWidth = `${toProgress}%`;
            });
        }
        function finish() {
            if (finishing || erroringRef.value || !loadingRef.value) return;
            finishing = true;
            const el = loadingBarRef.value;
            if (!el) return;
            el.className = createClassName(
                'finishing',
                mergedClsPrefixRef.value
            );
            el.style.maxWidth = '100%';
            void el.offsetWidth;
            loadingRef.value = false;
        }
        function error() {
            if (finishing || erroringRef.value) return;
            if (!loadingRef.value) {
                void start(100, 100, 'error').then(() => {
                    erroringRef.value = true;
                    const el = loadingBarRef.value;
                    if (!el) return;
                    el.className = createClassName(
                        'error',
                        mergedClsPrefixRef.value
                    );
                    void el.offsetWidth;
                    loadingRef.value = false;
                });
            } else {
                erroringRef.value = true;
                const el = loadingBarRef.value;
                if (!el) return;
                el.className = createClassName(
                    'error',
                    mergedClsPrefixRef.value
                );
                el.style.maxWidth = '100%';
                void el.offsetWidth;
                loadingRef.value = false;
            }
        }
        function handleEnter() {
            enteringRef.value = true;
        }
        function handleAfterEnter() {
            enteringRef.value = false;
        }
        function handleAfterLeave() {
            return __awaiter(this, void 0, void 0, function* () {
                yield init();
            });
        }
        const themeRef = useTheme(
            'LoadingBar',
            '-loading-bar',
            style,
            loadingBarLight,
            providerProps,
            mergedClsPrefixRef
        );
        const cssVarsRef = computed(() => {
            const {
                self: { height, colorError, colorLoading },
            } = themeRef.value;
            return {
                '--n-height': height,
                '--n-color-loading': colorLoading,
                '--n-color-error': colorError,
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? useThemeClass('loading-bar', void 0, cssVarsRef, providerProps)
            : void 0;
        return {
            mergedClsPrefix: mergedClsPrefixRef,
            loadingBarRef,
            started: startedRef,
            loading: loadingRef,
            entering: enteringRef,
            transitionDisabled: transitionDisabledRef,
            start,
            error,
            finish,
            handleEnter,
            handleAfterEnter,
            handleAfterLeave,
            mergedLoadingBarStyle,
            cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
            themeClass:
                themeClassHandle === null || themeClassHandle === void 0
                    ? void 0
                    : themeClassHandle.themeClass,
            onRender:
                themeClassHandle === null || themeClassHandle === void 0
                    ? void 0
                    : themeClassHandle.onRender,
        };
    },
    render() {
        if (!this.started) return null;
        const { mergedClsPrefix } = this;
        return h(
            Transition,
            {
                name: 'fade-in-transition',
                appear: true,
                onEnter: this.handleEnter,
                onAfterEnter: this.handleAfterEnter,
                onAfterLeave: this.handleAfterLeave,
                css: !this.transitionDisabled,
            },
            {
                default: () => {
                    var _a;
                    (_a = this.onRender) === null || _a === void 0
                        ? void 0
                        : _a.call(this);
                    return withDirectives(
                        h(
                            'div',
                            {
                                class: [
                                    `${mergedClsPrefix}-loading-bar-container`,
                                    this.themeClass,
                                ],
                                style: this.containerStyle,
                            },
                            h('div', {
                                ref: 'loadingBarRef',
                                class: [`${mergedClsPrefix}-loading-bar`],
                                style: [
                                    this.cssVars,
                                    this.mergedLoadingBarStyle,
                                ],
                            })
                        ),
                        [
                            [
                                vShow,
                                this.loading ||
                                    (!this.loading && this.entering),
                            ],
                        ]
                    );
                },
            }
        );
    },
});
