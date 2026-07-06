import s from "./MoviesGrid.module.css";
import {FilmCard} from "@/common/components/FilmCard/FilmCard.tsx";
import type {FavoriteFilm, PopularResponseResultsField} from "@/common/types";
import {MoviesGridSkeleton} from "@/common/components/MoviesGrid/Skeleton/MoviesGridSkeleton.tsx";

type Props = {
    results: PopularResponseResultsField[] | FavoriteFilm[];
    isLoading?:boolean
    cardWidth?: number
    cardHeight?: number
    filmsInRow?: number
    skeletonCount?:number
}



export const MoviesGrid = ({results, isLoading, cardWidth = 200, cardHeight = 300, filmsInRow = 5,  skeletonCount = 10,}: Props) => {

    if (isLoading) {
        return (
            <MoviesGridSkeleton
                count={skeletonCount}
                cardWidth={cardWidth}
                cardHeight={cardHeight}
                filmsInRow={filmsInRow}
            />
        )
    }

    // ✅ Нет данных
    if (!results || results.length === 0) {
        return (
            <div className={s.emptyState}>
                <p>No movies found</p>
            </div>
        )
    }

    return (
        <div className={s.moviesGrid} style={{gridTemplateColumns: `repeat(${filmsInRow}, 1fr)`}}>
            {results.map((film) => (
                <FilmCard key={film.id} film={film} isLoading={isLoading} cardWidth={cardWidth} cardHeight={cardHeight}></FilmCard>
            ))}
        </div>
    )
}