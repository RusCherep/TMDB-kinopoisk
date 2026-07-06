import { z } from 'zod'

// 1. Схема для ошибки TMDB
export const TmdbErrorSchema = z.object({
    status_code: z.number(),
    status_message: z.string(),
    success: z.boolean().default(false),
})

// 2. Схема для пагинации
export const PaginationSchema = z.object({
    page: z.number().min(1),
    total_pages: z.number().min(0),
    total_results: z.number().min(0),
})

// 3. Схема для параметров запроса
export const MovieQueryParamsSchema = z.object({
    language: z.string().default('en-US'),
    page: z.number().min(1).default(1),
    region: z.string().optional(),
})

// 4. Схема для поискового запроса
export const SearchQueryParamsSchema = MovieQueryParamsSchema.extend({
    query: z.string().min(1, 'Search query is required'),
    include_adult: z.boolean().default(false),
    year: z.number().optional(),
})

// Типы
export type TmdbError = z.infer<typeof TmdbErrorSchema>
export type Pagination = z.infer<typeof PaginationSchema>
export type MovieQueryParams = z.infer<typeof MovieQueryParamsSchema>
export type SearchQueryParams = z.infer<typeof SearchQueryParamsSchema>