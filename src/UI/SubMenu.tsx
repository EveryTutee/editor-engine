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

  function changeColor(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    console.log(value);
    setColor(value);
    changer[name]?.(value);
  }
  function changeColorBtn(value: string){
    console.log(value, name);
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
      <div className="currentColor">
        <input className = "colorPickerInput" type="color" onChange={changeColor} value={color} />
      </div>
      <br/>
      <span className = "colorHeading">Standard colors</span>
      <div className ="defaultColors">
      <button className = "colorBox" style={{backgroundColor :"#000000"}} onClick={() => changeColorBtn("#000000")}></button>
      <button className = "colorBox" style={{backgroundColor :"#545454"}} onClick={() => changeColorBtn("#545454")}></button>
      <button className = "colorBox" style={{backgroundColor :"#737373"}} onClick={() => changeColorBtn("#737373")}></button>
      <button className = "colorBox" style={{backgroundColor :"#a6a6a6"}} onClick={() => changeColorBtn("#a6a6a6")}></button>
      <button className = "colorBox" style={{backgroundColor :"#d9d9d9"}} onClick={() => changeColorBtn("#d9d9d9")}></button>
      <button className = "colorBox" style={{backgroundColor :"#ffffff"}} onClick={() => changeColorBtn("#ffffff")}></button>
      <button className = "colorBox" style={{backgroundColor :"#ff1616"}} onClick={() => changeColorBtn("#ff1616")}></button>
      <button className = "colorBox" style={{backgroundColor :"#ff5757"}} onClick={() => changeColorBtn("#ff5757")}></button>
      <button className = "colorBox" style={{backgroundColor :"#ff66c4"}} onClick={() => changeColorBtn("#ff66c4")}></button>
      <button className = "colorBox" style={{backgroundColor :"#cb6ce6"}} onClick={() => changeColorBtn("#cb6ce6")}></button>
      <button className = "colorBox" style={{backgroundColor :"#8c52ff"}} onClick={() => changeColorBtn("#8c52ff")}></button>
      <button className = "colorBox" style={{backgroundColor :"#5e17eb"}} onClick={() => changeColorBtn("#5e17eb")}></button>
      <button className = "colorBox" style={{backgroundColor :"#03989e"}} onClick={() => changeColorBtn("#03989e")}></button>
      <button className = "colorBox" style={{backgroundColor :"#00c2cb"}} onClick={() => changeColorBtn("#00c2cb")}></button>
      <button className = "colorBox" style={{backgroundColor :"#5ce1e6"}} onClick={() => changeColorBtn("#5ce1e6")}></button>
      <button className = "colorBox" style={{backgroundColor :"#38b6ff"}} onClick={() => changeColorBtn("#38b6ff")}></button>
      <button className = "colorBox" style={{backgroundColor :"#5271ff"}} onClick={() => changeColorBtn("#5271ff")}></button>
      <button className = "colorBox" style={{backgroundColor :"#004aad"}} onClick={() => changeColorBtn("#004aad")}></button>
      <button className = "colorBox" style={{backgroundColor :"#008037"}} onClick={() => changeColorBtn("#008037")}></button>
      <button className = "colorBox" style={{backgroundColor :"#7ed957"}} onClick={() => changeColorBtn("#7ed957")}></button>
      <button className = "colorBox" style={{backgroundColor :"#c9e265"}} onClick={() => changeColorBtn("#c9e265")}></button>
      <button className = "colorBox" style={{backgroundColor :"#ffde59"}} onClick={() => changeColorBtn("#ffde59")}></button>
      <button className = "colorBox" style={{backgroundColor :"#ffbd59"}} onClick={() => changeColorBtn("#ffbd59")}></button>
      <button className = "colorBox" style={{backgroundColor :"#ff914d"}} onClick={() => changeColorBtn("#ff914d")}></button>
      </div>
      { name == 'Editor Background' &&
      <div className="">
        <span className = "colorHeading">Gradients</span>
        <div className ="defaultColors">
          <button className = "gradientBox" style={{backgroundImage: `linear-gradient(135deg, rgba(253,251,251,1) 0%, rgba(235,237,238,1) 100%)`, }} onClick={() => changeColorBtn("linear-gradient(135deg, rgba(253,251,251,1) 0%, rgba(235,237,238,1) 100%)")}></button>
          <button className = "gradientBox" style={{backgroundImage: `linear-gradient(135deg, rgba(245,247,250,1) 0%, rgba(195,207,226,1) 100%)`, }} onClick={() => changeColorBtn("linear-gradient(135deg, rgba(245,247,250,1) 0%, rgba(195,207,226,1) 100%)")}></button>
          <button className = "gradientBox" style={{backgroundImage: `inear-gradient(135deg, rgba(207,217,223,1) 0%, rgba(226,235,240,1) 100%)`, }} onClick={() => changeColorBtn("linear-gradient(135deg, rgba(207,217,223,1) 0%, rgba(226,235,240,1) 100%)")}></button>
          <button className = "gradientBox" style={{backgroundImage: `linear-gradient(135deg, rgba(255,236,210,1) 0%, rgba(252,182,159,1) 100%)`, }} onClick={() => changeColorBtn("linear-gradient(135deg, rgba(255,236,210,1) 0%, rgba(252,182,159,1) 100%)")}></button>
          <button className = "gradientBox" style={{backgroundImage: `linear-gradient(165deg, rgba(255,154,158,1) 0%, rgba(250,208,196,1) 100%)`, }} onClick={() => changeColorBtn("linear-gradient(165deg, rgba(255,154,158,1) 0%, rgba(250,208,196,1) 100%)")}></button>
          <button className = "gradientBox" style={{backgroundImage: `linear-gradient(135deg, rgba(161,196,253,1) 0%, rgba(194,233,251,1) 100%)`, }} onClick={() => changeColorBtn("linear-gradient(135deg, rgba(161,196,253,1) 0%, rgba(194,233,251,1) 100%)")}></button>
          <button className = "gradientBox" style={{backgroundImage: `linear-gradient(135deg, rgba(163,189,237,1) 0%, rgba(160,186,235,1) 46%, rgba(105,145,199,1) 100%)`, }} onClick={() => changeColorBtn("linear-gradient(135deg, rgba(163,189,237,1) 0%, rgba(160,186,235,1) 46%, rgba(105,145,199,1) 100%)")}></button>
          <button className = "gradientBox" style={{backgroundImage: "linear-gradient(135deg, rgba(137,247,254,1) 0%, rgba(102,166,255,1) 100%)", }} onClick={() => changeColorBtn("linear-gradient(135deg, rgba(137,247,254,1) 0%, rgba(102,166,255,1) 100%)")}></button>
          <button className = "gradientBox" style={{backgroundImage: `linear-gradient(165deg, rgba(19,84,122,1) 0%, rgba(94,170,175,1) 22%, rgba(209,226,227,1) 43%, rgba(231,251,252,1) 57%, rgba(128,208,199,1) 100%)`, }} onClick={() => changeColorBtn("linear-gradient(165deg, rgba(19,84,122,1) 0%, rgba(94,170,175,1) 22%, rgba(209,226,227,1) 43%, rgba(231,251,252,1) 57%, rgba(128,208,199,1) 100%)")}></button>
          <button className = "gradientBox" style={{backgroundImage: `linear-gradient(165deg, rgba(57,46,46,1) 2%, rgba(0,0,0,1) 100%)`, }} onClick={() => changeColorBtn("linear-gradient(165deg, rgba(57,46,46,1) 2%, rgba(0,0,0,1) 100%)")}></button>
        </div>
      </div>
        
    }
    </div>
  );
}
