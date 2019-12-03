//main
import React from 'react';

//styles
import '../styles/content.css';
import Check from '../img/check';
import Location from '../img/location';
import Passport from '../img/passport';
import BankForm from '../img/bankForm';

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
            subText: 'Обращаем Ваше внимание, что в предложениях указана максимальная сумма кредита. В отделении Банка Вы всегда сможете снизить сумму кредита до требуемого размера.',
            page: 0
        }
    }
    renderMainContent = () => {
        const { people, offerText, subText, Offers, offersSorted, hideBtns, page } = this.state;

        return (
            <>
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
                    offersSorted &&
                    offersSorted.map((offer, index) => (
                        //indexes not recomended for keys... but why not :)
                        <>
                        {
                            offer &&
                                <div key={ index } className={`content__card ${offer.first ? ' content__card_white' : ' content__card_grey'}`}>
                                    <div className={`content__card_badge ${offer.first ? 'content__card_badge-top text-white' : 'content__card_badge-other text-grey'}`} >
                                        {
                                            offer.first
                                                ?   'Лучшее предложение для Вас'
                                                :   'Возможно Вас заинтересует'
                                        }
                                    </div>
                                    <div dangerouslySetInnerHTML={{__html: offer.product_title}} className='content__card_header' />
                                    <div className='content__card_subheader'>(со справкой о доходах)</div>
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
                                    <button className='content__card_btn' onClick={()=>this.handleClickMoney(offer)}>
                                        Получить деньги
                                    </button>
                                </div>
                        }
                        </>
                    ))
                }
            </div>
            {
                !hideBtns &&
                    <div className='content__main_btnBlock'>
                        {
                            !(page <= 0) &&
                                <button className='content__main_btnBlock-btn' onClick={()=>this.handleClickPage(-2)}>
                                    Назад
                                </button>
                        }
                        {
                            Offers &&
                            !(page+2 >= Offers.length) &&
                                <button className='content__main_btnBlock-btn' onClick={()=>this.handleClickPage(2)}>
                                    Показать дополнительные предложения 
                                </button>
                        }
                    </div>
            }
            </>
        )
    }
    renderSparta = () => {
        return(
            <>
                <div className='sparta'>
                    <div className='icon-check'>
                        <Check />
                    </div>
                    <div className='sparta__congretulations'>Поздравляем!</div>
                    <div className='sparta__willWorkInSKB--'>{this.state.people.name}! Ваша заявка на кредит наличными одобрена</div>
                    <div className={`content__card  content__card_white`}>
                        <div dangerouslySetInnerHTML={{__html: this.state.clickedOffer.product_title}} className='content__card_header' style={{fontSize: '24px', lineHeight: '40px'}}/>
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <div className='content__card_options-values' style={{flexShrink: 1, flexBasis: '30%', flexWrap: 'nowrap'}}>
                                <div style={{fontSize: '36px', lineHeight: '59px', whiteSpace: 'nowrap'}}>{this.state.clickedOffer.limit}  &#x20bd;</div>
                            </div>
                            <div style={{marginLeft: '5%'}}>
                                <div className='content__card_options-values' style={{lineHeight: '30px'}}>
                                    <div>{this.state.clickedOffer.term} месяцев</div>
                                </div>
                                <div className='content__card_options-names'>
                                    <div>Срок</div>
                                </div>
                            </div>
                            <div style={{marginLeft: '5%'}}>
                                <div className='content__card_options-values' style={{lineHeight: '30px'}}>
                                    <div>{this.state.clickedOffer.payment} &#x20bd;/Мес.</div>
                                </div>
                                <div className='content__card_options-names'>
                                    <div>платеж</div>
                                </div>
                            </div>
                            <div style={{marginLeft: '5%'}}>
                                <div className='content__card_options-values' style={{lineHeight: '30px'}}>
                                    <div>{this.state.clickedOffer.rate}%</div>
                                </div>
                                <div className='content__card_options-names'>
                                    <div>Ставка</div>
                                </div>
                            </div>
                        </div>
                        <div className='content__card_subtitle'>
                            <div>(без справки о доходах по форме банка)</div>
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <div className='content__info_header'>Мы ждём вас по адресу:</div>
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <div>
                                    <Location />
                                </div>
                                <div className='content__info_text'>г. Астрахань, ул. Кирова, 20/3, литер А, пом. 37</div>
                            </div>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <div className='content__info_header'>Не забудьте с собой взять:</div>
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <div>
                                    <Passport />
                                </div>
                                <div className='content__info_text'>паспорт гражданина РФ</div>
                                <div>
                                    <BankForm />
                                </div>
                                <div className='content__info_text'>справка по форме банка</div>
                            </div>
                        </div>
                    </div>
                    <div style={{width: '100%', display: 'flex', justifyContent: 'flex-start'}}>
                        <button className='content__card_btn' style={{marginBottom: 36}} onClick={()=>this.handleClickMoney()}>
                            На главную страницу
                        </button>
                    </div>
                </div>


            </>
        )
    }
    renderCards = (offers, page) => {
        let offersSorted = offers.slice();

        this.setState({offersSorted: [offersSorted[page], offersSorted[page+1]]})
        
        
    }
    handleClickPage = course => {
        this.renderCards(this.state.Offers, this.state.page+course)
        this.setState({page: this.state.page+course})

    }
    handleClickMoney = offer => {
        this.setState({clickedOffer: offer, giveMeMoney: offer ? true : false})
    }
    componentDidMount(){
        
        Offers.sort((a, b)=>{
            return a.priority - b.priority;
        })
        Offers[0].first = true
        this.setState({Offers: Offers})
        this.renderCards(Offers,0);
    }
    render(){
        console.log(this.state);
        

        return (
            <main className="content">
                <div className='content__main'>
                    {
                        this.state.giveMeMoney
                            ?   this.renderSparta()
                            :   this.renderMainContent()
                    }
                    
                </div>
                <div className='content__media'>
                    <div className='superman' />
                </div>
            </main>
        );
    }
}