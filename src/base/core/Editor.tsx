import React, { Fragment, useCallback, useEffect, useRef } from 'react';
import { onResizeMouseDownHandler } from '../../utils/resizeHandler';
import { EditorProps } from '../base.types';

// Returns the Editor or MainTextArea :)
var c = 0
export default function Editor({ editorState, placeholder, readonly, id, onChange, type = 'editor' }: EditorProps) {
    const editorRef = useRef<HTMLDivElement | null>(null);

    function resizeEditor(e: MouseEvent | TouchEvent) {
        if (!editorState.editor) return;
        onResizeMouseDownHandler(editorState, editorState.editor, e, 'y');

    }

    useEffect(() => {
        console.log(c++)
        if (!editorRef.current) return;

        editorState.setEditor(editorRef.current);
        const obs = observeEditor(editorRef.current, () => {
            if (!editorRef.current) return;
            const innerHTML = editorRef.current.innerHTML;
            const newState = {
                ...editorState,
                content: innerHTML,
            }

            newState?.setUndoStack?.(newState.content);
            onChange?.(newState);

        });
        return () => {
            obs?.disconnect();
            editorRef.current = null;
        }
        //eslint-disable-next-line
    }, [])

    return (
        <Fragment>
            <div
                key={id}
                ref={editorRef}
                className={"main_editor " + id}
                contentEditable={!readonly}
                id={id}
                placeholder={placeholder}
                suppressContentEditableWarning={true}
                style={{
                    position: type === 'canvas' ? 'relative' : 'static'
                }}
            >
                <p><br /></p>
            </div >
            {/* @ts-expect-error */}
            {type === 'canvas' && <button className="canvasResizer" onMouseDown={resizeEditor} onTouchStart={resizeEditor} />}
        </Fragment>
    )
}

const observeEditor = (node: Node, callback: MutationCallback & EventListener) => {
    if (!node || node.nodeType !== 1) return;

    if (window.MutationObserver) {
        const observer = new MutationObserver(callback);
        observer.observe(node, {
            childList: true,
            subtree: true,
            characterData: true
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
    }
}
