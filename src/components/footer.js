//main
import React from 'react';

//styles
import '../styles/footer.css';


//components
import Contacts from './blocks/Contacts'

function Footer() {
  return (
      <footer className="footer">
        <div className='footer__content_item'>
                <p>© СКБ-банк, 2019 Генеральная лицензия № 705 Центрального банка Российской Федерации Адрес банка: г. Екатеринбург, ул. Куйбышева, 75</p>
            </div>
            <div className='footer__content_item'>
                <a href='https://'>Подробнее об условиях и видах кредитов</a>
            </div>
            <div className='footer__content_item'>
                <Contacts />
            </div>
      </footer>
  );
}

export default Footer;
