import { h, defineComponent, Transition, withDirectives, ref } from 'vue';
import { VBinder, VTarget, VFollower } from 'vueuc';
import { clickoutside } from 'vdirs';
import { getPreciseEventTarget } from 'seemly';
import MonthPanel from './month';
export default defineComponent({
    props: {
        mergedClsPrefix: {
            type: String,
            required: true,
        },
        value: Number,
        monthBeforeYear: {
            type: Boolean,
            required: true,
        },
        calendarMonth: {
            type: String,
            required: true,
        },
        calendarYear: {
            type: String,
            required: true,
        },
        onUpdateValue: {
            type: Function,
            required: true,
        },
    },
    setup() {
        const triggerRef = ref(null);
        const monthPanelRef = ref(null);
        const showRef = ref(false);
        function handleClickOutside(e) {
            var _a;
            if (
                showRef.value &&
                !((_a = triggerRef.value) === null || _a === void 0
                    ? void 0
                    : _a.contains(getPreciseEventTarget(e)))
            ) {
                showRef.value = false;
            }
        }
        function handleHeaderClick() {
            showRef.value = !showRef.value;
        }
        return {
            show: showRef,
            triggerRef,
            monthPanelRef,
            handleHeaderClick,
            handleClickOutside,
        };
    },
    render() {
        const { handleClickOutside, mergedClsPrefix } = this;
        return h(
            'div',
            {
                class: `${mergedClsPrefix}-date-panel-month__month-year`,
                ref: 'triggerRef',
            },
            h(VBinder, null, {
                default: () => [
                    h(VTarget, null, {
                        default: () =>
                            h(
                                'div',
                                {
                                    class: [
                                        `${mergedClsPrefix}-date-panel-month__text`,
                                        this.show &&
                                            `${mergedClsPrefix}-date-panel-month__text--active`,
                                    ],
                                    onClick: this.handleHeaderClick,
                                },
                                this.monthBeforeYear
                                    ? [
                                          this.calendarMonth,
                                          ' ',
                                          this.calendarYear,
                                      ]
                                    : [
                                          this.calendarYear,
                                          ' ',
                                          this.calendarMonth,
                                      ]
                            ),
                    }),
                    h(
                        VFollower,
                        { show: this.show, teleportDisabled: true },
                        {
                            default: () =>
                                h(
                                    Transition,
                                    {
                                        name: 'fade-in-scale-up-transition',
                                        appear: true,
                                    },
                                    {
                                        default: () =>
                                            this.show
                                                ? withDirectives(
                                                      h(MonthPanel, {
                                                          ref: 'monthPanelRef',
                                                          onUpdateValue:
                                                              this
                                                                  .onUpdateValue,
                                                          actions: [],
                                                          type: 'month',
                                                          key: 'month',
                                                          useAsQuickJump: true,
                                                          value: this.value,
                                                      }),
                                                      [
                                                          [
                                                              clickoutside,
                                                              handleClickOutside,
                                                              void 0,
                                                              { capture: true },
                                                          ],
                                                      ]
                                                  )
                                                : null,
                                    }
                                ),
                        }
                    ),
                ],
            })
        );
    },
});
