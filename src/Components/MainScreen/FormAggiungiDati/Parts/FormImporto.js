export default function FormImporto(props) {

    return (
        <div className="containerFormImporto">
            <label htmlFor="formImporto">
                Importo
            </label>
            <input type="text" onChange={ props.handler } className="formText" id="formImporto" />
        </div>
    )

}