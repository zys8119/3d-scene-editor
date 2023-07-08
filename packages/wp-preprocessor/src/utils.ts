export default {
    ids(value: any) {
        if (!Array.isArray(value)) return '';
        return value
            .map((item) => item?.id)
            .filter((item) => item)
            .join(',');
    },
    fileIds(value: any) {
        if (!Array.isArray(value)) return '';
        return value
            .filter((item) => !item.status)
            .map((item) => item?.id)
            .filter((item) => item)
            .join(',');
    },
    array<T = any>(value: T): T[] {
        return [value];
    },
};
