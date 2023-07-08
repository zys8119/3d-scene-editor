import {
    h,
    defineComponent,
    nextTick,
    onMounted,
    provide,
    ref,
    watch,
    computed,
} from 'vue';
import { setTagSelectValue, tagSelectValue } from './utils';
import { useElementSize } from '@vueuse/core';
import { NSpace } from '../../space';
import style from './styles/index.cssr';
import { useConfig, useTheme } from '../../_mixins';
import { tagSelectInjectionKey } from './interface';
import { tagSelectLight } from '../styles';
import { useAutoControl } from '../../_mixins/use-control';
export const tagSelectProps = Object.assign(Object.assign({}, useTheme.props), {
    spaceProps: Object,
    modelValue: {
        type: String,
        default: void 0,
    },
    expandable: {
        type: Boolean,
        default: false,
    },
});
export const tagInputEmits = {
    'update:modelValue': (value) => value || Array.isArray(value),
    change: (value) => value,
};
export default defineComponent({
    name: 'TagSelect',
    props: tagSelectProps,
    emits: tagInputEmits,
    setup(props, { emit }) {
        const valueRef = ref();
        const value = useAutoControl(valueRef, props, 'modelValue', emit);
        const { mergedClsPrefixRef } = useConfig(props);
        const themeRef = useTheme(
            'TagSelect',
            '-tag-select',
            style,
            tagSelectLight,
            props,
            mergedClsPrefixRef
        );
        provide(tagSelectInjectionKey, {
            mergedThemeRef: themeRef,
            mergedClsPrefixRef,
        });
        provide(tagSelectValue, value);
        provide(setTagSelectValue, ($value) => {
            value.value = $value;
            emit('change', $value);
        });
        const expand = ref(false);
        const tagSelectRef = ref();
        const spaceRef = ref();
        const _itemHeight = ref();
        const hideTags = ref(false);
        function getState() {
            const w1 = tagSelectRef.value;
            const w2 = spaceRef.value;
            if (!expand.value) {
                nextTick(() => {
                    if (w2.$el.offsetHeight > w1.offsetHeight * 2) {
                        hideTags.value = true;
                    } else {
                        hideTags.value = false;
                    }
                });
            } else {
                nextTick(() => {
                    if (w1.offsetHeight === _itemHeight.value) {
                        hideTags.value = false;
                        expand.value = !expand.value;
                    }
                });
            }
        }
        const tagSelectRef_width = useElementSize(tagSelectRef).width;
        watch(tagSelectRef_width, () => {
            getState();
        });
        onMounted(getState);
        const cssVarsRef = computed(() => {
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
        return h(
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
            h(
                NSpace,
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
                ? h(
                      'div',
                      {
                          class: `${mergedClsPrefix}-tag-select-handle`,
                          onClick: () => {
                              this.expand = !this.expand;
                              this.getState();
                          },
                      },
                      !this.expand
                          ? h(
                                'div',
                                {
                                    ref: 'handleTextRef1',
                                    class: `${mergedClsPrefix}-tag-select-handle-text`,
                                },
                                '\u2026\u5C55\u5F00'
                            )
                          : h(
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
