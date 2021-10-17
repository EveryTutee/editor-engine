import React from 'react';
import { render } from 'react-dom';
import { renderToStaticMarkup } from 'react-dom/server';
import ContextMenu from '../../UI/ContextMenu';
export const defaultName = "draggable";
export function Textbox({ childClassName, parentClassName, parentId, children, parentStyle, childId, childStyle, contentEditable }) {
    return (React.createElement("div", { id: parentId, className: parentClassName + " " + defaultName, style: parentStyle, key: parentId + childId, contentEditable: contentEditable },
        React.createElement("div", { id: childId, style: childStyle, className: childClassName }, children)));
}
export function insertDraggable(editorState, markup, identifier, toShow) {
    const { editor } = editorState;
    if (!editor)
        return;
    const div = renderToStaticMarkup(markup);
    editor.innerHTML += div;
    const draggable = editor.querySelector(`#${identifier}`);
    if (!draggable)
        return;
    draggable.addEventListener('click', () => draggableOnClick(draggable, editorState, toShow), false);
    draggable.focus();
}
export function removeDraggable(editorState, draggable, toShow) {
    draggable.removeEventListener('click', () => draggableOnClick(draggable, editorState, toShow), false);
    draggable.remove();
    editorState.editor?.focus();
}
export function draggableOnClick(parent, editorState, toShow) {
    if (parent.classList.contains('selectedBox'))
        return;
    parent.classList.add('selectedBox');
    parent.innerHTML += "<div class=\"contextMenuWrapper\"></div>";
    const contextMenuWrapper = parent.querySelector('.contextMenuWrapper');
    render(React.createElement(ContextMenu, { parent: parent, editorState: editorState, toShow: toShow }), contextMenuWrapper);
    // contextMenuWrapper.remove()
}
