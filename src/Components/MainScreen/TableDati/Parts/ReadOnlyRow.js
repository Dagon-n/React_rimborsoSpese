export default function ReadOnlyRow({obj, index, setEditRow}) {

    const funzioncina = (index) => {

        setEditRow(index)
        console.log(index)

    }

    return (
        <tr className={index}>
            <td>{obj.data}</td>
            <td>{obj.importo} €</td>
            <td>{obj.ricevuta}</td>
            <td>{obj.tipoSpesa}</td>
            <td>
                <button 
                    type="button"
                    className="btnEditaRigaTable"
                    onClick={() => funzioncina(index)}
                    >
                    edita
                </button>
            </td>
            <td>/</td>
        </tr>
    )

}