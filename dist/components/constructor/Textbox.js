import React from 'react';
import { BsTextareaResize } from 'react-icons/bs';
import Model from '../../base/model/Model';
import textboxHandlerFn from '../handler/textboxHandlerFn';
const config = {
    name: 'Textbox',
    type: 'click',
    buttonIcon: React.createElement(BsTextareaResize, null),
    handlerFn: textboxHandlerFn
};
export default function Textbox({ editorState }) {
    return (React.createElement(Model, { config: config, editorState: editorState, btnType: 'button' }));
}
