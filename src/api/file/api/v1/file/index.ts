export default {
    upload(file: File | Blob, extra?: Record<string, any>) {
        return request({
            baseURL: import.meta.env.VITE_FILE_API,
            url: `/file/api/v1/file/upload`,
            method: 'post',
            isFormData: true,
            data: {
                file,
                ...extra,
            },
        });
    },
};
