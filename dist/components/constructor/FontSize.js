import React, { Fragment } from 'react';
import Model from '../../base/model/Model';
import fontSizeHandlerFn from '../handler/fontSizeHandlerFn';
const config = {
    buttonIcon: React.createElement(Fragment, null, "16px"),
    name: "fontSize",
    type: 'submenu',
    handlerFn: fontSizeHandlerFn,
};
export default function FontSize({ editorState, onClick }) {
    return (React.createElement(Model, { config: config, editorState: editorState, btnType: 'text', onCurrentStyle: (styles) => (styles.fontSize), subMenuView: onClick }));
}
