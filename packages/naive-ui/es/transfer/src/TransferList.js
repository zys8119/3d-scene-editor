import { h, defineComponent, ref, inject } from 'vue';
import { VirtualList } from 'vueuc';
import { NEmpty } from '../../empty';
import { NScrollbar } from '../../_internal';
import { transferInjectionKey } from './interface';
import NTransferListItem from './TransferListItem';
export default defineComponent({
    name: 'TransferList',
    props: {
        virtualScroll: {
            type: Boolean,
            required: true,
        },
        itemSize: {
            type: Number,
            required: true,
        },
        options: {
            type: Array,
            required: true,
        },
        disabled: {
            type: Boolean,
            required: true,
        },
        source: Boolean,
    },
    setup() {
        const { mergedThemeRef, mergedClsPrefixRef } =
            inject(transferInjectionKey);
        const scrollerInstRef = ref(null);
        const vlInstRef = ref(null);
        function syncVLScroller() {
            var _a;
            (_a = scrollerInstRef.value) === null || _a === void 0
                ? void 0
                : _a.sync();
        }
        function scrollContainer() {
            const { value } = vlInstRef;
            if (!value) return null;
            const { listElRef } = value;
            return listElRef;
        }
        function scrollContent() {
            const { value } = vlInstRef;
            if (!value) return null;
            const { itemsElRef } = value;
            return itemsElRef;
        }
        return {
            mergedTheme: mergedThemeRef,
            mergedClsPrefix: mergedClsPrefixRef,
            scrollerInstRef,
            vlInstRef,
            syncVLScroller,
            scrollContainer,
            scrollContent,
        };
    },
    render() {
        const { mergedTheme, options } = this;
        if (options.length === 0) {
            return h(NEmpty, {
                theme: mergedTheme.peers.Empty,
                themeOverrides: mergedTheme.peerOverrides.Empty,
            });
        }
        const {
            mergedClsPrefix,
            virtualScroll,
            source,
            disabled,
            syncVLScroller,
        } = this;
        return h(
            NScrollbar,
            {
                ref: 'scrollerInstRef',
                theme: mergedTheme.peers.Scrollbar,
                themeOverrides: mergedTheme.peerOverrides.Scrollbar,
                container: virtualScroll ? this.scrollContainer : void 0,
                content: virtualScroll ? this.scrollContent : void 0,
            },
            {
                default: () =>
                    virtualScroll
                        ? h(
                              VirtualList,
                              {
                                  ref: 'vlInstRef',
                                  style: { height: '100%' },
                                  class: `${mergedClsPrefix}-transfer-list-content`,
                                  items: this.options,
                                  itemSize: this.itemSize,
                                  showScrollbar: false,
                                  onResize: syncVLScroller,
                                  onScroll: syncVLScroller,
                                  keyField: 'value',
                              },
                              {
                                  default: ({ item }) => {
                                      const {
                                          source: source2,
                                          disabled: disabled2,
                                      } = this;
                                      return h(NTransferListItem, {
                                          source: source2,
                                          key: item.value,
                                          value: item.value,
                                          disabled: item.disabled || disabled2,
                                          label: item.label,
                                          option: item,
                                      });
                                  },
                              }
                          )
                        : h(
                              'div',
                              {
                                  class: `${mergedClsPrefix}-transfer-list-content`,
                              },
                              options.map((option) =>
                                  h(NTransferListItem, {
                                      source,
                                      key: option.value,
                                      value: option.value,
                                      disabled: option.disabled || disabled,
                                      label: option.label,
                                      option,
                                  })
                              )
                          ),
            }
        );
    },
});
