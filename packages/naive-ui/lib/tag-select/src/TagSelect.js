var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.tagInputEmits = exports.tagSelectProps = void 0;
const vue_1 = require('vue');
const utils_1 = require('./utils');
const core_1 = require('@vueuse/core');
const space_1 = require('../../space');
const index_cssr_1 = __importDefault(require('./styles/index.cssr'));
const _mixins_1 = require('../../_mixins');
const interface_1 = require('./interface');
const styles_1 = require('../styles');
const use_control_1 = require('../../_mixins/use-control');
exports.tagSelectProps = Object.assign(
    Object.assign({}, _mixins_1.useTheme.props),
    {
        spaceProps: Object,
        modelValue: {
            type: String,
            default: void 0,
        },
        expandable: {
            type: Boolean,
            default: false,
        },
    }
);
exports.tagInputEmits = {
    'update:modelValue': (value) => value || Array.isArray(value),
    change: (value) => value,
};
exports.default = (0, vue_1.defineComponent)({
    name: 'TagSelect',
    props: exports.tagSelectProps,
    emits: exports.tagInputEmits,
    setup(props, { emit }) {
        const valueRef = (0, vue_1.ref)();
        const value = (0, use_control_1.useAutoControl)(
            valueRef,
            props,
            'modelValue',
            emit
        );
        const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props);
        const themeRef = (0, _mixins_1.useTheme)(
            'TagSelect',
            '-tag-select',
            index_cssr_1.default,
            styles_1.tagSelectLight,
            props,
            mergedClsPrefixRef
        );
        (0, vue_1.provide)(interface_1.tagSelectInjectionKey, {
            mergedThemeRef: themeRef,
            mergedClsPrefixRef,
        });
        (0, vue_1.provide)(utils_1.tagSelectValue, value);
        (0, vue_1.provide)(utils_1.setTagSelectValue, ($value) => {
            value.value = $value;
            emit('change', $value);
        });
        const expand = (0, vue_1.ref)(false);
        const tagSelectRef = (0, vue_1.ref)();
        const spaceRef = (0, vue_1.ref)();
        const _itemHeight = (0, vue_1.ref)();
        const hideTags = (0, vue_1.ref)(false);
        function getState() {
            const w1 = tagSelectRef.value;
            const w2 = spaceRef.value;
            if (!expand.value) {
                (0, vue_1.nextTick)(() => {
                    if (w2.$el.offsetHeight > w1.offsetHeight * 2) {
                        hideTags.value = true;
                    } else {
                        hideTags.value = false;
                    }
                });
            } else {
                (0, vue_1.nextTick)(() => {
                    if (w1.offsetHeight === _itemHeight.value) {
                        hideTags.value = false;
                        expand.value = !expand.value;
                    }
                });
            }
        }
        const tagSelectRef_width = (0, core_1.useElementSize)(
            tagSelectRef
        ).width;
        (0, vue_1.watch)(tagSelectRef_width, () => {
            getState();
        });
        (0, vue_1.onMounted)(getState);
        const cssVarsRef = (0, vue_1.computed)(() => {
            const {
                self: { tagSelectHandleColor, itemHeight },
            } = themeRef.value;
            _itemHeight.value = Number(itemHeight.split('px', 1)[0]);
            return {
                '--n-tag-select-item-height': itemHeight,
                '--n-tag-select-handle-text-color': tagSelectHandleColor,
            };
        });
        return {
            value,
            expand,
            hideTags,
            tagSelectRef,
            spaceRef,
            getState,
            mergedClsPrefix: mergedClsPrefixRef,
            cssVars: cssVarsRef,
        };
    },
    render() {
        const { mergedClsPrefix } = this;
        return (0, vue_1.h)(
            'div',
            {
                ref: 'tagSelectRef',
                class: [
                    `${mergedClsPrefix}-tag-select`,
                    {
                        [`${mergedClsPrefix}-tag-select-expand`]:
                            this.expand && this.expandable,
                    },
                ],
                style: this.cssVars,
            },
            (0, vue_1.h)(
                space_1.NSpace,
                Object.assign(
                    {
                        ref: 'spaceRef',
                        class: `${mergedClsPrefix}-tag-select-space`,
                        align: 'center',
                    },
                    this.spaceProps
                ),
                () => {
                    var _a, _b;
                    return (_b = (_a = this.$slots).default) === null ||
                        _b === void 0
                        ? void 0
                        : _b.call(_a);
                }
            ),
            this.expandable && this.hideTags
                ? (0, vue_1.h)(
                      'div',
                      {
                          class: `${mergedClsPrefix}-tag-select-handle`,
                          onClick: () => {
                              this.expand = !this.expand;
                              this.getState();
                          },
                      },
                      !this.expand
                          ? (0, vue_1.h)(
                                'div',
                                {
                                    ref: 'handleTextRef1',
                                    class: `${mergedClsPrefix}-tag-select-handle-text`,
                                },
                                '\u2026\u5C55\u5F00'
                            )
                          : (0, vue_1.h)(
                                'div',
                                {
                                    ref: 'handleTextRef2',
                                    class: `${mergedClsPrefix}-tag-select-handle-text`,
                                },
                                '\u6536\u8D77'
                            )
                  )
                : null
        );
    },
});
