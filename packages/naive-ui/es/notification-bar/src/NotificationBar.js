import { computed, defineComponent } from 'vue';
import { useConfig, useTheme } from '../../_mixins';
import style from './styles/index.cssr';
import { notificationBarLight } from '../styles';
import { NIcon } from '../../icon';
import { VolumeMediumOutline, ChevronForward } from '@vicons/ionicons5';
import { h, ref, onMounted } from 'vue';
export const notificationBarProps = Object.assign(
    Object.assign({}, useTheme.props),
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
            default: h(VolumeMediumOutline, null),
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
export default defineComponent({
    name: 'NotificationBar',
    props: notificationBarProps,
    setup(props, { slots, expose, emit }) {
        const { mergedClsPrefixRef } = useConfig(props);
        const themeRef = useTheme(
            'NotificationBar',
            '-notification-bar',
            style,
            notificationBarLight,
            props,
            mergedClsPrefixRef
        );
        const transformWidth = ref('');
        const cssVarsRef = computed(() => {
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
                          NIcon,
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
                              : h(NIcon, null, {
                                    default: () => h(ChevronForward, null),
                                })
                      )
                  )
                : void 0
        );
    },
});
