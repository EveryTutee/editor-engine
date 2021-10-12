import { EditorStateType } from "../base/base.types";
import { clientCoord } from "./clientCoordinates";


export function onResizeMouseDownHandler(editorState: EditorStateType,
    concern: HTMLElement,
    e: MouseEvent | TouchEvent,
    dir: 'x' | 'y' | 'both') {

    let mousePosition = clientCoord(e);
    const button = e.target as HTMLButtonElement;
    const editor = editorState.editor;

    if (!editor || !button || !concern) return;

    const { right, bottom, width, height } = editor.getBoundingClientRect();
    const concernRect = concern.getBoundingClientRect();
    let isDown = true;

    const onmouseup = () => isDown = false;
    const onmousemove = (e: MouseEvent | TouchEvent) => {
        if (!isDown) return;
        mousePosition = clientCoord(e);

        let _width = Math.max(mousePosition.x - concernRect.x, 0);
        let finalWidth = ((_width / width) * 100) + "%";

        let _height = Math.max(mousePosition.y - concernRect.y, 0);
        let finalHeight = _height + "px";



        if (dir === 'both' || dir === 'x') {
            concern.style.setProperty('width', finalWidth);
        }

        if (dir === 'both' || dir === 'y') {
            concern.style.setProperty('height', finalHeight);
        }

        document.removeEventListener('touchend', onmouseup, false);
    }
    editorState.__document__.addEventListener('mousemove', onmousemove, false);
    editorState.__document__.addEventListener('touchmove', onmousemove, false);

    editorState.__document__.addEventListener('mouseup', onmouseup, false);
    editorState.__document__.addEventListener('touchend', onmouseup, false);

    if (!isDown) {
        editorState.__document__.removeEventListener('mousemove', onmousemove, false);
        editorState.__document__.removeEventListener('touchmove', onmousemove, false);

        editorState.__document__.removeEventListener('mouseup', onmouseup, false);

    }


}