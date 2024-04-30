import { fromString } from 'uint8arrays'

export const base64UriToFile = (base64Uri: string, filename: string, mimeType: string): File => {
    const base64 = base64Uri.split(',')[1];
    const uint8Array = fromString(base64, 'base64');
    const blob = new Blob([uint8Array]);

    return new File([blob], filename, { type: mimeType });
}
