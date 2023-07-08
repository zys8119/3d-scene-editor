Object.defineProperty(exports, '__esModule', { value: true });
exports.stepProps = void 0;
const vue_1 = require('vue');
const icons_1 = require('../../_internal/icons');
const _internal_1 = require('../../_internal');
const _utils_1 = require('../../_utils');
const Steps_1 = require('./Steps');
const _mixins_1 = require('../../_mixins');
exports.stepProps = {
    status: String,
    title: String,
    description: String,
    disabled: Boolean,
    internalIndex: {
        type: Number,
        default: 0,
    },
};
exports.default = (0, vue_1.defineComponent)({
    name: 'Step',
    props: exports.stepProps,
    setup(props) {
        const NSteps = (0, vue_1.inject)(Steps_1.stepsInjectionKey, null);
        if (!NSteps)
            (0, _utils_1.throwError)(
                'step',
                '`n-step` must be placed inside `n-steps`.'
            );
        const { inlineThemeDisabled } = (0, _mixins_1.useConfig)();
        const {
            props: stepsProps,
            mergedThemeRef,
            mergedClsPrefixRef,
            stepsSlots,
        } = NSteps;
        const verticalRef = (0, vue_1.computed)(() => {
            return stepsProps.vertical;
        });
        const mergedStatusRef = (0, vue_1.computed)(() => {
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
        const cssVarsRef = (0, vue_1.computed)(() => {
            const { value: status } = mergedStatusRef;
            const { size } = stepsProps;
            const {
                common: { cubicBezierEaseInOut },
                self: {
                    stepHeaderFontWeight,
                    [(0, _utils_1.createKey)('stepHeaderFontSize', size)]:
                        stepHeaderFontSize,
                    [(0, _utils_1.createKey)('indicatorIndexFontSize', size)]:
                        indicatorIndexFontSize,
                    [(0, _utils_1.createKey)('indicatorSize', size)]:
                        indicatorSize,
                    [(0, _utils_1.createKey)('indicatorIconSize', size)]:
                        indicatorIconSize,
                    [(0, _utils_1.createKey)('indicatorTextColor', status)]:
                        indicatorTextColor,
                    [(0, _utils_1.createKey)('indicatorBorderColor', status)]:
                        indicatorBorderColor,
                    [(0, _utils_1.createKey)('headerTextColor', status)]:
                        headerTextColor,
                    [(0, _utils_1.createKey)('splitorColor', status)]:
                        splitorColor,
                    [(0, _utils_1.createKey)('indicatorColor', status)]:
                        indicatorColor,
                    [(0, _utils_1.createKey)('descriptionTextColor', status)]:
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
            ? (0, _mixins_1.useThemeClass)(
                  'step',
                  (0, vue_1.computed)(() => {
                      const { value: status } = mergedStatusRef;
                      const { size } = stepsProps;
                      return `${status[0]}${size[0]}`;
                  }),
                  cssVarsRef,
                  stepsProps
              )
            : void 0;
        const handleStepClick = (0, vue_1.computed)(() => {
            if (props.disabled) return void 0;
            const { onUpdateCurrent, 'onUpdate:current': _onUpdateCurrent } =
                stepsProps;
            return onUpdateCurrent || _onUpdateCurrent
                ? () => {
                      if (onUpdateCurrent) {
                          (0, _utils_1.call)(
                              onUpdateCurrent,
                              props.internalIndex
                          );
                      }
                      if (_onUpdateCurrent) {
                          (0, _utils_1.call)(
                              _onUpdateCurrent,
                              props.internalIndex
                          );
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
        const descriptionNode = (0, _utils_1.resolveWrappedSlot)(
            this.$slots.default,
            (children) => {
                const mergedDescription = children || this.description;
                if (mergedDescription) {
                    return (0, vue_1.h)(
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
        return (0, vue_1.h)(
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
            (0, vue_1.h)(
                'div',
                { class: `${mergedClsPrefix}-step-indicator` },
                (0, vue_1.h)(
                    'div',
                    { class: `${mergedClsPrefix}-step-indicator-slot` },
                    (0, vue_1.h)(_internal_1.NIconSwitchTransition, null, {
                        default: () => {
                            return (0, _utils_1.resolveWrappedSlot)(
                                this.$slots.icon,
                                (icon) => {
                                    const { mergedStatus, stepsSlots } = this;
                                    return !(
                                        mergedStatus === 'finish' ||
                                        mergedStatus === 'error'
                                    )
                                        ? icon ||
                                              (0, vue_1.h)(
                                                  'div',
                                                  {
                                                      key: this.internalIndex,
                                                      class: `${mergedClsPrefix}-step-indicator-slot__index`,
                                                  },
                                                  this.internalIndex
                                              )
                                        : mergedStatus === 'finish'
                                        ? (0, vue_1.h)(
                                              _internal_1.NBaseIcon,
                                              {
                                                  clsPrefix: mergedClsPrefix,
                                                  key: 'finish',
                                              },
                                              {
                                                  default: () =>
                                                      (0, _utils_1.resolveSlot)(
                                                          stepsSlots[
                                                              'finish-icon'
                                                          ],
                                                          () => [
                                                              (0, vue_1.h)(
                                                                  icons_1.CheckmarkIcon,
                                                                  null
                                                              ),
                                                          ]
                                                      ),
                                              }
                                          )
                                        : mergedStatus === 'error'
                                        ? (0, vue_1.h)(
                                              _internal_1.NBaseIcon,
                                              {
                                                  clsPrefix: mergedClsPrefix,
                                                  key: 'error',
                                              },
                                              {
                                                  default: () =>
                                                      (0, _utils_1.resolveSlot)(
                                                          stepsSlots[
                                                              'error-icon'
                                                          ],
                                                          () => [
                                                              (0, vue_1.h)(
                                                                  icons_1.CloseIcon,
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
                    ? (0, vue_1.h)('div', {
                          class: `${mergedClsPrefix}-step-splitor`,
                      })
                    : null
            ),
            (0, vue_1.h)(
                'div',
                { class: `${mergedClsPrefix}-step-content` },
                (0, vue_1.h)(
                    'div',
                    { class: `${mergedClsPrefix}-step-content-header` },
                    (0, vue_1.h)(
                        'div',
                        {
                            class: `${mergedClsPrefix}-step-content-header__title`,
                        },
                        (0, _utils_1.resolveSlot)(this.$slots.title, () => [
                            this.title,
                        ])
                    ),
                    !this.vertical
                        ? (0, vue_1.h)('div', {
                              class: `${mergedClsPrefix}-step-splitor`,
                          })
                        : null
                ),
                descriptionNode
            )
        );
    },
});
