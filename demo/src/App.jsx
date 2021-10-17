import React, { Fragment } from 'react';
import './App.css';
import { Editor, EditorState, CanvasHolder } from './dist/index';
import './dist/editor.css'
import {
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
  Lineheight
} from './dist/components';

function App() {
  const [editorState, setEditorState] = React.useState(() => new EditorState());
  const [canvas, setCanvas] = React.useState(() => new EditorState());

  const [canva, setCanva] = React.useState([]);

  // showNav : ...types | null 
  const [showNav, setShowNav] = React.useState(null);
  return (
    <div className="app">
      <nav className="nav" >
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
        </div>

        {showNav && <div id="expanded">
          {showNav}
        </div>}

      </nav>

      <Editor editorState={editorState} onChange={setEditorState} id="mainEditor" />

      <nav className="nav">
        <Textbox editorState={canvas} />
        <Image editorState={canvas} />
      </nav>
      <Editor editorState={canvas} onChange={setCanvas} type='canvas' id="canvasEditor" />

      <SaveCanvas
        editorState={canvas}
        display="Save Changes"
        onClick={(value, dim) => {
          setCanva(x => ([value, ...x]))
        }}
      />

      <CanvasHolder editorState={editorState} shelf={canva} />

      <div className="output" dangerouslySetInnerHTML={{ __html: editorState.content }} />

    </div>
  );
}

export default App;
