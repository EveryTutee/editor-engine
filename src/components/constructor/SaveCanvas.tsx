import React, { CSSProperties, Fragment, useMemo, useRef } from "react";
import { EditorStateType } from "../../base/base.types";
import html2canvas from "html2canvas";

const displayStyle = (width: number, height: number) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width,
  height,
  pointerEvents: 'none'

} as CSSProperties);

export default function SaveCanvas({
  editorState,
  onClick,
  display,
}: SaveCanvasProps) {
  const displayRef = useRef<HTMLDivElement | null>(null);
  const style = useMemo(() => {
    if (!editorState.editor) return;
    const { width, height } = editorState.editor.getBoundingClientRect();

    return displayStyle(width, height + 10);
  }, [editorState])

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
      <button className="saveBtn" onClick={handleClick}>{display}</button>
      <div ref={displayRef} style={style} />
    </Fragment>
  );
}

interface SaveCanvasProps {
  editorState: EditorStateType;
  onClick?: (value: string, editorDim: DOMRect) => void;
  display: string;
}
