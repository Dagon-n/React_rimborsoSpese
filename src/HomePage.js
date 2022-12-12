import NavMenu from './Components/NavMenu/NavMenu';
import Header from './Components/Header/Header';
import MainScreen from './Components/MainScreen/MainScreen'
import { ScreenStatusContext } from './Context/ScreenStatusContext';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Homepage() {

    const [ screenState, setScreenState ] = useState('formAggiungiDati')
    const [ nomeUtenteLoggato, setNomeUtenteLoggato ] = useState()
    const [ idUtenteLoggato, setIdUtenteLoggato ] = useState()

    let location = useLocation();

    useEffect( ()=>{
        setNomeUtenteLoggato(location.state.nome)
        setIdUtenteLoggato(location.state.idUtente)
    }, [])

    return (
        <div className='page'>
            <NavMenu />
            <ScreenStatusContext.Provider value={{ screenState, setScreenState }}>
                <Header nomeUtenteLoggato={nomeUtenteLoggato} />
                <MainScreen idUtenteLoggato={idUtenteLoggato} />
            </ScreenStatusContext.Provider>
        </div>
    )

}