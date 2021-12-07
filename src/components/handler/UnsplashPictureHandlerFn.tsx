import React, { useState } from "react";
import { render } from "react-dom";
import { HandlerFnProps } from "../../base/base.types";
import UnsplashDock from "../../UI/UnsplashDock";

export default function UnsplashPictureHandlerFn({
  editorState,
  onBack,
  name,
}: HandlerFnProps) {
  render(
    <UnsplashDock editorState={editorState} onBack={onBack} name={name} />,
    editorState.__document__.getElementById("expanded") as HTMLElement
  );

  return null;
}