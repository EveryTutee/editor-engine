import React from 'react';
import { BsMusicNoteList } from 'react-icons/bs';
import Model from '../../base/model/Model';
import audioHandlerFn from '../handler/audioHandlerFn';
const config = {
    buttonIcon: React.createElement(BsMusicNoteList, null),
    handlerFn: audioHandlerFn,
    name: "Audio",
    type: 'click'
};
export default function Audio({ editorState }) {
    return (React.createElement(Model, { btnType: 'file', config: config, editorState: editorState, accept: 'audio/*' }));
}
