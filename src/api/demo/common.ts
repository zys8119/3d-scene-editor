import {FileItem} from '@/typings'

export default {
    upload(file: File | Blob, extra?: Record<string, any>, onProgress?: (progress: number) => void) {
        return request<FileItem>({
            url: '/demo/common/upload/',
            method: 'post',
            isFormData: true,
            data: {
                file,
                ...extra
            },
            onUploadProgress(progressEvent: { loaded: number, total: number }) {
                onProgress?.(progressEvent.loaded / progressEvent.total * 100 | 0)
            }
        })
    },
}