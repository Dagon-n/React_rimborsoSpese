export default function FormTipoSpesa(props) {

    return (
        <div className="containerFormTipoSpesa">
            <label htmlFor="formTipoSpesa">
                Tipo di spesa
            </label>
            <select onChange={ props.handler } defaultValue="scegli" className='formSelect' id="formTipoSpesa">
                <option disabled value="scegli">Scegli</option>
                <option value='taxi'>Taxi</option>
                <option value='treno'>Treno</option>
                <option value='autostrada'>Autostrada</option>
                <option value='benzina'>Benzina</option>
                <option value='pranzo'>Pranzo</option>
                <option value='cena'>Cena</option>
                <option value='hotel'>Hotel</option>
            </select>
        </div>
    )

}