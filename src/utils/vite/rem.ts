export const rem = ({
    base
}: { base: number } = { base: 1920 }) => {
    return {
        name: 'rem',
        transform(code: string, id: string, ssr?: boolean) {
            if (!/\.scss|\.css|\.less$/.test(id)) {
                return {
                    code,
                    map: null
                }
            }

            code = code.replace(
                /size\(([0-9.]{1,}?)\)/img,
                (match, $1) => {
                    return `calc(${Number($1) / base} * 100vw)`
                }
            )

            return {
                code,
                map: null
            }
        },

    }
}