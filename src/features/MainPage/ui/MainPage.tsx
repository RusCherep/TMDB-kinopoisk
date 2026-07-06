import {useFetchCategoryFilmsQuery} from "@/features/CategoryMovies/api/movieListsApi.ts";
import {useEffect, useRef, useState} from "react";
import s from './MainPage.module.css'
import {SearchFormInputs} from "@/common/components/SearchFormInputs/SearchFormInputs.tsx";
import {TemplateForCategories} from "@/common/components/TemplateForCategories/TemplateForCategories.tsx";
import {MainPageCategories} from "@/common/constants";
import {MainPageSkeleton} from "@/features/MainPage/ui/Skeleton/MainPageSkeleton.tsx";


export const MainPage = () => {
    const {
        data: popularFilms,
        isLoading: popularLoading,
    } = useFetchCategoryFilmsQuery({ category: 'popular', page: 1 })

    const {
        data: topRatedFilms,
        isLoading: topRatedLoading,
    } = useFetchCategoryFilmsQuery({ category: 'top_rated', page: 1 })

    const {
        data: upcomingFilms,
        isLoading: upcomingLoading,
    } = useFetchCategoryFilmsQuery({ category: 'upcoming', page: 1 })

    const {
        data: nowPlayingFilms,
        isLoading: nowPlayingLoading,
    } = useFetchCategoryFilmsQuery({ category: 'now_playing', page: 1 })

    const filmsByCategory = {
        popular: popularFilms,
        'top-rated': topRatedFilms,
        upcoming: upcomingFilms,
        'now-playing': nowPlayingFilms,
    } as const

    const [randomBackDrop, setRandomBackDrop] = useState<string | null>(null)
    const backdropSet = useRef(false)

    useEffect(() => {
        if (popularFilms?.results && popularFilms.results.length > 0 && !backdropSet.current) {
            const randomIndex = Math.floor(Math.random() * popularFilms.results.length)
            const backdrop = popularFilms.results[randomIndex]?.backdrop_path

            if (backdrop) {
                // eslint-disable-next-line react-hooks/set-state-in-effect
                setRandomBackDrop(backdrop)
                backdropSet.current = true
            }
        }
    }, [popularFilms])

    const isLoading = popularLoading || topRatedLoading || upcomingLoading || nowPlayingLoading

    if (isLoading) {
        return <MainPageSkeleton />
    }

    return (
        <div className={s.container}>
            <div className={s.backDrop}
                 style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${randomBackDrop})`}}>
                <h1>Welcome</h1>
                <h2>Browse highlighted titles from TMDB</h2>
                <SearchFormInputs/>
            </div>
            <div className={s.filmCategories}>

                {MainPageCategories.map(({key, title, navigateTo}) => (
                    <TemplateForCategories
                        key={key}
                        categoryTitle={title}
                        data={filmsByCategory[key]}
                        navigateTo={navigateTo}
                        isLoading={isLoading}
                    />
                ))}
            </div>
        </div>
    )
}