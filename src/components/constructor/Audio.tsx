import React, { Fragment } from "react";
import { BsMusicNoteList } from "react-icons/bs";
import { ModelConfig } from "../../base/base.types";
import Model from "../../base/model/Model";
import { Audio } from "../components.types";
import audioHandlerFn from "../handler/audioHandlerFn";

const config = {
  buttonIcon: (
    <Fragment>
      <BsMusicNoteList />
      <p>Audio</p>
    </Fragment>
  ),
  handlerFn: audioHandlerFn,
  name: "Audio",
  type: "click",
} as ModelConfig;

export default function Audio({ editorState }: Audio) {
  return (
    <Model
      btnType="file"
      config={config}
      editorState={editorState}
      accept="audio/*"
    />
  );
}
