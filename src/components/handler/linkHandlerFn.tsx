import { HandlerFnProps } from "../../base/base.types";
import { validURL } from "../../utils/stringManipulation";

export default function ({ editorState }: HandlerFnProps) {
  if (!editorState.editor) return null;
  const sText = editorState.__document__.getSelection();
  if (!sText || sText.isCollapsed) return null;
  const link = prompt("Enter a URL:", "http://");
  if (!validURL(link)) return null;
  const htmlString = `<a href=${link} target="_blank">${sText.toString()}</a>`;
  editorState.__document__.execCommand("insertHTML", false, htmlString);

  return null;
}
