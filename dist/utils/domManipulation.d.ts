export declare function getHeadElement(element: HTMLElement, ...nodeName: string[]): HTMLElement | undefined;
export declare function getPosition(startContainer: Node, endContainer: Node): 'before' | 'after';
export declare function containerIterator(startContainer: HTMLElement, endContainer: HTMLElement, iterCallback: (iter: HTMLElement) => void): void;
export declare function execStyle(command: string, value: string, document: Document): void;
export declare function execBlockStyle(command: string, value: string, document: Document): void;
