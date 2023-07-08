import { PropType } from 'vue';
type DragHandler = (e: DragEvent) => void;
export interface UseDragDropOptions {
    draggable: boolean;
    onDragend: DragHandler;
    onDragenter: DragHandler;
    onDragleave: DragHandler;
    onDragover: DragHandler;
    onDragstart: DragHandler;
    onDrop: DragHandler;
}
/**
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API
 *
 * @usage
 * const { onDrop, onDragover, ...props } = useDragDrop({
 *     draggable: true,
 *     onDragstart: () => {
 *         // do something
 *     },
 *     onDragover: (e: DragEvent) => {
 *         e.preventDefault()
 *     },
 *     onDrop: () => {
 *         // do something
 *     }
 * })
 *
 * <div {...props}>I am both draggable</div>
 * <div onDrop={onDrop} onDragover="onDragover">I am both droppable</div>
 */
export declare function useDragDrop(props: Partial<UseDragDropOptions>): {
    draggable: boolean | undefined;
    onDrag: DragHandler | undefined;
    onDragend: DragHandler | undefined;
    onDragenter: DragHandler | undefined;
    onDragleave: DragHandler | undefined;
    onDragover: DragHandler | undefined;
    onDragstart: DragHandler | undefined;
    onDrop: DragHandler | undefined;
};
export declare namespace useDragDrop {
    var props: {
        readonly draggable: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly onDrag: PropType<DragHandler>;
        readonly onDragend: PropType<DragHandler>;
        readonly onDragenter: PropType<DragHandler>;
        readonly onDragleave: PropType<DragHandler>;
        readonly onDragover: PropType<DragHandler>;
        readonly onDragstart: PropType<DragHandler>;
        readonly onDrop: PropType<DragHandler>;
    };
}
export {};
