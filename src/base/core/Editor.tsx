import React, {
  Fragment,
  MouseEvent,
  useCallback,
  useEffect,
  useRef,
} from "react";
import getParent from "../../utils/getParent";
import { onResizeMouseDownHandler } from "../../utils/resizeHandler";
import { EditorProps } from "../base.types";
import { defaultName, draggableOnClick } from "../model/Draggable";
import { removeContext } from "./utils";

// Returns the Editor or MainTextArea :)
export default function Editor({
  className,
  editorState,
  placeholder,
  readonly,
  id,
  onChange,
  type = "editor",
}: EditorProps) {
  const editorRef = useRef<HTMLDivElement | null>(null);

  function resizeEditor(e: globalThis.MouseEvent | TouchEvent) {
    if (!editorState.editor) return;
    console.log("ola amigas");
    onResizeMouseDownHandler(editorState, editorState.editor, e, "y", true);
  }

  function canvasClick(e: MouseEvent<HTMLDivElement>) {
    if (type !== "canvas") return;
    if (!editorState.editor) return;

    const target = e.target as HTMLElement;
    const parent = getParent(target, `.${defaultName}`);
    if (!parent) return;

    if (parent.classList.contains(defaultName)) {
      draggableOnClick(parent, editorState);
    } else {
      removeContext(editorState.__document__);
    }
  }

  useEffect(() => {
    if (!editorRef.current) return;

    editorState.setEditor(editorRef.current);
    const obs = observeEditor(editorRef.current, () => {
      if (!editorRef.current) return;
      const clone = editorRef.current.cloneNode(true) as HTMLElement;
      removeContext(clone);
      console.log(clone);
      const innerHTML = clone.outerHTML;
      const newState = {
        ...editorState,
        content: innerHTML,
      };

      newState?.setUndoStack?.(newState.content);
      onChange?.(newState);
    });
    return () => {
      obs?.disconnect();
      editorRef.current = null;
    };
    //eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <div
        key={id}
        ref={editorRef}
        className={className + " main_editor " + id}
        contentEditable={!!!readonly}
        id={id}
        placeholder={placeholder}
        suppressContentEditableWarning={true}
        style={{
          position: type === "canvas" ? "relative" : "static",
        }}
        onClick={canvasClick}
      >
        <p>
          <br />
        </p>
      </div>
      {type === "canvas" && (
        <button
          className="canvasResizer"
          //@ts-expect-error
          onMouseDown={resizeEditor}
          //@ts-expect-error
          onTouchStart={resizeEditor}
        />
      )}
    </Fragment>
  );
}

const observeEditor = (
  node: Node,
  callback: MutationCallback & EventListener
) => {
  if (!node || node.nodeType !== 1) return;

  if (window.MutationObserver) {
    const observer = new MutationObserver(callback);
    observer.observe(node, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return observer;
  }
  node.addEventListener("DOMNodeInserted", callback, false);
  node.addEventListener("DOMNodeRemoved", callback, false);

  return {
    disconnect: () => {
      node.removeEventListener("DOMNodeInserted", callback, false);
      node.removeEventListener("DOMNodeRemoved", callback, false);
    },
  };
};
