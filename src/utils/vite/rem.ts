let baseOption = 1920

export const fz = (rem: number | string | TemplateStringsArray) => {
    return `${Number(rem) / baseOption * 100}vw`
}

export const remReplace = (string: string) => {
    return string.replace(
        /([0-9.]{1,}?)fz/img,
        (match, $1) => {
            return fz($1)
        }
    )
}

export const rem = ({
    base
}: { base: number } = { base: 1920 }) => {
    baseOption = base || 1920
    return {
        name: 'rem',
        transform(code: string, id: string, ssr?: boolean) {
            if (/\.vue$/.test(id)) {
                code = code.replace(/(\{ style: {(.*)?} \})/ig, (match, $1: string) => {
                    return remReplace($1)
                })
                return {
                    code,
                    map: null
                }
            }

            if (!/\.scss|\.css|\.less$/.test(id)) {
                return {
                    code,
                    map: null
                }
            }

            code = remReplace(code)

            return {
                code,
                map: null
            }
        },

    }
}