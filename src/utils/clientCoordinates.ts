
export function clientCoord(e: MouseEvent | TouchEvent) {
    if (e instanceof TouchEvent) {
        return {
            x: e?.changedTouches?.[0]?.clientX || 0,
            y: e?.changedTouches?.[0]?.clientY || 0
        }
    }
    return {
        x: e?.clientX || 0,
        y: e?.clientY || 0
    }
}

export function getWindowDimensions() {
    return {
        width : window.innerWidth,
        height: window.innerHeight
    }
}