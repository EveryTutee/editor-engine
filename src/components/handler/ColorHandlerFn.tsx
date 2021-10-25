import React, { useState } from "react";
import { render } from "react-dom";
import { HandlerFnProps } from "../../base/base.types";
import SubMenu from "../../UI/SubMenu";

export default function ColorHandlerFn({
  editorState,
  onBack,
  name,
}: HandlerFnProps) {
  render(
    <SubMenu editorState={editorState} onBack={onBack} name={name} />,
    editorState.__document__.getElementById("expanded") as HTMLElement
  );

  return null;
}
