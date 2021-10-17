export function getHeadElement(element, ...nodeName) {
    if (!element)
        return;
    while (element) {
        if (nodeName.includes(element.nodeName.toLowerCase()) ||
            nodeName.includes(element.nodeName) ||
            element.nodeName === 'BODY' ||
            element.nodeName === 'HTML')
            break;
        element = element.parentElement;
    }
    return element;
}
export function getPosition(startContainer, endContainer) {
    const position = startContainer.compareDocumentPosition(endContainer);
    if (position & 0x02)
        return 'before';
    return 'after';
}
export function containerIterator(startContainer, endContainer, iterCallback) {
    if (!startContainer || !endContainer)
        return;
    if (startContainer === endContainer) {
        iterCallback(startContainer);
        return;
    }
    const pos = getPosition(startContainer, endContainer);
    console.log("This is position", pos);
    let iter = startContainer;
    while (true) {
        if (!iter)
            break;
        iterCallback(iter);
        if (iter === endContainer) {
            break;
        }
        iter = (pos === 'before' ? iter.previousSibling : iter.nextSibling);
        // iterCallback(iter);
    }
}
export function execStyle(command, value, document) {
    const sel = document.getSelection();
    if (!sel)
        return;
    const range = sel.getRangeAt(0);
    const { startContainer, endContainer, } = range;
    const startNode = getHeadElement(startContainer, 'P');
    const endNode = getHeadElement(endContainer, 'P');
    if (!startNode || !endNode)
        return;
    containerIterator(startNode, endNode, (pIter) => {
        let { children } = pIter;
        //@ts-ignore
        Array.from(children).forEach((child, key) => {
            let { style, nodeName, nodeValue, outerHTML } = child;
            // if (nodeName === 'BR') return;
            if (nodeName === 'SPAN') {
                style.setProperty(command, value);
            }
            else {
                let span = document.createElement('span');
                span.setAttribute('style', `${command}: ${value};`);
                span.innerHTML = outerHTML || nodeValue;
                child.replaceWith(span);
            }
        });
        pIter.normalize();
    });
    range.detach();
}
export function execBlockStyle(command, value, document) {
    const sel = document.getSelection();
    if (!sel)
        return;
    const range = sel.getRangeAt(0);
    const { startContainer, endContainer } = range;
    const startNode = getHeadElement(startContainer, 'P');
    const endNode = getHeadElement(endContainer, 'P');
    if (!startNode || !endNode)
        return;
    containerIterator(startNode, endNode, (iter) => {
        iter.style.setProperty(command, value);
        iter.normalize();
    });
    range.detach();
}
