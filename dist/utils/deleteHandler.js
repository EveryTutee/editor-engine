import { unmountComponentAtNode } from "react-dom";
import { removeDraggable } from "../base/model/Draggable";
export function deleteHandler(editorState, parent) {
    const ctxMenuHolder = parent.querySelector('.contextMenuWrapper');
    unmountComponentAtNode(ctxMenuHolder);
    ctxMenuHolder.remove();
    removeDraggable(editorState, parent);
}
