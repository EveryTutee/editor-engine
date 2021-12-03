import React from "react";
import { render } from "react-dom";
import { HandlerFnProps } from "../../base/base.types";
import { uuid } from "../../utils/uuid";

export default function headingHandlerFn({
  editorState,
  onBack,
  name,
}: HandlerFnProps) {
  function onClick(e: React.MouseEvent<HTMLButtonElement>) {
    const element = e.target as HTMLButtonElement;
    if (!element) return;

    const value = element.id;
    const tag = `<${value}>`;
    console.log(value);

    editorState.__document__.execCommand("formatBlock", false, tag);
    editorState.editor
      ?.querySelector(`${value}:not([id])`)
      ?.setAttribute("id", uuid());
  }

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
      <div className="subMenuExpanded">
        {HeadingArray.map((size, value) => (
          <button
            className="modelBtn"
            id={`h${value + 1}`}
            key={value + size}
            onClick={onClick}
            style={{
              fontWeight: "bolder",
              fontSize: `${size}px`,
            }}
          >{`Heading ${value + 1}`}</button>
        ))}
      </div>
    </div>,
    document.getElementById("expanded")
  );
}

export const HeadingArray = [32, 24, 18.72, 16, 13.28, 10.72];
