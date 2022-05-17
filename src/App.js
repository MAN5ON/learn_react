import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import { Header } from './components/header/header';
import { Navbar } from './components/navbar/navbar';
import { Profile } from './components/content/profile/profile';
import { Dialogs } from './components/content/dialogs/dialogs';


export const App = () => {
  return (
    <BrowserRouter>
      <div className="appWrapper">
        <Header />
        <Navbar />
        <div className='appWrapperContent'>
          <Routes>
            <Route path='/profile' element={<Profile/>} />
            <Route path='/dialogs' element={<Dialogs/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}