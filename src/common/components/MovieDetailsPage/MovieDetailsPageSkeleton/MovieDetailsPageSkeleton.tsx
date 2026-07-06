// pages/MovieDetailsPage/ui/MovieDetailsPageSkeleton.tsx
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import s from '../MovieDetailsPage.module.css'

export const MovieDetailsPageSkeleton = () => {
    return (
        <div className={s.container}>
            {/* ═══════════════════════════════════════════════════════════════
          СКЕЛЕТОН ДЛЯ ОСНОВНОЙ ИНФОРМАЦИИ
          ═══════════════════════════════════════════════════════════════ */}
            <section className={s.movieDataContainer}>
                {/* Постер */}
                <div className={s.posterWrapper}>
                    <Skeleton
                        width={300}
                        height={450}
                        borderRadius={10}
                        className={s.skeletonPoster}
                    />
                </div>

                {/* Информация о фильме */}
                <div className={s.textInfoContainer}>
                    <div className={s.backButtonWrapper}>
                        <Skeleton
                            width={250}
                            height={36}
                            borderRadius={6}
                            className={s.skeletonTitle}
                        />
                        <Skeleton
                            width={80}
                            height={36}
                            borderRadius={6}
                            className={s.skeletonButton}
                        />
                    </div>

                    <div className={s.meta}>
                        <Skeleton width={120} height={20} borderRadius={4} />
                        <Skeleton width={80} height={20} borderRadius={4} />
                        <Skeleton width={100} height={20} borderRadius={4} />
                    </div>

                    <Skeleton
                        height={100}
                        borderRadius={6}
                        className={s.skeletonOverview}
                    />

                    <div className={s.genreSection}>
                        <Skeleton width={100} height={24} borderRadius={6} />
                        <div className={s.genreWrapper}>
                            <Skeleton width={80} height={32} borderRadius={16} />
                            <Skeleton width={100} height={32} borderRadius={16} />
                            <Skeleton width={70} height={32} borderRadius={16} />
                            <Skeleton width={90} height={32} borderRadius={16} />
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
          СКЕЛЕТОН ДЛЯ АКТЁРОВ
          ═══════════════════════════════════════════════════════════════ */}
            <section className={s.castSection}>
                <Skeleton width={120} height={28} borderRadius={6} />
                <div className={s.castGrid}>
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className={s.castCard}>
                            <Skeleton
                                width={120}
                                height={180}
                                borderRadius={8}
                                className={s.skeletonCastPhoto}
                            />
                            <Skeleton width={100} height={16} borderRadius={4} />
                            <Skeleton width={80} height={14} borderRadius={4} />
                        </div>
                    ))}
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
          СКЕЛЕТОН ДЛЯ ПОХОЖИХ ФИЛЬМОВ
          ═══════════════════════════════════════════════════════════════ */}
            <section className={s.similarMoviesSection}>
                <Skeleton width={180} height={28} borderRadius={6} />
                <ul className={s.similarMoviesWrapper}>
                    {Array.from({ length: 6 }).map((_, index) => (
                        <li key={index} className={s.skeletonSimilarCard}>
                            <Skeleton
                                width={180}
                                height={270}
                                borderRadius={10}
                            />
                            <Skeleton width="80%" height={16} borderRadius={4} />
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}
