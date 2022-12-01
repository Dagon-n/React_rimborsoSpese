import { useState, useEffect } from "react"
import './tableDati.css'

export default function TableDati() {

    const [ dati, setDati ] = useState([])

    // async function handleSubmit(e) {
    // e.preventDefault()
    // await fetch('https://63480ebc0484786c6e90a61b.mockapi.io/Utenti/1/Spese')
    //         .then((response) => response.json())
    //         .then((json) => setDati(json));
    // };

    useEffect( () => {
        fetch('https://63480ebc0484786c6e90a61b.mockapi.io/Utenti/1/Spese')
            .then((response) => response.json())
            .then((json) => setDati(json));
    }, [] )


    
    console.log(dati)
    return (
        <>
        <table className="mainTable">
            <thead>
                <tr>
                    <th>N.</th>
                    <th>Data</th>
                    <th>Importo</th>
                    <th>Ricevuta</th>
                    <th>Tipo di Spesa</th>
                </tr>
            </thead>
            <tbody>
                {dati.map((obj) => {
                    return(
                        <tr key={obj.id}>
                            <td>{obj.id}</td>
                            <td>{obj[0].data}</td>
                            <td>{obj[0].importo} €</td>
                            <td>{obj[0].ricevuta}</td>
                            <td>{obj[0].tipoSpesa}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </>
    )

}