import { useEffect, useState } from "react"

export default function TableDati() {

    const [ dati, setDati ] = useState([])

    useEffect( () => {
        fetch('https://63480ebc0484786c6e90a61b.mockapi.io/Utenti/1/Spese')
        .then((response) => response.json())
        .then((json) => setDati(json));
    }, [] )

    return (
        <div>
            { dati.map( (x) =>
                <ul key={x.id}>
                    <li> numero {x.id} </li>
                    <li> {x[0].data} </li>
                    <li> {x[0].importo} </li>
                    <li> {x[0].ricevuta} </li>
                    <li> {x[0].tipoSpesa} </li>
                </ul>
            )}
        </div>
    )

}