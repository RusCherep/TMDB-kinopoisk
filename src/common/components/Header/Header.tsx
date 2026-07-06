import {Link, NavLink} from "react-router-dom";
import iconBlueShort
    from "../../../assets/icons/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg";
import s from './Header.module.css'
import {useEffect, useState} from "react";
import type {Thems} from "../../types";
import {Path} from "../../constants";


const navItems = [
    {to: Path.Main, label: 'Main'},
    {to: Path.PopularMovies, label: 'Category movies'},
    {to: Path.FilteredMovies, label: 'Filtered movies'},
    {to: Path.Search, label: 'Search'},
    {to: Path.Favorites, label: 'Favorites'},
]


export const Header = () => {

    const [theme, setTheme] = useState<Thems>(() => {
        return localStorage.getItem('theme') as Thems || 'dark'
    })

    useEffect(() => {
        localStorage.setItem('theme', theme)
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    const isActiveLink = (to: string)=>{
        if(to === Path.PopularMovies){
            return location.pathname.startsWith('/movie')
        }
        return location.pathname === to
    }


    return (
        <header className={s.header}>
            <div className={s.itemsContainer}>
                <Link to={'/'}><img src={iconBlueShort} alt="Logo" width="100" height="50"/></Link>
                <nav>
                    <ul className={s.listContainer}>
                        {navItems.map((item, index) => (
                            <li key={item.to} className={s.list}>
                                <NavLink
                                    className={() => `${s.listItem} ${isActiveLink(item.to) ? s.active : ''}`}
                                    to={item.to}
                                    end
                                >
                                    {item.label}

                                </NavLink>
                                {index < navItems.length - 1 && <span>|</span>}
                            </li>
                        ))}
                    </ul>
                </nav>

                <button className={s.themeButton}
                        onClick={() => setTheme(theme === 'dark' ? 'light' : "dark")}
                >{theme === 'light' ? '🌙' : '☀️'}</button>
            </div>
        </header>
    )
}