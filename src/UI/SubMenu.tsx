import React, { ChangeEvent, useEffect, useMemo, useState } from "react";
import { RgbaColor, RgbaColorPicker } from "react-colorful";
import { EditorStateType } from "../base/base.types";
import { rgb2string } from "../utils/color";

interface SubMenuProps {
  editorState: EditorStateType;
  onBack: any;
  name: string;
}

export default function SubMenu({ editorState, onBack, name }: SubMenuProps) {
  const [color, setColor] = useState("#000");

  const changer = useMemo(
    () => ({
      "Editor Background": (value: string) => {
        if (!editorState.editor) return;
        editorState.editor.style.setProperty("background-color", value);
      },
      "Font Color": (value: string) => {
        editorState.__document__.execCommand("foreColor", false, value);
      },
      Highlight: (value: string) => {
        editorState.__document__.execCommand("hiliteColor", false, value);
      },
    }),
    [editorState]
  ) as any;

  // useEffect(() => {
  //   const str = rgb2string(color);
  //   changer[name]?.(str);
  // }, [color, name]);

  function changeColor(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    console.log(e);
    setColor(value);
    changer[name]?.(value);
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

      <input type="color" onChange={changeColor} value={color} />
    </div>
  );
}
