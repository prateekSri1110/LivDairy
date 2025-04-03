import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './component/login';
import Signup from './component/signup';
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/navbar';
import Menu from './component/home';
import Cart from './component/cart';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  )
}

export default App;
