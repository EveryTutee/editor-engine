import React, { CSSProperties, Fragment, ReactChild } from 'react';

export function Textbox({ className, parentId, children, style }: TextboxProps) {

    return (
        <Fragment>
            <br></br>
            <div
                id={parentId}
                style={style}
                className={`${className} textBoxToDelete`}
            >
                {children}
            </div>
        </Fragment>
    )
}



interface TextboxProps {
    parentId: string;
    className: string;
    children: ReactChild;
    contentEditable?: boolean;
    style: CSSProperties;
}