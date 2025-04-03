import React from 'react';
import logo from '../assets/liv.png';
import cart from '../assets/cart.png'
import { useNavigate } from 'react-router-dom';

function Navbar() {

    const navigate = useNavigate();

    return (
        <div className="container-fluid bg-dark-subtle p-0 sticky-top" id="home">
            <nav className="navbar navbar-expand-lg nave p-2">
                <div className="container-fluid">

                    <div className="d-flex align-items-center">
                        <img src={logo} alt="Liv Dairy" />
                    </div>


                    <div className="align-items-center justify-content-end">
                        <a href="#" onClick={(e) => {
                            e.preventDefault();
                            navigate('/cart');
                        }}>
                            <img src={cart} width="80px" alt="cart" /></a>
                    </div>
                </div>
            </nav >
        </div >
    );
}

export default Navbar;