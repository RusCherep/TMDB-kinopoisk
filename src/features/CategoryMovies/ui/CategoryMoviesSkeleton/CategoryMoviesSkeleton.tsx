// features/CategoryMovies/ui/CategoryMoviesSkeleton.tsx
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import s from "../CategoryMovies.module.css"
import { CategoryKeys } from "@/common/constants"
import {MoviesGridSkeleton} from "@/common/components/MoviesGrid/Skeleton/MoviesGridSkeleton.tsx";


interface CategoryMoviesSkeletonProps {
    currentCategory?: string
    itemsCount?: number
}

export const CategoryMoviesSkeleton = ({
                                           currentCategory = "popular",
                                           itemsCount = 10,
                                       }: CategoryMoviesSkeletonProps) => {
    return (
        <div className={s.container}>
            {/* ✅ Скелетон для кнопок категорий */}
            <nav className={s.buttonContainer}>
                {CategoryKeys.map((key) => (
                    <Skeleton
                        key={key}
                        width={120}
                        height={30}
                        borderRadius={15}
                        className={`${s.skeletonButton} ${currentCategory === key ? s.skeletonButtonActive : ''}`}
                    />
                ))}
            </nav>

            {/* ✅ Скелетон для заголовка */}
            <Skeleton
                width={200}
                height={32}
                borderRadius={6}
                className={s.skeletonTitle}
            />

            {/* ✅ Скелетон для грида фильмов */}
            <MoviesGridSkeleton
                count={itemsCount}
                cardWidth={200}
                cardHeight={300}
                filmsInRow={5}
            />

            {/* ✅ Скелетон для пагинации */}
            <div className={s.skeletonPagination}>
                <Skeleton width={40} height={40} borderRadius={8} />
                <Skeleton width={40} height={40} borderRadius={8} />
                <Skeleton width={40} height={40} borderRadius={8} />
                <Skeleton width={40} height={40} borderRadius={8} />
                <Skeleton width={40} height={40} borderRadius={8} />
            </div>
        </div>
    )
}