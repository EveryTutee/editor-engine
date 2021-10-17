import React, { useMemo, useState } from "react";
import { ModelConfig } from "../../base/base.types";
import Model from "../../base/model/Model";
import { Bold, FontStyle } from "../components.types";
import { FaBold } from "react-icons/fa";
import { boldHandlerFn } from "../handler/bold";
import colorHandlerFn from "../handler/colorHandlerFn";
import { BiFontColor } from "react-icons/bi";

const config = {
  name: "Font Color",
  type: "submenu",
  buttonIcon: (
    <p>
      <BiFontColor />
      <span>Font Color</span>
    </p>
  ),
  handlerFn: colorHandlerFn,
} as ModelConfig;
export default function ForeColor({ editorState, onClick }: FontStyle) {
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
