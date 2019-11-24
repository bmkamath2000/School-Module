import React from 'react';
import logo from '../img/logo.png';
class Header extends React.Component
{
render()
{
    return (
        <div className="header">
            <img src={logo} className="medium-logo" alt="Logo"/>
            <h1 className="centered-text">XYZ School</h1>
        </div>
    );
}
}
export default Header;