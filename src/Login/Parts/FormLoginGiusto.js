export default function FormLoginGiusto(props) {

    return (
        <>
        <select className='selectLogin' defaultValue='scegli' onChange={ props.handlerNomeLogin }>
            <option disabled value='scegli'>Scegli..</option>
            {props.usersDB.map( x => <option key={x.id}>{x.nome}</option>)}
        </select>
        <input type='text' className='passwordLogin' placeholder='password...' onChange={ props.handlerPasswordLogin } />
        </>
    )

}