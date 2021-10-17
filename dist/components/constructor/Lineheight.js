import React from 'react';
import Model from '../../base/model/Model';
import { MdFormatLineSpacing } from 'react-icons/md';
import lineheightHandlerFn from '../handler/lineheightHandlerFn';
const config = {
    buttonIcon: React.createElement(MdFormatLineSpacing, null),
    name: "line-height",
    type: 'submenu',
    handlerFn: lineheightHandlerFn,
};
export default function Lineheight({ editorState, onClick }) {
    return (React.createElement(Model, { config: config, editorState: editorState, btnType: 'button', onCurrentStyle: (styles) => (styles.fontSize), subMenuView: onClick }));
}
