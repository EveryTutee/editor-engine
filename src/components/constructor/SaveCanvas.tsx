import React, { CSSProperties, Fragment, useMemo, useRef } from "react";
import { EditorStateType } from "../../base/base.types";
import html2canvas from "html2canvas";
import { cleanUpDraggables, removeContext } from "../../base/core/utils";
import { defaultName, removeDraggable } from "../../base/model/Draggable";

const displayStyle = (width: number, height: number) =>
  ({
    position: "fixed",
    top: 0,
    left: 0,
    width,
    height,
    pointerEvents: "none",
    border: "none",
  } as CSSProperties);

export default function SaveCanvas({
  editorState,
  onClick,
  display,
  onStart,
  onEnd,
}: SaveCanvasProps) {
  const displayRef = useRef<HTMLDivElement | null>(null);
  const style = useMemo(() => {
    if (!editorState || !editorState.editor) return;
    const { width, height } = editorState.editor.getBoundingClientRect();

    return displayStyle(width, height + 10);
  }, [editorState]);

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    if (!editorState || !editorState.editor || !displayRef.current) return;

    removeContext(editorState.__document__);
    // editorState.__document__.querySelectorAll("."+defaultName).forEach(elem => {
    //   elem.classList.remove(defaultName);
    // })

    const value = editorState.content;
    const text = editorState.text;
    console.log(value);
    let editor = editorState.editor;
    onStart();
    const __display__ = displayRef.current;
    __display__.innerHTML = value;
    (__display__.firstElementChild as HTMLElement)?.style.setProperty(
      "border",
      "none"
    );
    (__display__.firstElementChild as HTMLElement)?.style.setProperty(
      "background-color",
      "transparent"
    );
    html2canvas(displayRef.current).then((canvas) => {
      const dataUrl = canvas.toDataURL("image/png");
      onClick?.(dataUrl, text, editor.getBoundingClientRect());
      editorState.setContent("<p><br/></p>");
      __display__.innerHTML = "";
      onEnd();
    });
  }

  return (
    <Fragment>
      <button className="saveBtn" onClick={handleClick}>
        {display}
      </button>
      <div ref={displayRef} style={style} />
    </Fragment>
  );
}

interface SaveCanvasProps {
  editorState: EditorStateType | null;
  onClick?: (value: string, text: string, editorDim: DOMRect) => void;
  display: JSX.Element;
  onStart: () => void;
  onEnd: () => void;
}
