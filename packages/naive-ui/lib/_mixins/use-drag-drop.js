Object.defineProperty(exports, '__esModule', { value: true });
exports.useDragDrop = void 0;
function useDragDrop(props) {
    return {
        draggable: props.draggable,
        onDrag: props.onDragend,
        onDragend: props.onDragend,
        onDragenter: props.onDragenter,
        onDragleave: props.onDragleave,
        onDragover: props.onDragover,
        onDragstart: props.onDragstart,
        onDrop: props.onDrop,
    };
}
exports.useDragDrop = useDragDrop;
useDragDrop.props = {
    draggable: {
        type: Boolean,
        default: false,
    },
    onDrag: Function,
    onDragend: Function,
    onDragenter: Function,
    onDragleave: Function,
    onDragover: Function,
    onDragstart: Function,
    onDrop: Function,
};
