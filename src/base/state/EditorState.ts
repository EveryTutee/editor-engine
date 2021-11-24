class EditorState {
  __document__ = document;
  editor: HTMLDivElement | null = null;
  content = "";
  text = "";
  cleanMarkUp: HTMLDivElement | null = null;
  undoStack: string[] = [];
  redoStack: string[] = [];

  constructor() {
    this.init();
  }

  init() {
    this.__document__ = this.editor?.ownerDocument || document;
    this.__document__.execCommand("styleWithCSS", false, "true");
    this.__document__.execCommand("defaultParagraphSeparator", false, "p");
    this.content = "";
  }

  setEditor = (node: HTMLDivElement) => {
    if (this.editor) return;
    this.editor = node;
  };

  setUndoStack = (content: string) => {
    this.undoStack.push(content);
  };
  setRedoStack = (content: string) => {
    this.redoStack.push(content);
  };

  undo = () => {
    const content = this.undoStack.pop();
    if (!content) return;

    this.setRedoStack(content);
    return content;
  };

  redo = () => {
    const content = this.redoStack.pop();
    if (!content) return;

    this.setUndoStack(content);
    return content;
  };

  setContent = (content: string) => {
    console.log(this.editor);
    if (!this.editor) return;

    const div = document.createElement('div') as HTMLDivElement;
    div.innerHTML = content.trim();
    const first = div.firstElementChild as HTMLDivElement;
    if (!first) return;

    this.cleanMarkUp = first;
    this.content = first.outerHTML;
    this.setText(first.outerText);
    this.undoStack = [];
    this.redoStack = [];

    this.editor.innerHTML = first.innerHTML;
    const style = first.getAttribute('style');
    style && this.editor.setAttribute('style', style);
  };

  setText = (value: string) => {
    this.text = value;
  };
}

export default EditorState;
