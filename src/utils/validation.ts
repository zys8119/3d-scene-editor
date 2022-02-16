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
    }
    if (typeof e === 'string') {
        ElMessage({
            message: e,
            type: 'error'
        })
    }
}

export const validate = async(call: () => any) => {
    try {
        await call()
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