import React, {
  ChangeEvent,
  useEffect,
  useMemo,
  useState,
  CSSProperties,
  useCallback,
} from "react";
import { EditorStateType } from "../base/base.types";
import { insertDraggable, Textbox } from "../base/model/Draggable";
import { fileToDataUrl } from "../utils/fileToDataUrl";
import { uuid } from "../utils/uuid";

interface SubMenuProps {
  editorState: EditorStateType;
  onBack: any;
  name: string;
}
const parentStyle = {
  position: "absolute",
  width: "100px",
  height: "auto",
  minHeight: "fit-content",
  top: "60px",
  zIndex: 1,
  cursor: "pointer",
} as CSSProperties;

const childStyle = {
  height: "100%",
  width: "100%",
} as CSSProperties;

export default function UnsplashDock({
  editorState,
  onBack,
  name,
}: SubMenuProps) {
  const [unslapshSearch, setUnsplashSearch] = useState<{
    items: any;
    DataisLoaded: boolean;
  }>({ items: [], DataisLoaded: false });
  const [searchKey, setSearchKey] = useState<string>("");

  function getImages(e: ChangeEvent<HTMLInputElement>) {
    const value = e ? e.target.value : "";
    console.log(value);
    setSearchKey(value);
  }

  useEffect(() => {
    const timeout = setTimeout(async () => {
      const res = await fetch(
        "https://api.unsplash.com/search/photos/?page=1&query=" +
          searchKey +
          "&client_id=n3uKfn5DuxU6jNwLwMUb5ehAL-bDxCJBwY8gLj5F-Wo&sig=123"
      );
      const json = await res.json();
      setUnsplashSearch({
        items: json.results,
        DataisLoaded: true,
      });
    }, 4000);

    return () => {
      clearTimeout(timeout);
    };
  }, [searchKey]);

  function handleUnsplashImage(url: string, name: string) {
    fetch(url)
      .then((r) => r.blob())
      .then((blob) => {
        fileToDataUrl(blob).then((src) => {
          const childId = uuid();
          const parentId = uuid();
          const __text__ = (
            <Textbox
              parentClassName="imageBoxWrapper"
              childClassName="imageBox"
              parentId={name + parentId}
              childId={name + childId}
              parentStyle={parentStyle}
              childStyle={childStyle}
              editorState={editorState}
              contentEditable={false}
            >
              <img
                data-name={name}
                src={src}
                style={{
                  width: "100%",
                  height: "100%",
                  pointerEvents: "none",
                  opacity: "inherit",
                }}
              />
            </Textbox>
          );

          insertDraggable(editorState, __text__, name + parentId);
        });
      });
  }

  return (
    <div id={"subMenu" + name} className="subMenuWrapper">
      <div className="subMenuHeading">
        <button
          onClick={() => onBack(document.getElementById("subMenu" + name))}
        >
          Back
        </button>
        <span>{name}</span>
      </div>
      <div className="unsplashInput">
        <input type="text" onChange={getImages} />
      </div>
      <div className="unsplashGallery">
        {unslapshSearch?.items.map((item: any, index: any) => (
          <img
            src={item.urls.regular}
            alt={item.alt_description}
            key={index}
            onClick={() =>
              handleUnsplashImage(item.urls.raw, item.id.toString())
            }
          />
        ))}
      </div>
    </div>
  );
}
