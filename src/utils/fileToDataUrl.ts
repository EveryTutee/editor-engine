export const fileToDataUrl = (file: any) => new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result?.toString() || "");
    reader.onerror = error => reject(error);

    reader.readAsDataURL(file);
})