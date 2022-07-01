import React from 'react';
import logo from '../asset/youtube-logo.jpg';
export default function Header() {
    return (
        <div className='header-container'>
            <p className='commments-header'>☰</p>
            <img height="60" width="150" src={logo} alt="logo" />
            <input type="text" placeholder="Search.." name="search" />
            <button type="submit"><i className="fa fa-search"></i></button>
        </div>
    )
}