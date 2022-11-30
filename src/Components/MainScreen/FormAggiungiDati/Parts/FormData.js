export default function FormData(props) {

    return (
        <div className="containerFormData">
            <label htmlFor="formData">
                Data
            </label>
            <input id="formData" type="date" onChange={ props.handler } className="formData" />
        </div>
    )

}