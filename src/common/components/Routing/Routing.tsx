import {Route, Routes, Navigate} from 'react-router-dom';
import {MainPage} from "@/features/MainPage/ui/MainPage.tsx";
import {Path} from "../../constants";
import {SearchPage} from "@/features/SearchMovies/ui/SearchPage.tsx";
import {CategoryMovies} from "@/features/CategoryMovies/ui/CategoryMovies.tsx";
import {FilteredMoviesPage} from "@/features/FilteredMoviesPage/ui/FilteredMoviesPage.tsx";
import {FavoritesMovies} from "@/features/FavoritesMovies/ui/FavoritesMovies.tsx";
import {MovieDetailsPage} from "@/common/components/MovieDetailsPage/MovieDetailsPage.tsx";
import {PageNotFound} from "@/common/components/PageNotFound/PageNotFound.tsx";


export const Routing = () => {
    return (
        <Routes>
            <Route path={Path.Main} element={<MainPage/>}/>
            <Route path={Path.Search} element={<SearchPage/>}/>
            <Route path={Path.FilteredMovies} element={<FilteredMoviesPage/>}/>
            <Route path={Path.Favorites} element={<FavoritesMovies/>}/>

            <Route path={'/movies'} element={<Navigate to={'/movies/popular'}/>}/>
            <Route path={Path.CategoryMovies} element={<CategoryMovies/>}/>
            <Route path={'/movie/:movieId'} element={<MovieDetailsPage/>}/>
            <Route path={'*'} element={<PageNotFound/>}/>
        </Routes>
    )
}