import {createRoot} from 'react-dom/client'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
import App from "./app/ui/App.tsx";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "@/app/model/store.ts";



createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
)
