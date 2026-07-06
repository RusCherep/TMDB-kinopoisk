import s from './TemplateForCategories.module.css'
import type {MoviesResponse} from "@/common/types";
import {FilmCard} from "@/common/components/FilmCard/FilmCard.tsx";
import {useNavigate} from "react-router-dom";
import type {CategoryKey} from "@/common/constants";
import { TemplateForCategoriesSkeleton } from './TemplateForCategoriesSkeleton/TemplateForCategoriesSkeleton';

type Proto =  {
    categoryTitle:string
    data?: MoviesResponse
    navigateTo:CategoryKey
    isLoading:boolean
}

export const TemplateForCategories = ({categoryTitle,data , navigateTo, isLoading}:Proto) => {

    const navigate = useNavigate()

    const onClickHandler=()=>{
        //navigate to category page
        navigate(`/movies/${navigateTo}`)

    }
    if (isLoading || !data) {
        return <TemplateForCategoriesSkeleton title={categoryTitle} count={6} />
    }

    return (
        <div className={s.container}>
            <div className={s.topLevel}>
                <div className={s.categoryTitle}>{categoryTitle}</div>
                <button className={s.styledButton} onClick={onClickHandler}>View more</button>
            </div>
            <div className={s.arrayFilms}>
                {data.results.slice(0,6).map((film)=>{
                    return(
                        <FilmCard key={film.id} film={film} isLoading={isLoading} cardHeight={300} cardWidth={200}/>
                    )
                })}
            </div>
        </div>
    )
}