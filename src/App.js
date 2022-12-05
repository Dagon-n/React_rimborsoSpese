import NavMenu from './Components/NavMenu/NavMenu';
import Header from './Components/Header/Header';
import MainScreen from './Components/MainScreen/MainScreen';
import { ScreenStatusContext } from './Context/ScreenStatusContext';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {

  const [ screenState, setScreenState ] = useState('formAggiungiDati')

  return (
    <div className='page'>
      <NavMenu />
      <ScreenStatusContext.Provider value={{ screenState, setScreenState }}>
        <Header />
        <MainScreen />
      </ScreenStatusContext.Provider>
    </div>
  );

}

