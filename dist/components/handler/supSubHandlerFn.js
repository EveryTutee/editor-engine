export default function supSubHandlerFn({ editorState, name }) {
    editorState.__document__.execCommand(name, false, "true");
    return null;
}
