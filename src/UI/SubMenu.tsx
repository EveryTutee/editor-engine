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
        editorState.editor.style.setProperty("background", value);
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

  const changeColor = (value: string) => {
    setColor(value);
    changer[name]?.(value);
  };
  function changeColorInput(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    changeColor(value);
  }
  function changeColorBtn(e: React.MouseEvent<HTMLButtonElement>) {
    const value = (e.target as HTMLButtonElement).id;
    changeColor(value);
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
      <div className="currentColor">
        <input
          className="colorPickerInput"
          type="color"
          onChange={changeColorInput}
          value={color}
        />
      </div>
      <br />
      <span className="colorHeading">Standard colors</span>
      <div className="defaultColors">
        {colorBox.map((color, index) => (
          <button
            key={color + index}
            className="colorBox"
            style={{ background: color }}
            id={color}
            onClick={changeColorBtn}
          ></button>
        ))}
      </div>
      {name == "Editor Background" && (
        <div className="">
          <span className="colorHeading">Gradients</span>
          <div className="defaultColors">
            {colorgradient.map((grad, index) => (
              <button
                className="gradientBox"
                key={index + grad}
                id={grad}
                style={{
                  background: grad,
                }}
                onClick={changeColorBtn}
              ></button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const colorBox = [
  "#000000",
  "#545454",
  "#737373",
  "#a6a6a6",
  "#d9d9d9",
  "#ffffff",
  "#ff1616",
  "#ff5757",
  "#ff66c4",
  "#cb6ce6",
  "#8c52ff",
  "#5e17eb",
  "#03989e",
  "#00c2cb",
  "#5ce1e6",
  "#38b6ff",
  "#5271ff",
  "#004aad",
  "#008037",
  "#7ed957",
  "#c9e265",
  "#ffde59",
  "#ffbd59",
  "#ff914d",
];

const colorgradient = [
  "linear-gradient(135deg, rgba(253,251,251,1) 0%, rgba(235,237,238,1) 100%)",
  "linear-gradient(135deg, rgba(245,247,250,1) 0%, rgba(195,207,226,1) 100%)",
  "inear-gradient(135deg, rgba(207,217,223,1) 0%, rgba(226,235,240,1) 100%)",
  "linear-gradient(135deg, rgba(255,236,210,1) 0%, rgba(252,182,159,1) 100%)",
  "linear-gradient(165deg, rgba(255,154,158,1) 0%, rgba(250,208,196,1) 100%)",
  "linear-gradient(135deg, rgba(161,196,253,1) 0%, rgba(194,233,251,1) 100%)",
  "linear-gradient(135deg, rgba(163,189,237,1) 0%, rgba(160,186,235,1) 46%, rgba(105,145,199,1) 100%)",
  "linear-gradient(135deg, rgba(137,247,254,1) 0%, rgba(102,166,255,1) 100%)",
  "linear-gradient(165deg, rgba(19,84,122,1) 0%, rgba(94,170,175,1) 22%, rgba(209,226,227,1) 43%, rgba(231,251,252,1) 57%, rgba(128,208,199,1) 100%)",
  "linear-gradient(165deg, rgba(57,46,46,1) 2%, rgba(0,0,0,1) 100%)",
];
