import React from 'react';
import logo from '../asset/youtube-logo.jpg';
export default function Header() {
    return (
        <div className='header-container'>
            <p className='commments-header'>☰</p>
            <img height="60" width="150" src={logo} />
            {/* <input type='text' style={{padding: "5px", margin: "20px",height:"60px",width:"511px",}} placeholder= "search" /> */}
            <input type="text" placeholder="Search.." name="search" />
            <button type="submit"><i class="fa fa-search"></i></button>
        </div>
    )
}

// export default Header;