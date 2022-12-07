import NavMenu from './Components/NavMenu/NavMenu';
import Header from './Components/Header/Header';
import MainScreen from './Components/MainScreen/MainScreen'
import { ScreenStatusContext } from './Context/ScreenStatusContext';

import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Login() {

    const [ users, setUsers ] = useState([])
    useEffect(() => {
        const fetchData = async () => {
        const result = await axios(
          url
        );
          setUsers(result.data)
        };
          fetchData()
    }, [])

    const [ screenState, setScreenState ] = useState('formAggiungiDati')

    let url = 'https://63480ebc0484786c6e90a61b.mockapi.io/Utenti';

    return (
        <div className='containerFormLogin'>
            <form className='formLogin'>        
                { users ?
                    <select>
                        <option defaultValue='scegli..' disabled>Scegli..</option>
                        {users.map( x => <option key={x.id}>{x.nome}</option>)}
                    </select>
                :
                    'Loading...'
                }
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