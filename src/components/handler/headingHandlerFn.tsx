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

    if (value !== "p")
      editorState.editor
        ?.querySelector(`${value}:not([id])`)
        ?.setAttribute("id", "a" + uuid());
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
        {headingName.map((size, value) => (
          <button
            className="modelBtn"
            id={size.tag}
            key={value + size.value}
            onClick={onClick}
            style={{
              fontWeight: "bolder",
              fontSize: `${size.value}px`,
            }}
          >
            {size.name}
          </button>
        ))}
      </div>
    </div>,
    document.getElementById("expanded")
  );
}

const headingName = [
  {
    name: "Title",
    value: 24,
    tag: "h2",
  },
  {
    name: "Subtitle",
    value: 18.72,
    tag: "h3",
  },
  {
    name: "Paragraph",
    value: 16,
    tag: "p",
  },
];
