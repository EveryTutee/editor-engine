import { EditorStateType, HandlerFn } from "../../base/base.types";

export default function alignHandlerFn(e: any, name: string, editorState: EditorStateType) {
    console.log(name)
    let cmd = 'justifyLeft';
    switch (name) {
        case 'alignLeft': cmd = 'justifyLeft'; break;
        case 'alignRight': cmd = 'justifyRight'; break;
        case 'alignCenter': cmd = 'justifyCenter'; break;
        default: cmd = 'justifyLeft'; break;
    }
    console.log(cmd)

    editorState.__document__.execCommand(cmd, false, 'true');



    return null;
}