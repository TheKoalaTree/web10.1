import React from 'react';
import '../CSS/Header.css';

function Header() {
  return (
    <div className="Header">
        <div className="Button"> Home </div>
        <div className="Button"> IService </div>
        <div className="Button"> Contact </div>
        <div className="Button"> About </div>
        <div className="Button"> Sign In </div>
    </div>
  );
}

export default Header;
