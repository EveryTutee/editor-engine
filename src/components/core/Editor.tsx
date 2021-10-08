import React, { useCallback, useEffect, useRef } from 'react';
import { EditorProps } from '../component.types';

// Returns the Editor or MainTextArea :)
export default function Editor({ editorState, placeholder, readonly, id, onChange }: EditorProps) {
    const editorRef = useRef<HTMLDivElement | null>(null);


    useEffect(() => {
        if (!editorRef.current) return;

        editorState.setEditor(editorRef.current);
        const obs = observeEditor(editorRef.current, () => {
            if (!editorRef.current) return;
            const innerHTML = editorRef.current.innerHTML;
            const newState = {
                ...editorState,
                content: innerHTML,
            }

            newState.setUndoStack(newState.content);


            onChange?.(newState);



        });
        return () => {
            obs?.disconnect();
        }
        //eslint-disable-next-line
    }, [editorRef.current])

    return (
        <div
            className="main_editor"
            contentEditable={!readonly}
            id={id}
            placeholder={placeholder}
            ref={editorRef}
            suppressContentEditableWarning={true}
        >
            <p><br /></p>
        </div>
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
