import { Grammarly, GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";
import React, {
  Fragment,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import getParent from "../../utils/getParent";
import { onResizeMouseDownHandler } from "../../utils/resizeHandler";
import { EditorProps } from "../base.types";
import { defaultName, draggableOnClick } from "../model/Draggable";
import { cleanUpDraggables, removeContext } from "./utils";

// Returns the Editor or MainTextArea :)
export default function Editor({
  className,
  editorState,
  placeholder,
  readonly,
  id,
  value,
  onChange,
  type = "editor",
  style,
}: EditorProps) {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const [showPlaceholder, setShowPlaceholder] = useState(false);

  function resizeEditor(e: globalThis.MouseEvent | TouchEvent) {
    if (!editorState.editor) return;
    console.log("ola amigas");
    onResizeMouseDownHandler(editorState, editorState.editor, e, "y", true);
  }

  function canvasClick(e: MouseEvent<HTMLDivElement>) {
    // if (type !== "canvas") return;
    if (!editorState.editor) return;

    const target = e.target as HTMLElement;
    if (target.classList.contains("finish")) {
      removeContext(editorState.__document__);
      return;
    }
    const parent = getParent(target, `.${defaultName}`);
    if (!parent) return;

    if (parent.classList.contains(defaultName)) {
      draggableOnClick(parent, editorState);
    } else {
      removeContext(editorState.__document__);
    }
  }

  useEffect(() => {
    if (editorRef.current) {
      if (value) {
        editorRef.current.innerText = value;
        editorState.setContent(value);
      }
      if (editorRef.current.innerText.length === 0) {
        console.log(type, editorRef.current.innerText);
        editorRef.current.innerHTML += `<p><br /></p>`;
      }
    }
  }, [editorRef.current?.innerText]);

  useEffect(() => {
    if (
      editorRef.current?.innerText &&
      (editorRef.current.innerText === "\n" ||
        editorRef.current.innerText.length === 0)
    ) {
      setShowPlaceholder(true);
    } else {
      setShowPlaceholder(false);
    }
  }, [editorRef.current?.innerText]);

  useEffect(() => {
    if (!editorRef.current) return;

    editorState.setEditor(editorRef.current);
    const obs = observeEditor(editorRef.current, () => {
      if (!editorRef.current) return;
      const clone = editorRef.current.cloneNode(true) as HTMLDivElement;
      clone.removeAttribute("contenteditable");
      clone.removeAttribute("placeholder");
      clone.removeAttribute("data-showplaceholder");
      clone.removeAttribute("data-type");
      clone.removeAttribute("id");
      removeContext(clone);
      const innerHTML = clone.outerHTML;
      const innerText = clone.outerText;
      const newState = {
        ...editorState,
        editor: editorRef.current,
        content: innerHTML,
        text: innerText,
        cleanMarkUp: clone,
      };

      console.log(newState);
      newState?.setUndoStack?.(newState.content);
      onChange?.(newState);
      clone.remove();
    });
    return () => {
      obs?.disconnect();
      editorRef.current = null;
    };
    //eslint-disable-next-line
  }, []);

  function handlePaste(e: React.ClipboardEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    if (!editorState.editor) return;

    let pastedData = e.clipboardData
      .getData("text/plain")
      .trim()
      .replaceAll(">", "&gt;")
      .replaceAll("<", "&lt;");
    let final = `<p>${pastedData.replaceAll("\n", "</p><p>")}</p>`;

    console.log(final);
    editorState.__document__.execCommand("insertHTML", false, final);
  }

  function handleFocus(e: React.FocusEvent<HTMLDivElement>) {
    const div = e.target;
    div.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  return (
    <Fragment>
      <div
        key={id}
        ref={editorRef}
        className={className + " main_editor " + id}
        contentEditable={!!!readonly}
        id={id}
        style={style}
        placeholder={placeholder}
        suppressContentEditableWarning={true}
        onClick={canvasClick}
        onFocus={handleFocus}
        onKeyDown={(e) => {
          if (
            e.keyCode === 8 &&
            editorState.editor &&
            editorState.editor.innerHTML === "<p><br></p>"
          )
            e.preventDefault();
        }}
        data-showplaceholder={showPlaceholder}
        data-type={type}
        onPasteCapture={handlePaste}
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
      attributes: true,
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
