import PaginaVuota from './PaginaVuota/PaginaVuota';
import TableDati from './TableDati/TableDati';
import FormAggiungiDati from './FormAggiungiDati/FormAggiungiDati';
import FormEditaDati from './FormEditaDati/FormEditaDati';
import './mainScreen.css'

import { useState } from 'react';

export default function MainScreen() {

    const [screen, setScreen] = useState('paginaVuota')
    /*  
        Ora il default è tableVuota perchè non ci sono dati da mostrare
        su una tabella, nel caso invece ci fossero bisognerebbe mettere
        già un controllo qui e nel caso mandare nel main screen
        subito la tabella con tutti i dati
    */

    return (
        <div className='mainScreen'>
            { screen == 'paginaVuota' && <PaginaVuota /> }
            { screen == 'tableDati' && <TableDati /> }
            { screen == 'formAggiungiDati' && <FormAggiungiDati /> }
            { screen == 'formEditaDati' && <FormEditaDati /> }
        </div>
    );

}