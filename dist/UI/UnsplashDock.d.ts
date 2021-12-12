/// <reference types="react" />
import { EditorStateType } from "../base/base.types";
interface SubMenuProps {
    editorState: EditorStateType;
    onBack: any;
    name: string;
}
export default function UnsplashDock({ editorState, onBack, name, }: SubMenuProps): JSX.Element;
export {};
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
