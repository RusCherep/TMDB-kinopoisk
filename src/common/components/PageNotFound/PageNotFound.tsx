import {useNavigate} from "react-router-dom";
import {Path} from "@/common/constants";
import s from './PageNotFound.module.css'

export const PageNotFound = () => {

    const navigate = useNavigate()


    return (
        <div className={s.container}>

            <h2 className={s.MainTitle}>404</h2>
            <span>Page not found. We can’t find what you’re looking for</span>
            <button className={s.button} onClick={() => navigate(Path.Main)}> To main page</button>
        </div>
    )
}