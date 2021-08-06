import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import { FaBars }  from 'react-icons/fa';
import { useState } from 'react';

const Navigation = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className='navigation'>
            <Logo />
            <div className={showMenu ? "nav-bar active" : "nav-bar"}>
                <NavLink exact to='/' activeClassName='nav-active' onClick={() => setShowMenu(false)}>
                    Accueil
                </NavLink>
                <NavLink  to='/gallery' activeClassName='nav-active' onClick={() => setShowMenu(false)}>
                    Gallerie
                </NavLink>
                <NavLink  to='/about' activeClassName='nav-active' onClick={() => setShowMenu(false)}>
                    A propos
                </NavLink>
                <NavLink  to='/contact' activeClassName='nav-active' onClick={() => setShowMenu(false)}>
                    Contact
                </NavLink>
            </div>
            <div className="logo-menu">
                <FaBars className="fa-logo" onClick={() => setShowMenu(!showMenu)}/> 
            </div>
        </div>
    );
};

export default Navigation;