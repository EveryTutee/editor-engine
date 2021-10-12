import React, { Fragment, MouseEvent, useCallback, useEffect, useRef } from 'react';
import { onResizeMouseDownHandler } from '../../utils/resizeHandler';
import { EditorProps } from '../base.types';
import { defaultName } from '../model/Draggable';
import { removeContext } from './utils';

// Returns the Editor or MainTextArea :)
var c = 0
export default function Editor({ editorState, placeholder, readonly, id, onChange, type = 'editor' }: EditorProps) {
    const editorRef = useRef<HTMLDivElement | null>(null);

    function resizeEditor(e: globalThis.MouseEvent | TouchEvent) {
        if (!editorState.editor) return;
        console.log("ola amigas")
        onResizeMouseDownHandler(editorState, editorState.editor, e, 'y', true);

    }

    function canvasClick(e: MouseEvent<HTMLDivElement>) {
        if (type !== 'canvas') return;
        if (!editorState.editor) return;

        let target = e.target as HTMLElement;
        target = target && !(target.classList.contains(defaultName)) ? target.parentElement as HTMLElement : target
        if (!target) return;

        if (!target.classList.contains(defaultName)) {
            console.log(target)
            removeContext(editorState.__document__);
        }


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

    useEffect(() => {
        if (type !== 'canvas') return;
        if (!editorRef.current) return;

        //@ts-ignore
        editorRef.current.addEventListener('deletebox', deleteBoxEventHandler, false);
        return () => {
            //@ts-ignore
            editorRef.current?.removeEventListener('deletebox', deleteBoxEventHandler, false);
        }
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
                onClick={canvasClick}
            >
                <p><br /></p>
            </div >
            {type === 'canvas' &&
                <button
                    className="canvasResizer"
                    //@ts-expect-error
                    onMouseDown={resizeEditor}
                    //@ts-expect-error
                    onTouchStart={resizeEditor} />}
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
            characterData: true,
            attributeFilter: ["#contextMenu"]
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
