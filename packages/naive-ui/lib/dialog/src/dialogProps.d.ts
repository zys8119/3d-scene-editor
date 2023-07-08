import { PropType, VNodeChild } from 'vue';
import type { ButtonProps } from '../../button';
import type { ExtractPublicPropTypes } from '../../_utils';
import type { IconPlacement } from './interface';
declare const dialogProps: {
    readonly icon: PropType<() => VNodeChild>;
    readonly type: {
        readonly type: PropType<
            'default' | 'error' | 'info' | 'success' | 'warning'
        >;
        readonly default: 'default';
    };
    readonly title: PropType<string | (() => VNodeChild)>;
    readonly closable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly negativeText: StringConstructor;
    readonly positiveText: StringConstructor;
    readonly positiveButtonProps: PropType<ButtonProps>;
    readonly negativeButtonProps: PropType<ButtonProps>;
    readonly content: PropType<string | (() => VNodeChild)>;
    readonly action: PropType<() => VNodeChild>;
    readonly showIcon: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly loading: BooleanConstructor;
    readonly bordered: BooleanConstructor;
    readonly iconPlacement: PropType<IconPlacement>;
    readonly onPositiveClick: PropType<(e: MouseEvent) => void>;
    readonly onNegativeClick: PropType<(e: MouseEvent) => void>;
    readonly onClose: PropType<() => void>;
};
export type DialogProps = ExtractPublicPropTypes<typeof dialogProps>;
export { dialogProps };
export declare const dialogPropKeys: (
    | 'type'
    | 'content'
    | 'icon'
    | 'title'
    | 'action'
    | 'positiveText'
    | 'negativeText'
    | 'loading'
    | 'bordered'
    | 'showIcon'
    | 'closable'
    | 'onClose'
    | 'iconPlacement'
    | 'positiveButtonProps'
    | 'negativeButtonProps'
    | 'onPositiveClick'
    | 'onNegativeClick'
)[];
