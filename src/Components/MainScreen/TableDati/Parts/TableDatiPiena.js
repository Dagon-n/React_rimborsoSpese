import React, { Fragment, useState, useEffect } from 'react'
import ReadOnlyRow from './ReadOnlyRow'
import EditableRow from './EditableRow'
import './tableDatiPiena.css'
import './editTableRow.css'

export default function TableDatiPiena(props) {

    const [ editRow, setEditRow ] = useState(null)
    const [ dati, setDati ] = useState([])

    useEffect( ()=>{
        const spese = []
        props.spese.map((x) => spese.push(x[0]))
        setDati(spese)
    }, [] )

    const [order, setOrder] = useState('ASC')
    const sorting = (col) => {
        if(order === 'ASC') {
            const sorted = [...dati].sort((a, b) => 
            a[col] > b[col] ? 1 : -1
            )
            setDati(sorted);
            setOrder('DSC');
        }
        if(order === 'DSC') {
            const sorted = [...dati].sort((a, b) => 
            a[col] < b[col] ? 1 : -1
            )
            setDati(sorted);
            setOrder('ASC');
        }
        console.log(order)
    }

    return (
        <>
        <table className="mainTable">
            <thead>
                <tr>
                    <th onClick={()=>{sorting("data")}}>Data</th>
                    <th onClick={()=>{sorting("importo")}}>Importo</th>
                    <th onClick={()=>{sorting("ricevuta")}}>Ricevuta</th>
                    <th onClick={()=>{sorting("tipoSpesa")}}>Tipo di Spesa</th>
                    <th className='cellaPrimoBottone'></th>
                    <th className='cellaSecondoBottone'></th>
                </tr>
            </thead>
            <tbody>
                {dati.map((obj, index) => {
                    return(
                        <Fragment key={index}>
                            { editRow === index ? 
                                <EditableRow
                                    index={index}
                                    setEditRow={setEditRow}
                                />
                                :
                                <ReadOnlyRow 
                                    obj={obj} 
                                    index={index}
                                    setEditRow={setEditRow}
                                />
                            }
                        </Fragment>
                    )
                })
                }
                <tr className="rigaTotale">
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