import React, { Fragment, useEffect, useRef } from 'react';
import getParent from '../../utils/getParent';
import { onResizeMouseDownHandler } from '../../utils/resizeHandler';
import { defaultName, draggableOnClick } from '../model/Draggable';
import { removeContext } from './utils';
// Returns the Editor or MainTextArea :)
export default function Editor({ editorState, placeholder, readonly, id, onChange, type = 'editor' }) {
    const editorRef = useRef(null);
    function resizeEditor(e) {
        if (!editorState.editor)
            return;
        console.log("ola amigas");
        onResizeMouseDownHandler(editorState, editorState.editor, e, 'y', true);
    }
    function canvasClick(e) {
        if (type !== 'canvas')
            return;
        if (!editorState.editor)
            return;
        const target = e.target;
        const parent = getParent(target, `.${defaultName}`);
        if (!parent)
            return;
        if (parent.classList.contains(defaultName)) {
            draggableOnClick(parent, editorState);
        }
        else {
            removeContext(editorState.__document__);
        }
    }
    useEffect(() => {
        if (!editorRef.current)
            return;
        editorState.setEditor(editorRef.current);
        const obs = observeEditor(editorRef.current, () => {
            if (!editorRef.current)
                return;
            const clone = editorRef.current.cloneNode(true);
            removeContext(clone);
            console.log(clone);
            const innerHTML = clone.outerHTML;
            const newState = {
                ...editorState,
                content: innerHTML,
            };
            newState?.setUndoStack?.(newState.content);
            onChange?.(newState);
        });
        return () => {
            obs?.disconnect();
            editorRef.current = null;
        };
        //eslint-disable-next-line
    }, []);
    return (React.createElement(Fragment, null,
        React.createElement("div", { key: id, ref: editorRef, className: "main_editor " + id, contentEditable: !readonly, id: id, placeholder: placeholder, suppressContentEditableWarning: true, style: {
                position: type === 'canvas' ? 'relative' : 'static'
            }, onClick: canvasClick },
            React.createElement("p", null,
                React.createElement("br", null))),
        type === 'canvas' &&
            React.createElement("button", { className: "canvasResizer", 
                //@ts-expect-error
                onMouseDown: resizeEditor, 
                //@ts-expect-error
                onTouchStart: resizeEditor })));
}
const observeEditor = (node, callback) => {
    if (!node || node.nodeType !== 1)
        return;
    if (window.MutationObserver) {
        const observer = new MutationObserver(callback);
        observer.observe(node, {
            childList: true,
            subtree: true,
            characterData: true,
        });
        return observer;
    }
    node.addEventListener('DOMNodeInserted', callback, false);
    node.addEventListener('DOMNodeRemoved', callback, false);
    return {
        disconnect: () => {
            node.removeEventListener('DOMNodeInserted', callback, false);
            node.removeEventListener('DOMNodeRemoved', callback, false);
        }
    };
};
