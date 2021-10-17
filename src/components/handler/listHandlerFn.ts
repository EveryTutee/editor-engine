import { EditorStateType } from "../../base/base.types";

export function listHandlerFn(e: any, name: string, editorState: EditorStateType) {
    let cmd = 'insertUnorderedList';
    switch (name) {
        case 'Bullets': cmd = 'insertUnorderedList'; break;
        case 'Numbers': cmd = 'insertOrderedList'; break;
    }

    editorState.__document__.execCommand(cmd, false, 'true');
    return null
}