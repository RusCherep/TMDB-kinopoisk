// pages/MainPage/ui/MainPageSkeleton.tsx
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import s from '../MainPage.module.css'
import { MainPageCategories } from '@/common/constants'

export const MainPageSkeleton = () => {
    return (
        <div className={s.container}>
            {/* ✅ Скелетон для Backdrop */}
            <div className={s.backDropSkeleton}>
                <Skeleton
                    width={300}
                    height={40}
                    borderRadius={8}
                    className={s.skeletonTitle}
                />
                <Skeleton
                    width={400}
                    height={24}
                    borderRadius={8}
                    className={s.skeletonSubtitle}
                />
                <Skeleton
                    width={500}
                    height={48}
                    borderRadius={30}
                    className={s.skeletonSearch}
                />
            </div>

            {/* ✅ Скелетон для категорий */}
            <div className={s.filmCategories}>
                {MainPageCategories.map(({ key }) => (
                    <div key={key} className={s.categorySkeleton}>
                        <Skeleton
                            width={200}
                            height={28}
                            borderRadius={6}
                            className={s.skeletonCategoryTitle}
                        />
                        <div className={s.skeletonGrid}>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <div key={index} className={s.skeletonCard}>
                                    <Skeleton
                                        height={200}
                                        borderRadius={8}
                                    />
                                    <Skeleton
                                        width="80%"
                                        height={16}
                                        borderRadius={4}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}