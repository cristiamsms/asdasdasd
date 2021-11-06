import React from 'react';
import './navbar.css';
import logo from '../assets/logoCeibaSoftware-horizontal-blanco.png';
export const NavbarScreen = () => {
    return (
        <>
        <header className="header__navbar">
            <img className="header__navbar-img" src={logo} alt="" />
            <button className="header__navbar-button">Log out</button>
        </header>
        <section className="sidebar">
            <div className="sidebar__container" >
                <ul>
                    <li><a className = "sidebar__container-item" href="">prueba</a></li>
                    <li><a className = "sidebar__container-item" href="">prueba</a></li>
                </ul>
            </div>
        </section>
        </>
    )
}
