import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';

const diaItems = [
  { id: 1, name: 'Renat Bikmukhamedov', message: 'Ебать пропсы работают наконец-то' },
  { id: 2, name: 'Vlad Serebrov', message: 'Всё хуйня, учи хуки' },
  { id: 3, name: 'Misha Lepilin', message: 'Всё хуйня, пошли пить пиво' },
  { id: 4, name: 'Sasha Volobueva', message: 'Ты хуйня' },
  { id: 5, name: 'Misha Amazyan', message: '"Что-то на Армянском"' },
  { id: 6, name: 'Max Morkovkin', message: 'Курю скальпель' },
  { id: 7, name: 'Sasha Lepilin', message: 'go dota 2' },
]

const posts = [
  {id: 1, message: '1 post', likes: 13},
  {id: 2, message: '2 post', likes: 9},
  {id: 3, message: '3 post', likes: 12},
  {id: 4, message: '4 post', likes: 29},
]

ReactDOM.render(
  <React.StrictMode>
    <App diaItems={diaItems} posts={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
