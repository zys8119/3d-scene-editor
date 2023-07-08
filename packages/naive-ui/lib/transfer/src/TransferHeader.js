Object.defineProperty(exports, '__esModule', { value: true });
const vue_1 = require('vue');
const button_1 = require('../../button');
const _mixins_1 = require('../../_mixins');
const interface_1 = require('./interface');
exports.default = (0, vue_1.defineComponent)({
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
        } = (0, vue_1.inject)(interface_1.transferInjectionKey);
        const { localeRef } = (0, _mixins_1.useLocale)('Transfer');
        return () => {
            const { source, onClearAll, onCheckedAll } = props;
            const { value: mergedTheme } = mergedThemeRef;
            const { value: mergedClsPrefix } = mergedClsPrefixRef;
            const { value: locale } = localeRef;
            const buttonSize = props.size === 'large' ? 'small' : 'tiny';
            const { title } = props;
            return (0, vue_1.h)(
                'div',
                { class: `${mergedClsPrefix}-transfer-list-header` },
                title &&
                    (0, vue_1.h)(
                        'div',
                        {
                            class: `${mergedClsPrefix}-transfer-list-header__title`,
                        },
                        title
                    ),
                source &&
                    (0, vue_1.h)(
                        button_1.NButton,
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
                    (0, vue_1.h)(
                        button_1.NButton,
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
                (0, vue_1.h)(
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
