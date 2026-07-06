import s from "./FilmCard.module.css";
import type {FavoriteFilm, PopularResponseResultsField} from "@/common/types";
import {Link} from 'react-router-dom';
import {RatingBadge} from "@/common/components/FilmCard/RatingBadge/RatingBadge.tsx";
import heartIcon from './../../../assets/icons/heartIcon.svg'
import filledHeart from './../../../assets/icons/FilledHeart.svg'
import {isFavorite, toggleFavorites} from "@/common/utils";
import {useState} from "react";
import {FilmCardSkeletonList} from "@/common/components/FilmCard/FilmSkeleton/FilmSkeleton.tsx";

type Proto = {
    film: PopularResponseResultsField | FavoriteFilm;
    isLoading?: boolean
    cardHeight?: number
    cardWidth?: number
}


export const FilmCard = ({film, cardWidth = 250, cardHeight = 350, isLoading}: Proto) => {

    const [isFavoriteState, setIsFavoriteState] = useState(() => isFavorite(film.id))

    const addToFavoritesHandler = () => {
        const result = toggleFavorites(film)
        setIsFavoriteState(result);
    }

    if (isLoading) {
        return (
            <div className={s.grid}>
                <FilmCardSkeletonList
                    count={6}
                    cardWidth={cardWidth}
                    cardHeight={cardHeight}
                />
            </div>
        )
    }

    return (
        <div className={s.container} key={film.id}>
            <div className={s.posterContainer} style={{width: `${cardWidth}px`, height: `${cardHeight}px`,}}>
                <Link to={`/movie/${film.id}`} className={s.posterImage}
                      style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${film.poster_path})`}}>

                    <div className={s.voteAverage}><RatingBadge rating={film.vote_average}/></div>

                    {film.poster_path === null && <div className={s.noImage}>No Image</div>}
                </Link>
                <button className={`${s.addFavorites} ${isFavoriteState ? s.favorite : ''}`}
                        onClick={addToFavoritesHandler}>
                    <img alt={'Favorite'} src={
                        isFavoriteState
                            ? filledHeart
                            : heartIcon}/>
                </button>
            </div>

            <Link to={`/movie/${film.id}`} className={s.filmTitle}>{film.title}</Link>
        </div>
    )
}