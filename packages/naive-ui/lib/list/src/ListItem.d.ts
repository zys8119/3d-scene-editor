import { PropType } from 'vue';
import { MaybeArray } from '../../_utils';
declare const _default: import('vue').DefineComponent<
    {
        onClick: PropType<MaybeArray<(e: MouseEvent) => void>>;
        draggable: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        onDrag: PropType<(e: DragEvent) => void>;
        onDragend: PropType<(e: DragEvent) => void>;
        onDragenter: PropType<(e: DragEvent) => void>;
        onDragleave: PropType<(e: DragEvent) => void>;
        onDragover: PropType<(e: DragEvent) => void>;
        onDragstart: PropType<(e: DragEvent) => void>;
        onDrop: PropType<(e: DragEvent) => void>;
    },
    {
        dragProps: {
            draggable: boolean | undefined;
            onDrag: ((e: DragEvent) => void) | undefined;
            onDragend: ((e: DragEvent) => void) | undefined;
            onDragenter: ((e: DragEvent) => void) | undefined;
            onDragleave: ((e: DragEvent) => void) | undefined;
            onDragover: ((e: DragEvent) => void) | undefined;
            onDragstart: ((e: DragEvent) => void) | undefined;
            onDrop: ((e: DragEvent) => void) | undefined;
        };
        showDivider: globalThis.Ref<boolean>;
        mergedClsPrefix: globalThis.Ref<string>;
    },
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
        import('vue').ExtractPropTypes<{
            onClick: PropType<MaybeArray<(e: MouseEvent) => void>>;
            draggable: {
                readonly type: BooleanConstructor;
                readonly default: false;
            };
            onDrag: PropType<(e: DragEvent) => void>;
            onDragend: PropType<(e: DragEvent) => void>;
            onDragenter: PropType<(e: DragEvent) => void>;
            onDragleave: PropType<(e: DragEvent) => void>;
            onDragover: PropType<(e: DragEvent) => void>;
            onDragstart: PropType<(e: DragEvent) => void>;
            onDrop: PropType<(e: DragEvent) => void>;
        }>
    >,
    {
        draggable: boolean;
    },
    {}
>;
export default _default;
