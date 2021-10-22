import React, { ChangeEvent, Dispatch, Fragment, HTMLAttributes, MouseEvent, SetStateAction, useEffect, useRef, useState } from 'react';
import { EditorStateType, HandlerFn, HandlerFnProps, ModelConfig } from '../base.types'

const styleEvents = [
    'keyup',
    'mouseup'
]

export default function Model({ editorState, config, subMenuView, onCurrentStyle, btnType, accept }: ModelProps) {
    const { name, buttonIcon, type, handlerFn } = config;
    const btnRef = useRef<(HTMLButtonElement & HTMLLabelElement) | null>(null);
    const [currAttributes, setCurrAttributes] = useState<any | null>(null);

    function onBack() {
        subMenuView?.(null)
    }


    function handleClick(e: any) {
        e.preventDefault();
        e.stopPropagation();

        // handlerFn is expected to return nothing
        if (type === 'click') handlerFn({ e, name, editorState, onBack });
        // toggle to show expanded bar
        else if (type === 'submenu') {
            if (!subMenuView) throw Error("Sub menu is not provided");
            const subMenu = {
                Menu: handlerFn,
                props: { e, name, editorState, onBack }
            };
            if (subMenu)
                subMenuView((prev) => {
                    if (prev?.props.name === subMenu.props.name) return null;
                    return subMenu;
                });
        }
    }


    useEffect(() => {
        if (!editorState.editor) return;

        function listener(e: Event) {
            // styling highlights is still underway
            const selection = editorState.__document__.getSelection();
            if (!selection) return;

            const node = selection.focusNode?.parentElement;
            if (!node) return;

            const styles = window.getComputedStyle(node);

            if (onCurrentStyle) {
                setCurrAttributes(() => onCurrentStyle(styles));
            }

        }

        styleEvents.forEach(trigger => {
            editorState.editor?.addEventListener(trigger, listener, false)
        })

        return () => {
            styleEvents.forEach(trigger => {
                editorState.editor?.removeEventListener(trigger, listener, false);
            })
        }
    }, [editorState.editor, editorState.__document__, onCurrentStyle])

    const file = (
        <Fragment>
            <label htmlFor={name} className="modelLabel" ref={btnRef} {...currAttributes}>
                <input type="file" style={{ display: 'none' }} id={name} onChange={handleClick} />
                {buttonIcon}
            </label>
        </Fragment>
    )

    const button = (
        <button id={name} title={name} className="modelBtn" onClick={handleClick} ref={btnRef} {...currAttributes}>
            {buttonIcon}
        </button>
    )

    /**
     * currAttributes = children => <p>{font_name}</p>
     */
    const text = (
        <button id={name} title={name} className="modelBtn" onClick={handleClick} ref={btnRef} >
            <p><span>

                {!!currAttributes ? currAttributes : buttonIcon}
            </span></p>
        </button>
    )

    return (
        <Fragment>
            {btnType === 'file' && file}
            {btnType === 'button' && button}
            {btnType === 'text' && text}
        </Fragment>
    )
}

interface ModelProps {
    editorState: EditorStateType;
    config: ModelConfig;
    subMenuView?: Dispatch<SetStateAction<{ Menu: React.FunctionComponent<HandlerFnProps>, props: any } | null>>;
    onCurrentStyle?: (styles: CSSStyleDeclaration) => any
    btnType: 'file' | 'button' | 'text';
    accept?: string;
}
