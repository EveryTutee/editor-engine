export function boldHandlerFn({ editorState }) {
    editorState.__document__.execCommand('bold', false, 'true');
    return null;
}
