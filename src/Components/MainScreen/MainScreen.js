import TableDati from './TableDati/TableDati';
import FormAggiungiDati from './FormAggiungiDati/FormAggiungiDati';
import './mainScreen.css'

import { useContext } from 'react';
import { ScreenStatusContext } from '../../Context/ScreenStatusContext';

export default function MainScreen(props) {

    const { screenState, setScreenState } = useContext(ScreenStatusContext)

    return(

        <div className='mainScreen'>
            { screenState === 'formAggiungiDati' && <FormAggiungiDati idUtenteLoggato={props.idUtenteLoggato} /> }
            { screenState === 'tableDati' && <TableDati idUtenteLoggato={props.idUtenteLoggato}/> }
        </div>

    )
    
}