import React from 'react';
import { DiaItem } from './dialogItem/dialogItem';
import st from './dialogsStyle.module.css';


const diaItems = [
    { id: 1, name: 'Renat Bikmukhamedov', message: 'Ебать пропсы работают наконец-то' },
    { id: 2, name: 'Vlad Serebrov', message: 'Всё хуйня, учи хуки' },
    { id: 3, name: 'Misha Lepilin', message: 'Всё хуйня, пошли пить пиво' },
    { id: 4, name: 'Sasha Volobueva', message: 'Ты хуйня' },
    { id: 5, name: 'Misha Amazyan', message: '"Что-то на Армянском"' },
    { id: 6, name: 'Max Morkovkin', message: 'Курю скальпель' },
    { id: 7, name: 'Sasha Lepilin', message: 'go dota 2' },
]

export const Dialogs = () => {
    return (
        <div className={st.content}>
            {
                diaItems.map(diaItems => (
                    <DiaItem key={diaItems.id} id={diaItems.id} name={diaItems.name} message={diaItems.message} />
                ))
            }
        </div>
    )
}
