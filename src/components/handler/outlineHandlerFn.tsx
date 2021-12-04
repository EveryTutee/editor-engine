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

  function onClick(e: React.MouseEvent<HTMLButtonElement>) {
    if (!editorState.editor) return;
    const target = e.target as HTMLDivElement;
    const id = target.id;

    const range = getSelection()?.getRangeAt(0);
    if (!range || range.collapsed) {
      editorState.editor.querySelector(`#${id}`)?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
      });
    } else {
      editorState.__document__.execCommand("createLink", false, "/#" + id);
      //   editorState.__document__.execCommand("fontSize", false, "7");

      //   (
      //     document.querySelectorAll(`span`) as NodeListOf<HTMLSpanElement>
      //   ).forEach((span: HTMLSpanElement) => {
      //     if (span.style.fontSize === "xxx-large") {
      //       const a = editorState.__document__.createElement("a");
      //       a.href = "/#" + id;
      //       a.setAttribute("style", "");
      //       a.innerHTML = span.innerHTML;

      //       span.replaceWith(a);
      //     }
      //   });
    }
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
        {outline &&
          outline.map((value, index) => (
            <button
              className="modelBtn"
              id={value.id}
              onClick={onClick}
              key={value.id + index}
              style={{
                //@ts-ignore
                marginLeft: marginArray[value.nodeName],
              }}
            >
              {value.textContent}
            </button>
          ))}
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
