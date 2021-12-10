import React, { Fragment, useMemo } from "react";
import { ModelConfig } from "../../base/base.types";
import Model from "../../base/model/Model";
import { Constructor } from "../components.types";
import { AiOutlineLink } from "react-icons/ai";
import linkHandlerFn from "../handler/linkHandlerFn";

const config = {
  name: "Link",
  type: "click",
  buttonIcon: (
    <Fragment>
      <AiOutlineLink />
      <p>Add URL</p>
    </Fragment>
  ),
  handlerFn: linkHandlerFn,
} as ModelConfig;
export default function Link({ editorState }: Constructor) {
  return <Model btnType="button" editorState={editorState} config={config} />;
}
