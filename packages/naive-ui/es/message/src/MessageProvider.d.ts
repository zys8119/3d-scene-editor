import { VNodeChild, ExtractPropTypes, PropType, CSSProperties } from 'vue';
import type { ExtractPublicPropTypes } from '../../_utils';
import type { MessageOptions, MessageType } from './types';
type ContentType = string | (() => VNodeChild);
export interface MessageApiInjection {
    create: (content: ContentType, options?: MessageOptions) => MessageReactive;
    info: (content: ContentType, options?: MessageOptions) => MessageReactive;
    success: (
        content: ContentType,
        options?: MessageOptions
    ) => MessageReactive;
    warning: (
        content: ContentType,
        options?: MessageOptions
    ) => MessageReactive;
    error: (content: ContentType, options?: MessageOptions) => MessageReactive;
    loading: (
        content: ContentType,
        options?: MessageOptions
    ) => MessageReactive;
    destroyAll: () => void;
}
export interface MessageReactive {
    content?: ContentType;
    duration?: number;
    closable?: boolean;
    keepAliveOnHover?: boolean;
    type: MessageType;
    icon?: () => VNodeChild;
    showIcon?: boolean;
    onClose?: () => void;
    destroy: () => void;
}
interface PrivateMessageRef extends MessageReactive {
    key: string;
    hide: () => void;
}
export type MessageProviderInst = MessageApiInjection;
export declare const messageProviderProps: {
    to: PropType<string | HTMLElement>;
    duration: {
        type: NumberConstructor;
        default: number;
    };
    keepAliveOnHover: BooleanConstructor;
    max: NumberConstructor;
    placement: {
        type: PropType<
            | 'bottom'
            | 'top'
            | 'top-left'
            | 'top-right'
            | 'bottom-left'
            | 'bottom-right'
        >;
        default: string;
    };
    closable: BooleanConstructor;
    containerStyle: PropType<string | CSSProperties>;
    theme: PropType<
        import('../../_mixins').Theme<
            'Message',
            {
                closeBorderRadius: string;
                textColor: string;
                textColorInfo: string;
                textColorSuccess: string;
                textColorError: string;
                textColorWarning: string;
                textColorLoading: string;
                color: string;
                colorInfo: string;
                colorSuccess: string;
                colorError: string;
                colorWarning: string;
                colorLoading: string;
                boxShadow: string;
                boxShadowInfo: string;
                boxShadowSuccess: string;
                boxShadowError: string;
                boxShadowWarning: string;
                boxShadowLoading: string;
                iconColor: string;
                iconColorInfo: string;
                iconColorSuccess: string;
                iconColorWarning: string;
                iconColorError: string;
                iconColorLoading: string;
                closeColorHover: string;
                closeColorPressed: string;
                closeIconColor: string;
                closeIconColorHover: string;
                closeIconColorPressed: string;
                closeColorHoverInfo: string;
                closeColorPressedInfo: string;
                closeIconColorInfo: string;
                closeIconColorHoverInfo: string;
                closeIconColorPressedInfo: string;
                closeColorHoverSuccess: string;
                closeColorPressedSuccess: string;
                closeIconColorSuccess: string;
                closeIconColorHoverSuccess: string;
                closeIconColorPressedSuccess: string;
                closeColorHoverError: string;
                closeColorPressedError: string;
                closeIconColorError: string;
                closeIconColorHoverError: string;
                closeIconColorPressedError: string;
                closeColorHoverWarning: string;
                closeColorPressedWarning: string;
                closeIconColorWarning: string;
                closeIconColorHoverWarning: string;
                closeIconColorPressedWarning: string;
                closeColorHoverLoading: string;
                closeColorPressedLoading: string;
                closeIconColorLoading: string;
                closeIconColorHoverLoading: string;
                closeIconColorPressedLoading: string;
                loadingColor: string;
                lineHeight: string;
                borderRadius: string;
                margin: string;
                padding: string;
                maxWidth: string;
                minWidth: string;
                iconMargin: string;
                closeMargin: string;
                closeSize: string;
                closeIconSize: string;
                iconSize: string;
                fontSize: string;
            },
            any
        >
    >;
    themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Message',
                {
                    closeBorderRadius: string;
                    textColor: string;
                    textColorInfo: string;
                    textColorSuccess: string;
                    textColorError: string;
                    textColorWarning: string;
                    textColorLoading: string;
                    color: string;
                    colorInfo: string;
                    colorSuccess: string;
                    colorError: string;
                    colorWarning: string;
                    colorLoading: string;
                    boxShadow: string;
                    boxShadowInfo: string;
                    boxShadowSuccess: string;
                    boxShadowError: string;
                    boxShadowWarning: string;
                    boxShadowLoading: string;
                    iconColor: string;
                    iconColorInfo: string;
                    iconColorSuccess: string;
                    iconColorWarning: string;
                    iconColorError: string;
                    iconColorLoading: string;
                    closeColorHover: string;
                    closeColorPressed: string;
                    closeIconColor: string;
                    closeIconColorHover: string;
                    closeIconColorPressed: string;
                    closeColorHoverInfo: string;
                    closeColorPressedInfo: string;
                    closeIconColorInfo: string;
                    closeIconColorHoverInfo: string;
                    closeIconColorPressedInfo: string;
                    closeColorHoverSuccess: string;
                    closeColorPressedSuccess: string;
                    closeIconColorSuccess: string;
                    closeIconColorHoverSuccess: string;
                    closeIconColorPressedSuccess: string;
                    closeColorHoverError: string;
                    closeColorPressedError: string;
                    closeIconColorError: string;
                    closeIconColorHoverError: string;
                    closeIconColorPressedError: string;
                    closeColorHoverWarning: string;
                    closeColorPressedWarning: string;
                    closeIconColorWarning: string;
                    closeIconColorHoverWarning: string;
                    closeIconColorPressedWarning: string;
                    closeColorHoverLoading: string;
                    closeColorPressedLoading: string;
                    closeIconColorLoading: string;
                    closeIconColorHoverLoading: string;
                    closeIconColorPressedLoading: string;
                    loadingColor: string;
                    lineHeight: string;
                    borderRadius: string;
                    margin: string;
                    padding: string;
                    maxWidth: string;
                    minWidth: string;
                    iconMargin: string;
                    closeMargin: string;
                    closeSize: string;
                    closeIconSize: string;
                    iconSize: string;
                    fontSize: string;
                },
                any
            >
        >
    >;
    builtinThemeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Message',
                {
                    closeBorderRadius: string;
                    textColor: string;
                    textColorInfo: string;
                    textColorSuccess: string;
                    textColorError: string;
                    textColorWarning: string;
                    textColorLoading: string;
                    color: string;
                    colorInfo: string;
                    colorSuccess: string;
                    colorError: string;
                    colorWarning: string;
                    colorLoading: string;
                    boxShadow: string;
                    boxShadowInfo: string;
                    boxShadowSuccess: string;
                    boxShadowError: string;
                    boxShadowWarning: string;
                    boxShadowLoading: string;
                    iconColor: string;
                    iconColorInfo: string;
                    iconColorSuccess: string;
                    iconColorWarning: string;
                    iconColorError: string;
                    iconColorLoading: string;
                    closeColorHover: string;
                    closeColorPressed: string;
                    closeIconColor: string;
                    closeIconColorHover: string;
                    closeIconColorPressed: string;
                    closeColorHoverInfo: string;
                    closeColorPressedInfo: string;
                    closeIconColorInfo: string;
                    closeIconColorHoverInfo: string;
                    closeIconColorPressedInfo: string;
                    closeColorHoverSuccess: string;
                    closeColorPressedSuccess: string;
                    closeIconColorSuccess: string;
                    closeIconColorHoverSuccess: string;
                    closeIconColorPressedSuccess: string;
                    closeColorHoverError: string;
                    closeColorPressedError: string;
                    closeIconColorError: string;
                    closeIconColorHoverError: string;
                    closeIconColorPressedError: string;
                    closeColorHoverWarning: string;
                    closeColorPressedWarning: string;
                    closeIconColorWarning: string;
                    closeIconColorHoverWarning: string;
                    closeIconColorPressedWarning: string;
                    closeColorHoverLoading: string;
                    closeColorPressedLoading: string;
                    closeIconColorLoading: string;
                    closeIconColorHoverLoading: string;
                    closeIconColorPressedLoading: string;
                    loadingColor: string;
                    lineHeight: string;
                    borderRadius: string;
                    margin: string;
                    padding: string;
                    maxWidth: string;
                    minWidth: string;
                    iconMargin: string;
                    closeMargin: string;
                    closeSize: string;
                    closeIconSize: string;
                    iconSize: string;
                    fontSize: string;
                },
                any
            >
        >
    >;
};
export type MessageProviderProps = ExtractPublicPropTypes<
    typeof messageProviderProps
