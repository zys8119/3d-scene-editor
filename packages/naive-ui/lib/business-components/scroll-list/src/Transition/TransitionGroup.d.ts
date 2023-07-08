import { TransitionProps } from './Transition';
export type TransitionGroupProps = Omit<TransitionProps, 'mode'> & {
    tag?: string;
    moveClass?: string;
};
export declare const TransitionGroup: new () => {
    $props: TransitionGroupProps;
};
