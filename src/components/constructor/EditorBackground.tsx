import React, { useMemo, useState } from "react";
import { FaPaintRoller } from "react-icons/fa";
import { ModelConfig } from "../../base/base.types";
import Model from "../../base/model/Model";
import { FontStyle } from "../components.types";
import ColorHandlerFn from "../handler/ColorHandlerFn";

const config = {
  name: "Editor Background",
  type: "submenu",
  buttonIcon: (
    <p>
      <FaPaintRoller />
      <span>Editor Background</span>
    </p>
  ),
  handlerFn: ColorHandlerFn,
} as ModelConfig;
export default function EditorBackground({ editorState, onClick }: FontStyle) {
  return (
    <Model
      btnType="button"
      editorState={editorState}
      config={config}
      subMenuView={onClick}
      //@ts-ignore
      onCurrentStyle={(styles) => styles.color}
    />
  );
}
