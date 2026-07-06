import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import s from '../SearchPage.module.css'

interface SearchPageSkeletonProps {
    count?: number
}

export const SearchPageSkeleton = ({ count = 10 }: SearchPageSkeletonProps) => {
    return (
        <div className={s.container}>
            {/* ✅ Заголовок */}
            <Skeleton
                width={200}
                height={32}
                borderRadius={6}
                className={s.skeletonTitle}
            />

            {/* ✅ Поисковая строка */}
            <Skeleton
                height={48}
                borderRadius={30}
                className={s.skeletonSearch}
            />

            {/* ✅ Информация о результатах */}
            <Skeleton
                width={300}
                height={20}
                borderRadius={4}
                className={s.skeletonInfo}
            />

            {/* ✅ Грид фильмов */}
            <div className={s.moviesGrid}>
                {Array.from({ length: count }).map((_, index) => (
                    <div key={index} className={s.skeletonCard}>
                        <Skeleton
                            height={300}
                            borderRadius={8}
                            className={s.skeletonPoster}
                        />
                        <Skeleton
                            width="80%"
                            height={16}
                            borderRadius={4}
                            className={s.skeletonTitle}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}