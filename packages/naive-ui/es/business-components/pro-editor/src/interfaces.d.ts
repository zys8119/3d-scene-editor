import { IDomEditor } from '@wangeditor/editor';
export type OnUpdateValue = (value: string) => void;
export type OnEditorUploadFile = (file: File) => Promise<{
    data: {
        url: string;
        thumbnailUrl?: string;
    };
}>;
export type CustomUpload = (
    file: File,
    callback: (url: string, poster?: string) => void
) => Promise<void>;
export interface ProEditorExposed {
    editor: IDomEditor;
}
