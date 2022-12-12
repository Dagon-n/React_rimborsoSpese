import InputPasswordHandler from './Parts/InputPasswordHandler';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import './login.css'
import { useNavigate, useLocation } from 'react-router-dom';

export default function Login() {

    const [ usersDB, setUsersDB ] = useState([])
    const [ nome, setNome ] = useState('')
    const [ password, setPassword ] = useState('')

    const [ classeSelect, setClasseSelect ] = useState('selectLogin')
    const [ classePassword, setClassePassword ] = useState('passwordLogin')
    const [ classeAlert, setClasseAlert ] = useState('messaggioErroreNo')

    const [ passwordInputType, toggleIcon ] = InputPasswordHandler()

    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
        const result = await axios(
          url
        );
          setUsersDB(result.data)
        };
          fetchData()
    }, [])

    const handlerNomeLogin = (e) => {
        setNome(e.target.value)
    }

    const handlerPasswordLogin = (e) => {
        setPassword(e.target.value)
    }

    const handlerSubmitLogin = (e) => {
        e.preventDefault()
        const daControllare = usersDB.filter( obj => obj.nome === nome )[0]
        const idUtente = daControllare.id;
        const passwordOriginale = daControllare.password
        console.warn('Inserita: ', password, '\nGiusta: ',passwordOriginale)
        if(password === passwordOriginale){
            setClasseSelect('selectLogin')
            setClassePassword('passwordLogin')
            setClasseAlert('messaggioErroreNo')
            /* cambia pagina */
            navigate('/spese', { state: { nome, idUtente } })
        }else{
            setClasseSelect('selectLoginErrato')
            setClassePassword('passwordLoginErrato')
            setClasseAlert('messaggioErroreSi')
        }

    }

    let url = 'https://63480ebc0484786c6e90a61b.mockapi.io/Utenti';

    return (
        <div className='containerFormLogin'>
            <form className='formLogin'> 
                <div className='titoloLogin'>Accedi</div>
                <div className={classeAlert}>Nome e/o Password errati!</div>
                <div className='nomeSection'>
                    <FontAwesomeIcon icon="user" className='userIcon'/>
                    <select className={classeSelect} defaultValue='scegli' onChange={ handlerNomeLogin }>
                        <option disabled value='scegli'>Scegli..</option>
                        {usersDB.map( x => <option key={x.id}>{x.nome}</option>)}
                    </select>
                </div>
                <div className='passwordSection'>
                    <FontAwesomeIcon icon="key" className='keyIcon'/>
                    <input type={passwordInputType} className={classePassword} placeholder='password...' onChange={ handlerPasswordLogin } />
                    <span>{toggleIcon}</span>
                </div>
                <input type='submit' className='btnSubmitLogin' onClick={ handlerSubmitLogin } />
            </form>
        </div>
        
    )

}