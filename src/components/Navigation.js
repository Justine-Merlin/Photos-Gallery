import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import { FaBars }  from 'react-icons/fa';
import { useState } from 'react';

const Navigation = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className='navigation'>
            <NavLink exact to='/' onClick={() => setShowMenu(false)}>
                <Logo />
            </NavLink>
            <div className={showMenu ? "nav-bar active" : "nav-bar"}>
                <NavLink  to='/galerie' className="nav-link" activeClassName='nav-active' onClick={() => setShowMenu(false)}>
                    Galerie
                </NavLink>
                <NavLink  to='/propos' className="nav-link" activeClassName='nav-active' onClick={() => setShowMenu(false)}>
                    A propos
                </NavLink>
                <NavLink  to='/contact' className="nav-link" activeClassName='nav-active' onClick={() => setShowMenu(false)}>
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