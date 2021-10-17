import React, { Fragment } from "react";
import { ModelConfig } from "../../base/base.types";
import Model from "../../base/model/Model";
import { FontSize } from "../components.types";
import fontSizeHandlerFn from "../handler/fontSizeHandlerFn";
const config = {
  buttonIcon: <Fragment>16px</Fragment>,
  name: "Font Size",
  type: "submenu",
  handlerFn: fontSizeHandlerFn,
} as ModelConfig;

export default function FontSize({ editorState, onClick }: FontSize) {
  return (
    <Model
      config={config}
      editorState={editorState}
      btnType="text"
      onCurrentStyle={(styles) => styles.fontSize}
      subMenuView={onClick}
    />
  );
}
