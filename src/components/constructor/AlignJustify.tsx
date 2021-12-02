import React from "react";
import { ModelConfig } from "../../base/base.types";
import Model from "../../base/model/Model";
import { Align } from "../components.types";
import alignHandlerFn from "../handler/alignHandlerFn";
import { RiAlignJustify } from "react-icons/ri";

const config = {
  name: "alignJustify",
  type: "click",
  buttonIcon: <RiAlignJustify />,
  handlerFn: alignHandlerFn,
} as ModelConfig;
export default function AlignJustify({ editorState }: Align) {
  return (
    <Model
      btnType="button"
      editorState={editorState}
      config={config}
      //@ts-ignore
      onCurrentStyle={(styles) => ({
        "data-selected": styles.textAlign === "justify",
      })}
    />
  );
}
