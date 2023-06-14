import React from 'react';

const Header: React.FC = () => {
  return (
    <div className='header'>
        <div className="container">
            <div className="header__logo">IT-service</div>
            <div className="header__home">Главная</div>
            <div className="header__news">Новости</div>
            <div className="header__account">Войти</div>
        </div>
    </div>
  )
}


export default  Header;