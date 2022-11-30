export default function FormTipoSpesa(props) {

    return (
        <div className="containerFormTipoSpesa">
            <label htmlFor="formTipoSpesa">
                Tipo di spesa
            </label>
            <select onChange={ props.handler } defaultValue="scegli" className='formSelect' id="formTipoSpesa">
                <option disabled value="scegli">Scegli</option>
                <option value="taxi">taxi</option>
                <option value="treno">treno</option>
                <option value="autobus">autobus</option>
            </select>
        </div>
    )

}