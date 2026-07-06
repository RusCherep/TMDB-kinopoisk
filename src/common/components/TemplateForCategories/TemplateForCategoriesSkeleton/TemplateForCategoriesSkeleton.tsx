// common/components/TemplateForCategories/TemplateForCategoriesSkeleton.tsx
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import s from '../TemplateForCategories.module.css'

interface TemplateForCategoriesSkeletonProps {
    title?: string
    count?: number
}

export const TemplateForCategoriesSkeleton = ({
                                                  count = 6,
                                              }: TemplateForCategoriesSkeletonProps) => {
    return (
        <div className={s.container}>
            {/* ✅ Скелетон для заголовка и кнопки */}
            <div className={s.topLevel}>
                <Skeleton
                    width={200}
                    height={28}
                    borderRadius={6}
                    className={s.skeletonTitle}
                />
                <Skeleton
                    width={100}
                    height={36}
                    borderRadius={18}
                    className={s.skeletonButton}
                />
            </div>

            {/* ✅ Скелетон для карточек фильмов */}
            <div className={s.arrayFilms}>
                {Array.from({length: count}).map((_, index) => (
                    <div key={index} className={s.skeletonCard}>
                        <Skeleton
                            height={300}
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
        </div>
    )
}