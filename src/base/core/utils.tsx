import React from "react";
import { Fragment } from "react";
import { findDOMNode, render, unmountComponentAtNode } from "react-dom";
import ContextMenu from "../../UI/ContextMenu";
import { EventDetails } from "../../utils/deleteHandler";
import { EditorStateType } from "../base.types";

export function removeContext(document: Document | HTMLElement) {
    const boxes = document.querySelectorAll('.selectedBox') as NodeListOf<HTMLElement>;
    console.log("Venom", boxes)
    boxes.forEach(box => {
        box.classList.remove('selectedBox');
        const ctxMenuHolder = box.querySelector('.contextMenuWrapper') as Element;
        const ctxMenu = box.querySelector('.contextMenu') as Element;

        unmountComponentAtNode(ctxMenuHolder);
        unmountComponentAtNode(ctxMenu);
        ctxMenuHolder.remove()
        ctxMenu.remove();
    })

}

export function cleanUpDraggables(editorState: EditorStateType) {
    const doc = editorState.__document__;
    const boxes = doc.querySelectorAll('.selectedBox') as NodeListOf<HTMLElement>;
    boxes.forEach(box => {
        const ctxMenuHolder = box.querySelector('.contextMenuWrapper') as Element;
        unmountComponentAtNode(ctxMenuHolder);
        ctxMenuHolder.remove();
        box.remove();
    })

}