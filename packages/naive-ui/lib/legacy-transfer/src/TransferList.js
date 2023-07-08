var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
const vue_1 = require('vue');
const vueuc_1 = require('vueuc');
const empty_1 = require('../../empty');
const _internal_1 = require('../../_internal');
const interface_1 = require('./interface');
const TransferListItem_1 = __importDefault(require('./TransferListItem'));
exports.default = (0, vue_1.defineComponent)({
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
        isMounted: {
            type: Boolean,
            required: true,
        },
        isInputing: {
            type: Boolean,
            required: true,
        },
        source: {
            type: Boolean,
            default: false,
        },
    },
    setup() {
        const { mergedThemeRef, mergedClsPrefixRef } = (0, vue_1.inject)(
            interface_1.transferInjectionKey
        );
        const scrollerInstRef = (0, vue_1.ref)(null);
        const vlInstRef = (0, vue_1.ref)(null);
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
        const { mergedTheme, mergedClsPrefix, virtualScroll, syncVLScroller } =
            this;
        return (0, vue_1.h)(
            vue_1.Fragment,
            null,
            (0, vue_1.h)(
                _internal_1.NScrollbar,
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
                            ? (0, vue_1.h)(
                                  vueuc_1.VirtualList,
                                  {
                                      ref: 'vlInstRef',
                                      style: { height: '100%' },
                                      class: `${mergedClsPrefix}-legacy-transfer-list-content`,
                                      items: this.options,
                                      itemSize: this.itemSize,
                                      showScrollbar: false,
                                      onResize: syncVLScroller,
                                      onScroll: syncVLScroller,
                                      keyField: 'value',
                                  },
                                  {
                                      default: ({ item }) => {
                                          const { source, disabled } = this;
                                          return (0, vue_1.h)(
                                              TransferListItem_1.default,
                                              {
                                                  source,
                                                  key: item.value,
                                                  value: item.value,
                                                  disabled:
                                                      item.disabled || disabled,
                                                  label: item.label,
                                              }
                                          );
                                      },
                                  }
                              )
                            : (0, vue_1.h)(
                                  'div',
                                  {
                                      class: `${mergedClsPrefix}-legacy-transfer-list-content`,
                                  },
                                  (0, vue_1.h)(
                                      vue_1.TransitionGroup,
                                      {
                                          name: 'item',
                                          appear: this.isMounted,
                                          css: !this.isInputing,
                                      },
                                      {
                                          default: () => {
                                              const { source, disabled } = this;
                                              return this.options.map(
                                                  (option) =>
                                                      (0, vue_1.h)(
                                                          TransferListItem_1.default,
                                                          {
                                                              source,
                                                              key: option.value,
                                                              value: option.value,
                                                              disabled:
                                                                  option.disabled ||
                                                                  disabled,
                                                              label: option.label,
                                                          }
                                                      )
                                              );
                                          },
                                      }
                                  )
                              ),
                }
            ),
            (0, vue_1.h)(
                vue_1.Transition,
                {
                    name: 'fade-in-transition',
                    appear: this.isMounted,
                    css: !this.isInputing,
                },
                {
                    default: () =>
                        this.options.length
                            ? null
                            : (0, vue_1.h)(empty_1.NEmpty, {
                                  theme: mergedTheme.peers.Empty,
                                  themeOverrides:
                                      mergedTheme.peerOverrides.Empty,
                              }),
                }
            )
        );
    },
});
