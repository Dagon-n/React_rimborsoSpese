import NavMenu from './Components/NavMenu/NavMenu';
import Header from './Components/Header/Header';
import MainScreen from './Components/MainScreen/MainScreen';

export default function App() {

  return (
    <div className='page'>
      <Header />
      <NavMenu />
      <MainScreen />
    </div>
  );

}