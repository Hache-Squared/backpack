export interface CurrentSheetShowing {
    id: string;
    title: string;
    content: SheetContent[];
}

export interface SheetItem {
    id: string;
    title: string;
}

export interface SheetContent {
    id: string,
    numOrder: number,
    type: SheetContentType,
    content: string
}

export enum SheetContentType {
    Image = "Imagen",
    Text = "Texto",
    Subtitle = "Subtitulo",
    YoutubeVideo = "YoutubeVideo"
}