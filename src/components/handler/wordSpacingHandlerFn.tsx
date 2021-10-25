import React from "react";
import { render } from "react-dom";
import { EditorStateType, HandlerFnProps } from "../../base/base.types";
import { execBlockStyle } from "../../utils/domManipulation";

const baseWordSpacing = 0.25;

export default function wordSpacingHandlerFn({
  editorState,
  name,
  onBack,
}: HandlerFnProps) {
  function onClick(e: React.MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLElement;
    if (!target) return;
    const value = parseInt(target.id);
    const sValue = value * baseWordSpacing + "rem";

    execBlockStyle(name, sValue, editorState.__document__);
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
        {WORD_SPACING.map((value, key) => (
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

export const WORD_SPACING = ["1", "2", "3", "4", "5", "6", "7", "8"];
