import React from 'react';
import { NavLink } from 'react-router-dom';
import st from './navbarStyle.module.css';

export const Navbar = () => {
    return (
        <nav className={st.nav}>
            <div><NavLink to='/profile' className = { ({ isActive })  => (isActive ? st.active : st.item) }>Profile</NavLink></div>
            <div><NavLink to='/dialogs' className = { ({ isActive })  => (isActive ? st.active : st.item) }>Dialogs</NavLink></div>
            <div><NavLink to='/news' className = { ({ isActive })  => (isActive ? st.active : st.item) }>News</NavLink></div>
            <div><NavLink to='/music' className = { ({ isActive })  => (isActive ? st.active : st.item) }>Music</NavLink></div>
            <div><NavLink to='/settings' className = { ({ isActive })  => (isActive ? st.active : st.item) }>Settings</NavLink></div>
        </nav>
    );
}
