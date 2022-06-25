


import React from 'react';

import logo from '../source/images/Logo.svg' ;

import './header.css';


const Header = () => {
    
    return (
        <div className='header'>          

        <img src={logo} alt=""></img>
        <nav>
        <a href="/shop">Shop</a>
        <a href="/review">Order</a>
        <a href="Managment">Manage</a>
        </nav>

        </div>
    );
};

export default Header;