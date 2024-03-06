export enum AssetFilePermission {
    PUBLIC = 'public',
    PRIVATE = 'private',
}

export type ValueSelection = {
    label: string
    value: string
}

export enum FileSelectionFieldType {
    FILE = 'file',
    IMAGE = 'image'
}


export type PassportPhoto = {
    file: File
    base64: string
}

export type PassportPhotoControlData = {
    fileName: string
    mimeType: string
    base64: string
}
