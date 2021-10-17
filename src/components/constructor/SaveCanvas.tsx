import React, { CSSProperties, Fragment, useRef } from "react";
import { EditorStateType } from "../../base/base.types";
import html2canvas from "html2canvas";

export default function SaveCanvas({
  editorState,
  onClick,
  display,
}: SaveCanvasProps) {
  const displayRef = useRef<HTMLDivElement | null>(null);

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    if (!editorState.editor || !displayRef.current) return;

    const value = editorState.content;
    let editor = editorState.editor;
    const __display__ = displayRef.current;
    __display__.innerHTML = value;

    html2canvas(displayRef.current).then((canvas) => {
      const dataUrl = canvas.toDataURL("image/png");
      onClick?.(dataUrl, editor.getBoundingClientRect());
      editorState.setContent("<p><br/></p>");
      __display__.innerHTML = "";
    });
  }

  return (
    <Fragment>
      <button onClick={handleClick}>{display}</button>
      <div ref={displayRef} />
    </Fragment>
  );
}

interface SaveCanvasProps {
  editorState: EditorStateType;
  onClick?: (value: string, editorDim: DOMRect) => void;
  display: string;
}
