import { clientCoord } from "./clientCoordinates";
export function moveHandler(editorState, concern, event, dir) {
    let mousePosition = clientCoord(event);
    let button = event.target;
    let editor = editorState.editor;
    if (!editor || !button || !concern)
        return;
    let editorRect = editor.getBoundingClientRect();
    let isDown = true;
    const onmouseup = () => isDown = false;
    const onmousemove = (e) => {
        if (!isDown)
            return;
        mousePosition = clientCoord(e);
        const { width, height } = editorRect;
        const concernRect = concern.getBoundingClientRect();
        let x = mousePosition.x - editorRect.x;
        let y = mousePosition.y - editorRect.y;
        if (dir === 'both' || dir === 'x') {
            if (x < width - concernRect.width && x > 0)
                concern.style.setProperty('left', ((x / editorRect.width) * 100) + "%");
        }
        if (dir === 'both' || dir === 'y') {
            if (y < height - concernRect.height && y > 0)
                concern.style.setProperty('top', y + "px");
        }
    };
    editorState.__document__.addEventListener('mouseup', onmouseup, false);
    editorState.__document__.addEventListener('touchend', onmouseup, false);
    editorState.__document__.addEventListener('mousemove', onmousemove, false);
    editorState.__document__.addEventListener('touchmove', onmousemove, false);
    if (!isDown) {
        editorState.__document__.removeEventListener('mouseup', onmouseup, false);
        editorState.__document__.removeEventListener('touchend', onmouseup, false);
        editorState.__document__.removeEventListener('mousemove', onmousemove, false);
        editorState.__document__.removeEventListener('touchmove', onmousemove, false);
    }
}
