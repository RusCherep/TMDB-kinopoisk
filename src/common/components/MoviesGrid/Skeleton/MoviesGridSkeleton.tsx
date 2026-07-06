// common/components/MoviesGrid/MoviesGridSkeleton.tsx
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import s from "../MoviesGrid.module.css"

interface MoviesGridSkeletonProps {
    count?: number
    cardWidth?: number
    cardHeight?: number
    filmsInRow?: number
}

export const MoviesGridSkeleton = ({
                                       count = 10,
                                       cardWidth = 200,
                                       cardHeight = 300,
                                       filmsInRow = 5,
                                   }: MoviesGridSkeletonProps) => {
    return (
        <div
            className={s.moviesGrid}
            style={{ gridTemplateColumns: `repeat(${filmsInRow}, 1fr)` }}
        >
            {Array.from({ length: count }).map((_, index) => (
                <div key={index} className={s.skeletonCard}>
                    <Skeleton
                        height={cardHeight}
                        width={cardWidth}
                        borderRadius={10}
                        className={s.skeletonPoster}
                    />
                    <Skeleton
                        width="80%"
                        height={16}
                        borderRadius={4}
                        className={s.skeletonTitle}
                    />
                    <Skeleton
                        width="40%"
                        height={14}
                        borderRadius={4}
                        className={s.skeletonRating}
                    />
                </div>
            ))}
        </div>
    )
}