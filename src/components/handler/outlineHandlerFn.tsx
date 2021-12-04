import React, { createElement } from "react";
import { render } from "react-dom";
import { EditorState } from "../..";
import { HandlerFnProps } from "../../base/base.types";

const outlineArray = (editor: HTMLDivElement) =>
  Array.from(editor.querySelectorAll("*")).filter((value) =>
    /h\d/gim.test(value.nodeName.toLowerCase())
  );

export default function outlineHandlerFn({
  editorState,
  onBack,
  name,
}: HandlerFnProps) {
  const outline = editorState.editor && outlineArray(editorState.editor);

  render(
    <div id={"subMenu" + name} className="subMenuWrapper">
      <div className="subMenuHeading">
        <button
          onClick={() => onBack(document.getElementById("subMenu" + name))}
        >
          Back
        </button>
        <span>{name}</span>
      </div>
    </div>,
    document.getElementById("expanded")
  );
}

const marginArray = {
  H2: "1rem",
  H3: "2rem",
  H4: "3rem",
  H5: "4rem",
  H6: "5rem",
};
