import {z} from 'zod'

export const validateData = <T>(
    data: unknown,
    schema: z.ZodSchema<T>,
    endpoint?: string
): T => {
    try {
        return schema.parse(data)
    } catch (error) {
        // debugger
        if (error instanceof z.ZodError) {
            console.error(`[Zod Validation Error] ${endpoint || 'unknown'}:`, {
                errors: error.issues,
                received: data,
            })

            throw new Error(`Validation failed :`)

        }

        throw error

    }

}