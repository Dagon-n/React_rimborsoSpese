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
        console.log('data: ' + data, 'tipoSpesa: ' + tipoSpesa, 'importo: ' + importo)
        array.push({'data':data, 'tipoSpesa':tipoSpesa, 'importo':importo})
        console.log(array)
    }


    return (
        <div className='containerForm'>
            <form className="formAggiungiDati" onSubmit={handleSubmit}>

                <input type="date" onChange={handleDataChange}></input><br></br>
                
                <select onChange={handleTipoSpesaChange}>
                    <option value="taxi">taxi</option>
                    <option value="treno">treno</option>
                    <option value="autobus">autobus</option>
                </select><br></br>

                <input type="text" onChange={handleImportoChange}></input><br></br>

                <label htmlFor='ricevuta'>Si ha la ricevuta?</label>
                    <input type="radio" name='ricevuta' id="ricevuta"></input>
                    <input type="radio" name='ricevuta' id="ricevuta"></input><br></br>

                <input type='submit' value='submit' />
    
            </form>
        </div> 
    );

}