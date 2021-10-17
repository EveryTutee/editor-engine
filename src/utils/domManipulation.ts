export function getHeadElement(element: HTMLElement, ...nodeName: string[]) {
    if (!element) return;
    while (element) {
        if (nodeName.includes(element.nodeName.toLowerCase()) ||
            nodeName.includes(element.nodeName) ||
            element.nodeName === 'BODY' ||
            element.nodeName === 'HTML')
            break;
        element = element.parentElement as HTMLElement;
    }

    return element;
}

export function getPosition(startContainer: Node, endContainer: Node): 'before' | 'after' {
    const position = startContainer.compareDocumentPosition(endContainer);

    if (position & 0x02) return 'before';

    return 'after';
}

export function containerIterator(startContainer: HTMLElement, endContainer: HTMLElement, iterCallback: (iter: HTMLElement) => void) {
    if (!startContainer || !endContainer) return;
    if (startContainer === endContainer) {
        iterCallback(startContainer);
        return;
    }
    const pos = getPosition(startContainer, endContainer);
    console.log("This is position", pos);
    let iter = startContainer;

    while (true) {
        if (!iter) break;

        iterCallback(iter);
        if (iter === endContainer) {
            break;
        }

        iter = (pos === 'before' ? iter.previousSibling : iter.nextSibling) as HTMLElement;
        // iterCallback(iter);

    }
}

export function execStyle(command: string, value: string, document: Document) {

    const sel = document.getSelection();
    if (!sel) return;
    const range = sel.getRangeAt(0);
    const { startContainer, endContainer, } = range;
    const startNode = getHeadElement(startContainer as HTMLElement, 'P');
    const endNode = getHeadElement(endContainer as HTMLElement, 'P');

    if (!startNode || !endNode) return;

    containerIterator(startNode, endNode, (pIter) => {
        let { children } = pIter;



        //@ts-ignore
        Array.from(children).forEach((child: HTMLElement, key) => {
            let { style, nodeName, nodeValue, outerHTML } = child;

            // if (nodeName === 'BR') return;

            if (nodeName === 'SPAN') {
                style.setProperty(command, value);
            } else {
                let span = document.createElement('span');
                span.setAttribute('style', `${command}: ${value};`);
                span.innerHTML = outerHTML || nodeValue as string;
                child.replaceWith(span);
            }
        })

        pIter.normalize();

    });

    range.detach()



}

export function execBlockStyle(command: string, value: string, document: Document) {
    const sel = document.getSelection();
    if (!sel) return;
    const range = sel.getRangeAt(0);

    const { startContainer, endContainer } = range;
    const startNode = getHeadElement(startContainer as HTMLElement, 'P');
    const endNode = getHeadElement(endContainer as HTMLElement, 'P');

    if (!startNode || !endNode) return;


    containerIterator(startNode, endNode, (iter: HTMLElement) => {
        iter.style.setProperty(command, value);
        iter.normalize();
    })

    range.detach();

}