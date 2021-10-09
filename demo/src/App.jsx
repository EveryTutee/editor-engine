import React from 'react';
import './App.css';
import { Editor, EditorState } from './dist/index';
import './dist/editor.css'
import { Bold, FontStyle, Italics, Underline } from './dist/components';

function App() {
  const [editorState, setEditorState] = React.useState(() => EditorState.createEmpty());
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

      <Editor editorState={editorState} onChange={setEditorState} />
      <div className="output" dangerouslySetInnerHTML={{ __html: editorState.content }} />

    </div>
  );
}

export default App;
