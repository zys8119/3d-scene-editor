import { h, defineComponent, provide, computed } from 'vue';
import { avatarGroupInjectionKey } from '../../avatar/src/context';
import NAvatar from '../../avatar/src/Avatar';
import { useConfig, useTheme } from '../../_mixins';
import style from './styles/avatar-group.cssr';
import { useRtl } from '../../_mixins/use-rtl';
import { avatarGroupLight } from '../styles';
export const avatarGroupProps = Object.assign(
    Object.assign({}, useTheme.props),
    {
        max: Number,
        maxStyle: [Object, String],
        options: {
            type: Array,
            default: () => [],
        },
        vertical: Boolean,
        size: [String, Number],
    }
);
export default defineComponent({
    name: 'AvatarGroup',
    props: avatarGroupProps,
    setup(props) {
        const { mergedClsPrefixRef, mergedRtlRef } = useConfig(props);
        const mergedThemeRef = useTheme(
            'AvatarGroup',
            '-avatar-group',
            style,
            avatarGroupLight,
            props,
            mergedClsPrefixRef
        );
        provide(avatarGroupInjectionKey, props);
        const rtlEnabledRef = useRtl(
            'AvatarGroup',
            mergedRtlRef,
            mergedClsPrefixRef
        );
        const restOptionsRef = computed(() => {
            const { max } = props;
            if (max === void 0) return void 0;
            const { options } = props;
            if (options.length > max)
                return options.slice(max - 1, options.length);
            return [];
        });
        const displayedOptionsRef = computed(() => {
            const { options, max } = props;
            if (max === void 0) return options;
            if (options.length > max) return options.slice(0, max - 1);
            if (options.length === max) return options.slice(0, max);
            return options;
        });
        return {
            mergedTheme: mergedThemeRef,
            rtlEnabled: rtlEnabledRef,
            mergedClsPrefix: mergedClsPrefixRef,
            restOptions: restOptionsRef,
            displayedOptions: displayedOptionsRef,
            cssVars: computed(() => {
                return {
                    '--n-gap': mergedThemeRef.value.self.gap,
                };
            }),
        };
    },
    render() {
        const {
            mergedClsPrefix,
            displayedOptions,
            restOptions,
            mergedTheme,
            $slots,
        } = this;
        return h(
            'div',
            {
                class: [
                    `${mergedClsPrefix}-avatar-group`,
                    this.rtlEnabled && `${mergedClsPrefix}-avatar-group--rtl`,
                    this.vertical &&
                        `${mergedClsPrefix}-avatar-group--vertical`,
                ],
                style: this.cssVars,
                role: 'group',
            },
            displayedOptions.map((option) => {
                return $slots.avatar
                    ? $slots.avatar({ option })
                    : h(NAvatar, {
                          src: option.src,
                          theme: mergedTheme.peers.Avatar,
                          themeOverrides: mergedTheme.peerOverrides.Avatar,
                      });
            }),
            restOptions !== void 0 &&
                restOptions.length > 0 &&
                ($slots.rest
                    ? $slots.rest({
                          options: restOptions,
                          rest: restOptions.length,
                      })
                    : h(
                          NAvatar,
                          {
                              style: this.maxStyle,
                              theme: mergedTheme.peers.Avatar,
                              themeOverrides: mergedTheme.peerOverrides.Avatar,
                          },
                          {
                              default: () => `+${restOptions.length}`,
                          }
                      ))
        );
    },
});
