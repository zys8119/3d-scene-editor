import { h, ref, defineComponent, provide } from 'vue';
import { NPopover } from '../../popover';
import { popoverBaseProps } from '../../popover/src/Popover';
import { omit, keep, call } from '../../_utils';
import { useConfig, useTheme } from '../../_mixins';
import { popconfirmLight } from '../styles';
import PopconfirmPanel, { panelPropKeys } from './PopconfirmPanel';
import { popconfirmInjectionKey } from './interface';
import style from './styles/index.cssr';
export const popconfirmProps = Object.assign(
    Object.assign(Object.assign({}, useTheme.props), popoverBaseProps),
    {
        positiveText: String,
        negativeText: String,
        showIcon: {
            type: Boolean,
            default: true,
        },
        trigger: {
            type: String,
            default: 'click',
        },
        positiveButtonProps: Object,
        negativeButtonProps: Object,
        onPositiveClick: Function,
        onNegativeClick: Function,
    }
);
export default defineComponent({
    name: 'Popconfirm',
    props: popconfirmProps,
    __popover__: true,
    setup(props) {
        const { mergedClsPrefixRef } = useConfig();
        const themeRef = useTheme(
            'Popconfirm',
            '-popconfirm',
            style,
            popconfirmLight,
            props,
            mergedClsPrefixRef
        );
        const popoverInstRef = ref(null);
        function handlePositiveClick(e) {
            const { onPositiveClick, 'onUpdate:show': onUpdateShow } = props;
            void Promise.resolve(
                onPositiveClick ? onPositiveClick(e) : true
            ).then((value) => {
                var _a;
                if (value === false) return;
                (_a = popoverInstRef.value) === null || _a === void 0
                    ? void 0
                    : _a.setShow(false);
                if (onUpdateShow) call(onUpdateShow, false);
            });
        }
        function handleNegativeClick(e) {
            const { onNegativeClick, 'onUpdate:show': onUpdateShow } = props;
            void Promise.resolve(
                onNegativeClick ? onNegativeClick(e) : true
            ).then((value) => {
                var _a;
                if (value === false) return;
                (_a = popoverInstRef.value) === null || _a === void 0
                    ? void 0
                    : _a.setShow(false);
                if (onUpdateShow) call(onUpdateShow, false);
            });
        }
        provide(popconfirmInjectionKey, {
            mergedThemeRef: themeRef,
            mergedClsPrefixRef,
            props,
        });
        const exposedMethods = {
            setShow(value) {
                var _a;
                (_a = popoverInstRef.value) === null || _a === void 0
                    ? void 0
                    : _a.setShow(value);
            },
            syncPosition() {
                var _a;
                (_a = popoverInstRef.value) === null || _a === void 0
                    ? void 0
                    : _a.syncPosition();
            },
        };
        return Object.assign(Object.assign({}, exposedMethods), {
            mergedTheme: themeRef,
            popoverInstRef,
            handlePositiveClick,
            handleNegativeClick,
        });
    },
    render() {
        const { $slots: slots, $props: props, mergedTheme } = this;
        return h(
            NPopover,
            omit(props, panelPropKeys, {
                theme: mergedTheme.peers.Popover,
                themeOverrides: mergedTheme.peerOverrides.Popover,
                internalExtraClass: ['popconfirm'],
                ref: 'popoverInstRef',
            }),
            {
                trigger: slots.activator || slots.trigger,
                default: () => {
                    const panelProps = keep(props, panelPropKeys);
                    return h(
                        PopconfirmPanel,
                        Object.assign(Object.assign({}, panelProps), {
                            onPositiveClick: this.handlePositiveClick,
                            onNegativeClick: this.handleNegativeClick,
                        }),
                        slots
                    );
                },
            }
        );
    },
});
