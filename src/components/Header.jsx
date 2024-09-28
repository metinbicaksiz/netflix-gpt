import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10">
            <img src={logo} className="w-44" alt="logo"/>
        </div>
    );
};

export default Header;