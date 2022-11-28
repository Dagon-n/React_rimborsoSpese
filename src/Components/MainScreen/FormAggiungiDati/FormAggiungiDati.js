import './formAggiungiDati.css'
import { useState } from 'react'

export default function FormAggiungiDati(props) {

    const array = [];

    const [data, setData] = useState('')
    const [tipoSpesa, setTipoSpesa] = useState('')
    const [ricevuta, setRicevuta] = useState('')
    const [importo, setImporto] = useState('')

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

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('data: ' + data, 'tipoSpesa: ' + tipoSpesa, 'ricevuta: ' + ricevuta,'importo: ' + importo)
        array.push({'data':data, 'tipoSpesa':tipoSpesa, 'importo':importo})
        console.log(array)
    }


    return (
        <div className='containerForm'>
            <form className="formAggiungiDati" onSubmit={handleSubmit} required>

                <h3 className='formTitolo'>Aggiungi nuovi dati</h3>

                <label>Data</label><br></br>
                <input type="date" onChange={handleDataChange}></input><br></br>
                
                <label>Tipo di spesa</label><br></br>
                <select onChange={handleTipoSpesaChange}>
                    <option value="taxi">taxi</option>
                    <option value="treno">treno</option>
                    <option value="autobus">autobus</option>
                </select><br></br>

                <label>Importo</label><br></br>
                <input type="text" onChange={handleImportoChange}></input><br></br>

                <label>Hai ancora la ricevuta?</label><br></br>
                    <input type="radio" name='ricevuta' id='si' onChange={()=>setRicevuta('si')} defaultChecked />
                    <label htmlFor='si'>SI</label>
                    <input type="radio" name='ricevuta' id='no' onChange={()=>setRicevuta('no')} />
                    <label htmlFor='no'>NO</label><br></br>

                <input type='submit' value='invia' className='submitForm'/>
    
            </form>
        </div> 
    );

}