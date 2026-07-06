import {showError} from "@/common/utils/showError.ts";
import {toast} from "react-toastify";

export const ifResultErrorShowErr = (result) => {

    if (result.error) {
        const error = result.error
        const status = error.status

        switch (status) {
            case 'PARSING_ERROR':
                showError(error)
                break

            case 'FETCH_ERROR':
                if (error.error === 'ERR_INTERNET_DISCONNECTED' || error.error === 'Failed to fetch') {
                    toast.error('No internet connection. Please check your network.', {
                        theme: 'colored',
                    })
                } else {
                    showError(error)
                }
                break

            case 'TIMEOUT_ERROR':
                showError(error)
                break

            case 'CUSTOM_ERROR':
                showError(error)
                break


            case 401:
                showError(error)
                break

            case 404:
                showError(error)
                break

            case 429:
                showError(error)
                break

            default: {
                if (typeof status === 'number') {
                    showError(error)
                } else {
                    toast.error('Something went wrong. Please try again.', {
                        theme: 'colored',
                    })
                }
            }
        }

        return result
    }
}