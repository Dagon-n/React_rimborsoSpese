export default function ReadOnlyRow({obj, handleEditClick}) {

    return (
        <tr>
            <td>{obj[0].data}</td>
            <td>{obj[0].importo} €</td>
            <td>{obj[0].ricevuta}</td>
            <td>{obj[0].tipoSpesa}</td>
            <td>
                <button 
                    type="button"
                    className="btnEditaRiga"
                    onClick={(event) => handleEditClick(event, obj)}
                    >
                    edita
                </button>
            </td>
            <td>/</td>
        </tr>
    )

}