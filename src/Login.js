// import NavMenu from './Components/NavMenu/NavMenu';
// import Header from './Components/Header/Header';
// import MainScreen from './Components/MainScreen/MainScreen'
// import { ScreenStatusContext } from './Context/ScreenStatusContext';

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

    const handleNomeLogin = (e) => {
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
        console.log(passwordOriginale)
        if(password === passwordOriginale) {
            alert('my man!')
            setError(false)
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
                { error && <div className='divErrore'>Nome o Password errati!</div> }       
                { usersDB ?
                    <select className='selectLogin' defaultValue='scegli' onChange={ handleNomeLogin }>
                        <option disabled value='scegli'>Scegli..</option>
                        {usersDB.map( x => <option key={x.id}>{x.nome}</option>)}
                    </select>
                :
                    'Loading...'
                }
                <input type='text' className='passwordLogin' placeholder='password...' onChange={ handlerPasswordLogin } />
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