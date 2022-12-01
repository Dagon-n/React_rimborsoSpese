import NavMenu from './Components/NavMenu/NavMenu';
import Header from './Components/Header/Header';
import MainScreen from './Components/MainScreen/MainScreen';
import { ScreenStatusContext } from './Context/ScreenStatusContext';
import { useState, useEffect } from 'react';

export default function App() {

  const [ screenState, setScreenState ] = useState('paginaVuota')

  const [ utenti, setUtenti ] = useState([]);
  useEffect( () =>{
    fetch('https://63480ebc0484786c6e90a61b.mockapi.io/Utenti')
    .then((response) => response.json())
    .then((json) => setUtenti(json));
    console.log(utenti)
  }, [])

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

