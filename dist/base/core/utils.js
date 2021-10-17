import { unmountComponentAtNode } from "react-dom";
export function removeContext(document) {
    const boxes = document.querySelectorAll('.selectedBox');
    console.log("Venom", boxes);
    boxes.forEach(box => {
        box.classList.remove('selectedBox');
        const ctxMenuHolder = box.querySelector('.contextMenuWrapper');
        const ctxMenu = box.querySelector('.contextMenu');
        unmountComponentAtNode(ctxMenuHolder);
        unmountComponentAtNode(ctxMenu);
        ctxMenuHolder.remove();
        ctxMenu.remove();
    });
}
export function cleanUpDraggables(editorState) {
    const doc = editorState.__document__;
    const boxes = doc.querySelectorAll('.selectedBox');
    boxes.forEach(box => {
        const ctxMenuHolder = box.querySelector('.contextMenuWrapper');
        unmountComponentAtNode(ctxMenuHolder);
        ctxMenuHolder.remove();
        box.remove();
    });
}
