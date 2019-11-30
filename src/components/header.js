//main
import React from 'react';

//styles
import '../styles/header.css';

//img
import Logo from '../img/logo'

//components
import Contacts from './blocks/Contacts'

function Header() {
  return (
      <header className="header">
        <Logo />
        <div className='header__content'>
            <Contacts />
        </div>
      </header>
  );
}

export default Header;
