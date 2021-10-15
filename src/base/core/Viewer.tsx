import React, { CSSProperties, useMemo, useRef } from 'react'
import { getWindowDimensions } from '../../utils/clientCoordinates';

export default function Viewer({ content, type, canvasDims }: ViewerProps) {
    const ref = useRef<HTMLDivElement | null>(null);

    const style = useMemo<CSSProperties>(() => ({
        width: type === 'thumbnail' ? "100px" : "100%",
        height: type === 'thumbnail' ? `${(canvasDims[1] * 100) / canvasDims[0]}px` : canvasDims[1],
    }), [canvasDims, type]);

    function setContent(r: HTMLDivElement) {
        if (!r) return;
        ref.current = r;
        r.innerHTML = content;
    }

    return (
        <div
            className={"viewer " + type}
            ref={setContent}
            style={style}
        />
    )
}

interface ViewerProps {
    content: string;
    type: 'main' | 'canvas' | 'thumbnail';
    canvasDims: number[];
}

