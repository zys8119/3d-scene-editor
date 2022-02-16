export class ValidationError extends Error {
    type: 'error' | 'info' | 'success' | 'warning'
    constructor(message?: string, type: 'error' | 'info' | 'success' | 'warning' = 'error') {
        super(message)
        this.name = 'ApiError'
        this.type = type
    }
}

const errorReport = (e: unknown) => {
    if (e instanceof ValidationError) {
        ElMessage({
            message: e.message,
            type: e.type
        })
    } else if (e instanceof Error) {
        ElMessage({
            message: e.message,
            type: 'error'
        })
    } else if (typeof e === 'string') {
        ElMessage({
            message: e,
            type: 'error'
        })
    }
}

export const is = {
    array: (array?: any) => Array.isArray(array) && array.length !== 0
}

export const validate = async(call: (checking?: typeof is) => any) => {
    try {
        await call(is)
    } catch (e) {
        if (Array.isArray(e)) {
            e.forEach(error => errorReport(error))
        } else {
            errorReport(e)
        }
        throw e
    }
}

export default validate