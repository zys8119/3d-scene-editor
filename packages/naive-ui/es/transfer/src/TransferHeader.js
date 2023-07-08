import { h, defineComponent, inject } from 'vue';
import { NButton } from '../../button';
import { useLocale } from '../../_mixins';
import { transferInjectionKey } from './interface';
export default defineComponent({
    name: 'TransferHeader',
    props: {
        size: {
            type: String,
            required: true,
        },
        source: Boolean,
        onCheckedAll: Function,
        onClearAll: Function,
        title: String,
    },
    setup(props) {
        const {
            targetOptionsRef,
            canNotSelectAnythingRef,
            canBeClearedRef,
            allCheckedRef,
            mergedThemeRef,
            disabledRef,
            mergedClsPrefixRef,
            srcOptionsLengthRef,
        } = inject(transferInjectionKey);
        const { localeRef } = useLocale('Transfer');
        return () => {
            const { source, onClearAll, onCheckedAll } = props;
            const { value: mergedTheme } = mergedThemeRef;
            const { value: mergedClsPrefix } = mergedClsPrefixRef;
            const { value: locale } = localeRef;
            const buttonSize = props.size === 'large' ? 'small' : 'tiny';
            const { title } = props;
            return h(
                'div',
                { class: `${mergedClsPrefix}-transfer-list-header` },
                title &&
                    h(
                        'div',
                        {
                            class: `${mergedClsPrefix}-transfer-list-header__title`,
                        },
                        title
                    ),
                source &&
                    h(
                        NButton,
                        {
                            class: `${mergedClsPrefix}-transfer-list-header__button`,
                            theme: mergedTheme.peers.Button,
                            themeOverrides: mergedTheme.peerOverrides.Button,
                            size: buttonSize,
                            tertiary: true,
                            onClick: allCheckedRef.value
                                ? onClearAll
                                : onCheckedAll,
                            disabled:
                                canNotSelectAnythingRef.value ||
                                disabledRef.value,
                        },
                        {
                            default: () =>
                                allCheckedRef.value
                                    ? locale.unselectAll
                                    : locale.selectAll,
                        }
                    ),
                !source &&
                    canBeClearedRef.value &&
                    h(
                        NButton,
                        {
                            class: `${mergedClsPrefix}-transfer-list-header__button`,
                            theme: mergedTheme.peers.Button,
                            themeOverrides: mergedTheme.peerOverrides.Button,
                            size: buttonSize,
                            tertiary: true,
                            onClick: onClearAll,
                            disabled: disabledRef.value,
                        },
                        {
                            default: () => locale.clearAll,
                        }
                    ),
                h(
                    'div',
                    { class: `${mergedClsPrefix}-transfer-list-header__extra` },
                    source
                        ? locale.total(srcOptionsLengthRef.value)
                        : locale.selected(targetOptionsRef.value.length)
                )
            );
        };
    },
});
