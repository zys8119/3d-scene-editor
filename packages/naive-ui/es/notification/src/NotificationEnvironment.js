import {
    nextTick,
    Transition,
    h,
    defineComponent,
    ref,
    onMounted,
    inject,
} from 'vue';
import { keep } from '../../_utils';
import { notificationProviderInjectionKey } from './context';
import {
    Notification,
    notificationProps,
    notificationPropKeys,
} from './Notification';
export const notificationEnvOptions = Object.assign(
    Object.assign({}, notificationProps),
    {
        duration: Number,
        onClose: Function,
        onLeave: Function,
        onAfterEnter: Function,
        onAfterLeave: Function,
        onHide: Function,
        onAfterShow: Function,
        onAfterHide: Function,
    }
);
export const NotificationEnvironment = defineComponent({
    name: 'NotificationEnvironment',
    props: Object.assign(Object.assign({}, notificationEnvOptions), {
        internalKey: {
            type: String,
            required: true,
        },
        onInternalAfterLeave: {
            type: Function,
            required: true,
        },
    }),
    setup(props) {
        const { wipTransitionCountRef } = inject(
            notificationProviderInjectionKey
        );
        const showRef = ref(true);
        let timerId = null;
        function hide() {
            showRef.value = false;
            if (timerId) {
                window.clearTimeout(timerId);
            }
        }
        function handleBeforeEnter(el) {
            wipTransitionCountRef.value++;
            void nextTick(() => {
                el.style.height = `${el.offsetHeight}px`;
                el.style.maxHeight = '0';
                el.style.transition = 'none';
                void el.offsetHeight;
                el.style.transition = '';
                el.style.maxHeight = el.style.height;
            });
        }
        function handleAfterEnter(el) {
            wipTransitionCountRef.value--;
            el.style.height = '';
            el.style.maxHeight = '';
            const { onAfterEnter, onAfterShow } = props;
            if (onAfterEnter) onAfterEnter();
            if (onAfterShow) onAfterShow();
        }
        function handleBeforeLeave(el) {
            wipTransitionCountRef.value++;
            el.style.maxHeight = `${el.offsetHeight}px`;
            el.style.height = `${el.offsetHeight}px`;
            void el.offsetHeight;
        }
        function handleLeave(el) {
            const { onHide } = props;
            if (onHide) onHide();
            el.style.maxHeight = '0';
            void el.offsetHeight;
        }
        function handleAfterLeave() {
            wipTransitionCountRef.value--;
            const {
                onAfterLeave,
                onInternalAfterLeave,
                onAfterHide,
                internalKey,
            } = props;
            if (onAfterLeave) onAfterLeave();
            onInternalAfterLeave(internalKey);
            if (onAfterHide) onAfterHide();
        }
        function setHideTimeout() {
            const { duration } = props;
            if (duration) {
                timerId = window.setTimeout(hide, duration);
            }
        }
        function handleMouseenter(e) {
            if (e.currentTarget !== e.target) return;
            if (timerId !== null) {
                window.clearTimeout(timerId);
                timerId = null;
            }
        }
        function handleMouseleave(e) {
            if (e.currentTarget !== e.target) return;
            setHideTimeout();
        }
        function handleClose() {
            const { onClose } = props;
            if (onClose) {
                void Promise.resolve(onClose()).then((feedback) => {
                    if (feedback === false) return;
                    hide();
                });
            } else {
                hide();
            }
        }
        onMounted(() => {
            if (props.duration) {
                timerId = window.setTimeout(hide, props.duration);
            }
        });
        return {
            show: showRef,
            hide,
            handleClose,
            handleAfterLeave,
            handleLeave,
            handleBeforeLeave,
            handleAfterEnter,
            handleBeforeEnter,
            handleMouseenter,
            handleMouseleave,
        };
    },
    render() {
        return h(
            Transition,
            {
                name: 'notification-transition',
                appear: true,
                onBeforeEnter: this.handleBeforeEnter,
                onAfterEnter: this.handleAfterEnter,
                onBeforeLeave: this.handleBeforeLeave,
                onLeave: this.handleLeave,
                onAfterLeave: this.handleAfterLeave,
            },
            {
                default: () => {
                    return this.show
                        ? h(
                              Notification,
                              Object.assign(
                                  {},
                                  keep(this.$props, notificationPropKeys),
                                  {
                                      onClose: this.handleClose,
                                      onMouseenter:
                                          this.duration && this.keepAliveOnHover
                                              ? this.handleMouseenter
                                              : void 0,
                                      onMouseleave:
                                          this.duration && this.keepAliveOnHover
                                              ? this.handleMouseleave
                                              : void 0,
                                  }
                              )
                          )
                        : null;
                },
            }
        );
    },
});
