import { useState, useEffect } from "react"

export default function EditableRow({obj, index, setEditRow}) {

    const [ data, setData ] = useState(obj.data)
    const [ tipoSpesa, setTipoSpesa ] = useState(obj.tipoSpesa)
    const [ ricevuta, setRicevuta ] = useState(obj.ricevuta)
    const [ importo, setImporto ] = useState(obj.importo)

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
        let url = 'https://63480ebc0484786c6e90a61b.mockapi.io/Utenti/1/spese/' + indexDaUsare;
        console.log(nuovoDato, '\n index: ', indexDaUsare )

        fetch(url, {
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
                    defaultValue={obj.data}
                    onChange={ handleDataChange }
                />
            </td>
            <td>
                <input 
                    type='text' 
                    required='required' 
                    name='importo'
                    className="importoEditTable"
                    defaultValue={obj.importo}
                    onChange={ handleImportoChange }
                />
            </td>
            <td>
                <select 
                    onChange={ handleRicevutaChange } 
                    defaultValue={obj.ricevuta}
                    className="selectEditTable"
                >
                    <option disabled value="scegli">Scegli</option>
                    <option value='si'>si</option>
                    <option value='no'>no</option>
                </select>
            </td>
            <td>
                <select
                    onChange={ handleTipoSpesaChange }
                    className="tipoSpesaEditTable"
                    name="tipoSpesa"
                    required='required'
                    defaultValue={obj.tipoSpesa}
                >
                    <option disabled value='Scegli'>Scegli</option>
                    <option value='taxi'>Taxi</option>
                    <option value='treno'>Treno</option>
                    <option value='autostrada'>Autostrada</option>
                    <option value='benzina'>Benzina</option>
                    <option value='pranzo'>Pranzo</option>
                    <option value='cena'>Cena</option>
                    <option value='hotel'>Hotel</option>
                </select>
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