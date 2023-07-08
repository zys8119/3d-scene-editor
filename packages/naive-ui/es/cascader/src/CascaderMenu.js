import {
    h,
    ref,
    defineComponent,
    inject,
    Transition,
    withDirectives,
} from 'vue';
import { clickoutside } from 'vdirs';
import FocusDetector from '../../_internal/focus-detector';
import { resolveSlot, resolveWrappedSlot, useOnResize } from '../../_utils';
import { NEmpty } from '../../empty';
import { NBaseMenuMask } from '../../_internal';
import NCascaderSubmenu from './CascaderSubmenu';
import { cascaderInjectionKey } from './interface';
export default defineComponent({
    name: 'NCascaderMenu',
    props: {
        value: [String, Number, Array],
        placement: {
            type: String,
            default: 'bottom-start',
        },
        show: Boolean,
        menuModel: {
            type: Array,
            required: true,
        },
        loading: Boolean,
        onFocus: {
            type: Function,
            required: true,
        },
        onBlur: {
            type: Function,
            required: true,
        },
        onKeydown: {
            type: Function,
            required: true,
        },
        onMousedown: {
            type: Function,
            required: true,
        },
        onTabout: {
            type: Function,
            required: true,
        },
    },
    setup(props) {
        const {
            localeRef,
            isMountedRef,
            mergedClsPrefixRef,
            syncCascaderMenuPosition,
            handleCascaderMenuClickOutside,
            mergedThemeRef,
        } = inject(cascaderInjectionKey);
        const submenuInstRefs = [];
        const maskInstRef = ref(null);
        const selfElRef = ref(null);
        function handleResize() {
            syncCascaderMenuPosition();
        }
        useOnResize(selfElRef, handleResize);
        function showErrorMessage(label) {
            var _a;
            const {
                value: { loadingRequiredMessage },
            } = localeRef;
            (_a = maskInstRef.value) === null || _a === void 0
                ? void 0
                : _a.showOnce(loadingRequiredMessage(label));
        }
        function handleClickOutside(e) {
            handleCascaderMenuClickOutside(e);
        }
        function handleFocusin(e) {
            const { value: selfEl } = selfElRef;
            if (!selfEl) return;
            if (!selfEl.contains(e.relatedTarget)) {
                props.onFocus(e);
            }
        }
        function handleFocusout(e) {
            const { value: selfEl } = selfElRef;
            if (!selfEl) return;
            if (!selfEl.contains(e.relatedTarget)) {
                props.onBlur(e);
            }
        }
        const exposedRef = {
            scroll(depth, index, elSize) {
                const submenuInst = submenuInstRefs[depth];
                if (submenuInst) {
                    submenuInst.scroll(index, elSize);
                }
            },
            showErrorMessage,
        };
        return Object.assign(
            {
                isMounted: isMountedRef,
                mergedClsPrefix: mergedClsPrefixRef,
                selfElRef,
                submenuInstRefs,
                maskInstRef,
                mergedTheme: mergedThemeRef,
                handleFocusin,
                handleFocusout,
                handleClickOutside,
            },
            exposedRef
        );
    },
    render() {
        const { submenuInstRefs, mergedClsPrefix, mergedTheme } = this;
        return h(
            Transition,
            { name: 'fade-in-scale-up-transition', appear: this.isMounted },
            {
                default: () => {
                    if (!this.show) return null;
                    return withDirectives(
                        h(
                            'div',
                            {
                                tabindex: '0',
                                ref: 'selfElRef',
                                class: `${mergedClsPrefix}-cascader-menu`,
                                onMousedown: this.onMousedown,
                                onFocusin: this.handleFocusin,
                                onFocusout: this.handleFocusout,
                                onKeydown: this.onKeydown,
                            },
                            this.menuModel[0].length
                                ? h(
                                      'div',
                                      {
                                          class: `${mergedClsPrefix}-cascader-submenu-wrapper`,
                                      },
                                      this.menuModel.map(
                                          (submenuOptions, index) =>
                                              h(NCascaderSubmenu, {
                                                  ref: (instance) => {
                                                      if (instance) {
                                                          submenuInstRefs[
                                                              index
                                                          ] = instance;
                                                      }
                                                  },
                                                  key: index,
                                                  tmNodes: submenuOptions,
                                                  depth: index + 1,
                                              })
                                      ),
                                      h(NBaseMenuMask, {
                                          clsPrefix: mergedClsPrefix,
                                          ref: 'maskInstRef',
                                      })
                                  )
                                : h(
                                      'div',
                                      {
                                          class: `${mergedClsPrefix}-cascader-menu__empty`,
                                      },
                                      resolveSlot(this.$slots.empty, () => [
                                          h(NEmpty, {
                                              theme: mergedTheme.peers.Empty,
                                              themeOverrides:
                                                  mergedTheme.peerOverrides
                                                      .Empty,
                                          }),
                                      ])
                                  ),
                            resolveWrappedSlot(
                                this.$slots.action,
                                (children) =>
                                    children &&
                                    h(
                                        'div',
                                        {
                                            class: `${mergedClsPrefix}-cascader-menu-action`,
                                            'data-action': true,
                                        },
                                        children
                                    )
                            ),
                            h(FocusDetector, { onFocus: this.onTabout })
                        ),
                        [
                            [
                                clickoutside,
                                this.handleClickOutside,
                                void 0,
                                { capture: true },
                            ],
                        ]
                    );
                },
            }
        );
    },
});
