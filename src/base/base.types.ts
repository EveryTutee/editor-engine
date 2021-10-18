import React from "react";

export interface EditorProps {
  className: string;
  editorState: EditorStateType;
  onChange?: (e: EditorStateType) => void;
  placeholder?: string;
  readonly?: boolean;
  id: string;
  type?: "editor" | "canvas";
  maxcount: number;
}

export interface EditorStateType {
  __document__: Document;
  editor: HTMLDivElement | null;
  content: string;
  undoStack: string[];
  redoStack: string[];

  setEditor: (elem: HTMLDivElement) => void;
  init: () => void;
  setUndoStack: (content: string) => void;
  setRedoStack: (content: string) => void;

  undo: () => string | undefined;
  redo: () => string | undefined;

  setContent: (content: string) => void;
}

export interface ModelConfig {
  name: string;
  buttonIcon: JSX.Element | SVGAElement;
  type: "click" | "submenu";
  handlerFn: HandlerFn | ((props: HandlerFnProps) => null);
}

export type HandlerFn = React.FunctionComponent<HandlerFnProps>;

export interface HandlerFnProps {
  e: React.MouseEvent<HTMLInputElement>;
  name: string;
  editorState: EditorStateType;
  onBack: (container: Element | null) => void;
}
