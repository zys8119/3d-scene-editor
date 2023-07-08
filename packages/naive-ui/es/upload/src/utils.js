var __awaiter = function (thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P
            ? value
            : new P(function (resolve) {
                  resolve(value);
              });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator['throw'](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done
                ? resolve(result.value)
                : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { isBrowser } from '../../_utils';
export const isImageFileType = (type) => type.includes('image/');
const getExtname = (url = '') => {
    const temp = url.split('/');
    const filename = temp[temp.length - 1];
    const filenameWithoutSuffix = filename.split(/#|\?/)[0];
    return (/\.[^./\\]*$/.exec(filenameWithoutSuffix) || [''])[0];
};
const imageExtensionRegex = /(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico)$/i;
export const isImageFile = (file) => {
    if (file.type) {
        return isImageFileType(file.type);
    }
    const fileNameExtension = getExtname(file.name || '');
    if (imageExtensionRegex.test(fileNameExtension)) {
        return true;
    }
    const url = file.thumbnailUrl || file.url || '';
    const urlExtension = getExtname(url);
    if (/^data:image\//.test(url) || imageExtensionRegex.test(urlExtension)) {
        return true;
    }
    return false;
};
export function createImageDataUrl(file) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield new Promise((resolve) => {
            if (!file.type || !isImageFileType(file.type)) {
                resolve('');
                return;
            }
            resolve(window.URL.createObjectURL(file));
        });
    });
}
export const environmentSupportFile =
    isBrowser && window.FileReader && window.File;
export function isFileSystemDirectoryEntry(item) {
    return item.isDirectory;
}
export function isFileSystemFileEntry(item) {
    return item.isFile;
}
export function getFilesFromEntries(entries, directory) {
    return __awaiter(this, void 0, void 0, function* () {
        const fileAndEntries = [];
        let _resolve;
        let requestCallbackCount = 0;
        function lock() {
            requestCallbackCount++;
        }
        function unlock() {
            requestCallbackCount--;
            if (!requestCallbackCount) {
                _resolve(fileAndEntries);
            }
        }
        function _getFilesFromEntries(entries2) {
            entries2.forEach((entry) => {
                if (!entry) return;
                lock();
                if (directory && isFileSystemDirectoryEntry(entry)) {
                    const directoryReader = entry.createReader();
                    lock();
                    directoryReader.readEntries(
                        (entries3) => {
                            _getFilesFromEntries(entries3);
                            unlock();
                        },
                        () => {
                            unlock();
                        }
                    );
                } else if (isFileSystemFileEntry(entry)) {
                    lock();
                    entry.file(
                        (file) => {
                            fileAndEntries.push({ file, entry, source: 'dnd' });
                            unlock();
                        },
                        () => {
                            unlock();
                        }
                    );
                }
                unlock();
            });
        }
        yield new Promise((resolve) => {
            _resolve = resolve;
            _getFilesFromEntries(entries);
        });
        return fileAndEntries;
    });
}
export function createSettledFileInfo(fileInfo) {
    const {
        id,
        name,
        percentage,
        status,
        url,
        file,
        thumbnailUrl,
        type,
        fullPath,
        batchId,
        response,
    } = fileInfo;
    return {
        id,
        name,
        percentage:
            percentage !== null && percentage !== void 0 ? percentage : null,
        status,
        url: url !== null && url !== void 0 ? url : null,
        file: file !== null && file !== void 0 ? file : null,
        thumbnailUrl:
            thumbnailUrl !== null && thumbnailUrl !== void 0
                ? thumbnailUrl
                : null,
        type: type !== null && type !== void 0 ? type : null,
        fullPath: fullPath !== null && fullPath !== void 0 ? fullPath : null,
        batchId: batchId !== null && batchId !== void 0 ? batchId : null,
        response: response !== null && response !== void 0 ? response : null,
    };
}
export function matchType(name, mimeType, accept) {
    name = name.toLowerCase();
    mimeType = mimeType.toLocaleLowerCase();
    accept = accept.toLocaleLowerCase();
    const acceptAtoms = accept
        .split(',')
        .map((acceptAtom) => acceptAtom.trim())
        .filter(Boolean);
    return acceptAtoms.some((acceptAtom) => {
        if (acceptAtom.startsWith('.')) {
            if (name.endsWith(acceptAtom)) return true;
        } else if (acceptAtom.includes('/')) {
            const [type, subtype] = mimeType.split('/');
            const [acceptType, acceptSubtype] = acceptAtom.split('/');
            if (
                acceptType === '*' ||
                (type && acceptType && acceptType === type)
            ) {
                if (
                    acceptSubtype === '*' ||
                    (subtype && acceptSubtype && acceptSubtype === subtype)
                ) {
                    return true;
                }
            }
        } else {
            return true;
        }
        return false;
    });
}
export const download = (url, name) => {
    if (!url) return;
    const a = document.createElement('a');
    a.href = url;
    if (name !== void 0) {
        a.download = name;
    }
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};
