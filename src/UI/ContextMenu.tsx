import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'

function ContextMenuItems() {
    return (
        <div>Hello</div>
    )
}

export default function ContextMenu({ editorState, parent }: any) {
    // useEffect(() => {
    //     parent.appendChild(div);
    //     return () => {
    //         parent.removeChild(div);
    //     }
    // }, [])

    return createPortal(
        <ContextMenuItems />,
        parent
    )
}
