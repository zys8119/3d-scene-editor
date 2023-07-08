import { h, defineComponent, ref, onMounted } from 'vue';
import { NFadeInExpandTransition } from '../../_internal';
import NMessage from './Message';
import { messageProps } from './message-props';
export default defineComponent({
    name: 'MessageEnvironment',
    props: Object.assign(Object.assign({}, messageProps), {
        duration: {
            type: Number,
            default: 3e3,
        },
        onAfterLeave: Function,
        onLeave: Function,
        internalKey: {
            type: String,
            required: true,
        },
        onInternalAfterLeave: Function,
        onHide: Function,
        onAfterHide: Function,
    }),
    setup(props) {
        let timerId = null;
        const showRef = ref(true);
        onMounted(() => {
            setHideTimeout();
        });
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
        function hide() {
            const { onHide } = props;
            showRef.value = false;
            if (timerId) {
                window.clearTimeout(timerId);
                timerId = null;
            }
            if (onHide) onHide();
        }
        function handleClose() {
            const { onClose } = props;
            if (onClose) onClose();
            hide();
        }
        function handleAfterLeave() {
            const {
                onAfterLeave,
                onInternalAfterLeave,
                onAfterHide,
                internalKey,
            } = props;
            if (onAfterLeave) onAfterLeave();
            if (onInternalAfterLeave) onInternalAfterLeave(internalKey);
            if (onAfterHide) onAfterHide();
        }
        function deactivate() {
            hide();
        }
        return {
            show: showRef,
            hide,
            handleClose,
            handleAfterLeave,
            handleMouseleave,
            handleMouseenter,
            deactivate,
        };
    },
    render() {
        return h(
            NFadeInExpandTransition,
            {
                appear: true,
                onAfterLeave: this.handleAfterLeave,
                onLeave: this.onLeave,
            },
            {
                default: () => [
                    this.show
                        ? h(NMessage, {
                              content: this.content,
                              type: this.type,
                              icon: this.icon,
                              showIcon: this.showIcon,
                              closable: this.closable,
                              onClose: this.handleClose,
                              onMouseenter: this.keepAliveOnHover
                                  ? this.handleMouseenter
                                  : void 0,
                              onMouseleave: this.keepAliveOnHover
                                  ? this.handleMouseleave
                                  : void 0,
                          })
                        : null,
                ],
            }
        );
    },
});
