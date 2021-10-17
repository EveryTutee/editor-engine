import React from 'react';
import { BsFileImage } from 'react-icons/bs';
import Model from '../../base/model/Model';
import imageHandlerFn from '../handler/imageHandlerFn';
const config = {
    name: 'Imagebox',
    type: 'click',
    buttonIcon: React.createElement(BsFileImage, null),
    handlerFn: imageHandlerFn
};
export default function Image({ editorState }) {
    return (React.createElement(Model, { editorState: editorState, config: config, btnType: 'file', accept: "image/*" }));
}
