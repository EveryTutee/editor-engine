import React, { useMemo, useState } from "react";
import { AiTwotoneHighlight } from "react-icons/ai";
import { ModelConfig } from "../../base/base.types";
import Model from "../../base/model/Model";
import { FontStyle } from "../components.types";
import ColorHandlerFn from "../handler/ColorHandlerFn";

const config = {
  name: "Highlight",
  type: "submenu",
  buttonIcon: (
    <p>
      <AiTwotoneHighlight />
      <span>Highlight</span>
    </p>
  ),
  handlerFn: ColorHandlerFn,
} as ModelConfig;
export default function BackColor({ editorState, onClick }: FontStyle) {
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
