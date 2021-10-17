import React, { useMemo } from "react";
import { ModelConfig } from "../../base/base.types";
import { FontStyle } from "../components.types";
import { BiFontFamily } from "react-icons/bi";
import Model from "../../base/model/Model";
import fontstyleHandlerFn from "../handler/fontstyle";

const config = {
  type: "submenu",
  name: "Font Name", // to be the current fontstyle
  buttonIcon: <p>Font</p>,
  handlerFn: fontstyleHandlerFn,
} as ModelConfig;

export default function FontStyle({ editorState, onClick }: FontStyle) {
  return (
    <Model
      config={config}
      editorState={editorState}
      subMenuView={onClick}
      btnType="text"
      onCurrentStyle={(styles) => styles.fontFamily}
    />
  );
}
