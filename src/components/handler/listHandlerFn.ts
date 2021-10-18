import { EditorStateType, HandlerFnProps } from "../../base/base.types";

export function listHandlerFn({ name, editorState }: HandlerFnProps) {
    if (!editorState.editor) return null;
    let cmd = 'insertUnorderedList';
    switch (name) {
        case 'Bullets': cmd = 'insertUnorderedList'; break;
        case 'Numbers': cmd = 'insertOrderedList'; break;
        default: cmd = 'insertUnorderedList'; break
    }

    editorState.__document__.execCommand(cmd, false, 'true');
    editorState.editor.querySelectorAll('li').forEach(li => {
        li.setAttribute('style', 'margin-left: 2rem');
    })
    return null
}