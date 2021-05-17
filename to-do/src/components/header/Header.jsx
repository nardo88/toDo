import React from 'react';
import logo from '../../img/logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header__wrapper">
                        <div className="header__logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <nav className="nav">
                            <ul className="nav__list">
                                <li className="nav__item">
                                    <NavLink to="/free" className="nav__link" activeClassName="nav__link--active">FREE</NavLink>
                                </li>
                                <li className="nav__item">
                                    <NavLink to="/ufk" className="nav__link" activeClassName="nav__link--active">UFK</NavLink>
                                </li>
                            </ul>
                        
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;

