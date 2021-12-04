import React, { useEffect, useMemo, useState } from "react";
import { Constructor } from "../components.types";

const outlineArray = (editor: HTMLDivElement) =>
  Array.from(editor.querySelectorAll("*")).filter((value) =>
    /h\d/gim.test(value.nodeName.toLowerCase())
  );

export default function Outline({ editorState }: Constructor) {
  const [outline, setOutline] = useState(
    () => editorState.editor && outlineArray(editorState.editor)
  );

  useEffect(() => {
    setOutline(() => editorState.editor && outlineArray(editorState.editor));
  }, [editorState.content]);

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
    }
  }
  return (
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
  );
}

const marginArray = {
  H2: "0rem",
  H3: "1rem",
  H4: "2rem",
  H5: "3rem",
  H6: "4rem",
};
