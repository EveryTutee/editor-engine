export default function getParent(element: HTMLElement, queryParent: string) {
    let __element__ = element;
    const parent = document.querySelector(queryParent) as Node;
    if (!parent) {
        console.error("could not find query element");
        return element;
    };

    while (__element__ !== parent) {
        __element__ = __element__.parentElement as HTMLElement;
        if (__element__.nodeName === 'BODY') {
            console.error("No parent found");
            return element;
        }
    }

    console.log("This is parent", __element__)
    return __element__;
}