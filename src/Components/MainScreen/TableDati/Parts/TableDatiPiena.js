import { useState } from 'react'
import './tableDatiPiena.css'

export default function TableDatiPiena(props) {

    const [ statoRiga, setStatoRiga ] = useState('salvata')

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
                    <th>edit</th>
                    <th>delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.spese.map((obj) => {
                    return(
                        <tr key={obj.id}>
                            <td>{obj.id}</td>
                            <td>{obj[0].data}</td>
                            <td>{obj[0].importo} €</td>
                            <td>{obj[0].ricevuta}</td>
                            <td>{obj[0].tipoSpesa}</td>
                            <td>
                                <button onClick={ () => edit(obj.id, obj[0]) }>edit</button>
                            </td>
                            <td>/</td>
                        </tr>
                    )
                    })  
                }
                <tr className="rigaTotale">
                    <td></td>
                    <td>Totale</td>
                    <td className="cellaTotale" colSpan={2}>{ somma(props.spese) } €</td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
        </>
    )

}

const somma = (array) => {
    const prendiNumeri = array.map( (obj) => obj[0].importo )
    const numeriSommati = prendiNumeri.reduce( (acc, curr) => {
        return acc + parseInt(curr);
    }, 0 )
    return numeriSommati
}

const edit = (id, dati) => {

    console.log(
        'data:', dati.data + '\n',
        'importo:', dati.importo + '\n',
        'ricevuta:', dati.ricevuta + '\n',
        'tipoSpesa:', dati.tipoSpesa + '\n',
        'ID =>', id
    )
    return(
        <p>prova</p>
    )

}