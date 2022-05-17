import React from 'react';
import { NavLink } from 'react-router-dom';
import st from './dialogItemStyle.module.css';

export const DiaItem = (diaItems) => {

    return (
        <div className={st.item}>
            <div className={st.name}>
                <NavLink to={`/dialogs/${diaItems.id}`} >{diaItems.name}</NavLink>
            </div>
            <div className={st.message}>
                {diaItems.message}  
            </div>
        </div>
    )
}