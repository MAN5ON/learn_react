import React from 'react';
import { DiaItem } from './dialogItem/dialogItem';
import st from './dialogsStyle.module.css';


export const Dialogs = (props) => {
    return (
        <div className={st.content}>
            {
                props.diaItems.map(diaItems => (
                    <DiaItem key={diaItems.id} id={diaItems.id} name={diaItems.name} message={diaItems.message} />
                ))
            }
        </div>
    )
}
