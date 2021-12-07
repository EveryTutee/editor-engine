import React from "react";
import "./App.css";
import { Editor, EditorState, CanvasHolder } from "./dist/index";
import "./dist/editor.css";
import {
  Outline,
  Bold,
  FontStyle,
  Italics,
  Textbox,
  Underline,
  Image,
  Audio,
  Iframe,
  SaveCanvas,
  FontSize,
  AlignCenter,
  AlignLeft,
  AlignRight,
  Superscript,
  Subscript,
  Lineheight,
  WordSpacing,
  Bullets,
  Numbers,
  ForeColor,
  BackColor,
  EditorBackground,
  UnsplashPicture,
  Headings,
  AlignJustify,
} from "./dist/components";

function App() {
  const [editorState, setEditorState] = React.useState(() => new EditorState());
  const [canvas, setCanvas] = React.useState(() => new EditorState());

  const [canva, setCanva] = React.useState([]);

  // showNav : ...types | null
  const [ShowNav, setShowNav] = React.useState(false);
  console.log(ShowNav);

  return (
    <div className="app">
      <nav className="nav">
        <div>
          <Bold editorState={editorState} />
          <Italics editorState={editorState} />
          <Underline editorState={editorState} />
          <FontStyle editorState={editorState} onClick={setShowNav} />
          <Audio editorState={editorState} />
          <Iframe editorState={editorState} />
          <FontSize editorState={editorState} onClick={setShowNav} />
          <AlignLeft editorState={editorState} />
          <AlignRight editorState={editorState} />
          <AlignCenter editorState={editorState} />
          <Superscript editorState={editorState} />
          <Subscript editorState={editorState} />
          <Lineheight editorState={editorState} onClick={setShowNav} />
          <WordSpacing editorState={editorState} onClick={setShowNav} />
          <Bullets editorState={editorState} />
          <Numbers editorState={editorState} />
          <ForeColor editorState={editorState} onClick={setShowNav} />
          <BackColor editorState={editorState} onClick={setShowNav} />
          <EditorBackground editorState={editorState} onClick={setShowNav} />
          <UnsplashPicture editorState={editorState} onClick={setShowNav} />
          <Headings editorState={editorState} onClick={setShowNav} />
          <AlignJustify editorState={editorState} />
          <Outline editorState={editorState} onClick={setShowNav} />
        </div>

        <div id="expanded"></div>
      </nav>

      <Editor
        editorState={editorState}
        onChange={setEditorState}
        id="mainEditor"
        maxcount={1000}
        placeholder="let there be light"
      />

      <nav className="nav">
        <Textbox editorState={canvas} />
        <Image editorState={canvas} />
      </nav>
      <div className="canvasWrapper">
        <Editor
          editorState={canvas}
          onChange={setCanvas}
          type="canvas"
          id="canvasEditor"
          maxcount={1000}
        />
      </div>

      <SaveCanvas
        onStart={() => {}}
        onEnd={() => {}}
        editorState={canvas}
        display="Save Changes"
        onClick={(value, dim) => {
          setCanva((x) => [value, ...x]);
        }}
      />

      <CanvasHolder editorState={editorState} shelf={canva} />

      <div
        className="output"
        dangerouslySetInnerHTML={{ __html: editorState.content }}
      />
    </div>
  );
}

export default App;
