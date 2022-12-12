import './Utente.css'

export default function Utente(props) {

    return(
        <div className='containerNomeUtente'> Benvenuto/a, <span className='nomeUtenteLoggato'>{props.nomeUtenteLoggato}!</span> </div>
    );

}