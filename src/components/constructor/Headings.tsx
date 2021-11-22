import React from "react";
import { ModelConfig } from "../../base/base.types";
import Model from "../../base/model/Model";
import { FontStyle } from "../components.types";
import headingHandlerFn from "../handler/headingHandlerFn";

const config = {
  type: "submenu",
  name: "Heading",
  buttonIcon: <p>Heading</p>,
  handlerFn: headingHandlerFn,
} as ModelConfig;

export default function Headings({ editorState, onClick }: FontStyle) {
  return (
    <Model
      config={config}
      editorState={editorState}
      subMenuView={onClick}
      btnType="button"
      //   onCurrentStyle={(styles) => styles.fontSize}
    />
  );
}
