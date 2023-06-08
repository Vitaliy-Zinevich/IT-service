import React from 'react';

function Header() {
  return (
    <div className='header'>
        <div className="container">
            <div className="header__logo">
                 <img  src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="It-service logo" />
            <div>
            </div>
            </div>
            <div className="header__home">Home</div>
            <div className="header__news">News</div>
            <div className="header__source">Source</div>
            <div className="header__login">Login</div>
            <div className="header__account">Account</div>
        </div>
    </div>
  )
}


export default  Header;