import { useState, useEffect } from "react"

export default function EditableRow({index, setEditRow}) {

    const [ data, setData ] = useState('')
    const [ tipoSpesa, setTipoSpesa ] = useState('')
    const [ ricevuta, setRicevuta ] = useState('')
    const [ importo, setImporto ] = useState('')

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

    const handlerDatiNuovi = (index, setEditRow) => {

        let nuovoDato = { '0': {data, tipoSpesa, ricevuta, importo} }
        let indexDaUsare = parseInt(index) + 1;
        let URL = 'https://63480ebc0484786c6e90a61b.mockapi.io/Utenti/1/spese/' + indexDaUsare;
        console.log(nuovoDato, '\n index: ', indexDaUsare )

        fetch(URL, {
            method: 'PUT',
            headers: {
                'Accept': 'Application/json',
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(nuovoDato)
        }).then((result) => {
            result.json().then((resp) => {
                console.log(resp)
            })
        })

        setEditRow(null)
    
    }

    const annullaEdit = (event, setEditRow) => {

        event.preventDefault()
        console.log(
            'data:', data,'\n',
            'tipoSpesa', tipoSpesa,'\n', 
            'ricevuta', ricevuta,'\n', 
            'importo', importo, '\n'
            )
        setEditRow(null);

    }

    return (
        <tr>
            <td>
                <input 
                    type='date' 
                    required='required' 
                    name='data'
                    className='dataEditTable'
                    onChange={ handleDataChange }
                />
            </td>
            <td>
                <input 
                    type='text' 
                    required='required' 
                    placeholder='inserisci un importo...'
                    name='importo'
                    className="importoEditTable"
                    onChange={ handleImportoChange }
                />
            </td>
            <td>
                <select 
                    onChange={ handleRicevutaChange } 
                    defaultValue='scegli'
                    className="selectEditTable"
                    >
                <option disabled value="scegli">Scegli</option>
                    <option value='si'>si</option>
                    <option value='no'>no</option>
                </select>
            </td>
            <td>
                <input 
                    type='text' 
                    required='required' 
                    placeholder='inserisci un tipo di spesa...'
                    name='tipoSpesa'
                    className="tipoSpesaEditTable"
                    onChange={ handleTipoSpesaChange }>
                </input>
            </td>
            <td className="cellaPrimoBottone">
                <button 
                    type="button"
                    className="btnSalvaRigaTable"
                    onClick={() => handlerDatiNuovi(index, setEditRow)}
                    >
                    salva
                </button>
            </td>
            <td className="cellaSecondoBottone">
                <button 
                    type="button"
                    className="btnAnnullaRigaTable"
                    onClick={(event) => annullaEdit(event, setEditRow)}
                    >
                    annulla
                </button>
            </td>
        </tr>
    )

}