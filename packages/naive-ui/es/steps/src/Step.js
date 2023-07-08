import { h, defineComponent, computed, inject } from 'vue';
import {
    CheckmarkIcon as FinishedIcon,
    CloseIcon as ErrorIcon,
} from '../../_internal/icons';
import { NIconSwitchTransition, NBaseIcon } from '../../_internal';
import {
    call,
    createKey,
    resolveSlot,
    resolveWrappedSlot,
    throwError,
} from '../../_utils';
import { stepsInjectionKey } from './Steps';
import { useConfig, useThemeClass } from '../../_mixins';
export const stepProps = {
    status: String,
    title: String,
    description: String,
    disabled: Boolean,
    internalIndex: {
        type: Number,
        default: 0,
    },
};
export default defineComponent({
    name: 'Step',
    props: stepProps,
    setup(props) {
        const NSteps = inject(stepsInjectionKey, null);
        if (!NSteps)
            throwError('step', '`n-step` must be placed inside `n-steps`.');
        const { inlineThemeDisabled } = useConfig();
        const {
            props: stepsProps,
            mergedThemeRef,
            mergedClsPrefixRef,
            stepsSlots,
        } = NSteps;
        const verticalRef = computed(() => {
            return stepsProps.vertical;
        });
        const mergedStatusRef = computed(() => {
            const { status } = props;
            if (status) {
                return status;
            } else {
                const { internalIndex } = props;
                const { current } = stepsProps;
                if (current === void 0) return 'process';
                if (internalIndex < current) {
                    return 'finish';
                } else if (internalIndex === current) {
                    return stepsProps.status || 'process';
                } else if (internalIndex > current) {
                    return 'wait';
                }
            }
            return 'process';
        });
        const cssVarsRef = computed(() => {
            const { value: status } = mergedStatusRef;
            const { size } = stepsProps;
            const {
                common: { cubicBezierEaseInOut },
                self: {
                    stepHeaderFontWeight,
                    [createKey('stepHeaderFontSize', size)]: stepHeaderFontSize,
                    [createKey('indicatorIndexFontSize', size)]:
                        indicatorIndexFontSize,
                    [createKey('indicatorSize', size)]: indicatorSize,
                    [createKey('indicatorIconSize', size)]: indicatorIconSize,
                    [createKey('indicatorTextColor', status)]:
                        indicatorTextColor,
                    [createKey('indicatorBorderColor', status)]:
                        indicatorBorderColor,
                    [createKey('headerTextColor', status)]: headerTextColor,
                    [createKey('splitorColor', status)]: splitorColor,
                    [createKey('indicatorColor', status)]: indicatorColor,
                    [createKey('descriptionTextColor', status)]:
                        descriptionTextColor,
                },
            } = mergedThemeRef.value;
            return {
                '--n-bezier': cubicBezierEaseInOut,
                '--n-description-text-color': descriptionTextColor,
                '--n-header-text-color': headerTextColor,
                '--n-indicator-border-color': indicatorBorderColor,
                '--n-indicator-color': indicatorColor,
                '--n-indicator-icon-size': indicatorIconSize,
                '--n-indicator-index-font-size': indicatorIndexFontSize,
                '--n-indicator-size': indicatorSize,
                '--n-indicator-text-color': indicatorTextColor,
                '--n-splitor-color': splitorColor,
                '--n-step-header-font-size': stepHeaderFontSize,
                '--n-step-header-font-weight': stepHeaderFontWeight,
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? useThemeClass(
                  'step',
                  computed(() => {
                      const { value: status } = mergedStatusRef;
                      const { size } = stepsProps;
                      return `${status[0]}${size[0]}`;
                  }),
                  cssVarsRef,
                  stepsProps
              )
            : void 0;
        const handleStepClick = computed(() => {
            if (props.disabled) return void 0;
            const { onUpdateCurrent, 'onUpdate:current': _onUpdateCurrent } =
                stepsProps;
            return onUpdateCurrent || _onUpdateCurrent
                ? () => {
                      if (onUpdateCurrent) {
                          call(onUpdateCurrent, props.internalIndex);
                      }
                      if (_onUpdateCurrent) {
                          call(_onUpdateCurrent, props.internalIndex);
                      }
                  }
                : void 0;
        });
        return {
            stepsSlots,
            mergedClsPrefix: mergedClsPrefixRef,
            vertical: verticalRef,
            mergedStatus: mergedStatusRef,
            handleStepClick,
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
        const { mergedClsPrefix, onRender, handleStepClick, disabled } = this;
        const descriptionNode = resolveWrappedSlot(
            this.$slots.default,
            (children) => {
                const mergedDescription = children || this.description;
                if (mergedDescription) {
                    return h(
                        'div',
                        {
                            class: `${mergedClsPrefix}-step-content__description`,
                        },
                        mergedDescription
                    );
                }
                return null;
            }
        );
        onRender === null || onRender === void 0 ? void 0 : onRender();
        return h(
            'div',
            {
                class: [
                    `${mergedClsPrefix}-step`,
                    disabled && `${mergedClsPrefix}-step--disabled`,
                    !disabled &&
                        handleStepClick &&
                        `${mergedClsPrefix}-step--clickable`,
                    this.themeClass,
                    descriptionNode &&
                        `${mergedClsPrefix}-step--show-description`,
                    `${mergedClsPrefix}-step--${this.mergedStatus}-status`,
                ],
                style: this.cssVars,
                onClick: handleStepClick,
            },
            h(
                'div',
                { class: `${mergedClsPrefix}-step-indicator` },
                h(
                    'div',
                    { class: `${mergedClsPrefix}-step-indicator-slot` },
                    h(NIconSwitchTransition, null, {
                        default: () => {
                            return resolveWrappedSlot(
                                this.$slots.icon,
                                (icon) => {
                                    const { mergedStatus, stepsSlots } = this;
                                    return !(
                                        mergedStatus === 'finish' ||
                                        mergedStatus === 'error'
                                    )
                                        ? icon ||
                                              h(
                                                  'div',
                                                  {
                                                      key: this.internalIndex,
                                                      class: `${mergedClsPrefix}-step-indicator-slot__index`,
                                                  },
                                                  this.internalIndex
                                              )
                                        : mergedStatus === 'finish'
                                        ? h(
                                              NBaseIcon,
                                              {
                                                  clsPrefix: mergedClsPrefix,
                                                  key: 'finish',
                                              },
                                              {
                                                  default: () =>
                                                      resolveSlot(
                                                          stepsSlots[
                                                              'finish-icon'
                                                          ],
                                                          () => [
                                                              h(
                                                                  FinishedIcon,
                                                                  null
                                                              ),
                                                          ]
                                                      ),
                                              }
                                          )
                                        : mergedStatus === 'error'
                                        ? h(
                                              NBaseIcon,
                                              {
                                                  clsPrefix: mergedClsPrefix,
                                                  key: 'error',
                                              },
                                              {
                                                  default: () =>
                                                      resolveSlot(
                                                          stepsSlots[
                                                              'error-icon'
                                                          ],
                                                          () => [
                                                              h(
                                                                  ErrorIcon,
                                                                  null
                                                              ),
                                                          ]
                                                      ),
                                              }
                                          )
                                        : null;
                                }
                            );
                        },
                    })
                ),
                this.vertical
                    ? h('div', { class: `${mergedClsPrefix}-step-splitor` })
                    : null
            ),
            h(
                'div',
                { class: `${mergedClsPrefix}-step-content` },
                h(
                    'div',
                    { class: `${mergedClsPrefix}-step-content-header` },
                    h(
                        'div',
                        {
                            class: `${mergedClsPrefix}-step-content-header__title`,
                        },
                        resolveSlot(this.$slots.title, () => [this.title])
                    ),
                    !this.vertical
                        ? h('div', { class: `${mergedClsPrefix}-step-splitor` })
                        : null
                ),
                descriptionNode
            )
        );
    },
});
