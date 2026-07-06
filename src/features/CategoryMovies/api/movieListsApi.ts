import {baseApi} from "@/app/api/baseApi.ts";
import type {CategoryEndpoints} from "@/common/constants";
import {validateData} from "@/common/schemas/validateData.ts";
import {
    type MovieCredits,
    MovieCreditsSchema,
    type MovieDetails,
    MovieDetailsSchema,
    type MoviesResponse,
    MoviesResponseSchema
} from "@/common/schemas";


export const movieListsApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        fetchCategoryFilms: build.query<MoviesResponse, { category: CategoryEndpoints, page: number }>({
            query: ({category, page}) => ({
                url: `movie/${category}`,
                params: {
                    language: "en-US",
                    page
                }
            }),
            transformResponse: (response) => {
                return validateData(response, MoviesResponseSchema, 'fetchCategoryFilms')
            },
        }),
        getMovieDetails: build.query <MovieDetails, number>({
            query: (movie_id) => ({
                url: `/movie/${movie_id}`
            }),
            transformResponse: (response) => {
                return validateData(response, MovieDetailsSchema, 'fetchCategoryFilms')
            },
        }),
        getCredits: build.query<MovieCredits, number>({
            query: (movie_id) => ({
                url: `/movie/${movie_id}/credits`
            }),
            transformResponse: (response) => {
                return validateData(response, MovieCreditsSchema, 'fetchCategoryFilms')
            },
        }),
        getSimilarMovies: build.query<MoviesResponse, number>({
            query: (movie_id) => ({
                url: `/movie/${movie_id}/similar`
            }),
            transformResponse: (response) => {
                return validateData(response, MoviesResponseSchema, 'fetchCategoryFilms')
            },
        })

    })

})
export const {
    useFetchCategoryFilmsQuery,
    useGetMovieDetailsQuery,
    useGetCreditsQuery,
    useGetSimilarMoviesQuery
} = movieListsApi