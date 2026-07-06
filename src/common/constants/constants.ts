export const Path = {
    Main: '/',
    FilteredMovies: '/filteredMovies',
    Search: '/search',
    Favorites: '/favorites',
    CategoryMovies: '/movies/:category',
    PopularMovies: '/movies/popular',
    UpcomingMovies: '/movies/upcoming',
    TopRatedMovies: '/movies/top-rated',
    NowPlayingMovies: '/movies/now-playing',
    NotFound: '*',
} as const


export const AllMovieCategories = {
    popular: {label: 'Popular', title: 'Popular Movies', endpoint: 'popular'},
    'top-rated': {label: 'Top Rated', title: 'Top Rated Movies', endpoint: 'top_rated'},
    upcoming: {label: 'Upcoming', title: 'Upcoming Movies', endpoint: 'upcoming'},
    'now-playing': {label: 'Now Playing', title: 'Now Playing Movies', endpoint: 'now_playing'},
} as const

export type CategoryKey = keyof typeof AllMovieCategories;

export type CategoryEndpoints = typeof AllMovieCategories[CategoryKey]['endpoint'];

export const CategoryKeys = Object.keys(AllMovieCategories) as CategoryKey[]

export const SortBy = {
    TitleAsc: 'title.asc',
    TitleDesc: 'title.desc',
    PopularityAsc: 'popularity.asc',
    PopularityDesc: 'popularity.desc',
    ReleaseDateAsc: 'primary_release_date.asc',
    ReleaseDateDesc: 'primary_release_date.desc',
    VoteAverageAsc: 'vote_average.asc',
    VoteAverageDesc: 'vote_average.desc',
} as const;

export type SortByType = typeof SortBy[keyof typeof SortBy]

export const SORT_OPTIONS = [
    { value: SortBy.PopularityDesc, label: 'Popularity ↓' },
    { value: SortBy.PopularityAsc, label: 'Popularity ↑' },
    { value: SortBy.VoteAverageDesc, label: 'Rating ↓' },
    { value: SortBy.VoteAverageAsc, label: 'Rating ↑' },
    { value: SortBy.ReleaseDateDesc, label: 'Newest First' },
    { value: SortBy.ReleaseDateAsc, label: 'Oldest First' },
    { value: SortBy.TitleAsc, label: 'Title A → Z' },
    { value: SortBy.TitleDesc, label: 'Title Z → A' },
] as const satisfies { value: SortByType; label: string }[];

export const FAVORITE_FILM_KEY = 'favoriteFilms'

export const MainPageCategories = [
    {key: 'popular' as const, title: AllMovieCategories.popular.title, navigateTo: 'popular' as const},
    {key: 'top-rated' as const, title: AllMovieCategories['top-rated'].title, navigateTo: 'top-rated' as const },
    {key: 'upcoming' as const, title: AllMovieCategories.upcoming.title, navigateTo: 'upcoming' as const},
    {key: 'now-playing' as const, title: AllMovieCategories['now-playing'].title, navigateTo: 'now-playing' as const},
];