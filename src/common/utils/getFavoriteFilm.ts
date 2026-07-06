import {FAVORITE_FILM_KEY} from "@/common/constants";
import type {FavoriteFilm, PopularResponseResultsField,} from "@/common/types";

export const getFavoriteFilm = (): FavoriteFilm[] => {
    const stored = localStorage.getItem(FAVORITE_FILM_KEY)
    const favorites:FavoriteFilm[] = stored  ? JSON.parse(stored) : []

    return favorites.map((fav) => ({
        id: fav.id,
        title: fav.title,
        poster_path: fav.poster_path,
        vote_average: fav.vote_average,
        backdrop_path: null,
        overview: '',
        release_date: '',
        popularity: 0,
        original_language: '',
        original_title: '',
        genre_ids: [],
        adult: false,
        video: false,
    })) as unknown as PopularResponseResultsField[];
}

export const isFavorite = (id: number): boolean => {
   return getFavoriteFilm().some((film) => film.id === id)
}

export const toggleFavorites = (film: FavoriteFilm) => {
    const favorites = getFavoriteFilm()
    const exist = favorites.find((f) => f.id === film.id)

    if (exist) {
        const updateFavorite = favorites.filter((f) => f.id !== film.id)
        localStorage.setItem(FAVORITE_FILM_KEY, JSON.stringify(updateFavorite))
    } else {
        const newFavorite = {
            id: film.id,
            title: film.title,
            poster_path: film.poster_path,
            vote_average: film.vote_average,
        }
        localStorage.setItem(FAVORITE_FILM_KEY, JSON.stringify([...favorites, newFavorite]))
    }

    window.dispatchEvent(new Event('favoritesUpdated'))

    return !exist

}