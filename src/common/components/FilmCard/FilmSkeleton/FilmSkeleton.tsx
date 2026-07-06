// common/components/FilmCard/FilmCardSkeleton.tsx
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import s from './FilmSkeleton.module.css'

interface FilmCardSkeletonProps {
    cardWidth?: number
    cardHeight?: number
}

export const FilmCardSkeleton = ({
                                     cardWidth = 250,
                                     cardHeight = 450
                                 }: FilmCardSkeletonProps) => {
    return (
        <div className={s.skeletonContainer}>
            <Skeleton
                width={cardWidth}
                height={cardHeight}
                borderRadius={10}
                className={s.skeletonPoster}
            />
            <Skeleton
                width="80%"
                height={20}
                borderRadius={4}
                className={s.skeletonTitle}
            />
        </div>
    )
}

export const FilmCardSkeletonList = ({
                                         count = 6,
                                         cardWidth = 250,
                                         cardHeight = 450
                                     }: FilmCardSkeletonProps & { count?: number }) => {
    return (
        <>
            {Array.from({ length: count }).map((_, index) => (
                <FilmCardSkeleton
                    key={index}
                    cardWidth={cardWidth}
                    cardHeight={cardHeight}
                />
            ))}
        </>
    )
}