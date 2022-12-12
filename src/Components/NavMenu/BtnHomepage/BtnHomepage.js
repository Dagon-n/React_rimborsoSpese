import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './btnHomepage.css';

export default function BtnHomepage() {

    const navigate = useNavigate()

    return(
        <li className='btnHomepage' onClick={() => {navigate('/')}}>
            <FontAwesomeIcon icon='fa-solid fa-right-to-bracket' />
        </li>
    );

}