import {Header} from "../../common/components/Header/Header.tsx";
import {Routing} from "../../common/components/Routing/Routing.tsx";
import s from './App.module.css'
import {ToastContainer} from "react-toastify";
import {useGlobalLoading} from "@/common/hooks/useGlobalLoading.ts";
import {LinearProgress} from "@/common/components/LinearProgress/LinearProgress.tsx";

function App() {


    const isGlobalLoading = useGlobalLoading()
    return (
        <div className={s.appWrapper}>
            <Header/>
            {isGlobalLoading && <LinearProgress/>}
            <Routing/>
            <div className={s.footer}>
                © 2025 Kinopoisk Demo · Data courtesy of TMDB.
            </div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    )
}

export default App
