import React, { useRef } from 'react'

export default function Viewer({ content, type, canvasDims }: ViewerProps) {
    const ref = useRef<HTMLDivElement | null>(null);

    function setContent(r: HTMLDivElement) {
        if (!r) return;
        ref.current = r;
        r.innerHTML = content;

        const { width, height } = r.getBoundingClientRect();
        console.table({ r: [width, height], canvasDims })

        const scale = Math.min(
            width / canvasDims[0],
            height / canvasDims[1]
        );

        r.style.transform = `scale(${scale})`;

        // r.style.setProperty('transform', 'scale(' + scale + ');');
    }

    return (
        <div
            className={"viewer " + type}
            ref={setContent}
            style={{
                width: canvasDims[0],
                height: canvasDims[1]
            }}
        />
    )
}

interface ViewerProps {
    content: string;
    type: 'main' | 'canvas' | 'thumbnail';
    canvasDims: number[];
}
