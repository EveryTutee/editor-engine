export function uuid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0; // to get the floor of a decimal number
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}