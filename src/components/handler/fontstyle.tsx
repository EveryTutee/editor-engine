import React, { MouseEvent, useRef } from 'react'
import { EditorStateType } from '../../base/base.types'

export default function fontstyleHandlerFn(e: any, name: string, editorState: EditorStateType, onBack: (container: Element | null) => void) {
    function onClick(e: MouseEvent<HTMLButtonElement>) {
        const element = e.target as HTMLButtonElement;
        if (!element) return;


        const value = element.id;
        console.log(value)

        editorState.__document__.execCommand('fontName', false, value);

    }

    return (
        <div id={"subMenu" + name}>
            <div>
                <button onClick={() => onBack(document.getElementById("subMenu" + name))}>Back</button>
                <span>{name}</span>
            </div>

            <div>
                {fontStyleArray.map((value, key) => (
                    <button id={value} key={value + key} onClick={onClick}>{value}</button>
                ))}
            </div>

        </div>
    )
}

export const fontStyleArray = [
    'Arial',
    'Arial Black',
    'Courier New',
    'Times New Roman',
    'Abhaya Libre',
    'Alfa slab one',
    'Amatic SC',
    'Andada Pro',
    'Anton',
    'Archivo',
    'Bebas Neue',
    'BioRhyme',
    'Bungee',
    'cabin sketch',
    'Caveat',
    'Caveat brush',
    'codystar',
    'comfortaa',
    'cookie',
    'Cormorant',
    'Courier prime',
    'EB garamond',
    'Encode Sans',
    'Epilogue',
    'ewert',
    'Great Vibes',
    'Hahmlet',
    'Inter',
    'JetBrains Mono',
    'kalam',
    'Lato',
    'lobster',
    'Lora',
    'Manrope',
    'marienda',
    'Merrieweather',
    'monofett',
    'Monoton',
    'Montserrat',
    'mountains of Christmas',
    'Nunito',
    'Old Standard TT',
    'Open Sans',
    'Oswald',
    'Oxygen',
    'Pacifico',
    'Patrick hand',
    'Playfair Display',
    'Poppins',
    'Raleway',
    'Roboto',
    'Sacramento',
    'shadows into light',
    'Sora',
    'Source Sans Pro',
    'Special Elite',
    'Spectral',
    'staatliches',
    'Work Sans',
]
