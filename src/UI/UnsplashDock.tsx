import React, { ChangeEvent, useEffect, useMemo, useState } from "react";
import { RgbaColor, RgbaColorPicker } from "react-colorful";
import { EditorStateType } from "../base/base.types";
import { rgb2string } from "../utils/color";

interface SubMenuProps {
  editorState: EditorStateType;
  onBack: any;
  name: string;
}

export default function UnsplashDock({ editorState, onBack, name }: SubMenuProps) {

  


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
      <div className="unsplashInput">
        <input type="text" />
      </div>
      <div className="unsplashGallery">

      </div>
      
        
    
    </div>
  );
}
