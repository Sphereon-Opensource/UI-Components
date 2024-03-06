export const base64toFile = (base64: string, filename: string, mimeType: string): File => {
    const base64Parts = base64.split(';base64,');
    const contentType = base64Parts[0].split(':')[1];
    const byteCharacters = atob(base64Parts[1]);
    const byteNumbers = Array.from(byteCharacters).map((char: string) => char.charCodeAt(0));
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: contentType });
    return new File([blob], filename, { type: mimeType });
}
