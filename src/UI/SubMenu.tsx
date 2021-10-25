import React, { useEffect, useMemo, useState } from "react";
import { RgbaColor, RgbaColorPicker } from "react-colorful";
import { EditorStateType } from "../base/base.types";
import { rgb2string } from "../utils/color";

interface SubMenuProps {
  editorState: EditorStateType;
  onBack: any;
  name: string;
}

export default function SubMenu({ editorState, onBack, name }: SubMenuProps) {
  const [color, setColor] = useState<RgbaColor>({
    r: 0,
    g: 0,
    b: 0,
    a: 1,
  });

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

  useEffect(() => {
    const str = rgb2string(color);
    changer[name]?.(str);
  }, [color, name]);

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

      <RgbaColorPicker color={color} onChange={setColor} />
    </div>
  );
}
