export interface SheetContent {
    type: SheetContentType,
    content: string
}

export enum SheetContentType {
    Image = "Imagen",
    Text = "Texto",
    Subtitle = "Subtitulo"
}