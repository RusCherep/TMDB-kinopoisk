import {MoviesGrid} from "@/common/components/MoviesGrid/MoviesGrid.tsx";
import {getFavoriteFilm} from "@/common/utils";
import s from './FavoritesMovies.module.css'
import {useEffect, useState} from "react";

export const FavoritesMovies = () => {

    const [favorites, setFavorites] = useState(getFavoriteFilm)

    useEffect(() => {
        const handleUpdate = () => setFavorites(getFavoriteFilm());
        window.addEventListener('favoritesUpdated', handleUpdate);
        return () => window.removeEventListener('favoritesUpdated', handleUpdate);
    }, []);


    return (
        <div className={s.container}>
            <h2>Favorites</h2>
            <div>
                <span>Favorites</span>
                {favorites.length === 0 ? (
                    <div>No favorite movies yet.</div>
                ) : (
                    <MoviesGrid results={favorites} filmsInRow={6}/>
                )}
            </div>
        </div>
    )
}