import './formAggiungiDati.css'
import { useState, useContext } from 'react'
import { ScreenStatusContext } from '../../../Context/ScreenStatusContext'

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

        // alert('Spesa aggiunta!')
        setScreenState('tableDati')
    }


    return (
        <div className='containerForm'>
            <form className="formAggiungiDati" onSubmit={handleSubmit} required>

                <h3 className='formTitolo'>Aggiungi nuova spesa</h3>

                <label>Data</label><br></br>
                <input type="date" onChange={handleDataChange} className="formDate"></input><br></br>
                
                <label>Tipo di spesa</label><br></br>
                <select onChange={handleTipoSpesaChange} defaultValue="scegli" className='formSelect'>
                    <option disabled value="scegli">Scegli</option>
                    <option value="taxi">taxi</option>
                    <option value="treno">treno</option>
                    <option value="autobus">autobus</option>
                </select><br></br>

                <label>Importo</label><br></br>
                <input type="text" onChange={handleImportoChange} className="formText"></input><br></br>

                <label>Hai ancora la ricevuta?</label><br></br>
                <div className='containerRadioButtons'>
                    <input type="radio" name='ricevuta' id='si' onChange={()=>setRicevuta('si')} />
                    <label htmlFor='si'>SI</label>
                    <input type="radio" name='ricevuta' id='no' onChange={()=>setRicevuta('no')} />
                    <label htmlFor='no'>NO</label><br></br>
                </div>

                <button type='submit' className='submitForm'>Invia</button>
    
            </form>
        </div> 
    );

}