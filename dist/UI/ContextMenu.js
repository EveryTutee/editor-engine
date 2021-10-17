import React from 'react';
import { createPortal } from 'react-dom';
import { moveHandler } from '../utils/moveHandler';
import { onResizeMouseDownHandler } from '../utils/resizeHandler';
import { FiMove } from 'react-icons/fi';
import { AiFillDelete } from 'react-icons/ai';
import { deleteHandler } from '../utils/deleteHandler';
export const DEFAULT_CONTEXT_ITEMS = [
    'move',
    'delete',
    'resize'
];
function ContextMenuItems({ editorState, parent, toShow }) {
    const show = toShow || DEFAULT_CONTEXT_ITEMS;
    function __moveHandler__(e) {
        e.preventDefault();
        e.stopPropagation();
        moveHandler(editorState, parent, e, 'both');
    }
    function __resizeHandler__(e) {
        e.preventDefault();
        e.stopPropagation();
        onResizeMouseDownHandler(editorState, parent, e, parent.id.includes('Audio') ? 'x' : 'both');
    }
    function __deleteHandler__(e) {
        e.preventDefault();
        e.stopPropagation();
        deleteHandler(editorState, parent);
    }
    return (React.createElement("div", { id: "contextMenu", className: "contextMenu" },
        React.createElement("div", { className: "ctxBtnWrapper" },
            show.includes('move') && React.createElement("button", { className: "ctxBtn move", onMouseDown: __moveHandler__, onTouchStart: __moveHandler__ },
                React.createElement(FiMove, null)),
            show.includes('delete') && React.createElement("button", { className: "ctxBtn delete", onClick: __deleteHandler__ },
                React.createElement(AiFillDelete, null))),
        show.includes('resize') && React.createElement("button", { className: "ctxBtn resize", onMouseDown: __resizeHandler__, onTouchStart: __resizeHandler__ })));
}
export default function ContextMenu({ editorState, parent, toShow }) {
    return createPortal(React.createElement(ContextMenuItems, { editorState: editorState, parent: parent, toShow: toShow }), parent);
}
