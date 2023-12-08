import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom' 
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </>
  );
}

export default App;
