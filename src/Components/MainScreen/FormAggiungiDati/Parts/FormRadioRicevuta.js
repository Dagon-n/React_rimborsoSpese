export default function FormRadioRicevuta(props) {

    return (
        <div className="containerFormRadioRicevuta">
            <label htmlFor="formRadioRicevuta">Hai ancora la ricevuta?</label>
            <div className='containerRadioButtons' id="formRadioRicevuta">
                <input type="radio" name='ricevuta' value='si' onChange={ props.handler } />
                <label htmlFor='si'>SI</label>
                <input type="radio" name='ricevuta' value='no' onChange={ props.handler } />
                <label htmlFor='no'>NO</label><br></br>
            </div>
        </div>
    )

}