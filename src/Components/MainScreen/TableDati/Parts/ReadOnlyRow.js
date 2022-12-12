import { useState, useEffect } from "react"

export default function ReadOnlyRow({obj, datiRaw, setEditRow}) {

    const [ refresh, doRefresh ] = useState(obj.id)
    useEffect( ()=>{
        console.log('refresh!')
    }, [refresh] )
    console.log(refresh)

    const HandleEliminaRiga = (id) => {

        let selezionatoreOggetto = datiRaw.filter( obj => obj[0].id === id )
        let idOggettoDaEliminare = selezionatoreOggetto[0].id
        let url = 'https://63480ebc0484786c6e90a61b.mockapi.io/Utenti/1/spese/' + idOggettoDaEliminare;

        fetch(url, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then((json) => {
            console.log('DELETE fetch done!!\n', json)
        })
        .catch(error => error);

    }

    return (
        <tr className={obj.id}>
            <td>{obj.data}</td>
            <td>{obj.importo} €</td>
            <td>{obj.ricevuta}</td>
            <td>{obj.tipoSpesa}</td>
            <td className="cellaPrimoBottone">
                <button 
                    type="button"
                    className="btnEditaRigaTable"
                    onClick={() => setEditRow(obj.id)}
                    >
                    edita
                </button>
            </td>
            <td className="cellaSecondoBottone">
                <button 
                    type="button"
                    className="btnEliminaRiga"
                    onClick={ ()=>{HandleEliminaRiga(obj.id)} }
                    >
                    elimina
                </button>
            </td>
        </tr>
    )

}