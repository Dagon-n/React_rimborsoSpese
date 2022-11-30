import { useState, useContext } from 'react'
import { ScreenStatusContext } from '../../../Context/ScreenStatusContext'

import FormTitle from './Parts/FormTitle'
import FormData from './Parts/FormData'
import FormTipoSpesa from './Parts/FormTipoSpesa'
import FormImporto from './Parts/FormImporto'
import FormButtonSubmit from './Parts/FormButtonSubmit'
import FormRadioRicevuta from './Parts/FormRadioRicevuta'

import './formAggiungiDati2.css'

export default function FormAggiungiDati(props) {

    const [ data, setData ] = useState('')
    const [ tipoSpesa, setTipoSpesa ] = useState('')
    const [ ricevuta, setRicevuta ] = useState('')
    const [ importo, setImporto ] = useState('')
    const { screenState, setScreenState } = useContext(ScreenStatusContext)

    const handleDataChange = (e) => {
        setData(e.target.value)
    }
    const handleTipoSpesaChange = (e) => {
        setTipoSpesa(e.target.value)
    }
    const handleRicevutaChange = (e) =>{
        setRicevuta(e.target.value)
    }
    const handleImportoChange = (e) => {
        setImporto(e.target.value)
    }

    async function handleSubmit (e) {
        e.preventDefault()
        console.log('data: ' + data, '\ntipoSpesa: ' + tipoSpesa, '\nricevuta: ' + ricevuta, '\nimporto: ' + importo)
        let spesa = [{'data':data, 'tipoSpesa':tipoSpesa, 'ricevuta':ricevuta, 'importo':importo}];

        let response = await fetch('https://63480ebc0484786c6e90a61b.mockapi.io/Utenti/1/Spese', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(spesa)
        });

        let result = await response.json()
        console.log(result)

        setScreenState('tableDati')
    }


    return (
        <div className='containerForm'>
            <form className="formAggiungiDati" onSubmit={handleSubmit} required>

                <FormTitle />
                <FormData handler={ handleDataChange }/>
                <FormTipoSpesa handler={ handleTipoSpesaChange } />
                <FormImporto handler={ handleImportoChange } />
                <FormRadioRicevuta handler={ handleRicevutaChange } />
                <FormButtonSubmit />
    
            </form>
        </div> 
    );

}