export default function ReadOnlyRow({obj, index, setEditRow}) {

    return (
        <tr className={index}>
            <td>{obj.data}</td>
            <td>{obj.importo} €</td>
            <td>{obj.ricevuta}</td>
            <td>{obj.tipoSpesa}</td>
            <td className="cellaPrimoBottone">
                <button 
                    type="button"
                    className="btnEditaRigaTable"
                    onClick={() => setEditRow(index)}
                    >
                    edita
                </button>
            </td>
            <td className="cellaSecondoBottone">
                <button 
                    type="button"
                    className="btnEliminaRiga"
                    onClick={ ()=>{alert('riga eliminata!')} }
                    >
                    elimina
                </button>
            </td>
        </tr>
    )

}