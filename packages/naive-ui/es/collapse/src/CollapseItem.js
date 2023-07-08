import { h, defineComponent, inject, computed } from 'vue';
import { createId } from 'seemly';
import { useMemo } from 'vooks';
import {
    ChevronRightIcon as ArrowRightIcon,
    ChevronLeftIcon as ArrowLeftIcon,
} from '../../_internal/icons';
import { useRtl } from '../../_mixins/use-rtl';
import { useConfig } from '../../_mixins';
import { NBaseIcon } from '../../_internal';
import {
    throwError,
    resolveSlotWithProps,
    resolveWrappedSlotWithProps,
} from '../../_utils';
import { collapseInjectionKey } from './Collapse';
import NCollapseItemContent from './CollapseItemContent';
export const collapseItemProps = {
    title: String,
    name: [String, Number],
    disabled: Boolean,
    displayDirective: String,
};
export default defineComponent({
    name: 'CollapseItem',
    props: collapseItemProps,
    setup(props) {
        const { mergedRtlRef } = useConfig(props);
        const randomName = createId();
        const mergedNameRef = useMemo(() => {
            var _a;
            return (_a = props.name) !== null && _a !== void 0
                ? _a
                : randomName;
        });
        const NCollapse = inject(collapseInjectionKey);
        if (!NCollapse) {
            throwError(
                'collapse-item',
                '`n-collapse-item` must be placed inside `n-collapse`.'
            );
        }
        const {
            expandedNamesRef,
            props: collapseProps,
            mergedClsPrefixRef,
            slots: collapseSlots,
        } = NCollapse;
        const collapsedRef = computed(() => {
            const { value: expandedNames } = expandedNamesRef;
            if (Array.isArray(expandedNames)) {
                const { value: name } = mergedNameRef;
                return !~expandedNames.findIndex(
                    (expandedName) => expandedName === name
                );
            } else if (expandedNames) {
                const { value: name } = mergedNameRef;
                return name !== expandedNames;
            }
            return true;
        });
        const rtlEnabledRef = useRtl(
            'Collapse',
            mergedRtlRef,
            mergedClsPrefixRef
        );
        return {
            rtlEnabled: rtlEnabledRef,
            collapseSlots,
            randomName,
            mergedClsPrefix: mergedClsPrefixRef,
            collapsed: collapsedRef,
            mergedDisplayDirective: computed(() => {
                const { displayDirective } = props;
                if (displayDirective) {
                    return displayDirective;
                } else {
                    return collapseProps.displayDirective;
                }
            }),
            arrowPlacement: computed(() => {
                return collapseProps.arrowPlacement;
            }),
            handleClick(e) {
                if (NCollapse && !props.disabled) {
                    NCollapse.toggleItem(
                        collapsedRef.value,
                        mergedNameRef.value,
                        e
                    );
                }
            },
        };
    },
    render() {
        const {
            collapseSlots,
            $slots,
            arrowPlacement,
            collapsed,
            mergedDisplayDirective,
            mergedClsPrefix,
            disabled,
        } = this;
        const headerNode = resolveSlotWithProps(
            $slots.header,
            { collapsed },
            () => [this.title]
        );
        const headerExtraSlot =
            $slots['header-extra'] || collapseSlots['header-extra'];
        const arrowSlot = $slots.arrow || collapseSlots.arrow;
        return h(
            'div',
            {
                class: [
                    `${mergedClsPrefix}-collapse-item`,
                    `${mergedClsPrefix}-collapse-item--${arrowPlacement}-arrow-placement`,
                    disabled && `${mergedClsPrefix}-collapse-item--disabled`,
                    !collapsed && `${mergedClsPrefix}-collapse-item--active`,
                ],
            },
            h(
                'div',
                {
                    class: [
                        `${mergedClsPrefix}-collapse-item__header`,
                        !collapsed &&
                            `${mergedClsPrefix}-collapse-item__header--active`,
                    ],
                },
                h(
                    'div',
                    {
                        class: `${mergedClsPrefix}-collapse-item__header-main`,
                        onClick: this.handleClick,
                    },
                    arrowPlacement === 'right' && headerNode,
                    h(
                        'div',
                        {
                            class: `${mergedClsPrefix}-collapse-item-arrow`,
                            key: this.rtlEnabled ? 0 : 1,
                        },
                        resolveSlotWithProps(arrowSlot, { collapsed }, () => {
                            var _a;
                            return [
                                h(
                                    NBaseIcon,
                                    { clsPrefix: mergedClsPrefix },
                                    {
                                        default:
                                            (_a = collapseSlots.expandIcon) !==
                                                null && _a !== void 0
                                                ? _a
                                                : () =>
                                                      this.rtlEnabled
                                                          ? h(
                                                                ArrowLeftIcon,
                                                                null
                                                            )
                                                          : h(
                                                                ArrowRightIcon,
                                                                null
                                                            ),
                                    }
                                ),
                            ];
                        })
                    ),
                    arrowPlacement === 'left' && headerNode
                ),
                resolveWrappedSlotWithProps(
                    headerExtraSlot,
                    { collapsed },
                    (children) =>
                        h(
                            'div',
                            {
                                class: `${mergedClsPrefix}-collapse-item__header-extra`,
                                onClick: this.handleClick,
                            },
                            children
                        )
                )
            ),
            h(
                NCollapseItemContent,
                {
                    clsPrefix: mergedClsPrefix,
                    displayDirective: mergedDisplayDirective,
                    show: !collapsed,
                },
                $slots
            )
        );
    },
});
