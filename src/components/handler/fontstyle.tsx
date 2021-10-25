import React, { MouseEvent, useRef } from "react";
import { render } from "react-dom";
import { EditorStateType, HandlerFnProps } from "../../base/base.types";

export default function fontstyleHandlerFn({
  editorState,
  onBack,
  name,
}: HandlerFnProps) {
  function onClick(e: MouseEvent<HTMLButtonElement>) {
    const element = e.target as HTMLButtonElement;
    if (!element) return;

    const value = element.id;
    console.log(value);

    editorState.__document__.execCommand("fontName", false, value);
  }

  render(
    <div id={"subMenu" + name} className="subMenuWrapper">
      <div className="subMenuHeading">
        <button
          onClick={() => onBack(document.getElementById("subMenu" + name))}
        >
          Back
        </button>
        <span>{name}</span>
      </div>

      <div className="subMenuExpanded">
        {fontStyleArray.map((value, key) => (
          <button
            className="modelBtn"
            id={value}
            key={value + key}
            onClick={onClick}
            style={{
              fontFamily: value,
            }}
          >
            {value}
          </button>
        ))}
      </div>
    </div>,
    document.getElementById("expanded")
  );
}

export const fontStyleArray = [
  "Arial",
  "Arial Black",
  "Courier New",
  "Times New Roman",
  "Abhaya Libre",
  "Alfa Slab One",
  "Amatic SC",
  "Andada Pro",
  "Anton",
  "Archivo",
  "Bebas Neue",
  "BioRhyme",
  "Bungee",
  "Cabin Sketch",
  "Caveat",
  "Caveat Brush",
  "Codystar",
  "Comfortaa",
  "Cookie",
  "Cormorant",
  "Courier Prime",
  "EB Garamond",
  "Encode Sans",
  "Epilogue",
  "Ewert",
  "Great Vibes",
  "Hahmlet",
  "Inter",
  "JetBrains Mono",
  "Kalam",
  "Lato",
  "Lobster",
  "Lora",
  "Manrope",
  "Marienda",
  "Merrieweather",
  "Monofett",
  "Monoton",
  "Montserrat",
  "Mountains of Christmas",
  "Nunito",
  "Old Standard TT",
  "Open Sans",
  "Oswald",
  "Oxygen",
  "Pacifico",
  "Patrick Hand",
  "Playfair Display",
  "Poppins",
  "Raleway",
  "Roboto",
  "Sacramento",
  "Shadows Into Light",
  "Sora",
  "Source Sans Pro",
  "Special Elite",
  "Spectral",
  "Staatliches",
  "Work Sans",
];
