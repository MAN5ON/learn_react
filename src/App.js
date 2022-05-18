import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import { Header } from './components/header/header';
import { Navbar } from './components/navbar/navbar';
import { Profile } from './components/content/profile/profile';
import { Dialogs } from './components/content/dialogs/dialogs';


export const App = (props) => {
  return (
    <BrowserRouter>
      <div className="appWrapper">
        <Header />
        <Navbar />
        <div className='appWrapperContent'>
          <Routes>
            <Route path='/profile' element={<Profile posts={props.posts}/>} />
            <Route path='/dialogs' element={<Dialogs diaItems={props.diaItems}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}