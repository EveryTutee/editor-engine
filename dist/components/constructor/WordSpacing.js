import React from 'react';
import Model from '../../base/model/Model';
import { CgSpaceBetween } from 'react-icons/cg';
import wordSpacingHandlerFn from '../handler/wordSpacingHandlerFn';
const config = {
    buttonIcon: React.createElement(CgSpaceBetween, null),
    name: "word-spacing",
    type: 'submenu',
    handlerFn: wordSpacingHandlerFn,
};
export default function WordSpacing({ editorState, onClick }) {
    return (React.createElement(Model, { config: config, editorState: editorState, btnType: 'button', onCurrentStyle: (styles) => (styles.fontSize), subMenuView: onClick }));
}
