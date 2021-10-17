export function underlineHandlerFn({ editorState }) {
    editorState.__document__.execCommand('underline', false, 'true');
    return null;
}
