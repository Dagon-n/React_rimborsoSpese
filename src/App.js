import {Link, Routes, Route, useNavigate} from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core';
import Homepage from './HomePage';
import Login from './Login/Login';
import { faKey, faEye, faEyeSlash, faUser } from '@fortawesome/free-solid-svg-icons'
library.add(faKey, faEye, faEyeSlash, faUser)

export default function App() {

  return (
    
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/spese" element={<Homepage />} />
    </Routes>

  );

}

