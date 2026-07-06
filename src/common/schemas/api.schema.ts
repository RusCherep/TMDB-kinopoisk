import {z} from "zod";

export const CollectionSchema = z.object({
    id: z.number(),
    name: z.string(),
    poster_path: z.string().nullable(),
    backdrop_path: z.string().nullable(),
})


export const ProductionCompanySchema = z.object({
    id: z.number(),
    name: z.string(),
    logo_path: z.string().nullable(),
    origin_country: z.string(),
})

export const ProductionCountrySchema = z.object({
    iso_3166_1: z.string(),
    name: z.string(),
})

export const SpokenLanguageSchema = z.object({
    english_name: z.string(),
    iso_639_1: z.string(),
    name: z.string(),
})

export type SpokenLanguage = z.infer<typeof SpokenLanguageSchema>
export type ProductionCompany = z.infer<typeof ProductionCompanySchema>
export type ProductionCountry = z.infer<typeof ProductionCountrySchema>
export type Collection = z.infer<typeof CollectionSchema>
//

export const PopularResponseResultsFieldSchema = z.object({
    adult: z.boolean(),
    backdrop_path: z.string().nullable(), // ✅ может быть null
    genre_ids: z.array(z.number()),
    id: z.number(),
    original_language: z.string(),
    original_title: z.string(),
    overview: z.string().nullable(), // ✅ может быть null
    popularity: z.number(),
    poster_path: z.string().nullable(), // ✅ может быть null
    release_date: z.string().nullable(), // ✅ может быть null
    title: z.string(),
    video: z.boolean(),
    vote_average: z.number(),
    vote_count: z.number(),
    // softcore: z.boolean().optional(),
})

export const DatesSchema = z.object({
    maximum: z.string(),
    minimum: z.string(),
})
export const MoviesResponseSchema = z.object({
    page: z.number(),
    results: z.array(PopularResponseResultsFieldSchema),
    total_pages: z.number(),
    total_results: z.number(),
    dates: DatesSchema.optional()
})

export const GenreSchema = z.object({
    id: z.number(),
    name: z.string(),

})

export const MovieGenresSchema = z.object({
    genres: z.array(
        GenreSchema
    )
})



export const MovieDetailsSchema = z.object({
    adult: z.boolean(),
    backdrop_path: z.string().nullable(),
    belongs_to_collection: CollectionSchema.nullable(),
    budget: z.number(),
    genres: z.array(GenreSchema),
    homepage: z.string(),
    id: z.number(),
    imdb_id: z.string(),
    origin_country: z.array(z.string()),
    original_language: z.string(),
    original_title: z.string(),
    overview: z.string(),
    popularity: z.number(),
    poster_path: z.string().nullable(),
    production_companies: z.array(ProductionCompanySchema),
    production_countries: z.array(ProductionCountrySchema),
    release_date: z.string(),
    revenue: z.number(),
    runtime: z.number(),
    spoken_languages: z.array(SpokenLanguageSchema),
    status: z.string(),
    tagline: z.string(),
    title: z.string(),
    video: z.boolean(),
    vote_average: z.number(),
    vote_count: z.number(),
})


export const CastSchema = z.object({
    id: z.number(),
    name: z.string(),
    character: z.string(),
    profile_path: z.string().nullable(),
    order: z.number(),
    cast_id: z.number(),
    credit_id: z.string(),
    gender: z.number(),
})

export const CrewSchema = z.object({
    id: z.number(),
    name: z.string(),
    job: z.string(),
    department: z.string(),
    profile_path: z.string().nullable(),
    credit_id: z.string(),
    gender: z.number(),
})

export const MovieCreditsSchema = z.object({
    id: z.number(),
    cast: z.array(CastSchema),
    crew: z.array(CrewSchema),
})





export const SearchResponseSchema = MoviesResponseSchema

export type Movie = z.infer<typeof MoviesResponseSchema>
export type MoviesResponse = z.infer<typeof MoviesResponseSchema>
export type MovieDetails = z.infer<typeof MovieDetailsSchema>
export type MovieCredits = z.infer<typeof MovieCreditsSchema>
export type Cast = z.infer<typeof CastSchema>
export type Crew = z.infer<typeof CrewSchema>
