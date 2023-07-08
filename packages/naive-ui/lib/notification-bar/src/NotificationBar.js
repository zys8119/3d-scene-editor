const { h, ref, onMounted } = require('vue');
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.notificationBarProps = void 0;
const vue_1 = require('vue');
const _mixins_1 = require('../../_mixins');
const index_cssr_1 = __importDefault(require('./styles/index.cssr'));
const styles_1 = require('../styles');
const icon_1 = require('../../icon');
const ionicons5_1 = require('@vicons/ionicons5');
exports.notificationBarProps = Object.assign(
    Object.assign({}, _mixins_1.useTheme.props),
    {
        text: String,
        background: {
            type: String,
            default: '#fffbe8',
        },
        color: {
            type: String,
            default: '#ed6a0c',
        },
        scrollable: {
            type: Boolean,
            default: true,
        },
        wrapable: {
            type: Boolean,
            default: false,
        },
        leftIcon: {
            type: Object,
            default: h(ionicons5_1.VolumeMediumOutline, null),
        },
        rightIcon: {
            type: Boolean,
            default: false,
        },
        speed: {
            type: Number,
            default: 15,
        },
    }
);
exports.default = (0, vue_1.defineComponent)({
    name: 'NotificationBar',
    props: exports.notificationBarProps,
    setup(props, { slots, expose, emit }) {
        const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props);
        const themeRef = (0, _mixins_1.useTheme)(
            'NotificationBar',
            '-notification-bar',
            index_cssr_1.default,
            styles_1.notificationBarLight,
            props,
            mergedClsPrefixRef
        );
        const transformWidth = ref('');
        const cssVarsRef = (0, vue_1.computed)(() => {
            const {
                self: { padding },
            } = themeRef.value;
            return {
                '--n-padding': padding,
                '--n-notification-bar-transform-width': transformWidth.value,
            };
        });
        const rightClick = () => {
            emit('on-rightClick');
        };
        const middleContent = ref(null);
        onMounted(() => {
            if (props.text) {
                transformWidth.value = middleContent.value.offsetWidth + 'px';
            }
        });
        return {
            cssVarsRef,
            mergedClsPrefix: mergedClsPrefixRef,
            middleContent,
            rightClick,
        };
    },
    render() {
        var _a, _b;
        const { mergedClsPrefix, $slots, cssVarsRef } = this;
        return h(
            'div',
            {
                class: [`${mergedClsPrefix}-notification-bar`],
                style: Object.assign(
                    { background: this.background, color: this.color },
                    cssVarsRef
                ),
            },
            this.leftIcon
                ? h(
                      'div',
                      { class: [`${mergedClsPrefix}-notification-bar-left`] },
                      h(
                          icon_1.NIcon,
                          {
                              class: [
                                  `${mergedClsPrefix}-notification-bar-icon`,
                              ],
                          },
                          {
                              default: () => h(this.leftIcon),
                          }
                      )
                  )
                : void 0,
            h(
                'div',
                {
                    ref: 'middleContent',
                    class: [
                        `${mergedClsPrefix}-notification-bar-middle-content`,
                    ],
                },
                h(
                    'div',
                    {
                        class: [
                            !this.wrapable && !this.scrollable
                                ? `${mergedClsPrefix}-notification-bar-middle-ellipsis`
                                : void 0,
                            this.scrollable
                                ? `${mergedClsPrefix}-notification-bar-middle-scroll`
                                : void 0,
                        ],
                        style: { animationDuration: this.speed + 's' },
                    },
                    this.$slots.content
                        ? this.$slots.content({ text: this.text })
                        : this.text
                )
            ),
            this.rightIcon
                ? h(
                      h(
                          'div',
                          {
                              class: [
                                  `${mergedClsPrefix}-notification-bar-right`,
                              ],
                              onClick: this.rightClick,
                          },
                          (
                              (_a = $slots.rightIcon) === null || _a === void 0
                                  ? void 0
                                  : _a.call($slots)
                          )
                              ? (_b = $slots.rightIcon) === null ||
                                _b === void 0
                                  ? void 0
                                  : _b.call($slots)
                              : h(icon_1.NIcon, null, {
                                    default: () =>
                                        h(ionicons5_1.ChevronForward, null),
                                })
                      )
                  )
                : void 0
        );
    },
});
