import React, { useEffect, MouseEvent, Fragment } from 'react'
import { createPortal, hydrate, render } from 'react-dom'
import { moveHandler } from '../utils/moveHandler'
import { onResizeMouseDownHandler } from '../utils/resizeHandler';
import { ContextMenuItemsProps, ContextMenuWrapper } from './ui.types';
import { FiMove } from 'react-icons/fi';
import { AiFillDelete } from 'react-icons/ai';
import { deleteHandler } from '../utils/deleteHandler';
import { removeContext } from '../base/core/utils';


function ContextMenuItems({ editorState, parent }: ContextMenuItemsProps) {
    function __moveHandler__(e: globalThis.MouseEvent | TouchEvent) {
        e.preventDefault();
        e.stopPropagation()
        moveHandler(editorState, parent, e, 'both');
    }

    function __resizeHandler__(e: globalThis.MouseEvent | TouchEvent) {
        e.preventDefault();
        e.stopPropagation();
        onResizeMouseDownHandler(editorState, parent, e, 'both');
    }

    function __deleteHandler__(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        e.stopPropagation();

        deleteHandler(editorState, parent);

    }
    return (
        <div id="contextMenu" className="contextMenu">
            <div className="ctxBtnWrapper">
                {/* @ts-expect-error */}
                <button className="ctxBtn move" onMouseDown={__moveHandler__} onTouchStart={__moveHandler__}>
                    <FiMove />
                </button>

                <button className="ctxBtn delete" onClick={__deleteHandler__}><AiFillDelete /></button>
            </div>

            {/* @ts-expect-error */}
            <button className="ctxBtn resize" onMouseDown={__resizeHandler__} onTouchStart={__resizeHandler__}></button>

        </div>
    )
}

export default function ContextMenu({ editorState, parent }: ContextMenuWrapper) {

    return createPortal(
        <ContextMenuItems editorState={editorState} parent={parent} />,
        parent
    )
}


