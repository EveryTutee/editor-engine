import React, {
  ChangeEvent,
  useEffect,
  useMemo,
  useState,
  CSSProperties,
  useCallback,
  Fragment,
} from "react";
import { EditorStateType } from "../base/base.types";
import { insertDraggable, Textbox } from "../base/model/Draggable";
import { UnsplashPicture } from "../components/components.types";
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

interface unSplashResponse {
  alt_description: string;
  user: {
    name: string;
    links: {
      html: string;
    };
  };
  links: {
    self: string;
  };
  urls: {
    raw: string;
    regular: string;
    small: string;
  };
}

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
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

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

  function handleUnsplashImage(item: unSplashResponse) {
    const url = item.urls.regular;
    const name = item.user.name;
    const userlink = item.user.links.html;
    const selfLink = item.links.self;
    const childId = uuid();
    const parentId = uuid();

    setLoading(true);
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => fileToDataUrl(blob))
      .then((src) => {
        setImage(src);
        setLoading(false);
      });
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
        <Fragment>
          <img
            data-type="unsplash"
            data-name={name}
            data-userlink={userlink}
            data-selfLink={selfLink}
            src={image}
            style={{
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              opacity: "inherit",
            }}
          />
          {loading && <p>Loading...</p>}
        </Fragment>
      </Textbox>
    );

    insertDraggable(editorState, __text__, name + parentId);
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
        {unslapshSearch?.items.map((item: unSplashResponse, index: any) => (
          <img
            src={item.urls.small}
            alt={item.alt_description}
            key={index}
            onClick={() => handleUnsplashImage(item)}
          />
        ))}
      </div>
    </div>
  );
}
/**
 * 
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => fileToDataUrl(blob))
      .then((src) => {
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
              data-type="unsplash"
              data-name={name}
              data-userlink={userlink}
              data-selfLink={selfLink}
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
 * 
 */
