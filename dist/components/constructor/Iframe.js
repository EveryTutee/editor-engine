import React from 'react';
import { ImEmbed } from 'react-icons/im';
import Model from '../../base/model/Model';
import iframeHandlerFn from '../handler/iframeHandlerFn';
const config = {
    buttonIcon: React.createElement(ImEmbed, null),
    handlerFn: iframeHandlerFn,
    name: "Iframe",
    type: 'click'
};
export default function Iframe({ editorState }) {
    return (React.createElement(Model, { btnType: 'button', config: config, editorState: editorState }));
}
