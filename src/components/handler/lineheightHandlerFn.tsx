import React from "react";
import { render } from "react-dom";
import { EditorStateType, HandlerFnProps } from "../../base/base.types";
import { execBlockStyle } from "../../utils/domManipulation";

export default function lineheightHandlerFn({
  name,
  editorState,
  onBack,
}: HandlerFnProps) {
  function onClick(e: React.MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLElement;
    if (!target) return;
    const value = target.id;

    execBlockStyle(name, value, editorState.__document__);
  }

  render(
    <div id={"subMenu" + name} className="subMenuWrapper">
      <div className="subMenuHeading">
        <button
          onClick={() => onBack?.(document.getElementById("subMenu" + name))}
        >
          Back
        </button>
        <span>{name}</span>
      </div>

      <div>
        {LINE_HEIGHT.map((value, key) => (
          <button
            className="modelBtn"
            id={value}
            key={value + key}
            onClick={onClick}
          >
            {value}
          </button>
        ))}
      </div>
    </div>,
    document.getElementById("expanded")
  );
}

export const LINE_HEIGHT = ["1", "1.15", "1.5", "2"];