>;
export type MessageProviderSetupProps = ExtractPropTypes<
    typeof messageProviderProps
>;
declare const _default: import('vue').DefineComponent<
    {
        to: PropType<string | HTMLElement>;
        duration: {
            type: NumberConstructor;
            default: number;
        };
        keepAliveOnHover: BooleanConstructor;
        max: NumberConstructor;
        placement: {
            type: PropType<
                | 'bottom'
                | 'top'
                | 'top-left'
                | 'top-right'
                | 'bottom-left'
                | 'bottom-right'
            >;
            default: string;
        };
        closable: BooleanConstructor;
        containerStyle: PropType<string | CSSProperties>;
        theme: PropType<
            import('../../_mixins').Theme<
                'Message',
                {
                    closeBorderRadius: string;
                    textColor: string;
                    textColorInfo: string;
                    textColorSuccess: string;
                    textColorError: string;
                    textColorWarning: string;
                    textColorLoading: string;
                    color: string;
                    colorInfo: string;
                    colorSuccess: string;
                    colorError: string;
                    colorWarning: string;
                    colorLoading: string;
                    boxShadow: string;
                    boxShadowInfo: string;
                    boxShadowSuccess: string;
                    boxShadowError: string;
                    boxShadowWarning: string;
                    boxShadowLoading: string;
                    iconColor: string;
                    iconColorInfo: string;
                    iconColorSuccess: string;
                    iconColorWarning: string;
                    iconColorError: string;
                    iconColorLoading: string;
                    closeColorHover: string;
                    closeColorPressed: string;
                    closeIconColor: string;
                    closeIconColorHover: string;
                    closeIconColorPressed: string;
                    closeColorHoverInfo: string;
                    closeColorPressedInfo: string;
                    closeIconColorInfo: string;
                    closeIconColorHoverInfo: string;
                    closeIconColorPressedInfo: string;
                    closeColorHoverSuccess: string;
                    closeColorPressedSuccess: string;
                    closeIconColorSuccess: string;
                    closeIconColorHoverSuccess: string;
                    closeIconColorPressedSuccess: string;
                    closeColorHoverError: string;
                    closeColorPressedError: string;
                    closeIconColorError: string;
                    closeIconColorHoverError: string;
                    closeIconColorPressedError: string;
                    closeColorHoverWarning: string;
                    closeColorPressedWarning: string;
                    closeIconColorWarning: string;
                    closeIconColorHoverWarning: string;
                    closeIconColorPressedWarning: string;
                    closeColorHoverLoading: string;
                    closeColorPressedLoading: string;
                    closeIconColorLoading: string;
                    closeIconColorHoverLoading: string;
                    closeIconColorPressedLoading: string;
                    loadingColor: string;
                    lineHeight: string;
                    borderRadius: string;
                    margin: string;
                    padding: string;
                    maxWidth: string;
                    minWidth: string;
                    iconMargin: string;
                    closeMargin: string;
                    closeSize: string;
                    closeIconSize: string;
                    iconSize: string;
                    fontSize: string;
                },
                any
            >
        >;
        themeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Message',
                    {
                        closeBorderRadius: string;
                        textColor: string;
                        textColorInfo: string;
                        textColorSuccess: string;
                        textColorError: string;
                        textColorWarning: string;
                        textColorLoading: string;
                        color: string;
                        colorInfo: string;
                        colorSuccess: string;
                        colorError: string;
                        colorWarning: string;
                        colorLoading: string;
                        boxShadow: string;
                        boxShadowInfo: string;
                        boxShadowSuccess: string;
                        boxShadowError: string;
                        boxShadowWarning: string;
                        boxShadowLoading: string;
                        iconColor: string;
                        iconColorInfo: string;
                        iconColorSuccess: string;
                        iconColorWarning: string;
                        iconColorError: string;
                        iconColorLoading: string;
                        closeColorHover: string;
                        closeColorPressed: string;
                        closeIconColor: string;
                        closeIconColorHover: string;
                        closeIconColorPressed: string;
                        closeColorHoverInfo: string;
                        closeColorPressedInfo: string;
                        closeIconColorInfo: string;
                        closeIconColorHoverInfo: string;
                        closeIconColorPressedInfo: string;
                        closeColorHoverSuccess: string;
                        closeColorPressedSuccess: string;
                        closeIconColorSuccess: string;
                        closeIconColorHoverSuccess: string;
                        closeIconColorPressedSuccess: string;
                        closeColorHoverError: string;
                        closeColorPressedError: string;
                        closeIconColorError: string;
                        closeIconColorHoverError: string;
                        closeIconColorPressedError: string;
                        closeColorHoverWarning: string;
                        closeColorPressedWarning: string;
                        closeIconColorWarning: string;
                        closeIconColorHoverWarning: string;
                        closeIconColorPressedWarning: string;
                        closeColorHoverLoading: string;
                        closeColorPressedLoading: string;
                        closeIconColorLoading: string;
                        closeIconColorHoverLoading: string;
                        closeIconColorPressedLoading: string;
                        loadingColor: string;
                        lineHeight: string;
                        borderRadius: string;
                        margin: string;
                        padding: string;
                        maxWidth: string;
                        minWidth: string;
                        iconMargin: string;
                        closeMargin: string;
                        closeSize: string;
                        closeIconSize: string;
                        iconSize: string;
                        fontSize: string;
                    },
                    any
                >
            >
        >;
        builtinThemeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Message',
                    {
                        closeBorderRadius: string;
                        textColor: string;
                        textColorInfo: string;
                        textColorSuccess: string;
                        textColorError: string;
                        textColorWarning: string;
                        textColorLoading: string;
                        color: string;
                        colorInfo: string;
                        colorSuccess: string;
                        colorError: string;
                        colorWarning: string;
                        colorLoading: string;
                        boxShadow: string;
                        boxShadowInfo: string;
                        boxShadowSuccess: string;
                        boxShadowError: string;
                        boxShadowWarning: string;
                        boxShadowLoading: string;
                        iconColor: string;
                        iconColorInfo: string;
                        iconColorSuccess: string;
                        iconColorWarning: string;
                        iconColorError: string;
                        iconColorLoading: string;
                        closeColorHover: string;
                        closeColorPressed: string;
                        closeIconColor: string;
                        closeIconColorHover: string;
                        closeIconColorPressed: string;
                        closeColorHoverInfo: string;
                        closeColorPressedInfo: string;
                        closeIconColorInfo: string;
                        closeIconColorHoverInfo: string;
                        closeIconColorPressedInfo: string;
                        closeColorHoverSuccess: string;
                        closeColorPressedSuccess: string;
                        closeIconColorSuccess: string;
                        closeIconColorHoverSuccess: string;
                        closeIconColorPressedSuccess: string;
                        closeColorHoverError: string;
                        closeColorPressedError: string;
                        closeIconColorError: string;
                        closeIconColorHoverError: string;
                        closeIconColorPressedError: string;
                        closeColorHoverWarning: string;
                        closeColorPressedWarning: string;
                        closeIconColorWarning: string;
                        closeIconColorHoverWarning: string;
                        closeIconColorPressedWarning: string;
                        closeColorHoverLoading: string;
                        closeColorPressedLoading: string;
                        closeIconColorLoading: string;
                        closeIconColorHoverLoading: string;
                        closeIconColorPressedLoading: string;
                        loadingColor: string;
                        lineHeight: string;
                        borderRadius: string;
                        margin: string;
                        padding: string;
                        maxWidth: string;
                        minWidth: string;
                        iconMargin: string;
                        closeMargin: string;
                        closeSize: string;
                        closeIconSize: string;
                        iconSize: string;
                        fontSize: string;
                    },
                    any
                >
            >
        >;
    },
    {
        mergedClsPrefix: globalThis.ComputedRef<string>;
        messageRefs: globalThis.Ref<Record<string, PrivateMessageRef>>;
        messageList: globalThis.Ref<
            {
                key: string;
                content?: ContentType | undefined;
                duration?: number | undefined;
                closable?: boolean | undefined;
                keepAliveOnHover?: boolean | undefined;
                type: MessageType;
                icon?: (() => VNodeChild) | undefined;
                showIcon?: boolean | undefined;
                onClose?: (() => void) | undefined;
                destroy: () => void;
            }[]
        >;
        handleAfterLeave: (key: string) => void;
    } & MessageApiInjection,
    unknown,
    {},
    {},
    import('vue').ComponentOptionsMixin,
    import('vue').ComponentOptionsMixin,
    {},
    string,
    import('vue').VNodeProps &
        import('vue').AllowedComponentProps &
        import('vue').ComponentCustomProps,
    Readonly<
        ExtractPropTypes<{
            to: PropType<string | HTMLElement>;
            duration: {
                type: NumberConstructor;
                default: number;
            };
            keepAliveOnHover: BooleanConstructor;
            max: NumberConstructor;
            placement: {
                type: PropType<
                    | 'bottom'
                    | 'top'
                    | 'top-left'
                    | 'top-right'
                    | 'bottom-left'
                    | 'bottom-right'
                >;
                default: string;
            };
            closable: BooleanConstructor;
            containerStyle: PropType<string | CSSProperties>;
            theme: PropType<
                import('../../_mixins').Theme<
                    'Message',
                    {
                        closeBorderRadius: string;
                        textColor: string;
                        textColorInfo: string;
                        textColorSuccess: string;
                        textColorError: string;
                        textColorWarning: string;
                        textColorLoading: string;
                        color: string;
                        colorInfo: string;
                        colorSuccess: string;
                        colorError: string;
                        colorWarning: string;
                        colorLoading: string;
                        boxShadow: string;
                        boxShadowInfo: string;
                        boxShadowSuccess: string;
                        boxShadowError: string;
                        boxShadowWarning: string;
                        boxShadowLoading: string;
                        iconColor: string;
                        iconColorInfo: string;
                        iconColorSuccess: string;
                        iconColorWarning: string;
                        iconColorError: string;
                        iconColorLoading: string;
                        closeColorHover: string;
                        closeColorPressed: string;
                        closeIconColor: string;
                        closeIconColorHover: string;
                        closeIconColorPressed: string;
                        closeColorHoverInfo: string;
                        closeColorPressedInfo: string;
                        closeIconColorInfo: string;
                        closeIconColorHoverInfo: string;
                        closeIconColorPressedInfo: string;
                        closeColorHoverSuccess: string;
                        closeColorPressedSuccess: string;
                        closeIconColorSuccess: string;
                        closeIconColorHoverSuccess: string;
                        closeIconColorPressedSuccess: string;
                        closeColorHoverError: string;
                        closeColorPressedError: string;
                        closeIconColorError: string;
                        closeIconColorHoverError: string;
                        closeIconColorPressedError: string;
                        closeColorHoverWarning: string;
                        closeColorPressedWarning: string;
                        closeIconColorWarning: string;
                        closeIconColorHoverWarning: string;
                        closeIconColorPressedWarning: string;
                        closeColorHoverLoading: string;
                        closeColorPressedLoading: string;
                        closeIconColorLoading: string;
                        closeIconColorHoverLoading: string;
                        closeIconColorPressedLoading: string;
                        loadingColor: string;
                        lineHeight: string;
                        borderRadius: string;
                        margin: string;
                        padding: string;
                        maxWidth: string;
                        minWidth: string;
                        iconMargin: string;
                        closeMargin: string;
                        closeSize: string;
                        closeIconSize: string;
                        iconSize: string;
                        fontSize: string;
                    },
                    any
                >
            >;
            themeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Message',
                        {
                            closeBorderRadius: string;
                            textColor: string;
                            textColorInfo: string;
                            textColorSuccess: string;
                            textColorError: string;
                            textColorWarning: string;
                            textColorLoading: string;
                            color: string;
                            colorInfo: string;
                            colorSuccess: string;
                            colorError: string;
                            colorWarning: string;
                            colorLoading: string;
                            boxShadow: string;
                            boxShadowInfo: string;
                            boxShadowSuccess: string;
                            boxShadowError: string;
                            boxShadowWarning: string;
                            boxShadowLoading: string;
                            iconColor: string;
                            iconColorInfo: string;
                            iconColorSuccess: string;
                            iconColorWarning: string;
                            iconColorError: string;
                            iconColorLoading: string;
                            closeColorHover: string;
                            closeColorPressed: string;
                            closeIconColor: string;
                            closeIconColorHover: string;
                            closeIconColorPressed: string;
                            closeColorHoverInfo: string;
                            closeColorPressedInfo: string;
                            closeIconColorInfo: string;
                            closeIconColorHoverInfo: string;
                            closeIconColorPressedInfo: string;
                            closeColorHoverSuccess: string;
                            closeColorPressedSuccess: string;
                            closeIconColorSuccess: string;
                            closeIconColorHoverSuccess: string;
                            closeIconColorPressedSuccess: string;
                            closeColorHoverError: string;
                            closeColorPressedError: string;
                            closeIconColorError: string;
                            closeIconColorHoverError: string;
                            closeIconColorPressedError: string;
                            closeColorHoverWarning: string;
                            closeColorPressedWarning: string;
                            closeIconColorWarning: string;
                            closeIconColorHoverWarning: string;
                            closeIconColorPressedWarning: string;
                            closeColorHoverLoading: string;
                            closeColorPressedLoading: string;
                            closeIconColorLoading: string;
                            closeIconColorHoverLoading: string;
                            closeIconColorPressedLoading: string;
                            loadingColor: string;
                            lineHeight: string;
                            borderRadius: string;
                            margin: string;
                            padding: string;
                            maxWidth: string;
                            minWidth: string;
                            iconMargin: string;
                            closeMargin: string;
                            closeSize: string;
                            closeIconSize: string;
                            iconSize: string;
                            fontSize: string;
                        },
                        any
                    >
                >
            >;
            builtinThemeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Message',
                        {
                            closeBorderRadius: string;
                            textColor: string;
                            textColorInfo: string;
                            textColorSuccess: string;
                            textColorError: string;
                            textColorWarning: string;
                            textColorLoading: string;
                            color: string;
                            colorInfo: string;
                            colorSuccess: string;
                            colorError: string;
                            colorWarning: string;
                            colorLoading: string;
                            boxShadow: string;
                            boxShadowInfo: string;
                            boxShadowSuccess: string;
                            boxShadowError: string;
                            boxShadowWarning: string;
                            boxShadowLoading: string;
                            iconColor: string;
                            iconColorInfo: string;
                            iconColorSuccess: string;
                            iconColorWarning: string;
                            iconColorError: string;
                            iconColorLoading: string;
                            closeColorHover: string;
                            closeColorPressed: string;
                            closeIconColor: string;
                            closeIconColorHover: string;
                            closeIconColorPressed: string;
                            closeColorHoverInfo: string;
                            closeColorPressedInfo: string;
                            closeIconColorInfo: string;
                            closeIconColorHoverInfo: string;
                            closeIconColorPressedInfo: string;
                            closeColorHoverSuccess: string;
                            closeColorPressedSuccess: string;
                            closeIconColorSuccess: string;
                            closeIconColorHoverSuccess: string;
                            closeIconColorPressedSuccess: string;
                            closeColorHoverError: string;
                            closeColorPressedError: string;
                            closeIconColorError: string;
                            closeIconColorHoverError: string;
                            closeIconColorPressedError: string;
                            closeColorHoverWarning: string;
                            closeColorPressedWarning: string;
                            closeIconColorWarning: string;
                            closeIconColorHoverWarning: string;
                            closeIconColorPressedWarning: string;
                            closeColorHoverLoading: string;
                            closeColorPressedLoading: string;
                            closeIconColorLoading: string;
                            closeIconColorHoverLoading: string;
                            closeIconColorPressedLoading: string;
                            loadingColor: string;
                            lineHeight: string;
                            borderRadius: string;
                            margin: string;
                            padding: string;
                            maxWidth: string;
                            minWidth: string;
                            iconMargin: string;
                            closeMargin: string;
                            closeSize: string;
                            closeIconSize: string;
                            iconSize: string;
                            fontSize: string;
                        },
                        any
                    >
                >
            >;
        }>
    >,
    {
        duration: number;
        closable: boolean;
        placement:
            | 'bottom'
            | 'top'
            | 'top-left'
            | 'top-right'
            | 'bottom-left'
            | 'bottom-right';
        keepAliveOnHover: boolean;
    },
    {}
>;
export default _default;
