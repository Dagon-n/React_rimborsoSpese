import PaginaVuota from './PaginaVuota/PaginaVuota';
import TableDati from './TableDati/TableDati';
import FormAggiungiDati from './FormAggiungiDati/FormAggiungiDati';
import FormEditaDati from './FormEditaDati/FormEditaDati';
import './mainScreen.css'

import { useContext, useEffect, useState } from 'react';
import { ScreenStatusContext } from '../../Context/ScreenStatusContext';
import axios from 'axios';

export default function MainScreen() {

    const { screenState, setScreenState } = useContext(ScreenStatusContext)
    const [ users, setUsers ] = useState([])

    const [ spese, setSpese ] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
      const result = await axios(
        'https://63480ebc0484786c6e90a61b.mockapi.io/Utenti'
      );
        setUsers(result.data)
      };
        fetchData()
    }, [])

    return(

        <div className='mainScreen'>
            { screenState === 'formAggiungiDati' && <FormAggiungiDati/> }
            { screenState === 'tableDati' && <TableDati/> }
        </div>

    )
    
}