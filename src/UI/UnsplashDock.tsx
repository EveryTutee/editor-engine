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
import usePaginator from "../utils/usePaginator";
import { uuid } from "../utils/uuid";

const client_id = "n3uKfn5DuxU6jNwLwMUb5ehAL-bDxCJBwY8gLj5F-Wo";

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
    html: string;
  };
  urls: {
    raw: string;
    regular: string;
    small: string;
  };
}
interface ImageType {
  name: string;
  userlink: string;
  selfLink: string;
  childId: string;
  parentId: string;
  src: string;
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
  const [searched, setSearched] = useState(false);

  function getImages(e: ChangeEvent<HTMLInputElement>) {
    const value = e ? e.target.value : "";
    console.log(value);
    if (value.length === 0) setSearched(false);
    setSearchKey(value);
  }

  useEffect(() => {
    const timeout = setTimeout(async () => {
      searchKey.length > 0 && setSearched(true);
    }, 4000);

    return () => {
      clearTimeout(timeout);
    };
  }, [searchKey]);

  function handleUnsplashImage(item: unSplashResponse) {
    const url = item.urls.regular;
    const __name = item.user.name;
    const userlink = item.user.links.html;
    const selfLink = item.links.html;
    const childId = uuid();
    const parentId = uuid();
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
              data-name={__name}
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
  }

  return (
    <div id={"subMenu" + name} className="subMenuWrapper">
      <div className="subMenuHeading">
        <button
          onClick={() => onBack(document.getElementById("subMenu" + name))}
        >
          Back
        </button>
      </div>
      <div className="unsplashInput">
        <input type="text" onChange={getImages} />
      </div>
      {searched && (
        <UnSplashGallery
          searchKey={searchKey}
          handleUnsplashImage={handleUnsplashImage}
        />
      )}
    </div>
  );
}

const UnSplashGallery = ({ searchKey, handleUnsplashImage }: any) => {
  const { list, index, Paginator } = usePaginator(
    {
      endpoint: "https://api.unsplash.com/search/photos/",
      key: "page",
      query: {
        query: searchKey,
        client_id,
        sid: 123,
      },
    },
    (data) => ({
      list: data.results,
      maxBullet: data.total_pages,
    })
  );

  return (
    <Paginator
      renderer={
        <div className="unsplashGallery">
          {list.map((item: unSplashResponse, index: any) => (
            <img
              src={item.urls.small}
              alt={item.alt_description}
              key={index}
              onClick={() => handleUnsplashImage(item)}
            />
          ))}
        </div>
      }
    />
  );
};
