import React from 'react';
import './App.css';
import { Editor, EditorState } from './dist/index';
import './dist/editor.css'
import { Bold, FontStyle, Italics, Textbox, Underline } from './dist/components';

function App() {
  const [editorState, setEditorState] = React.useState(() => new EditorState());
  const [canvas, setCanvas] = React.useState(() => new EditorState());


  console.log(canvas.editor)

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
        </div>

        {showNav && <div id="expanded">
          {showNav}
        </div>}

      </nav>

      <Editor editorState={editorState} onChange={setEditorState} id="mainEditor" />

      <nav className="nav">
        <Textbox editorState={canvas} />
      </nav>
      <Editor editorState={canvas} onChange={setCanvas} type='canvas' id="canvasEditor" />

      <button onClick={() => {
        const __canvas__ = canvas.content;
        canvas.setContent("<p><br/></p>");
        setCanva(x => [__canvas__, ...x]);
      }}>Save Canvas</button>

      <div>
        {canva.map((v, i) => (
          <div dangerouslySetInnerHTML={{ __html: v }} key={v + i} onClick={() => {
            editorState.editor.innerHTML += v;
          }} />
        ))}
      </div>

      <div className="output" dangerouslySetInnerHTML={{ __html: editorState.content }} />

    </div>
  );
}

export default App;
