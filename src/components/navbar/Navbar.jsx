import React from 'react'
import './Navbar.css'
import { FaRegUser } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div className="container">
            <nav>

                <NavLink to={'/'} className="nav_logo">
                    <img src="./imgs/logo.png" alt="" />
                </NavLink>
                <div className="nav_texts">
                    <ul>
                        <li><NavLink to={'/pokup'}>Как покупать</NavLink></li>
                        <li><NavLink to={'/sell'}>Распродажи</NavLink></li>
                        <li><NavLink to={'/narx'} >Цены</NavLink></li>
                        <li><a href=''>Помощь</a></li>
                        <li><a href=''>Бонусы</a></li>
                        <li><a href=''>Блог</a></li>
                        <li><a href=''>Магазины</a></li>
                    </ul>
                </div>
                <div className="nav_btn_blog">
                    <p><FaRegUser  className='nav_icon' />Вход</p>

                    <button className="nav_button">Связаться с нами</button>
                </div>

            </nav>
        </div>
    )
}

export default Navbar