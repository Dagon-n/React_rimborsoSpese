import React, { Fragment, useState } from 'react'
import ReadOnlyRow from './ReadOnlyRow'
import EditableRow from './EditableRow'
import './tableDatiPiena.css'

export default function TableDatiPiena(props) {

    const [ editFormData, setEditFormData ] = useState({
        data: '',
        importo: '',
        ricevuta: '',
        tipoSpesa: ''
    })
    const handleEditFormChange = (event) => {

    }

    const [ editRow, setEditRow ] = useState(null)
    const handleEditClick = (event, obj) => {
        event.preventDefault()
        setEditRow(obj.id)
    }

    return (
        <>
        <table className="mainTable">
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Importo</th>
                    <th>Ricevuta</th>
                    <th>Tipo di Spesa</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {props.spese.map((obj) => {
                    return(
                        <Fragment>
                            { editRow === obj.id ? 
                                <EditableRow 
                                    key={obj.id} 
                                    obj={obj}
                                    setEditRow={setEditRow}
                                />
                                :
                                <ReadOnlyRow 
                                    key={obj.id} 
                                    obj={obj} 
                                    handleEditClick={handleEditClick}
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