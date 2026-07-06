export type Thems = 'dark' | "light"

export type MoviesResponse = {
    page: number
    results: PopularResponseResultsField[]
    total_pages: number
    total_results: number
    dates?: Dates
}

export type PopularResponseResultsField = {
    adult: boolean
    backdrop_path: string | null
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string | null
    popularity: number
    poster_path: string | null
    release_date: string | null
    title: string
    video: boolean
    vote_average: number
    vote_count: number
    // softcore?: boolean
}

export type Dates = {
    maximum: string
    minimum: string
}

export type VoteAverageRange = {
    lte: number
    gte: number
}

export type MovieGenres = {
    genres: Genre[]
}

export type FavoriteFilm = {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
}


type Genre = {
    id: number;
    name: string;
};

type Collection = {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
};

type ProductionCompany = {
    id: number;
    name: string;
    logo_path: string | null;
    origin_country: string;
};

type ProductionCountry = {
    iso_3166_1: string;
    name: string;
};

type SpokenLanguage = {
    english_name: string;
    iso_639_1: string;
    name: string;
};

export type MovieDetails = {
    adult: boolean;
    backdrop_path: string | null;
    belongs_to_collection: Collection | null;
    budget: number;
    genres: Genre[];
    homepage: string;
    id: number;
    imdb_id: string;
    origin_country: string[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};

type CastMember = {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
};

type CrewMember = {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    credit_id: string;
    department: string;
    job: string;
};

export type MovieCredits = {
    id: number;
    cast: CastMember[];
    crew: CrewMember[];
};


