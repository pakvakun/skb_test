//main
import React from 'react';

//styles
import '../styles/content.css';


//components


export default class Content extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return (
            <main className="content">
                <div className='content__cards'>

                </div>
                <div className='content__media'>
                    <div className='superman' />
                </div>
            </main>
        );
    }
}