import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ifResultErrorShowErr} from "@/common/utils";


export const baseApi = createApi({
    reducerPath: 'baseApi',
    tagTypes: [],
    baseQuery: async (args, api, extraOptions) => {
        // await  new Promise ((resolve)=>setTimeout(resolve,2000))
        const result = await fetchBaseQuery({
            baseUrl: 'https://api.themoviedb.org/3/',
            prepareHeaders: (headers) => {
                headers.set('Authorization', `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`)
                return headers
            },
        })(args, api, extraOptions)

        if(result.error){
            return ifResultErrorShowErr(result)
        }
        return result
    },

    endpoints: () => ({})
})