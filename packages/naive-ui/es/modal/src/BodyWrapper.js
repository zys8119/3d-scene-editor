import {
    h,
    nextTick,
    toRef,
    watch,
    ref,
    inject,
    defineComponent,
    provide,
    withDirectives,
    vShow,
    Transition,
    mergeProps,
    cloneVNode,
    computed,
} from 'vue';
import { clickoutside } from 'vdirs';
import { VFocusTrap } from 'vueuc';
import { dialogPropKeys } from '../../dialog/src/dialogProps';
import { NDialog } from '../../dialog/src/Dialog';
import { cardBasePropKeys } from '../../card/src/Card';
import { drawerBodyInjectionKey } from '../../drawer/src/interface';
import { popoverBodyInjectionKey } from '../../popover/src/interface';
import { NScrollbar } from '../../_internal';
import { NCard } from '../../card';
import { getFirstSlotVNode, keep, useLockHtmlScroll, warn } from '../../_utils';
import { modalBodyInjectionKey, modalInjectionKey } from './interface';
import { presetProps } from './presetProps';
export default defineComponent({
    name: 'ModalBody',
    inheritAttrs: false,
    props: Object.assign(
        Object.assign(
            {
                show: {
                    type: Boolean,
                    required: true,
                },
                preset: String,
                displayDirective: {
                    type: String,
                    required: true,
                },
                trapFocus: {
                    type: Boolean,
                    default: true,
                },
                autoFocus: {
                    type: Boolean,
                    default: true,
                },
                blockScroll: Boolean,
            },
            presetProps
        ),
        {
            renderMask: Function,
            onClickoutside: Function,
            onBeforeLeave: {
                type: Function,
                required: true,
            },
            onAfterLeave: {
                type: Function,
                required: true,
            },
            onPositiveClick: {
                type: Function,
                required: true,
            },
            onNegativeClick: {
                type: Function,
                required: true,
            },
            onClose: {
                type: Function,
                required: true,
            },
            onAfterEnter: Function,
            onEsc: Function,
        }
    ),
    setup(props) {
        const bodyRef = ref(null);
        const scrollbarRef = ref(null);
        const displayedRef = ref(props.show);
        const transformOriginXRef = ref(null);
        const transformOriginYRef = ref(null);
        watch(toRef(props, 'show'), (value) => {
            if (value) displayedRef.value = true;
        });
        useLockHtmlScroll(
            computed(() => props.blockScroll && displayedRef.value)
        );
        const NModal = inject(modalInjectionKey);
        function styleTransformOrigin() {
            if (NModal.transformOriginRef.value === 'center') {
                return '';
            }
            const { value: transformOriginX } = transformOriginXRef;
            const { value: transformOriginY } = transformOriginYRef;
            if (transformOriginX === null || transformOriginY === null) {
                return '';
            } else if (scrollbarRef.value) {
                const scrollTop = scrollbarRef.value.containerScrollTop;
                return `${transformOriginX}px ${
                    transformOriginY + scrollTop
                }px`;
            }
            return '';
        }
        function syncTransformOrigin(el) {
            if (NModal.transformOriginRef.value === 'center') {
                return;
            }
            const mousePosition = NModal.getMousePosition();
            if (!mousePosition) {
                return;
            }
            if (!scrollbarRef.value) return;
            const scrollTop = scrollbarRef.value.containerScrollTop;
            const { offsetLeft, offsetTop } = el;
            if (mousePosition) {
                const top = mousePosition.y;
                const left = mousePosition.x;
                transformOriginXRef.value = -(offsetLeft - left);
                transformOriginYRef.value = -(offsetTop - top - scrollTop);
            }
            el.style.transformOrigin = styleTransformOrigin();
        }
        function handleEnter(el) {
            void nextTick(() => {
                syncTransformOrigin(el);
            });
        }
        function handleBeforeLeave(el) {
            el.style.transformOrigin = styleTransformOrigin();
            props.onBeforeLeave();
        }
        function handleAfterLeave() {
            displayedRef.value = false;
            transformOriginXRef.value = null;
            transformOriginYRef.value = null;
            props.onAfterLeave();
        }
        function handleCloseClick() {
            const { onClose } = props;
            if (onClose) {
                onClose();
            }
        }
        function handleNegativeClick() {
            props.onNegativeClick();
        }
        function handlePositiveClick() {
            props.onPositiveClick();
        }
        const childNodeRef = ref(null);
        watch(childNodeRef, (node) => {
            if (node) {
                void nextTick(() => {
                    const el = node.el;
                    if (el && bodyRef.value !== el) {
                        bodyRef.value = el;
                    }
                });
            }
        });
        provide(modalBodyInjectionKey, bodyRef);
        provide(drawerBodyInjectionKey, null);
        provide(popoverBodyInjectionKey, null);
        return {
            mergedTheme: NModal.mergedThemeRef,
            appear: NModal.appearRef,
            isMounted: NModal.isMountedRef,
            mergedClsPrefix: NModal.mergedClsPrefixRef,
            bodyRef,
            scrollbarRef,
            displayed: displayedRef,
            childNodeRef,
            handlePositiveClick,
            handleNegativeClick,
            handleCloseClick,
            handleAfterLeave,
            handleBeforeLeave,
            handleEnter,
        };
    },
    render() {
        const {
            $slots,
            $attrs,
            handleEnter,
            handleAfterLeave,
            handleBeforeLeave,
            preset,
            mergedClsPrefix,
        } = this;
        let childNode = null;
        if (!preset) {
            childNode = getFirstSlotVNode($slots);
            if (!childNode) {
                warn('modal', 'default slot is empty');
                return;
            }
            childNode = cloneVNode(childNode);
            childNode.props = mergeProps(
                {
                    class: `${mergedClsPrefix}-modal`,
                },
                $attrs,
                childNode.props || {}
            );
        }
        return this.displayDirective === 'show' || this.displayed || this.show
            ? withDirectives(
                  h(
                      'div',
                      {
                          role: 'none',
                          class: `${mergedClsPrefix}-modal-body-wrapper`,
                      },
                      h(
                          NScrollbar,
                          {
                              ref: 'scrollbarRef',
                              theme: this.mergedTheme.peers.Scrollbar,
                              themeOverrides:
                                  this.mergedTheme.peerOverrides.Scrollbar,
                              contentClass: `${mergedClsPrefix}-modal-scroll-content`,
                          },
                          {
                              default: () => {
                                  var _a;
                                  return [
                                      (_a = this.renderMask) === null ||
                                      _a === void 0
                                          ? void 0
                                          : _a.call(this),
                                      h(
                                          VFocusTrap,
                                          {
                                              disabled: !this.trapFocus,
                                              active: this.show,
                                              onEsc: this.onEsc,
                                              autoFocus: this.autoFocus,
                                          },
                                          {
                                              default: () => {
                                                  var _a2;
                                                  return h(
                                                      Transition,
                                                      {
                                                          name: 'fade-in-scale-up-transition',
                                                          appear:
                                                              (_a2 =
                                                                  this
                                                                      .appear) !==
                                                                  null &&
                                                              _a2 !== void 0
                                                                  ? _a2
                                                                  : this
                                                                        .isMounted,
                                                          onEnter: handleEnter,
                                                          onAfterEnter:
                                                              this.onAfterEnter,
                                                          onAfterLeave:
                                                              handleAfterLeave,
                                                          onBeforeLeave:
                                                              handleBeforeLeave,
                                                      },
                                                      {
                                                          default: () => {
                                                              const dirs = [
                                                                  [
                                                                      vShow,
                                                                      this.show,
                                                                  ],
                                                              ];
                                                              const {
                                                                  onClickoutside,
                                                              } = this;
                                                              if (
                                                                  onClickoutside
                                                              ) {
                                                                  dirs.push([
                                                                      clickoutside,
                                                                      this
                                                                          .onClickoutside,
                                                                      void 0,
                                                                      {
                                                                          capture: true,
                                                                      },
                                                                  ]);
                                                              }
                                                              return withDirectives(
                                                                  this
                                                                      .preset ===
                                                                      'confirm' ||
                                                                      this
                                                                          .preset ===
                                                                          'dialog'
                                                                      ? h(
                                                                            NDialog,
                                                                            Object.assign(
                                                                                {},
                                                                                this
                                                                                    .$attrs,
                                                                                {
                                                                                    class: [
                                                                                        `${mergedClsPrefix}-modal`,
                                                                                        this
                                                                                            .$attrs
                                                                                            .class,
                                                                                    ],
                                                                                    ref: 'bodyRef',
                                                                                    theme: this
                                                                                        .mergedTheme
                                                                                        .peers
                                                                                        .Dialog,
                                                                                    themeOverrides:
                                                                                        this
                                                                                            .mergedTheme
                                                                                            .peerOverrides
                                                                                            .Dialog,
                                                                                },
                                                                                keep(
                                                                                    this
                                                                                        .$props,
                                                                                    dialogPropKeys
                                                                                ),
                                                                                {
                                                                                    'aria-modal':
                                                                                        'true',
                                                                                }
                                                                            ),
                                                                            $slots
                                                                        )
                                                                      : this
                                                                            .preset ===
                                                                        'card'
                                                                      ? h(
                                                                            NCard,
                                                                            Object.assign(
                                                                                {},
                                                                                this
                                                                                    .$attrs,
                                                                                {
                                                                                    ref: 'bodyRef',
                                                                                    class: [
                                                                                        `${mergedClsPrefix}-modal`,
                                                                                        this
                                                                                            .$attrs
                                                                                            .class,
                                                                                    ],
                                                                                    theme: this
                                                                                        .mergedTheme
                                                                                        .peers
                                                                                        .Card,
                                                                                    themeOverrides:
                                                                                        this
                                                                                            .mergedTheme
                                                                                            .peerOverrides
                                                                                            .Card,
                                                                                },
                                                                                keep(
                                                                                    this
                                                                                        .$props,
                                                                                    cardBasePropKeys
                                                                                ),
                                                                                {
                                                                                    'aria-modal':
                                                                                        'true',
                                                                                    role: 'dialog',
                                                                                }
                                                                            ),
                                                                            $slots
                                                                        )
                                                                      : (this.childNodeRef =
                                                                            childNode),
                                                                  dirs
                                                              );
                                                          },
                                                      }
                                                  );
                                              },
                                          }
                                      ),
                                  ];
                              },
                          }
                      )
                  ),
                  [
                      [
                          vShow,
                          this.displayDirective === 'if' ||
                              this.displayed ||
                              this.show,
                      ],
                  ]
              )
            : null;
    },
});
