import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import {AllMovieCategories, type CategoryKey, CategoryKeys} from "@/common/constants";
import s from "./CategoryMovies.module.css"
import {useFetchCategoryFilmsQuery} from "@/features/CategoryMovies/api/movieListsApi.ts";
import {Pagination} from "@/common/components/Pagination/Pagination.tsx";
import {MoviesGrid} from "@/common/components/MoviesGrid/MoviesGrid.tsx";
import {useRef} from "react";
import {CategoryMoviesSkeleton} from "@/features/CategoryMovies/ui/CategoryMoviesSkeleton/CategoryMoviesSkeleton.tsx";


export const CategoryMovies = () => {

    const {category} = useParams<{ category?: string }>()
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()


    const currentCategory: CategoryKey = category && CategoryKeys.includes(category as CategoryKey)
        ? (category as CategoryKey)
        : "popular"

    const currentEndpoint = AllMovieCategories[currentCategory].endpoint
    const currentPage = Number(searchParams.get('page')) || 1

    const {data, isLoading} = useFetchCategoryFilmsQuery({
        category: currentEndpoint,
        page: currentPage
    })
    const errorShown = useRef<boolean>(false)


    if (isLoading) {
        return <CategoryMoviesSkeleton/>
    }

    const handleCategoryChange = (key: CategoryKey) => {
        navigate(`/movies/${key}`)
        errorShown.current = false
    }

    const handlePageChange = (page: number) => {
        setSearchParams({page: String(page)})
        window.scroll(0, 0)
    }


    if (!data || !data.results || data.results.length === 0) {
        return (
            <div className={s.container}>
                <nav className={s.buttonContainer}>
                    {CategoryKeys.map((key) => (
                        <button
                            key={key}
                            onClick={() => handleCategoryChange(key)}
                            className={currentCategory === key ? s.categoryButtonActive : s.categoryButton}
                        >
                            {AllMovieCategories[key].label}
                        </button>
                    ))}
                </nav>
                <div className={s.emptyState}>No movies found in this category</div>
            </div>
        )
    }

    return (
        <div className={s.container}>
            <nav className={s.buttonContainer}>
                {CategoryKeys.map((key) => (
                    <button key={key}
                            onClick={() => handleCategoryChange(key)}
                            className={currentCategory === key
                                ? `${s.categoryButton} ${s.categoryButtonActive} `
                                : s.categoryButton}
                    >
                        {AllMovieCategories[key].label}
                    </button>
                ))}
            </nav>

            <div>
                <h2>{AllMovieCategories[currentCategory].title}</h2>
                <MoviesGrid results={data.results} isLoading={isLoading}/>
            </div>
            <Pagination currentPage={data.page} setCurrentPage={handlePageChange}
                        pagesCount={data.total_pages}/>
        </div>
    )
}