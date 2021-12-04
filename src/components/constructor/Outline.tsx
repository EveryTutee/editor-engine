import React from "react";
import { ModelConfig } from "../../base/base.types";
import Model from "../../base/model/Model";
import { SubMenuConstructor } from "../components.types";
import outlineHandlerFn from "../handler/outlineHandlerFn";

const config = {
  buttonIcon: <p>Outline</p>,
  name: "Outline",
  type: "submenu",
  handlerFn: outlineHandlerFn,
} as ModelConfig;

export default function Outline({ editorState, onClick }: SubMenuConstructor) {
  return (
    <Model
      config={config}
      btnType="button"
      editorState={editorState}
      subMenuView={onClick}
    />
  );
}
