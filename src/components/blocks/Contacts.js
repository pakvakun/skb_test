//main
import React from 'react';

//styles
import '../../styles/contacts.css';

function Contacts() {
    return(
        <div className='contacts'>
            <a className='contacts__text_tel' href='tel:88001000600'>8 800 1000 600</a>
            <p className='contacts__text_subtitle' >Бесплатный звонок по России</p>
        </div>
    )
}

export default Contacts;