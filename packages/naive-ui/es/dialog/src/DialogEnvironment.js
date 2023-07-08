import { h, defineComponent, ref } from 'vue';
import NModal from '../../modal/src/Modal';
import { keep } from '../../_utils';
import { NDialog } from './Dialog';
import { dialogProps, dialogPropKeys } from './dialogProps';
export const exposedDialogEnvProps = Object.assign(
    Object.assign({}, dialogProps),
    {
        onAfterEnter: Function,
        onAfterLeave: Function,
        transformOrigin: String,
        blockScroll: { type: Boolean, default: true },
        closeOnEsc: { type: Boolean, default: true },
        onEsc: Function,
        autoFocus: {
            type: Boolean,
            default: true,
        },
        internalStyle: [String, Object],
        maskClosable: {
            type: Boolean,
            default: true,
        },
        onPositiveClick: Function,
        onNegativeClick: Function,
        onClose: Function,
        onMaskClick: Function,
    }
);
export const NDialogEnvironment = defineComponent({
    name: 'DialogEnvironment',
    props: Object.assign(Object.assign({}, exposedDialogEnvProps), {
        internalKey: {
            type: String,
            required: true,
        },
        to: [String, Object],
        onInternalAfterLeave: {
            type: Function,
            required: true,
        },
    }),
    setup(props) {
        const showRef = ref(true);
        function handleAfterLeave() {
            const { onInternalAfterLeave, internalKey, onAfterLeave } = props;
            if (onInternalAfterLeave) onInternalAfterLeave(internalKey);
            if (onAfterLeave) onAfterLeave();
        }
        function handlePositiveClick(e) {
            const { onPositiveClick } = props;
            if (onPositiveClick) {
                void Promise.resolve(onPositiveClick(e)).then((result) => {
                    if (result === false) return;
                    hide();
                });
            } else {
                hide();
            }
        }
        function handleNegativeClick(e) {
            const { onNegativeClick } = props;
            if (onNegativeClick) {
                void Promise.resolve(onNegativeClick(e)).then((result) => {
                    if (result === false) return;
                    hide();
                });
            } else {
                hide();
            }
        }
        function handleCloseClick() {
            const { onClose } = props;
            if (onClose) {
                void Promise.resolve(onClose()).then((result) => {
                    if (result === false) return;
                    hide();
                });
            } else {
                hide();
            }
        }
        function handleMaskClick(e) {
            const { onMaskClick, maskClosable } = props;
            if (onMaskClick) {
                onMaskClick(e);
                maskClosable && hide();
            }
        }
        function handleEsc() {
            const { onEsc } = props;
            if (onEsc) {
                onEsc();
            }
        }
        function hide() {
            showRef.value = false;
        }
        function handleUpdateShow(value) {
            showRef.value = value;
        }
        return {
            show: showRef,
            hide,
            handleUpdateShow,
            handleAfterLeave,
            handleCloseClick,
            handleNegativeClick,
            handlePositiveClick,
            handleMaskClick,
            handleEsc,
        };
    },
    render() {
        const {
            handlePositiveClick,
            handleUpdateShow,
            handleNegativeClick,
            handleCloseClick,
            handleAfterLeave,
            handleMaskClick,
            handleEsc,
            to,
            maskClosable,
            show,
        } = this;
        return h(
            NModal,
            {
                show,
                onUpdateShow: handleUpdateShow,
                onMaskClick: handleMaskClick,
                onEsc: handleEsc,
                to,
                maskClosable,
                onAfterEnter: this.onAfterEnter,
                onAfterLeave: handleAfterLeave,
                closeOnEsc: this.closeOnEsc,
                blockScroll: this.blockScroll,
                autoFocus: this.autoFocus,
                transformOrigin: this.transformOrigin,
                internalAppear: true,
                internalDialog: true,
            },
            {
                default: () =>
                    h(
                        NDialog,
                        Object.assign({}, keep(this.$props, dialogPropKeys), {
                            style: this.internalStyle,
                            onClose: handleCloseClick,
                            onNegativeClick: handleNegativeClick,
                            onPositiveClick: handlePositiveClick,
                        })
                    ),
            }
        );
    },
});
