import {toast} from "react-toastify";
import {isErrorWithProperty} from "@/common/utils/isErrorWithProperty.ts";
import {isErrorWithMessage} from "@/common/utils/index.ts";

export const showError = (error: any) => {
    const message = getErrorMessage(error)
    toast.error(message, {
        type: 'error',
        theme: 'colored',
        autoClose: 5000,
    })
}


export const getErrorMessage = (error: any): string => {
    // 1. Если есть data с сообщением
    if (error?.data) {
        // TMDB ошибка
        if (isErrorWithProperty(error.data, 'status_message')) {
            return error.data.status_message
        }
        // Обычная ошибка с message
        if (isErrorWithMessage(error.data)) {
            return error.data.message
        }
        // Ошибка с error
        if (isErrorWithProperty(error.data, 'error')) {
            return error.data.error
        }
        // Пробуем строку
        if (typeof error.data === 'string') {
            return error.data
        }
        // JSON
        try {
            return JSON.stringify(error.data)
        } catch {
            return 'Unknown error'
        }
    }

    // 2. Если есть error.error (ERR_INTERNET_DISCONNECTED)
    if (error?.error) {
        if (error.error === 'ERR_INTERNET_DISCONNECTED') {
            return 'No internet connection. Please check your network.'
        }
        if (error.error === 'Failed to fetch') {
            return 'No internet connection. Please check your network.'
        }
        return error.error
    }

    // 3. Если есть message
    if (error?.message) {
        return error.message
    }

    // 4. Fallback
    return 'Something went wrong. Please try again.'
}
