import PaginaVuota from './PaginaVuota/PaginaVuota';
import TableDati from './TableDati/TableDati';
import FormAggiungiDati from './FormAggiungiDati/FormAggiungiDati';
import FormEditaDati from './FormEditaDati/FormEditaDati';
import './mainScreen.css'

import { useContext } from 'react';
import { ScreenStatusContext } from '../../Context/ScreenStatusContext';

export default function MainScreen() {

    const { screenState, setScreenState } = useContext(ScreenStatusContext)
    /*  
        Ora il default è tableVuota perchè non ci sono dati da mostrare
        su una tabella, nel caso invece ci fossero bisognerebbe mettere
        già un controllo qui e nel caso mandare nel main screen
        subito la tabella con tutti i dati
    */

    return (
        <div className='mainScreen'>
            { screenState === 'paginaVuota' && <PaginaVuota /> }
            { screenState === 'tableDati' && <TableDati /> }
            { screenState === 'formAggiungiDati' && <FormAggiungiDati /> }
            { screenState === 'formEditaDati' && <FormEditaDati /> }
        </div>
    );

}