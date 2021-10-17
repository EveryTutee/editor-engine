import React, { Dispatch, SetStateAction } from 'react';
import { EditorStateType, HandlerFnProps, ModelConfig } from '../base.types';
export default function Model({ editorState, config, subMenuView, onCurrentStyle, btnType, accept }: ModelProps): JSX.Element;
interface ModelProps {
    editorState: EditorStateType;
    config: ModelConfig;
    subMenuView?: Dispatch<SetStateAction<{
        Menu: React.FunctionComponent<HandlerFnProps>;
        props: any;
    } | null>>;
    onCurrentStyle?: (styles: CSSStyleDeclaration) => any;
    btnType: 'file' | 'button' | 'text';
    accept?: string;
}
export {};
