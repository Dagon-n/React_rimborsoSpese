// import NavMenu from './Components/NavMenu/NavMenu';
// import Header from './Components/Header/Header';
// import MainScreen from './Components/MainScreen/MainScreen'
// import { ScreenStatusContext } from './Context/ScreenStatusContext';

import FormLoginGiusto from './Parts/FormLoginGiusto';
import FormLoginErrato from './Parts/FormLoginErrato';

import { useState, useEffect } from 'react';
import axios from 'axios';
import './login.css'

export default function Login() {

    const [ usersDB, setUsersDB ] = useState([])
    const [ nome, setNome ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ error, setError ] = useState(false)

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
        console.log('nome: ', nome, '\npassword: ', password)
        const daControllare = usersDB.filter( obj => obj.nome === nome )[0]
        const passwordOriginale = daControllare.password
        console.log('password giusta:\n', passwordOriginale)
        if(password === passwordOriginale) {
            setError(false)
            alert('dati corretti!')
        }else{
            setError(true)
        }

    }

    const [ screenState, setScreenState ] = useState('formAggiungiDati')

    let url = 'https://63480ebc0484786c6e90a61b.mockapi.io/Utenti';

    return (
        <div className='containerFormLogin'>
            <form className='formLogin'> 
                <div className='titoloLogin'>Accedi</div>
                    { error === false ? 
                        <FormLoginGiusto
                        usersDB={ usersDB } 
                        handlerNomeLogin={ handlerNomeLogin } 
                        handlerPasswordLogin={ handlerPasswordLogin } 
                    />
                :
                    <FormLoginErrato
                        usersDB={ usersDB } 
                        handlerNomeLogin={ handlerNomeLogin }
                        handlerPasswordLogin={ handlerPasswordLogin }
                    />
                }
                <input type='submit' className='btnSubmitLogin' onClick={ handlerSubmitLogin } />
            </form>
        </div>
        
    )

    // return (
    //     <div className='page'>
    //         <NavMenu />
    //         <ScreenStatusContext.Provider value={{ screenState, setScreenState }}>
    //             <Header />
    //             <MainScreen />
    //         </ScreenStatusContext.Provider>
    //     </div>
    // );

}