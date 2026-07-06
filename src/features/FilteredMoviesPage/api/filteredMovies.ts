import {baseApi} from "@/app/api/baseApi.ts";
import type {SortByType} from "@/common/constants";
import type {MovieGenres, MoviesResponse, VoteAverageRange} from "@/common/types";
import {validateData} from "@/common/schemas/validateData.ts";
import {MovieGenresSchema, MoviesResponseSchema} from "@/common/schemas";

export const filteredMovies = baseApi.injectEndpoints({
    endpoints: (build) => ({
        discoverMovie: build.query<MoviesResponse, {
            sortBy: SortByType,
            voteAverage: VoteAverageRange,
            withGenres: string,
            page: number,
        }>({
            query: ({sortBy, voteAverage, page, withGenres}) => ({
                url: '/discover/movie',
                params: {
                    page,
                    sort_by: sortBy,
                    'vote_average.lte': voteAverage.lte,
                    'vote_average.gte': voteAverage.gte,
                    with_genres: withGenres,
                }
            }),
            transformResponse: (response) => {
                return validateData(response, MoviesResponseSchema, 'fetchCategoryFilms')
            },
        }),
        fetchMovieGenres: build.query<MovieGenres, void>({
            query: () => ({
                url: '/genre/movie/list'
            }),
            transformResponse: (response) => {
                return validateData(response, MovieGenresSchema, 'fetchCategoryFilms')
            },
        }),
    })
})


export const {useDiscoverMovieQuery, useFetchMovieGenresQuery} = filteredMovies