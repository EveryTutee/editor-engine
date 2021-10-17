import React from 'react';
import Model from '../../base/model/Model';
import fontstyleHandlerFn from '../handler/fontstyle';
const config = {
    type: 'submenu',
    name: 'font',
    buttonIcon: React.createElement("p", null, "Font"),
    handlerFn: fontstyleHandlerFn
};
export default function FontStyle({ editorState, onClick }) {
    return (React.createElement(Model, { config: config, editorState: editorState, subMenuView: onClick, btnType: 'text', onCurrentStyle: (styles) => (styles.fontFamily) }));
}
