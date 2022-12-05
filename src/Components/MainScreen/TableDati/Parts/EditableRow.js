import { useState } from "react"

export default function EditableRow({obj, setEditRow}) {

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

    const handlerDatiNuovi = (event, setEditRow) => {

        event.preventDefault()
        console.log(
            'data:', data,'\n',
            'tipoSpesa', tipoSpesa,'\n', 
            'ricevuta', ricevuta,'\n', 
            'importo', importo, '\n'
            )
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
                    placeholder={ obj.data }
                    name='data'
                    onChange={ handleDataChange }>
                </input>
            </td>
            <td>
                <input 
                    type='text' 
                    required='required' 
                    placeholder='inserisci un importo...'
                    name='importo'
                    onChange={ handleImportoChange }>
                </input>
            </td>
            <td>
                <select onChange={ handleRicevutaChange } defaultValue='scegli'>
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
                    onChange={ handleTipoSpesaChange }>
                </input>
            </td>
            <td>
                <button 
                    type="button"
                    className="btnEditaRiga"
                    onClick={(event) => handlerDatiNuovi(event, setEditRow)}
                    >
                    salva
                </button>
            </td>
            <td>
                <button 
                    type="button"
                    className="btnEditaRiga"
                    onClick={(event) => annullaEdit(event, setEditRow)}
                    >
                    annulla
                </button>
            </td>
        </tr>
    )

}