import React from 'react';
import './App.css';
import { Editor, EditorState } from './dist/index';
import './dist/editor.css'

function App() {
  const [editorState, setEditorState] = React.useState(() => EditorState.createEmpty());
  return (
    <div className="app">
      <Editor editorState={editorState} onChange={setEditorState} />
      <div className="output" dangerouslySetInnerHTML={{ __html: editorState.content }} />

    </div>
  );
}

export default App;
