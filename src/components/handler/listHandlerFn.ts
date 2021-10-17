import { EditorStateType, HandlerFnProps } from "../../base/base.types";

export function listHandlerFn({ name, editorState }: HandlerFnProps) {
    let cmd = 'insertUnorderedList';
    switch (name) {
        case 'Bullets': cmd = 'insertUnorderedList'; break;
        case 'Numbers': cmd = 'insertOrderedList'; break;
    }

    editorState.__document__.execCommand(cmd, false, 'true');
    return null
}