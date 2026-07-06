import {SearchFormInputs} from "@/common/components/SearchFormInputs/SearchFormInputs.tsx";
import {useSearchParams} from "react-router-dom";
import s from './SearchPage.module.css'
import {useSearchMoviesQuery} from "@/features/SearchMovies/api/searchApi.ts";
import {MoviesGrid} from "@/common/components/MoviesGrid/MoviesGrid.tsx";
import {SearchPageSkeleton} from "@/features/SearchMovies/ui/Sakeleton/SearchPageSkeleton.tsx";

export const SearchPage = () => {

    const [searchParams] = useSearchParams()

    const query = searchParams.get('query') || ''

    const {data, isLoading, } = useSearchMoviesQuery({query}, {skip: !query})


    // query is bool and if '' don't show films
    const queryIsChanged = !!query

    if (isLoading) {
        return <SearchPageSkeleton/>
    }


    return (
        <div className={s.container}>
            <h2>Search Results</h2>
            <SearchFormInputs/>

            {!query && <div>Enter a movie title to start searching.</div>}

            {queryIsChanged && data && (
                <>
                    <div>
                        {data?.results.length
                            ? `Results for "${query}"`
                            : `No matches found for "${query}".`}
                    </div>
                    <MoviesGrid results={data.results} isLoading={isLoading}/>
                </>

            )}
        </div>
    )
}