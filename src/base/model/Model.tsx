import React, {
  ChangeEvent,
  Dispatch,
  Fragment,
  HTMLAttributes,
  MouseEvent,
  ReactPortal,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { unmountComponentAtNode } from "react-dom";
import { OnClick } from "../../components/components.types";
import {
  EditorStateType,
  HandlerFn,
  HandlerFnProps,
  ModelConfig,
} from "../base.types";

const styleEvents = ["keyup", "mouseup"];

export default function Model({
  editorState,
  config,
  subMenuView,
  onCurrentStyle,
  btnType,
  accept,
}: ModelProps) {
  const { name, buttonIcon, type, handlerFn } = config;
  const btnRef = useRef<(HTMLButtonElement & HTMLLabelElement) | null>(null);
  const [currAttributes, setCurrAttributes] = useState<any | null>(null);
  const [Portal, setPortal] = useState<ReactPortal | null>(null);

  function onBack(expanded: HTMLElement) {
    unmountComponentAtNode(expanded);
    subMenuView?.(false);
  }

  function handleClick(e: any) {
    e.preventDefault();
    e.stopPropagation();
    const expanded = editorState.__document__.getElementById(
      "expanded"
    ) as HTMLElement;

    // handlerFn is expected to return nothing
    if (type === "click")
      handlerFn({ e, name, editorState, onBack: () => onBack(expanded) });
    // toggle to show expanded bar
    else if (type === "submenu") {
      if (!expanded) throw Error("Create a div with id='expanded'");
      if (expanded.hasChildNodes()) {
        unmountComponentAtNode(expanded);
        subMenuView?.(false);
      } else {
        handlerFn({
          e,
          name,
          editorState,
          onBack: () => onBack(expanded),
        });
        subMenuView?.(true);
      }
    }
  }

  useEffect(() => {
    if (!editorState.editor) return;

    function listener(e: Event) {
      // styling highlights is still underway
      const selection = editorState.__document__.getSelection();
      if (!selection) return;

      const node = selection.focusNode?.parentElement;
      if (!node) return;

      const styles = window.getComputedStyle(node);

      if (onCurrentStyle) {
        setCurrAttributes(() => onCurrentStyle(styles));
      }
    }

    styleEvents.forEach((trigger) => {
      editorState.editor?.addEventListener(trigger, listener, false);
    });

    return () => {
      styleEvents.forEach((trigger) => {
        editorState.editor?.removeEventListener(trigger, listener, false);
      });
    };
  }, [editorState.editor, editorState.__document__, onCurrentStyle]);

  const file = (
    <Fragment>
      <label
        htmlFor={name}
        className="modelLabel"
        ref={btnRef}
        {...currAttributes}
      >
        <input
          type="file"
          style={{ display: "none" }}
          id={name}
          onChange={handleClick}
        />
        {buttonIcon}
      </label>
    </Fragment>
  );

  const button = (
    <button
      id={name}
      title={name}
      className="modelBtn"
      onClick={handleClick}
      ref={btnRef}
      {...currAttributes}
    >
      {buttonIcon}
    </button>
  );

  /**
   * currAttributes = children => <p>{font_name}</p>
   */
  const text = (
    <button
      id={name}
      title={name}
      className="modelBtn"
      onClick={handleClick}
      ref={btnRef}
    >
      <p>
        <span>{!!currAttributes ? currAttributes : buttonIcon}</span>
      </p>
    </button>
  );

  return (
    <Fragment>
      {btnType === "file" && file}
      {btnType === "button" && button}
      {btnType === "text" && text}
    </Fragment>
  );
}

interface ModelProps {
  editorState: EditorStateType;
  config: ModelConfig;
  subMenuView?: OnClick;
  onCurrentStyle?: (styles: CSSStyleDeclaration) => any;
  btnType: "file" | "button" | "text";
  accept?: string;
}
