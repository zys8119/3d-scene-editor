import type {
    FileAndEntry,
    FileInfo,
    SettledFileInfo,
    ShouldUseThumbnailUrl,
} from './interface';
export declare const isImageFileType: (type: string) => boolean;
export declare const isImageFile: ShouldUseThumbnailUrl;
export declare function createImageDataUrl(file: File): Promise<string>;
export declare const environmentSupportFile:
    | false
    | {
          new (
              fileBits: BlobPart[],
              fileName: string,
              options?: FilePropertyBag | undefined
          ): File;
          prototype: File;
      };
export declare function isFileSystemDirectoryEntry(
    item: FileSystemEntry | FileSystemFileEntry | FileSystemDirectoryEntry
): item is FileSystemDirectoryEntry;
export declare function isFileSystemFileEntry(
    item: FileSystemEntry | FileSystemFileEntry | FileSystemDirectoryEntry
): item is FileSystemFileEntry;
export declare function getFilesFromEntries(
    entries: readonly FileSystemEntry[] | Array<FileSystemEntry | null>,
    directory: boolean
): Promise<FileAndEntry[]>;
export declare function createSettledFileInfo(
    fileInfo: FileInfo
): SettledFileInfo;
/**
 * This is a rather simple version. I may fix it later to make it more accurate.
 * I've looked at https://github.com/broofa/mime, however it doesn't has a esm
 * version, so I can't simply use it.
 */
export declare function matchType(
    name: string,
    mimeType: string,
    accept: string
): boolean;
export declare const download: (
    url: string | null,
    name: string | undefined
) => void;
