export function italicsHandlerFn({ editorState }) {
    editorState.__document__.execCommand('italic', false, 'true');
    return null;
}
