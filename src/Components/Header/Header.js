import Utente from './Utente/Utente';
import Bottoni from './Bottoni/Bottoni'
import './header.css'
import './Bottoni/bottoni.css'

export default function Headers() {

    return(
        <div className='header'>
            <Utente />
            <Bottoni />
        </div>
    );

}