Object.defineProperty(exports, '__esModule', { value: true });
const vue_1 = require('vue');
const vdirs_1 = require('vdirs');
const vueuc_1 = require('vueuc');
const dialogProps_1 = require('../../dialog/src/dialogProps');
const Dialog_1 = require('../../dialog/src/Dialog');
const Card_1 = require('../../card/src/Card');
const interface_1 = require('../../drawer/src/interface');
const interface_2 = require('../../popover/src/interface');
const _internal_1 = require('../../_internal');
const card_1 = require('../../card');
const _utils_1 = require('../../_utils');
const interface_3 = require('./interface');
const presetProps_1 = require('./presetProps');
exports.default = (0, vue_1.defineComponent)({
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
            presetProps_1.presetProps
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
        const bodyRef = (0, vue_1.ref)(null);
        const scrollbarRef = (0, vue_1.ref)(null);
        const displayedRef = (0, vue_1.ref)(props.show);
        const transformOriginXRef = (0, vue_1.ref)(null);
        const transformOriginYRef = (0, vue_1.ref)(null);
        (0, vue_1.watch)((0, vue_1.toRef)(props, 'show'), (value) => {
            if (value) displayedRef.value = true;
        });
        (0, _utils_1.useLockHtmlScroll)(
            (0, vue_1.computed)(() => props.blockScroll && displayedRef.value)
        );
        const NModal = (0, vue_1.inject)(interface_3.modalInjectionKey);
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
            void (0, vue_1.nextTick)(() => {
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
        const childNodeRef = (0, vue_1.ref)(null);
        (0, vue_1.watch)(childNodeRef, (node) => {
            if (node) {
                void (0, vue_1.nextTick)(() => {
                    const el = node.el;
                    if (el && bodyRef.value !== el) {
                        bodyRef.value = el;
                    }
                });
            }
        });
        (0, vue_1.provide)(interface_3.modalBodyInjectionKey, bodyRef);
        (0, vue_1.provide)(interface_1.drawerBodyInjectionKey, null);
        (0, vue_1.provide)(interface_2.popoverBodyInjectionKey, null);
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
            childNode = (0, _utils_1.getFirstSlotVNode)($slots);
            if (!childNode) {
                (0, _utils_1.warn)('modal', 'default slot is empty');
                return;
            }
            childNode = (0, vue_1.cloneVNode)(childNode);
            childNode.props = (0, vue_1.mergeProps)(
                {
                    class: `${mergedClsPrefix}-modal`,
                },
                $attrs,
                childNode.props || {}
            );
        }
        return this.displayDirective === 'show' || this.displayed || this.show
            ? (0, vue_1.withDirectives)(
                  (0, vue_1.h)(
                      'div',
                      {
                          role: 'none',
                          class: `${mergedClsPrefix}-modal-body-wrapper`,
                      },
                      (0, vue_1.h)(
                          _internal_1.NScrollbar,
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
                                      (0, vue_1.h)(
                                          vueuc_1.VFocusTrap,
                                          {
                                              disabled: !this.trapFocus,
                                              active: this.show,
                                              onEsc: this.onEsc,
                                              autoFocus: this.autoFocus,
                                          },
                                          {
                                              default: () => {
                                                  var _a2;
                                                  return (0, vue_1.h)(
                                                      vue_1.Transition,
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
                                                                      vue_1.vShow,
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
                                                                      vdirs_1.clickoutside,
                                                                      this
                                                                          .onClickoutside,
                                                                      void 0,
                                                                      {
                                                                          capture: true,
                                                                      },
                                                                  ]);
                                                              }
                                                              return (0,
                                                              vue_1.withDirectives)(
                                                                  this
                                                                      .preset ===
                                                                      'confirm' ||
                                                                      this
                                                                          .preset ===
                                                                          'dialog'
                                                                      ? (0,
                                                                        vue_1.h)(
                                                                            Dialog_1.NDialog,
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
                                                                                (0,
                                                                                _utils_1.keep)(
                                                                                    this
                                                                                        .$props,
                                                                                    dialogProps_1.dialogPropKeys
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
                                                                      ? (0,
                                                                        vue_1.h)(
                                                                            card_1.NCard,
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
                                                                                (0,
                                                                                _utils_1.keep)(
                                                                                    this
                                                                                        .$props,
                                                                                    Card_1.cardBasePropKeys
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
                          vue_1.vShow,
                          this.displayDirective === 'if' ||
                              this.displayed ||
                              this.show,
                      ],
                  ]
              )
            : null;
    },
});
