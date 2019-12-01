//main
import React from 'react';

//styles
import '../styles/content.css';

//data
// import Offers from '../sources/offers'

//components

const handlingOptions = ['Уважаемый', 'Уважаемая'];
const Offers = require('../sources/offers.json');
export default class Content extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            people: {name: 'Иван Иванович', genderId: 0},
            offerText: 'Специально для Вас мы подготовили несколько предложений по кредитованию. Выберите интересующий Вас вариант и нажмите кнопку «Получить деньги» для его получения. Если ни один из вариантов Вам не подходит, нажмите кнопку «Показать дополнительные предложения»',
            subText: 'Обращаем Ваше внимание, что в предложениях указана максимальная сумма кредита. В отделении Банка Вы всегда сможете снизить сумму кредита до требуемого размера.'
        }
    }
    componentDidMount(){
        
        Offers.sort((a, b)=>{
            return a.priority - b.priority;
        })
        this.setState({offers: Offers})
        
        
    }
    render(){
        console.log(this.state);
        
        const { people, offerText, subText, offers } = this.state;

        return (
            <main className="content">
                <div className='content__main'>
                    <div className='content__main_handling'>
                        { `${handlingOptions[people.genderId]} ${people.name}`}
                    </div>
                    <div className='content__main_offer'>
                        { offerText}
                    </div>
                    <div className='content__main_subtext'>
                        { subText }
                    </div>
                    <div className='content__main_cards'>
                        {
                            offers &&
                            offers.map((offer, index) => (
                                //indexes not recomended for keys... but why not :)

                                <div key={ index } className={index === 0 ? 'content__card' : 'content__card_grey'}>
                                    <div className={index === 0 ? 'content__card_badge-top' : 'content__card_badge-other'} >
                                        {
                                            index === 0
                                                ?   'Лучшее предложение для Вас'
                                                :   'Возможно Вас заинтересует'
                                        }
                                    </div>
                                    <div dangerouslySetInnerHTML={{__html: offer.product_title}} />
                                    <div className='content__card_options'>
                                        <div className='content__card_options-names'>
                                            <div>Сумма</div>
                                            <div>Ежемесячный платеж</div>
                                            <div>Срок</div>
                                            <div>Ставка</div>
                                        </div>
                                        <div className='content__card_options-values'>
                                            {
                                                offer.limit &&
                                                        <div>{offer.limit} &#x20bd;</div>
                                            }
                                            {
                                                offer.payment &&
                                                        <div>{offer.payment} &#x20bd;</div>
                                            }
                                            {
                                                offer.term &&
                                                        <div>{offer.term} месяцев</div>
                                            }
                                            {
                                                offer.rate &&
                                                        <div>{offer.rate}%</div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='content__media'>
                    <div className='superman' />
                </div>
            </main>
        );
    }
}