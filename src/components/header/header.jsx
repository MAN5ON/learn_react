import React from 'react';
import st from './headerStyle.module.css';

export const Header = () => {
    return (
        <header className={st.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/2560px-Playstation_logo_colour.svg.png'></img>
        </header>
    );
}
