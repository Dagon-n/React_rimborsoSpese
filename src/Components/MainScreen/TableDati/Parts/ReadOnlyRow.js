export default function ReadOnlyRow({obj, index, setEditRow}) {

    const eliminaRiga = (index) => {

        let indexDaUsare = parseInt(index) + 1;
        let url = 'https://63480ebc0484786c6e90a61b.mockapi.io/Utenti/1/spese/' + indexDaUsare;

        fetch(url, { method: 'DELETE' })
        // .then(console.log(this))

    }

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
                    onClick={ ()=>{eliminaRiga(index)} }
                    >
                    elimina
                </button>
            </td>
        </tr>
    )

}