export default function ReadOnlyRow({obj, index, handleEditClick}) {

    return (
        <tr>
            <td>{obj.data}</td>
            <td>{obj.importo} €</td>
            <td>{obj.ricevuta}</td>
            <td>{obj.tipoSpesa}</td>
            <td>
                <button 
                    type="button"
                    className="btnEditaRigaTable"
                    onClick={(event) => handleEditClick(event, index)}
                    >
                    edita
                </button>
            </td>
            <td>/</td>
        </tr>
    )

}