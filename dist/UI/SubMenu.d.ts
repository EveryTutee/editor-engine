/// <reference types="react" />
import { EditorStateType } from "../base/base.types";
interface SubMenuProps {
    editorState: EditorStateType;
    onBack: any;
    name: string;
}
export default function SubMenu({ editorState, onBack, name }: SubMenuProps): JSX.Element;
export {};
