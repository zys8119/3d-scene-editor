const { provide } = require('vue');
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.popDialogProps = void 0;
const vue_1 = require('vue');
const avatar_1 = require('../../../avatar');
const icon_1 = require('../../../icon');
const _mixins_1 = require('../../../_mixins');
const styles_1 = require('../styles');
const interface_1 = require('./interface');
const index_cssr_1 = __importDefault(require('./styles/index.cssr'));
const ionicons5_1 = require('@vicons/ionicons5');
exports.popDialogProps = {
    content: String,
    showAvatar: {
        type: Boolean,
        default: true,
    },
    avatar: {
        type: Object,
        default: () => ({}),
    },
    right: Boolean,
    arrow: {
        type: Boolean,
        default: true,
    },
    title: String,
    showTitle: {
        type: Boolean,
        default: true,
    },
    renderHtml: Boolean,
};
const PopDialog = (0, vue_1.defineComponent)({
    name: 'PopDialog',
    props: exports.popDialogProps,
    emits: {
        click: (e) => {
            return true;
        },
        avatarClick: (e) => {
            return true;
        },
    },
    setup(props) {
        const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props);
        const themeRef = (0, _mixins_1.useTheme)(
            'PopDialog',
            '-pop-dialog',
            index_cssr_1.default,
            styles_1.popDialogLight,
            props,
            mergedClsPrefixRef
        );
        provide(interface_1.popDialogInjectionKey, {
            mergedThemeRef: themeRef,
            mergedClsPrefixRef,
        });
        const cssVarsRef = (0, vue_1.computed)(() => {
            const {
                self: {
                    leftColor,
                    leftBackgroundColor,
                    leftActiveBackgroundColor,
                    rightColor,
                    rightBackgroundColor,
                    rightActiveBackgroundColor,
                    rightFileHoverColor,
                    titleColor,
                    borderRadius,
                    titleFontSize,
                    fontSize,
                    arrowSize,
                },
            } = themeRef.value;
            return {
                '--n-pop-dialog-left-color': leftColor,
                '--n-pop-dialog-left-background-color': leftBackgroundColor,
                '--n-pop-dialog-left-active-background-color':
                    leftActiveBackgroundColor,
                '--n-pop-dialog-right-color': rightColor,
                '--n-pop-dialog-right-background-color': rightBackgroundColor,
                '--n-pop-dialog-right-active-background-color':
                    rightActiveBackgroundColor,
                '--n-pop-dialog-right-file-hover-color': rightFileHoverColor,
                '--n-pop-dialog-arrow-size': arrowSize,
                '--n-pop-dialog-title-color': titleColor,
                '--n-pop-dialog-title-font-size': titleFontSize,
                '--n-pop-dialog-padding': borderRadius,
                '--n-pop-dialog-border-radius': borderRadius,
                '--n-pop-dialog-font-size': fontSize,
                '--n-pop-dialog-margin': borderRadius,
            };
        });
        const size = (0, vue_1.computed)(() => {
            if (!props.avatar.size) return ['34px', 34];
            if (
                typeof props.avatar.size === 'number' ||
                !isNaN(Number(props.avatar.size))
            ) {
                return [`${props.avatar.size}px`, Number(props.avatar.size)];
            }
            if (typeof props.avatar.size === 'string') {
                return props.avatar.size === 'large'
                    ? ['40px', 40]
                    : props.avatar.size === 'medium'
                    ? ['34px', 34]
                    : ['28px', 28];
            }
            return props.avatar.size;
        });
        return {
            size,
            mergedClsPrefix: mergedClsPrefixRef,
            cssVars: cssVarsRef,
        };
    },
    render() {
        var _a, _b;
        const { mergedClsPrefix } = this;
        const AvatarVNode = (show = true) => {
            var _a2, _b2, _c;
            return this.showAvatar
                ? (0, vue_1.h)(
                      'div',
                      {
                          class: `${mergedClsPrefix}-pop-dialog-avatar`,
                          style: {
                              width: this.size[0],
                          },
                          onClick: (e) => {
                              if (show) this.$emit('avatarClick', e);
                          },
                      },
                      show
                          ? ((_b2 = (_a2 = this.$slots).avatar) === null ||
                            _b2 === void 0
                                ? void 0
                                : _b2.call(_a2, this.avatar)) ||
                                (0, vue_1.h)(
                                    avatar_1.NAvatar,
                                    Object.assign({}, this.avatar, {
                                        round:
                                            (_c = this.avatar.round) !== null &&
                                            _c !== void 0
                                                ? _c
                                                : true,
                                        size: this.avatar.size,
                                    }),
                                    {
                                        default: () => {
                                            var _a3;
                                            return !this.avatar.src
                                                ? ((_a3 = this.title) ===
                                                      null || _a3 === void 0
                                                      ? void 0
                                                      : _a3.slice(0, 1)) ||
                                                      (0, vue_1.h)(
                                                          icon_1.NIcon,
                                                          {
                                                              size:
                                                                  this.size[1] /
                                                                  1.6,
                                                          },
                                                          {
                                                              default: () =>
                                                                  (0, vue_1.h)(
                                                                      ionicons5_1.PersonSharp
                                                                  ),
                                                          }
                                                      )
                                                : null;
                                        },
                                        click: () => {
                                            var _a3, _b3;
                                            return (_b3 = (_a3 = this.$slots)
                                                .click) === null ||
                                                _b3 === void 0
                                                ? void 0
                                                : _b3.call(_a3);
                                        },
                                        avatarClick: () => {
                                            var _a3, _b3;
                                            return (_b3 = (_a3 = this.$slots)
                                                .avatarClick) === null ||
                                                _b3 === void 0
                                                ? void 0
                                                : _b3.call(_a3);
                                        },
                                    }
                                )
                          : null
                  )
                : null;
        };
        return (0, vue_1.h)(
            'div',
            { class: `${mergedClsPrefix}-pop-dialog`, style: this.cssVars },
            AvatarVNode(!this.right),
            (0, vue_1.h)(
                'div',
                {
                    class: {
                        [`${mergedClsPrefix}-pop-dialog-content`]: true,
                    },
                    style: {
                        textAlign: this.right ? 'right' : 'left',
                    },
                },
                this.showTitle && (this.title || this.$slots.title)
                    ? (0, vue_1.h)(
                          'div',
                          {
                              class: `${mergedClsPrefix}-pop-dialog-content__title`,
                          },
                          ((_b = (_a = this.$slots).title) === null ||
                          _b === void 0
                              ? void 0
                              : _b.call(_a)) || this.title
                      )
                    : null,
                (() => {
                    var _a2, _b2, _c;
                    const classMap = {
                        [`${mergedClsPrefix}-pop-dialog-content__in`]: true,
                        [`${mergedClsPrefix}-pop-dialog-content__in-right`]:
                            this.right,
                        arrow: this.arrow,
                        [`arrow-${this.right ? 'right' : 'left'}`]: true,
                    };
                    return this.renderHtml && !this.$slots.default
                        ? (0, vue_1.h)('div', {
                              class: classMap,
                              onClick: (e) => {
                                  this.$emit('click', e);
                              },
                              innerHTML: this.content,
                          })
                        : (0, vue_1.h)(
                              'div',
                              {
                                  class: classMap,
                                  onClick: (e) => {
                                      this.$emit('click', e);
                                  },
                              },
                              (_c =
                                  (_b2 = (_a2 = this.$slots).default) ===
                                      null || _b2 === void 0
                                      ? void 0
                                      : _b2.call(_a2)) !== null && _c !== void 0
                                  ? _c
                                  : this.content
                          );
                })()
            ),
            AvatarVNode(this.right)
        );
    },
});
exports.default = PopDialog;
