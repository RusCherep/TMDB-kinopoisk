import s from './FilteredMoviesPage.module.css'
import {useDiscoverMovieQuery, useFetchMovieGenresQuery} from "@/features/FilteredMoviesPage/api/filteredMovies.ts";
import {type ChangeEvent, useState} from "react";
import {SORT_OPTIONS, SortBy, type SortByType} from "@/common/constants";
import {useSearchParams} from "react-router-dom";
import {Pagination} from "@/common/components/Pagination/Pagination.tsx";
import {MoviesGrid} from "@/common/components/MoviesGrid/MoviesGrid.tsx";
import {VoteAverageSlider} from "@/common/components/VoteAverageSlider/VoteAverageSlider.tsx";

export const FilteredMoviesPage = () => {

    const [range, setRange] = useState({lte: 10, gte: 0})
    const [sortBy, setSortBy] = useState<SortByType>(SortBy.PopularityDesc)
    const [searchParams, setSearchParams] = useSearchParams()
    const currentPage = Number(searchParams.get('page')) || 1

    const [selectedGenreIds, setSelectedGenreIds] = useState<number[]>([])
    const withGenres = selectedGenreIds.join(',')

    const {data, isLoading} = useDiscoverMovieQuery({
        page: currentPage,
        voteAverage: range,
        sortBy: sortBy,
        withGenres
    })
    const {
        data: allGenres,
        // isError: isErrorGenres,
        // isFetching: isFetchingGenres,
        // error: errorGenres
    } = useFetchMovieGenresQuery()

    // useEffect(() => {
    //     if (isError && !isFetching || isErrorGenres && !isFetchingGenres ) {
    //         showErrorToast(error)
    //     }
    //
    //
    // }, [isError, isFetching, error, isErrorGenres, isFetchingGenres, errorGenres])

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (!data) {
        return <div>Error</div>
    }


    const handlePageChange = (page: number) => {
        setSearchParams({page: String(page)})
        window.scroll(0, 0)
    }

    const handleOnChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setSortBy(e.currentTarget.value as SortByType)
    }

    const onClickButtonHandler = (id: number) => {
        setSelectedGenreIds((prev) => {
            if (prev.includes(id)) {
                return prev.filter((genreId) => genreId !== id)
            }
            return [...prev, id]

        })
    }

    const handleReset = () => {
        setRange({lte: 10, gte: 0})
        setSortBy(SortBy.PopularityDesc)
        setSelectedGenreIds([])
    }

    return (
        <div className={s.container}>
            <div className={s.containerFilters}>
                <h2>Filters/Sort</h2>
                <div className={s.selectorContainer}>
                    Sort By
                    <select className={s.selector} onChange={handleOnChangeSelect}>
                        {
                            SORT_OPTIONS.map(({value, label}) => (
                                <option key={label} value={value}>{label}</option>
                            ))
                        }
                    </select></div>

                <VoteAverageSlider
                    min={0}
                    max={10}
                    step={0.1}
                    onChange={setRange}
                    label={'Rating'}
                />
                <div className={s.genreButtonContainer}>
                    {allGenres?.genres.map((genre) => {
                        return <button key={genre.id}
                                       className={`${s.genreButton} ${selectedGenreIds.includes(genre.id) ? s.active : ''}`}
                                       onClick={() => onClickButtonHandler(genre.id)}>{genre.name}</button>
                    })}
                </div>
                <button className={s.resetButton} onClick={handleReset}>Reset Filters</button>
            </div>
            <div>
                <MoviesGrid results={data.results}/>
                <Pagination currentPage={data.page} setCurrentPage={handlePageChange}
                            pagesCount={data.total_pages}/>
            </div>
        </div>
    )
}