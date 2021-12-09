import React, { useMemo, useState } from "react";
import { ModelConfig } from "../../base/base.types";
import Model from "../../base/model/Model";
import { UnsplashPicture } from "../components.types";
import UnsplashPictureHandlerFn from "../handler/UnsplashPictureHandlerFn";
import { FaUnsplash } from "react-icons/fa";

const config = {
  name: "Unsplash",
  type: "submenu",
  buttonIcon: (
    <p>
      <FaUnsplash/>
      <span>Unsplash</span>
    </p>
  ),
  handlerFn: UnsplashPictureHandlerFn, 
} as ModelConfig;
export default function UnsplashPicture({ editorState, onClick }: UnsplashPicture) {
  return (
    <Model
      btnType="button"
      editorState={editorState}
      config={config}
      subMenuView={onClick}
    //   @ts-ignore
      onCurrentStyle={(styles) => styles.color}
    />
  );
}
