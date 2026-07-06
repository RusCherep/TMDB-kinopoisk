import {baseApi} from "@/app/api/baseApi.ts";
import type {MoviesResponse} from "@/common/types";
import {validateData} from "@/common/schemas/validateData.ts";
import {MoviesResponseSchema} from "@/common/schemas";

export const searchApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        searchMovies: build.query<MoviesResponse, { query: string }>({
            query: ({query}) => ({
                url: 'search/movie',
                params: {query}
            }),
            transformResponse: (response) => {
                return validateData(response, MoviesResponseSchema, 'fetchCategoryFilms')
            },
        })
    })
})

export const {useSearchMoviesQuery} = searchApi

