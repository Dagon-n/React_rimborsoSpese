export default function FormLoginErrato(props) {

    return (
        <>
        <div className="messaggioErrore">Nome e/o Password errati!</div>
        <select className='selectLoginErrato' defaultValue='scegli' onChange={ props.handlerNomeLogin }>
            <option disabled value='scegli'>Scegli..</option>
            {props.usersDB.map( x => <option key={x.id}>{x.nome}</option>)}
        </select>
        <input type='text' className='passwordLoginErrato' placeholder='password...' onChange={ props.handlerPasswordLogin } />
        </>
    )

}