import { EditorState } from "./Editor.types";

export const editorState = {
    __document__: document,
    __window__: window,
    isIE: navigator.userAgent.indexOf('Trident') > -1,
    isIE_Edge: (navigator.userAgent.indexOf('Trident') > -1) || (navigator.appVersion.indexOf('Edge') > -1),
    isOSX_IOS: /(Mac|iPhone|iPod|iPad)/.test(navigator.platform),
    editor: null,

    init: function (r: HTMLElement) {
        this.editor = r;
    }

} as EditorState;