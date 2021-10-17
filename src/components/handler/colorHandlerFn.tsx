import React, { MouseEvent, useEffect, useMemo, useRef, useState } from "react";
import { EditorStateType, HandlerFnProps } from "../../base/base.types";
import Colorpicker from "../../UI/Colorpicker";

export default function colorHandlerFn({
  editorState,
  onBack,
  name,
}: HandlerFnProps) {
  function onChange(color: string) {
    // const cmd = name === 'Font Color' ? 'foreColor' : 'hiliteColor';
    editorState.__document__.execCommand("foreColor", false, color);
  }

  return (
    <div id={"subMenu" + name} className="subMenuWrapper">
      <div className="subMenuHeading">
        <button
          onClick={() => onBack(document.getElementById("subMenu" + name))}
        >
          Back
        </button>
        <span>{name}</span>
      </div>

      <Colorpicker value={"#000"} onChange={onChange} />
    </div>
  );
}
